// Arquivo: data/aulas/cap-02/sub-2-2.js
// Aula 2.2 – Declaração de Classes e Instanciação

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-2-2'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Declaração de Classes e Instanciação</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Na aula anterior, compreendemos a diferença conceitual entre <strong>classe</strong> (molde) e <strong>objeto</strong> (instância). Agora é hora de abrir o editor e traduzir essas ideias em código Java real. Você aprenderá a declarar uma classe com seus atributos, a usar o operador <code class="code-inline">new</code> para criar objetos na memória, a acessar os membros desses objetos com o operador ponto e a gerenciar múltiplas instâncias independentes.</p>
    <p class="lesson-text">Este é o momento em que a teoria se torna prática: você deixará de apenas imaginar a planta da casa e passará a construir casas de verdade no computador.</p>

    <h3 class="section-title">1. Sintaxe Básica para Criar uma Classe</h3>
    <p class="lesson-text">Toda classe em Java é declarada dentro de um arquivo com extensão <code class="code-inline">.java</code>. O nome do arquivo deve ser <strong>exatamente igual</strong> ao nome da classe pública, inclusive respeitando letras maiúsculas e minúsculas (Java é <em>case‑sensitive</em>).</p>

    <pre><code class="language-java">public class Celular {
    // Atributos (características)
    String marca;
    String modelo;
    int bateria = 100; // valor padrão de fábrica
}</code></pre>

    <p class="lesson-text">Vamos analisar cada elemento dessa declaração:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong><code class="code-inline">public</code> – O modificador de acesso:</strong> torna a classe visível para todo o sistema.</li>
      <li><strong><code class="code-inline">class</code> – A palavra reservada:</strong> informa ao compilador que um novo tipo de dado está sendo definido.</li>
      <li><strong><code class="code-inline">Celular</code> – O nome da classe:</strong> segue a convenção <strong>PascalCase</strong>. O arquivo deve ser salvo como <code class="code-inline">Celular.java</code>.</li>
      <li><strong>Chaves <code class="code-inline">{ }</code> – Os limites do molde:</strong> tudo que estiver entre as chaves pertence à classe.</li>
      <li><strong>Atributos:</strong> são as variáveis de instância. <code class="code-inline">int bateria = 100</code> define um valor padrão de fábrica.</li>
      <li><strong>Ponto e vírgula <code class="code-inline">;</code>:</strong> finaliza cada declaração de atributo.</li>
    </ul>

    <h3 class="section-title">2. O Operador <code class="code-inline">new</code> e a Alocação de Memória</h3>
    <p class="lesson-text">A classe é apenas o projeto. Para criar um celular de verdade na memória do computador, usamos a instrução:</p>
    <pre><code class="language-java">Celular meuFone = new Celular();</code></pre>
    <p class="lesson-text">Essa única linha dispara uma sequência complexa que envolve duas áreas da memória RAM:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Stack (Pilha):</strong> memória rápida onde ficam as referências (os "controles remotos").</li>
      <li><strong>Heap (Monte):</strong> grande área de memória onde os objetos realmente residem. O operador <code class="code-inline">new</code> calcula o espaço necessário, encontra um bloco livre e demarca o território.</li>
      <li><strong><code class="code-inline">Celular()</code> – O construtor padrão:</strong> o Java fornece automaticamente um construtor que copia o layout da classe para dentro do bloco de memória, aplicando os valores padrão.</li>
      <li><strong>Atribuição <code class="code-inline">=</code>:</strong> o endereço do novo objeto na Heap é armazenado na referência <code class="code-inline">meuFone</code>.</li>
    </ul>

    <div class="terminal-output">
