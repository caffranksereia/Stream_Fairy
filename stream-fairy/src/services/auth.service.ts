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
    register(user: IUser) {
        return api.post("signup", {
            user
        })
    }

    getCurrentUser() {
        const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
    }
}

export default new AuthService()