const fs = require('fs').promises; 

class ManagerUsers {
  constructor(fileName) {
    this.fileName = fileName; 
  }

  async criarUsuario(novoUsuario) {
    try {
      let dados = [];
      try {
        const fileData = await fs.readFile(this.fileName, 'utf8');
        dados = JSON.parse(fileData); 
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }

      dados.push(novoUsuario);

      await fs.writeFile(this.fileName, JSON.stringify(dados, null, 2));
      console.log('Usuário criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  }

  async consultarUsuarios() {
    try {
      const fileData = await fs.readFile(this.fileName, 'utf8');
      const usuarios = JSON.parse(fileData); 
      return usuarios; 
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log('Nenhum usuário encontrado. O arquivo ainda não foi criado.');
        return [];
      } else {
        console.error('Erro ao consultar usuários:', error);
        throw error;
      }
    }
  }
}

module.exports = ManagerUsers; 