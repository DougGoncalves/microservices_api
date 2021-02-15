import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Roteiro } from "./Roteiro";

@Entity()
export class Usuario {

    constructor(nome: string, email: string) {
        this. nome = nome;
        this.email = email;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @OneToMany(() => Roteiro, roteiro => roteiro.usuario)
    roteiros: Roteiro[]

}
