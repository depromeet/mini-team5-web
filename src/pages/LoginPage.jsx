import React from "react";
import HttpConnector from "../network/HttpConnector";
import splash from "../resources/images/boob.gif";
import {Transition} from 'semantic-ui-react'
import {LoginBackground, LoginInputLine} from '../Components/login';

class LoginPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      nickname: "",

      contents: []
    }

    this.onTextChange = this.onTextChange.bind(this);
    this.onLogin = this.onLogin.bind(this);

    setTimeout(() => {
      this.setState({
        contents: [...this.state.contents, (
            <div key="background">
              <LoginBackground/>
            </div>
        )],
        animation: "fly right"
      })
    }, 2000);

    setTimeout(() => {
      this.setState({
        contents: [...this.state.contents, (
            <div key="inputline">
              <LoginInputLine/>
            </div>
        )]
      })
    }, 3000);
  }

  render() {
    return (
      <div className="login-container">
        {/*<textarea onChange={this.onTextChange}/>*/}
        {/*<button onClick={this.onLogin}>로그인</button>*/}
        <img className="login-splash" src={splash}/>
        <Transition.Group animation={this.state.animation} duration={1000}>
          {this.state.contents}
        </Transition.Group>
      </div>
    );
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

export default LoginPage;