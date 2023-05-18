import { IGetUsersContollers, IGetUsersResponsitory } from "./protocols";

export class GetUsersController implements IGetUsersContollers {
    constructor(private readonly getUsersRepository: IGetUsersResponsitory) {
        this.getUsersRepository = getUsersRepository
    }
    async handle() {
        try {const users = await this.getUsersRepository.getUsers()
                    return {statusCode: 200,
                                                body: users 
                                            }
                                        } catch(error){
                                            return {statusCode: 500,
                                                body: "Something went wrong" 
                                            }
        
        }
    }
}