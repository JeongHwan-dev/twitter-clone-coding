import { dbService, storageService } from "fBase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

const Tweet = ({ tweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(tweetObj.text);

  // [DELETE] 트윗 삭제 핸들러
  const onDeleteClick = async () => {
    const ok = await swal("삭제하시겠습니까?", {
      buttons: ["취소", "완료"],
    });

    if (ok) {
      await dbService.doc(`tweets/${tweetObj.id}`).delete();
      await storageService.refFromURL(tweetObj.attachmentUrl).delete();
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);

  // [UPDATE] 트윗 수정 핸들러
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`tweets/${tweetObj.id}`).update({
      text: newTweet,
    });
    setEditing(false);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewTweet(value);
  };

  return (
    <div className="tweet">
      {editing ? (
        <>
          {isOwner && (
            <>
              <form className="container tweetEdit" onSubmit={onSubmit}>
                <input
                  className="formInput"
                  type="text"
                  placeholder="수정할 내용을 입력하세요."
                  value={newTweet}
                  required
                  autoFocus
                  onChange={onChange}
                />
                <input className="formBtn" type="submit" value="수정하기" />
              </form>
              <button className="formBtn cancelBtn" onClick={toggleEditing}>
                취소
              </button>
            </>
          )}
        </>
      ) : (
        <>
          {tweetObj.attachmentUrl ? (
            <>
              <h4 className="tweet_attachment">{tweetObj.text}</h4>
              <img src={tweetObj.attachmentUrl} />
              {/* 오너일때만 버튼 표기 */}
              {isOwner && (
                <div className="tweet_actions">
                  <span onClick={onDeleteClick}>
                    <FontAwesomeIcon icon={faTrash} />
                  </span>
                  <span onClick={toggleEditing}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </span>
                </div>
              )}
            </>
          ) : (
            <>
              <h4>{tweetObj.text}</h4>
              {/* 오너일때만 버튼 표기 */}
              {isOwner && (
                <div className="tweet_actions">
                  <span onClick={onDeleteClick}>
                    <FontAwesomeIcon icon={faTrash} />
                  </span>
                  <span onClick={toggleEditing}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </span>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Tweet;
