import React from "react";
import bgImg from "../../resources/images/main_01.jpg";
import loginTitleImg from "../../resources/images/login_title.png";

class LoginBackground extends React.Component {
  render() {
    return (
      <div>
        <img className="login-background" src={bgImg} alt="메인 화면"/>
        <img className="login-title" src={loginTitleImg} alt="제목"/>
      </div>
    );
  }
}

export default LoginBackground;