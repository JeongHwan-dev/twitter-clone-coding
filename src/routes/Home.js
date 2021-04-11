import { dbService, storageService } from "fBase";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import Tweet from "components/Tweet";

const Home = ({ userObj }) => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const [attachment, setAttachment] = useState("");

  // 구식 방법 (새로고침 필요)
  // const getTweets = async () => {
  //   const dbTweets = await dbService.collection("tweets").get();
  //   dbTweets.forEach((document) => {
  //     const tweetObject = {
  //       ...document.data(),
  //       id: document.id,
  //     };
  //     // console.log(document.data()); // 나중에 삭제
  //     setTweets((prev) => [tweetObject, ...prev]); // .. 이전 값에 접근
  //   });
  // };

  useEffect(() => {
    // getTweets();
    // DB에 이벤트 발생 시
    dbService.collection("tweets").onSnapshot((snapshot) => {
      const tweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTweets(tweetArray);
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";

    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
      console.log(attachmentUrl);
      console.log(userObj.uid);
    }

    const tweetObj = {
      text: tweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };

    await dbService.collection("tweets").add(tweetObj);
    setTweet("");
    setAttachment("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();

    // 파일 읽기 끝나면 finidhedEvent를 받는다.
    reader.onloadend = (finishedEvent) => {
      console.log(finishedEvent);
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };

    reader.readAsDataURL(theFile); // 파일 읽기
  };

  const onClearAttachment = () => setAttachment(null);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={tweet}
          onChange={onChange}
          placeholder="내용을 입력하세요."
          maxLength={120}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Tweet" />
        {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
      </form>
      <div>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweetObj={tweet}
            isOwner={tweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
