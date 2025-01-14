import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { Clothes } from 'src/entityes/clothesentity';

@Controller('clothes')
export class ClothesController {
    constructor(private readonly clothesService: ClothesService) {}

    @Get()
    async findAll(): Promise<Clothes[]> {
        return this.clothesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Clothes> {
        return this.clothesService.findOne(id);
    }

    @Post()
    async create(@Body() clothes: Clothes): Promise<Clothes> {
        return this.clothesService.create(clothes);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() clothes: Clothes): Promise<Clothes> {
        return this.clothesService.update(id, clothes);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.clothesService.delete(id);
    }

    @Get('name/:name')
    async findByName(@Param('name') name: string): Promise<Clothes[]> {
        return this.clothesService.findByName(name);
    }
}
