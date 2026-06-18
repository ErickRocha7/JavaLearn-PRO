// Arquivo: data/aulas/cap-02/sub-2-1.js
// Aula 2.1 – Conceitos de Classe e Objeto

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-2-1'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Conceitos de Classe e Objeto</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Bem-vindo ao coração da programação moderna! Se até agora o código Java lhe parecia uma sopa de letras, respire fundo. A <strong>Programação Orientada a Objetos (POO)</strong> nasceu justamente para tornar o desenvolvimento de software mais parecido com o mundo real, mais intuitivo para a mente humana e mais fácil de manter. Em vez de escrever longas listas de instruções, você passará a criar <strong>objetos</strong> que imitam pessoas, lugares, coisas e conceitos do dia a dia.</p>
    <p class="lesson-text">Nesta aula, vamos construir os dois pilares conceituais que sustentam toda a POO: <strong>Classe</strong> e <strong>Objeto</strong>. Você entenderá a diferença entre o molde e a peça fabricada, entre a planta da casa e a construção real. Compreender essa distinção é o primeiro passo para dominar Java e qualquer outra linguagem orientada a objetos.</p>

    <h3 class="section-title">Fundamentos: O Mundo Antes da POO</h3>
    <p class="lesson-text">Para apreciar o valor da Orientação a Objetos, é útil olhar rapidamente para o passado. Antes da POO, o paradigma dominante era a <strong>Programação Estruturada</strong> (ou procedural). Nela, o código era organizado como uma longa receita sequencial: uma lista de funções e variáveis globais, executadas passo a passo. Embora funcione para programas pequenos, esse modelo sofre de um problema grave: a <strong>falta de isolamento</strong>.</p>
    <p class="lesson-text">Imagine um sistema de biblioteca com 50.000 linhas. Os dados (títulos de livros, nomes de usuários) ficam soltos, acessíveis por qualquer função. Se você alterar uma variável no início do código, pode quebrar uma função no final sem perceber — o famoso <strong>efeito dominó</strong>. O código se torna um emaranhado de dependências, o "código espaguete", onde tudo está tão interligado que mexer em um ponto derruba o sistema inteiro.</p>
    <p class="lesson-text">A POO resolve esse caos com uma mudança de mentalidade: em vez de pensar em "tarefas", pensamos em "coisas" (objetos) que possuem <strong>características</strong> (atributos) e <strong>comportamentos</strong> (métodos). Cada objeto é responsável pelos seus próprios dados e ninguém de fora pode modificá‑los diretamente. Essa blindagem natural torna os programas mais robustos, modulares e fáceis de manter.</p>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. A Analogia Suprema: Planta da Casa vs. Casa Construída</h4>
    <p class="lesson-text">Para fixar a diferença entre Classe e Objeto de uma vez por todas, utilizaremos uma das analogias mais poderosas da computação: a <strong>planta arquitetônica</strong> e as <strong>casas reais</strong>.</p>

    <ul class="topic-list space-y-2 mb-4">
      <li><strong>A Planta (Classe):</strong> um arquiteto desenha o projeto de uma casa. A planta define quantos quartos a casa terá, onde ficarão as portas, a área total. Mas você não pode morar na planta — ela é apenas um conceito abstrato, um molde. No Java, a <strong>classe</strong> é exatamente isso: um gabarito que descreve a estrutura que os objetos terão, mas não ocupa memória real.</li>
      <li><strong>As Casas (Objetos):</strong> com a mesma planta, a construtora ergue três casas no condomínio. Cada uma é feita de tijolos, ocupa um terreno, tem um endereço único e pode ser pintada de cores diferentes. No Java, cada vez que você usa a palavra <code class="code-inline">new</code>, um <strong>objeto</strong> é criado na memória RAM a partir da classe. Você pode criar quantos objetos quiser, todos independentes entre si.</li>
    </ul>

    <p class="lesson-text">A planta é única; as casas são várias. A classe é o código no arquivo <code class="code-inline">.java</code>; os objetos são as entidades vivas durante a execução do programa.</p>

    <h4 class="subsection-title">2. O que é uma Classe? (Molde, Abstração e Tipo de Dado)</h4>
    <p class="lesson-text">Na teoria técnica, uma <strong>classe</strong> é um gabarito que define <strong>atributos</strong> (variáveis) e <strong>métodos</strong> (funções) que os objetos derivados dela possuirão. Mas seu significado é ainda mais profundo: uma classe é um <strong>novo tipo de dado</strong> que você cria.</p>
    <p class="lesson-text">O Java já vem com tipos primitivos — <code class="code-inline">int</code>, <code class="code-inline">double</code>, <code class="code-inline">String</code>. Mas eles não sabem o que é um "Cliente", um "Cachorro" ou uma "ContaBancaria". Quando você escreve uma classe, está expandindo o vocabulário do Java, ensinando ao computador um novo conceito composto de vários dados simples.</p>
    <p class="lesson-text">Uma classe é criada pelo processo de <strong>abstração</strong>: você observa o mundo real e extrai apenas as características relevantes para o seu sistema, ignorando todo o resto.</p>

    <h4 class="subsection-title">3. O que é um Objeto? (Instância, Estado e Identidade)</h4>
    <p class="lesson-text">Se a classe é a planta, o <strong>objeto</strong> é a casa de tijolos. Tecnicamente, um objeto é uma <strong>instância</strong> de uma classe — uma cópia real que existe na memória RAM enquanto o programa executa. Todo objeto possui três propriedades fundamentais:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Identidade única:</strong> cada objeto ocupa um endereço distinto na memória.</li>
      <li><strong>Estado:</strong> é o conjunto dos valores atuais dos atributos naquele instante.</li>
      <li><strong>Comportamento:</strong> é definido pelos métodos da classe. Os métodos são as únicas portas de acesso seguras para alterar o estado do objeto.</li>
    </ul>

    <pre><code class="language-java">// Supondo que a classe ContaBancaria já exista