[Stack]                         [Heap]
meuFone (0x7F4A)  ---------->   Objeto Celular
                                - marca: (vazio)
                                - modelo: (vazio)
                                - bateria: 100
    </div>

    <div class="callout-warning">
      <strong>Atenção:</strong> se você declarar <code class="code-inline">Celular meuFone;</code> sem o <code class="code-inline">new</code>, a referência fica <code class="code-inline">null</code>. Qualquer tentativa de usar <code class="code-inline">meuFone.marca</code> resultará no temido erro <strong>NullPointerException</strong>.
    </div>

    <h3 class="section-title">3. Criação do Primeiro Objeto no Método <code class="code-inline">main</code></h3>
    <pre><code class="language-java">public class Principal {
    public static void main(String[] args) {

        // Instanciação: criando o objeto na memória
        Celular celularDoJoao = new Celular();

        // Acessando e alterando atributos com o operador ponto (.)
        celularDoJoao.marca = "Apple";
        celularDoJoao.modelo = "iPhone 15";

        // Exibindo informações na tela
        System.out.println("Celular do João é um: " + celularDoJoao.modelo);
        System.out.println("Bateria: " + celularDoJoao.bateria + "%");
    }
}</code></pre>

    <p class="lesson-text"><strong>O Operador Ponto (<code class="code-inline">.</code>):</strong> é o mecanismo que conecta o código ao objeto real na memória. <code class="code-inline">celularDoJoao.marca</code> significa "vá ao objeto referenciado por <code class="code-inline">celularDoJoao</code>, localize o atributo <code class="code-inline">marca</code> e deposite o valor".</p>

    <h3 class="section-title">4. Declaração de Múltiplas Instâncias</h3>
    <pre><code class="language-java">public class Principal {
    public static void main(String[] args) {

        Celular fone1 = new Celular();
        fone1.marca = "Apple";
        fone1.modelo = "iPhone 15";

        Celular fone2 = new Celular();
        fone2.marca = "Samsung";
        fone2.modelo = "Galaxy S24";
        fone2.bateria = 45;   // Maria usou o celular e a bateria caiu

        System.out.println("Fone 1: " + fone1.modelo + " | Bateria: " + fone1.bateria + "%");
        System.out.println("Fone 2: " + fone2.modelo + " | Bateria: " + fone2.bateria + "%");
    }
}</code></pre>

    <div class="terminal-output">
