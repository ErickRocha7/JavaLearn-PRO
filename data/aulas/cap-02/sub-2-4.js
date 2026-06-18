// Arquivo: data/aulas/cap-02/sub-2-4.js
// Aula 2.4 – Métodos: Definição, Parâmetros e Retorno

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-2-4'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Métodos: Definição, Parâmetros e Retorno</h2>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Introdução</h3>
    <p class="mb-4">Até agora, concentramo-nos em <strong>atributos</strong> — as características que definem o estado de um objeto. Mas um objeto que apenas guarda dados seria como um cofre no fundo do oceano: seguro, porém inútil. Nesta aula, vamos instalar os motores dos objetos: os <strong>métodos</strong>, que representam as ações, os comportamentos e a inteligência que tornam o software dinâmico.</p>
    <p class="mb-4">Métodos são blocos de código que podem ser chamados para executar uma tarefa específica. Eles permitem que um objeto faça algo — alterar seu estado, devolver uma informação ou processar dados recebidos. Compreender sua sintaxe, os tipos de retorno e a passagem de parâmetros é o passo que transforma você de escritor de classes em arquiteto de sistemas vivos.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">1. Anatomia de um Método</h3>
    <p class="mb-4">Criar um método é como desenhar uma fábrica em miniatura dentro do objeto. Sua <strong>assinatura</strong> — a primeira linha do método — estabelece o contrato de funcionamento. Veja a estrutura geral:</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
public double calcularMedia() {
    // bloco de código
}</pre>

    <p class="mb-4">Cada elemento desempenha um papel específico:</p>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">public</code> – modificador de acesso:</strong> define quem pode chamar o método. <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">public</code> significa que qualquer classe externa (como a <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Principal</code>) pode acioná‑lo. Se fosse <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">private</code>, seria um método secreto, usado apenas internamente pelo próprio objeto.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">double</code> – tipo de retorno:</strong> é a promessa do que o método devolverá ao final. Pode ser um tipo primitivo (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">int</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">boolean</code>, etc.), uma classe (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">String</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Scanner</code>) ou <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">void</code> (vazio, sem retorno).</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">calcularMedia</code> – nome do método:</strong> segue o padrão <strong>camelCase</strong> (primeira letra minúscula, palavras seguintes com inicial maiúscula). Ele deve descrever a ação de forma clara, facilitando a leitura.</li>
      <li><strong>Parênteses <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">( )</code> – boca de alimentação:</strong> aqui podem ser declarados <strong>parâmetros</strong>, que são as matérias‑primas que o método espera receber. Se o método trabalha com dados já existentes no objeto, os parênteses ficam vazios.</li>
      <li><strong>Chaves <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">{ }</code> – bloco de código:</strong> delimitam a sequência de instruções que serão executadas quando o método for chamado. O mundo exterior não enxerga o que acontece aqui dentro.</li>
    </ul>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">2. Métodos Sem Retorno (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">void</code>)</h3>
    <p class="mb-4">Um método declarado com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">void</code> é um <strong>executor puro</strong>: realiza uma tarefa e não devolve nenhum valor a quem o chamou. Pense no controle remoto da TV: você aperta o botão de aumentar volume, a TV obedece, mas o controle não lhe entrega um relatório com o novo nível de volume.</p>

    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
public class Televisao {
    private int volume = 10;

    // Método void: altera o estado e exibe uma mensagem
    public void aumentarVolume() {
        this.volume = this.volume + 1;
        System.out.println("Volume aumentado para: " + this.volume);
    }
}</pre>

    <p class="mb-4">Note que o método acessa o atributo privado <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">volume</code> e o modifica. Essa é a essência dos métodos <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">void</code>: provocar <strong>efeitos colaterais</strong> — alterar estado interno, imprimir mensagens, salvar arquivos, disparar eventos. Eles não são feitos para devolver respostas, mas para <strong>transformar</strong> a realidade do programa.</p>

    <div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
      <p class="text-red-800"><strong>Erro comum:</strong> tentar capturar um método <code class="bg-red-100 px-1 py-0.5 rounded text-sm font-mono">void</code> em uma variável causa erro de compilação.</p>
      <pre class="bg-red-100 text-red-900 p-3 rounded text-sm font-mono mb-2 overflow-x-auto">
Televisao tv = new Televisao();
int x = tv.aumentarVolume();   // ERRO! void não produz valor</pre>
    </div>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">3. Métodos Com Retorno (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">return</code>)</h3>
    <p class="mb-4">Quando um método precisa <strong>devolver</strong> um resultado, substituímos <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">void</code> pelo tipo do dado que será entregue e usamos a palavra-chave <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">return</code> para enviá‑lo de volta.</p>
    <p class="mb-4"><strong>Analogia:</strong> você vai a um caixa eletrônico e aperta "Consultar Saldo". O caixa processa internamente e <strong>retorna</strong> o número do saldo na tela. Sem esse retorno, a operação seria inútil.</p>

    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
