const Router = {
  HASH_PATTERN: /#\/capitulo\/(cap-\d+)\/subcapitulo\/(sub-\d+-\d+)/,
  inicializar() {
    window.addEventListener('hashchange', () => this.processarRotaAtual());
    this.processarRotaAtual();
  },
  navegar(subcapituloId) {
    const capituloId = this.encontrarCapituloPai(subcapituloId);
    if (!capituloId) return;
    const novoHash = `#/capitulo/${capituloId}/subcapitulo/${subcapituloId}`;
    if (window.location.hash !== novoHash) {
      window.location.hash = novoHash;
    } else {
      this.executarNavegacao(capituloId, subcapituloId);
    }
  },
  obterIdsDoHash() {
    const match = window.location.hash.match(this.HASH_PATTERN);
    return match ? { capituloId: match[1], subcapituloId: match[2] } : null;
  },
  processarRotaAtual() {
    const ids = this.obterIdsDoHash();
    if (ids) {
      const capitulo = cursoJavaEstrutura.find(c => c.id === ids.capituloId);
      if (capitulo?.subcapitulos.some(s => s.id === ids.subcapituloId)) {
        this.executarNavegacao(ids.capituloId, ids.subcapituloId);
        return;
      }
    }
    this.irParaPrimeiraAula();
  },
  irParaPrimeiraAula() {
    window.location.hash = `#/capitulo/${cursoJavaEstrutura[0].id}/subcapitulo/${cursoJavaEstrutura[0].subcapitulos[0].id}`;
  },
  executarNavegacao(capituloId, subcapituloId) {
    Store.setAulaAtual(subcapituloId, capituloId);
    const marcadoAgora = Store.marcarConcluido(subcapituloId);
    
    if (typeof MenuRenderer !== 'undefined') {
      MenuRenderer.abrirCapitulo(capituloId);
      MenuRenderer.marcarSubcapituloAtivo(subcapituloId);
      if (marcadoAgora) {
        MenuRenderer.aplicarProgresso(Store.obterProgresso());
      }
    }
    if (typeof ContentRenderer !== 'undefined') {
      ContentRenderer.renderizar(subcapituloId);
    }
    if (typeof Navigation !== 'undefined') {
      Navigation.atualizarEstadoBotoes(subcapituloId);
    }
    EventBus.emit('ROUTE_CHANGED', { capituloId, subcapituloId });
  },
  encontrarCapituloPai(subcapituloId) {
    for (const cap of cursoJavaEstrutura) {
      if (cap.subcapitulos.some(sub => sub.id === subcapituloId)) return cap.id;
    }
    return null;
  },
  obterSubcapituloAnterior(subcapituloId) {
    for (let i = 0; i < cursoJavaEstrutura.length; i++) {
      const cap = cursoJavaEstrutura[i];
      const idx = cap.subcapitulos.findIndex(s => s.id === subcapituloId);
      if (idx !== -1) {
        if (idx > 0) return cap.subcapitulos[idx - 1].id;
        if (i > 0) {
          const ant = cursoJavaEstrutura[i - 1];
          return ant.subcapitulos[ant.subcapitulos.length - 1].id;
        }
        return null;
      }
    }
    return null;
  },
  obterProximoSubcapitulo(subcapituloId) {
    for (let i = 0; i < cursoJavaEstrutura.length; i++) {
      const cap = cursoJavaEstrutura[i];
      const idx = cap.subcapitulos.findIndex(s => s.id === subcapituloId);
      if (idx !== -1) {
        if (idx < cap.subcapitulos.length - 1) return cap.subcapitulos[idx + 1].id;
        if (i < cursoJavaEstrutura.length - 1) return cursoJavaEstrutura[i + 1].subcapitulos[0].id;
        return null;
      }
    }
    return null;
  }
};