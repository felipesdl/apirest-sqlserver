import { Router } from "express";
import alunoController from "../controllers/AlunoController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get("/", alunoController.index);
router.post("/", loginRequired, alunoController.store);
router.put("/:id", loginRequired, alunoController.update);
router.get("/:id", alunoController.show);
router.delete("/:id", loginRequired, alunoController.delete);

export default router;

/*
index -> lista todos os usuários -> get
store/create -> cria um usuário -> post
delete -> apaga um usuário -> delete
show -> mostra um usuário -> get
update -> atualiza um usuário -> patch ou put
*/
