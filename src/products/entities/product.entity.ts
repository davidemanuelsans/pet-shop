import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Store } from "./store.entity";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true, name: 'title' })
    title: string;

    @Column('numeric', { default: 0 })
    price: number;

    @Column('text')
    description: string;

    @Column('text', { unique: true })
    slug: string;

    @Column('int', { default: 0})
    stock: number;

    @Column('text', { array: true })
    sizes: string[];

    @Column('text', { nullable: false })
    gender: string;

    @Column('json', { nullable: true, name: 'extra_data' })
    extraData?: Object;

    @Column('text', { nullable: true, array: true })
    tags: string[];

    @BeforeInsert()
    checkSlug() {
      this.slug = (this.slug ?? this.title).toLowerCase().replaceAll(' ', '_')
    }

    @ManyToOne(
      () => Store,
      (store) => store.products,
      { cascade: true }
    )
    store: Store;

}
