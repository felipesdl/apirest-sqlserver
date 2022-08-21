import { Router } from "express";
import tokenController from "../controllers/TokenController";

const router = new Router();

router.post("/", tokenController.store);

export default router;

/*
index -> lista todos os usuários -> get
store/create -> cria um usuário -> post
delete -> apaga um usuário -> delete
show -> mostra um usuário -> get
update -> atualiza um usuário -> patch ou put
*/
