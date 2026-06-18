// Arquivo: data/aulas/cap-05/sub-5-5.js
// Aula 5.5 – Sobrecarga de Métodos

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-5-5'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Sobrecarga de Métodos</h2>
    <p class="lesson-text text-slate-500 italic">Múltiplos métodos, mesmo nome — a arte de se adaptar aos dados recebidos</p>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Em linguagens de programação mais antigas, cada função precisava de um nome único e exclusivo. Se um sistema bancário tivesse três maneiras diferentes de pagar uma conta, o programador era obrigado a criar três nomes distintos — <code class="code-inline">pagarComCodigoDeBarras()</code>, <code class="code-inline">pagarComDigitaçãoManual()</code>, <code class="code-inline">pagarAgendado()</code>. Esse excesso de termos poluía o código e forçava os desenvolvedores a decorar dezenas de nomenclaturas artificiais para ações que, conceitualmente, eram a mesma coisa.</p>
    <p class="lesson-text">Os criadores do Java resolveram esse problema com a <strong>sobrecarga de métodos</strong> (method overloading): a capacidade de declarar vários métodos com <strong>exatamente o mesmo nome</strong> dentro de uma mesma classe, desde que suas <strong>assinaturas</strong> — a lista de parâmetros — sejam diferentes. O compilador, então, decide qual versão executar com base nos argumentos fornecidos no momento da chamada.</p>
    <p class="lesson-text">Nesta aula, vamos entender como a sobrecarga funciona, como o Java diferencia métodos gêmeos por meio da assinatura e como essa técnica confere flexibilidade e elegância ao design de software.</p>

    <h3 class="section-title">1. O Que é Sobrecarga: O Painel Inteligente</h3>
    <p class="lesson-text">A melhor forma de visualizar a sobrecarga é pensar em uma <strong>máquina de lavar roupas digital</strong>. No painel, há um único botão: <strong>"Lavar"</strong>. Você não encontra botões separados chamados "LavarRoupaDeAlgodão" ou "LavarEdredomPesado". A ação tem um só nome. Mas o comportamento interno da máquina muda radicalmente com base no que você coloca dentro do tambor:</p>

    <ul class="topic-list space-y-3 mb-4">
      <li><strong>Algodão:</strong> você joga cinco camisetas, o sensor detecta carga leve e executa um ciclo rápido com bastante água.</li>
      <li><strong>Edredom:</strong> você coloca uma peça volumosa, o sensor detecta peso bruto e ativa um ciclo de agitação lenta com força máxima.</li>
      <li><strong>Seda:</strong> você deposita um lenço frágil, o sensor percebe carga quase nula e inicia movimentos suaves e imersão delicada.</li>
    </ul>

    <p class="lesson-text">Para você, o operador, a ordem foi sempre a mesma: <strong>Lavar</strong>. Quem decidiu qual circuito ativar foi a própria máquina, analisando os <strong>ingredientes</strong> recebidos.</p>

    <div class="callout-analogy">
      <strong>Na programação Java:</strong> a classe é a máquina de lavar. O nome do método (<code class="code-inline">lavar</code>) é o botão único no painel. Os parâmetros são os sensores que analisam o tipo de roupa e decidem qual bloco de código executar.
    </div>

    <p class="lesson-text">Em código, essa inteligência se traduz assim:</p>
    <pre><code class="language-java">class MaquinaDeLavar {
    // Versão 1: camisetas de algodão
    void lavar(Camiseta algodao) {
        System.out.println("Ciclo rápido, muita água.");
    }

    // Versão 2: edredom pesado
    void lavar(Edredom pesado) {
        System.out.println("Agitação lenta, força máxima.");
    }

    // Versão 3: lenço de seda
    void lavar(Lenco seda) {
        System.out.println("Movimentos suaves, imersão delicada.");
    }
}</code></pre>

    <p class="lesson-text">Os três métodos compartilham o nome <code class="code-inline">lavar</code>, mas recebem tipos de objetos diferentes. Quando o programa chama <code class="code-inline">maquina.lavar(meuEdredom)</code>, o Java examina o argumento, identifica que é um <code class="code-inline">Edredom</code> e desvia o fluxo para a segunda versão — tudo em frações de milissegundo.</p>

    <h3 class="section-title">2. A Assinatura do Método: O Documento de Identidade</h3>
    <p class="lesson-text">Como o compilador consegue diferenciar métodos com nomes idênticos sem entrar em colapso? A resposta está na <strong>assinatura do método</strong> — a impressão digital que torna cada método único perante o sistema.</p>

    <div class="callout-warning">
      <strong>Erro comum:</strong> muitos acreditam que o Java diferencia métodos pelo modificador de acesso (<code class="code-inline">public</code>, <code class="code-inline">private</code>) ou pelo tipo de retorno (<code class="code-inline">int</code>, <code class="code-inline">void</code>, <code class="code-inline">double</code>). <strong>Isso é falso.</strong> Se você criar dois métodos com o mesmo nome e os mesmos parâmetros, mudando apenas o retorno, o compilador acusará erro de duplicidade.
    </div>

    <p class="lesson-text">Para o compilador, a assinatura de um método é composta exclusivamente por dois elementos:</p>
    <p class="lesson-text" style="text-align: center; font-size: 1.1rem;"><strong>Nome do Método + Lista de Parâmetros</strong></p>

    <p class="lesson-text">A lista de parâmetros, por sua vez, é analisada sob três critérios estritos e ordenados:</p>

    <h4 class="subsection-title">Critério 1: O Número de Argumentos</h4>
    <p class="lesson-text">O critério mais simples e visual: quantos elementos foram passados entre os parênteses, separados por vírgulas.</p>
    <pre><code class="language-java">void somar(int a, int b) { ... }      // assinatura: somar(int, int)
