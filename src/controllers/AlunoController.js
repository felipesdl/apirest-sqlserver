import Aluno from "../models/Aluno";
import Foto from "../models/Foto";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: [
        "id",
        "nome",
        "sobrenome",
        "email",
        "idade",
        "peso",
        "altura",
      ],
      order: [["id", "DESC"]],
      include: {
        model: Foto,
        attributes: ["filename", "url"],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.status(200).json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ["ID not found"],
        });
      }
      const aluno = await Aluno.findByPk(id, {
        attributes: [
          "id",
          "nome",
          "sobrenome",
          "email",
          "idade",
          "peso",
          "altura",
        ],
        order: [["id", "DESC"]],
        include: {
          model: Foto,
          attributes: ["filename", "url"],
        },
      });
      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno not found"],
        });
      }

      return res.status(200).json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ["ID not found"],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno not found"],
        });
      }
      await aluno.destroy();
      return res.status(200).json("Aluno deleted");
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ["ID not found"],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno not found"],
        });
      }
      const alunoAtualizado = await aluno.update(req.body);
      return res.status(200).json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
