import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Store {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true, name: 'name' })
    name: string;

    @OneToMany(
        () => Product,
        (product) => product.store,
    )
    products: Product[];
}