// Arquivo: data/aulas/cap-01/sub-1-3.js
// Aula 1.3 – Primeiro Programa: Hello World Explicado

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-3'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Primeiro Programa: Hello World Explicado</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">O programa "Hello World" é o ritual de iniciação em qualquer linguagem de programação. Em Java, por trás de suas poucas linhas, escondem-se os alicerces que sustentam todas as aplicações profissionais. Longe de ser um simples exercício decorativo, compreender cada palavra desse código é dominar a sintaxe fundamental, o modelo de execução e as boas práticas que o acompanharão por toda a sua jornada como desenvolvedor.</p>

    <pre><code class="language-java">public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>

    <p class="lesson-text">Este material foi desenhado para desmontar essa estrutura peça por peça. Vamos além de uma explicação superficial: você entenderá o <strong>porquê</strong> de cada termo, o <strong>como</strong> o computador processa suas instruções e o <strong>para que</strong> servem as regras aparentemente rígidas da linguagem.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de abrir o código, precisamos alinhar três conceitos que formam a espinha dorsal do Java.</p>

    <h4 class="subsection-title">1. Tudo é objeto (e toda ação vive dentro de uma classe)</h4>
    <p class="lesson-text">Java é uma linguagem orientada a objetos. Isso significa que não existe código "solto" em um arquivo: cada função, cada variável, cada instrução deve pertencer a uma <strong>classe</strong>. Uma classe é um molde que define um conjunto de características (atributos) e comportamentos (métodos).</p>

    <h4 class="subsection-title">2. O ponto de entrada é o método <code class="code-inline">main</code></h4>
    <p class="lesson-text">Um programa Java pode ter dezenas de classes, mas o motor de arranque é um método especial chamado <code class="code-inline">main</code>. É a única porta que o sistema operacional conhece para iniciar a execução.</p>

    <h4 class="subsection-title">3. O código Java é compilado para bytecode</h4>
    <p class="lesson-text">Você escreve texto (<code class="code-inline">.java</code>), mas o computador não entende texto. O Java usa um modelo de dois estágios: primeiro, o compilador <code class="code-inline">javac</code> converte seu código-fonte em bytecode (<code class="code-inline">.class</code>). Depois, a JVM lê esse bytecode e o executa, traduzindo-o em tempo real para o código nativo do sistema operacional.</p>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. A Classe <code class="code-inline">HelloWorld</code> – O Recipiente Obrigatório</h4>
    <p class="lesson-text">A primeira linha do código é:</p>
    <pre><code class="language-java">public class HelloWorld {</code></pre>
    <p class="lesson-text">Cada termo dessa declaração tem uma função específica e inegociável.</p>

    <ul class="topic-list space-y-3 mb-4">
      <li><strong><code class="code-inline">public</code> – O modificador de acesso:</strong> Define a visibilidade da classe. <code class="code-inline">public</code> significa que esta classe pode ser acessada por qualquer outro código do sistema, inclusive pela JVM.</li>
      <li><strong><code class="code-inline">class</code> – A palavra reservada que cria uma classe:</strong> Indica ao compilador que estamos definindo um novo tipo de estrutura.</li>
      <li><strong><code class="code-inline">HelloWorld</code> – O nome da classe:</strong> Seguimos a convenção <strong>PascalCase</strong>: primeira letra maiúscula. <strong>Regra de ouro:</strong> O nome da classe pública deve ser <strong>exatamente</strong> igual ao nome do arquivo.</li>
    </ul>

    <div class="callout-warning">
      <strong>Java é case-sensitive!</strong> Se o código declara <code class="code-inline">HelloWorld</code>, o arquivo deve se chamar <code class="code-inline">HelloWorld.java</code>. Um arquivo <code class="code-inline">helloworld.java</code> resultará em erro de compilação.
    </div>

    <h4 class="subsection-title">2. O Método <code class="code-inline">main</code> – O Coração do Programa</h4>
    <p class="lesson-text">Dentro da classe, encontramos o bloco:</p>
    <pre><code class="language-java">public static void main(String[] args) {</code></pre>
    <p class="lesson-text">Essa linha é o <strong>ponto de entrada</strong> (entry point). Cada palavra desempenha um papel crucial:</p>

    <ul class="topic-list space-y-3 mb-4">
      <li><strong><code class="code-inline">public</code>:</strong> O método de início precisa ser acessível de fora. A JVM é um agente externo que chamará <code class="code-inline">main</code>.</li>
      <li><strong><code class="code-inline">static</code>:</strong> Permite que o método seja invocado diretamente a partir da classe, sem a necessidade de construir um objeto antes. No momento da partida, nenhum objeto ainda existe.</li>
      <li><strong><code class="code-inline">void</code>:</strong> Indica que o método não retorna nenhum valor.</li>
      <li><strong><code class="code-inline">main</code>:</strong> Nome exato que a JVM procura. Qualquer variação (<code class="code-inline">Main</code>, <code class="code-inline">MAIN</code>) fará com que a JVM não encontre o ponto de entrada.</li>
      <li><strong><code class="code-inline">String[] args</code>:</strong> Array que recebe argumentos da linha de comando.</li>
    </ul>

    <h4 class="subsection-title">3. Sintaxe Essencial: Os Símbolos que Estruturam o Código</h4>

    <p class="lesson-text"><strong>Chaves <code class="code-inline">{ }</code> – Delimitadores de Bloco:</strong> As chaves definem <strong>escopos</strong>: onde começa e onde termina um bloco de código. <strong>Regra fundamental:</strong> Toda chave aberta <code class="code-inline">{</code> precisa ter uma chave de fechamento <code class="code-inline">}</code> correspondente.</p>

    <div class="callout-analogy">
      <strong>Analogia:</strong> As chaves são como as paredes de uma casa. A primeira <code class="code-inline">{</code> ergue a parede externa; o conteúdo da casa fica entre ela e a parede do outro lado. Se faltar uma parede, a construção fica aberta para o infinito e o fiscal (compilador) não aprova a obra.
    </div>

    <p class="lesson-text"><strong>Parênteses <code class="code-inline">( )</code> – Comunicação com Métodos:</strong> Indicam que aquele nome é um método e transportam os argumentos. Mesmo que um método não receba nenhum dado, os parênteses vazios <strong>são obrigatórios</strong>.</p>

    <p class="lesson-text"><strong>Ponto e vírgula <code class="code-inline">;</code> – O Finalizador de Instrução:</strong> Em Java, cada instrução completa deve ser terminada com <code class="code-inline">;</code>. Se você remover o <code class="code-inline">;</code>, o compilador enxergará duas instruções coladas e lançará o erro <em>"';' expected"</em>.</p>

    <h4 class="subsection-title">4. Compilação e Execução: Do Texto ao Resultado</h4>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Compilação:</strong> <code class="code-inline">javac HelloWorld.java</code> — O compilador lê o arquivo <code class="code-inline">.java</code> e gera <code class="code-inline">HelloWorld.class</code> contendo bytecode.</li>
      <li><strong>Execução:</strong> <code class="code-inline">java HelloWorld</code> — O comando inicia a JVM, que carrega o <code class="code-inline">.class</code> e executa as instruções.</li>
    </ul>

    <div class="callout-success">
      <strong>Dica prática:</strong> Ao digitar <code class="code-inline">{</code>, pressione Enter e imediatamente digite <code class="code-inline">}</code>. Depois, volte e escreva o conteúdo entre elas. Isso garante que os pares nunca fiquem órfãos.
    </div>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">O programa Hello World é muito mais que uma tradição: é um microcosmo de toda a plataforma Java. Nele você encontra a obrigatoriedade das classes, a precisão dos modificadores, a rigidez sintática que garante robustez e o modelo de dois estágios (compilação + interpretação) que confere portabilidade.</p>
    <p class="lesson-text">Com essa base sólida, você está pronto para explorar tipos de dados, operadores e estruturas de controle, sabendo exatamente onde e como seu código será inserido no grande ecossistema Java.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Hello World completo com comandos de compilação e execução',
      codigo: `// Arquivo: HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

// ===== COMANDOS NO TERMINAL =====
// javac HelloWorld.java   -> Compilar
// java HelloWorld         -> Executar

// Saída esperada:
// Hello, World!

// Exemplo com argumentos de linha de comando:
// java HelloWorld Maria Joao
// args[0] = "Maria", args[1] = "Joao"`,
      explicacao: 'Este é o programa Java mais simples. A classe HelloWorld contém o método main, ponto de entrada da aplicação. O comando javac compila o código-fonte para bytecode (.class), e o comando java inicia a JVM que executa o bytecode.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual é a função do método main em um programa Java?',
      alternativas: [
        'Compilar o código-fonte para bytecode',
        'Servir como ponto de entrada (entry point) para a execução do programa',
        'Exibir mensagens na tela automaticamente'
      ],
      respostaCorreta: 1,
      explicacao: 'O método main é o ponto de entrada da aplicação. A JVM procura exatamente por public static void main(String[] args) para iniciar a execução do programa.'
    },
    {
      pergunta: 'O que acontece se você nomear o arquivo como "helloworld.java" (com letras minúsculas) mas a classe como "HelloWorld"?',
      alternativas: [
        'O programa compila e executa normalmente',
        'O compilador exibe um erro informando que o nome da classe pública deve corresponder ao nome do arquivo',
        'O programa compila, mas não executa'
      ],
      respostaCorreta: 1,
      explicacao: 'Java é case-sensitive. Se a classe pública se chama HelloWorld, o arquivo deve ser HelloWorld.java. Nomes diferentes geram erro de compilação.'
    }
  ]
};