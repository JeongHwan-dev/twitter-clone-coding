import React, { useState } from "react";
import { storageService, dbService } from "fBase";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const TweetFactory = ({ userObj }) => {
  const [tweet, setTweet] = useState("");
  const [attachment, setAttachment] = useState("");

  // [CREATE] 트윗 생성 핸들러
  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";

    if (tweet === "") {
      return;
    }
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
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

  // 새 트윗 작성 핸들러
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
  };

  // 첨부파일 핸들러
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
    if (Boolean(theFile)) {
      reader.readAsDataURL(theFile); // 파일 읽기
    }
  };

  // 업로드 대기 상태인 첨부파일 취소 핸들러
  const onClearAttachment = () => setAttachment("");

  return (
    <form className="factoryForm" onSubmit={onSubmit}>
      <div className="factoryInput_container">
        <input
          className="factoryInput_input"
          type="text"
          value={tweet}
          onChange={onChange}
          placeholder="내용을 입력하세요."
          maxLength={120}
        />
        <input className="factoryInput_arrow" type="submit" value="&rarr;" />
      </div>
      <label for="attach-file" className="factoryInput_label">
        <span>Add photos</span>
        <FontAwesomeIcon icon={faPlus} />
      </label>
      <input
        id="attach-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{ opacity: 0 }}
      />
      {attachment && (
        <div className="factoryForm_attachment">
          <img src={attachment} style={{ backgroundImage: attachment }} />
          <div className="factoryForm_clear" onClick={onClearAttachment}>
            <span>취소</span>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      )}
    </form>
  );
};

export default TweetFactory;