public class CaixaEletronico {
    private double saldoDisponivel = 1500.00;

    public double consultarSaldo() {
        return this.saldoDisponivel;   // devolve o valor e encerra o método
    }
}</pre>

    <p class="mb-4">No método <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code>, o valor retornado pode ser armazenado ou usado diretamente:</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
CaixaEletronico caixa = new CaixaEletronico();
double meuDinheiro = caixa.consultarSaldo();   // captura o retorno
System.out.println("Saldo: R$ " + meuDinheiro);</pre>

    <p class="mb-4">O comando <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">return</code> <strong>encerra imediatamente</strong> o método e devolve o valor para o ponto de chamada. Portanto, nenhum código escrito após o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">return</code> será executado.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">4. Passagem de Parâmetros e Argumentos</h3>
    <p class="mb-4">Até aqui, os métodos operavam apenas com os atributos internos do objeto. Para torná‑los flexíveis e reutilizáveis, é preciso permitir que recebam dados externos no momento da chamada. Esses dados são os <strong>parâmetros</strong>.</p>
    <p class="mb-4">A distinção terminológica é simples, mas importante:</p>
    <ul class="list-disc ml-6 mb-4 space-y-1">
      <li><strong>Parâmetros:</strong> são as variáveis declaradas na assinatura do método — os "moldes" que definem o que será recebido.</li>
      <li><strong>Argumentos:</strong> são os valores reais fornecidos durante a chamada do método.</li>
    </ul>
    <p class="mb-4"><strong>Analogia da máquina de suco:</strong> no manual (classe), está escrito que o liquidificador aceita "frutas" (parâmetros). Na cozinha, você insere uma laranja e um morango (argumentos).</p>

    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
public class Calculadora {
    // Método que espera dois números (parâmetros)
    public double somarDoisNumeros(double numeroA, double numeroB) {
        double resultado = numeroA + numeroB;
        return resultado;
    }
}</pre>

    <p class="mb-4">Na classe principal, a chamada envia os argumentos:</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
Calculadora calc = new Calculadora();
double r1 = calc.somarDoisNumeros(10.5, 20.0);   // argumentos literais
double x = 5.0;
double y = 7.5;
double r2 = calc.somarDoisNumeros(x, y);         // argumentos via variáveis</pre>

    <p class="mb-4">O funcionamento nos bastidores da memória RAM é o seguinte:</p>
    <ul class="list-disc ml-6 mb-4 space-y-1">
      <li>O Java copia os valores dos argumentos e os coloca nas gavetas temporárias dos parâmetros (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">numeroA</code> e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">numeroB</code>).</li>
      <li>O bloco do método é executado usando essas cópias.</li>
      <li>O <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">return</code> devolve o resultado e as variáveis parâmetros são destruídas — elas existem apenas durante a execução do método.</li>
    </ul>
    <p class="mb-4">Os argumentos originais (no <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code>) permanecem inalterados, pois o Java trabalha com <strong>cópias</strong> (passagem por valor). Isso será explorado com mais detalhes na Aula 5.2.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">5. Integrando Atributos e Métodos: O Ciclo Completo</h3>
    <p class="mb-4">Agora temos todas as peças para construir objetos que unem dados e comportamento de forma segura. Atributos são mantidos como <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">private</code>; métodos <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">public</code> oferecem acesso controlado. Os métodos podem receber parâmetros para agir com flexibilidade e retornar resultados quando necessário.</p>
    <p class="mb-4">Exemplo de uma classe <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">ContaBancaria</code> que encapsula o saldo e expõe métodos de depósito, saque e consulta:</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
