// Arquivo: data/aulas/cap-02/sub-2-7.js
// Aula 2.7 – Imutabilidade e Pool de Strings

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-2-7'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Imutabilidade e Pool de Strings: A Engenharia da Memória em Java</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Quando escrevemos <code class="code-inline">String nome = "Maria";</code>, nossa intuição sugere que o computador simplesmente guarda as letras em uma caixinha. Por trás dessa linha, porém, opera uma das mais refinadas estratégias de gerenciamento de memória já criadas. A classe <code class="code-inline">String</code> não armazena textos como dados brutos: ela os trata como objetos imutáveis e os organiza em uma estrutura de reciclagem chamada <strong>String Pool</strong>. Compreender esses dois mecanismos — <strong>imutabilidade</strong> e <strong>pool de constantes</strong> — é o que separa o programador que apenas faz o código funcionar daquele que entende o custo real de cada objeto criado.</p>
    <p class="lesson-text">Nesta aula, abriremos a caixa‑preta da memória RAM e acompanharemos, passo a passo, o que acontece quando alteramos uma <code class="code-inline">String</code>. Depois, mergulharemos na piscina de Strings para entender como o Java economiza memória em escala planetária. Por fim, veremos por que a forma como você cria uma <code class="code-inline">String</code> — literal ou com <code class="code-inline">new</code> — impacta diretamente o desempenho e a lógica do programa.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de explorar a imutabilidade, é essencial recordar que <code class="code-inline">String</code> é uma <strong>classe</strong>, não um tipo primitivo. Uma variável como <code class="code-inline">String canal;</code> não armazena os caracteres; ela armazena uma <strong>referência</strong> (endereço) para um objeto que reside na Heap. Essa distinção é a chave para entender por que textos não podem ser alterados no mesmo local e por que o Java pode compartilhá‑los com segurança.</p>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. O Conceito de Imutabilidade: Textos Escritos em Pedra</h4>
    <p class="lesson-text">No Java, uma <code class="code-inline">String</code> jamais pode ser modificada depois de criada. Ela é <strong>imutável</strong> — como uma inscrição em pedra, não como um quadro de giz.</p>

    <div class="callout-analogy">
      <strong>Analogia do escultor:</strong> A memória RAM é um vale de rochas. Quando você solicita <code class="code-inline">String canal = "Netflix";</code>, o Java não escreve com lápis; ele cinzela "Netflix" em uma rocha. Se em seguida você escreve <code class="code-inline">canal = "Disney";</code>, o cinzel <strong>não raspa</strong> a rocha anterior. O Java procura outra rocha vazia, entalha "Disney" e move a seta da variável <code class="code-inline">canal</code> para essa nova rocha. A rocha "Netflix" continua intacta — apenas deixa de ter uma etiqueta apontando para ela.
    </div>

    <p class="lesson-text"><strong>O objeto órfão e o Garbage Collector:</strong> A rocha "Netflix" torna‑se um <strong>objeto órfão</strong> (fantasma). O Garbage Collector, um faxineiro interno da JVM, eventualmente a remove e libera o espaço. Até lá, o texto permanece inalterável.</p>

    <p class="lesson-text"><strong>Por que o Java projeta a String assim?</strong></p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Segurança:</strong> Textos são usados para senhas, tokens e validações. Se fossem mutáveis, um código malicioso poderia alterar uma String já validada e comprometer o sistema. A imutabilidade blinda essas informações críticas.</li>
      <li><strong>Compartilhamento seguro:</strong> Como veremos a seguir, a imutabilidade permite que milhares de variáveis apontem para o mesmo objeto sem risco de uma alteração colateral. Se o texto pudesse mudar, compartilhar referências seria perigoso.</li>
    </ul>

    <h4 class="subsection-title">2. String Constant Pool: A Piscina de Textos Otimizada</h4>
    <p class="lesson-text">Criar objetos o tempo todo é caro. Para economizar memória, o Java mantém uma área especial chamada <strong>String Constant Pool</strong> — uma "piscina" que armazena literais de texto.</p>

    <p class="lesson-text"><strong>Funcionamento da piscina:</strong> Quando você cria uma String de forma literal (<code class="code-inline">String s = "Java";</code>), o Java não aloca um novo objeto imediatamente. Ele primeiro mergulha na piscina e pergunta: "Já existe 'Java' aqui?".</p>
    <ul class="topic-list space-y-2 mb-4">
      <li>Se <strong>não existe</strong>, o Java cria o objeto na piscina e retorna o endereço.</li>
      <li>Se <strong>já existe</strong>, o Java simplesmente devolve o endereço do objeto existente, sem criar nada novo.</li>
    </ul>

    <div class="callout-analogy">
      <strong>Analogia dos crachás compartilhados:</strong> Imagine uma conferência com 1.000 participantes, todos inscritos no workshop "Java". Em vez de imprimir 1.000 crachás idênticos, você imprime um único e todos apontam para ele. É exatamente assim que a piscina funciona: <code class="code-inline">String s1 = "Java";</code>, <code class="code-inline">String s2 = "Java";</code> e <code class="code-inline">String s3 = "Java";</code> resultam em <strong>um único objeto</strong> na memória. As três variáveis são apenas etiquetas diferentes apontando para o mesmo endereço.
    </div>

    <div class="callout-success">
      <strong>Economia em escala planetária:</strong> Em sistemas como Netflix ou Amazon, milhões de usuários têm o país "Brasil" ou o status "PAGO". Sem o Pool, cada ocorrência seria um novo objeto, consumindo memória exponencialmente. Com o Pool, uma única instância de cada texto atende a todos, independentemente do número de usuários.
    </div>

    <h4 class="subsection-title">3. Diferença de Criação: Literal vs. <code class="code-inline">new String()</code></h4>
    <p class="lesson-text">Existem duas formas de criar uma String, e a escolha afeta diretamente a memória.</p>

    <ul class="topic-list space-y-3 mb-4">
      <li>
        <strong>Forma 1 — Literal (padrão inteligente):</strong><br>
        <code class="code-inline">String texto1 = "Sucesso";</code><br>
        O Java consulta o Pool. Se "Sucesso" já existe, reutiliza o endereço. Caso contrário, cria uma única instância no Pool. <strong>Essa é a forma recomendada em 100% dos casos.</strong>
      </li>
      <li>
        <strong>Forma 2 — Com <code class="code-inline">new</code> (forçação de barra):</strong><br>
        <code class="code-inline">String texto2 = new String("Sucesso");</code><br>
        A palavra <code class="code-inline">new</code> ignora o Pool e força a criação de um objeto novo na Heap, fora da piscina, mesmo que "Sucesso" já exista. Isso gasta memória desnecessariamente e não traz vantagem prática. É considerada <strong>má prática</strong>.
      </li>
    </ul>

    <div class="callout-warning">
      <strong>Impacto no operador <code class="code-inline">==</code>:</strong><br>
      Como <code class="code-inline">==</code> compara endereços de memória, a forma de criação altera o resultado:<br>
      • Duas literais idênticas (<code class="code-inline">s1 == s2</code>) → <strong>true</strong> (ambas apontam para o mesmo objeto no Pool).<br>
      • Uma literal e uma com <code class="code-inline">new</code> (<code class="code-inline">s3 == s4</code>) → <strong>false</strong> (objetos em locais diferentes, mesmo que o conteúdo seja idêntico).<br>
      Esse comportamento imprevisível reforça a regra de ouro: <strong>nunca use <code class="code-inline">==</code> para comparar conteúdo de Strings; use sempre <code class="code-inline">.equals()</code></strong>.
    </div>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>O Pool na JVM:</strong> O String Constant Pool reside em uma área especial da Heap chamada <em>Metaspace</em> (a partir do Java 8). Ele armazena literais e Strings internadas (via <code class="code-inline">String.intern()</code>).</li>
      <li><strong>Interning manual:</strong> O método <code class="code-inline">intern()</code> permite que uma String criada com <code class="code-inline">new</code> seja movida para o Pool manualmente, mas raramente é necessário.</li>
      <li><strong>Strings geradas em tempo de execução:</strong> Concatenações com variáveis (<code class="code-inline">"a" + b</code>) geralmente produzem novos objetos fora do Pool, a menos que os operandos sejam constantes conhecidas em tempo de compilação.</li>
      <li><strong>Imutabilidade e concorrência:</strong> A imutabilidade torna <code class="code-inline">String</code> automaticamente thread‑safe, pois nenhuma thread pode modificar o conteúdo.</li>
      <li><strong>Custo do <code class="code-inline">new String()</code>:</strong> Além de ignorar o Pool, o construtor cria uma cópia do array de caracteres interno, duplicando o consumo de memória.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Comparação segura:</strong> Saber que o Pool existe elimina qualquer tentação de usar <code class="code-inline">==</code> para comparar textos; o <code class="code-inline">.equals()</code> é obrigatório.</li>
      <li><strong>Otimização de APIs:</strong> Frameworks como Spring e Hibernate se beneficiam do Pool, pois manipulam milhares de Strings repetidas (nomes de colunas, status HTTP, etc.).</li>
      <li><strong>Senhas e segurança:</strong> Como <code class="code-inline">String</code> é imutável, senhas permanecem inalteradas, mas ainda assim recomenda‑se usar <code class="code-inline">char[]</code> para dados sensíveis, pois arrays podem ser sobrescritos.</li>
      <li><strong>Design de sistemas:</strong> Ao modelar estados constantes (ex.: "ATIVO", "INATIVO"), você pode confiar que o Java reutilizará as instâncias, economizando recursos.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">A imutabilidade garante que toda <code class="code-inline">String</code> seja um monumento confiável na memória, protegido contra alterações acidentais ou maliciosas. O String Constant Pool transforma essa característica em uma poderosa estratégia de reciclagem, fazendo com que palavras repetidas ocupem espaço uma única vez. A diferença entre criar por literal e por <code class="code-inline">new</code> é o termômetro de maturidade: usar literais é o padrão profissional; usar <code class="code-inline">new</code> é um desperdício que deve ser evitado.</p>
    <p class="lesson-text">Com esse conhecimento, você entende por que <code class="code-inline">.equals()</code> é inegociável e por que Java é a escolha de sistemas que precisam escalar sem desperdiçar memória — de servidores bancários a plataformas de streaming.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Demonstração da imutabilidade e do Pool de Strings',
      codigo: `public class ImutabilidadePool {
    public static void main(String[] args) {
        // Demonstração da imutabilidade
        String canal = "Netflix";
        System.out.println("Canal antes: " + canal);
        canal = "Disney";
        System.out.println("Canal depois: " + canal);
        // A String "Netflix" continua existindo como objeto órfão

        // Demonstração do Pool: literais compartilhadas
        String s1 = "Java";
        String s2 = "Java";
        String s3 = "Java";
        System.out.println("s1 == s2: " + (s1 == s2));   // true (mesmo objeto no Pool)
        System.out.println("s2 == s3: " + (s2 == s3));   // true

        // Criação com new: ignora o Pool
        String s4 = new String("Java");
        System.out.println("s1 == s4: " + (s1 == s4));   // false (objeto fora do Pool)

        // Comparação correta com equals
        System.out.println("s1.equals(s4): " + s1.equals(s4)); // true
    }
}`,
      explicacao: 'O programa demonstra a imutabilidade (a variável canal aponta para objetos diferentes) e o funcionamento do Pool (literais "Java" são reutilizadas). A comparação com new mostra que == falha, enquanto .equals() compara o conteúdo corretamente.'
    },
    {
      titulo: 'Impacto do new String() na memória',
      codigo: `public class NewStringWaste {
    public static void main(String[] args) {
        // Criando 5 objetos desnecessários com new
        String a = new String("Olá");
        String b = new String("Olá");
        String c = new String("Olá");
        String d = new String("Olá");
        String e = new String("Olá");

        // Todos são objetos diferentes na memória
        System.out.println("a == b: " + (a == b));   // false
        System.out.println("a.equals(b): " + a.equals(b)); // true

        // Forma correta: literal (5 variáveis, 1 objeto)
        String x = "Olá";
        String y = "Olá";
        String z = "Olá";
        System.out.println("x == y: " + (x == y));   // true (Pool!)
    }
}`,
      explicacao: 'O exemplo mostra o desperdício de memória ao usar new String(): cada chamada cria um objeto isolado. Já as literais "Olá" são reutilizadas do Pool, economizando recursos. A diferença entre == e equals fica evidente.'
    }
  ],

  exercicios: [
    {
      pergunta: 'O que significa dizer que uma String é imutável em Java?',
      alternativas: [
        'Que o texto pode ser alterado livremente a qualquer momento.',
        'Que uma vez criada, a String não pode ter seu conteúdo modificado.',
        'Que a String não pode ser apagada pelo Garbage Collector.'
      ],
      respostaCorreta: 1,
      explicacao: 'Imutável significa que o conteúdo do objeto String jamais pode ser alterado. Qualquer operação que pareça modificar o texto, na verdade cria um novo objeto String com o resultado.'
    },
    {
      pergunta: 'Qual é a função do String Constant Pool no Java?',
      alternativas: [
        'Apagar Strings não utilizadas para liberar memória.',
        'Armazenar e reutilizar literais de String, evitando a criação de objetos duplicados.',
        'Converter automaticamente Strings em números quando necessário.'
      ],
      respostaCorreta: 1,
      explicacao: 'O String Constant Pool é uma área especial da memória que armazena literais de String e as reutiliza. Se uma String literal já existe no Pool, o Java devolve o endereço existente em vez de criar um novo objeto.'
    },
    {
      pergunta: 'Qual é a diferença entre criar uma String com literal ("...") e com new String("...")?',
      alternativas: [
        'Não há diferença; ambas produzem o mesmo efeito.',
        'O literal utiliza o Pool e pode reutilizar objetos existentes; o new força a criação de um novo objeto fora do Pool.',
        'O new é mais rápido e deve ser preferido em todos os casos.'
      ],
      respostaCorreta: 1,
      explicacao: 'A criação literal consulta o Pool e reutiliza objetos, economizando memória. Já o new ignora o Pool e sempre aloca um novo objeto, mesmo que o texto já exista. Isso é considerado má prática.'
    },
    {
      pergunta: 'Por que o operador == pode retornar true para duas Strings literais idênticas?',
      alternativas: [
        'Porque o == compara o conteúdo das Strings.',
        'Porque ambas apontam para o mesmo objeto no String Constant Pool.',
        'Porque o Java converte automaticamente == em .equals() para Strings.'
      ],
      respostaCorreta: 1,
      explicacao: 'Como o Pool reutiliza objetos, duas literais iguais apontam para o mesmo endereço. O == compara endereços, portanto retorna true. Porém, não se deve confiar nisso; use sempre .equals() para comparar conteúdo.'
    }
  ]
};