ContaBancaria minhaConta = new ContaBancaria(); // um objeto nasce na RAM
ContaBancaria outraConta = new ContaBancaria(); // outro objeto independente</code></pre>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <p class="lesson-text"><strong>Atributos e Métodos:</strong> a classe define os atributos (variáveis de instância) que armazenam o estado e os métodos que operam sobre eles. Um método pode ler, validar e alterar os atributos, garantindo que o objeto nunca atinja um estado inconsistente.</p>
    <p class="lesson-text"><strong>Encapsulamento:</strong> embora não seja o foco principal desta aula, o conceito de proteger os dados dentro do objeto (utilizando modificadores <code class="code-inline">private</code>) deriva diretamente dessa separação entre classe e objeto. O objeto é uma cápsula que controla seu próprio estado.</p>
    <p class="lesson-text"><strong>Comparação com tipos primitivos:</strong> tipos como <code class="code-inline">int</code> armazenam valores diretamente na variável. Já variáveis de tipos classe armazenam <strong>referências</strong> (endereços) para os objetos na memória. Isso significa que dois nomes de variável podem apontar para o mesmo objeto, e alterações em um afetam o outro — um tópico que aprofundaremos adiante.</p>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Modelagem de sistemas:</strong> antes de codificar, você desenha as classes que representam as entidades do negócio — <code class="code-inline">Produto</code>, <code class="code-inline">Carrinho</code>, <code class="code-inline">Cliente</code> — e depois as instancia conforme necessário.</li>
      <li><strong>Reutilização de código:</strong> uma classe bem projetada pode ser usada em diversos programas.</li>
      <li><strong>Organização e manutenção:</strong> se um bug ocorre nos dados de um cliente, você sabe exatamente onde procurar: dentro da classe <code class="code-inline">Cliente</code>.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Você acaba de cruzar a fronteira conceitual mais importante da programação Java. Classe é o molde abstrato que define atributos e métodos; objeto é a instância concreta que vive na memória, com identidade, estado e comportamento próprios. A diferença entre "o que é" (planta) e "o que existe" (casa) é o alicerce sobre o qual ergueremos herança, polimorfismo, encapsulamento e todos os demais pilares da Orientação a Objetos.</p>
    <p class="lesson-text">Agora você não apenas sabe que uma classe é um molde — você entende por que essa metáfora resolve os problemas do código espaguete, como a abstração filtra a realidade e de que maneira os objetos interagem para formar sistemas complexos e organizados. Nas próximas aulas, começaremos a declarar classes em Java, criar objetos com <code class="code-inline">new</code> e acessar seus membros.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Declaração de uma classe e criação de objetos',
      codigo: `// Arquivo: Cachorro.java
public class Cachorro {
    // Atributos (estado)
    String nome;
    String raca;
    int idade;

    // Método (comportamento)
    void latir() {
        System.out.println(nome + " diz: Au au!");
    }
}

// Em outra classe (ex.: Principal.java)
public class Principal {
    public static void main(String[] args) {
        // Criando objetos (instâncias) da classe Cachorro
        Cachorro dog1 = new Cachorro();
        dog1.nome = "Tobias";
        dog1.raca = "Poodle";
        dog1.idade = 3;

        Cachorro dog2 = new Cachorro();
        dog2.nome = "Rex";
        dog2.raca = "Pastor Alemão";
        dog2.idade = 5;

        // Cada objeto age de forma independente
        dog1.latir(); // Tobias diz: Au au!
        dog2.latir(); // Rex diz: Au au!
    }
}`,
      explicacao: 'A classe Cachorro define o molde com atributos (nome, raça, idade) e um método (latir). No main, criamos dois objetos independentes. Cada um possui sua própria cópia dos atributos e pode executar o método latir, exibindo seu próprio nome.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual das alternativas melhor define uma Classe em Java?',
      alternativas: [
        'Um valor armazenado na memória RAM durante a execução do programa',
        'Um molde ou gabarito que define os atributos e métodos que os objetos terão',
        'Uma função que realiza cálculos matemáticos'
      ],
      respostaCorreta: 1,
      explicacao: 'Uma classe é uma definição abstrata, um molde que especifica a estrutura (atributos) e o comportamento (métodos) que os objetos criados a partir dela terão. Ela não ocupa memória até que objetos sejam instanciados.'
    },
    {
      pergunta: 'O que significa "instanciar" uma classe?',
      alternativas: [
        'Apagar o código-fonte da classe do disco rígido',
        'Criar um objeto real na memória RAM a partir do molde da classe, usando o operador new',
        'Converter a classe em um tipo primitivo como int ou double'
      ],
      respostaCorreta: 1,
      explicacao: 'Instanciar é o ato de criar um objeto (instância) na memória, utilizando a palavra-chave new. A classe é a planta; o objeto é a casa construída que passa a ocupar espaço real na RAM.'
    }
  ]
};