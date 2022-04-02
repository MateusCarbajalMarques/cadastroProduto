import { getRepository } from "typeorm";
import { Produtos } from "../entities/Produtos";

export class DeleteProdutoService{
    async execute(id: string){
        const repo = getRepository(Produtos);

        if(!await repo.findOne(id)){
            return new Error("Produto não existe!");

        }
        await repo.delete(id);
    }
}