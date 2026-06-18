// Arquivo: data/aulas/cap-02/sub-2-3.js
// Aula 2.3 – Atributos e Modificadores de Acesso

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-2-3'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Atributos e Modificadores de Acesso</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Nas aulas anteriores, aprendemos que uma classe é um molde e que objetos são instâncias criadas a partir desse molde. Agora, vamos mergulhar no conteúdo desses objetos: os <strong>atributos</strong> — as características que definem o estado de cada instância — e os <strong>modificadores de acesso</strong> — as palavras-chave que controlam quem pode ler ou alterar esses atributos.</p>
    <p class="lesson-text">Se um objeto é uma casa, os atributos são os móveis e os objetos dentro dela. Os modificadores de acesso são as fechaduras, as portas e os muros que decidem quem pode entrar, quem pode olhar e quem pode mexer. Dominar esse controle de visibilidade é o primeiro passo para construir sistemas robustos, seguros e profissionais.</p>

    <h3 class="section-title">1. O que são Atributos? (Variáveis de Instância)</h3>
    <p class="lesson-text">No código Java, os atributos são declarados dentro do corpo da classe, fora de qualquer método. Eles são chamados tecnicamente de <strong>variáveis de instância</strong> porque cada objeto (instância) criado com <code class="code-inline">new</code> recebe uma cópia independente dessas variáveis.</p>

    <div class="callout-analogy">
      <strong>Analogia:</strong> pense na ficha de cadastro de uma academia. O modelo em branco (a classe) tem os campos "Nome: ____", "Idade: ____" e "Peso: ____". Quando um novo aluno se matricula (objeto é instanciado), o sistema preenche uma cópia real desses campos com os dados daquela pessoa específica. Cada ficha é independente — alterar o peso do aluno A não muda o peso do aluno B.
    </div>

    <pre><code class="language-java">public class Carro {
    int velocidade;     // variável de instância
    String modelo;      // variável de instância
    boolean ligado;     // variável de instância
}</code></pre>

    <p class="lesson-text">Se você criar 30 objetos <code class="code-inline">Carro</code>, cada um terá sua própria gaveta <code class="code-inline">velocidade</code>. Frear o carro 1 altera apenas a variável de instância do carro 1 — as outras 29 permanecem intocadas. Esse isolamento é a base para simulações realistas, jogos e sistemas complexos.</p>

    <h3 class="section-title">2. Tipos de Dados para Atributos</h3>
    <p class="lesson-text">Ao declarar um atributo, você precisa informar ao Java que tipo de valor ele armazenará. Esses tipos se dividem em duas grandes famílias: os <strong>tipos primitivos</strong> (valores simples e leves) e os <strong>tipos objeto</strong> (estruturas complexas e inteligentes).</p>

    <h4 class="subsection-title">2.1 Tipos Primitivos — Os Blocos Básicos</h4>
    <p class="lesson-text">São os tipos nativos do Java, gravados diretamente na memória Stack (ou dentro do objeto na Heap) como valores puros. Não possuem métodos — são apenas dados brutos, extremamente rápidos e econômicos.</p>

    <ul class="topic-list space-y-2 mb-4">
      <li><strong><code class="code-inline">int</code> — Números inteiros:</strong> ideal para contagens, idades, quantidades. Exemplo: <code class="code-inline">int idade = 25;</code>. Ocupa 32 bits.</li>
      <li><strong><code class="code-inline">double</code> — Números decimais:</strong> para preços, pesos, alturas, médias. Exemplo: <code class="code-inline">double preco = 49.90;</code>. Ocupa 64 bits.</li>
      <li><strong><code class="code-inline">boolean</code> — Interruptor lógico:</strong> armazena apenas <code class="code-inline">true</code> ou <code class="code-inline">false</code>. Exemplo: <code class="code-inline">boolean motorLigado = false;</code>.</li>
    </ul>

    <h4 class="subsection-title">2.2 Tipos Objeto — Estruturas Inteligentes</h4>
    <p class="lesson-text">Diferente dos primitivos, variáveis de tipos objeto não guardam o valor diretamente — elas armazenam uma <strong>referência</strong> (um endereço) para o objeto real, que fica na Heap. É como guardar a chave do carro na gaveta em vez do carro em si.</p>

    <ul class="topic-list space-y-2 mb-4">
      <li><strong><code class="code-inline">String</code> — Texto inteligente:</strong> textos em Java são objetos da classe <code class="code-inline">String</code>. Diferente de um <code class="code-inline">int</code>, uma <code class="code-inline">String</code> possui métodos acoplados que você pode acionar com o ponto: <code class="code-inline">nome.toUpperCase()</code>, <code class="code-inline">nome.length()</code>.</li>
      <li><strong>Classes customizadas — Composição:</strong> você pode usar classes que você mesmo criou como tipos de atributos. Um <code class="code-inline">Carro</code> pode ter um atributo do tipo <code class="code-inline">Motor</code>, que por sua vez tem seus próprios atributos. Esse encaixe de objetos é chamado de <strong>composição</strong> e reflete exatamente como o mundo real funciona.</li>
    </ul>

    <pre><code class="language-java">public class Carro {
    int anoDeFabricacao;           // primitivo
    String numeroDoChassi;         // objeto (String)
    Proprietario donoDoCarro;      // objeto customizado
    Motor motorDoVeiculo;          // objeto customizado
}</code></pre>

    <h3 class="section-title">3. Modificadores de Acesso: <code class="code-inline">public</code> vs <code class="code-inline">private</code></h3>
    <p class="lesson-text">Os modificadores de acesso controlam a <strong>visibilidade</strong> dos atributos. Eles são posicionados antes do tipo do atributo e determinam quais partes do sistema podem acessá‑lo diretamente.</p>

    <h4 class="subsection-title">3.1 <code class="code-inline">public</code> — Acesso Total</h4>
    <p class="lesson-text">Um atributo declarado como <code class="code-inline">public</code> pode ser lido e modificado por <strong>qualquer classe</strong> do sistema, de qualquer arquivo. Basta ter uma referência ao objeto e usar o operador ponto.</p>

    <div class="callout-warning">
      <strong>Perigo:</strong> se um programador desavisado (ou você mesmo, meses depois) fizer <code class="code-inline">objeto.atributoPublico = valorAbsurdo;</code>, o Java aceitará silenciosamente, pois o valor é tecnicamente válido para o tipo da variável. O dado corrompido se espalhará pelo sistema, causando bugs difíceis de rastrear — o chamado <strong>efeito dominó</strong>.
    </div>

    <h4 class="subsection-title">3.2 <code class="code-inline">private</code> — Acesso Restrito</h4>
    <p class="lesson-text">Um atributo <code class="code-inline">private</code> <strong>só pode ser acessado dentro da própria classe</strong> onde foi declarado. Nenhuma classe externa — nem mesmo a <code class="code-inline">Principal</code> que contém o <code class="code-inline">main</code> — consegue ler ou alterar esse atributo diretamente.</p>
    <p class="lesson-text">Tentar acessar um atributo privado de fora resulta em <strong>erro de compilação</strong>: <em>"saldo has private access in ContaBancaria"</em>. O programa nem chega a executar — o compilador barra a invasão antes.</p>

    <div class="callout-warning">
      <strong>Exemplo de tentativa bloqueada:</strong>
      <pre><code class="language-java">ContaBancaria c = new ContaBancaria();
