import BaseDao from './BaseDao';
import UserRole from '../model/UserRole';
import BaseDaoImpl from './BaseDaoImpl';


class UserRoleDao extends BaseDaoImpl<UserRole> implements BaseDao<UserRole> {

    public getTableName(): string {
        return 'user_role';
    }

    public getPk(): string[] {
        return ["username", "role"];
    }

}

export default UserRoleDao;