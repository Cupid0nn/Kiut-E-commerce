import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ClothesService } from './Clothes.service';
import { Clothes } from 'src/entityes/Clothesentity';

@Controller('Clothes')
export class ClothesController {
    constructor(private readonly ClothesService: ClothesService) {}

}
