import {
    IsNotEmpty,
    IsString,
    IsNumber,
    IsBoolean,
    Length,
    Validate,
    IsEmpty,
  } from 'class-validator';
  import { ApiProperty, PickType } from '@nestjs/swagger';
  
  export class CreateClothesDto {
    @ApiProperty({
      example: "Camisa",
      description: 'El nombre de la prenda',
      required: true,
    })
    @IsNotEmpty({ message: 'El nombre de la prenda es obligatorio' })
    @IsString({ message: 'El nombre de la prenda debe ser una cadena de texto' })
    @Length(3, 80, { message: 'El nombre de la prenda debe tener entre 3 y 80 caracteres' })
    nombre: string;
  
    @ApiProperty({
      example: "Camisa de algodón",
      description: 'La descripción de la prenda',
      required: true,
    })
    @IsNotEmpty({ message: 'La descripción de la prenda es obligatoria' })
    @IsString({ message: 'La descripción de la prenda debe ser una cadena de texto' })
    @Length(10, 255, { message: 'La descripción de la prenda debe tener entre 10 y 255 caracteres' })
    descripcion: string;
  
    @ApiProperty({
      example: 59.99,
      description: 'El precio de la prenda',
      required: true,
    })
    @IsNotEmpty({ message: 'El precio de la prenda es obligatorio' })
    @IsNumber({}, { message: 'El precio de la prenda debe ser un número' })
    precio: number;
  
    @ApiProperty({
      example: "M",
      description: 'La talla de la prenda',
      required: true,
    })
    @IsNotEmpty({ message: 'La talla de la prenda es obligatoria' })
    @IsString({ message: 'La talla de la prenda debe ser una cadena de texto' })
    @Length(1, 2, { message: 'La talla de la prenda debe tener entre 1 y 2 caracteres' })
    talla: string;
  
    @ApiProperty({
      example: "Azul",
      description: 'El color de la prenda',
      required: true,
    })
    @IsNotEmpty({ message: 'El color de la prenda es obligatorio' })
    @IsString({ message: 'El color de la prenda debe ser una cadena de texto' })
    @Length(3, 20, { message: 'El color de la prenda debe tener entre 3 y 20 caracteres' })
    color: string;
  
    @IsEmpty()
    imagen?: string;
  
    @ApiProperty({
      example: "Ropa de hombre",
      description: 'La categoría de la prenda',
      required: true,
    })
    @IsNotEmpty({ message: 'La categoría de la prenda es obligatoria' })
    @IsString({ message: 'La categoría de la prenda debe ser una cadena de texto' })
    @Length(3, 50, { message: 'La categoría de la prenda debe tener entre 3 y 50 caracteres' })
    categoria: string;
  
    @ApiProperty({
      example: 100,
      description: 'El stock de la prenda',
      required: true,
    })
    @IsNotEmpty({ message: 'El stock de la prenda es obligatorio' })
    @IsNumber({}, { message: 'El stock de la prenda debe ser un número' })
    stock: number;
  
    @IsEmpty()
    disponible?: boolean;
  }
  
  export class UpdateClothesDto extends PickType(CreateClothesDto, [
    'nombre',
    'descripcion',
    'precio',
    'talla',
    'color',
    'categoria',
    'stock',
  ]) {}
  