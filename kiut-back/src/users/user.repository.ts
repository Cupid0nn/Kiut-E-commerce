import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entityes/userentity';
import { Repository } from 'typeorm';
import * as bycrypt from 'bcrypt';

export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(){
    const users = await this.userRepository.find();
    return users.map(({ contrasena, admin,IsSuperAdmin, ...userNoPassword }) => userNoPassword);
  }


  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { correoElectronico: email } });
  }

  async create(user: User): Promise<Partial<User>> {
    const existingUser = await this.findByEmail(user.correoElectronico);
    if (existingUser) throw new Error('User already exists');
  
    const hashedPassword = await bycrypt.hash(user.contrasena, 10);
    user.contrasena = hashedPassword;
  
    const savedUser = await this.userRepository.save(user);
    

    const { contrasena, admin, IsSuperAdmin, ...safeUser } = savedUser;
    return safeUser;
  }
  

  async update(id: string, user: User): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<string> {
    await this.userRepository.delete(id);
    return "usuario borrado con exito"
  }
}
