import { SetMetadata } from "@nestjs/common";
import { Role } from "../auth/auth.enum";

export const Roles = (...roles: Role[]) => SetMetadata('role', roles)