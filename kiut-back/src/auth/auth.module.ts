import { UserRepository } from "src/users/user.repository";
import { AuthService } from "./auth.service";
import { User } from "src/entityes/userentity";
import { UserModule } from "src/users/user.module";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthControllers } from "./auth.controller";


@Module({
  imports: [TypeOrmModule.forFeature([User]), UserModule, ],
  controllers: [AuthControllers],
  providers: [ AuthService, UserRepository],
})
export class AuthModule {}