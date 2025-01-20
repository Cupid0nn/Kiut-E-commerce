import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  IsNumber,
  Validate,
  IsEmpty,
} from 'class-validator';
import { ApiProperty, PickType } from '@nestjs/swagger';
import { MatchPassword } from '../decorators/matchpass.decorator';

export class CreateUserDto {
  @ApiProperty({
    example: "Agustin",
    description: 'El nombre del usuario',
    required: true,
  })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @Length(3, 80, { message: 'El nombre debe tener entre 3 y 80 caracteres' })
  name: string;

  @ApiProperty({
    example: "agus@mail.com",
    description: 'El correo electrónico del usuario',
    required: true,
  })
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
  @IsEmail(
    {},
    { message: 'El correo electrónico debe tener un formato válido' },
  )
  correoElectronico: string;

  @ApiProperty({
    example: "Agus&1234",
    description: 'La contraseña del usuario',
    required: true,
  })
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/)
  password: string;

  @ApiProperty({
    example: "Agus&1234",
    description: 'La confirmación de la contraseña del usuario',
    required: true,
  })
  @IsNotEmpty({ message: 'La confirmación de contraseña es obligatoria' })
  @Validate(MatchPassword, ['password'])
  confirmPassword: string;

  @ApiProperty({
    example: 5745784,
    description: 'El número de teléfono del usuario',
    required: true,
  })
  @IsNotEmpty({ message: 'El número de teléfono es obligatorio' })
  @IsNumber({}, { message: 'El número de teléfono debe ser un número' })
  phone: number;

  @IsEmpty()
  isAdmin?: boolean;

  @IsEmpty()
  isSuperAdmin?: boolean;
}

export class LoginUserDto extends PickType(CreateUserDto, [
  'correoElectronico',
  'password',
]) {}
