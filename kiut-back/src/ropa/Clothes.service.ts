import { Injectable } from '@nestjs/common';
import { Clothes } from 'src/entityes/Clothesentity';
import { ClothesRepository } from './Clothes.repository';

@Injectable()
export class ClothesService {
    constructor(private readonly ClothesRepository: ClothesRepository) {}

}
