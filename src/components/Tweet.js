import { dbService, storageService } from "fBase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Tweet = ({ tweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(tweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("삭제하시겠습니까?");
    console.log(ok);
    if (ok) {
      // delete tweet
      await dbService.doc(`tweets/${tweetObj.id}`).delete();
      await storageService.refFromURL(tweetObj.attachmentUrl).delete();
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);

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
                  placeholder="Edit your tweet"
                  value={newTweet}
                  required
                  autoFocus
                  onChange={onChange}
                />
                <input className="formBtn" type="submit" value="Update Tweet" />
              </form>
              <button className="formBtn cancelBtn" onClick={toggleEditing}>
                Cancel
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
