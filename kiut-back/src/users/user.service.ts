import { Injectable } from '@nestjs/common';
import { User } from 'src/entityes/userentity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private readonly UserRepository: UserRepository) {}

}
