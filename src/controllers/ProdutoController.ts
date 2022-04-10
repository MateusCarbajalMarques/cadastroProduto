import { Request, Response } from "express";
import { ProdutoService } from '../services/ProdutoServices';

export class ProdutoController {
    //Criar Produto
    async Create(request: Request, response: Response) {
        const
            {
                id,
                image,
                nome,
                descricao,
                codigo_barra,
                preco,
                categoria_id
            } = request.body

        const servive = new ProdutoService();

        const result = await servive.create({
            id,
            image,
            nome,
            descricao,
            codigo_barra,
            preco,
            categoria_id
        })
        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }
        return response.json(result);
    }
    //Atualizar produto
    async Update(request: Request, response: Response) {

        const { id } = request.params;

        const { image, nome, descricao, codigo_barra, preco, categoria_id } = request.body;

        const service = new ProdutoService();

        const result = await service.Update({
            
            id,
            image,
            nome,
            descricao,
            codigo_barra,
            preco,
            categoria_id

        });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
    //Delete Produto
    async Delete(request: Request, response: Response) {
        const { id } = request.params;
        const servise = new ProdutoService();
        const result = await servise.Delete(id);
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).end();
    }

    //Mostrar produto cadastrado
    async All(request: Request, response: Response) {
        const service = new ProdutoService();

        const produtos = await service.All();
        return response.json(produtos);
    }

}