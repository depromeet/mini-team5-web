import React from "react";
import HttpConnector from "../../network/HttpConnector";

class LoginInputLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "",
      isFocused: false,
      isPlaceHolderDisplay: true
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  render() {
    const placeholder = "ENTER\nYOUR\nNAME";

    return (
      <div className="login-input-line">
        <hr className="login-hr"/>
        {
          this.state.isPlaceHolderDisplay
            ? <div className="login-placeholder" onClick={this.onFocus}>{placeholder}</div>
            : <input className="login-input" type="text" onChange={this.onTextChange} onBlur={this.onBlur} ref={(input) => {this.nameInput = input;}}/>
        }
        <button className="login-button" onClick={this.onLogin}>START</button>
      </div>
    );
  }

  onTextChange(e) {
    const text = e.target.value;
    this.setState({nickname: text});
  }

  onFocus() {
    this.setState({isPlaceHolderDisplay: false});
  }

  onBlur() {
    if(!this.state.nickname){
      this.setState({isPlaceHolderDisplay: true});
    }
  }

  async onLogin() {
    const nickname = this.state.nickname;

    if (!nickname) {
      alert("닉네임을 입력해주세요!");
      return;
    }

    const res = await HttpConnector.login({ nickName: nickname });
    if (res) {
      this.props.history.push("boards");
    }
    else {
      alert("서버에서 문제가 발생했습니다!");
    }
  }

  componentDidUpdate() {
    if(!this.state.isPlaceHolderDisplay){
      this.nameInput.focus();
    }
  }
}

export default LoginInputLine;