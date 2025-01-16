import { Injectable } from '@nestjs/common';
import { User } from 'src/entityes/userentity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    /**
     * Recupera todos los usuarios.
     * @returns Una promesa que resuelve a un array de usuarios.
     */
    async findAll() {
        try {
            return await this.userRepository.findAll();
        } catch (error) {
            // Manejar errores aquí
            throw new Error(`Error al encontrar todos los usuarios: ${error.message}`);
        }
    }

    /**
     * Recupera un usuario por su ID.
     * @param id - El ID del usuario a recuperar.
     * @returns Una promesa que resuelve al usuario.
     */
    async findOne(id: string): Promise<User> {
        try {
            return await this.userRepository.findOne(id);
        } catch (error) {
            // Manejar errores aquí
            throw new Error(`Error al encontrar el usuario con ID ${id}: ${error.message}`);
        }
    }

    /**
     * Recupera un usuario por su correo electrónico.
     * @param email - El correo electrónico del usuario a recuperar.
     * @returns Una promesa que resuelve al usuario.
     */
    async findByEmail(email: string): Promise<User> {
        try {
            return await this.userRepository.findByEmail(email);
        } catch (error) {
            // Manejar errores aquí
            throw new Error(`Error al encontrar el usuario con correo electrónico ${email}: ${error.message}`);
        }
    }

    /**
     * Crea un nuevo usuario.
     * @param user - El usuario a crear.
     * @returns Una promesa que resuelve al usuario creado.
     */
    async create(user: User): Promise<Partial<User>> {
        try {
            return await this.userRepository.create(user);
        } catch (error) {
            // Manejar errores aquí
            throw new Error(`Error al crear el usuario: ${error.message}`);
        }
    }

    /**
     * Actualiza un usuario existente por su ID.
     * @param id - El ID del usuario a actualizar.
     * @param user - Los datos actualizados del usuario.
     * @returns Una promesa que resuelve al usuario actualizado.
     */
    async update(id: string, user: User): Promise<User> {
        try {
            return await this.userRepository.update(id, user);
        } catch (error) {
            // Manejar errores aquí
            throw new Error(`Error al actualizar el usuario con ID ${id}: ${error.message}`);
        }
    }

    /**
     * Elimina un usuario por su ID.
     * @param id - El ID del usuario a eliminar.
     * @returns Una promesa que se resuelve cuando el usuario es eliminado.
     */
    async delete(id: string): Promise<string> {
        try {
            await this.userRepository.delete(id);
            return 'Usuario eliminado con éxito'; // or some other string value
        } catch (error) {
            // Manejar errores aquí
            throw new Error(`Error al eliminar el usuario con ID ${id}: ${error.message}`);
        }
    }
}