public class ContaBancaria {
    private double saldo;

    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;          // método void com parâmetro
        }
    }

    public boolean sacar(double valor) {
        if (valor <= saldo) {
            saldo -= valor;
            return true;             // retorno indica sucesso
        }
        return false;                // retorno indica falha
    }

    public double getSaldo() {       // retorno sem parâmetros
        return saldo;
    }
}</pre>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Detalhamento Técnico</h3>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>Parâmetros vs. argumentos:</strong> parâmetros são as variáveis na definição do método; argumentos são os valores reais passados na chamada. Em Java, todos os argumentos são passados <strong>por valor</strong> — o método recebe uma cópia do conteúdo. Para tipos primitivos, a cópia é do valor; para objetos, a cópia é da referência (endereço), permitindo modificar o objeto original.</li>
      <li><strong>Variáveis locais:</strong> as variáveis declaradas dentro de um método (incluindo os parâmetros) são <strong>locais</strong> — existem apenas durante a execução do método e são destruídas ao final. Não podem ser acessadas de fora.</li>
      <li><strong>Sobrecarga de métodos:</strong> é possível ter vários métodos com o mesmo nome na mesma classe, desde que as listas de parâmetros sejam diferentes (em número, tipo ou ordem). Esse tópico será aprofundado na Aula 5.5.</li>
      <li><strong>Retorno de múltiplos valores:</strong> um método em Java só pode retornar um único valor. Para "retornar" vários dados, usamos classes que os agrupem (como um objeto que contém vários campos) ou listas.</li>
    </ul>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Aplicações Práticas</h3>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>Getters e Setters:</strong> métodos de acesso (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">get</code>) e modificação (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">set</code>) são a forma padrão de expor atributos privados com segurança.</li>
      <li><strong>Processamento de dados:</strong> métodos que recebem argumentos e retornam resultados são a base de calculadoras, conversores de unidades, validadores de CPF, etc.</li>
      <li><strong>Interação entre objetos:</strong> um método de um objeto pode receber outro objeto como parâmetro, permitindo colaborações complexas — por exemplo, um método <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">transferir(Conta destino, double valor)</code>.</li>
      <li><strong>Organização e reutilização:</strong> extrair lógicas repetitivas para métodos evita duplicação de código, facilita a manutenção e torna o programa mais claro.</li>
    </ul>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Conclusão</h3>
    <p class="mb-4">Métodos são o coração pulsante dos objetos. Com eles, você dá vida às classes, permitindo que modifiquem seu estado (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">void</code>), devolvam informações (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">return</code>) e recebam matéria‑prima externa (parâmetros). A assinatura de um método — acesso, tipo de retorno, nome e parâmetros — é o contrato que rege a comunicação entre as partes do sistema.</p>
    <p>Agora você tem o kit completo para criar objetos completos: atributos para guardar estado, métodos para definir comportamento e modificadores para controlar o acesso. Nos próximos tópicos, aprofundaremos a criação de objetos com construtores e a sobrecarga de métodos, refinando ainda mais a arte da Orientação a Objetos.</p>
  `,

  imagens: [
    // Espaço reservado para futuras imagens.
  ],

  exemplos: [
    {
      titulo: 'Classe Televisao com método void e método com retorno',
      codigo: `public class Televisao {
    private int volume = 10;
    private boolean ligada = false;

    // Método void: apenas executa ação
    public void aumentarVolume() {
        if (ligada) {
            volume++;
            System.out.println("Volume: " + volume);
        }
    }

    // Método com retorno: devolve o estado da TV
    public boolean isLigada() {
        return ligada;
    }
}

// Uso no main
Televisao tv = new Televisao();
tv.aumentarVolume();                     // void
boolean estado = tv.isLigada();          // captura o retorno
System.out.println("TV ligada? " + estado);`,
      explicacao: 'O método aumentarVolume é void — modifica o atributo volume e exibe uma mensagem. O método isLigada retorna um boolean, permitindo que o chamador saiba o estado atual da TV sem acessar o atributo diretamente.'
    },
    {
      titulo: 'Calculadora com parâmetros e retorno',
      codigo: `public class Calculadora {
    public double somar(double a, double b) {
        return a + b;
    }

    public int multiplicar(int x, int y) {
        return x * y;
    }
}

// Uso no main
Calculadora calc = new Calculadora();
double s = calc.somar(10.5, 20.0);       // 30.5
int m = calc.multiplicar(7, 3);          // 21
System.out.println("Soma: " + s + ", Multiplicação: " + m);`,
      explicacao: 'Cada método declara seus parâmetros (a e b, x e y). Os argumentos são passados na chamada. O método retorna o resultado, que pode ser armazenado em variáveis.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual é a principal característica de um método declarado como void?',
      alternativas: [
        'Ele retorna um valor do tipo int',
        'Ele não retorna nenhum valor a quem o chamou',
        'Ele só pode ser chamado dentro da própria classe'
      ],
      respostaCorreta: 1,
      explicacao: 'void indica que o método executa uma ação mas não devolve um resultado. Tentar capturar seu retorno em uma variável gera erro de compilação.'
    },
    {
      pergunta: 'No contexto de métodos, qual é a diferença entre parâmetro e argumento?',
      alternativas: [
        'Parâmetro é o valor enviado na chamada; argumento é a variável declarada na assinatura',
        'Parâmetro é a variável declarada na assinatura do método; argumento é o valor real passado durante a chamada',
        'Não há diferença; são sinônimos em Java'
      ],
      respostaCorreta: 1,
      explicacao: 'Os parâmetros aparecem na definição do método (ex.: double a, double b). Os argumentos são os valores concretos fornecidos na hora da chamada (ex.: 10.5, 20.0).'
    },
    {
      pergunta: 'O que acontece se um método declarado como "public int obterValor()" não contiver a instrução return?',
      alternativas: [
        'O método retorna 0 automaticamente',
        'O programa compila, mas lança uma exceção em tempo de execução',
        'Ocorre um erro de compilação, pois o método promete retornar um int e não cumpre'
      ],
      respostaCorreta: 2,
      explicacao: 'Se o tipo de retorno não for void, o método é obrigado a ter um return que devolva um valor do tipo declarado. A ausência gera erro de compilação.'
    }
  ]
};