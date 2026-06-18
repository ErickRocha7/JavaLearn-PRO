// Arquivo: data/aulas/cap-06/sub-6-1.js
// Aula 6.1 – Declaração e Inicialização de Arrays

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-6-1'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Arrays em Java: O Armário Organizador da Memória</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Você já tentou gerenciar uma grande quantidade de informações com variáveis comuns? Imagine ter que criar 100 variáveis separadas para armazenar as notas de 100 alunos. Esse é o pesadelo que os arrays vieram resolver. Um <strong>array</strong> (também chamado de vetor ou arranjo) é uma estrutura de dados fundamental que permite guardar múltiplos valores do mesmo tipo sob um único nome, como um armário com várias gavetas numeradas.</p>
    <p class="lesson-text">Nesta aula, vamos desmontar cada detalhe dos arrays: o que são, por que são rígidos, como declará‑los, como alocar espaço na memória, como preenchê‑los de uma vez e, principalmente, como acessar suas posições sem quebrar o programa.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de abrir o código, precisamos fixar dois conceitos que definem a natureza de um array em Java: ele é <strong>estático</strong> e <strong>homogêneo</strong>. Essas duas palavras são a chave para entender tanto o poder quanto as limitações dessa estrutura.</p>

    <div class="callout-analogy">
      <strong>Analogia do armário organizador:</strong> Imagine um armário gaveteiro comprado pronto. Ele vem com um número fixo de gavetas — digamos, 5. Você não consegue puxar a lateral para criar uma sexta gaveta, nem serrar uma para ficar com 4. Além disso, todas as gavetas têm exatamente o mesmo formato interno, projetado para guardar um único tipo de objeto (apenas parafusos, ou apenas chaves de fenda). Esse armário é um array: tamanho fixo e conteúdo uniforme.
    </div>

    <h4 class="subsection-title">1. Tamanho fixo (estático)</h4>
    <p class="lesson-text">Quando um array é criado, seu comprimento é definido de uma vez por todas. A memória do computador funciona como um estacionamento: o Java precisa encontrar um bloco de vagas contíguas, lado a lado, para alocar todos os elementos do array. Uma vez reservado esse quarteirão, ele não pode ser aumentado ou diminuído. Se precisar de mais espaço, a única saída é construir um novo array maior e copiar os dados antigos para lá.</p>

    <h4 class="subsection-title">2. Todos os elementos do mesmo tipo (homogêneo)</h4>
    <p class="lesson-text">Um array não aceita mistura de tipos. Se você declarar um array de <code class="code-inline">int</code>, todas as suas posições guardarão exclusivamente números inteiros. Tentar inserir um texto ou um número decimal resultará em erro de compilação. Essa restrição garante que o Java saiba exatamente o espaço que cada gaveta ocupa e possa realizar operações com segurança — por exemplo, somar todos os elementos sem se preocupar em encontrar uma palavra no meio.</p>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. Declaração: o projeto do armário</h4>
    <p class="lesson-text">Antes de ocupar memória, você precisa avisar ao compilador que um array existirá. Isso é feito com o <strong>tipo de dado</strong> seguido de <strong>colchetes</strong> <code class="code-inline">[]</code> e o nome da variável (de preferência no plural).</p>

    <pre><code class="language-java">// Declaração de um array de inteiros chamado "idades"
int[] idades;

// Declaração de um array de Strings para nomes de clientes
String[] nomesClientes;</code></pre>

    <p class="lesson-text">Os colchetes são o sinal que diferencia uma variável comum de um array. <code class="code-inline">int idade;</code> guarda um único número, enquanto <code class="code-inline">int[] idades;</code> guarda uma coleção deles. Neste momento, o array <strong>ainda não existe na memória</strong> — é apenas um projeto.</p>

    <h4 class="subsection-title">2. Alocação com <code class="code-inline">new</code>: erguendo o armário</h4>
    <p class="lesson-text">Para transformar o projeto em realidade, usamos o operador <code class="code-inline">new</code>. Ele reserva um bloco contíguo de memória do tamanho que você especificar e entrega uma referência (um "endereço") para a variável.</p>

    <pre><code class="language-java">// Alocação de um array de 5 inteiros
