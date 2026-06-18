// Arquivo: data/aulas/cap-01/sub-1-7.js
// Aula 1.7 – Operadores Relacionais e Lógicos Básicos

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-7'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Operadores Relacionais e Lógicos Básicos</h2>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Introdução</h3>
    <p class="mb-4">Até agora, seu programa apenas executava cálculos e exibia resultados. Com os operadores desta aula, ele ganha a capacidade de <strong>tomar decisões</strong> e avaliar situações, respondendo com um simples "verdadeiro" ou "falso". Essa é a base para qualquer lógica condicional — telas de login, validações de formulários, regras de negócio e muito mais.</p>
    <p class="mb-4">No coração dessas decisões está o tipo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">boolean</code>, uma gaveta de memória que só aceita duas palavras: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">true</code> (verdadeiro) ou <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">false</code> (falso). Vamos explorar como construir perguntas poderosas ao computador e conectá‑las para formar regras complexas.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">1. Comparações: Os Operadores Relacionais</h3>
    <p class="mb-4">Os operadores relacionais comparam dois valores e devolvem um veredito booleano. Pense neles como perguntas que você faz ao processador.</p>

    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">></code> (Maior que):</strong> <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">10 > 5</code> retorna <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">true</code>.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono"><</code> (Menor que):</strong> <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">3 < 1</code> retorna <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">false</code>.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">>=</code> (Maior ou Igual):</strong> <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">18 >= 18</code> retorna <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">true</code>. Use quando o valor limite também é aceito (ex.: idade mínima).</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono"><=</code> (Menor ou Igual):</strong> <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">20 <= 15</code> retorna <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">false</code>. Útil para limites máximos.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">==</code> (Igualdade):</strong> Compara se dois valores são idênticos. <strong>Atenção:</strong> não confunda com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">=</code>, que é atribuição. <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">5 == 5</code> é <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">true</code>; <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">5 == 3</code> é <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">false</code>.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">!=</code> (Diferente de):</strong> <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">5 != 3</code> retorna <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">true</code> (são diferentes); <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">5 != 5</code> retorna <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">false</code>.</li>
    </ul>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">2. Conectivos Lógicos: Juntando Várias Perguntas</h3>
    <p class="mb-4">Na prática, decisões raramente dependem de uma única condição. Os operadores lógicos permitem combinar múltiplas expressões booleanas em um único veredito.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">2.1 E Lógico (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">&&</code>) — O Inspetor Exigente</h4>
    <p class="mb-4">Retorna <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">true</code> somente se <strong>todas</strong> as condições forem verdadeiras. Se uma única for falsa, o resultado já é <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">false</code>.</p>
    <p class="mb-4"><strong>Analogia:</strong> Para entrar em uma festa VIP, você precisa ter ingresso <strong>E</strong> estar de sapato fechado. Se faltar qualquer um dos dois, a entrada é barrada.</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
boolean temIngresso = true;
boolean deSapatoFechado = false;
boolean podeEntrar = temIngresso && deSapatoFechado; // false</pre>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">2.2 OU Lógico (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">||</code>) — O Porteiro Camarada</h4>
    <p class="mb-4">Retorna <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">true</code> se <strong>pelo menos uma</strong> das condições for verdadeira. Só retorna <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">false</code> se todas forem falsas.</p>
    <p class="mb-4"><strong>Analogia:</strong> No cinema, você ganha meia-entrada se for estudante <strong>OU</strong> doador de sangue <strong>OU</strong> tiver mais de 60 anos. Basta cumprir um dos critérios.</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
boolean temDinheiro = false;
boolean temCartao = true;
boolean compraAutorizada = temDinheiro || temCartao; // true</pre>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">2.3 NEGAÇÃO Lógica (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">!</code>) — O Inversor</h4>
    <p class="mb-4">Inverte o valor booleano. Se algo é <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">true</code>, o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">!</code> transforma em <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">false</code> e vice‑versa.</p>
    <p class="mb-4"><strong>Analogia:</strong> Um alarme deve disparar quando a porta <strong>NÃO</strong> estiver trancada.</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
boolean portaTrancada = true;
boolean alarme = !portaTrancada; // false (porta trancada → alarme desligado)</pre>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">2.4 Combinando &&, || e Parênteses</h4>
    <p class="mb-4">Assim como na aritmética, os parênteses ditam a ordem de avaliação. Expressões entre parênteses são resolvidas primeiro, permitindo construir regras de negócio complexas.</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
boolean nomeLimpo = true;
boolean rendaAlta = false;
boolean temFiador = true;

