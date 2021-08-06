import BaseService from './BaseService';
import User from '../model/User';
import BaseServiceImpl from './BaseServiceImpl';
import UserDao from '../dao/UserDao';

class UserService extends BaseServiceImpl<User> implements BaseService<User> {

    private userDao: UserDao;

    constructor(userDao: UserDao) {
        super(userDao);
        this.baseDao = userDao;
    }

}

export default UserService;