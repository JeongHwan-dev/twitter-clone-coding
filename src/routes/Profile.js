import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "fBase";
import swal from "sweetalert";

const Profile = ({ userObj, refreshUser }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    const ok = await swal("수정하시겠습니까?", {
      buttons: ["취소", "완료"],
    });

    if (ok) {
      event.preventDefault();

      if (userObj.displayName !== newDisplayName) {
        await userObj.updateProfile({
          displayName: newDisplayName,
        });
        refreshUser();
        swal(`'${newDisplayName}' 으로 닉네임 변경이 완료되었습니다.`);
      }
    } else {
      refreshUser();
    }
  };

  return (
    <div className="container">
      <form className="profileForm" onSubmit={onSubmit}>
        <input
          className="formInput"
          type="text"
          autoFocus
          value={newDisplayName}
          onChange={onChange}
          placeholder="새 닉네임을 입력해주세요."
        />
        <input
          className="formBtn"
          type="submit"
          value="프로필 수정"
          style={{ marginTop: 10 }}
        />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        로그아웃
      </span>
    </div>
  );
};

export default Profile;
