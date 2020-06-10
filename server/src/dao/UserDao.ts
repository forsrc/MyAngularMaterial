import BaseDao from './BaseDao';
import User from '../model/User';
import BaseDaoImpl from './BaseDaoImpl';


class UserDao extends BaseDaoImpl<any, User> implements BaseDao<any, User> {

    public getTableName(): string {
        return 'user';
    }


}

export default UserDao;