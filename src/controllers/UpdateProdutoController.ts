import { Request, Response } from "express";
import { UpdateProdutoService } from "../services/UpdateProdutoServices";

export class UpdateProdutoController {
    async handle(request: Request, response: Response) {

        const { id } = request.params;

        const { image, nome ,descricao, codigo_barra, preco, categoria} = request.body;

        const service = new UpdateProdutoService();

        const result = await service.execute({
            id,
            image,
            nome,
            descricao,
            codigo_barra,
            preco,
            categoria

        });

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}