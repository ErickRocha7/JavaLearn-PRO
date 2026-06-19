// Arquivo: data/aulas/cap-01/sub-1-3.js
// Aula 1.3 – Primeiro Programa: Hello World Explicado

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-3'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Primeiro Programa: Hello World Explicado</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Para quem está começando, o primeiro código em uma nova linguagem de programação pode parecer uma sequência de palavras mágicas e sem sentido. Vamos desmistificar o famoso "Hello World" (Olá, Mundo) em Java, explicando o que cada termo faz, por que ele está ali e como o computador entende tudo isso.</p>

    <p class="lesson-text">O código completo é este:</p>
    <pre><code class="language-java">public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>

    <p class="lesson-text">Para uma pessoa leiga, podemos comparar a estrutura desse código com a organização de um livro em uma biblioteca. A classe <code class="code-inline">HelloWorld</code> é o livro em si; o método <code class="code-inline">main</code> é o capítulo principal por onde a leitura deve obrigatoriamente começar; e a linha <code class="code-inline">System.out.println</code> é a frase escrita na página que você quer que o leitor leia em voz alta. Vamos analisar cada pedaço dessa estrutura.</p>

    <h3 class="section-title">1. A Estrutura Externa: A Classe (<code class="code-inline">public class HelloWorld</code>)</h3>
    <p class="lesson-text">No Java, nada existe solto. Todo código precisa estar protegido e organizado dentro de uma estrutura chamada <strong>classe</strong>. Pense na classe como uma caixa ou um contêiner que guarda as instruções do seu programa. No nosso livro da biblioteca, a classe é o volume que reúne todas as páginas.</p>

    <ul class="topic-list space-y-3 mb-4">
      <li><strong><code class="code-inline">public</code> (Público):</strong> É um modificador de acesso. Ele avisa ao computador que essa "caixa" é pública, ou seja, o sistema operacional e a máquina que vai rodar o Java têm permissão total para enxergar e acessar o que está lá dentro. É como uma placa de "acesso livre" na capa do livro.</li>
      <li><strong><code class="code-inline">class</code> (Classe):</strong> É a palavra-chave que avisa ao Java: "Atenção, estou criando uma nova classe (um novo programa ou componente) a partir daqui". É o equivalente a estampar a palavra "LIVRO" na capa.</li>
      <li><strong><code class="code-inline">HelloWorld</code> (Nome da Classe):</strong> É o título que escolhemos para o nosso programa. Seguimos o estilo <strong>CamelCase</strong> (primeira letra de cada palavra em maiúscula, sem espaços). No Java, existe uma regra de ouro: o nome do arquivo no seu computador precisa ser <strong>exatamente igual</strong> ao nome da classe pública, incluindo letras maiúsculas e minúsculas. Portanto, este arquivo obrigatoriamente se chama <code class="code-inline">HelloWorld.java</code>. Qualquer diferença — como <code class="code-inline">helloworld.java</code> ou <code class="code-inline">hello_world.java</code> — fará o computador travar com erro.</li>
      <li><strong>As Chaves <code class="code-inline">{ }</code>:</strong> Logo após o nome da classe há uma chave abrindo <code class="code-inline">{</code> e, na última linha, uma chave fechando <code class="code-inline">}</code>. Essas chaves funcionam como as capas do livro: tudo o que está entre elas pertence à classe <code class="code-inline">HelloWorld</code>. É o "corpo" do programa. Se algo ficar fora, o Java não reconhece.</li>
    </ul>

    <div class="callout-warning">
      <strong>Alerta importante:</strong> O Java é extremamente sensível a letras maiúsculas e minúsculas (o chamado <strong>case‑sensitive</strong>). Para ele, <code class="code-inline">System</code> é completamente diferente de <code class="code-inline">system</code>, e <code class="code-inline">String</code> não é a mesma coisa que <code class="code-inline">string</code>. Iniciantes costumam tropeçar nisso por vício de digitação, então fique atento a cada letra ao escrever seu código.
    </div>

    <h3 class="section-title">2. O Motor de Arranque: O Método Principal (<code class="code-inline">public static void main(String[] args)</code>)</h3>
    <p class="lesson-text">Se você tentar rodar uma classe vazia, o computador não fará nada. O Java precisa de um ponto de partida universal. Esse ponto é o método <code class="code-inline">main</code>. Ele funciona como o Capítulo 1 do nosso livro, aquele por onde toda leitura deve começar. Sem ele, o Java não liga o programa.</p>

    <ul class="topic-list space-y-3 mb-4">
      <li><strong><code class="code-inline">public</code> (Público):</strong> Novamente, indica que o método é público. O sistema precisa conseguir acioná‑lo de fora da classe para dar a partida. É o botão de ligar acessível na capa.</li>
      <li>
        <strong><code class="code-inline">static</code> (Estático):</strong> Este é um dos conceitos mais desafiadores para iniciantes, mas uma analogia simples resolve: imagine que você deseja abrir uma fábrica de camisetas. Existe a planta (o projeto arquitetônico) e a fábrica real (o prédio com máquinas). No Java, a classe (<code class="code-inline">HelloWorld</code>) é a planta — apenas o desenho que descreve como o programa deve funcionar. Para criar algo concreto na memória do computador a partir dessa planta, usaríamos o comando <code class="code-inline">new HelloWorld()</code>, que constrói um objeto (a fábrica física). Agora, o problema: se o botão de ligar estivesse dentro de um objeto, a JVM precisaria primeiro construir a fábrica para depois ligá‑la — mas quem daria a ordem de construção se o programa ainda nem começou? Seria um paradoxo. A palavra <code class="code-inline">static</code> resolve isso: ela coloca o método <code class="code-inline">main</code> diretamente na planta, e não no prédio físico. Assim, a JVM não precisa gastar tempo criando um objeto; ela olha para a planta e aperta o interruptor geral, que está no poste da rua, direto no projeto do terreno. Você bate a chave e tudo ganha vida imediatamente. Em termos técnicos, <code class="code-inline">static</code> permite que a JVM chame <code class="code-inline">HelloWorld.main</code> sem antes executar <code class="code-inline">new HelloWorld()</code>.
      </li>
      <li>
        <strong><code class="code-inline">void</code> (Vazio):</strong> Para entender o <code class="code-inline">void</code>, pense em uma relação de troca no dia a dia. Se você pede a um garçom a conta da mesa, ele vai ao sistema, calcula e retorna para você um papel com o valor — isso seria um método que devolve um número. Agora, se você pede ao mesmo garçom para limpar uma poça d'água no chão, ele pega o pano, limpa e a tarefa acaba. Ele não volta com um pedaço do chão nem com um relatório; apenas executou a ação. <code class="code-inline">void</code> significa exatamente isso: "vazio". O método <code class="code-inline">main</code> é como o garçom do segundo cenário: sua única missão é mostrar a mensagem na tela. Ele não precisa calcular nada, nem devolver um valor ao sistema operacional. Ele faz e pronto — uma viagem sem retorno.
      </li>
      <li><strong><code class="code-inline">main</code> (Principal):</strong> É o nome exato que o Java procura, sempre com letras minúsculas. Se você escrever <code class="code-inline">Main</code> (com M maiúsculo) ou errar uma letra, o Java não reconhecerá o início do programa e exibirá um erro. É a senha de ignição.</li>
      <li><strong><code class="code-inline">(String[] args)</code> (Os Parâmetros):</strong> São os fios de entrada do botão de ligar. Tudo o que fica entre parênteses depois de um método são seus parâmetros. Aqui, <code class="code-inline">String[]</code> significa "um conjunto de textos" (o que chamamos de array, e que você estudará a fundo no Capítulo 6 – Arrays). <code class="code-inline">args</code> é apenas uma abreviação de <em>arguments</em> (argumentos). Esses parâmetros permitem que, ao iniciar o programa pela linha de comando, você envie informações extras, como nomes de arquivos ou configurações. No nosso Hello World, não passamos nada, e o conjunto fica vazio — mas o Java exige que essa tomada esteja desenhada ali, como parte do formato oficial do ponto de partida.</li>
    </ul>

    <p class="lesson-text">Assim como a classe, o método <code class="code-inline">main</code> também tem seu próprio par de chaves <code class="code-inline">{ }</code>, que delimitam o capítulo: tudo que estiver aí dentro será executado em sequência.</p>

    <h3 class="section-title">3. A Ação: Exibindo a Mensagem (<code class="code-inline">System.out.println("Hello, World!");</code>)</h3>
    <p class="lesson-text">Finalmente, chegamos à linha que faz o trabalho visível. É o comando que manda o computador conversar com o usuário. Observe o uso dos pontos (<code class="code-inline">.</code>): eles funcionam como um caminho de afunilamento, indo do geral ao específico, como Mundo → Brasil → Cidade → Casa → Quarto → Gaveta.</p>

    <ul class="topic-list space-y-3 mb-4">
      <li><strong><code class="code-inline">System</code> (Sistema):</strong> É uma classe nativa do Java, o "Grande Almoxarifado" do computador. Dá acesso a recursos físicos como teclado, tela e relógio.</li>
      <li><strong><code class="code-inline">.out</code> (Saída):</strong> Dentro do almoxarifado, escolhemos o corredor de saída padrão. <code class="code-inline">.out</code> é o canal que leva à tela (especificamente ao console ou terminal). Mais adiante, no Capítulo 1.5, você conhecerá o corredor de entrada, <code class="code-inline">System.in</code>, usado com a classe <code class="code-inline">Scanner</code> para receber dados do teclado.</li>
      <li><strong><code class="code-inline">.println</code> (Imprimir Linha):</strong> É a ação concreta. Abreviação de "Print Line", ela ordena: "Pegue o que está entre os parênteses, mostre na tela e, depois que terminar, pule para a próxima linha". (Existe um irmão <code class="code-inline">print</code> que não pula linha, mas aqui queremos organização visual.)</li>
      <li><strong><code class="code-inline">("Hello, World!")</code>:</strong> O texto a ser exibido deve obrigatoriamente estar entre aspas duplas. Na programação, textos são chamados de <strong>Strings</strong>. As aspas funcionam como paredes de isolamento: elas avisam ao Java para não tentar interpretar aquelas palavras como comandos ou variáveis; devem ser apenas copiadas e mostradas na tela. Se você esquecê‑las, o Java achará que <code class="code-inline">Hello</code> e <code class="code-inline">World</code> são ordens do sistema e travará.</li>
    </ul>

    <p class="lesson-text"><strong>O Ponto e Vírgula <code class="code-inline">;</code>:</strong> No português usamos o ponto final para encerrar uma frase. No Java, usamos o ponto e vírgula como o ponto final dos comandos. Ele diz: "Esta instrução acabou, pode passar para a próxima linha". Esquecê‑lo é o erro mais comum de iniciantes, pois o computador tentará emendar a linha com a seguinte, gerando uma confusão de leitura.</p>

    <h3 class="section-title">4. O Ciclo de Vida: O Que Acontece Por Trás dos Panos</h3>
    <p class="lesson-text">Quando você salva o arquivo e manda o computador rodar, não há mágica instantânea. O processo ocorre em duas etapas bem definidas.</p>

    <h4 class="subsection-title">Etapa 1 – Compilação (o Tradutor <code class="code-inline">javac</code>)</h4>
    <p class="lesson-text">O computador não entende <code class="code-inline">public class</code>. Ele só entende pulsos elétricos representados por 0 e 1 (código binário). O código que escrevemos é <strong>Código‑Fonte</strong> (<code class="code-inline">.java</code>), feito para humanos. Precisamos de um tradutor: o compilador Java, acionado pelo comando <code class="code-inline">javac</code>.</p>
    <p class="lesson-text">O compilador lê o arquivo <code class="code-inline">HelloWorld.java</code> como um professor de gramática rigoroso: verifica se todas as chaves e pontos e vírgulas estão corretos, se o nome do arquivo bate com a classe, se a sintaxe está perfeita. Se encontrar um único erro, interrompe o processo e exibe uma mensagem. Se tudo estiver certo, ele traduz o código para uma linguagem intermediária chamada <strong>Bytecode</strong> e gera um arquivo <code class="code-inline">HelloWorld.class</code>. Esse Bytecode não é para humanos lerem — é um conjunto compacto de instruções universais.</p>

    <h4 class="subsection-title">Etapa 2 – Execução (A Máquina Virtual Java – JVM)</h4>
    <p class="lesson-text">Agora entra em cena a <strong>JVM (Java Virtual Machine)</strong>, acionada pelo comando <code class="code-inline">java</code>. Imagine‑a como um computador de mentira que roda dentro do seu computador real. Ela carrega o <code class="code-inline">HelloWorld.class</code>, procura obstinadamente pelo método <code class="code-inline">main</code> (o ponto de partida) e começa a executar.</p>
    <p class="lesson-text">Porém, o chip do seu computador (Intel, AMD, etc.) ainda não entende Bytecode diretamente. A JVM então faz uma tradução em tempo real: converte o Bytecode genérico para o código binário específico da sua máquina (Windows, Mac, Linux, celular…). É graças a essa camada que um mesmo programa Java roda em qualquer lugar — cada JVM sabe traduzir para o chip local.</p>
    <p class="lesson-text">Na verdade, a JVM é ainda mais esperta: ela possui um componente chamado <strong>compilador JIT</strong> (Just‑In‑Time Compiler). Enquanto o programa roda, o JIT identifica trechos de bytecode que são executados com muita frequência e os transforma diretamente em código de máquina nativo, deixando tudo mais veloz. Para o nosso simples Hello World, a noção de "tradução em tempo real" já explica o essencial, mas saiba que existe essa inteligência por baixo dos panos.</p>
    <p class="lesson-text">Em seguida, a JVM executa a ordem <code class="code-inline">System.out.println</code>. Ela conversa com o sistema operacional: "Desenhe na tela os caracteres Hello, World! e pule uma linha". Em milissegundos, a frase aparece no console.</p>
    <p class="lesson-text">Quando o método <code class="code-inline">main</code> termina, a thread principal (a linha de execução que começou no <code class="code-inline">main</code>) chega ao fim. Se não houver outras threads ainda ativas (algo que você explorará no Capítulo 19 – Concorrência), a JVM inicia o processo de encerramento, libera a memória que foi usada e se desliga com segurança. A metáfora do livro é útil: a leitura do capítulo principal acabou, ninguém mais está usando o livro, então a biblioteca o guarda de volta na estante.</p>

    <h4 class="subsection-title">Resumo visual do fluxo</h4>
    <div class="terminal-output">
HelloWorld.java ➡️ Código‑Fonte (editado pelo humano)

javac HelloWorld.java ➡️ compilação: verifica erros e gera HelloWorld.class

HelloWorld.class ➡️ Bytecode (linguagem intermediária, para a JVM)

java HelloWorld ➡️ a JVM carrega o .class, localiza main, traduz o bytecode
necessário para o código de máquina do seu processador e executa.

Resultado: Hello, World! aparece no console, e a JVM encerra.
    </div>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Com esse passeio, cada palavra do código deixou de ser um mistério. Você compreendeu a estrutura do programa (a classe como livro, o método <code class="code-inline">main</code> como capítulo de partida e a linha de comando como a frase lida em voz alta), e viu todo o ciclo de vida — da compilação à execução final. Dominar essa anatomia é o primeiro passo sólido na jornada que, ao longo deste curso, vai levá‑lo muito além: passando por entrada de dados (Capítulo 1.5), estruturas de controle, orientação a objetos, coleções, concorrência e muito mais. Mas tudo começa com um simples e poderoso <strong>Hello, World!</strong>.</p>
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