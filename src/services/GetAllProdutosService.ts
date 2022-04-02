import { getRepository } from "typeorm";
import { Produtos } from "../entities/Produtos";

export class GetAllProdutosService {
    async execute(){
        const repo = getRepository(Produtos);
        const produtos = await repo.find({
        });

        return produtos;
    }
}