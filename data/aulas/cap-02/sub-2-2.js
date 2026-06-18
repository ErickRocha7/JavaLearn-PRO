// Arquivo: data/aulas/cap-02/sub-2-2.js
// Aula 2.2 – Declaração de Classes e Instanciação

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-2-2'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Declaração de Classes e Instanciação</h2>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Introdução</h3>
    <p class="mb-4">Na aula anterior, compreendemos a diferença conceitual entre <strong>classe</strong> (molde) e <strong>objeto</strong> (instância). Agora é hora de abrir o editor e traduzir essas ideias em código Java real. Você aprenderá a declarar uma classe com seus atributos, a usar o operador <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">new</code> para criar objetos na memória, a acessar os membros desses objetos com o operador ponto e a gerenciar múltiplas instâncias independentes.</p>
    <p class="mb-4">Este é o momento em que a teoria se torna prática: você deixará de apenas imaginar a planta da casa e passará a construir casas de verdade no computador.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">1. Sintaxe Básica para Criar uma Classe</h3>
    <p class="mb-4">Toda classe em Java é declarada dentro de um arquivo com extensão <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">.java</code>. O nome do arquivo deve ser <strong>exatamente igual</strong> ao nome da classe pública, inclusive respeitando letras maiúsculas e minúsculas (Java é <em>case‑sensitive</em>).</p>
    <p class="mb-4">Veja a estrutura de uma classe simples que representa um celular:</p>

    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
public class Celular {
    // Atributos (características)
    String marca;
    String modelo;
    int bateria = 100; // valor padrão de fábrica
}</pre>

    <p class="mb-4">Vamos analisar cada elemento dessa declaração:</p>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">public</code> – O modificador de acesso:</strong> torna a classe visível para todo o sistema. Qualquer outro arquivo pode usar este molde para fabricar objetos. É como colocar uma placa de "acesso livre" na porta do escritório de arquitetura.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">class</code> – A palavra reservada:</strong> informa ao compilador que um novo tipo de dado está sendo definido. Sem ela, o Java interpretaria o código como uma sequência procedural de comandos.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Celular</code> – O nome da classe:</strong> segue a convenção <strong>PascalCase</strong> (primeira letra maiúscula; se houver mais palavras, cada uma também inicia com maiúscula). O arquivo deve ser salvo como <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Celular.java</code>.</li>
      <li><strong>Chaves <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">{ }</code> – Os limites do molde:</strong> tudo que estiver entre a chave de abertura e a de fechamento pertence à classe. Atributos e métodos declarados fora dessas chaves não fazem parte do molde.</li>
      <li><strong>Atributos:</strong> são as variáveis de instância. <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">String marca</code> reserva uma gaveta para textos; <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">int bateria</code> reserva uma gaveta para números inteiros. O valor <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">= 100</code> define um <strong>valor padrão de fábrica</strong>: todo celular nascerá com bateria em 100%.</li>
      <li><strong>Ponto e vírgula <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">;</code>:</strong> finaliza cada declaração de atributo. Sua ausência causa erro de compilação.</li>
    </ul>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">2. O Operador <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">new</code> e a Alocação de Memória</h3>
    <p class="mb-4">A classe é apenas o projeto. Para criar um celular de verdade na memória do computador, usamos a instrução:</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
Celular meuFone = new Celular();</pre>
    <p class="mb-4">Essa única linha dispara uma sequência complexa que envolve duas áreas da memória RAM:</p>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>Stack (Pilha):</strong> memória rápida onde ficam as referências (os "controles remotos"). A parte esquerda da linha, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Celular meuFone</code>, cria uma variável na Stack capaz de armazenar um endereço de objeto do tipo Celular. Neste momento, ela ainda não aponta para lugar nenhum — está <strong>nula</strong> (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">null</code>).</li>
      <li><strong>Heap (Monte):</strong> grande área de memória onde os objetos realmente residem. O operador <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">new</code> calcula o espaço necessário, encontra um bloco livre, demarca o território e o isola de outros programas.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Celular()</code> – O construtor padrão:</strong> o Java fornece automaticamente um construtor que copia o layout da classe para dentro do bloco de memória, aplicando os valores padrão (ex.: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">bateria = 100</code>).</li>
      <li><strong>Atribuição <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">=</code>:</strong> o endereço do novo objeto na Heap é armazenado na referência <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">meuFone</code>. Agora o controle remoto está sintonizado com o objeto real.</li>
    </ul>

    <p class="mb-4"><strong>Visualmente:</strong></p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