void somar(int a, int b, int c) { ... } // assinatura: somar(int, int, int)</code></pre>
    <p class="lesson-text">Se o programa chamar <code class="code-inline">somar(10, 20)</code>, o compilador conta dois argumentos e ativa a primeira versão. Com <code class="code-inline">somar(10, 20, 30)</code>, três argumentos, desvia para a segunda.</p>

    <h4 class="subsection-title">Critério 2: O Tipo dos Argumentos</h4>
    <p class="lesson-text">Nem sempre a quantidade muda. Dois métodos podem receber o mesmo número de parâmetros, mas de <strong>tipos</strong> diferentes.</p>
    <pre><code class="language-java">void alugarCarro(String nomeDoCliente) { ... } // assinatura: alugarCarro(String)
void alugarCarro(int codigoDoCliente) { ... }  // assinatura: alugarCarro(int)</code></pre>
    <p class="lesson-text">Se o usuário digitar <code class="code-inline">"Carlos"</code> (texto entre aspas), o Java identifica <code class="code-inline">String</code> e aciona o primeiro método. Se digitar <code class="code-inline">1542</code> (número puro), identifica <code class="code-inline">int</code> e aciona o segundo.</p>

    <h4 class="subsection-title">Critério 3: A Ordem dos Argumentos</h4>
    <p class="lesson-text">O critério mais sutil e puramente matemático. O Java analisa a <strong>fila indiana</strong> dos tipos, da esquerda para a direita.</p>
    <pre><code class="language-java">void configurar(int largura, String titulo) { ... } // configurar(int, String)
