import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clothes } from 'src/entityes/Clothesentity';
import { ClothesController } from './Clothes.controller';
import { ClothesService } from './Clothes.service';
import { ClothesRepository } from './Clothes.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Clothes])],
    controllers: [ClothesController],
    providers: [ClothesService, ClothesRepository],
})
export class ClothesModule {}