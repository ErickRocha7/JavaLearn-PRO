// Arquivo: data/aulas/cap-06/sub-6-3.js
// Aula 6.3 – Arrays Multidimensionais

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-6-3'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Arrays Multidimensionais: Matrizes e a Organização em Grade</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Até agora, trabalhamos com arrays unidimensionais — estruturas em linha reta, como um armário de uma única fileira de gavetas. Mas o mundo real frequentemente exige algo mais: imagine um tabuleiro de xadrez, uma planilha do Excel, os pixels de uma foto ou as notas de todas as turmas de uma escola. Esses cenários não cabem em uma linha; eles precisam de <strong>duas dimensões</strong> simultâneas: linhas e colunas. É para isso que servem os <strong>arrays multidimensionais</strong>, as chamadas <strong>matrizes</strong>.</p>
    <p class="lesson-text">Nesta aula, você entenderá que uma matriz é, na essência, um "array de arrays". Aprenderá a declarar, alocar e inicializar uma grade de dados, a acessar qualquer célula com o par (linha, coluna) e, principalmente, a percorrer a tabela inteira com <strong>laços aninhados</strong> — dois motores de repetição trabalhando em sincronia.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de construir uma matriz, precisamos fixar duas ideias que se apoiam no que já sabemos sobre arrays comuns:</p>
    <ul class="topic-list mb-4">
      <li><strong>Array unidimensional (vetor):</strong> uma fileira de elementos do mesmo tipo, acessíveis por um único índice.</li>
      <li><strong>Tamanho fixo e homogeneidade:</strong> cada array tem um comprimento imutável e todos os seus elementos são do mesmo tipo. Isso vale também para cada "fileira" de uma matriz.</li>
    </ul>
    <p class="lesson-text">Uma matriz, então, é uma coleção de vetores empilhados: o <strong>array externo</strong> guarda, em cada posição, um array unidimensional inteiro. O resultado visual é uma tabela com <strong>linhas</strong> e <strong>colunas</strong>.</p>

    <div class="callout-analogy">
      <strong>Analogia do prédio organizador:</strong> imagine um armário de parede com várias prateleiras horizontais. Em cima de cada prateleira, você deita uma fileira de gavetas idênticas. O armário (matriz) não guarda objetos diretamente; ele guarda, em cada andar, uma coleção de gavetas. Para encontrar um item, você primeiro escolhe a prateleira (linha) e depois a gaveta dentro dela (coluna). No Java, dizemos que uma matriz é um <em>array de arrays</em>.
    </div>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. Conceito de Matriz: um array de arrays</h4>
    <p class="lesson-text">Quando você declara <code class="code-inline">int[][] tabela;</code>, está criando uma referência para um array que, em vez de guardar números, guardará outros arrays de <code class="code-inline">int</code>. Visualmente:</p>
    <pre><code class="language-java">int[][] matriz = {
    {10, 20},  // Linha 0
    {30, 40},  // Linha 1
    {50, 60}   // Linha 2
};</code></pre>
    <p class="lesson-text">Temos 3 linhas e 2 colunas. Cada chave interna é um array unidimensional comum, e a chave externa agrupa esses três arrays. O número total de células é <strong>linhas × colunas</strong>. Essa estrutura é ideal para qualquer coisa que se pareça com uma tabela ou grade.</p>

    <h4 class="subsection-title">2. Declaração e Inicialização</h4>
    <p class="lesson-text">A sintaxe usa dois pares de colchetes: o primeiro para as linhas, o segundo para as colunas. Para criar uma matriz com <strong>new</strong>, especificamos quantas linhas e quantas colunas ela terá:</p>
    <pre><code class="language-java">// Matriz de 3 linhas por 4 colunas de inteiros, cheia de zeros
int[][] notas = new int[3][4];</code></pre>
    <p class="lesson-text">Assim como nos arrays simples, o <code class="code-inline">new</code> aloca a memória e preenche cada célula com o valor padrão do tipo (<code class="code-inline">0</code> para números, <code class="code-inline">null</code> para objetos). O atributo <code class="code-inline">length</code> da matriz retorna o <strong>número de linhas</strong>: <code class="code-inline">notas.length</code> vale 3. Para saber o número de colunas de uma linha específica, usamos <code class="code-inline">notas[linha].length</code> — aqui será 4.</p>

    <p class="lesson-text"><strong>Inicialização direta</strong> com chaves aninhadas dispensa o <code class="code-inline">new</code> e o tamanho explícito. O Java conta as linhas e as colunas automaticamente:</p>
    <pre><code class="language-java">String[][] tabuleiro = {
    {"X", "O", "X"},
    {"O", "X", "O"},
    {"X", " ", "O"}
};</code></pre>
    <p class="lesson-text">Esse tabuleiro 3×3 de um jogo da velha já nasce com os valores desejados. A inicialização direta é muito útil para dados fixos.</p>

    <h4 class="subsection-title">3. Acesso a Elementos: coordenadas (linha, coluna)</h4>
    <p class="lesson-text">Para gravar ou ler uma célula, usamos dois índices entre colchetes, sempre na ordem <strong>linha</strong> e depois <strong>coluna</strong>. Ambos começam em <strong>zero</strong>. Em uma matriz de 3 linhas e 2 colunas, os índices válidos são:</p>
    <ul class="topic-list mb-4">
      <li>Linhas: 0, 1, 2</li>
      <li>Colunas: 0, 1</li>
    </ul>

    <pre><code class="language-java">int[][] matriz = new int[3][2];

