const Store = {
  state: {
    usuario: { nome: null, email: null, logado: false },
    navegacao: { capituloAtualId: null, subcapituloAtualId: null, historico: [] },
    progresso: { concluidos: [], ultimoAcesso: null }
  },
  inicializar() {
    const logado = sessionStorage.getItem('isLoggedIn') === 'true';
    if (logado) {
      this.state.usuario.logado = true;
      this.state.usuario.nome = sessionStorage.getItem('usuarioNome') || 'João Silva';
      this.state.usuario.email = sessionStorage.getItem('usuarioEmail') || 'admin@email.com';
    }
    this.state.progresso.concluidos = Storage.carregarProgresso();
  },
  autenticar(email, nome) {
    this.state.usuario = { nome, email, logado: true };
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('usuarioNome', nome);
    sessionStorage.setItem('usuarioEmail', email);
    EventBus.emit('AUTH_CHANGED', { logado: true, usuario: this.state.usuario });
  },
  logout() {
    this.state.usuario = { nome: null, email: null, logado: false };
    sessionStorage.clear();
    EventBus.emit('LOGOUT');
    EventBus.emit('AUTH_CHANGED', { logado: false, usuario: null });
  },
  setAulaAtual(subcapituloId, capituloId) {
    this.state.navegacao.subcapituloAtualId = subcapituloId;
    this.state.navegacao.capituloAtualId = capituloId;
    if (!this.state.navegacao.historico.includes(subcapituloId)) {
      this.state.navegacao.historico.push(subcapituloId);
    }
  },
  marcarConcluido(subcapituloId) {
    if (!this.state.progresso.concluidos.includes(subcapituloId)) {
      this.state.progresso.concluidos.push(subcapituloId);
      this.state.progresso.ultimoAcesso = Date.now();
      Storage.salvarProgresso(this.state.progresso.concluidos);
      EventBus.emit('PROGRESS_CHANGED', { concluidos: this.state.progresso.concluidos, novo: subcapituloId });
      return true;
    }
    return false;
  },
  obterAulaAtual() {
    return this.state.navegacao.subcapituloAtualId;
  },
  obterProgresso() {
    return this.state.progresso.concluidos;
  }
};