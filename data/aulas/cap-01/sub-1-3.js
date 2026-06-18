// Arquivo: data/aulas/cap-01/sub-1-3.js
// Aula 1.3 – Primeiro Programa: Hello World Explicado

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-3'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Primeiro Programa: Hello World Explicado</h2>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Introdução</h3>
    <p class="mb-4">O programa "Hello World" é o ritual de iniciação em qualquer linguagem de programação. Em Java, por trás de suas poucas linhas, escondem-se os alicerces que sustentam todas as aplicações profissionais. Longe de ser um simples exercício decorativo, compreender cada palavra desse código é dominar a sintaxe fundamental, o modelo de execução e as boas práticas que o acompanharão por toda a sua jornada como desenvolvedor.</p>

    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</pre>

    <p class="mb-4">Este material foi desenhado para desmontar essa estrutura peça por peça. Vamos além de uma explicação superficial: você entenderá o <strong>porquê</strong> de cada termo, o <strong>como</strong> o computador processa suas instruções e o <strong>para que</strong> servem as regras aparentemente rígidas da linguagem. Ao final, o Hello World deixará de ser um mistério e se tornará uma ferramenta conceitual que você aplicará em qualquer programa futuro.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Fundamentos</h3>
    <p class="mb-4">Antes de abrir o código, precisamos alinhar três conceitos que formam a espinha dorsal do Java.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">1. Tudo é objeto (e toda ação vive dentro de uma classe)</h4>
    <p class="mb-4">Java é uma linguagem orientada a objetos. Isso significa que não existe código "solto" em um arquivo: cada função, cada variável, cada instrução deve pertencer a uma <strong>classe</strong>. Uma classe é um molde que define um conjunto de características (atributos) e comportamentos (métodos). Pense nela como a planta arquitetônica de uma construção – o programa real será erguido a partir dessa planta.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">2. O ponto de entrada é o método <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code></h4>
    <p class="mb-4">Um programa Java pode ter dezenas de classes, mas o motor de arranque é um método especial chamado <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code>. É a única porta que o sistema operacional conhece para iniciar a execução. Se você não definir exatamente <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">public static void main(String[] args)</code>, a máquina virtual Java (JVM) não saberá por onde começar e seu programa simplesmente não rodará.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">3. O código Java é compilado para bytecode</h4>
    <p class="mb-4">Você escreve texto (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">.java</code>), mas o computador não entende texto – ele só entende instruções de máquina específicas de cada processador. Para superar essa barreira, o Java usa um modelo de dois estágios: primeiro, o compilador <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">javac</code> converte seu código-fonte em um formato intermediário chamado <strong>bytecode</strong> (armazenado em arquivos <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">.class</code>). Depois, a JVM (comando <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">java</code>) lê esse bytecode e o executa, traduzindo-o em tempo real para o código nativo do sistema operacional. Esse mecanismo é o que permite a famosa promessa "escreva uma vez, rode em qualquer lugar".</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Desenvolvimento</h3>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">1. A Classe <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld</code> – O Recipiente Obrigatório</h4>
    <p class="mb-4">A primeira linha do código é:</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
public class HelloWorld {</pre>
    <p class="mb-4">Cada termo dessa declaração tem uma função específica e inegociável.</p>

    <ul class="list-disc ml-6 mb-4 space-y-3">
      <li>
        <strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">public</code> – O modificador de acesso:</strong>
        Define a visibilidade da classe. <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">public</code> significa que esta classe pode ser acessada por qualquer outro código do sistema, inclusive pela JVM. Sem essa palavra, a classe seria restrita ao seu pacote e a execução poderia ser bloqueada.<br>
        <em>Analogia:</em> Se a classe fosse um prédio comercial, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">public</code> seria a fachada envidraçada e a porta automática – qualquer pessoa (ou componente do sistema) pode entrar e utilizar seus serviços.
      </li>
      <li>
        <strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">class</code> – A palavra reservada que cria uma classe:</strong>
        Indica ao compilador que estamos definindo um novo tipo de estrutura. Nenhum código executável pode existir fora de uma classe em Java.<br>
        <em>Analogia:</em> É como carimbar na planta da prefeitura "Tipo de obra: Classe". Sem isso, o fiscal (compilador) não sabe se você está construindo um prédio, um parque ou um poste.
      </li>
      <li>
        <strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld</code> – O nome da classe:</strong>
        Seguimos a convenção <strong>PascalCase</strong>: primeira letra maiúscula, e para nomes compostos, a primeira letra de cada palavra também maiúscula (ex.: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">CalculadoraCientifica</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">ControleDeEstoque</code>).<br>
        <strong>Regra de ouro:</strong> O nome da classe pública deve ser <strong>exatamente</strong> igual ao nome do arquivo, inclusive letras maiúsculas e minúsculas (Java é <em>case-sensitive</em>). Se o código declara <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld</code>, o arquivo deve se chamar <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld.java</code>. Um arquivo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">helloworld.java</code> ou <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Hello_World.java</code> resultará em erro de compilação: <em>"class HelloWorld is public, should be declared in a file named HelloWorld.java"</em>.<br>
        <em>Analogia:</em> O nome da classe é a placa na fachada do prédio; o nome do arquivo é a escritura do terreno. Se não forem idênticos, a prefeitura (Java) embarga a obra.
      </li>
    </ul>

    <p class="mb-4">A chave <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">{</code> que segue a declaração abre o <strong>corpo da classe</strong> – o espaço onde todos os métodos e atributos residirão. Tudo que está entre essa chave e a chave de fechamento correspondente pertence à classe <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld</code>.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">2. O Método <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code> – O Coração do Programa</h4>
    <p class="mb-4">Dentro da classe, encontramos o bloco:</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
public static void main(String[] args) {</pre>
    <p class="mb-4">Essa linha é o <strong>ponto de entrada</strong> (entry point). Cada palavra desempenha um papel crucial para que a JVM consiga localizar e acionar o método corretamente.</p>

    <ul class="list-disc ml-6 mb-4 space-y-3">
      <li>
        <strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">public</code>:</strong>
        Assim como na classe, o método de início precisa ser acessível de fora. A JVM é um agente externo que chamará <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code> sem nenhum vínculo prévio com sua classe. Se o método fosse privado, a JVM bateria na porta e a encontraria trancada.
      </li>
      <li>
        <strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">static</code>:</strong>
        Em orientação a objetos, normalmente é preciso criar uma instância da classe (um objeto) para chamar seus métodos. O modificador <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">static</code> quebra essa regra: ele permite que o método seja invocado diretamente a partir da classe, sem a necessidade de construir um objeto antes. Isso é essencial porque, no momento da partida, nenhum objeto ainda existe. A JVM chama <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld.main(...)</code> como se o método estivesse disponível na própria "calçada", do lado de fora do prédio.<br>
        <em>Analogia:</em> É o botão de emergência instalado na parede externa da fábrica. Você não precisa entrar no prédio para acioná-lo.
      </li>
      <li>
        <strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">void</code>:</strong>
        Indica o tipo de retorno do método. <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">void</code> significa "vazio" ou "sem retorno". O método <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code> realiza suas tarefas (como imprimir uma mensagem) mas não devolve nenhum valor para quem o chamou.<br>
        <em>Analogia:</em> É como um interruptor de luz: você aperta, a luz acende, mas o interruptor não "entrega" nada de volta para sua mão. Apenas executa a ação e termina.
      </li>
      <li>
        <strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code>:</strong>
        É o nome do método. A especificação do Java determina que a JVM procurará exatamente por essa sequência de quatro letras minúsculas: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">m</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">a</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">i</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">n</code>. Qualquer variação – <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Main</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">MAIN</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">principal</code> – fará com que a JVM não encontre o ponto de entrada e o programa nem inicie.<br>
        <em>Analogia:</em> É a etiqueta do botão de ligar. O robô motorista foi treinado para ler "main" e nada mais.
      </li>
      <li>
        <strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">String[] args</code>:</strong>
        É a lista de parâmetros que o método recebe. <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">String[]</code> significa um array (coleção) de objetos do tipo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">String</code>, ou seja, uma sequência de textos. <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">args</code> é o nome simbólico desse array (abreviação de <em>arguments</em>).<br>
        Esse mecanismo permite que o programa receba informações diretamente da linha de comando no momento da execução. Por exemplo, ao digitar <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">java HelloWorld azul vermelho</code>, o array <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">args</code> conterá <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">["azul", "vermelho"]</code>.<br>
        Mesmo que você não utilize argumentos, a declaração é obrigatória – a JVM exige que o método <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code> tenha exatamente essa assinatura.<br>
        <em>Analogia:</em> É uma sacola de suprimentos pendurada ao lado do botão de ligar. O operador pode, se quiser, colocar bilhetes com instruções antes de apertar o botão. A sacola está sempre lá, mesmo vazia.
      </li>
    </ul>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">3. Sintaxe Essencial: Os Símbolos que Estruturam o Código</h4>
    <p class="mb-4">Programar em Java é como escrever em uma língua de gramática inflexível. Três símbolos são onipresentes e dominá-los evita a maioria dos erros de iniciante.</p>

    <p class="mb-2"><strong>Chaves <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">{ }</code> – Delimitadores de Bloco</strong></p>
    <p class="mb-4">As chaves definem <strong>escopos</strong>: onde começa e onde termina um bloco de código. No Hello World, temos uma estrutura aninhada: o primeiro par <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">{ ... }</code> engloba todo o conteúdo da classe <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld</code>, e o segundo par, dentro do primeiro, engloba o corpo do método <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code>.</p>
    <p class="mb-4"><strong>Regra fundamental:</strong> Toda chave aberta <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">{</code> precisa ter uma chave de fechamento <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">}</code> correspondente. Se você abrir um bloco e não fechá-lo, o compilador lançará um erro como <em>"reached end of file while parsing"</em> – ele literalmente chegou ao fim do arquivo esperando um fechamento que não apareceu.</p>
    <p class="mb-4"><strong>Dica prática:</strong> Ao digitar <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">{</code>, pressione Enter e imediatamente digite <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">}</code>. Depois, volte e escreva o conteúdo entre elas. Isso garante que os pares nunca fiquem órfãos.</p>
    <p class="mb-4"><em>Analogia:</em> As chaves são como as paredes de uma casa. A primeira <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">{</code> ergue a parede externa; o conteúdo da casa fica entre ela e a parede do outro lado. Se faltar uma parede, a construção fica aberta para o infinito e o fiscal (compilador) não aprova a obra.</p>

    <p class="mb-2"><strong>Parênteses <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">( )</code> – Comunicação com Métodos</strong></p>
    <p class="mb-4">Parênteses são usados exclusivamente junto a métodos. Eles cumprem duas funções: indicar que aquele nome é um método (e não uma variável) e transportar os <strong>argumentos</strong> (dados de entrada) que o método precisa para trabalhar. Em <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main(String[] args)</code>, os parênteses contêm a declaração do parâmetro <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">args</code>. Em <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.out.println("Hello, World!")</code>, eles envolvem a mensagem que será impressa.</p>
    <p class="mb-4">Mesmo que um método não receba nenhum dado – como em <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.out.println()</code> (que apenas pula uma linha) –, os parênteses vazios <strong>são obrigatórios</strong>. Eles são a marca registrada de que aquele nome é uma ação, um método a ser executado.</p>
    <p class="mb-4"><em>Analogia:</em> Os parênteses são a esteira de alimentação de uma máquina. Você coloca a matéria-prima (os argumentos) sobre ela, e a máquina a processa. Se a máquina não precisa de insumos, a esteira fica vazia, mas ainda é preciso que ela exista para a máquina ser reconhecida como tal.</p>

    <p class="mb-2"><strong>Ponto e vírgula <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">;</code> – O Finalizador de Instrução</strong></p>
    <p class="mb-4">Em Java, cada instrução completa deve ser terminada com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">;</code>. O compilador ignora quebras de linha e espaços extras; ele apenas lê o fluxo de caracteres sequencialmente. O ponto e vírgula funciona como o sinal de "fim da instrução".</p>
    <p class="mb-4">Se você remover o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">;</code> da primeira linha de dois comandos, o compilador enxergará algo como:</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
System.out.println("Hello, World!")System.out.println("Segunda linha");</pre>
    <p class="mb-4">Isso não corresponde a nenhuma construção válida da linguagem, e o erro <em>"';' expected"</em> será exibido.</p>
    <p class="mb-4"><em>Analogia:</em> Imagine um trem que percorre um trilho. Cada vagão (instrução) é separado do próximo por um sinal vermelho (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">;</code>). Sem esse sinal, o trem engata todos os vagões em um único comboio disforme e o maquinista (compilador) não sabe onde termina um e começa o outro. Aliás, se você escrevesse o código inteiro em uma única linha, o programa funcionaria perfeitamente – porque os <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">;</code> e as chaves ainda estão lá, demarcando os blocos e as instruções.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">4. Compilação e Execução: Do Texto ao Resultado</h4>
    <p class="mb-4">Para que o Hello World ganhe vida, você precisa passar por duas etapas no terminal:</p>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>Compilação:</strong> <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">javac HelloWorld.java</code> – O compilador <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">javac</code> lê o arquivo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">.java</code>, verifica a sintaxe e, se não houver erros, gera o arquivo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld.class</code> contendo bytecode.</li>
      <li><strong>Execução:</strong> <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">java HelloWorld</code> – O comando <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">java</code> inicia a JVM, que carrega o arquivo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">.class</code>, localiza o método <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code> e começa a executar as instruções. A saída <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Hello, World!</code> aparece no terminal.</li>
    </ul>
    <p class="mb-4">É importante notar que o bytecode não é código de máquina nativo – é um conjunto de instruções padronizadas para a máquina virtual Java. Isso torna o programa portável: o mesmo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld.class</code> pode ser executado em qualquer sistema que tenha uma JVM, seja Windows, Linux ou macOS.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">5. Boas Práticas: Escreva para Humanos</h4>
    <p class="mb-4">O código não é lido apenas pelo computador. Colegas de equipe e você mesmo, meses depois, precisarão entendê‑lo rapidamente. Duas práticas são fundamentais desde o primeiro programa.</p>

    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>PascalCase para nomes de classes:</strong> Já mencionado, o padrão exige que classes comecem com letra maiúscula e cada palavra adicional também. Isso diferencia classes de variáveis e métodos (que usam camelCase, com inicial minúscula). Exemplos: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">ContaBancaria</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">GeradorDeRelatorio</code>.</li>
      <li><strong>Indentação:</strong> Indentar é adicionar espaços (ou um Tab) no início de cada linha para refletir a hierarquia de blocos. O código sem indentação funciona, mas é difícil de ler. Com indentação, cada nível de abertura de chave acrescenta um recuo, revelando visualmente a estrutura. Ferramentas como o VS Code fazem isso automaticamente, mas entender o princípio é vital para depuração e manutenção.</li>
    </ul>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Detalhamento Técnico</h3>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">Por que a JVM exige exatamente <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">public static void main(String[] args)</code>?</h4>
    <p class="mb-4">A especificação da linguagem Java (Java Language Specification) define que a JVM deve invocar um método com essa assinatura precisa. O nome <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code> é herdado da convenção do C/C++, mas os modificadores têm razões técnicas:</p>
    <ul class="list-disc ml-6 mb-4 space-y-1">
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">public</code>:</strong> o lançador da JVM está fora do pacote da classe, portanto precisa de acesso irrestrito.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">static</code>:</strong> antes que qualquer objeto exista, o método precisa estar acessível. Sem <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">static</code>, a JVM tentaria instanciar a classe, o que poderia demandar recursos que ainda não estão configurados.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">void</code>:</strong> o método <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code> não retorna um valor para a JVM; seu efeito é colateral (imprimir, abrir janelas, etc.). O sistema operacional recebe um código de saída através de outros mecanismos (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.exit</code>).</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">String[] args</code>:</strong> é a interface pela qual o ambiente externo passa dados ao programa. O array é criado pela JVM a partir dos argumentos da linha de comando.</li>
    </ul>
    <p class="mb-4">Qualquer desvio dessa assinatura – por exemplo, escrever <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Main</code>, omitir <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">static</code> ou colocar <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">int</code> no lugar de <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">void</code> – faz com que a JVM não encontre o método e lance <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">NoSuchMethodError: main</code>.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">Como o compilador lida com chaves, parênteses e ponto e vírgula</h4>
    <p class="mb-4">Durante a compilação, o analisador sintático (parser) do <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">javac</code> percorre o código token a token. As chaves delimitam o escopo de variáveis e a estrutura de controle; quando o parser encontra <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">{</code>, empilha um novo contexto, e ao encontrar <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">}</code>, desempilha e verifica a consistência. Um <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">}</code> extra ou faltante gera erro imediato.</p>
    <p class="mb-4">Os parênteses são associados ao token anterior (um identificador de método) e, se ausentes ou mal formados, o parser não consegue reconhecer a chamada. O ponto e vírgula, por sua vez, encerra uma declaração; sua ausência faz o parser continuar consumindo tokens da próxima linha, gerando uma expressão inválida.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">Portabilidade real: o bytecode</h4>
    <p class="mb-4">Quando você executa <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">javac</code>, o código Java é traduzido para instruções de uma máquina virtual hipotética. Essas instruções são independentes de plataforma. A JVM específica para Windows, por exemplo, lê esse bytecode e o converte em instruções x86_64 nativas, podendo inclusive compilá‑las sob demanda (JIT) para acelerar trechos repetidos. Assim, o mesmo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">.class</code> roda em qualquer SO que possua uma JVM compatível.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Aplicações Práticas</h3>
    <p class="mb-4">No dia a dia, dominar a estrutura do Hello World evita perda de tempo com erros triviais e estabelece uma base sólida para programas mais complexos. Veja alguns cenários comuns:</p>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>Problema:</strong> "Meu programa não roda; aparece <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Could not find or load main class</code>."<br>
      <strong>Causa provável:</strong> O nome da classe no arquivo não corresponde ao nome da classe pública, ou o arquivo não foi compilado corretamente. Solução: verifique se o arquivo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld.java</code> existe e se a classe se chama exatamente <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld</code>.</li>
      <li><strong>Problema:</strong> "Erro <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">';' expected</code> na linha 5."<br>
      <strong>Causa provável:</strong> Falta de ponto e vírgula no final de uma instrução. O compilador aponta a linha seguinte à que esqueceu o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">;</code>, então inspecione a linha anterior.</li>
      <li><strong>Problema:</strong> "O código compila, mas não imprime nada."<br>
      <strong>Causa provável:</strong> Falta de <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.out.println</code> dentro de <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code>, ou <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code> foi escrito errado (ex.: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Main</code>). Revise a assinatura.</li>
      <li><strong>Problema:</strong> "O código fica ilegível depois de algumas semanas."<br>
      <strong>Solução:</strong> Aplique indentação consistente e use PascalCase. Ao retornar ao código, você imediatamente identifica classes, métodos e fluxos de controle.</li>
    </ul>
    <p class="mb-4">Esses conceitos se estendem a aplicações corporativas: classes bem nomeadas, métodos com assinaturas padronizadas e um fluxo claro de compilação/execução são a base de projetos como servidores web, aplicativos Android e sistemas de back‑end.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Conclusão</h3>
    <p class="mb-4">O programa Hello World é muito mais que uma tradição: é um microcosmo de toda a plataforma Java. Nele você encontra a obrigatoriedade das classes, a precisão dos modificadores, a rigidez sintática que garante robustez e o modelo de dois estágios (compilação + interpretação) que confere portabilidade.</p>
    <p>Entender profundamente cada elemento – <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">public class</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code>, as chaves, os parênteses e o ponto e vírgula – é adquirir as chaves para ler, escrever e depurar qualquer código Java futuro. As boas práticas associadas (PascalCase e indentação) transformam você em um profissional que escreve não apenas para máquinas, mas também para pessoas.</p>
    <p>Com essa base sólida, você está pronto para explorar tipos de dados, operadores e estruturas de controle, sabendo exatamente onde e como seu código será inserido no grande ecossistema Java.</p>
  `,

  imagens: [
    // Espaço reservado para futuras imagens. Exemplo:
    // {
    //   src: 'assets/images/hello-world-compilacao-execucao.png',
    //   alt: 'Fluxo de compilação e execução do Hello World',
    //   legenda: 'Etapas: código-fonte (.java) → compilador (javac) → bytecode (.class) → JVM (java) → execução.',
    //   largura: 600,
    //   altura: 400
    // }
  ],

  exemplos: [
    {
      titulo: 'Hello World completo com comandos de compilação e execução',
      codigo: `// Arquivo: HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

// ===== COMANDOS NO TERMINAL =====
// Compilar (gera HelloWorld.class):
// javac HelloWorld.java

// Executar (roda na JVM):
// java HelloWorld

// Saída esperada:
// Hello, World!

// Exemplo com argumentos de linha de comando:
// java HelloWorld Maria Joao
// args[0] = "Maria", args[1] = "Joao"`,
      explicacao: 'Este é o programa Java mais simples. A classe HelloWorld contém o método main, ponto de entrada da aplicação. O comando javac compila o código-fonte para bytecode (.class), e o comando java inicia a JVM que executa o bytecode. O array args permite receber argumentos da linha de comando (opcional).'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual é a função do método main em um programa Java?',
      alternativas: [
        'Compilar o código-fonte para bytecode',
        'Servir como ponto de entrada (entry point) para a execução do programa',
        'Exibir mensagens na tela automaticamente'
      ],
      respostaCorreta: 1,
      explicacao: 'O método main é o ponto de entrada da aplicação. A JVM procura exatamente por public static void main(String[] args) para iniciar a execução do programa.'
    },
    {
      pergunta: 'O que acontece se você nomear o arquivo como "helloworld.java" (com letras minúsculas) mas a classe como "HelloWorld"?',
      alternativas: [
        'O programa compila e executa normalmente',
        'O compilador exibe um erro informando que o nome da classe pública deve corresponder ao nome do arquivo',
        'O programa compila, mas não executa'
      ],
      respostaCorreta: 1,
      explicacao: 'Java é case-sensitive. Se a classe pública se chama HelloWorld, o arquivo deve ser HelloWorld.java. Nomes diferentes geram erro de compilação: "class HelloWorld is public, should be declared in a file named HelloWorld.java".'
    }
  ]
};