import { UserRepository } from "src/users/user.repository";
import { AuthService } from "./auth.service";
import { User } from "src/entityes/userentity";
import { UserModule } from "src/users/user.module";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthControllers } from "./auth.controller";
import { ClothesModule } from 'src/clothes/Clothes.module';
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule, ClothesModule,
    JwtModule.register({}),
  ],
  controllers: [AuthControllers],
  providers: [AuthService, UserRepository],
  exports: [AuthService], // Agrega esto
})
export class AuthModule {}