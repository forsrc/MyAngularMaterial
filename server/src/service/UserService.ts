import BaseService from './BaseService';
import User from '../model/User';

class UserService implements BaseService<String, User> {

    list(): Array<User> {
        return [];
    }

    save(User: User): User {
        return {} as User;
    }

    get(String: String): User {
        return {} as User;
    }

    update(String: String, t: User): User {
        return {} as User;
    }

    delete(String: String): void {

    }
}



export default BaseService;