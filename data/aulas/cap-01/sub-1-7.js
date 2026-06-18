// Arquivo: data/aulas/cap-01/sub-1-7.js
// Aula 1.7 – Operadores Relacionais e Lógicos Básicos

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-7'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Operadores Relacionais e Lógicos Básicos</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Até agora, seu programa apenas executava cálculos e exibia resultados. Com os operadores desta aula, ele ganha a capacidade de <strong>tomar decisões</strong> e avaliar situações, respondendo com um simples "verdadeiro" ou "falso". Essa é a base para qualquer lógica condicional — telas de login, validações de formulários, regras de negócio e muito mais.</p>
    <p class="lesson-text">No coração dessas decisões está o tipo <code class="code-inline">boolean</code>, uma gaveta de memória que só aceita duas palavras: <code class="code-inline">true</code> (verdadeiro) ou <code class="code-inline">false</code> (falso). Vamos explorar como construir perguntas poderosas ao computador e conectá‑las para formar regras complexas.</p>

    <h3 class="section-title">1. Comparações: Os Operadores Relacionais</h3>
    <p class="lesson-text">Os operadores relacionais comparam dois valores e devolvem um veredito booleano. Pense neles como perguntas que você faz ao processador.</p>

    <ul class="topic-list space-y-2 mb-4">
      <li><strong><code class="code-inline">></code> (Maior que):</strong> <code class="code-inline">10 > 5</code> retorna <code class="code-inline">true</code>.</li>
      <li><strong><code class="code-inline"><</code> (Menor que):</strong> <code class="code-inline">3 < 1</code> retorna <code class="code-inline">false</code>.</li>
      <li><strong><code class="code-inline">>=</code> (Maior ou Igual):</strong> <code class="code-inline">18 >= 18</code> retorna <code class="code-inline">true</code>. Use quando o valor limite também é aceito (ex.: idade mínima).</li>
      <li><strong><code class="code-inline"><=</code> (Menor ou Igual):</strong> <code class="code-inline">20 <= 15</code> retorna <code class="code-inline">false</code>. Útil para limites máximos.</li>
      <li><strong><code class="code-inline">==</code> (Igualdade):</strong> Compara se dois valores são idênticos. <strong>Atenção:</strong> não confunda com <code class="code-inline">=</code>, que é atribuição. <code class="code-inline">5 == 5</code> é <code class="code-inline">true</code>; <code class="code-inline">5 == 3</code> é <code class="code-inline">false</code>.</li>
      <li><strong><code class="code-inline">!=</code> (Diferente de):</strong> <code class="code-inline">5 != 3</code> retorna <code class="code-inline">true</code> (são diferentes); <code class="code-inline">5 != 5</code> retorna <code class="code-inline">false</code>.</li>
    </ul>

    <h3 class="section-title">2. Conectivos Lógicos: Juntando Várias Perguntas</h3>
    <p class="lesson-text">Na prática, decisões raramente dependem de uma única condição. Os operadores lógicos permitem combinar múltiplas expressões booleanas em um único veredito.</p>

    <h4 class="subsection-title">2.1 E Lógico (<code class="code-inline">&&</code>) — O Inspetor Exigente</h4>
    <p class="lesson-text">Retorna <code class="code-inline">true</code> somente se <strong>todas</strong> as condições forem verdadeiras. Se uma única for falsa, o resultado já é <code class="code-inline">false</code>.</p>

    <div class="callout-analogy">
      <strong>Analogia:</strong> Para entrar em uma festa VIP, você precisa ter ingresso <strong>E</strong> estar de sapato fechado. Se faltar qualquer um dos dois, a entrada é barrada.
    </div>

    <pre><code class="language-java">boolean temIngresso = true;
boolean deSapatoFechado = false;
boolean podeEntrar = temIngresso && deSapatoFechado; // false</code></pre>

    <h4 class="subsection-title">2.2 OU Lógico (<code class="code-inline">||</code>) — O Porteiro Camarada</h4>
    <p class="lesson-text">Retorna <code class="code-inline">true</code> se <strong>pelo menos uma</strong> das condições for verdadeira. Só retorna <code class="code-inline">false</code> se todas forem falsas.</p>

    <div class="callout-analogy">
      <strong>Analogia:</strong> No cinema, você ganha meia-entrada se for estudante <strong>OU</strong> doador de sangue <strong>OU</strong> tiver mais de 60 anos. Basta cumprir um dos critérios.
    </div>

    <pre><code class="language-java">boolean temDinheiro = false;
boolean temCartao = true;
boolean compraAutorizada = temDinheiro || temCartao; // true</code></pre>

    <h4 class="subsection-title">2.3 NEGAÇÃO Lógica (<code class="code-inline">!</code>) — O Inversor</h4>
    <p class="lesson-text">Inverte o valor booleano. Se algo é <code class="code-inline">true</code>, o <code class="code-inline">!</code> transforma em <code class="code-inline">false</code> e vice‑versa.</p>

    <div class="callout-analogy">
      <strong>Analogia:</strong> Um alarme deve disparar quando a porta <strong>NÃO</strong> estiver trancada.
    </div>

    <pre><code class="language-java">boolean portaTrancada = true;
boolean alarme = !portaTrancada; // false (porta trancada → alarme desligado)</code></pre>

    <h4 class="subsection-title">2.4 Combinando &&, || e Parênteses</h4>
    <p class="lesson-text">Assim como na aritmética, os parênteses ditam a ordem de avaliação. Expressões entre parênteses são resolvidas primeiro, permitindo construir regras de negócio complexas.</p>

    <pre><code class="language-java">boolean nomeLimpo = true;
