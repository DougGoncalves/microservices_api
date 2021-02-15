import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Roteiro{

  constructor(lugar: string, descricao: string, data: Date) {
    this.lugar = lugar;
    this.descricao = descricao;
    this.data = data;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lugar: string;

  @Column()
  descricao: string;

  @Column()
  data: Date;
}