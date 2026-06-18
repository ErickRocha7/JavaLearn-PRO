// Arquivo: data/aulas/cap-05/sub-5-1.js
// Aula 5.1 – Modularização e Reutilização de Código

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-5-1'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Modularização e Reutilização de Código</h2>
    <p class="lesson-text text-slate-500 italic">A arte de dividir para conquistar a complexidade no desenvolvimento de software</p>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Diante de um problema complexo, a mente humana busca naturalmente dividi‑lo em partes menores e mais gerenciáveis. Essa estratégia, conhecida como <strong>"Dividir para Conquistar"</strong>, é a base da modularização em programação. Em Java, ela se materializa na criação de <strong>métodos</strong> — blocos de código independentes que encapsulam uma única responsabilidade e podem ser invocados sempre que necessário.</p>
    <p class="lesson-text">Nesta aula, vamos explorar por que a modularização é indispensável para a construção de sistemas robustos, como ela melhora a legibilidade, a manutenção e o reaproveitamento de código, qual é a anatomia de um método e, por fim, como o fluxo de execução gerencia essas idas e vindas nos bastidores da memória.</p>

    <h3 class="section-title">1. O Conceito de "Dividir para Conquistar"</h3>
    <p class="lesson-text">Imagine que você precise organizar um grande evento para 500 pessoas, cuidando simultaneamente de convites, buffet, música e decoração. Se tentasse centralizar todas as decisões, sua mente entraria em colapso. A solução natural é dividir: um fornecedor cuida da comida, outro da música, outro dos convites.</p>
    <p class="lesson-text">Na programação, o cenário é idêntico. Um software pode conter milhares de linhas. Escrevê‑las em um único bloco monolítico — o temido <strong>"código espaguete"</strong> — torna a leitura confusa, os erros inevitáveis e a manutenção um pesadelo. A modularização propõe o oposto: fatiar o sistema em pequenos especialistas, cada um responsável por uma tarefa muito bem definida.</p>
    <p class="lesson-text">Aplicando essa filosofia em Java, surgem os <strong>métodos</strong>. Cada método é um operário especializado: um calcula impostos, outro envia e‑mails, outro formata datas. O programa principal deixa de ser um operário sobrecarregado e assume o papel de <strong>maestro</strong>, que sabe quando cada especialista deve entrar em ação, mas não precisa entender os detalhes de seu funcionamento interno.</p>

    <div class="callout-analogy">
      <strong>Analogia:</strong> O programa principal é o maestro de uma orquestra. Ele não sabe tocar violino como o violinista, mas sabe exatamente o momento certo de reger cada músico. Os métodos são os instrumentistas, cada um especialista em sua própria partitura.
    </div>

    <h3 class="section-title">2. Benefícios da Modularização</h3>
    <p class="lesson-text">A divisão do código em métodos não é apenas uma boa prática estética — ela traz três vantagens colossais para o dia a dia do desenvolvedor.</p>

    <h4 class="subsection-title">2.1 Legibilidade: Código que se Lê como Prosa</h4>
    <p class="lesson-text">Em um sistema modularizado, o fluxo principal parece um sumário de livro: <code class="code-inline">validarCliente()</code>, <code class="code-inline">calcularFrete()</code>, <code class="code-inline">emitirNota()</code>. A complexidade de cada etapa fica encapsulada atrás de um nome significativo. Quem lê o código entende a intenção geral sem precisar decifrar os detalhes matemáticos ou de infraestrutura — uma aplicação direta do princípio da <strong>abstração</strong>.</p>

    <h4 class="subsection-title">2.2 Facilidade de Manutenção: O Efeito Recipiente</h4>
    <p class="lesson-text">Quando uma regra de negócio muda (por exemplo, a alíquota de um imposto), o desenvolvedor não precisa caçar a fórmula repetida em dez lugares diferentes. A lógica está contida em um único recipiente — o método <code class="code-inline">calcularImposto()</code>. A alteração é feita uma só vez, e todo o sistema passa a usar o novo cálculo automaticamente, eliminando o risco de inconsistências.</p>

    <h4 class="subsection-title">2.3 Eliminação de Código Duplicado: Reutilização Inteligente</h4>
    <p class="lesson-text">Operações comuns, como formatar uma data no padrão brasileiro, seriam reescritas dezenas de vezes em um sistema sem métodos. Com a modularização, a lógica é escrita uma única vez dentro de <code class="code-inline">formatarData()</code> e invocada sempre que necessário. Isso reduz o tamanho do código, facilita correções e diminui drasticamente a probabilidade de bugs.</p>

    <div class="callout-success">
      <strong>Dica:</strong> Sempre que você perceber que está copiando e colando um trecho de código, pergunte‑se: "Isso não deveria ser um método separado?" A resposta quase sempre será "sim".
    </div>

    <h3 class="section-title">3. Anatomia de um Método em Java</h3>
    <p class="lesson-text">Para que o computador reconheça um bloco como método, é necessário seguir uma estrutura rígida, composta por quatro elementos. Visualize‑a como a fachada de uma fábrica: ela informa quem pode entrar, que matérias‑primas são necessárias, qual produto será entregue e como a fábrica se chama.</p>

    <pre><code class="language-java">public double calcularMedia(double nota1, double nota2) {
    double media = (nota1 + nota2) / 2;
    return media;
}</code></pre>

    <ul class="topic-list space-y-3 mb-4">
      <li><strong>Modificador de acesso:</strong> A palavra inicial (<code class="code-inline">public</code>, <code class="code-inline">private</code>) controla a visibilidade do método. <code class="code-inline">public</code> é como uma tomada na parede — qualquer parte do sistema pode usá‑la. <code class="code-inline">private</code> é como o painel interno da cozinha — apenas a própria classe tem acesso.</li>
      <li><strong>Tipo de retorno:</strong> Indica o formato do resultado que o método devolverá ao final. Pode ser um número (<code class="code-inline">double</code>), um texto (<code class="code-inline">String</code>), um valor lógico (<code class="code-inline">boolean</code>) ou <code class="code-inline">void</code> quando o método apenas executa uma ação sem entregar nenhum valor de volta.</li>
      <li><strong>Nome do método:</strong> Deve ser um verbo significativo no infinitivo, seguindo o padrão <strong>camelCase</strong>: <code class="code-inline">calcularSalario()</code>, <code class="code-inline">enviarRelatorio()</code>. Um bom nome elimina a necessidade de comentários extras.</li>
      <li><strong>Parâmetros:</strong> São os ingredientes que o método recebe entre parênteses. <code class="code-inline">somar(int a, int b)</code> espera dois números inteiros. Se o método não precisar de dados externos, os parênteses permanecem vazios, mas são obrigatórios.</li>
    </ul>

    <h3 class="section-title">4. O Fluxo de Execução e a Pilha de Chamadas</h3>
    <p class="lesson-text">O computador executa instruções de cima para baixo, linha por linha. Quando encontra uma chamada de método, acontece uma coreografia precisa:</p>

    <ol class="list-decimal ml-6 space-y-2 mb-4">
      <li><strong>Pausa e marcação:</strong> A execução do programa principal é congelada. O endereço da linha atual é guardado em uma estrutura chamada <strong>Pilha de Execução</strong> (Call Stack), como um marcador de página.</li>
      <li><strong>Salto para o método:</strong> O processador desvia para o bloco do método e começa a executar suas instruções internas.</li>
      <li><strong>Execução isolada:</strong> Enquanto o método roda, o resto do sistema "espera". As variáveis criadas dentro dele são locais e temporárias.</li>
      <li><strong>Retorno e limpeza:</strong> Ao encontrar a palavra <code class="code-inline">return</code> (ou a chave de fechamento <code class="code-inline">}</code>), o método entrega o resultado, limpa suas variáveis locais e o processador retorna exatamente para a linha seguinte ao ponto de onde havia saído.</li>
    </ol>

    <div class="callout-analogy">
      <strong>Analogia:</strong> É como montar um guarda‑roupa seguindo um manual. Na etapa 4, o manual manda consultar a página 42 para instalar o espelho. Você marca a etapa 4 com o dedo, resolve o espelho na página 42 e depois volta exatamente para a etapa 5, sem se perder. A Pilha de Execução é o seu dedo marcando a página.
    </div>

    <p class="lesson-text">Esse mecanismo de "pausar, desviar, executar e retornar" ocorre milhões de vezes por segundo em qualquer aplicativo moderno. É ele que mantém a organização do software, permitindo que jogos, editores de texto e sistemas bancários executem tarefas complexas de forma coordenada e sem travamentos.</p>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">A modularização é o alicerce sobre o qual sistemas de software confiáveis e escaláveis são construídos. Ao dividir o código em métodos com responsabilidades únicas, ganhamos legibilidade, facilitamos a manutenção e promovemos a reutilização. Compreender a anatomia de um método e o fluxo de execução nos permite escrever códigos que não apenas funcionam, mas que também são elegantes, compreensíveis e preparados para evoluir ao longo do tempo.</p>
    <p class="lesson-text">Nas próximas aulas, aprofundaremos os mecanismos de passagem de argumentos — por valor e por referência — e exploraremos outros recursos que tornam os métodos ainda mais poderosos.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Código monolítico vs. código modularizado',
      codigo: `// ===== CÓDIGO MONOLÍTICO (EVITE) =====
public class SistemaMonolitico {
    public static void main(String[] args) {
        double preco1 = 100.0;
        double preco2 = 200.0;
        // cálculo misturado com exibição
        double soma = preco1 + preco2;
        double imposto = soma * 0.15;
        double total = soma + imposto;
        System.out.println("Total: " + total);
    }
}

// ===== CÓDIGO MODULARIZADO (PREFIRA) =====
public class SistemaModular {
    public static double calcularImposto(double valor) {
        return valor * 0.15;
    }

    public static void exibirTotal(double valor) {
        double imposto = calcularImposto(valor);
        System.out.println("Total com imposto: " + (valor + imposto));
    }

    public static void main(String[] args) {
        double preco1 = 100.0;
        double preco2 = 200.0;
        double soma = preco1 + preco2;
        exibirTotal(soma);
    }
}`,
      explicacao: 'O primeiro bloco mistura lógica de cálculo com exibição, dificultando a manutenção. O segundo separa as responsabilidades em métodos reutilizáveis: calcularImposto() pode ser chamado de qualquer lugar, e exibirTotal() centraliza a apresentação do resultado.'
    },
    {
      titulo: 'Método com retorno e parâmetros',
      codigo: `public class Calculadora {
    // Método que recebe dois inteiros e retorna a média
    public static double calcularMedia(int a, int b) {
        return (a + b) / 2.0;
    }

    // Método void: apenas exibe, sem retornar valor
    public static void exibirResultado(String nome, double media) {
        System.out.println("Aluno: " + nome);
        System.out.println("Média: " + media);
    }

    public static void main(String[] args) {
        double media = calcularMedia(7, 9);
        exibirResultado("João", media);
    }
}`,
      explicacao: 'calcularMedia() demonstra um método com tipo de retorno double e dois parâmetros. exibirResultado() é void — executa uma ação sem devolver valor. O fluxo principal main coordena as chamadas, mantendo a organização.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual a principal vantagem de dividir um programa em métodos?',
      alternativas: [
        'Aumentar a quantidade de linhas de código',
        'Tornar o código mais organizado, legível e fácil de manter',
        'Permitir que o programa execute mais rápido'
      ],
      respostaCorreta: 1,
      explicacao: 'A modularização organiza o código em blocos menores, cada um com uma responsabilidade específica, facilitando a leitura, a manutenção e a reutilização.'
    },
    {
      pergunta: 'O que significa o tipo de retorno void em um método?',
      alternativas: [
        'Que o método retorna um número inteiro',
        'Que o método não retorna nenhum valor',
        'Que o método pode retornar qualquer tipo de dado'
      ],
      respostaCorreta: 1,
      explicacao: 'void indica que o método executa uma ação (como imprimir uma mensagem) mas não entrega nenhum valor de volta para quem o chamou.'
    },
    {
      pergunta: 'Como se chama a estrutura que guarda o ponto de retorno quando um método é invocado?',
      alternativas: [
        'Variável global',
        'Pilha de Execução (Call Stack)',
        'Heap de memória'
      ],
      respostaCorreta: 1,
      explicacao: 'A Pilha de Execução é responsável por armazenar o endereço da instrução seguinte ao ponto de chamada, permitindo que o programa saiba para onde retornar após o término do método.'
    }
  ]
};