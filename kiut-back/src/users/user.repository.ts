import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entityes/userentity';
import { Repository } from 'typeorm';

export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly ropaRepository: Repository<User>,
  ) {}

  
}
