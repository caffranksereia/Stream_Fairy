import { api } from "api-config.service";
import{IUser} from "../interfaces/IUser"
class AuthService {
    login(username: string, password: string){
        return  api.post(
            "singin",{
                username,
                password
            }
        ).then(response =>{
            if(response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data
        })
    }
    logout(){
        localStorage.removeItem("user")
    }
    register(username:string, password: string, name:string, email: string, role?:string) {
        return api.post("signup", {
            username,
            password,
            name,
            email

        })
    }

    getCurrentUser() {
        const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
    }
}

export default new AuthService()