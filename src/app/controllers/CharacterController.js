class CharacterController {
  index(request, response) { // Listar todos os personagens
    response.send('Send from Controller');
  }

  show() {
    // Obter UM personagem
  }

  store() {
    // Criar um novo personagem
  }

  update() {
    // Editar um personagem

  }

  delete() {
    // Deletar um personagem
  }
}

module.exports = new CharacterController();