void configurar(String titulo, int largura) { ... } // configurar(String, int)</code></pre>
    <p class="lesson-text">Ambos têm o mesmo nome, a mesma quantidade (dois) e os mesmos tipos (<code class="code-inline">int</code> e <code class="code-inline">String</code>). Mas a <strong>ordem invertida</strong> gera duas assinaturas completamente distintas. Quando o programa chama <code class="code-inline">configurar(800, "Principal")</code>, o Java casa com a primeira versão; quando chama <code class="code-inline">configurar("Principal", 800)</code>, casa com a segunda.</p>

    <div class="callout-info">
      <strong>O compilador como inspetor de alfândega:</strong> ao encontrar uma chamada como <code class="code-inline">notificar("Erro", 404)</code>, o Java inspeciona os argumentos — primeiro uma <code class="code-inline">String</code>, depois um <code class="code-inline">int</code> — e procura na classe o método cuja assinatura seja <strong>exatamente</strong> <code class="code-inline">notificar(String, int)</code>. Se não encontrar correspondência exata, procura a <strong>mais próxima</strong> por meio de conversões automáticas (como <code class="code-inline">int</code> para <code class="code-inline">double</code>). Se nenhuma assinatura servir, gera erro de compilação.
    </div>

    <h3 class="section-title">3. Casos de Uso: Flexibilidade no Cotidiano</h3>
    <p class="lesson-text">A sobrecarga brilha em situações onde uma mesma operação pode ser realizada de diferentes maneiras. O exemplo clássico é o <strong>pagamento de contas</strong> em um aplicativo bancário:</p>

    <ul class="topic-list space-y-3 mb-4">
      <li><strong>Escaneamento por câmera:</strong> o usuário aponta a câmera para o código de barras. O aplicativo extrai uma linha de texto com dezenas de dígitos e chama <code class="code-inline">efetuarPagamento(String codigoDeBarras)</code>.</li>
      <li><strong>Digitação manual:</strong> o usuário digita o valor decimal e o número da agência. O aplicativo chama <code class="code-inline">efetuarPagamento(double valor, int agencia)</code>.</li>
      <li><strong>Agendamento futuro:</strong> o usuário informa valor, agência e uma data futura. O aplicativo chama <code class="code-inline">efetuarPagamento(double valor, int agencia, String data)</code>.</li>
    </ul>

    <p class="lesson-text">Para o programador da interface visual, a vida se torna muito mais simples: não importa qual caminho o cliente escolha, a ação invocada é sempre <strong><code class="code-inline">efetuarPagamento</code></strong>. A sobrecarga oculta a burocracia técnica e entrega uma interface limpa e padronizada.</p>

    <p class="lesson-text">Se amanhã o banco decidir aceitar pagamentos internacionais com o país de destino, basta criar uma quarta versão: <code class="code-inline">efetuarPagamento(double valor, String paisDestino)</code>. Nenhum dos métodos antigos precisa ser alterado — eles continuam operando sob suas respectivas assinaturas. A sobrecarga permite que o sistema cresça de forma orgânica, organizada e segura.</p>

    <h3 class="section-title">4. Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Resolução de sobrecarga (overload resolution):</strong> é o processo pelo qual o compilador escolhe qual método chamar. Ele segue uma hierarquia: (1) correspondência exata, (2) promoção de tipos primitivos (<code class="code-inline">int</code> → <code class="code-inline">long</code> → <code class="code-inline">double</code>), (3) autoboxing (<code class="code-inline">int</code> → <code class="code-inline">Integer</code>), (4) métodos com varargs.</li>
      <li><strong>Sobrecarga vs. sobrescrita:</strong> não confunda os termos. Sobrecarga (<em>overloading</em>) é ter métodos com o mesmo nome e parâmetros diferentes <strong>na mesma classe</strong>. Sobrescrita (<em>overriding</em>) é redefinir um método herdado <strong>com a mesma assinatura</strong> em uma subclasse — tópico que estudaremos nos capítulos de herança.</li>
      <li><strong>Construtores sobrecarregados:</strong> a sobrecarga não se limita a métodos comuns. Os construtores de uma classe também podem ser sobrecarregados, permitindo que um objeto seja inicializado de diferentes maneiras.</li>
      <li><strong>Varargs e ambiguidade:</strong> métodos com parâmetros variáveis (<code class="code-inline">int... numeros</code>) podem gerar ambiguidade com versões sobrecarregadas de aridade fixa. O compilador sempre prefere o método mais específico.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">A sobrecarga de métodos é uma das ferramentas mais elegantes do Java. Ao permitir que múltiplos métodos compartilhem o mesmo nome — diferenciados exclusivamente pela quantidade, tipo e ordem de seus parâmetros — ela aproxima o código da intuição humana: chamamos de "pagar" qualquer forma de pagamento, e o sistema se adapta automaticamente aos dados fornecidos. Compreender a assinatura do método como a verdadeira identidade de cada bloco é o segredo para dominar esse mecanismo e projetar sistemas flexíveis, legíveis e preparados para evoluir.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Sobrecarga com diferentes números de argumentos',
      codigo: `public class Calculadora {
    // Versão com 2 parâmetros
    public static int somar(int a, int b) {
        return a + b;
    }

    // Versão com 3 parâmetros (sobrecarga)
    public static int somar(int a, int b, int c) {
        return a + b + c;
    }

    // Versão com array de inteiros
    public static int somar(int... numeros) {
        int total = 0;
        for (int n : numeros) {
            total += n;
        }
        return total;
    }

    public static void main(String[] args) {
        System.out.println(somar(10, 20));       // 30 (versão 2 parâmetros)
        System.out.println(somar(10, 20, 30));   // 60 (versão 3 parâmetros)
        System.out.println(somar(1, 2, 3, 4, 5)); // 15 (varargs)
    }
}`,
      explicacao: 'A classe define três versões do método somar com assinaturas diferentes: (int, int), (int, int, int) e varargs. O compilador escolhe a versão correta com base no número de argumentos fornecidos na chamada.'
    },
    {
      titulo: 'Sobrecarga com diferentes tipos de argumentos',
      codigo: `public class Exibidor {
    public static void exibir(int numero) {
        System.out.println("Número inteiro: " + numero);
    }

    public static void exibir(double numero) {
        System.out.println("Número decimal: " + numero);
    }

    public static void exibir(String texto) {
        System.out.println("Texto: " + texto);
    }

    public static void exibir(boolean flag) {
        System.out.println("Booleano: " + flag);
    }

    public static void main(String[] args) {
        exibir(42);          // Número inteiro: 42
        exibir(3.14);        // Número decimal: 3.14
        exibir("Olá Java");  // Texto: Olá Java
        exibir(true);        // Booleano: true
    }
}`,
      explicacao: 'Quatro versões do método exibir, cada uma recebendo um tipo primitivo diferente (int, double, String, boolean). O compilador casa a chamada com a assinatura correspondente pelo tipo do argumento.'
    },
    {
      titulo: 'Construtores sobrecarregados',
      codigo: `public class Produto {
    private String nome;
    private double preco;
    private int quantidade;

    // Construtor padrão (sem parâmetros)
    public Produto() {
        this.nome = "Sem nome";
        this.preco = 0.0;
        this.quantidade = 0;
    }

    // Construtor com nome e preço
    public Produto(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = 0;
    }

    // Construtor completo (todos os campos)
    public Produto(String nome, double preco, int quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public void exibir() {
        System.out.println(nome + " | R$" + preco + " | Estoque: " + quantidade);
    }

    public static void main(String[] args) {
        Produto p1 = new Produto();                          // construtor padrão
        Produto p2 = new Produto("Caneta", 2.50);            // dois parâmetros
        Produto p3 = new Produto("Caderno", 15.90, 50);      // três parâmetros

        p1.exibir(); // Sem nome | R$0.0 | Estoque: 0
        p2.exibir(); // Caneta | R$2.5 | Estoque: 0
        p3.exibir(); // Caderno | R$15.9 | Estoque: 50
    }
}`,
      explicacao: 'Os construtores da classe Produto são sobrecarregados: um sem parâmetros, um com dois e um com três. Dependendo dos dados disponíveis no momento da criação, o programa escolhe a versão adequada. Isso oferece flexibilidade na inicialização de objetos.'
    }
  ],

  exercicios: [
    {
      pergunta: 'O que é sobrecarga de métodos (method overloading)?',
      alternativas: [
        'É a capacidade de um método chamar a si mesmo recursivamente.',
        'É a criação de vários métodos com o mesmo nome, mas com diferentes listas de parâmetros, na mesma classe.',
        'É a alteração do comportamento de um método herdado da superclasse.'
      ],
      respostaCorreta: 1,
      explicacao: 'Sobrecarga (overloading) permite múltiplos métodos com o mesmo nome na mesma classe, desde que suas assinaturas (número, tipo ou ordem dos parâmetros) sejam diferentes.'
    },
    {
      pergunta: 'Quais elementos compõem a assinatura de um método em Java?',
      alternativas: [
        'Nome do método e tipo de retorno.',
        'Modificador de acesso e lista de parâmetros.',
        'Nome do método e lista de parâmetros.'
      ],
      respostaCorreta: 2,
      explicacao: 'A assinatura é composta pelo nome do método + a lista de parâmetros (quantidade, tipos e ordem). O tipo de retorno e os modificadores de acesso não fazem parte da assinatura e não podem ser usados para diferenciar métodos sobrecarregados.'
    },
    {
      pergunta: 'Qual das opções abaixo constitui uma sobrecarga válida do método void enviar(String msg)?',
      alternativas: [
        'void enviar(String mensagem) — apenas mudando o nome do parâmetro.',
        'int enviar(String msg) — apenas mudando o tipo de retorno.',
        'void enviar(String msg, int prioridade) — adicionando um novo parâmetro.'
      ],
      respostaCorreta: 2,
      explicacao: 'Mudar apenas o nome do parâmetro ou apenas o tipo de retorno não altera a assinatura e gera erro de duplicidade. É preciso alterar a lista de parâmetros — no caso, adicionando um segundo argumento.'
    }
  ]
};