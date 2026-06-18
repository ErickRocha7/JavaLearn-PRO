// Arquivo: data/aulas/cap-01/sub-1-6.js
// Aula 1.6 – Operadores Aritméticos e de Atribuição

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-6'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Operadores Aritméticos e de Atribuição</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Seu programa já sabe se comunicar com o usuário — agora ele precisa aprender a <strong>calcular</strong>. Os operadores aritméticos e de atribuição são os botões da calculadora que a linguagem Java coloca à sua disposição.</p>

    <h3 class="section-title">1. Operações Básicas: +, -, * e /</h3>
    <p class="lesson-text">Java suporta as quatro operações fundamentais da matemática exatamente como você as conhece, com uma diferença crucial no comportamento da divisão.</p>

    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Soma (<code class="code-inline">+</code>):</strong> <code class="code-inline">5 + 3</code> → <code class="code-inline">8</code></li>
      <li><strong>Subtração (<code class="code-inline">-</code>):</strong> <code class="code-inline">10 - 4</code> → <code class="code-inline">6</code></li>
      <li><strong>Multiplicação (<code class="code-inline">*</code>):</strong> <code class="code-inline">4 * 3</code> → <code class="code-inline">12</code></li>
      <li><strong>Divisão (<code class="code-inline">/</code>):</strong> <code class="code-inline">5 / 2</code> → <code class="code-inline">2</code> (divisão inteira!)</li>
    </ul>

    <div class="callout-warning">
      <strong>A armadilha da divisão de inteiros:</strong> Quando dois operandos são do tipo <code class="code-inline">int</code>, a divisão produz um resultado <strong>inteiro</strong>, cortando fora qualquer fração. Para obter o valor exato, é necessário que pelo menos um dos números seja <code class="code-inline">double</code>: <code class="code-inline">5.0 / 2</code> → <code class="code-inline">2.5</code>.
    </div>

    <h3 class="section-title">2. Resto da Divisão: o Operador Módulo (%)</h3>
    <p class="lesson-text">O símbolo <code class="code-inline">%</code> não calcula porcentagem, e sim o <strong>resto</strong> de uma divisão inteira: <code class="code-inline">5 % 2</code> → <code class="code-inline">1</code>.</p>

    <div class="callout-analogy">
      <strong>Analogia das fatias de bolo:</strong> Um bolo com 5 fatias dividido entre 2 amigos. Cada um recebe 2 fatias inteiras (o quociente) e sobra exatamente 1 fatia no prato (o resto). O módulo captura essa sobra.
    </div>

    <p class="lesson-text">Aplicações práticas do módulo:</p>
    <ul class="topic-list space-y-1 mb-4">
      <li><strong>Par ou ímpar:</strong> <code class="code-inline">numero % 2</code> retorna 0 para par e 1 para ímpar.</li>
      <li><strong>Conversão de tempo:</strong> <code class="code-inline">segundos % 60</code> devolve os segundos que não completam um minuto.</li>
      <li><strong>Ciclos contínuos:</strong> <code class="code-inline">indice % tamanhoDaLista</code> faz o índice voltar ao início.</li>
    </ul>

    <h3 class="section-title">3. Precedência Matemática: a Ordem das Contas</h3>
    <p class="lesson-text">Assim como na matemática tradicional, o Java segue uma hierarquia rígida ao avaliar expressões.</p>

    <p class="lesson-text"><strong>Tabela de precedência (da maior para a menor):</strong></p>
    <ul class="topic-list space-y-1 mb-4">
      <li>1º Parênteses <code class="code-inline">( )</code></li>
      <li>2º Multiplicação <code class="code-inline">*</code>, divisão <code class="code-inline">/</code> e módulo <code class="code-inline">%</code> (resolvidos da esquerda para a direita)</li>
      <li>3º Soma <code class="code-inline">+</code> e subtração <code class="code-inline">-</code></li>
    </ul>

    <div class="callout-warning">
      <strong>Exemplo perigoso – média sem parênteses:</strong><br>
      <code class="code-inline">double media = 7.0 + 9.0 / 2.0;</code> → 9.0/2.0 = 4.5 → 7.0+4.5 = <strong>11.5</strong> ❌<br>
      <strong>Versão corrigida:</strong> <code class="code-inline">double media = (7.0 + 9.0) / 2.0;</code> → <strong>8.0</strong> ✅
    </div>

    <h3 class="section-title">4. Atribuição Composta: os Atalhos Elegantes</h3>
    <p class="lesson-text">Os operadores de <strong>atribuição composta</strong> encurtam a escrita, fundindo a operação matemática com a atribuição:</p>

    <ul class="topic-list space-y-2 mb-4">
      <li><code class="code-inline">+=</code> : <code class="code-inline">pontos += 5;</code> equivale a <code class="code-inline">pontos = pontos + 5;</code></li>
      <li><code class="code-inline">-=</code> : <code class="code-inline">vida -= 20;</code></li>
      <li><code class="code-inline">*=</code> : <code class="code-inline">salario *= 1.10;</code> (aumento de 10%)</li>
      <li><code class="code-inline">/=</code> : <code class="code-inline">estoque /= 2;</code></li>
      <li><code class="code-inline">%=</code> : <code class="code-inline">numero %= 2;</code></li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Os operadores aritméticos e de atribuição são o motor matemático dos seus programas. Dominar a sintaxe, a precedência e as armadilhas da divisão inteira permite que você escreva cálculos corretos e eficientes. Os atalhos de atribuição composta elevam a legibilidade do código e mostram profissionalismo.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Demonstração dos operadores aritméticos e módulo',
      codigo: `public class OperadoresAritmeticos {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;

        System.out.println("Soma: " + (a + b));
        System.out.println("Subtração: " + (a - b));
        System.out.println("Multiplicação: " + (a * b));
        System.out.println("Divisão (int): " + (a / b));   // 3

        double aDouble = a;
        System.out.println("Divisão (double): " + (aDouble / b));  // 3.333...

        System.out.println("Resto: " + (a % b));  // 1
    }
}`,
      explicacao: 'O programa mostra cada operação. Note que a divisão entre inteiros trunca o valor, enquanto a divisão com double preserva as casas decimais. O módulo captura o resto da divisão inteira.'
    },
    {
      titulo: 'Uso da atribuição composta',
      codigo: `public class AtribuicaoComposta {
    public static void main(String[] args) {
        double saldo = 1000.0;
        System.out.println("Saldo inicial: " + saldo);

        saldo += 250.0;   // depósito
        System.out.println("Após depósito: " + saldo);

        saldo -= 80.0;    // saque
        System.out.println("Após saque: " + saldo);

        saldo *= 1.05;    // rendimento de 5%
        System.out.println("Após rendimento: " + saldo);

        saldo /= 2;       // divide pela metade
        System.out.println("Após divisão: " + saldo);
    }
}`,
      explicacao: 'Cada operador composto atualiza o saldo diretamente, sem repetir o nome da variável. O código fica mais limpo e expressa claramente que o saldo está sendo modificado.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual é o valor armazenado na variável "resultado" após a execução de: int resultado = 7 / 2;?',
      alternativas: [
        '3.5',
        '3',
        '4'
      ],
      respostaCorreta: 1,
      explicacao: 'Como ambos os números são inteiros, o Java realiza divisão inteira e descarta a parte decimal, resultando em 3 (sem arredondamento).'
    },
    {
      pergunta: 'O que o operador % calcula em Java?',
      alternativas: [
        'Porcentagem de um número',
        'O quociente de uma divisão',
        'O resto de uma divisão inteira'
      ],
      respostaCorreta: 2,
      explicacao: 'O símbolo % é o operador módulo, que retorna o resto de uma divisão inteira. Exemplo: 10 % 3 resulta em 1.'
    },
    {
      pergunta: 'Qual é a forma correta de escrever "aumente o valor de x em 10 unidades" usando atribuição composta?',
      alternativas: [
        'x =+ 10;',
        'x += 10;',
        'x = x + 10;'
      ],
      respostaCorreta: 1,
      explicacao: 'A sintaxe correta é x += 10;. A opção "x = x + 10;" também funciona, mas é a forma tradicional, não a composta.'
    }
  ]
};