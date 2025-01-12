import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    correoElectronico: string;

    @Column()
    contrasena: string;

    @Column({ default: false })
    admin: boolean;
}
