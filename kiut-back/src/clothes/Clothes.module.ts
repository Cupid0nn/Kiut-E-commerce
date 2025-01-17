import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clothes } from 'src/entityes/clothesentity';
import { ClothesService } from './clothes.service';
import { ClothesRepository } from './clothes.repository';
import { ClothesController } from './clothes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Clothes])],
  providers: [ClothesService, ClothesRepository],
  controllers: [ClothesController],
  exports: [ClothesService],
})
export class ClothesModule {}
