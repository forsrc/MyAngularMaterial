
import BaseController from './BaseController';
import BaseControllerImpl from './BaseControllerImpl';
import UserRoleService from '../service/UserRoleService';
import UserRole from '../model/UserRole'




class UserRoleController extends BaseControllerImpl<UserRole> implements BaseController<UserRole>{


    private userRoleServic: UserRoleService;

    constructor(userrRoleServic: UserRoleService) {
        super(userrRoleServic);
        this.userRoleServic = userrRoleServic;
    }


}

export default UserRoleController;