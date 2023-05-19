import { useEffect, useState } from "react";
import userServices from "services/user.services";
import eventBus from "common/ EventBus";

type Props = {};

type State = {
  content: string;
}

export const DashboardAdmComponents:React.FC = () => {
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        userServices.getAdmBoard().then(
        (response) => {
          setContent(response.data);
        },
        (error) => {
          const _content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
  
          setContent(_content);
  
          if (error.response && error.response.status === 401) {
            eventBus.dispatch("logout");
          }
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
  };
  