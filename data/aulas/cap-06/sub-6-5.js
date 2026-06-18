// Arquivo: data/aulas/cap-06/sub-6-5.js
// Aula 6.5 – Introdução à Classe ArrayList

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-6-5'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">ArrayList: A Lista Elástica e Inteligente do Java</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Depois de dominar os arrays tradicionais — com seu tamanho fixo e imutável —, chegou a hora de conhecer a estrutura que resolve a maior limitação daquele modelo: a <strong>rigidez</strong>. Imagine um feed de rede social que precisa crescer conforme novas postagens surgem, ou um carrinho de compras que não sabe se o cliente vai comprar 1 ou 20 itens. Usar arrays fixos nesses cenários seria um desastre.</p>
    <p class="lesson-text">O <strong>ArrayList</strong> é a resposta do Java para essa necessidade. Ele é uma lista <strong>dinâmica e elástica</strong>: expande-se automaticamente quando novos elementos chegam e contrai-se quando eles saem, tudo isso gerenciado nos bastidores, sem que você precise controlar o tamanho manualmente. Nesta aula, vamos entender seu conceito, aprender a importá‑lo, aplicar os <strong>Generics</strong> para segurança e usar as <strong>Wrapper Classes</strong> para contornar a proibição de tipos primitivos.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de construir nosso primeiro ArrayList, precisamos alinhar três ideias que o diferenciam dos arrays comuns:</p>

    <ul class="topic-list mb-4">
      <li><strong>Elasticidade:</strong> o ArrayList gerencia seu tamanho automaticamente. Não é preciso prever quantos elementos virão; ele cresce e encolhe conforme a demanda.</li>
      <li><strong>Pertencimento à API Collections:</strong> ele faz parte de um ecossistema de classes projetadas para manipular coleções de dados com alta performance e padronização.</li>
      <li><strong>Armazenamento de objetos:</strong> diferentemente dos arrays, o ArrayList só guarda <strong>objetos</strong>, não tipos primitivos. Veremos como resolver isso com as Wrapper Classes.</li>
    </ul>

    <div class="callout-analogy">
      <strong>Analogia do armário elástico:</strong> troque o armário de madeira (array) por um <strong>armário inflável modular</strong>. Ele começa compacto. Quando você coloca uma ferramenta, uma gaveta se forma ao redor dela. Se colocar mais 10, o móvel se expande sozinho. Se remover 5, ele se contrai e libera espaço na parede. Tudo automático.
    </div>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. O Conceito de ArrayList: elasticidade e o truque interno</h4>
    <p class="lesson-text">Embora pareça mágica, a elasticidade do ArrayList é uma ilusão bem arquitetada. A memória RAM continua sendo aquele "estacionamento rígido" de vagas contíguas. O segredo está no <strong>array interno oculto</strong> que o ArrayList gerencia.</p>
    <p class="lesson-text">Ao criar um ArrayList, o Java constrói um array tradicional com capacidade inicial (geralmente 10 posições). Enquanto houver espaço, os elementos são armazenados ali. Quando o limite é atingido e um novo elemento tenta entrar, o ArrayList:</p>
    <ol class="list-decimal ml-6 mt-2 space-y-1 mb-4">
      <li>Cria um novo array maior (tipicamente 50% maior).</li>
      <li>Copia todos os elementos do array antigo para o novo.</li>
      <li>Descarta o array antigo (que será limpo pelo Garbage Collector).</li>
      <li>Insere o novo elemento no array expandido.</li>
    </ol>
    <p class="lesson-text">Todo esse processo — busca de terreno, reconstrução e transferência — é <strong>invisível</strong> para você. Seu código apenas chama <code class="code-inline">add()</code> e a lista parece se expandir magicamente.</p>

    <h4 class="subsection-title">2. O Pacote <code class="code-inline">java.util.ArrayList</code> e a Importação</h4>
    <p class="lesson-text">O ArrayList não está disponível por padrão; ele reside no pacote <code class="code-inline">java.util</code>, o almoxarifado de utilitários do Java. Para usá‑lo, você precisa importá‑lo no topo do arquivo:</p>
    <pre><code class="language-java">import java.util.ArrayList;</code></pre>
    <p class="lesson-text">Uma vez importado, o ArrayList oferece vantagens decisivas sobre arrays comuns:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Gerenciamento automático de tamanho:</strong> nunca mais um <em>ArrayIndexOutOfBoundsException</em> por inserir além do limite.</li>
      <li><strong>Métodos utilitários nativos:</strong> adicionar, remover e buscar elementos com uma única linha (veremos na próxima aula).</li>
      <li><strong>Integração moderna:</strong> funciona nativamente com bancos de dados, APIs web e frameworks como Spring.</li>
    </ul>

    <h4 class="subsection-title">3. Generics: o molde de segurança com sintaxe <code class="code-inline">&lt;T&gt;</code></h4>
    <p class="lesson-text">Nas primeiras versões do Java, o ArrayList aceitava qualquer tipo de dado misturado (texto, número, data) na mesma lista. Isso gerava erros catastróficos quando, por exemplo, o código tentava somar um número com um texto.</p>
    <p class="lesson-text">Para devolver a <strong>homogeneidade</strong> às coleções, o Java introduziu os <strong>Generics</strong> (tipos genéricos), cujo símbolo máximo é o par de sinais <code class="code-inline">&lt; &gt;</code> — os famosos "diamantes". Dentro deles, você especifica o <strong>tipo</strong> que a lista deve armazenar:</p>
    <pre><code class="language-java">ArrayList&lt;String&gt; nomes = new ArrayList&lt;&gt;();</code></pre>
    <p class="lesson-text">A partir dessa declaração, o compilador ativa um escudo de proteção: qualquer tentativa de inserir um número, um booleano ou outro tipo que não seja <code class="code-inline">String</code> será <strong>barrada em tempo de compilação</strong>. O erro é capturado na sua mesa, não na mão do cliente.</p>

    <div class="callout-info">
      <strong>Nota sobre a sintaxe:</strong> a partir do Java 7, o segundo par de diamantes pode ficar vazio (<code class="code-inline">new ArrayList&lt;&gt;()</code>), pois o compilador <strong>infere</strong> o tipo pelo lado esquerdo da atribuição. É o chamado <em>diamond operator</em>.
    </div>

    <h4 class="subsection-title">4. Wrapper Classes: a ponte para tipos primitivos</h4>
    <p class="lesson-text">A API Collections tem uma regra severa: <strong>ArrayList só armazena objetos</strong>, jamais tipos primitivos (<code class="code-inline">int</code>, <code class="code-inline">double</code>, <code class="code-inline">char</code>, <code class="code-inline">boolean</code>). Tentar criar <code class="code-inline">ArrayList&lt;int&gt;</code> gera erro de compilação.</p>
    <p class="lesson-text">Para contornar essa limitação, o Java fornece as <strong>Wrapper Classes</strong> (classes empacotadoras), versões "de luxo" de cada tipo primitivo, escritas com inicial maiúscula:</p>

    <div class="overflow-x-auto mb-4">
      <table class="table-didatic">
        <thead>
          <tr>
            <th>Tipo primitivo</th>
            <th>Wrapper Class</th>
            <th>Exemplo de declaração</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code class="code-inline">int</code></td><td><code class="code-inline">Integer</code></td><td><code class="code-inline">ArrayList&lt;Integer&gt;</code></td></tr>
          <tr><td><code class="code-inline">double</code></td><td><code class="code-inline">Double</code></td><td><code class="code-inline">ArrayList&lt;Double&gt;</code></td></tr>
          <tr><td><code class="code-inline">char</code></td><td><code class="code-inline">Character</code></td><td><code class="code-inline">ArrayList&lt;Character&gt;</code></td></tr>
          <tr><td><code class="code-inline">boolean</code></td><td><code class="code-inline">Boolean</code></td><td><code class="code-inline">ArrayList&lt;Boolean&gt;</code></td></tr>
        </tbody>
      </table>
    </div>

    <p class="lesson-text"><strong>Autoboxing e Unboxing:</strong> o Java moderno faz a conversão automaticamente. Quando você escreve <code class="code-inline">idades.add(25)</code>, o compilador "embrulha" o <code class="code-inline">25</code> em um objeto <code class="code-inline">Integer</code> (autoboxing). Quando lê o valor de volta, extrai o número bruto (unboxing). Tudo transparente.</p>

    <div class="callout-success">
      <strong>Dica de ouro:</strong> sempre use Wrapper Classes nos diamantes do ArrayList para números e booleanos. O autoboxing cuida do resto, mantendo seu código limpo e seguro.
    </div>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Capacidade inicial:</strong> um ArrayList vazio começa com capacidade 10. Quando excedida, cresce 50% (capacidade passa a ser 15, depois 22, e assim por diante). Esse crescimento tem custo computacional, mas é esporádico.</li>
      <li><strong>Arrays internos e performance:</strong> acessar um elemento por índice é O(1). Adicionar no final é O(1) amortizado. Inserir ou remover no meio é O(n), pois exige deslocamento dos elementos.</li>
      <li><strong>Generics e type erasure:</strong> em tempo de execução, a informação do tipo genérico é apagada (type erasure). O compilador garante a segurança em tempo de compilação, mas a JVM trata todos os ArrayLists como listas de <code class="code-inline">Object</code>.</li>
      <li><strong>Wrapper Classes e imutabilidade:</strong> objetos Integer, Double, etc., são <strong>imutáveis</strong>. Operações como <code class="code-inline">valor + 1</code> criam um novo objeto.</li>
      <li><strong>ArrayList vs. Vector:</strong> ArrayList é não sincronizado (mais rápido em ambientes single‑thread). Vector é uma alternativa legada e sincronizada.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Carrinho de compras:</strong> adicionar e remover produtos dinamicamente conforme o cliente interage com a loja virtual.</li>
      <li><strong>Feed de notícias:</strong> carregar postagens sob demanda, expandindo a lista conforme o usuário rola a tela.</li>
      <li><strong>Cadastro de funcionários:</strong> manter uma lista de funcionários ativos, permitindo contratações e desligamentos sem redimensionar arrays manualmente.</li>
      <li><strong>Registro de logs:</strong> armazenar eventos do sistema em tempo real, sem saber antecipadamente quantos serão.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">O ArrayList é a evolução natural dos arrays tradicionais: uma estrutura <strong>dinâmica, segura e repleta de métodos prontos</strong>. Entendemos que ele usa um array interno oculto para simular elasticidade, que deve ser importado do pacote <code class="code-inline">java.util</code>, que os Generics (<code class="code-inline">&lt;T&gt;</code>) garantem a homogeneidade e que as Wrapper Classes são a ponte obrigatória para tipos primitivos.</p>
    <p class="lesson-text">Com esse conhecimento, você já pode criar listas flexíveis para qualquer cenário. Na próxima aula, exploraremos os métodos práticos do ArrayList — <code class="code-inline">add()</code>, <code class="code-inline">remove()</code> e <code class="code-inline">contains()</code> — que tornam a manipulação de dados mais produtiva do que nunca.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Criando um ArrayList de Strings e usando Generics',
      codigo: `import java.util.ArrayList;

public class ListaNomes {
    public static void main(String[] args) {
        // Declaração com Generics (diamante)
        ArrayList<String> nomes = new ArrayList<>();

        // Adicionando elementos
        nomes.add("Ana");
        nomes.add("Carlos");
        nomes.add("Beatriz");

        // Exibindo a lista com toString()
        System.out.println("Nomes: " + nomes);
    }
}`,
      explicacao: 'Cria um ArrayList de Strings, adiciona três nomes e imprime a lista. O Generics <String> impede a inserção de outros tipos.'
    },
    {
      titulo: 'ArrayList de inteiros usando Wrapper Integer e autoboxing',
      codigo: `import java.util.ArrayList;

public class ListaIdades {
    public static void main(String[] args) {
        // Uso da Wrapper Integer
        ArrayList<Integer> idades = new ArrayList<>();

        // Autoboxing: int -> Integer automático
        idades.add(25);
        idades.add(30);
        idades.add(22);

        // Unboxing: Integer -> int automático
        int primeiraIdade = idades.get(0);
        System.out.println("Primeira idade: " + primeiraIdade);

        // Exibindo toda a lista
        System.out.println("Idades: " + idades);
    }
}`,
      explicacao: 'Demonstra o uso de Integer dentro do ArrayList. O autoboxing converte int em Integer na entrada, e o unboxing faz o inverso na saída.'
    },
    {
      titulo: 'Elasticidade do ArrayList na prática',
      codigo: `import java.util.ArrayList;

public class ElasticidadeArrayList {
    public static void main(String[] args) {
        ArrayList<String> tarefas = new ArrayList<>();

        System.out.println("Tamanho inicial: " + tarefas.size()); // 0

        tarefas.add("Estudar Java");
        tarefas.add("Fazer exercícios");
        tarefas.add("Revisar anotações");

        System.out.println("Após adições: " + tarefas.size());   // 3

        tarefas.remove(1); // Remove "Fazer exercícios"
        System.out.println("Após remoção: " + tarefas.size());   // 2

        System.out.println("Lista final: " + tarefas);
    }
}`,
      explicacao: 'A lista começa vazia, cresce com add() e encolhe com remove(). O método size() reflete o tamanho atual dinamicamente.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual é a principal diferença entre um array tradicional e um ArrayList em Java?',
      alternativas: [
        'Arrays são mais rápidos para todas as operações.',
        'Arrays têm tamanho fixo após a criação; ArrayList pode crescer e encolher dinamicamente.',
        'ArrayList só pode armazenar Strings, enquanto arrays podem armazenar qualquer tipo.'
      ],
      respostaCorreta: 1,
      explicacao: 'A diferença fundamental é que arrays são estáticos (tamanho fixo), enquanto ArrayList gerencia seu tamanho automaticamente.'
    },
    {
      pergunta: 'Por que usamos Generics (ex.: ArrayList&lt;String&gt;) ao declarar um ArrayList?',
      alternativas: [
        'Para tornar o código visualmente mais bonito.',
        'Para especificar o tipo de dado que a lista pode armazenar, garantindo segurança em tempo de compilação.',
        'Para fazer o ArrayList ocupar menos memória RAM.'
      ],
      respostaCorreta: 1,
      explicacao: 'Generics garantem que apenas elementos do tipo especificado entrem na lista, prevenindo erros de tipo em tempo de compilação.'
    },
    {
      pergunta: 'Qual é a Wrapper Class correspondente ao tipo primitivo double?',
      alternativas: [
        'Double',
        'Decimal',
        'Float'
      ],
      respostaCorreta: 0,
      explicacao: 'A Wrapper Class de double é Double (com D maiúsculo). As outras opções são classes diferentes ou inexistentes.'
    },
    {
      pergunta: 'O que é autoboxing em Java?',
      alternativas: [
        'Um erro que ocorre quando a lista está cheia.',
        'A conversão automática de um tipo primitivo para sua Wrapper Class correspondente.',
        'Um método para ordenar automaticamente os elementos do ArrayList.'
      ],
      respostaCorreta: 1,
      explicacao: 'Autoboxing é o processo automático de empacotar um tipo primitivo (ex.: int) em seu objeto correspondente (Integer) ao inseri‑lo em coleções.'
    }
  ]
};