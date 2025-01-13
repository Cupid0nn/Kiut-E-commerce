import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './User.service';
import { User } from 'src/entityes/userentity';

@Controller('User')
export class UserController {
    constructor(private readonly UserService: UserService) {}

}
