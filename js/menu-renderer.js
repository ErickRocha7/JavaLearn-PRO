const MenuRenderer = {
  renderizar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';
    cursoJavaEstrutura.forEach(capitulo => {
      const capDiv = document.createElement('div');
      capDiv.className = 'border-b border-slate-100';
      capDiv.setAttribute('data-capitulo-id', capitulo.id);

      const headerBtn = document.createElement('button');
      headerBtn.className = 'w-full flex items-center justify-between px-4 py-3 text-left hover:bg-slate-50 transition-colors duration-200';
      headerBtn.setAttribute('data-capitulo-id', capitulo.id);
      headerBtn.setAttribute('aria-expanded', 'false');
      headerBtn.innerHTML = `
        <span class="font-bold text-slate-800 text-sm">${capitulo.titulo}</span>
        <svg aria-hidden="true" class="w-4 h-4 text-slate-400 seta-acordeao" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      `;

      const listaDiv = document.createElement('div');
      listaDiv.className = 'lista-subcapitulos px-2 pb-2';
      listaDiv.setAttribute('data-lista-subcapitulos', capitulo.id);

      capitulo.subcapitulos.forEach((sub, index) => {
        const subItem = document.createElement('div');
        subItem.className = 'flex items-start gap-3 py-2 pl-4 cursor-pointer subcapitulo-item';
        subItem.setAttribute('data-subcapitulo-id', sub.id);
        subItem.setAttribute('data-capitulo-pai', capitulo.id);

        const iconeColuna = document.createElement('div');
        iconeColuna.className = 'relative flex flex-col items-center';

        const iconeCheck = document.createElement('div');
        iconeCheck.className = 'w-5 h-5 rounded-full border-2 border-slate-300 bg-slate-100 flex items-center justify-center z-10 icone-check';
        iconeCheck.innerHTML = `<svg aria-hidden="true" class="w-3 h-3 text-transparent visto-svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>`;

        const linha = document.createElement('div');
        const ultimo = index === capitulo.subcapitulos.length - 1;
        linha.className = `w-0.5 flex-1 bg-slate-200 linha-conectora min-h-[1rem] ${ultimo ? 'invisible' : ''}`;
        if (!ultimo) {
          linha.setAttribute('data-conecta-de', sub.id);
          linha.setAttribute('data-conecta-para', capitulo.subcapitulos[index + 1].id);
        }

        iconeColuna.appendChild(iconeCheck);
        iconeColuna.appendChild(linha);

        const tituloSpan = document.createElement('span');
        tituloSpan.className = 'text-sm text-slate-600 hover:text-slate-900 cursor-pointer titulo-subcapitulo';
        tituloSpan.textContent = sub.titulo;

        subItem.appendChild(iconeColuna);
        subItem.appendChild(tituloSpan);
        subItem.addEventListener('click', () => Router.navegar(sub.id));

        listaDiv.appendChild(subItem);
      });

      headerBtn.addEventListener('click', () => this.toggleCapitulo(capitulo.id));
      capDiv.appendChild(headerBtn);
      capDiv.appendChild(listaDiv);
      sidebar.appendChild(capDiv);
    });
  },
  toggleCapitulo(capituloId) {
    const lista = document.querySelector(`[data-lista-subcapitulos="${capituloId}"]`);
    const header = document.querySelector(`button[data-capitulo-id="${capituloId}"]`);
    const capituloDiv = header?.closest('[data-capitulo-id]');
    const estaAberto = lista?.classList.contains('expandido');

    if (estaAberto) {
      lista.classList.remove('expandido');
      if (capituloDiv) capituloDiv.classList.remove('capitulo-aberto');
      if (header) header.setAttribute('aria-expanded', 'false');
    } else {
      document.querySelectorAll('.lista-subcapitulos').forEach(l => l.classList.remove('expandido'));
      document.querySelectorAll('[data-capitulo-id]').forEach(el => el.classList.remove('capitulo-aberto'));
      document.querySelectorAll('button[data-capitulo-id]').forEach(b => b.setAttribute('aria-expanded', 'false'));
      lista?.classList.add('expandido');
      if (capituloDiv) capituloDiv.classList.add('capitulo-aberto');
      if (header) header.setAttribute('aria-expanded', 'true');
    }
  },
  abrirCapitulo(capituloId) {
    document.querySelectorAll('.lista-subcapitulos').forEach(l => l.classList.remove('expandido'));
    document.querySelectorAll('[data-capitulo-id]').forEach(el => el.classList.remove('capitulo-aberto'));
    document.querySelectorAll('button[data-capitulo-id]').forEach(b => b.setAttribute('aria-expanded', 'false'));
    const lista = document.querySelector(`[data-lista-subcapitulos="${capituloId}"]`);
    const capituloDiv = lista?.closest('[data-capitulo-id]');
    const header = document.querySelector(`button[data-capitulo-id="${capituloId}"]`);
    if (lista) lista.classList.add('expandido');
    if (capituloDiv) capituloDiv.classList.add('capitulo-aberto');
    if (header) header.setAttribute('aria-expanded', 'true');
  },
  marcarSubcapituloAtivo(subcapituloId) {
    document.querySelectorAll('.subcapitulo-item').forEach(el => {
      el.classList.remove('is-active');
      const titulo = el.querySelector('.titulo-subcapitulo');
      if (titulo) titulo.classList.remove('text-blue-700', 'font-semibold', 'bg-blue-50', 'rounded', 'px-2', '-mx-2');
    });
    const item = document.querySelector(`[data-subcapitulo-id="${subcapituloId}"]`);
    if (item) {
      item.classList.add('is-active');
      const titulo = item.querySelector('.titulo-subcapitulo');
      if (titulo) titulo.classList.add('text-blue-700', 'font-semibold', 'bg-blue-50', 'rounded', 'px-2', '-mx-2');
    }
  },
  aplicarProgresso(idsConcluidos) {
    idsConcluidos.forEach(id => {
      const item = document.querySelector(`[data-subcapitulo-id="${id}"]`);
      if (item) {
        item.classList.add('is-completed');
        const icone = item.querySelector('.icone-check');
        if (icone) {
          icone.classList.remove('border-slate-300', 'bg-slate-100');
          icone.classList.add('border-blue-600', 'bg-white');
          const svg = icone.querySelector('.visto-svg');
          if (svg) {
            svg.classList.remove('text-transparent');
            svg.classList.add('text-blue-600');
          }
        }
        const titulo = item.querySelector('.titulo-subcapitulo');
        if (titulo) {
          titulo.classList.remove('text-slate-600');
          titulo.classList.add('text-blue-600');
        }
      }
    });
    this.atualizarLinhasConectoras(idsConcluidos);
  },
  atualizarLinhasConectoras(idsConcluidos) {
    document.querySelectorAll('.linha-conectora[data-conecta-de]').forEach(linha => {
      const de = linha.getAttribute('data-conecta-de');
      const para = linha.getAttribute('data-conecta-para');
      if (idsConcluidos.includes(de) && idsConcluidos.includes(para)) {
        linha.classList.remove('bg-slate-200');
        linha.classList.add('bg-blue-600');
      } else {
        linha.classList.remove('bg-blue-600');
        linha.classList.add('bg-slate-200');
      }
    });
  }
};