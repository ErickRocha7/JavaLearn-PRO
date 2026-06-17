const UI = {
  elementos: {
    telaLogin: document.getElementById('tela-login'),
    telaCurso: document.getElementById('tela-curso'),
    avatarIniciais: document.getElementById('avatar-iniciais'),
    nomeUsuario: document.getElementById('nome-usuario'),
    btnSair: document.getElementById('btn-sair')
  },
  inicializar() {
    this.elementos.btnSair.addEventListener('click', () => Auth.logout());
    EventBus.on('AUTH_CHANGED', (dados) => {
      if (dados.logado) this.mostrarTelaCurso(dados.usuario);
      else this.mostrarTelaLogin();
    });
    EventBus.on('LOGOUT', () => this.mostrarTelaLogin());
  },
  mostrarTelaLogin() {
    this.elementos.telaLogin.classList.remove('hidden');
    this.elementos.telaCurso.classList.add('hidden');
    document.getElementById('senha').value = '';
    document.getElementById('erro-login').classList.add('hidden');
  },
  mostrarTelaCurso(usuario) {
    this.elementos.telaLogin.classList.add('hidden');
    this.elementos.telaCurso.classList.remove('hidden');
    this.atualizarHeader(usuario);
  },
  atualizarHeader(usuario) {
    if (usuario && usuario.nome) {
      this.elementos.nomeUsuario.textContent = usuario.nome;
      const partes = usuario.nome.trim().split(/\s+/);
      let iniciais;
      if (partes.length >= 2) {
        iniciais = partes[0][0] + partes[partes.length - 1][0];
      } else if (partes[0].length >= 2) {
        iniciais = partes[0].substring(0, 2);
      } else {
        iniciais = partes[0][0] + 'U';
      }
      this.elementos.avatarIniciais.textContent = iniciais.toUpperCase();
    }
  }
};