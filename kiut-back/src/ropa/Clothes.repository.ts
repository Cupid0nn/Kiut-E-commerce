import { InjectRepository } from '@nestjs/typeorm';
import { Clothes } from 'src/entityes/Clothesentity';
import { Repository } from 'typeorm';

export class ClothesRepository {
  constructor(
    @InjectRepository(Clothes)
    private readonly ClothesRepository: Repository<Clothes>,
  ) {}
}
