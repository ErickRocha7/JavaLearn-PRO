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

  renderizar(subcapituloId) {
    const container = document.getElementById('conteudo-aula');
    const dados = this.encontrarDadosSubcapitulo(subcapituloId);
    if (!dados) {
      container.innerHTML = `<div class="text-center py-20 text-red-500">Aula não encontrada: ${subcapituloId}</div>`;
      return;
    }

    let numeroAula = 1;
    for (const cap of cursoJavaEstrutura) {
      for (const sub of cap.subcapitulos) {
        if (sub.id === subcapituloId) break;
        numeroAula++;
      }
      if (dados.capituloId === cap.id) break;
    }
    const totalAulas = this._calcularTotalAulas();
    const percentual = Math.round((Store.obterProgresso().length / totalAulas) * 100);

    const exemploCodigo = 
`public class ExemploIf {
    public static void main(String[] args) {
        int nota = 85;
        
        if (nota >= 70) {
            System.out.println("Aprovado!");
        } else {
            System.out.println("Reprovado.");
        }
    }
}`;

    const codigoFormatado = this.formatarCodigoJava(exemploCodigo);
    const diagramaHTML = this.renderizarDiagramaCondicional(
      'nota >= 70',
      'System.out.println("Aprovado!");',
      'System.out.println("Reprovado.");'
    );

    container.innerHTML = `
      <article class="max-w-none">
        <div class="flex items-baseline justify-between mb-4">
          <h1 class="text-3xl font-bold text-slate-900">${dados.titulo}</h1>
          <span class="text-sm text-slate-400 font-mono">Aula ${numeroAula} de ${totalAulas}</span>
        </div>
        <p class="text-sm text-slate-500 mb-2">📂 ${dados.capituloTitulo}</p>
        <div class="mb-8 bg-slate-100 rounded-full h-2 overflow-hidden">
          <div class="bg-blue-600 h-full rounded-full transition-all duration-500" style="width: ${percentual}%"></div>
        </div>
        <p class="text-xs text-slate-400 text-right mb-8">${percentual}% do curso concluído</p>
        <div class="prose prose-slate max-w-none">
          <p class="text-base text-slate-700 leading-relaxed mb-4">
            Em Java, a estrutura condicional <code>if</code> permite executar blocos de código
            baseados em condições booleanas. Veja um exemplo completo:
          </p>
          <pre class="rounded-lg p-4 overflow-x-auto my-6 text-sm font-mono leading-relaxed" style="background-color: #272822;">
            <code>${codigoFormatado}</code>
          </pre>
          <p class="text-base text-slate-700 leading-relaxed mb-4">
            O fluxo de decisão pode ser visualizado no diagrama abaixo:
          </p>
          ${diagramaHTML}
          <p class="text-base text-slate-700 leading-relaxed mb-4">
            Palavras-chave como <code>if</code>, <code>else</code>, <code>true</code> e <code>false</code>
            são reservadas e não podem ser usadas como identificadores.
          </p>
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
            <p class="text-sm text-blue-800">
              <strong>💡 Dica:</strong> Sempre use chaves <code>{ }</code> mesmo em blocos de uma linha para evitar bugs sutis.
            </p>
          </div>
        </div>
      </article>`;
  }
};