// O empréstimo é aprovado se tiver nome limpo E (renda alta OU fiador)
boolean aprovado = nomeLimpo && (rendaAlta || temFiador); // true</pre>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">3. Tabela Verdade e Lógica de Curto-Circuito</h3>
    <p class="mb-4">A <strong>Tabela Verdade</strong> é o mapa de todas as combinações possíveis entre duas condições:</p>

    <div class="overflow-x-auto mb-4">
      <table class="min-w-full border border-slate-300 text-sm">
        <thead class="bg-slate-100">
          <tr>
            <th class="border border-slate-300 px-4 py-2">Condição A</th>
            <th class="border border-slate-300 px-4 py-2">Condição B</th>
            <th class="border border-slate-300 px-4 py-2">A && B (E)</th>
            <th class="border border-slate-300 px-4 py-2">A || B (OU)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 px-4 py-2 text-green-600 font-bold">true</td>
            <td class="border border-slate-300 px-4 py-2 text-green-600 font-bold">true</td>
            <td class="border border-slate-300 px-4 py-2 text-green-600 font-bold">true</td>
            <td class="border border-slate-300 px-4 py-2 text-green-600 font-bold">true</td>
          </tr>
          <tr>
            <td class="border border-slate-300 px-4 py-2 text-green-600 font-bold">true</td>
            <td class="border border-slate-300 px-4 py-2 text-red-600 font-bold">false</td>
            <td class="border border-slate-300 px-4 py-2 text-red-600 font-bold">false</td>
            <td class="border border-slate-300 px-4 py-2 text-green-600 font-bold">true</td>
          </tr>
          <tr>
            <td class="border border-slate-300 px-4 py-2 text-red-600 font-bold">false</td>
            <td class="border border-slate-300 px-4 py-2 text-green-600 font-bold">true</td>
            <td class="border border-slate-300 px-4 py-2 text-red-600 font-bold">false</td>
            <td class="border border-slate-300 px-4 py-2 text-green-600 font-bold">true</td>
          </tr>
          <tr>
            <td class="border border-slate-300 px-4 py-2 text-red-600 font-bold">false</td>
            <td class="border border-slate-300 px-4 py-2 text-red-600 font-bold">false</td>
            <td class="border border-slate-300 px-4 py-2 text-red-600 font-bold">false</td>
            <td class="border border-slate-300 px-4 py-2 text-red-600 font-bold">false</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="mb-4">O Java utiliza a <strong>Avaliação de Curto-Circuito</strong> para economizar processamento: ele avalia as expressões da esquerda para a direita e, assim que o resultado final se torna certo, ignora o restante.</p>

    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>No <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">&&</code>:</strong> se a primeira condição é <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">false</code>, o resultado já é <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">false</code> — as demais nem são executadas.</li>
      <li><strong>No <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">||</code>:</strong> se a primeira condição é <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">true</code>, o resultado já é <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">true</code> — o resto é ignorado.</li>
    </ul>

    <p class="mb-4">Isso tem um impacto prático enorme: você pode usar o curto‑circuito para <strong>proteger operações perigosas</strong>.</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