[Stack]                         [Heap]
meuFone (0x7F4A)  ---------->   Objeto Celular
                                - marca: (vazio)
                                - modelo: (vazio)
                                - bateria: 100</pre>

    <div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
      <p class="text-red-800"><strong>Atenção:</strong> se você declarar <code class="bg-red-100 px-1 py-0.5 rounded text-sm font-mono">Celular meuFone;</code> sem o <code class="bg-red-100 px-1 py-0.5 rounded text-sm font-mono">new</code>, a referência fica <code class="bg-red-100 px-1 py-0.5 rounded text-sm font-mono">null</code>. Qualquer tentativa de usar <code class="bg-red-100 px-1 py-0.5 rounded text-sm font-mono">meuFone.marca</code> resultará no temido erro <strong>NullPointerException</strong>.</p>
    </div>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">3. Criação do Primeiro Objeto no Método <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code></h3>
    <p class="mb-4">Para testar o molde, criamos uma classe executável separada com o método <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code>. Essa classe funciona como o painel de controle do nosso programa.</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
public class Principal {
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
}</pre>

    <p class="mb-4"><strong>O Operador Ponto (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">.</code>):</strong> é o mecanismo que conecta o código ao objeto real na memória. Funciona como um dedo indicador: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">celularDoJoao.marca</code> significa "vá ao objeto referenciado por <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">celularDoJoao</code>, localize o atributo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">marca</code> e deposite o valor".</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">4. Declaração de Múltiplas Instâncias</h3>
    <p class="mb-4">A grande vantagem das classes é poder fabricar quantos objetos quisermos, todos independentes entre si. Cada novo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">new</code> cria um bloco separado na Heap.</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
public class Principal {
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
}</pre>

    <p class="mb-4">A saída será:</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
Fone 1: iPhone 15 | Bateria: 100%
Fone 2: Galaxy S24 | Bateria: 45%</pre>

    <p class="mb-4">Apesar de compartilharem o mesmo molde (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Celular.java</code>), cada objeto ocupa um espaço distinto na Heap. Alterar a bateria de <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">fone2</code> não afeta <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">fone1</code>; eles possuem <strong>identidades únicas</strong> e <strong>estados independentes</strong>. É como ter dois bonecos feitos pela mesma impressora 3D: pintar um não muda a cor do outro.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Detalhamento Técnico</h3>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>Stack vs Heap:</strong> a Stack armazena referências e variáveis locais de forma organizada e rápida; a Heap guarda os objetos propriamente ditos. O Garbage Collector (coletor de lixo) do Java monitora a Heap e remove automaticamente objetos que não têm mais referências apontando para eles.</li>
      <li><strong>Valores padrão:</strong> atributos não inicializados recebem valores padrão do Java: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">0</code> para tipos numéricos, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">false</code> para <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">boolean</code> e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">null</code> para tipos de referência (como <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">String</code>). No exemplo, definimos <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">bateria = 100</code> para substituir o padrão 0.</li>
      <li><strong>Nome do arquivo e da classe pública:</strong> se a classe for declarada <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">public</code>, ela deve estar em um arquivo com o mesmo nome exato (maiúsculas/minúsculas). Caso contrário, erro de compilação: <em>"class X is public, should be declared in a file named X.java"</em>.</li>
      <li><strong>Operador <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">new</code> e construtor padrão:</strong> mesmo sem definir um construtor explicitamente, o Java fornece um construtor padrão implícito. Estudaremos construtores personalizados na Aula 2.5.</li>
      <li><strong>Múltiplas instâncias e reutilização:</strong> esse é o fundamento para criar centenas de objetos em jogos ou sistemas corporativos, cada um com seu próprio estado, sem duplicar código.</li>
    </ul>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Aplicações Práticas</h3>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>Jogos digitais:</strong> crie uma classe <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Inimigo</code> com atributos como <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">vida</code> e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">posicao</code>. Com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">new</code>, você gera 100 inimigos no mapa, cada um reagindo de forma independente aos ataques do jogador.</li>
      <li><strong>Sistemas de cadastro:</strong> uma classe <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Cliente</code> com nome, CPF e e‑mail; para cada novo registro, basta instanciar um novo objeto e armazená‑lo.</li>
      <li><strong>Simuladores financeiros:</strong> a classe <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">ContaBancaria</code> serve de molde para contas correntes, poupança e investimentos, cada uma com saldo e histórico próprios.</li>
    </ul>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Conclusão</h3>
    <p class="mb-4">Você aprendeu a declarar uma classe com atributos e valores padrão, a instanciar objetos com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">new</code>, a acessar e modificar o estado dos objetos através do operador ponto e a criar múltiplas instâncias independentes. Essas habilidades formam a base prática da Orientação a Objetos: a partir de um único molde, você constrói universos inteiros de objetos que interagem entre si.</p>
    <p>Na próxima aula, avançaremos para a criação de métodos, dando aos objetos a capacidade de executar ações e modificar seus próprios estados de forma segura.</p>
  `,

  imagens: [
    // Espaço reservado para futuras imagens.
  ],

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