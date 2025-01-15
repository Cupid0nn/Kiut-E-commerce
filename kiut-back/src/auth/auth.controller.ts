import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./Auth.service";
import { LoginUserDto } from "../dtos/userdto";
import { CreateUserDto } from "../dtos/userdto";
import { ApiTags } from "@nestjs/swagger";
@ApiTags('Auth')
@Controller("auth")
export class AuthControllers {
    constructor(private readonly authServices: AuthService){}
    
    @Get ()
    GetAuth(){
        return this.authServices.GetAuth();
    }

    @Post ('singin')
    singin(@Body() credentials:LoginUserDto) {
        const {email, password} = credentials
        return this.authServices.singin(email, password);
    }

    @Post ("signup")
    signup(@Body() user: CreateUserDto) {
        return this.authServices.signup(user);
    }
}