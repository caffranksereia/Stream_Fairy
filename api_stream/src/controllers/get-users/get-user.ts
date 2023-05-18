import { IGetUsersContollers, IGetUsersResponsitory } from "./protocols";

export class GetUsersController implements IGetUsersContollers {
    constructor(private readonly getUsersRepository: IGetUsersResponsitory) {
        this.getUsersRepository = getUsersRepository
    }
    handle() {

    }
}