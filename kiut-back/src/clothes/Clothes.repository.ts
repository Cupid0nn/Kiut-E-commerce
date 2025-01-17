import { InjectRepository } from '@nestjs/typeorm';
import { Clothes } from 'src/entityes/clothesentity';
import { Repository } from 'typeorm';

export class ClothesRepository {
  constructor(
    @InjectRepository(Clothes)
    private readonly clothesRepository: Repository<Clothes>,
  ) {}

  async findAll(): Promise<Clothes[]> {
    return this.clothesRepository.find();
  }

  async findOne(id: string): Promise<Clothes> {
    return this.clothesRepository.findOne({ where: { id } });
  }

  async create(clothes: Clothes): Promise<Clothes> {
    return this.clothesRepository.save(clothes);
  }

  async update(id: string, clothes: Clothes): Promise<Clothes> {
    await this.clothesRepository.update(id, clothes);
    return this.clothesRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<string> {
    await this.clothesRepository.delete(id);
    return "prenda borrada con exito"
  }

  async findByName(name: string): Promise<Clothes[]> {
    return this.clothesRepository.find({ where: { nombre: name } });
  }
}
