// Arquivo: data/aulas/cap-01/sub-1-6.js
// Aula 1.6 – Operadores Aritméticos e de Atribuição

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-6'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Operadores Aritméticos e de Atribuição</h2>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Introdução</h3>
    <p class="mb-4">Seu programa já sabe se comunicar com o usuário — agora ele precisa aprender a <strong>calcular</strong>. Os operadores aritméticos e de atribuição são os botões da calculadora que a linguagem Java coloca à sua disposição. Com eles, você realizará desde a soma de dois números até cálculos financeiros complexos, passando pela descoberta de números pares e pela simplificação elegante do código.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">1. Operações Básicas: +, -, * e /</h3>
    <p class="mb-4">Java suporta as quatro operações fundamentais da matemática exatamente como você as conhece, com uma diferença crucial no comportamento da divisão.</p>

    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>Soma (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">+</code>):</strong> adiciona dois valores. Exemplo: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">5 + 3</code> resulta em <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">8</code>.</li>
      <li><strong>Subtração (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">-</code>):</strong> subtrai o segundo valor do primeiro. Exemplo: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">10 - 4</code> resulta em <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">6</code>.</li>
      <li><strong>Multiplicação (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">*</code>):</strong> usa o asterisco em vez do “×”. Exemplo: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">4 * 3</code> resulta em <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">12</code>.</li>
      <li><strong>Divisão (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">/</code>):</strong> utiliza a barra inclinada. <strong>Atenção:</strong> se ambos os números forem inteiros, o Java descarta a parte decimal.</li>
    </ul>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">A armadilha da divisão de inteiros</h4>
    <p class="mb-4">Quando dois operandos são do tipo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">int</code>, a divisão produz um resultado <strong>inteiro</strong>, cortando fora qualquer fração, sem arredondar.</p>

    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
int resultado = 5 / 2;   // resultado = 2  (a parte .5 é descartada)</pre>

    <p class="mb-4">Para obter o valor exato, é necessário que pelo menos um dos números seja tratado como <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">double</code> (por exemplo, acrescentando <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">.0</code>).</p>

    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
double resultadoCorreto = 5.0 / 2;   // resultadoCorreto = 2.5</pre>

    <p class="mb-4"><strong>Analogia:</strong> é como pedir a um funcionário que só sabe contar números inteiros para dividir 5 balas entre 2 crianças. Ele entrega 2 balas para cada uma e joga a bala restante no lixo, porque “não pode parti‑la”.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">2. Resto da Divisão: o Operador Módulo (%)</h3>
    <p class="mb-4">O símbolo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%</code> não calcula porcentagem, e sim o <strong>resto</strong> de uma divisão inteira — exatamente como fazíamos na terceira série, antes de aprendermos as casas decimais.</p>

    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
int resto = 5 % 2;   // resto = 1   (5 ÷ 2 = 2 e sobra 1)</pre>

    <p class="mb-4"><strong>Analogia das fatias de bolo:</strong> um bolo com 5 fatias dividido entre 2 amigos. Cada um recebe 2 fatias inteiras (o quociente) e sobra exatamente 1 fatia no prato (o resto). O módulo captura essa sobra.</p>

    <p class="mb-4">O módulo é uma ferramenta fundamental em várias situações:</p>
    <ul class="list-disc ml-6 mb-4 space-y-1">
      <li><strong>Par ou ímpar:</strong> <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">numero % 2</code> retorna 0 para par e 1 para ímpar.</li>
      <li><strong>Conversão de tempo:</strong> <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">segundos % 60</code> devolve os segundos que não completam um minuto.</li>
      <li><strong>Ciclos contínuos:</strong> <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">indice % tamanhoDaLista</code> faz o índice voltar ao início quando atinge o final.</li>
    </ul>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">3. Precedência Matemática: a Ordem das Contas</h3>
    <p class="mb-4">Assim como na matemática tradicional, o Java segue uma hierarquia rígida ao avaliar expressões. Se você não a respeitar, obterá resultados incorretos sem nenhuma mensagem de erro.</p>

    <p class="mb-2"><strong>Tabela de precedência (da maior para a menor):</strong></p>
    <ul class="list-disc ml-6 mb-4 space-y-1">
      <li>1º Parênteses <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">( )</code></li>
      <li>2º Multiplicação <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">*</code>, divisão <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">/</code> e módulo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%</code> (mesma prioridade, resolvidos da esquerda para a direita)</li>
      <li>3º Soma <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">+</code> e subtração <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">-</code> (também da esquerda para a direita)</li>
    </ul>

    <p class="mb-4"><strong>Exemplo perigoso – média sem parênteses:</strong></p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
double media = 7.0 + 9.0 / 2.0;   // 9.0/2.0 = 4.5 → 7.0+4.5 = 11.5 ❌</pre>

    <p class="mb-4"><strong>Versão corrigida com parênteses:</strong></p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
double media = (7.0 + 9.0) / 2.0; // 16.0 / 2.0 = 8.0 ✅</pre>

    <p class="mb-4"><strong>Dica profissional:</strong> na dúvida, use parênteses. Eles não só garantem a ordem correta, como também tornam o código mais legível para humanos.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">4. Atribuição Composta: os Atalhos Elegantes</h3>
    <p class="mb-4">Muitas vezes precisamos atualizar uma variável com base no seu próprio valor atual. A forma tradicional funciona, mas repete o nome da variável duas vezes:</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
int pontos = 10;
pontos = pontos + 5;   // pontos agora vale 15</pre>

    <p class="mb-4">Os operadores de <strong>atribuição composta</strong> encurtam essa escrita, fundindo a operação matemática com a atribuição:</p>

    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">+=</code> : <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">pontos += 5;</code> equivale a <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">pontos = pontos + 5;</code></li>
      <li><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">-=</code> : <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">vida -= 20;</code></li>
      <li><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">*=</code> : <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">salario *= 1.10;</code> (aumento de 10%)</li>
      <li><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">/=</code> : <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">estoque /= 2;</code></li>
      <li><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%=</code> : <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">numero %= 2;</code></li>
    </ul>

    <p class="mb-4">Esses operadores deixam o código mais limpo e demonstram maturidade profissional. Compare:</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
// Jeito tradicional (repetitivo)
precoTotal = precoTotal + imposto;
precoTotal = precoTotal - desconto;
precoTotal = precoTotal * taxa;

// Jeito profissional (atribuição composta)
precoTotal += imposto;
precoTotal -= desconto;
precoTotal *= taxa;</pre>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Detalhamento Técnico</h3>
    <p class="mb-4">O comportamento da divisão está intimamente ligado aos <strong>tipos primitivos</strong> do Java. Quando ambos os operandos são inteiros (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">int</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">long</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">short</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">byte</code>), o Java realiza a <strong>divisão inteira</strong>, truncando o resultado. Basta um dos operandos ser <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">float</code> ou <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">double</code> para que a divisão seja de ponto flutuante.</p>

    <p class="mb-4">A precedência de operadores em Java segue a especificação matemática tradicional, mas com o acréscimo de outros níveis (operadores lógicos, relacionais, etc.). Para os operadores aritméticos, a regra PEMDAS (Parênteses, Expoentes, Multiplicação/Divisão, Adição/Subtração) é válida — com a diferença de que Java não tem um operador de exponenciação nativo (usa‑se <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Math.pow</code>).</p>

    <p class="mb-4">Os operadores de atribuição composta não são apenas um “açúcar sintático”. Eles também realizam uma <strong>conversão implícita</strong> de tipo, o que pode evitar erros de compilação em alguns cenários. Por exemplo, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">byte b = 10; b += 5;</code> compila normalmente, enquanto <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">b = b + 5;</code> exigiria um cast explícito, pois <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">b + 5</code> é promovido a <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">int</code>.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Aplicações Práticas</h3>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>Calculadoras:</strong> use os operadores aritméticos para implementar as quatro operações e exibir resultados formatados com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">printf</code>.</li>
      <li><strong>Verificação de paridade:</strong> a lógica <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">numero % 2 == 0</code> é a base para alternar cores em tabelas, validar códigos de barra ou separar dados.</li>
      <li><strong>Atualização de saldos:</strong> em jogos, contas bancárias ou sistemas de estoque, os operadores compostos mantêm o código conciso e menos propenso a erros de digitação.</li>
      <li><strong>Cálculo de médias:</strong> a correta aplicação dos parênteses garante que a soma das notas seja feita antes da divisão, evitando resultados absurdos.</li>
    </ul>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Conclusão</h3>
    <p class="mb-4">Os operadores aritméticos e de atribuição são o motor matemático dos seus programas. Dominar a sintaxe, a precedência e as armadilhas da divisão inteira permite que você escreva cálculos corretos e eficientes. Os atalhos de atribuição composta, por sua vez, elevam a legibilidade do código e mostram profissionalismo.</p>
    <p>Com esses fundamentos, você já pode construir calculadoras, processar dados e implementar lógicas condicionais baseadas em resultados numéricos — exatamente o que faremos na próxima aula, quando unirmos operadores relacionais e lógicos para tomar decisões dentro do código.</p>
  `,

  imagens: [
    // Espaço reservado para futuras imagens.
  ],

  exemplos: [
    {
      titulo: 'Demonstração dos operadores aritméticos e módulo',
      codigo: `public class OperadoresAritmeticos {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;

        // Operações básicas
        System.out.println("Soma: " + (a + b));
        System.out.println("Subtração: " + (a - b));
        System.out.println("Multiplicação: " + (a * b));
        System.out.println("Divisão (int): " + (a / b));   // 3

        // Divisão correta com double
        double aDouble = a;
        System.out.println("Divisão (double): " + (aDouble / b));  // 3.333...

        // Módulo (resto)
        System.out.println("Resto: " + (a % b));  // 1
    }
}`,
      explicacao: 'O programa declara duas variáveis inteiras e mostra cada operação. Note que a divisão entre inteiros trunca o valor, enquanto a divisão com double preserva as casas decimais. O módulo captura o resto da divisão inteira.'
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
      explicacao: 'A sintaxe correta é x += 10;. A ordem do sinal de adição e do igual é importante. A opção "x = x + 10;" também funciona, mas é a forma tradicional, não a composta.'
    }
  ]
};