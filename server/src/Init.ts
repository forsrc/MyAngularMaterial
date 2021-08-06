
import UserController from './controller/UserController';
import UserService from './service/UserService';
import UserDao from './dao/UserDao';

import UserRoleController from './controller/UserRoleController';
import UserRoleService from './service/UserRoleService';
import UserRoleDao from './dao/UserRoleDao';



let userDao: UserDao = new UserDao();
let userService: UserService = new UserService(userDao);
let userController: UserController = new UserController(userService);

let userRoleDao: UserRoleDao = new UserRoleDao();
let userRoleService: UserRoleService = new UserRoleService(userRoleDao);
let userRoleController: UserRoleController = new UserRoleController(userRoleService);


const Init = {
    userService: userService,
    userDao: userDao,
    userController: userController,
    userRoleService: userRoleService,
    userRoleDao: userRoleDao,
    userRoleController: userRoleController
}

export default Init;