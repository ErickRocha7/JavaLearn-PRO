// Arquivo: data/aulas/cap-02/sub-2-4.js
// Aula 2.4 – Métodos: Definição, Parâmetros e Retorno

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-2-4'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Métodos: Definição, Parâmetros e Retorno</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Até agora, concentramo-nos em <strong>atributos</strong> — as características que definem o estado de um objeto. Mas um objeto que apenas guarda dados seria como um cofre no fundo do oceano: seguro, porém inútil. Nesta aula, vamos instalar os motores dos objetos: os <strong>métodos</strong>, que representam as ações, os comportamentos e a inteligência que tornam o software dinâmico.</p>
    <p class="lesson-text">Métodos são blocos de código que podem ser chamados para executar uma tarefa específica. Eles permitem que um objeto faça algo — alterar seu estado, devolver uma informação ou processar dados recebidos.</p>

    <h3 class="section-title">1. Anatomia de um Método</h3>
    <p class="lesson-text">Criar um método é como desenhar uma fábrica em miniatura dentro do objeto. Sua <strong>assinatura</strong> estabelece o contrato de funcionamento:</p>

    <pre><code class="language-java">public double calcularMedia() {
    // bloco de código
}</code></pre>

    <p class="lesson-text">Cada elemento desempenha um papel específico:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong><code class="code-inline">public</code> – modificador de acesso:</strong> define quem pode chamar o método.</li>
      <li><strong><code class="code-inline">double</code> – tipo de retorno:</strong> promessa do que o método devolverá. Pode ser um tipo primitivo, uma classe ou <code class="code-inline">void</code> (vazio, sem retorno).</li>
      <li><strong><code class="code-inline">calcularMedia</code> – nome do método:</strong> segue o padrão <strong>camelCase</strong> (primeira letra minúscula).</li>
      <li><strong>Parênteses <code class="code-inline">( )</code> – boca de alimentação:</strong> aqui podem ser declarados <strong>parâmetros</strong>.</li>
      <li><strong>Chaves <code class="code-inline">{ }</code> – bloco de código:</strong> delimitam a sequência de instruções.</li>
    </ul>

    <h3 class="section-title">2. Métodos Sem Retorno (<code class="code-inline">void</code>)</h3>
    <p class="lesson-text">Um método declarado com <code class="code-inline">void</code> é um <strong>executor puro</strong>: realiza uma tarefa e não devolve nenhum valor a quem o chamou.</p>

    <div class="callout-analogy">
      <strong>Analogia:</strong> Pense no controle remoto da TV: você aperta o botão de aumentar volume, a TV obedece, mas o controle não lhe entrega um relatório com o novo nível de volume.
    </div>

    <pre><code class="language-java">public class Televisao {
    private int volume = 10;

    // Método void: altera o estado e exibe uma mensagem
    public void aumentarVolume() {
        this.volume = this.volume + 1;
        System.out.println("Volume aumentado para: " + this.volume);
    }
}</code></pre>

    <div class="callout-warning">
      <strong>Erro comum:</strong> tentar capturar um método <code class="code-inline">void</code> em uma variável causa erro de compilação.<br>
      <code class="code-inline">int x = tv.aumentarVolume(); // ERRO! void não produz valor</code>
    </div>

    <h3 class="section-title">3. Métodos Com Retorno (<code class="code-inline">return</code>)</h3>
    <p class="lesson-text">Quando um método precisa <strong>devolver</strong> um resultado, substituímos <code class="code-inline">void</code> pelo tipo do dado que será entregue e usamos a palavra-chave <code class="code-inline">return</code> para enviá‑lo de volta.</p>

    <div class="callout-analogy">
      <strong>Analogia:</strong> Você vai a um caixa eletrônico e aperta "Consultar Saldo". O caixa processa internamente e <strong>retorna</strong> o número do saldo na tela. Sem esse retorno, a operação seria inútil.
    </div>

    <pre><code class="language-java">public class CaixaEletronico {
    private double saldoDisponivel = 1500.00;

    public double consultarSaldo() {
        return this.saldoDisponivel;   // devolve o valor e encerra o método
    }
}</code></pre>

    <p class="lesson-text">O comando <code class="code-inline">return</code> <strong>encerra imediatamente</strong> o método e devolve o valor para o ponto de chamada. Nenhum código escrito após o <code class="code-inline">return</code> será executado.</p>

    <h3 class="section-title">4. Passagem de Parâmetros e Argumentos</h3>
    <p class="lesson-text">Para tornar os métodos flexíveis e reutilizáveis, é preciso permitir que recebam dados externos no momento da chamada. Esses dados são os <strong>parâmetros</strong>.</p>

    <p class="lesson-text">A distinção terminológica é simples, mas importante:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Parâmetros:</strong> são as variáveis declaradas na assinatura do método — os "moldes".</li>
      <li><strong>Argumentos:</strong> são os valores reais fornecidos durante a chamada do método.</li>
    </ul>

    <pre><code class="language-java">public class Calculadora {
    // Método que espera dois números (parâmetros)
    public double somarDoisNumeros(double numeroA, double numeroB) {
        double resultado = numeroA + numeroB;
        return resultado;
    }
}</code></pre>

    <p class="lesson-text">Na classe principal, a chamada envia os argumentos:</p>
    <pre><code class="language-java">Calculadora calc = new Calculadora();
double r1 = calc.somarDoisNumeros(10.5, 20.0);   // argumentos literais
double x = 5.0;
double y = 7.5;
double r2 = calc.somarDoisNumeros(x, y);         // argumentos via variáveis</code></pre>

    <p class="lesson-text">O Java trabalha com <strong>cópias</strong> (passagem por valor). Os argumentos originais permanecem inalterados.</p>

    <h3 class="section-title">5. Integrando Atributos e Métodos: O Ciclo Completo</h3>
    <p class="lesson-text">Exemplo de uma classe <code class="code-inline">ContaBancaria</code> que encapsula o saldo e expõe métodos de depósito, saque e consulta:</p>

    <pre><code class="language-java">public class ContaBancaria {
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
}</code></pre>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Métodos são o coração pulsante dos objetos. Com eles, você dá vida às classes, permitindo que modifiquem seu estado (<code class="code-inline">void</code>), devolvam informações (<code class="code-inline">return</code>) e recebam matéria‑prima externa (parâmetros). A assinatura de um método — acesso, tipo de retorno, nome e parâmetros — é o contrato que rege a comunicação entre as partes do sistema.</p>
    <p class="lesson-text">Agora você tem o kit completo para criar objetos completos: atributos para guardar estado, métodos para definir comportamento e modificadores para controlar o acesso.</p>
  `,

  imagens: [],

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