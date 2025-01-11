import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan'; // Importar Morgan
import * as cors from 'cors'; // Importar CORS

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Añadir Morgan para registrar solicitudes HTTP
  app.use(morgan('dev'));

  // Añadir CORS para permitir solicitudes entre dominios
  app.use(cors());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
