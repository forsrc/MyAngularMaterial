
import BaseController from './BaseController';
import BaseControllerImpl from './BaseControllerImpl';
import UserRoleService from '../service/UserRoleService';
import UserRole from '../model/UserRole'




class UserRoleController extends BaseControllerImpl<UserRole> implements BaseController<UserRole>{


    private userRoleService: UserRoleService;

    constructor(userrRoleService: UserRoleService) {
        super(userrRoleService);
        this.userRoleService = userrRoleService;
    }


}

export default UserRoleController;