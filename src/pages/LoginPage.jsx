import React from "react";

class LoginPage extends React.Component {
  constructor(props){
    super(props);

    this.stste = ({
      nickname: ""
    });

    this.onTextChange = this.onTextChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  render() {
    return (
      <div>
        <textarea onChange={this.onTextChange}/>
        <button onClick={this.onLogin}>로그인</button>
      </div>
    );
  }

  onTextChange(e) {
    const text = e.target.value;
    this.setState({nickname: text});
  }

  onLogin() {
    alert(this.state.nickname);
  }
}

export default LoginPage;