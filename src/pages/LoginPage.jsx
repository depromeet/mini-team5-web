import React from "react";
import {Link} from "react-router-dom";

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
        <button onClick={this.onLogin}>
          <Link to="/boards">로그인</Link>
        </button>
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