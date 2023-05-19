import { Routes, Route, Link } from "react-router-dom";
import { Component } from "react"
import DashboardUserComponents from "components/Dashboard-User-Component";
import RegisterComponent from "components/Register-Component";
import Home from "pages/Home";
import LoginComponent from "components/Login-Component";
import { IUser } from "interfaces/IUser";
import authService from "services/auth.service";
import { ListComponentUser } from "components/List-Component.User";
import { ListComponentMovie } from "components/List-Component.Movie";
import EventBus from "./common/ EventBus"
import { DashboardAdmComponents } from "components/Dashboard-Adm-Component";
import { ProfileComponents } from "components/Profile-Component";

type Props = {};

type State = {
  showModeratorBoard: boolean,
  showAdminBoard: boolean,
  currentUser: IUser | undefined
}

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined,
        };
      }

      componentDidMount() {
        const user = authService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,
            showAdminBoard: user.roles.includes("ROLE_ADMIN"),
          });
        }
    
        EventBus.on("logout", this.logOut);
      }
    
      componentWillUnmount() {
        EventBus.remove("logout", this.logOut);
      }
    
      logOut() {
        authService.logout();
        this.setState({
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined,
        });
      }
    

    render() {
      const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
  
      return (
        <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
          <div className="container mt-3">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/register" element={<RegisterComponent />} />
              <Route path="/profile" element={<ProfileComponents />} />
              <Route path="/user" element={<DashboardUserComponents />} />
              <Route path="/admin" element={<DashboardAdmComponents />} />
              <Route path="/users" element={<ListComponentUser />} />
              <Route path="/movies" element={<ListComponentMovie />} />
            </Routes>
          </div>
        </div>
      );
    }
  }

export default App;