int denominador = 0;
// Com &&, a divisão NÃO é executada porque a primeira condição já é false
boolean seguro = (denominador != 0) && ((10 / denominador) > 2); // false, sem erro!</pre>
    <p class="mb-4"><strong>Dica de desempenho:</strong> coloque as condições mais leves e com maior chance de falhar <strong>antes</strong> das mais pesadas. Isso evita cálculos desnecessários e deixa o programa mais rápido.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Detalhamento Técnico</h3>
    <p class="mb-4">Os operadores <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">&&</code> e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">||</code> são conhecidos como <strong>operadores lógicos de curto-circuito</strong>. Existem também as versões sem curto-circuito: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">&</code> (E bit a bit / E lógico sem curto) e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">|</code> (OU bit a bit / OU lógico sem curto). Essas versões <strong>sempre avaliam os dois lados</strong>, o que pode causar exceções desnecessárias, como divisão por zero. Na grande maioria dos casos, use <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">&&</code> e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">||</code>.</p>
    <p class="mb-4">O tipo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">boolean</code> ocupa apenas 1 bit de informação, mas por questões de arquitetura da JVM, costuma ser representado como um <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">int</code> de 32 bits internamente. Expressões relacionais e lógicas são avaliadas em tempo de compilação sempre que os valores são constantes, otimizando ainda mais o desempenho.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Aplicações Práticas</h3>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>Validação de login:</strong> <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">(usuario != null) && (senha.length() >= 8)</code>.</li>
      <li><strong>Controle de acesso:</strong> <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">(idade >= 18) && (ingresso == true)</code>.</li>
      <li><strong>Regras de frete grátis:</strong> <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">(valorTotal > 200) || (cupom == "FRETEGRATIS")</code>.</li>
      <li><strong>Evitar erros:</strong> use curto-circuito para verificar se um objeto é <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">null</code> antes de chamar métodos sobre ele.</li>
    </ul>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Conclusão</h3>
    <p class="mb-4">Os operadores relacionais e lógicos são a base de qualquer tomada de decisão dentro de um programa. Com eles, você compara valores, combina condições e constrói regras de negócio sofisticadas. O entendimento do curto-circuito, em particular, eleva a qualidade do seu código, tornando-o mais seguro, eficiente e profissional.</p>
    <p>Na próxima aula, aplicaremos tudo isso em um estudo de caso prático: a construção de uma calculadora completa, integrando entrada de dados, operadores aritméticos, lógicos e as primeiras estruturas condicionais.</p>
  `,

  imagens: [
    // Espaço reservado para futuras imagens.
  ],

  exemplos: [
    {
      titulo: 'Demonstração dos operadores relacionais e lógicos',
      codigo: `public class TesteLogico {
    public static void main(String[] args) {
        int a = 10;
        int b = 5;
        int c = 10;

        // Operadores relacionais
        System.out.println("a > b: " + (a > b));   // true
        System.out.println("a < b: " + (a < b));   // false
        System.out.println("a == c: " + (a == c)); // true
        System.out.println("a != b: " + (a != b)); // true

        // Operadores lógicos
        boolean cond1 = (a > b);   // true
        boolean cond2 = (a < b);   // false

        System.out.println("cond1 && cond2: " + (cond1 && cond2)); // false
        System.out.println("cond1 || cond2: " + (cond1 || cond2)); // true
        System.out.println("!cond1: " + (!cond1));                 // false
    }
}`,
      explicacao: 'O programa declara três variáveis e exibe o resultado de várias comparações e operações lógicas. Repare que o operador == testa igualdade, enquanto != testa diferença.'
    },
    {
      titulo: 'Curto-circuito na prática',
      codigo: `public class CurtoCircuito {
    public static void main(String[] args) {
        int x = 0;

        // A segunda condição NÃO é avaliada porque a primeira já é false
        boolean resultado1 = (x != 0) && ((10 / x) > 2);
        System.out.println("Resultado 1: " + resultado1); // false, sem erro!

        // A segunda condição É avaliada porque a primeira é true
        boolean condInicial = true;
        boolean resultado2 = condInicial || ((10 / x) > 2);
        System.out.println("Resultado 2: " + resultado2); // true, a divisão nem ocorre
    }
}`,
      explicacao: 'No primeiro caso, o curto-circuito do && impede a divisão por zero. No segundo, o || encontra true na primeira condição e ignora o resto. Sem o curto-circuito, o programa lançaria uma exceção.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual o valor da variável "resultado" após a execução de: boolean resultado = (10 > 5) && (3 > 8);?',
      alternativas: [
        'true',
        'false',
        '10'
      ],
      respostaCorreta: 1,
      explicacao: 'A primeira condição (10 > 5) é true, mas a segunda (3 > 8) é false. Como o operador && exige que ambas sejam verdadeiras, o resultado final é false.'
    },
    {
      pergunta: 'Em Java, qual a diferença entre = e ==?',
      alternativas: [
        'Não há diferença, ambos comparam valores',
        '= é usado para atribuir um valor, enquanto == é usado para comparar se dois valores são iguais',
        '== é usado apenas para strings, enquanto = é para números'
      ],
      respostaCorreta: 1,
      explicacao: 'O operador = é de atribuição (guarda um valor em uma variável). O operador == é relacional (compara se dois valores são iguais, retornando true ou false).'
    },
    {
      pergunta: 'O que é o curto-circuito em uma expressão com &&?',
      alternativas: [
        'É um erro que ocorre quando a expressão é muito longa',
        'É quando o Java avalia todas as condições antes de decidir o resultado',
        'É a interrupção da avaliação assim que o resultado final se torna certo, economizando processamento'
      ],
      respostaCorreta: 2,
      explicacao: 'No curto-circuito, se a primeira condição de um && for false, as demais não são avaliadas, pois o resultado já será false. Isso evita cálculos desnecessários e protege contra operações inválidas (ex.: divisão por zero).'
    }
  ]
};