import BaseService from './BaseService';
import UserRole from '../model/UserRole';
import BaseServiceImpl from './BaseServiceImpl';
import UserRoleDao from '../dao/UserRoleDao';

class UserRoleService extends BaseServiceImpl<UserRole> implements BaseService<UserRole> {

    private userRoleDao: UserRoleDao;

    constructor(userRoleDao: UserRoleDao) {
        super(userRoleDao);
        this.userRoleDao = userRoleDao;
    }

}

export default UserRoleService;