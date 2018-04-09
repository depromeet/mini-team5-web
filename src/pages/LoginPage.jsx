import React from "react";
import splash from "../resources/images/boob.gif";
import { Transition } from "semantic-ui-react";
import { LoginBackground, LoginInputLine } from "../Components/login";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: []
    };

    setTimeout(() => {
      this.setState({
        contents: [...this.state.contents, (
          <div key="background">
            <LoginBackground />
          </div>
        )],
        animation: "fly right"
      });
    }, 2000);

    setTimeout(() => {
      this.setState({
        contents: [...this.state.contents, (
          <div key="inputline">
            <LoginInputLine history={this.props.history} />
          </div>
        )]
      });
    }, 3000);
  }

  render() {
    return (
      <div className="login-container">
        <img className="login-splash" src={splash} alt="로그인 애니메이션 이미지" />
        <Transition.Group animation={this.state.animation} duration={1000}>
          {this.state.contents}
        </Transition.Group>
      </div>
    );
  }
}

export default LoginPage;