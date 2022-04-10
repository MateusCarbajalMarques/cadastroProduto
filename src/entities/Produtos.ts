import {Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, ManyToMany, JoinColumn} from 'typeorm';
import {v4 as uuid} from "uuid";


@Entity("produtos")
export class Produtos {
    @PrimaryColumn()
    id: string;

    @Column()
    image: string;

    @Column()
    nome: string;

    @Column()
    descricao:string;

    @Column()
    codigo_barra:Number;

    @Column()
    preco:number

    @Column()
    categoria_id: string;

    @CreateDateColumn()
    created_at: Date;

  constructor(){
        if(!this.id) {
            this.id = uuid()
        }
    }  
}