int[] idades = new int[5];</code></pre>

    <p class="lesson-text">O que acontece nos bastidores:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li>O Java procura na memória RAM um espaço livre que comporte 5 <code class="code-inline">int</code> consecutivos.</li>
      <li>Reserva esse espaço e o associa à variável <code class="code-inline">idades</code>.</li>
      <li>Preenche automaticamente cada posição com o valor padrão do tipo: <code class="code-inline">0</code> para números, <code class="code-inline">false</code> para <code class="code-inline">boolean</code>, <code class="code-inline">null</code> para objetos (como <code class="code-inline">String</code>).</li>
    </ul>

    <div class="callout-warning">
      <strong>Atenção:</strong> o tamanho definido no <code class="code-inline">new</code> é imutável. <code class="code-inline">idades[5] = 10;</code> em um array de tamanho 5 causará o erro <strong>ArrayIndexOutOfBoundsException</strong>.
    </div>

    <h4 class="subsection-title">3. Inicialização direta: o armário que já nasce cheio</h4>
    <p class="lesson-text">Quando você já sabe os valores que o array deve conter, pode usar a inicialização direta com chaves <code class="code-inline">{}</code>. O Java conta os elementos, determina o tamanho automaticamente e já os posiciona nas posições corretas.</p>

    <pre><code class="language-java">String[] diasDaSemana = {"Segunda", "Terça", "Quarta", "Quinta", "Sexta"};</code></pre>

    <p class="lesson-text">Esse atalho dispensa o uso de <code class="code-inline">new</code> e do número explícito de elementos. O array terá tamanho 5 e cada texto estará em sua gaveta: índice 0 com "Segunda", índice 1 com "Terça", e assim por diante.</p>

    <h4 class="subsection-title">4. Índices: a numeração que começa do zero</h4>
    <p class="lesson-text">Para acessar uma posição específica, usamos o nome do array seguido do índice entre colchetes: <code class="code-inline">array[indice]</code>. O índice indica a distância a partir do início do array, por isso começa em <strong>0</strong> e vai até <strong>tamanho - 1</strong>.</p>

    <pre><code class="language-java">int[] notas = new int[3];   // índices: 0, 1, 2

notas[0] = 85;               // grava na primeira posição
notas[1] = 92;               // grava na segunda
notas[2] = 74;               // grava na terceira

