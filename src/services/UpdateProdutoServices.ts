import { getRepository } from "typeorm";
import { Produtos } from "../entities/Produtos";

type ProdutoUpdateRequest = {
    id:string;
    image:string;
    nome: string;
    descricao: string;
    codigo_barra:Number;
    preco:number;
    categoria: string;

}

export class UpdateProdutoService {
    async execute({id,image, nome, descricao, codigo_barra, preco, categoria}: ProdutoUpdateRequest){
        const repo = getRepository(Produtos);

        const produto = await repo.findOne(id);

        if(!produto){
            return new Error("Produto não existe!");
        }
        
        produto.image =  image ? image:produto.image;
        produto.nome = nome ? nome:produto.nome;
        produto.descricao =  descricao ? descricao:produto.descricao;
        produto.codigo_barra = codigo_barra ? codigo_barra:produto.codigo_barra;
        produto.preco =  preco ? preco:produto.preco;
        produto.categoria = categoria ? categoria:produto.categoria;

        await repo.save(produto);

        return Produtos;

    }
}