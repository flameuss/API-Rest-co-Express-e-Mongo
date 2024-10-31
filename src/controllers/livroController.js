import livro from "../models/Livro.js";

class LivroController {

  static async listarLivros(req, res) {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
  }

};

export default LivroController;

