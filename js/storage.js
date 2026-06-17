const Storage = {
  CHAVE_BASE: 'javaLearnPRO_progresso',
  getChaveProgresso() {
    const email = sessionStorage.getItem('usuarioEmail') || 'default';
    return `${this.CHAVE_BASE}_${btoa(email)}`;
  },
  salvarProgresso(idsConcluidos) {
    try {
      localStorage.setItem(this.getChaveProgresso(), JSON.stringify(idsConcluidos));
    } catch (e) {
      console.error('❌ Erro ao salvar progresso:', e);
    }
  },
  carregarProgresso() {
    try {
      const dados = localStorage.getItem(this.getChaveProgresso());
      return dados ? JSON.parse(dados) : [];
    } catch (e) {
      console.error('❌ Erro ao carregar progresso:', e);
      return [];
    }
  },
  limparSessao() {
    sessionStorage.clear();
  }
};