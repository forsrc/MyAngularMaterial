import BaseDao from './BaseDao';
import User from '../model/User';
import BaseDaoImpl from './BaseDaoImpl';


class UserDao extends BaseDaoImpl<User> implements BaseDao<User> {

    public getTableName(): string {
        return 'user';
    }

    public getPk(): string[] {
        return ["username"];
    }

}

export default UserDao;