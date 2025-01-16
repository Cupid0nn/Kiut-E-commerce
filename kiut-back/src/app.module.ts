import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from 'src/entityes/userentity';
import { Clothes } from 'src/entityes/clothesentity';
import { UserModule } from './users/user.module';
import { ClothesModule } from './ropa/Clothes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: true,
    }),
    UserModule,
    ClothesModule
  ],
})
export class AppModule {}
