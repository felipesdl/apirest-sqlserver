import { Router } from "express";
import homeController from "../controllers/HomeController";

const router = new Router();

router.get("/", homeController.index);

export default router;

/*
index -> lista todos os usuários -> get
store/create -> cria um usuário -> post
delete -> apaga um usuário -> delete
show -> mostra um usuário -> get
update -> atualiza um usuário -> patch ou put
*/
