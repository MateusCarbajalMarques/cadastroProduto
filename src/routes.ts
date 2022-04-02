import { Router } from "express"
import multer from 'multer';
import uploadConfig from '../src/config/upload';

import { CreateProdutoController } from "./controllers/CreateProdutoController";
import { DeleteProdutoController } from "./controllers/DeleteProdutoController";
import { GetAllProdutosController } from "./controllers/GetAllProdutosController";
import { UpdateProdutoController} from "./controllers/UpdateProdutoController";

const routes = Router();
const upload = multer(uploadConfig);
//upload.single('image'),
routes.post("/produtos", new CreateProdutoController().handle);

routes.get("/produtos", new GetAllProdutosController().handle);
routes.delete("/produto/:id", new DeleteProdutoController().handle);
routes.put("/produto/:id",new UpdateProdutoController().handle);

export {routes}