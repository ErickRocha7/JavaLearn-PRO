const Navigation = {
  elementos: {
    btnAnterior: document.getElementById('btn-anterior'),
    btnProximo: document.getElementById('btn-proximo')
  },
  inicializar() {
    this.elementos.btnAnterior.addEventListener('click', () => this.irParaAnterior());
    this.elementos.btnProximo.addEventListener('click', () => this.irParaProximo());
  },
  irParaAnterior() {
    const atual = Store.obterAulaAtual();
    if (atual) {
      const ant = Router.obterSubcapituloAnterior(atual);
      if (ant) Router.navegar(ant);
    }
  },
  irParaProximo() {
    const atual = Store.obterAulaAtual();
    if (atual) {
      const prox = Router.obterProximoSubcapitulo(atual);
      if (prox) Router.navegar(prox);
      else EventBus.emit('CURSO_CONCLUIDO', {});
    }
  },
  atualizarEstadoBotoes(subcapituloId) {
    const ant = Router.obterSubcapituloAnterior(subcapituloId);
    const prox = Router.obterProximoSubcapitulo(subcapituloId);
    const btnAnt = this.elementos.btnAnterior;
    const btnProx = this.elementos.btnProximo;

    btnAnt.disabled = !ant;
    btnAnt.classList.toggle('opacity-50', !ant);
    btnAnt.classList.toggle('cursor-not-allowed', !ant);

    if (!prox) {
      btnProx.innerHTML = '🎉 Concluir Curso';
      btnProx.classList.remove('bg-blue-600', 'hover:bg-blue-700');
      btnProx.classList.add('bg-emerald-600', 'hover:bg-emerald-700');
    } else {
      btnProx.innerHTML = 'Próxima Aula →';
      btnProx.classList.add('bg-blue-600', 'hover:bg-blue-700');
      btnProx.classList.remove('bg-emerald-600', 'hover:bg-emerald-700');
    }
  }
};