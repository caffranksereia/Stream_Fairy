import { Component } from "react";
import userServices from "services/user.services";
import { Link} from "react-router-dom";
import { NavBar } from "./NavBar";

type Props = {};

type State = {
  content: string;
}

export default class DashboardAdmComponents extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    userServices.getAdmBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
          <NavBar/>
        </header>
        </div>
    );
  }
}