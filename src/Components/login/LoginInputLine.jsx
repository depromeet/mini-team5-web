import React from 'react'
import HttpConnector from "../../network/HttpConnector";

class LoginInputLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: ""
    }

    this.onTextChange = this.onTextChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  render() {
    return (
        <div className="login-input-line">
          <textarea onChange={this.onTextChange}/>
          <button onClick={this.onLogin}>로그인</button>
        </div>
    )
  }

  onTextChange(e) {
    const text = e.target.value;
    this.setState({nickname: text});
  }

  async onLogin() {
    const nickname = this.state.nickname;

    if (!nickname) {
      alert("닉네임을 입력해주세요!");
      return;
    }

    const res = await HttpConnector.login({nickName: nickname});
    if (res) {
      alert("success");
      this.props.history.push("boards");
    }
    else {
      alert("서버에서 문제가 발생했습니다!");
    }
  }
}

export default LoginInputLine;