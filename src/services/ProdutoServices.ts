import { getRepository } from "typeorm";
import { Produtos } from "../entities/Produtos";

type ProdutoRequest = {
    id:string,
    image: string,
    nome: string;
    descricao: string;
    codigo_barra: number;
    preco: number;
    categoria_id: string;
}

export class ProdutoService {
    async create({image, nome, descricao, codigo_barra, preco, categoria_id }: ProdutoRequest): Promise<Error | Produtos> {

        const repo = getRepository(Produtos);

        const produto = repo.create({
            image,
            nome,
            descricao,
            codigo_barra,
            preco,
            categoria_id
        });

        await repo.save(produto);

        return produto;

    }

    async Update({id,image, nome, descricao, codigo_barra, preco, categoria_id}: ProdutoRequest){
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
        produto.categoria_id = categoria_id ? categoria_id:produto.categoria_id;

        await repo.save(produto);

        return Produtos;

    }

    async Delete(id: string){
        const repo = getRepository(Produtos);

        if(!await repo.findOne(id)){
            return new Error("Produto não existe!");

        }
        await repo.delete(id);
    }

    async All(){
        
        const repo = getRepository(Produtos);
        const produtos = await repo.find({
        });

        return produtos;
    }
}