Fone 1: iPhone 15 | Bateria: 100%
Fone 2: Galaxy S24 | Bateria: 45%
    </div>

    <p class="lesson-text">Apesar de compartilharem o mesmo molde (<code class="code-inline">Celular.java</code>), cada objeto ocupa um espaço distinto na Heap. Alterar a bateria de <code class="code-inline">fone2</code> não afeta <code class="code-inline">fone1</code>; eles possuem <strong>identidades únicas</strong> e <strong>estados independentes</strong>. É como ter dois bonecos feitos pela mesma impressora 3D: pintar um não muda a cor do outro.</p>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Stack vs Heap:</strong> a Stack armazena referências e variáveis locais de forma organizada e rápida; a Heap guarda os objetos propriamente ditos. O Garbage Collector monitora a Heap e remove automaticamente objetos que não têm mais referências.</li>
      <li><strong>Valores padrão:</strong> atributos não inicializados recebem valores padrão: <code class="code-inline">0</code> para tipos numéricos, <code class="code-inline">false</code> para <code class="code-inline">boolean</code> e <code class="code-inline">null</code> para tipos de referência (como <code class="code-inline">String</code>).</li>
      <li><strong>Nome do arquivo e da classe pública:</strong> se a classe for declarada <code class="code-inline">public</code>, ela deve estar em um arquivo com o mesmo nome exato (maiúsculas/minúsculas).</li>
      <li><strong>Operador <code class="code-inline">new</code> e construtor padrão:</strong> mesmo sem definir um construtor explicitamente, o Java fornece um construtor padrão implícito.</li>
      <li><strong>Múltiplas instâncias e reutilização:</strong> esse é o fundamento para criar centenas de objetos em jogos ou sistemas corporativos.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Jogos digitais:</strong> crie uma classe <code class="code-inline">Inimigo</code> com atributos como <code class="code-inline">vida</code> e <code class="code-inline">posicao</code>. Com <code class="code-inline">new</code>, você gera 100 inimigos no mapa.</li>
      <li><strong>Sistemas de cadastro:</strong> uma classe <code class="code-inline">Cliente</code> com nome, CPF e e‑mail; para cada novo registro, basta instanciar um novo objeto.</li>
      <li><strong>Simuladores financeiros:</strong> a classe <code class="code-inline">ContaBancaria</code> serve de molde para contas correntes, poupança e investimentos.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Você aprendeu a declarar uma classe com atributos e valores padrão, a instanciar objetos com <code class="code-inline">new</code>, a acessar e modificar o estado dos objetos através do operador ponto e a criar múltiplas instâncias independentes. Essas habilidades formam a base prática da Orientação a Objetos: a partir de um único molde, você constrói universos inteiros de objetos que interagem entre si.</p>
    <p class="lesson-text">Na próxima aula, avançaremos para a criação de métodos, dando aos objetos a capacidade de executar ações e modificar seus próprios estados de forma segura.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Declaração da classe Celular e uso no método main',
      codigo: `// Arquivo: Celular.java
public class Celular {
    String marca;
    String modelo;
    int bateria = 100;
}

// Arquivo: Principal.java
public class Principal {
    public static void main(String[] args) {
        // Criando o primeiro objeto
        Celular celularDoJoao = new Celular();
        celularDoJoao.marca = "Apple";
        celularDoJoao.modelo = "iPhone 15";

        System.out.println("Celular do João é um: " + celularDoJoao.modelo);
        System.out.println("Bateria: " + celularDoJoao.bateria + "%");
    }
}`,
      explicacao: 'A classe Celular define o molde com três atributos (marca, modelo, bateria). No main, criamos um objeto com new, preenchemos seus atributos usando o operador ponto e exibimos as informações na tela.'
    },
    {
      titulo: 'Múltiplas instâncias independentes',
      codigo: `public class Principal {
    public static void main(String[] args) {
        Celular fone1 = new Celular();
        fone1.marca = "Apple";
        fone1.modelo = "iPhone 15";

        Celular fone2 = new Celular();
        fone2.marca = "Samsung";
        fone2.modelo = "Galaxy S24";
        fone2.bateria = 45;   // bateria gasta

        System.out.println("Fone 1: " + fone1.modelo + " | Bateria: " + fone1.bateria + "%");
        System.out.println("Fone 2: " + fone2.modelo + " | Bateria: " + fone2.bateria + "%");
    }
}`,
      explicacao: 'Dois objetos criados a partir da mesma classe. Alterar a bateria de fone2 para 45% não afeta fone1, que permanece com 100%. Isso demonstra a independência das instâncias na memória.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual é a função do operador new em Java?',
      alternativas: [
        'Comparar se dois objetos são iguais',
        'Alocar memória na Heap e criar uma nova instância de uma classe',
        'Declarar uma nova classe no código-fonte'
      ],
      respostaCorreta: 1,
      explicacao: 'O operador new aloca espaço na memória Heap, inicializa os atributos (com valores padrão ou definidos) e retorna uma referência para o novo objeto criado a partir do molde da classe.'
    },
    {
      pergunta: 'O que acontece se você declarar "Celular c;" e tentar usar "c.marca = \"Apple\";" sem antes fazer "c = new Celular();"?',
      alternativas: [
        'O código compila e executa normalmente',
        'Ocorre um erro de compilação',
        'Ocorre o erro NullPointerException em tempo de execução'
      ],
      respostaCorreta: 2,
      explicacao: 'A variável c foi declarada mas não inicializada — ela vale null. Tentar acessar um membro de um objeto que não existe (null) causa NullPointerException, um dos erros mais comuns em Java.'
    },
    {
      pergunta: 'Por que o nome do arquivo deve ser exatamente igual ao nome da classe pública?',
      alternativas: [
        'É uma convenção estética, mas o Java aceita qualquer nome de arquivo',
        'O compilador Java exige que a classe pública tenha o mesmo nome do arquivo (case‑sensitive); caso contrário, gera erro de compilação',
        'Para que o sistema operacional consiga localizar o arquivo mais rápido'
      ],
      respostaCorreta: 1,
      explicacao: 'A especificação do Java determina que uma classe pública deve ser declarada em um arquivo com o mesmo nome exato (respeitando maiúsculas/minúsculas). Se a classe se chama Celular, o arquivo deve ser Celular.java.'
    }
  ]
};