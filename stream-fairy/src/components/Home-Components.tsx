import {  useEffect, useState } from "react";
import userServices from "services/user.services";



export const  HomeComponents : React.FC = () => {
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        userServices.getPublicContent().then(
            (response) => {
                setContent(response.data);
          },
          (error) => {
            const _content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
    
            setContent(_content);
          }
        );
      }, []);
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{content}</h3>
        </header>
      </div>
    );
  }
