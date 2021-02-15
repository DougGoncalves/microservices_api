import { getManager } from "typeorm";
import { Roteiro } from "../entity/Roteiro";

export class RoteiroController {

  async salvar(roteiro: Roteiro) {
    const roteiroSalvo = await getManager().save(roteiro);
    return roteiroSalvo;
  }
}