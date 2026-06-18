// Arquivo: data/aulas/cap-02/sub-2-5.js
// Aula 2.5 – Construtores e Sobrecarga

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-2-5'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Construtores e Sobrecarga: A Fábrica de Objetos em Java</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Em qualquer programa orientado a objetos, o primeiro momento da existência de um objeto – seu nascimento – define toda a sua trajetória. Um objeto mal inicializado pode gerar erros em cascata, corromper dados e comprometer a estabilidade do sistema. Para garantir que cada instância chegue ao mundo exatamente como planejado, o Java nos oferece uma ferramenta especial: o <strong>construtor</strong>.</p>
    <p class="lesson-text">O construtor é um bloco de código que é executado automaticamente no instante em que utilizamos a palavra‑chave <code class="code-inline">new</code>. Ele tem a missão exclusiva de preparar o objeto: definir seu estado inicial, validar informações obrigatórias e executar tarefas de configuração. Nesta aula, vamos explorar desde o construtor invisível que o Java nos dá de presente até a criação de múltiplas linhas de montagem para um mesmo objeto, passando pela palavra‑chave <code class="code-inline">this</code>, que evita confusões e mantém o código limpo. Ao final, você compreenderá como construir objetos sólidos, flexíveis e seguros.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de mergulharmos na mecânica dos construtores, precisamos relembrar o básico. Uma classe é um molde abstrato que define atributos (características) e métodos (comportamentos). Um objeto é uma instância concreta desse molde, alocada na memória. Quando criamos um objeto com <code class="code-inline">new</code>, o computador reserva espaço na Heap e precisa preencher cada atributo com algum valor. Se nada for feito, o Java aplica valores padrão: <code class="code-inline">0</code> para números, <code class="code-inline">false</code> para booleanos e <code class="code-inline">null</code> para referências.</p>
    <p class="lesson-text">Porém, confiar apenas nesses padrões pode ser perigoso. Imagine um sistema bancário onde uma conta nasce com saldo <code class="code-inline">0.0</code> e número <code class="code-inline">null</code> – o programa quebraria na primeira tentativa de consulta. É aí que entra o construtor: ele substitui esses valores automáticos por uma inicialização intencional, garantindo que o objeto nunca fique em um estado inconsistente.</p>
    <p class="lesson-text">Um construtor é, portanto, um método especial que:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Possui exatamente o mesmo nome da classe.</strong></li>
      <li><strong>Não declara tipo de retorno</strong> (nem mesmo <code class="code-inline">void</code>).</li>
      <li><strong>É invocado uma única vez</strong>, no momento da criação do objeto.</li>
    </ul>
    <p class="lesson-text">Agora que sabemos o que é um construtor, vamos explorar suas diferentes formas, começando pelo presente que o Java nos dá quando não escrevemos nada.</p>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. O Construtor Padrão (Default): O Assistente Invisível</h4>
    <p class="lesson-text">Se você criar uma classe e não definir nenhum construtor, o Java, durante a compilação, insere silenciosamente um construtor padrão – um bloco vazio, sem parâmetros, que não aparece no seu código‑fonte, mas que está lá para permitir a criação de objetos. É o chamado <strong>construtor default</strong>.</p>

    <div class="callout-info">
      <strong>Invisível, porém real:</strong> você digita <code class="code-inline">new MinhaClasse()</code> e o programa roda normalmente, mesmo sem você ter escrito um construtor. O compilador percebe a ausência e injeta um construtor público, sem argumentos, que não executa nenhuma instrução adicional.
    </div>

    <p class="lesson-text"><strong>Gratuito e sem exigências:</strong> essa cortesia do Java reduz o trabalho repetitivo, principalmente em classes simples que servem apenas para agrupar dados. Enquanto você não escrever seu próprio construtor, o default garante que objetos possam ser criados sem nenhuma informação prévia.</p>
    <p class="lesson-text"><strong>Zerador automático:</strong> internamente, o construtor padrão não faz "nada", mas o Java ainda aplica os valores padrão discutidos. Ou seja, após <code class="code-inline">new Carro()</code>, o atributo <code class="code-inline">ano</code> será <code class="code-inline">0</code>, <code class="code-inline">modelo</code> será <code class="code-inline">null</code> e <code class="code-inline">preco</code> será <code class="code-inline">0.0</code>. O objeto nasce com uma "ficha limpa", pronto para ser preenchido posteriormente.</p>

    <div class="callout-warning">
      <strong>A grande limitação:</strong> não há nenhuma validação. Para sistemas reais, essa liberdade total costuma ser insuficiente. É por isso que aprendemos a escrever nossos próprios construtores.
    </div>

    <h4 class="subsection-title">2. Construtores Customizados: Tomando as Rédeas da Criação</h4>
    <p class="lesson-text">A partir do momento em que você escreve um construtor dentro da classe, o Java cancela imediatamente o construtor padrão. Agora, só existem as regras que você definiu. Isso nos dá quatro poderes essenciais:</p>

    <ul class="topic-list space-y-3 mb-4">
      <li>
        <strong>Obrigatoriedade – exigindo dados essenciais:</strong><br>
        Você pode declarar que, para criar um objeto da classe <code class="code-inline">Aluno</code>, é obrigatório informar <code class="code-inline">nome</code> e <code class="code-inline">matricula</code>. Esses dados são recebidos como <strong>parâmetros</strong> do construtor:
        <pre><code class="language-java">public class Aluno {
    String nome;
    int matricula;

    public Aluno(String nome, int matricula) {
        this.nome = nome;
        this.matricula = matricula;
    }
}</code></pre>
        Agora, <code class="code-inline">new Aluno()</code> não compila; o programador é forçado a fornecer os dois valores: <code class="code-inline">new Aluno("Maria", 1010)</code>. Isso impede que objetos incompletos existam.
      </li>
      <li>
        <strong>Substituição do default:</strong><br>
        <span class="font-bold" style="color: #dc2626;">Regra de ouro:</span> se há pelo menos um construtor declarado, o default some. Se você quiser continuar permitindo a criação sem parâmetros, precisa escrever explicitamente um construtor vazio (sobrecarga, que veremos adiante).
      </li>
      <li>
        <strong>Proteção contra objetos quebrados:</strong><br>
        Imagine que, no construtor, você possa validar se a matrícula é positiva ou se o nome não está vazio. Se a validação falhar, você pode lançar uma exceção ou atribuir um valor padrão seguro. O construtor é o guardião do estado inicial.
      </li>
      <li>
        <strong>Controle total:</strong><br>
        Além de receber dados, o construtor pode executar qualquer lógica – abrir arquivos, conectar a bancos de dados, registrar logs. Tudo o que o objeto precisa para começar a funcionar pode ser concentrado nesse momento.
      </li>
    </ul>

    <h4 class="subsection-title">3. Sobrecarga de Construtores: Flexibilidade com Várias Linhas de Montagem</h4>
    <p class="lesson-text">Raramente um único formato de criação atende a todos os cenários. Às vezes, o programa possui todos os dados do cliente de uma só vez; outras, apenas uma parte. Em vez de forçar um único caminho, podemos oferecer <strong>múltiplos construtores</strong> na mesma classe – é a <strong>sobrecarga</strong> (overloading).</p>

    <ul class="topic-list space-y-3 mb-4">
      <li>
        <strong>Flexibilidade:</strong> você pode criar um construtor que recebe apenas o nome, outro que recebe nome e idade, e um terceiro que recebe todos os campos. A classe se adapta ao contexto de quem a utiliza, assim como uma montadora que vende o mesmo carro em versões básica, intermediária e completa.
      </li>
      <li>
        <strong>Mesmo nome, assinaturas diferentes:</strong> todos os construtores obrigatoriamente têm o nome da classe. O que os diferencia é a <strong>lista de parâmetros</strong> – a assinatura. A regra é que a assinatura deve ser única: diferença no número de parâmetros, nos seus tipos ou na ordem em que aparecem. Exemplos:
        <ul class="list-disc ml-6 mt-1 space-y-1">
          <li><code class="code-inline">Usuario(String nome)</code></li>
          <li><code class="code-inline">Usuario(String nome, int idade)</code></li>
          <li><code class="code-inline">Usuario(int idade, String nome)</code> (válido, mas incomum)</li>
        </ul>
      </li>
      <li>
        <strong>Resolução inteligente:</strong> na hora de usar <code class="code-inline">new</code>, o Java compara os argumentos fornecidos com as assinaturas disponíveis e escolhe a que mais se encaixa. Você não precisa de comandos especiais – o compilador faz o trabalho automaticamente. Se houver ambiguidade (dois construtores igualmente compatíveis), o código não compila.
      </li>
    </ul>

    <p class="lesson-text"><strong>Exemplo prático:</strong> considere a classe <code class="code-inline">Pedido</code> de um e‑commerce. Um pedido pode ser criado (1) apenas com o código do produto, (2) com código e quantidade, ou (3) com todos os detalhes incluindo o endereço de entrega. Cada construtor pode delegar tarefas a um construtor mais completo usando <code class="code-inline">this(...)</code>, um recurso avançado que veremos no Detalhamento Técnico.</p>

    <h4 class="subsection-title">4. A Palavra‑chave <code class="code-inline">this</code>: O Pronome do Objeto</h4>
    <p class="lesson-text">Dentro de um construtor (ou método), frequentemente usamos nomes de parâmetros idênticos aos atributos da classe. Se escrevêssemos simplesmente <code class="code-inline">nome = nome;</code>, o Java ficaria confuso: ambos se referem à variável local <code class="code-inline">nome</code>, e o atributo continuaria intocado. A solução é a palavra reservada <strong><code class="code-inline">this</code></strong>.</p>

    <div class="callout-analogy">
      <strong>Analogia:</strong> Imagine uma sala de reuniões com dois Carlos. Se o chefe gritar apenas "Carlos, pegue a pasta!", ambos hesitarão. Mas se ele apontar e disser "Carlos da contabilidade", a ambiguidade desaparece. <code class="code-inline">this</code> é esse "apontar de dedo" que identifica o atributo do objeto atual.
    </div>

    <p class="lesson-text"><strong>O que <code class="code-inline">this</code> significa:</strong> <code class="code-inline">this</code> é uma referência ao objeto atual – aquele que está sendo construído ou que está executando o código. Portanto, <code class="code-inline">this.nome</code> aponta para o atributo da classe, enquanto <code class="code-inline">nome</code> (sem <code class="code-inline">this</code>) refere‑se ao parâmetro ou variável local mais próximo.</p>

    <pre><code class="language-java">public Produto(String nome, double preco) {
    this.nome = nome;
    this.preco = preco;
}</code></pre>
    <p class="lesson-text">Isso diz: "pegue o valor do parâmetro <code class="code-inline">nome</code> e guarde no atributo <code class="code-inline">nome</code> deste objeto". A regra é simples e se tornou padrão na indústria.</p>

    <p class="lesson-text"><strong>Por que usar sempre <code class="code-inline">this</code>?</strong> Além de desambiguar, <code class="code-inline">this</code> torna o código explícito e autoexplicativo. Você pode, inclusive, usá‑lo mesmo quando não há conflito de nomes, para reforçar que se trata de um membro da instância. Em projetos grandes, essa clareza reduz erros.</p>
    <p class="lesson-text"><strong>Outro uso:</strong> é possível invocar um construtor a partir de outro usando <code class="code-inline">this(argumentos)</code>. Essa chamada deve ser a primeira instrução do construtor e é uma forma elegante de reutilizar lógica de inicialização. (Veremos mais no Detalhamento Técnico.)</p>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <p class="lesson-text">Para dominar construtores, alguns aspectos internos merecem atenção:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Geração do construtor default:</strong> o compilador <code class="code-inline">javac</code> só insere o construtor padrão se a classe não declarar nenhum construtor. Se a classe for abstrata, o construtor default é <code class="code-inline">protected</code>. Caso contrário, é <code class="code-inline">public</code>. Esse construtor simplesmente invoca o construtor da superclasse (<code class="code-inline">super()</code>) – por isso, mesmo que você não veja, a herança é inicializada corretamente.</li>
      <li><strong>Assinatura e resolução de sobrecarga:</strong> ao encontrar um <code class="code-inline">new</code>, o compilador procura o construtor cuja lista de parâmetros seja compatível com os argumentos fornecidos. A compatibilidade considera:
        <ul class="list-disc ml-6 mt-1 space-y-1">
          <li>Número exato de argumentos (ou argumentos variáveis, com varargs).</li>
          <li>Tipos dos argumentos: promoções (ex.: <code class="code-inline">int</code> para <code class="code-inline">double</code>) e autoboxing (ex.: <code class="code-inline">int</code> para <code class="code-inline">Integer</code>) podem ocorrer, mas se houver mais de uma opção igualmente aplicável, a compilação falha por ambiguidade.</li>
          <li>A busca sempre escolhe o construtor mais específico.</li>
        </ul>
      </li>
      <li><strong>Modificadores de acesso:</strong> construtores podem ser <code class="code-inline">public</code>, <code class="code-inline">protected</code>, privados (<code class="code-inline">private</code>) ou com acesso de pacote (padrão). Um construtor privado, por exemplo, impede a criação externa de objetos – útil em padrões como Singleton ou classes utilitárias.</li>
      <li><strong>Encadeamento de construtores com <code class="code-inline">this</code> e <code class="code-inline">super</code>:</strong> dentro de um construtor, é possível invocar outro construtor da mesma classe com <code class="code-inline">this(...)</code>, ou da superclasse com <code class="code-inline">super(...)</code>. Essas chamadas devem ser obrigatoriamente a primeira instrução do construtor. Esse mecanismo permite centralizar a lógica de inicialização e evitar duplicação de código.</li>
      <li><strong><code class="code-inline">this</code> como valor de retorno:</strong> <code class="code-inline">this</code> é uma referência, portanto pode ser retornado por métodos, possibilitando interfaces fluentes (method chaining). No contexto de construtores, porém, seu uso primário é a distinção de escopos e o encadeamento.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Objetos imutáveis:</strong> classes que representam valores (como <code class="code-inline">Dinheiro</code>, <code class="code-inline">CPF</code>, <code class="code-inline">Data</code>) podem ter todos os campos <code class="code-inline">private final</code> e ser inicializados exclusivamente via construtor. Uma vez criados, não podem ser alterados, garantindo segurança em ambientes concorrentes.</li>
      <li><strong>Injeção de dependências:</strong> frameworks como Spring usam construtores para injetar dependências obrigatórias, tornando explícitos os requisitos de um componente.</li>
      <li><strong>Fábricas e builders:</strong> a combinação de construtores privados com métodos de fábrica estáticos permite controlar a criação de objetos de forma centralizada, aplicando caches, pools ou validações complexas.</li>
      <li><strong>Modelagem de negócio:</strong> em sistemas bancários, a classe <code class="code-inline">ContaBancaria</code> pode ter construtores que exigem número da conta e CPF, enquanto <code class="code-inline">ContaPoupanca</code> pode adicionar a taxa de rendimento no seu construtor, reutilizando a inicialização da classe base via <code class="code-inline">super(...)</code>.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Construtores são muito mais do que simples inicializadores – eles representam o contrato de criação de um objeto. O construtor padrão oferece uma porta aberta e descomplicada para os primeiros passos; os construtores customizados blindam o sistema contra dados inválidos; a sobrecarga proporciona a flexibilidade que o mundo real exige; e a palavra‑chave <code class="code-inline">this</code> mantém o código claro e inequívoco.</p>
    <p class="lesson-text">Ao escrever seus próximos projetos, encare cada <code class="code-inline">new</code> como uma oportunidade de garantir que cada objeto nasça saudável, completo e pronto para cumprir seu papel. Com as técnicas aprendidas nesta aula, você agora tem o controle total sobre a linha de montagem dos seus objetos.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Exemplo completo: sobrecarga de construtores e uso do this',
      codigo: `// Classe Carro com três construtores sobrecarregados
public class Carro {
    private String modelo;
    private int ano;
    private boolean ligado;

    // Construtor 1: sem parâmetros (simula o default, explicitamente)
    public Carro() {
        this.modelo = "Indefinido";
        this.ano = 2026;
        this.ligado = false;
        System.out.println("Carro criado com valores padrão.");
    }

    // Construtor 2: recebe apenas modelo
    public Carro(String modelo) {
        this.modelo = modelo;
        this.ano = 2026;          // ano fixo se não informado
        this.ligado = false;
    }

    // Construtor 3: recebe modelo e ano
    public Carro(String modelo, int ano) {
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false;
        // Validação extra
        if (ano < 1886) {
            this.ano = 2026;
            System.out.println("Ano inválido, ajustado para 2026.");
        }
    }

    public void exibirInfo() {
        System.out.println("Modelo: " + modelo + " | Ano: " + ano + " | Ligado: " + ligado);
    }
}

// Classe de teste
public class Concessionaria {
    public static void main(String[] args) {
        Carro c1 = new Carro();                      // usa construtor 1
        Carro c2 = new Carro("Fusca");               // usa construtor 2
        Carro c3 = new Carro("Civic", 2025);         // usa construtor 3
        Carro c4 = new Carro("Modelo T", 1908);      // ano inválido? É validado!

        c1.exibirInfo();
        c2.exibirInfo();
        c3.exibirInfo();
        c4.exibirInfo();
    }
}`,
      explicacao: 'A classe Carro demonstra três construtores sobrecarregados. O primeiro não recebe parâmetros (como um default manual), o segundo exige apenas o modelo, e o terceiro exige modelo e ano, com validação. O uso do this diferencia atributos de parâmetros. A classe de teste cria quatro carros, cada um pelo construtor mais adequado aos argumentos fornecidos.'
    },
    {
      titulo: 'Encadeamento de construtores com this(...)',
      codigo: `public class Produto {
    private String nome;
    private double preco;
    private int quantidade;

    // Construtor mais completo
    public Produto(String nome, double preco, int quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    // Construtor com nome e preço – quantidade fica como 0
    public Produto(String nome, double preco) {
        this(nome, preco, 0);   // chama o construtor de 3 parâmetros
    }

    // Construtor apenas com nome – preço zero e quantidade zero
    public Produto(String nome) {
        this(nome, 0.0, 0);     // também delega ao construtor completo
    }

    public void exibir() {
        System.out.printf("Produto: %s | Preço: R$ %.2f | Quantidade: %d%n",
                          nome, preco, quantidade);
    }
}

// Uso no main
Produto p1 = new Produto("Caneta");
Produto p2 = new Produto("Caderno", 29.90);
Produto p3 = new Produto("Mochila", 149.90, 10);

p1.exibir();
p2.exibir();
p3.exibir();`,
      explicacao: 'Aqui a classe Produto usa encadeamento de construtores. O construtor de 3 parâmetros concentra toda a lógica de inicialização; os demais invocam-no por meio de this(...), passando valores padrão para os parâmetros ausentes. Isso evita duplicação de código e garante consistência.'
    }
  ],

  exercicios: [
    {
      pergunta: 'O que acontece com o construtor padrão (default) quando você define um construtor customizado na classe?',
      alternativas: [
        'Ele continua existindo, mas fica oculto.',
        'Ele é automaticamente removido e deixa de estar disponível.',
        'Ele se transforma em um método comum.'
      ],
      respostaCorreta: 1,
      explicacao: 'Se a classe possui pelo menos um construtor explicitamente declarado, o Java não insere o construtor padrão. A partir desse momento, new MinhaClasse() só funcionará se você mesmo tiver escrito um construtor sem parâmetros.'
    },
    {
      pergunta: 'Qual é a principal função da palavra-chave this dentro de um construtor?',
      alternativas: [
        'Aumentar a velocidade de execução do código.',
        'Referenciar o atributo da classe quando há um parâmetro com o mesmo nome.',
        'Chamar automaticamente o garbage collector.'
      ],
      respostaCorreta: 1,
      explicacao: 'this é uma referência ao objeto atual. Em construtores, seu uso mais comum é desambiguar atributos e parâmetros: this.nome = nome; garante que o valor do parâmetro seja atribuído ao atributo da instância.'
    },
    {
      pergunta: 'O que diferencia dois construtores sobrecarregados em uma mesma classe?',
      alternativas: [
        'O nome do construtor, que pode ser alterado livremente.',
        'A lista de parâmetros (número, tipo ou ordem).',
        'A presença ou ausência da palavra return.'
      ],
      respostaCorreta: 1,
      explicacao: 'Construtores sobrecarregados possuem o mesmo nome (obrigatoriamente o nome da classe), mas precisam ter assinaturas diferentes: número de parâmetros, tipos ou ordem. O compilador usa essa diferença para decidir qual construtor invocar.'
    }
  ]
};