// Atribuindo valores (linha, coluna)
matriz[0][1] = 9;   // 1ª linha, 2ª coluna
matriz[2][0] = 5;   // 3ª linha, 1ª coluna

// Lendo valores
System.out.println(matriz[0][1]); // Exibe 9
System.out.println(matriz[2][0]); // Exibe 5</code></pre>

    <div class="callout-warning">
      <strong>Cuidado com os limites!</strong> Tentar acessar <code class="code-inline">matriz[3][0]</code> ou <code class="code-inline">matriz[0][2]</code> gera a exceção <strong>ArrayIndexOutOfBoundsException</strong>. Lembre-se: o último índice é <strong>tamanho - 1</strong>.
    </div>

    <h4 class="subsection-title">4. Percorrendo a Matriz com Laços Aninhados</h4>
    <p class="lesson-text">Para varrer todos os elementos de uma matriz, precisamos de dois laços <code class="code-inline">for</code>: um <strong>externo</strong> que escolhe a linha e um <strong>interno</strong> que percorre todas as colunas daquela linha. Esse arranjo é chamado de <strong>laços aninhados</strong>.</p>

    <div class="callout-analogy">
      <strong>Analogia do relógio de ponteiros:</strong> O ponteiro dos minutos (laço interno) precisa dar uma volta completa de 60 segundos para que o ponteiro das horas (laço externo) avance um único passo. Assim funciona a varredura de uma matriz: o laço interno executa todas as colunas da linha atual; quando termina, o laço externo muda para a próxima linha e o interno recomeça do zero.
    </div>

    <pre><code class="language-java">int[][] matriz = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };

