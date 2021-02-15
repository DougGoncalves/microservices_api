import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";

@Entity()
export class Roteiro{

  constructor(lugar: string, descricao: string, data: Date,usuario: Usuario ) {
    this.lugar = lugar;
    this.descricao = descricao;
    this.data = data;
    this.usuario = usuario;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lugar: string;

  @Column()
  descricao: string;

  @Column()
  data: Date;

  @ManyToOne(() => Usuario)
  usuario: Usuario;
}