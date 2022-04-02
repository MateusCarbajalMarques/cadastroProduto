import { Request, Response } from "express";
import { GetAllProdutosService } from "../services/GetAllProdutosService";

export class GetAllProdutosController {
    async handle(request: Request, response: Response) {
        const service = new GetAllProdutosService();

        const produtos = await service.execute();
        return response.json(produtos);
    }
}