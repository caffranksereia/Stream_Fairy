import { Routes, Route, Outlet } from "react-router-dom";
import DashboardUserComponents from "components/Dashboard-User-Component";
import RegisterComponent from "components/Register-Component";
import LoginComponent from "components/Login-Component";
import { ListComponentUser } from "components/List-Component.User";
import { ListComponentMovie } from "components/List-Component.Movie";
import { DashboardAdmComponents } from "components/Dashboard-Adm-Component";
import { ProfileComponents } from "components/Profile-Component";
import { ForgotPasswordComponents } from "components/Forget-Components.Pass";
import Header  from "components/header";
import { Footer } from "components/Footer";

const  App =()=>{
  
      return (
        <div>
            <Header/>
            <Outlet/>
            <div className="container mt-3">
            <Routes>
              <Route path="/home" element={<LoginComponent />} />
              <Route path="/register" element={<RegisterComponent />} />
              <Route path="/profile" element={<ProfileComponents />} />
              <Route path="/user" element={<DashboardUserComponents />} />
              <Route path="/admin" element={<DashboardAdmComponents />} />
              <Route path="/users" element={<ListComponentUser />} />
              <Route path="/movies" element={<ListComponentMovie />} />
              <Route path="/forgot_Password" element={<ForgotPasswordComponents />} />
            </Routes>
          </div>
            <Footer/>
        </div>
      );
    
  }

export default App;
