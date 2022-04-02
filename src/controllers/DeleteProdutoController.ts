import { Request, Response } from "express";
import { DeleteProdutoService } from "../services/DeleteProdutoServices";

export class DeleteProdutoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const servise = new DeleteProdutoService();
        const result = await servise.execute(id);
        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(200).end();
    }
}