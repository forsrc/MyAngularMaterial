import BaseService from './BaseService';
import User from '../model/User';
import BaseServiceImpl from './BaseServiceImpl';
import UserDao from '../dao/UserDao';

class UserService extends BaseServiceImpl<any, User> implements BaseService<any, User> {

    private userDao: UserDao;

    constructor(userDao: UserDao) {
        super(userDao);
        this.baseDao = userDao;
    }

    public getTableName(): string {
        return 'user';
    }

}

export default UserService;