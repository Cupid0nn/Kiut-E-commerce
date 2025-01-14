import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entityes/userentity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(id);
    }

    @Get('email/:email')
    async findByEmail(@Param('email') email: string): Promise<User> {
        return this.userService.findByEmail(email);
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() user: User): Promise<User> {
        return this.userService.update(id, user);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.userService.delete(id);
    }
}
