
import BaseController from './BaseController';
import BaseControllerImpl from './BaseControllerImpl';
import UserService from '../service/UserService';
import User from '../model/User'




class UserController extends BaseControllerImpl<User> implements BaseController<User>{


    private userService: UserService;

    constructor(userService: UserService) {
        super(userService);
        this.userService = userService;
    }


}

export default UserController;