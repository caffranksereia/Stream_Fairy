import { IGetUsersContollers, IGetUsersResponsitory } from "./protocols";

export class GetUsersController implements IGetUsersContollers {
    getUsersRepository: IGetUsersResponsitory
    constructor(getUsersRepository: IGetUsersResponsitory) {
        this.getUsersRepository = getUsersRepository
    }
    handle() {

    }
}