System.out.println(notas[1]); // lê a segunda posição -> 92</code></pre>

    <p class="lesson-text">A regra é absoluta: um array de tamanho <em>n</em> tem índices de <em>0</em> a <em>n‑1</em>. Tentar usar qualquer índice fora dessa faixa gera a exceção <strong>ArrayIndexOutOfBoundsException</strong> e interrompe o programa.</p>

    <div class="callout-success">
      <strong>Dica:</strong> para evitar o erro, lembre-se: o último índice é sempre <code class="code-inline">array.length - 1</code>. O atributo <code class="code-inline">length</code> retorna o tamanho total do array e é extremamente útil em laços.
    </div>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Memória contígua:</strong> os elementos de um array ficam lado a lado na RAM, o que permite acesso instantâneo por índice (operações O(1)).</li>
      <li><strong><code class="code-inline">length</code> vs. <code class="code-inline">size()</code>:</strong> arrays usam o atributo <code class="code-inline">length</code> (sem parênteses); coleções como <code class="code-inline">ArrayList</code> usam o método <code class="code-inline">size()</code>.</li>
      <li><strong>Arrays e tipos primitivos:</strong> quando um array armazena tipos primitivos (<code class="code-inline">int</code>, <code class="code-inline">double</code>, etc.), cada posição guarda o valor diretamente. Para arrays de objetos, guarda‑se a referência para o objeto.</li>
      <li><strong>Valores padrão:</strong> são atribuídos automaticamente pelo <code class="code-inline">new</code>. Variáveis locais de métodos, porém, não são inicializadas automaticamente, mas os elementos do array sim.</li>
      <li><strong>Inicialização direta e inferência:</strong> a sintaxe com chaves só pode ser usada na mesma linha da declaração. Algo como <code class="code-inline">dias = {"Dom", "Seg"};</code> é inválido após a declaração.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Boletim escolar:</strong> armazenar as notas de um aluno em um bimestre.</li>
      <li><strong>Carrinho de compras:</strong> guardar os códigos dos produtos selecionados (quando a quantidade é fixa).</li>
      <li><strong>Tabelas de referência:</strong> meses do ano, dias da semana, naipes de baralho.</li>
      <li><strong>Gráficos e processamento de sinais:</strong> armazenar amostras de áudio ou pixels de uma imagem.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Arrays são a primeira estrutura de dados coletiva que um programador aprende, e compreendê‑los profundamente é vital. Vimos que eles são estáticos (tamanho fixo) e homogêneos (mesmo tipo), declarados com <code class="code-inline">tipo[] nome</code>, construídos com <code class="code-inline">new tipo[tamanho]</code> e acessados via índices que começam em zero. A inicialização direta com <code class="code-inline">{}</code> oferece um atalho elegante para dados conhecidos.</p>
    <p class="lesson-text">Dominar a manipulação de índices e respeitar o limite <code class="code-inline">0</code> a <code class="code-inline">length‑1</code> é a chave para evitar o temido <em>ArrayIndexOutOfBoundsException</em>. Nas próximas aulas, veremos como percorrer essas gavetas de forma eficiente com laços <code class="code-inline">for</code> e <code class="code-inline">for-each</code>.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Declaração, alocação e inicialização de arrays',
      codigo: `public class ArrayBasico {
    public static void main(String[] args) {
        // Declaração e alocação com new
        int[] numeros = new int[4];
        numeros[0] = 10;
        numeros[1] = 20;
        numeros[2] = 30;
        numeros[3] = 40;

        // Inicialização direta
        String[] frutas = {"Maçã", "Banana", "Laranja"};

        // Acessando elementos
        System.out.println("Primeiro número: " + numeros[0]);   // 10
        System.out.println("Última fruta: " + frutas[2]);       // Laranja

        // O atributo length
        System.out.println("Tamanho do array frutas: " + frutas.length); // 3
    }
}`,
      explicacao: 'Este exemplo mostra a criação de um array de inteiros usando new e a inicialização direta de um array de Strings. O atributo length é usado para obter o tamanho do array.'
    },
    {
      titulo: 'Demonstração do erro ArrayIndexOutOfBoundsException',
      codigo: `public class TesteLimite {
    public static void main(String[] args) {
        int[] dados = new int[3];
        dados[0] = 5;
        dados[1] = 10;
        dados[2] = 15;

        // Tentativa de acessar índice 3 (quarta posição) - ERRO!
        System.out.println(dados[3]); // Lança ArrayIndexOutOfBoundsException
    }
}`,
      explicacao: 'Um array de tamanho 3 possui índices 0, 1 e 2. Qualquer acesso a um índice fora dessa faixa, como 3 ou -1, gera uma exceção em tempo de execução que interrompe o programa.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual é a principal característica de um array em Java?',
      alternativas: [
        'Pode aumentar de tamanho automaticamente quando necessário',
        'Armazena múltiplos valores do mesmo tipo, com tamanho fixo após a criação',
        'Permite misturar tipos diferentes (int, String, double) livremente'
      ],
      respostaCorreta: 1,
      explicacao: 'Arrays são estruturas homogêneas (um único tipo) e estáticas (tamanho definido na criação e imutável).'
    },
    {
      pergunta: 'O que faz o operador new int[4]?',
      alternativas: [
        'Declara uma variável chamada new',
        'Cria um array de inteiros com 4 posições, preenchidas com 0, e aloca memória para ele',
        'Converte o número 4 em um array de inteiros'
      ],
      respostaCorreta: 1,
      explicacao: 'new int[4] aloca memória para um array de 4 inteiros, inicializando cada posição com o valor padrão 0.'
    },
    {
      pergunta: 'Considere: int[] x = {2, 4, 6, 8}; Qual é o valor de x[1]?',
      alternativas: [
        '2',
        '4',
        '6'
      ],
      respostaCorreta: 1,
      explicacao: 'A indexação começa em 0, portanto x[0]=2, x[1]=4, x[2]=6, x[3]=8.'
    },
    {
      pergunta: 'O que acontece se tentarmos acessar o índice 5 em um array declarado como new int[5]?',
      alternativas: [
        'Retorna o valor 0',
        'Retorna o último elemento do array',
        'Lançará uma exceção ArrayIndexOutOfBoundsException'
      ],
      respostaCorreta: 2,
      explicacao: 'Um array de 5 elementos tem índices de 0 a 4. O índice 5 está fora dos limites e causa a exceção.'
    }
  ]
};