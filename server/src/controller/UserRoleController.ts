
import BaseController from './BaseController';
import BaseControllerImpl from './BaseControllerImpl';
import UserRoleService from '../service/UserRoleService';
import UserRole from '../model/UserRole'
import express from 'express';




class UserRoleController extends BaseControllerImpl<UserRole> implements BaseController<UserRole>{


    private userRoleService: UserRoleService;

    constructor(userRoleService: UserRoleService) {
        super(userRoleService);
        this.userRoleService = userRoleService;
    }


}

export default UserRoleController;