for (int linha = 0; linha < matriz.length; linha++) {
    for (int coluna = 0; coluna < matriz[linha].length; coluna++) {
        System.out.print(matriz[linha][coluna] + " ");
    }
    System.out.println(); // pula para a próxima linha na tela
}</code></pre>

    <p class="lesson-text"><strong>Simulação passo a passo:</strong></p>
    <ol class="list-decimal ml-6 mt-2 space-y-1 mb-4">
      <li><strong>Linha = 0:</strong> O laço interno percorre <code class="code-inline">coluna = 0, 1, 2</code>, imprimindo 1, 2, 3. Depois, <code class="code-inline">println</code> quebra a linha no console.</li>
      <li><strong>Linha = 1:</strong> O laço interno recomeça do zero e imprime 4, 5, 6.</li>
      <li><strong>Linha = 2:</strong> O laço interno imprime 7, 8, 9.</li>
      <li>Quando <code class="code-inline">linha</code> chega a 3, a condição <code class="code-inline">3 < 3</code> falha e ambos os laços terminam.</li>
    </ol>

    <p class="lesson-text">Essa estrutura é a base para qualquer processamento de tabelas: você pode somar todos os valores, encontrar o maior elemento ou modificar células específicas, tudo trocando o comando interno.</p>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Arrays de arrays independentes:</strong> na memória, a matriz não é um bloco contíguo como um único retângulo. O Java cria um array de referências para os arrays das linhas. Isso permite, inclusive, <strong>matrizes irregulares</strong> (jagged arrays), onde cada linha pode ter um tamanho diferente.</li>
      <li><strong>Acesso rápido:</strong> acessar um elemento via <code class="code-inline">matriz[linha][coluna]</code> é feito em duas etapas: primeiro localiza-se o array da linha, depois o elemento dentro dele. A complexidade ainda é O(1).</li>
      <li><strong>Dimensões superiores:</strong> o mesmo princípio se aplica a arrays 3D (<code class="code-inline">int[][][] cubo</code>) ou mais. Cada par de colchetes adicional acrescenta uma nova dimensão.</li>
      <li><strong>For-each em matrizes:</strong> é possível, mas o for-each percorre linha por linha (cada linha é um array unidimensional). Para acessar os elementos individuais, ainda é necessário um laço interno.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Jogos de tabuleiro:</strong> xadrez, jogo da velha, batalha naval — todas as posições são mapeadas como <code class="code-inline">tabuleiro[linha][coluna]</code>.</li>
      <li><strong>Planilhas e relatórios:</strong> qualquer sistema que exporte uma tabela (Excel, CSV) pode ser representado por uma matriz.</li>
      <li><strong>Processamento de imagens:</strong> a tela de um computador é uma matriz de pixels; cada pixel é um elemento com informação de cor.</li>
      <li><strong>Gestão acadêmica:</strong> <code class="code-inline">notas[aluno][bimestre]</code> ou <code class="code-inline">faltas[turma][disciplina]</code>.</li>
      <li><strong>Matemática e engenharia:</strong> operações com matrizes (soma, multiplicação, determinantes) são a base de cálculos em física, estatística e aprendizado de máquina.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">As matrizes são a extensão natural dos arrays quando precisamos de organização em duas ou mais dimensões. Entendemos que, para o Java, uma matriz é um <strong>array de arrays</strong>, declarado com <code class="code-inline">[][]</code> e acessado por coordenadas <code class="code-inline">(linha, coluna)</code>. Aprendemos a criar grades de dados com <code class="code-inline">new</code> ou com a inicialização direta, e dominamos a arte dos <strong>laços aninhados</strong> — a técnica que nos permite percorrer a tabela inteira com precisão.</p>
    <p class="lesson-text">Com essa base sólida, você já pode representar tabuleiros, planilhas e imagens. No próximo passo, veremos como a classe <code class="code-inline">java.util.Arrays</code> oferece ferramentas ainda mais poderosas para manipular arrays de todas as dimensões.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Declaração, inicialização e exibição de uma matriz 3x3',
      codigo: `public class MatrizBasica {
    public static void main(String[] args) {
        // Inicialização direta de uma matriz 3x3
        int[][] tabela = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // Exibindo a matriz com laços aninhados
        System.out.println("Matriz 3x3:");
        for (int i = 0; i < tabela.length; i++) {
            for (int j = 0; j < tabela[i].length; j++) {
                System.out.print(tabela[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,
      explicacao: 'Cria uma matriz 3x3 com números de 1 a 9. Os laços aninhados percorrem cada célula, e o println interno garante a quebra de linha após cada fileira.'
    },
    {
      titulo: 'Acessando e modificando células individuais',
      codigo: `public class ManipulaCelulas {
    public static void main(String[] args) {
        int[][] coordenadas = new int[3][2];

        // Preenchendo posições específicas
        coordenadas[0][0] = 10;
        coordenadas[0][1] = 20;
        coordenadas[1][0] = 30;
        coordenadas[1][1] = 40;
        coordenadas[2][0] = 50;
        coordenadas[2][1] = 60;

        // Lendo o valor da célula na 2ª linha, 1ª coluna
        System.out.println("coordenadas[1][0] = " + coordenadas[1][0]); // 30
    }
}`,
      explicacao: 'A matriz de 3 linhas × 2 colunas é alocada com new e preenchida célula por célula. A leitura usa exatamente a mesma notação de colchetes.'
    },
    {
      titulo: 'Cálculo da soma de todos os elementos da matriz',
      codigo: `public class SomaMatriz {
    public static void main(String[] args) {
        int[][] matriz = { {2, 4, 6}, {8, 10, 12} };
        int soma = 0;

        for (int lin = 0; lin < matriz.length; lin++) {
            for (int col = 0; col < matriz[lin].length; col++) {
                soma += matriz[lin][col];
            }
        }

        System.out.println("Soma total: " + soma); // 42
    }
}`,
      explicacao: 'Os laços aninhados percorrem todos os elementos, acumulando‑os na variável soma. A técnica é a mesma para calcular média, encontrar máximo, etc.'
    }
  ],

  exercicios: [
    {
      pergunta: 'O que é uma matriz em Java?',
      alternativas: [
        'Um conjunto de variáveis de tipos diferentes.',
        'Um array que armazena outros arrays, formando uma estrutura de linhas e colunas.',
        'Uma função que multiplica dois números.'
      ],
      respostaCorreta: 1,
      explicacao: 'Uma matriz é um array de arrays. O array externo guarda referências para os arrays das linhas, criando uma grade bidimensional.'
    },
    {
      pergunta: 'Considere: int[][] m = new int[2][3]; Quantas células a matriz possui?',
      alternativas: [
        '5',
        '6',
        '2'
      ],
      respostaCorreta: 1,
      explicacao: 'Multiplicam‑se as dimensões: 2 linhas × 3 colunas = 6 células.'
    },
    {
      pergunta: 'Qual o valor de m[1][0] após: int[][] m = {{5,10},{15,20}};?',
      alternativas: [
        '5',
        '10',
        '15'
      ],
      respostaCorreta: 2,
      explicacao: 'O primeiro índice (1) indica a segunda linha (15,20); o segundo índice (0) indica a primeira coluna dessa linha, que é 15.'
    },
    {
      pergunta: 'Por que usamos laços aninhados para percorrer uma matriz?',
      alternativas: [
        'Porque um único for não consegue acessar todas as células de uma estrutura com linhas e colunas.',
        'Porque é proibido usar for‑each em matrizes.',
        'Para deixar o código mais lento.'
      ],
      respostaCorreta: 0,
      explicacao: 'Um laço simples percorreria apenas as linhas ou apenas as colunas. Com laços aninhados, o laço externo controla a linha e o interno varre cada coluna daquela linha.'
    }
  ]
};