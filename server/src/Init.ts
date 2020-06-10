
import UserService from './service/UserService';
import UserDao from './dao/UserDao';


let userDao: UserDao = new UserDao();
let userService: UserService = new UserService(userDao);



const Init = {
    userService: userService,
    userDao: userDao
}

export default Init;