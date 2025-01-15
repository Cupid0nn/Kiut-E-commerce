import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/user.repository';
import { User } from 'src/entityes/userentity';
import * as bycrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Role } from './auth.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRespository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  GetAuth(): string {
    return 'Get Auth';
  }
  async singin(email: string, password: string) {
    if (!email || !password) return 'Data Required';

    // verificar que el usuario exista

    const user = await this.userRespository.findByEmail(email);

    if (!user)
      throw new BadRequestException(`user with email ${email} not found`);

    // comparacion de contraseñas
    const validPassword = await bycrypt.compare(password, user.contrasena);

    if (!validPassword) throw new BadRequestException('invalid credentials');

    // firmar el token 
  
    const payload = {
      id: user.id,
      email: user.correoElectronico,
      role: user.IsSuperAdmin ? Role.SuperAdmin : user.admin ? Role.Admin : Role.User
    };
   

    // generamos el token

    const token = this.jwtService.sign(payload);

    // y ahora devolver la respuesta

    return {
      message: 'login successful',
      token,
    };
  }

  async signup(user: Partial<User>) {
    const { correoElectronico: email, contrasena } = user;
    // verificamos que el mail esta en la db
    const foundUser = await this.userRespository.findByEmail(email);
    if (foundUser) throw new BadRequestException('mail already registered');
  
    // proceso de registro
    // hash de contraseña
    const hashedPassword = await bycrypt.hash(contrasena, 10);
    // luego hay que guarardar en la db
    const newUser = new User();
    newUser.username = user.username;
    newUser.correoElectronico = user.correoElectronico;
    newUser.contrasena = hashedPassword;
    newUser.admin = user.admin;
    newUser.IsSuperAdmin = user.IsSuperAdmin;
  
    return await this.userRespository.create(newUser);
  }
}