import { Injectable } from '@nestjs/common';
import { Clothes } from 'src/entityes/clothesentity';
import { ClothesRepository } from './clothes.repository';

@Injectable()
export class ClothesService {
    constructor(private readonly clothesRepository: ClothesRepository) {}

    /**
     * Crea una nueva prenda de ropa.
     * @param clothes - La prenda de ropa a crear.
     * @returns Una promesa que resuelve a la prenda de ropa creada.
     */
    async create(clothes: Clothes): Promise<Clothes> {
        try {
            return await this.clothesRepository.create(clothes);
        } catch (error) {
            throw new Error(`Error al crear la prenda: ${error.message}`);
        }
    }

    /**
     * Recupera todas las prendas de ropa.
     * @returns Una promesa que resuelve a un array de prendas de ropa.
     */
    async findAll(): Promise<Clothes[]> {
        try {
            return await this.clothesRepository.findAll();
        } catch (error) {
            throw new Error(`Error al encontrar todas las prendas: ${error.message}`);
        }
    }

    /**
     * Recupera una prenda de ropa por su ID.
     * @param id - El ID de la prenda a recuperar.
     * @returns Una promesa que resuelve a la prenda de ropa.
     */
    async findOne(id: string): Promise<Clothes> {
        try {
            return await this.clothesRepository.findOne(id);
        } catch (error) {
            throw new Error(`Error al encontrar la prenda con ID ${id}: ${error.message}`);
        }
    }

    /**
     * Actualiza una prenda de ropa existente por su ID.
     * @param id - El ID de la prenda a actualizar.
     * @param clothes - Los datos actualizados de la prenda de ropa.
     * @returns Una promesa que resuelve a la prenda de ropa actualizada.
     */
    async update(id: string, clothes: Clothes): Promise<Clothes> {
        try {
            return await this.clothesRepository.update(id, clothes);
        } catch (error) {
            throw new Error(`Error al actualizar la prenda con ID ${id}: ${error.message}`);
        }
    }

    /**
     * Elimina una prenda de ropa por su ID.
     * @param id - El ID de la prenda a eliminar.
     * @returns Una promesa que se resuelve cuando la prenda de ropa es eliminada.
     */
    async delete(id: string): Promise<void> {
        try {
            await this.clothesRepository.delete(id);
        } catch (error) {
            throw new Error(`Error al eliminar la prenda con ID ${id}: ${error.message}`);
        }
    }

    /**
     * Encuentra prendas de ropa por su nombre.
     * @param name - El nombre de la prenda a buscar.
     * @returns Una promesa que resuelve a un array de prendas de ropa coincidentes.
     */
    async findByName(name: string): Promise<Clothes[]> {
        try {
            return await this.clothesRepository.findByName(name);
        } catch (error) {
            throw new Error(`Error al encontrar prendas con el nombre ${name}: ${error.message}`);
        }
    }
}
