import { IUser } from "interfaces/IUser";
import { Component } from "react";
import { Navigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import authService from "services/auth.service";

interface RouterProps {
    history: string;
  }
  type Props = {};
  type State = {
    username: string,
    password: string,
    loading: boolean,
    message: string
  };

export default class LoginComponent extends Component <Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    
        this.state = {
        redirect: null,
          username: "",
          password: "",
          loading: false,
          message: ""
        };
      }
      componentDidMount() {
        const currentUser = authService.getCurrentUser();
    
        if (currentUser) {
          this.setState({ redirect: "/profile" });
        };
      }

      componentWillUnmount() {
        window.location.reload();
      }

      handleLogin(formValue: { username: string; password: string }) {
        const { username, password } = formValue;
    
        this.setState({
          message: "",
          loading: true
        });
        authService.login(username, password).then(
            () => {
              this.setState({
                redirect: "/profile"
              });
            },
            error => {
              ...
            }
          );
        }
      
    render(){

        if (this.state.redirect) {
            return <Navigate to={this.state.redirect} />
          }
      
          const { loading, message } = this.state;
      
          const initialValues = {
            username: "",
            password: "",
          };
      
    
        return (
            <Formik
            initialValues={initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.handleLogin}
          >
            <Form>
              <div>
                <label htmlFor="username">Password</label>
                <Field name="username" type="text" />
                <ErrorMessage name="username" component="div" />
              </div>
    
              <div>
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" />
                <ErrorMessage name="password" component="div" />
              </div>
    
              <div>
                <button type="submit" disabled={loading}>
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        )
      }
    }