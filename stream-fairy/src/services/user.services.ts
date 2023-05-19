import { api } from "api-config.service";
import authHeader from "./auth-header";


class UserService {
    getPublicContent() {
        return api.get('all')
    }
    getUserBoard() {
        return api.get('user', {headers: authHeader()})
    }
    getAdmBoard() {
        return api.get('admin', {headers: authHeader()})
    }
}

export default new UserService()