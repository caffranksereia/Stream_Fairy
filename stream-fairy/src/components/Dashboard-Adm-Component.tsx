import { Component } from "react";
import userServices from "services/user.services";
import { Link} from "react-router-dom";

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
        </header>
        <div>
            <NavLink to="/users">
                
            </NavLink>
        <nav>
            <ul className="menu">
                    <li><a href="#">Gestao de Filme</a></li>
                    <li><a href="#">Gestao de Usuario</a></li>
                </ul>
         </nav>
        </div>
      </div>
    );
  }
}