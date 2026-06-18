// Arquivo: data/aulas/cap-05/sub-5-6.js
// Aula 5.6 – Recursão: Conceitos e Exemplos Simples

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-5-6'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Recursão: Conceitos e Exemplos Simples</h2>
    <p class="lesson-text text-slate-500 italic">Quando um método chama a si mesmo para resolver problemas de forma elegante</p>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Até agora, estudamos métodos que executam tarefas e podem chamar outros métodos. Mas existe uma categoria especial de métodos que, em determinado ponto, <strong>chamam a si mesmos</strong>. Essa técnica é chamada de <strong>recursão</strong> — uma das ferramentas mais poderosas e elegantes da computação, capaz de transformar problemas complexos em soluções concisas e surpreendentemente simples.</p>
    <p class="lesson-text">Diferente dos laços de repetição tradicionais (<code class="code-inline">while</code>, <code class="code-inline">for</code>), que repetem um bloco de forma externa e mecânica, a recursão cria um efeito de <strong>mergulho em camadas</strong>, onde cada chamada resolve uma fatia menor do problema até atingir um ponto mínimo — o <strong>caso base</strong> — que interrompe o ciclo. Nesta aula, vamos desvendar o pensamento recursivo, compreender a importância do critério de parada e explorar exemplos clássicos como o fatorial e a sequência de Fibonacci.</p>

    <h3 class="section-title">1. Pensamento Recursivo: O Desafio das Bonecas Russas</h3>
    <p class="lesson-text">Imagine uma <strong>Matrioska</strong> — aquela tradicional boneca russa de madeira que contém outra boneca menor em seu interior, que por sua vez contém outra ainda menor. Suponha que um pequeno anel de ouro esteja escondido no coração da menor boneca de todas, e você precisa encontrá‑lo.</p>

    <h4 class="subsection-title">1.1 A Abordagem Iterativa (Não Recursiva)</h4>
    <p class="lesson-text">Usando um raciocínio linear, você criaria um plano mecânico: "Enquanto houver bonecas, abra a boneca atual, retire a casca, pegue a próxima e repita". Esse controle externo — um laço que gerencia a repetição — é típico das estruturas iterativas como <code class="code-inline">while</code>.</p>

    <h4 class="subsection-title">1.2 A Abordagem Recursiva</h4>
    <p class="lesson-text">Com o pensamento recursivo, você define um <strong>único procedimento</strong> chamado <code class="code-inline">abrirBoneca</code>, que segue estas regras:</p>
    <ol class="list-decimal ml-6 space-y-1 mb-4">
      <li>Abra a boneca atual.</li>
      <li>O anel está aqui? Se sim, problema resolvido.</li>
      <li>Se não, existe outra boneca menor dentro? Se sim, <strong>chame novamente <code class="code-inline">abrirBoneca</code></strong> passando essa boneca menor.</li>
    </ol>

    <p class="lesson-text">Observe a diferença: não há um laço externo. O próprio método <strong>invoca a si mesmo</strong> para lidar com a próxima camada. Essa é a essência da recursão: uma função que se chama repetidamente, sempre com uma versão reduzida do problema original.</p>

    <div class="callout-analogy">
      <strong>Na memória RAM:</strong> cada chamada recursiva cria uma <strong>nova gaveta</strong> na Pilha de Execução (Stack). A chamada atual é pausada, suas variáveis são congeladas, e o processador salta para a nova cópia do método — como abrir uma nova instância do manual de instruções. Esse empilhamento continua até que a menor boneca seja alcançada; depois, os resultados são desempilhados de volta, camada por camada.
    </div>

    <h3 class="section-title">2. Caso Base e Caso Recursivo</h3>
    <p class="lesson-text">Para que a recursão não se transforme em um ciclo infinito, todo algoritmo recursivo deve ser dividido em duas partes obrigatórias.</p>

    <h4 class="subsection-title">2.1 O Caso Recursivo (O Passo Adiante)</h4>
    <p class="lesson-text">É a parte do código que <strong>aciona a repetição</strong>. O método percebe que o problema atual ainda é grande demais e, em vez de tentar resolvê‑lo por inteiro, chama a si mesmo com um dado <strong>menor ou mais simples</strong> — como passar <code class="code-inline">numero - 1</code> ou uma boneca de tamanho reduzido. É o motor que impulsiona o mergulho nas camadas.</p>

    <h4 class="subsection-title">2.2 O Caso Base (O Critério de Parada)</h4>
    <p class="lesson-text">É a <strong>condição de segurança</strong> que interrompe a cadeia de chamadas. Geralmente, é uma estrutura <code class="code-inline">if</code> posicionada no início do método, que verifica se o problema já se reduziu à sua <strong>menor instância possível</strong> — aquela cuja resposta é óbvia e não exige mais cálculos. No exemplo das bonecas, o caso base é encontrar o anel na última boneca ou constatar que não há mais bonecas para abrir.</p>

    <div class="callout-warning">
      <strong>O perigo da omissão:</strong> se o caso base estiver ausente ou for mal definido, o método continuará chamando a si mesmo indefinidamente. Cada chamada consome um espaço na memória Stack. Quando essa memória se esgota, o Java lança o temido <strong><code class="code-inline">StackOverflowError</code></strong> — o equivalente digital a empilhar pratos até o teto: a estrutura desaba e o programa é abortado.
    </div>

    <h3 class="section-title">3. Exemplos Clássicos</h3>
    <p class="lesson-text">Dois problemas matemáticos simples ilustram perfeitamente o poder e a elegância da recursão.</p>

    <h4 class="subsection-title">3.1 Fatorial: O Efeito Dominó Reverso</h4>
    <p class="lesson-text">O fatorial de um número inteiro positivo <code class="code-inline">n</code> (representado por <code class="code-inline">n!</code>) é o produto de todos os inteiros de 1 até <code class="code-inline">n</code>. Por exemplo, <code class="code-inline">5! = 5 × 4 × 3 × 2 × 1 = 120</code>. A versão recursiva explora o fato de que <code class="code-inline">n!</code> pode ser definido como <code class="code-inline">n × (n-1)!</code>, e <code class="code-inline">1!</code> é simplesmente <code class="code-inline">1</code>.</p>

    <pre><code class="language-java">int fatorial(int n) {
    if (n == 1) return 1;            // Caso Base
    return n * fatorial(n - 1);      // Caso Recursivo
}</code></pre>

    <p class="lesson-text">Acompanhe a execução de <code class="code-inline">fatorial(3)</code>:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Chamada 1:</strong> <code class="code-inline">n=3</code>. Não é 1. Pausa e pede <code class="code-inline">3 * fatorial(2)</code>.</li>
      <li><strong>Chamada 2:</strong> <code class="code-inline">n=2</code>. Não é 1. Pausa e pede <code class="code-inline">2 * fatorial(1)</code>.</li>
      <li><strong>Chamada 3:</strong> <code class="code-inline">n=1</code>. <strong>Caso base atingido!</strong> Retorna <code class="code-inline">1</code> e termina.</li>
    </ul>
    <p class="lesson-text">Agora, os resultados são desempilhados em um <strong>efeito dominó reverso</strong>: a Chamada 2 recebe <code class="code-inline">1</code>, calcula <code class="code-inline">2 × 1 = 2</code> e retorna. A Chamada 1 recebe <code class="code-inline">2</code>, calcula <code class="code-inline">3 × 2 = 6</code> e entrega o resultado final.</p>

    <h4 class="subsection-title">3.2 Fibonacci: A Ramificação em Árvore</h4>
    <p class="lesson-text">A sequência de Fibonacci é uma progressão onde cada número é a soma dos dois anteriores: <code class="code-inline">0, 1, 1, 2, 3, 5, 8, 13, 21...</code>. A regra matemática é <code class="code-inline">fib(n) = fib(n-1) + fib(n-2)</code>, com <code class="code-inline">fib(0) = 0</code> e <code class="code-inline">fib(1) = 1</code> como casos base.</p>

    <pre><code class="language-java">int fibonacci(int n) {
    if (n <= 1) return n;                    // Caso Base
    return fibonacci(n - 1) + fibonacci(n - 2); // Caso Recursivo
}</code></pre>

    <p class="lesson-text">Diferente do fatorial, que é linear, o Fibonacci cria uma <strong>árvore de chamadas</strong>. Para <code class="code-inline">fibonacci(4)</code>, o método se divide em <code class="code-inline">fibonacci(3)</code> e <code class="code-inline">fibonacci(2)</code>, que por sua vez se subdividem. Cada galho só para quando atinge <code class="code-inline">n = 0</code> ou <code class="code-inline">n = 1</code>. As folhas da árvore retornam seus valores, que são somados de volta até o tronco principal.</p>

    <p class="lesson-text">Essa estrutura de ramificação demonstra como a recursão pode modelar processos naturais de forma compacta — mas também revela sua principal desvantagem: repetir cálculos idênticos múltiplas vezes, o que pode ser ineficiente para valores grandes.</p>

    <h3 class="section-title">4. Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>StackOverflowError:</strong> ocorre quando a profundidade da recursão excede o limite da Pilha de Execução. Em Java, a Stack padrão comporta cerca de 10.000 chamadas, dependendo da configuração da JVM. Para problemas que exigem profundidade maior, a solução iterativa é preferível.</li>
      <li><strong>Recursão de cauda (tail recursion):</strong> quando a chamada recursiva é a última instrução do método, e seu resultado é retornado diretamente. Algumas linguagens otimizam esse caso, mas o Java <strong>não</strong> realiza otimização de tail recursion nativamente.</li>
      <li><strong>Recursão vs. Iteração:</strong> todo algoritmo recursivo pode ser convertido para uma versão iterativa usando laços e, se necessário, uma pilha explícita. A escolha entre um e outro envolve legibilidade, consumo de memória e desempenho.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">A recursão é uma técnica que permite expressar soluções de forma elegante e compacta, transformando problemas aparentemente complexos em definições que remetem a si mesmas. Dominar a distinção entre caso base e caso recursivo é essencial para evitar erros fatais como o <code class="code-inline">StackOverflowError</code>. Os exemplos do fatorial e de Fibonacci mostram como a recursão pode criar desde um simples encadeamento linear até uma árvore de chamadas — ambas as formas desfazendo‑se ordenadamente como um castelo de cartas ao atingir o critério de parada.</p>
    <p class="lesson-text">Nas próximas aulas, exploraremos boas práticas de codificação, incluindo coesão e tamanho ideal de métodos, que complementarão a arte de escrever código recursivo e modular com qualidade profissional.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Fatorial recursivo passo a passo',
      codigo: `public class Fatorial {
    public static int fatorial(int n) {
        if (n == 1) {
            return 1;               // caso base
        }
        return n * fatorial(n - 1); // caso recursivo
    }

    public static void main(String[] args) {
        System.out.println("5! = " + fatorial(5)); // 120
        System.out.println("3! = " + fatorial(3)); // 6
    }
}`,
      explicacao: 'O método fatorial chama a si mesmo com n-1 até que n seja 1 (caso base). Cada chamada empilha uma multiplicação pendente; quando o caso base é atingido, os resultados são multiplicados na ordem inversa (efeito dominó reverso).'
    },
    {
      titulo: 'Fibonacci recursivo com visualização da árvore de chamadas',
      codigo: `public class Fibonacci {
    public static int fib(int n) {
        if (n <= 1) {
            return n;                       // casos base: fib(0)=0, fib(1)=1
        }
        return fib(n - 1) + fib(n - 2);     // caso recursivo (ramificação dupla)
    }

    public static void main(String[] args) {
        System.out.println("fib(0) = " + fib(0));  // 0
        System.out.println("fib(1) = " + fib(1));  // 1
        System.out.println("fib(5) = " + fib(5));  // 5
        System.out.println("fib(7) = " + fib(7));  // 13
    }
}

// Árvore de chamadas para fib(4):
//           fib(4)
//          /      \\
//     fib(3)      fib(2)
//     /    \\      /    \\
// fib(2)  fib(1) fib(1) fib(0)
//  /    \\
// fib(1) fib(0)`,
      explicacao: 'O método fibonacci ramifica‑se em duas chamadas recursivas. A árvore mostra como fib(4) gera fib(3) e fib(2), que se subdividem até atingir fib(1) ou fib(0). As folhas retornam valores que são somados de volta.'
    },
    {
      titulo: 'Cuidado com a ausência do caso base (StackOverflowError)',
      codigo: `public class SemCasoBase {
    // MÉTODO INCORRETO — sem caso base!
    public static void loopInfinito(int x) {
        System.out.println("x = " + x);
        loopInfinito(x + 1);  // nunca para
    }

    public static void main(String[] args) {
        loopInfinito(1); // StackOverflowError após alguns milhares de chamadas
    }
}`,
      explicacao: 'Sem um caso base que interrompa a recursão, o método chama a si mesmo indefinidamente. Cada chamada consome memória na Stack; quando o limite é atingido, a JVM lança StackOverflowError e o programa é abortado.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual é a principal característica de um método recursivo?',
      alternativas: [
        'Ele utiliza um laço for para repetir instruções.',
        'Ele chama a si mesmo em algum ponto de sua execução.',
        'Ele retorna sempre um valor do tipo boolean.'
      ],
      respostaCorreta: 1,
      explicacao: 'Um método recursivo é aquele que, em seu corpo, invoca o próprio método, geralmente com um argumento reduzido, até que uma condição de parada (caso base) seja satisfeita.'
    },
    {
      pergunta: 'O que é o "caso base" em um algoritmo recursivo?',
      alternativas: [
        'A primeira linha de código do método.',
        'A condição que interrompe a recursão, representando a menor instância do problema.',
        'O trecho que chama o método novamente com um valor maior.'
      ],
      respostaCorreta: 1,
      explicacao: 'O caso base é a condição de parada — a versão mais simples do problema, que pode ser resolvida diretamente sem novas chamadas recursivas. Sem ele, a recursão entra em loop infinito e causa StackOverflowError.'
    },
    {
      pergunta: 'Qual erro o Java lança se uma recursão não possui caso base adequado?',
      alternativas: [
        'NullPointerException',
        'ArithmeticException',
        'StackOverflowError'
      ],
      respostaCorreta: 2,
      explicacao: 'A ausência de um caso base (ou um caso base inatingível) faz com que o método se chame infinitamente, consumindo toda a memória da Pilha de Execução (Stack). Quando esse limite é ultrapassado, a JVM lança StackOverflowError.'
    },
    {
      pergunta: 'No método fatorial recursivo, o que acontece quando a chamada atinge n == 1?',
      alternativas: [
        'O método continua chamando a si mesmo com n = 0.',
        'O método retorna 1 e inicia o desempilhamento das chamadas anteriores.',
        'O método lança uma exceção por divisão por zero.'
      ],
      respostaCorreta: 1,
      explicacao: 'Ao atingir n == 1, o caso base é satisfeito. O método retorna 1 sem fazer novas chamadas. A partir daí, as chamadas anteriores (que estavam pausadas) são desempilhadas e multiplicam seus respectivos valores de n pelo resultado recebido.'
    }
  ]
};