import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entityes/userentity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get() // Proteger con Admin Y SuperAdmin
    async findAll() {
        return this.userService.findAll();
    }

    @Get(':id')// proteger con Admin Y SuperAdmin
    async findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(id);
    }

    @Get('email/:correoElectronico') // proteger con Admin Y SuperAdmin
    async findByEmail(@Param('correoElectronico') email: string): Promise<User> {
        return this.userService.findByEmail(email);
    }

    @Post() // Proteger con Admin Y SuperAdmin
    async create(@Body() user: User): Promise<Partial<User>> {
        return this.userService.create(user);
    }

    @Put(':id') // Proteger con Admin Y SuperAdmin
    async update(@Param('id') id: string, @Body() user: User): Promise<User> {
        return this.userService.update(id, user);
    }

    @Delete(':id') // Proteger con Admin Y SuperAdmin
    async delete(@Param('id') id: string): Promise<{message : string}> {
        try {
            await this.userService.delete(id);
            return { message: 'Usuario borrado con exito' };
        } catch (error) {
            throw new Error(`Error al eliminar el usuario con ID ${id}: ${error.message}`);
        }
        }
        
    }
