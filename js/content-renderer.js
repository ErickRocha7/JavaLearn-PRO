const ContentRenderer = {
  PALAVRAS_CHAVE: new Set([
    'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char',
    'class', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum',
    'extends', 'final', 'finally', 'float', 'for', 'goto', 'if', 'implements',
    'import', 'instanceof', 'int', 'interface', 'long', 'native', 'new',
    'package', 'private', 'protected', 'public', 'return', 'short', 'static',
    'strictfp', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws',
    'transient', 'try', 'void', 'volatile', 'while', 'true', 'false', 'null'
  ]),
  TIPOS_COMUNS: new Set([
    'String', 'System', 'Integer', 'Double', 'Boolean', 'Object', 'Math',
    'ArrayList', 'HashMap', 'Scanner', 'Exception', 'RuntimeException'
  ]),

  encontrarDadosSubcapitulo(subcapituloId) {
    for (const cap of cursoJavaEstrutura) {
      const sub = cap.subcapitulos.find(s => s.id === subcapituloId);
      if (sub) return { ...sub, capituloTitulo: cap.titulo, capituloId: cap.id };
    }
    return null;
  },

  formatarCodigoJava(codigo) {
    if (!codigo) return '';
    let html = codigo
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    html = html.replace(/"([^"\\]|\\.)*"/g, match => `<span class="monokai-string">${match}</span>`);
    html = html.replace(/(\/\/.*$)/gm, match => `<span class="monokai-comment">${match}</span>`);
    html = html.replace(/(\/\*[\s\S]*?\*\/)/g, match => `<span class="monokai-comment">${match}</span>`);
    this.PALAVRAS_CHAVE.forEach(kw => {
      const regex = new RegExp(`\\b${kw}\\b`, 'g');
      html = html.replace(regex, match => `<span class="monokai-keyword">${match}</span>`);
    });
    const placeholder = '___SPAN___';
    const spans = [];
    html = html.replace(/<span\b[^>]*>.*?<\/span>/g, match => {
      spans.push(match);
      return placeholder;
    });
    html = html.replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, (match, p1) => {
      if (this.TIPOS_COMUNS.has(p1)) {
        return `<span class="monokai-type">${match}</span>`;
      }
      return match;
    });
    html = html.replace(/\b(\d+\.?\d*)\b/g, match => `<span class="monokai-number">${match}</span>`);
    let i = 0;
    html = html.replace(new RegExp(placeholder, 'g'), () => spans[i++] || '');
    return html;
  },

  renderizarDiagramaCondicional(tituloCondicao, blocoVerdadeiro, blocoFalso) {
    const condicaoFormatada = tituloCondicao || 'condition';
    const codigoTrue = blocoVerdadeiro || '// Ação se verdadeiro';
    const codigoFalse = blocoFalso || '// Ação se falso';
    return `
    <div class="flex flex-col md:flex-row gap-6 my-8">
      <div class="flex-1 bg-emerald-50 border border-emerald-200 rounded-lg p-5 text-center">
        <h4 class="font-mono text-sm font-bold text-emerald-700 mb-2">Condition is TRUE</h4>
        <p class="text-xs text-emerald-600 mb-3 font-mono">${condicaoFormatada}</p>
        <div class="bg-white border border-emerald-300 rounded-md p-3 font-mono text-xs text-slate-700 text-left">
          <pre class="whitespace-pre-wrap">${codigoTrue}</pre>
        </div>
      </div>
      <div class="md:hidden border-t-2 border-dashed border-slate-300 my-2"></div>
      <div class="hidden md:flex items-center">
        <div class="border-l-2 border-dashed border-slate-300 h-24"></div>
      </div>
      <div class="flex-1 bg-red-50 border border-red-200 rounded-lg p-5 text-center">
        <h4 class="font-mono text-sm font-bold text-red-700 mb-2">Condition is FALSE</h4>
        <p class="text-xs text-red-600 mb-3 font-mono">!(${condicaoFormatada})</p>
        <div class="bg-white border border-red-300 rounded-md p-3 font-mono text-xs text-slate-700 text-left">
          <pre class="whitespace-pre-wrap">${codigoFalse}</pre>
        </div>
      </div>
    </div>`;
  },

  // Calcula dinamicamente o total de subcapítulos
  _calcularTotalAulas() {
    let total = 0;
    for (const cap of cursoJavaEstrutura) {
      total += cap.subcapitulos.length;
    }
    return total;
  },

  /**
   * Renderiza uma imagem responsiva com legenda
   */
  renderizarImagem(imgData) {
    if (!imgData || !imgData.src) return '';
    const { src, alt, legenda } = imgData;
    return `
      <figure class="my-6">
        <img 
          src="${src}" 
          alt="${alt || ''}" 
          class="rounded-lg shadow-md w-full max-w-[600px] h-auto mx-auto"
          loading="lazy"
        >
        ${legenda ? `<figcaption class="text-sm text-slate-500 text-center mt-2 italic">${legenda}</figcaption>` : ''}
      </figure>`;
  },

  renderizar(subcapituloId) {
    const container = document.getElementById('conteudo-aula');
    const dadosEstrutura = this.encontrarDadosSubcapitulo(subcapituloId);
    if (!dadosEstrutura) {
      container.innerHTML = `<div class="text-center py-20 text-red-500">Aula não encontrada: ${subcapituloId}</div>`;
      return;
    }

    // Buscar conteúdo real da aula (se já foi criado)
    const conteudoReal = window.conteudoAulas?.[subcapituloId];

    // Calcular progresso
    let numeroAula = 1;
    for (const cap of cursoJavaEstrutura) {
      for (const sub of cap.subcapitulos) {
        if (sub.id === subcapituloId) break;
        numeroAula++;
      }
      if (dadosEstrutura.capituloId === cap.id) break;
    }
    const totalAulas = this._calcularTotalAulas();
    const percentual = Math.round((Store.obterProgresso().length / totalAulas) * 100);

    // Construir cabeçalho comum
    let html = `
      <article class="max-w-none">
        <div class="flex items-baseline justify-between mb-4">
          <h1 class="text-3xl font-bold text-slate-900">${dadosEstrutura.titulo}</h1>
          <span class="text-sm text-slate-400 font-mono">Aula ${numeroAula} de ${totalAulas}</span>
        </div>
        <p class="text-sm text-slate-500 mb-2">📂 ${dadosEstrutura.capituloTitulo}</p>
        <div class="mb-8 bg-slate-100 rounded-full h-2 overflow-hidden">
          <div class="bg-blue-600 h-full rounded-full transition-all duration-500" style="width: ${percentual}%"></div>
        </div>
        <p class="text-xs text-slate-400 text-right mb-8">${percentual}% do curso concluído</p>
    `;

    if (conteudoReal) {
      // ---- Conteúdo real da aula ----

      // 1. Teoria
      if (conteudoReal.teoria) {
        html += `<div class="prose prose-slate max-w-none mb-8">${conteudoReal.teoria}</div>`;
      }

      // 2. Imagens
      if (conteudoReal.imagens && conteudoReal.imagens.length > 0) {
        html += conteudoReal.imagens.map(img => this.renderizarImagem(img)).join('');
      }

      // 3. Exemplos de código
      if (conteudoReal.exemplos && conteudoReal.exemplos.length > 0) {
        html += `<h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">Exemplos</h3>`;
        conteudoReal.exemplos.forEach((ex, idx) => {
          html += `
            <div class="mb-6">
              <h4 class="text-lg font-semibold text-slate-700 mb-2">${ex.titulo || `Exemplo ${idx + 1}`}</h4>
              <pre class="rounded-lg p-4 overflow-x-auto my-3 text-sm font-mono leading-relaxed" style="background-color: #272822;">
                <code>${this.formatarCodigoJava(ex.codigo)}</code>
              </pre>
              ${ex.explicacao ? `<p class="text-sm text-slate-600">${ex.explicacao}</p>` : ''}
            </div>`;
        });
      }

      // 4. Diagrama condicional (se definido na aula)
      if (conteudoReal.diagramaCondicional) {
        const d = conteudoReal.diagramaCondicional;
        html += this.renderizarDiagramaCondicional(d.condicao, d.blocoTrue, d.blocoFalse);
      }

      // 5. Exercícios de fixação
      if (conteudoReal.exercicios && conteudoReal.exercicios.length > 0) {
        html += `<h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">Exercícios de Fixação</h3>`;
        conteudoReal.exercicios.forEach((ex, idx) => {
          html += `
            <div class="bg-slate-50 p-4 rounded-lg mb-4">
              <p class="font-semibold text-slate-700 mb-2">${idx + 1}. ${ex.pergunta}</p>
              <ul class="list-none space-y-1 ml-4">
                ${ex.alternativas.map((alt, i) => `
                  <li class="text-sm text-slate-600">${String.fromCharCode(97 + i)}) ${alt}</li>
                `).join('')}
              </ul>
              <div class="mt-3 text-sm text-slate-500 italic">
                <strong>Resposta:</strong> ${String.fromCharCode(97 + ex.respostaCorreta)}. ${ex.explicacao || ''}
              </div>
            </div>`;
        });
      }
    } else {
      // Placeholder para aulas ainda não criadas
      html += `
        <div class="flex flex-col items-center justify-center py-16 text-center bg-slate-50 rounded-xl border border-slate-200">
          <div class="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-slate-700 mb-2">Conteúdo em desenvolvimento</h3>
          <p class="text-slate-500 max-w-md">Esta aula ainda está sendo preparada. Enquanto isso, explore outras já concluídas.</p>
        </div>`;
    }

    html += `</article>`;
    container.innerHTML = html;
  }
};