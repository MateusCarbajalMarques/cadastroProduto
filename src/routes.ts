import { Router } from "express"
import multer from 'multer';
import uploadConfig from '../src/config/upload';

import { ProdutoController} from "./controllers/ProdutoController";

const routes = Router();
const upload = multer(uploadConfig);
//upload.single('image'),


routes.post("/produtos", new ProdutoController().Create);
routes.get("/produtos", new ProdutoController().All);
routes.delete("/produto/:id", new ProdutoController().Delete);
routes.put("/produto/:id",new ProdutoController().Update);





export {routes}