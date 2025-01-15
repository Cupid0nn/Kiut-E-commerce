import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { Observable } from 'rxjs';
  import { Role } from './auth.enum';
  
  @Injectable()
  export class RolesGuard implements CanActivate {
    // Inyectamos el reflector de NestJS que se utiliza para leer y extraer la metadata
    constructor(private readonly reflector: Reflector) {}
  
    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
      // Obtenemos los roles requeridos desde la metadata
      const requieredRoles = this.reflector.getAllAndOverride<Role[]>('role', [
        context.getHandler(),
        context.getClass(),
      ]);
  
      // Obtenemos el objeto de la solicitud (request)
      const request = context.switchToHttp().getRequest();
      const user = request.user;
  
      // Función que verifica si el usuario tiene alguno de los roles requeridos
      const hasRole = () =>
        requieredRoles.some((role) => user?.role?.includes(role)); 
  
      // Ejecutamos la verificación de roles
      const valid = hasRole();
  
      // Si el usuario no tiene el rol requerido, lanzamos una excepción de acceso denegado
      if (!valid) throw new ForbiddenException('You dont have access to this endpoint');
  
      return valid;
    }
  }
  