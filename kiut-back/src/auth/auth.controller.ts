import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "../dtos/userdto";
import { CreateUserDto } from "../dtos/userdto";
import { ApiTags } from "@nestjs/swagger";

@Controller('auth')
@Controller('auth')
export class AuthControllers {
  constructor(private readonly authService: AuthService) {}

    @Get()
    @ApiTags('Auth')
    GetAuth(){
        return this.authService.GetAuth();
    }

    @Post('singin')
    @ApiTags('Auth')
    singin(@Body() credentials:LoginUserDto) {
        const {correoElectronico, password} = credentials
        return this.authService.singin(correoElectronico , password);
    }

    @Post("signup")
    @ApiTags('Auth')
    signup(@Body() user: CreateUserDto) {
        return this.authService.signup(user);
    }
}