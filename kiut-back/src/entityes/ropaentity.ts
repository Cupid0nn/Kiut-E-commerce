import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Prenda {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column('decimal')
    precio: number;

    @Column()
    talla: string;

    @Column()
    color: string;

    @Column()
    imagen: string;

    @Column()
    categoria: string;

    @Column()
    stock: number;

    @Column()
    disponible: boolean;
    
}
