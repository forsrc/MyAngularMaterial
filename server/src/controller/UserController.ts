
import BaseController from './BaseController';
import BaseControllerImpl from './BaseControllerImpl';
import UserService from '../service/UserService';
import User from '../model/User'




class UserController extends BaseControllerImpl<User> implements BaseController<User>{


    private userServic: UserService;

    constructor(userServic: UserService) {
        super(userServic);
        this.userServic = userServic;
    }


}

export default UserController;