boolean rendaAlta = false;
boolean temFiador = true;

// O empréstimo é aprovado se tiver nome limpo E (renda alta OU fiador)
boolean aprovado = nomeLimpo && (rendaAlta || temFiador); // true</code></pre>

    <h3 class="section-title">3. Tabela Verdade e Lógica de Curto-Circuito</h3>
    <p class="lesson-text">A <strong>Tabela Verdade</strong> é o mapa de todas as combinações possíveis entre duas condições:</p>

    <div class="overflow-x-auto mb-4">
      <table class="table-didatic">
        <thead>
          <tr>
            <th>Condição A</th>
            <th>Condição B</th>
            <th>A && B (E)</th>
            <th>A || B (OU)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-bold" style="color: #16a34a;">true</td>
            <td class="font-bold" style="color: #16a34a;">true</td>
            <td class="font-bold" style="color: #16a34a;">true</td>
            <td class="font-bold" style="color: #16a34a;">true</td>
          </tr>
          <tr>
            <td class="font-bold" style="color: #16a34a;">true</td>
            <td class="font-bold" style="color: #dc2626;">false</td>
            <td class="font-bold" style="color: #dc2626;">false</td>
            <td class="font-bold" style="color: #16a34a;">true</td>
          </tr>
          <tr>
            <td class="font-bold" style="color: #dc2626;">false</td>
            <td class="font-bold" style="color: #16a34a;">true</td>
            <td class="font-bold" style="color: #dc2626;">false</td>
            <td class="font-bold" style="color: #16a34a;">true</td>
          </tr>
          <tr>
            <td class="font-bold" style="color: #dc2626;">false</td>
            <td class="font-bold" style="color: #dc2626;">false</td>
            <td class="font-bold" style="color: #dc2626;">false</td>
            <td class="font-bold" style="color: #dc2626;">false</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="lesson-text">O Java utiliza a <strong>Avaliação de Curto-Circuito</strong> para economizar processamento: ele avalia as expressões da esquerda para a direita e, assim que o resultado final se torna certo, ignora o restante.</p>

    <ul class="topic-list space-y-2 mb-4">
      <li><strong>No <code class="code-inline">&&</code>:</strong> se a primeira condição é <code class="code-inline">false</code>, o resultado já é <code class="code-inline">false</code> — as demais nem são executadas.</li>
      <li><strong>No <code class="code-inline">||</code>:</strong> se a primeira condição é <code class="code-inline">true</code>, o resultado já é <code class="code-inline">true</code> — o resto é ignorado.</li>
    </ul>

    <p class="lesson-text">Isso tem um impacto prático enorme: você pode usar o curto‑circuito para <strong>proteger operações perigosas</strong>.</p>

    <pre><code class="language-java">int denominador = 0;
// Com &&, a divisão NÃO é executada porque a primeira condição já é false
boolean seguro = (denominador != 0) && ((10 / denominador) > 2); // false, sem erro!</code></pre>

    <div class="callout-info">
      <strong>Dica de desempenho:</strong> coloque as condições mais leves e com maior chance de falhar <strong>antes</strong> das mais pesadas. Isso evita cálculos desnecessários e deixa o programa mais rápido.
    </div>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <p class="lesson-text">Os operadores <code class="code-inline">&&</code> e <code class="code-inline">||</code> são conhecidos como <strong>operadores lógicos de curto-circuito</strong>. Existem também as versões sem curto-circuito: <code class="code-inline">&</code> (E bit a bit / E lógico sem curto) e <code class="code-inline">|</code> (OU bit a bit / OU lógico sem curto). Essas versões <strong>sempre avaliam os dois lados</strong>, o que pode causar exceções desnecessárias. Na grande maioria dos casos, use <code class="code-inline">&&</code> e <code class="code-inline">||</code>.</p>
    <p class="lesson-text">O tipo <code class="code-inline">boolean</code> ocupa apenas 1 bit de informação, mas por questões de arquitetura da JVM, costuma ser representado como um <code class="code-inline">int</code> de 32 bits internamente. Expressões relacionais e lógicas são avaliadas em tempo de compilação sempre que os valores são constantes.</p>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Validação de login:</strong> <code class="code-inline">(usuario != null) && (senha.length() >= 8)</code>.</li>
      <li><strong>Controle de acesso:</strong> <code class="code-inline">(idade >= 18) && (ingresso == true)</code>.</li>
      <li><strong>Regras de frete grátis:</strong> <code class="code-inline">(valorTotal > 200) || (cupom == "FRETEGRATIS")</code>.</li>
      <li><strong>Evitar erros:</strong> use curto-circuito para verificar se um objeto é <code class="code-inline">null</code> antes de chamar métodos sobre ele.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Os operadores relacionais e lógicos são a base de qualquer tomada de decisão dentro de um programa. Com eles, você compara valores, combina condições e constrói regras de negócio sofisticadas. O entendimento do curto-circuito, em particular, eleva a qualidade do seu código, tornando-o mais seguro, eficiente e profissional.</p>
    <p class="lesson-text">Na próxima aula, aplicaremos tudo isso em um estudo de caso prático: a construção de uma calculadora completa, integrando entrada de dados, operadores aritméticos, lógicos e as primeiras estruturas condicionais.</p>
  `,

  imagens: [],

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