c.saldo = 500.00;   // ERRO! saldo é private</code></pre>
    </div>

    <p class="lesson-text"><strong>Como modificar atributos privados?</strong> A classe expõe <strong>métodos públicos</strong> que atuam como porteiros. Esses métodos validam os dados antes de alterar o atributo. Por exemplo:</p>

    <pre><code class="language-java">public class ContaBancaria {
    private double saldo;   // trancado

    public void depositar(double valor) {
        if (valor > 0) {
            this.saldo = this.saldo + valor;
        }
    }
}</code></pre>

    <p class="lesson-text">Agora, o código externo usa <code class="code-inline">conta.depositar(500.00);</code> em vez de mexer no saldo diretamente. O método age como um filtro, impedindo valores inválidos (como negativos) de corromper o estado do objeto.</p>

    <h3 class="section-title">4. Acesso Direto com o Operador Ponto (<code class="code-inline">objeto.atributo</code>)</h3>
    <p class="lesson-text">O operador ponto (<code class="code-inline">.</code>) é o canal de comunicação entre uma referência e os membros do objeto. Quando o atributo é público, o ponto funciona como uma porta aberta — a leitura e a escrita são imediatas. Quando o atributo é privado, o ponto encontra um muro intransponível e o compilador barra a operação.</p>

    <pre><code class="language-java">public class ContaGamers {
    public String apelido;          // acesso livre
    private int quantidadeDeGemas;  // acesso bloqueado

    public void adicionarGemas(int qtd) {
        if (qtd > 0) {
            this.quantidadeDeGemas += qtd;
        }
    }
}</code></pre>

    <p class="lesson-text"><strong>Cenário de desastre com <code class="code-inline">public</code>:</strong> se <code class="code-inline">quantidadeDeGemas</code> fosse público, alguém poderia escrever <code class="code-inline">jogador.quantidadeDeGemas = -999;</code>. O Java aceitaria, pois -999 é um <code class="code-inline">int</code> válido. Mas, para a lógica do jogo, gemas negativas são um absurdo — contas não fecham, relatórios quebram, e o bug se propaga silenciosamente.</p>
    <p class="lesson-text">Com o atributo privado e o método <code class="code-inline">adicionarGemas</code> como única porta de entrada, qualquer tentativa de passar valor negativo é barrada pelo <code class="code-inline">if (qtd > 0)</code>. O objeto protege a si mesmo — princípio que, no Capítulo 7, estudaremos formalmente como <strong>encapsulamento</strong>.</p>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Valores padrão:</strong> atributos não inicializados recebem valores padrão: <code class="code-inline">0</code> para tipos numéricos, <code class="code-inline">false</code> para <code class="code-inline">boolean</code> e <code class="code-inline">null</code> para referências. Esse comportamento difere das variáveis locais (dentro de métodos), que não recebem valor padrão e precisam ser inicializadas manualmente.</li>
      <li><strong>Modificadores e herança:</strong> o <code class="code-inline">private</code> bloqueia até mesmo subclasses. Existe um modificador intermediário, o <code class="code-inline">protected</code>, que permite acesso a classes do mesmo pacote e a subclasses — tópico que será aprofundado no Capítulo 8.</li>
      <li><strong>Encapsulamento como filosofia:</strong> tornar atributos privados e expor métodos públicos para acessá‑los é a base do encapsulamento. Essa prática reduz o acoplamento entre componentes e facilita a manutenção do código em equipes grandes.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Proteção de dados sensíveis:</strong> atributos como saldo bancário, senha ou CPF jamais devem ser públicos. O acesso controlado impede que valores inválidos ou inconsistentes entrem no sistema.</li>
      <li><strong>Validação de regras de negócio:</strong> ao usar métodos <code class="code-inline">set</code>, você pode validar se um e‑mail contém "@", se uma idade é positiva ou se um valor de saque não excede o saldo disponível.</li>
      <li><strong>Facilidade de manutenção:</strong> se a regra de validação mudar (ex.: idade mínima passou de 18 para 21), você altera apenas o método da classe, sem precisar caçar todas as linhas que atribuíam o valor diretamente.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Atributos definem o estado dos objetos e os modificadores de acesso protegem esse estado contra acessos indevidos. Enquanto <code class="code-inline">public</code> expõe os dados ao mundo, <code class="code-inline">private</code> os encapsula, forçando que qualquer manipulação passe por métodos controlados. Essa distinção é a base para sistemas seguros, organizados e fáceis de manter.</p>
    <p class="lesson-text">Na próxima aula, entraremos no mundo dos <strong>métodos</strong> — as ações que os objetos podem executar — e veremos como eles interagem com os atributos para dar vida às instâncias.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Classe com atributos públicos e privados',
      codigo: `// Arquivo: ContaGamers.java
public class ContaGamers {
    public String apelido;           // acesso livre
    private int quantidadeDeGemas;   // acesso restrito

    // Método público para alterar gemas com segurança
    public void adicionarGemas(int qtd) {
        if (qtd > 0) {
            this.quantidadeDeGemas += qtd;
            System.out.println("Gemas adicionadas: " + qtd);
        } else {
            System.out.println("Valor inválido!");
        }
    }

    public int getGemas() {
        return quantidadeDeGemas;
    }
}

// Arquivo: Principal.java
public class Principal {
    public static void main(String[] args) {
        ContaGamers jogador = new ContaGamers();

        jogador.apelido = "PlayerMatador";     // OK (public)
        System.out.println("Apelido: " + jogador.apelido);

        // jogador.quantidadeDeGemas = 5000;   // ERRO! (private)

        jogador.adicionarGemas(5000);          // OK (método público)
        System.out.println("Gemas atuais: " + jogador.getGemas());
    }
}`,
      explicacao: 'A classe ContaGamers tem um atributo público (apelido) e um privado (quantidadeDeGemas). O acesso direto ao atributo público é liberado; já o atributo privado só pode ser modificado pelo método adicionarGemas, que valida se o valor é positivo. O método getGemas permite a leitura controlada.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual a principal diferença entre um atributo declarado como public e um declarado como private?',
      alternativas: [
        'Atributos public são mais rápidos que private',
        'Atributos public podem ser acessados de qualquer classe, enquanto private só podem ser acessados dentro da própria classe',
        'Atributos private são automaticamente protegidos por senha'
      ],
      respostaCorreta: 1,
      explicacao: 'O modificador public permite acesso irrestrito de qualquer parte do sistema. O modificador private restringe o acesso ao escopo da própria classe, obrigando que qualquer manipulação externa seja feita por métodos públicos controlados.'
    },
    {
      pergunta: 'Qual dos seguintes é um tipo primitivo em Java?',
      alternativas: [
        'String',
        'Scanner',
        'boolean'
      ],
      respostaCorreta: 2,
      explicacao: 'boolean é um tipo primitivo (assim como int, double, char, etc.). String e Scanner são classes (tipos objeto), que armazenam referências para objetos na memória Heap.'
    },
    {
      pergunta: 'Por que é perigoso deixar atributos como public em um sistema grande?',
      alternativas: [
        'Porque o compilador rejeita atributos públicos em classes com mais de 100 linhas',
        'Porque qualquer parte do código pode alterá-los sem validação, causando corrupção de dados e efeito dominó',
        'Porque o operador ponto não funciona com atributos públicos'
      ],
      respostaCorreta: 1,
      explicacao: 'Atributos públicos permitem acesso direto e irrestrito. Um programador pode, acidentalmente, atribuir um valor inválido (ex.: saldo negativo, idade -5) que o Java aceitará, espalhando inconsistências pelo sistema.'
    }
  ]
};