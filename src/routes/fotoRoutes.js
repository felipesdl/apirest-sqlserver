import { Router } from "express";
import loginRequired from "../middlewares/loginRequired";

import fotoController from "../controllers/FotoController";

const router = new Router();

router.post("/", loginRequired, fotoController.store);

export default router;

/*
index -> lista todos os usuários -> get
store/create -> cria um usuário -> post
delete -> apaga um usuário -> delete
show -> mostra um usuário -> get
update -> atualiza um usuário -> patch ou put
*/
