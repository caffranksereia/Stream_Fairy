import { Component } from "react";
import {Link } from "react-router-dom";
import { IUser } from "interfaces/IUser";
import authService from "services/auth.service";
import eventBus from "common/ EventBus";

type Props = {};

type State = {
  showModeratorBoard: boolean,
  showAdminBoard: boolean,
  currentUser: IUser | undefined
}

export default class Header extends Component <Props, State > {
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
    
        eventBus.on("logout", this.logOut);
      }
    
      componentWillUnmount() {
        eventBus.remove("logout", this.logOut);
      }
    
      logOut() {
        authService.logout();
        this.setState({
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined,
        });
      }
    render(){
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
       
        
    
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
            Stream Fairy
        </Link>
        <div className="navbar-nav mr-auto">
          <a className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </a>

          {showModeratorBoard && (
            <a className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </a>
          )}

          {showAdminBoard && (
            <a className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </a>
          )}

          {currentUser && (
            <a className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </a>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <a className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </a>
            <a className="nav-item">
              <a href="/login" className="nav-link" onClick={this.logOut}>
                LogOut
              </a>
            </a>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <a className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </a>
          </div>
        )}
        </nav>
    );
   };
}