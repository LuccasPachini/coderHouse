const ManagerUsers = require('./ManagerUsers');

(async () => {
  const manager = new ManagerUsers('Usuarios.json');

  await manager.criarUsuario({
    nome: 'Luccas',
    sobrenome: 'Pachini',
    idade: 20,
    curso: 'Ciência da Computação'
  });

  const usuarios = await manager.consultarUsuarios();
  console.log('Usuários cadastrados:', usuarios);
})();