// Arquivo: data/aulas/cap-05/sub-5-2.js
// Aula 5.2 – Passagem de Argumentos por Valor

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-5-2'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Passagem de Argumentos por Valor</h2>
    <p class="lesson-text text-slate-500 italic">Como o Java protege seus dados originais por meio de cópias</p>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Na aula anterior, aprendemos a criar métodos e a compreender o fluxo de execução. Mas como exatamente as informações são transferidas do programa principal para dentro desses blocos? A resposta está em uma das regras mais fundamentais — e por vezes mal interpretadas — da linguagem Java: <strong>toda passagem de argumentos é feita por valor</strong>. Isso significa que o método recebe uma <strong>cópia</strong> do dado, nunca o dado original.</p>
    <p class="lesson-text">Nesta aula, vamos mergulhar nesse mecanismo. Primeiro, entenderemos os tipos de dados mais elementares do Java — os <strong>tipos primitivos</strong>. Em seguida, desenharemos o processo de cópia que blinda as variáveis originais. Por fim, acompanharemos uma demonstração prática que revela, linha por linha, por que um método nunca consegue alterar acidentalmente as informações que estão fora de seu alcance.</p>

    <h3 class="section-title">1. Os Tipos Primitivos em Java</h3>
    <p class="lesson-text">Antes de discutir a passagem de argumentos, é necessário conhecer a matéria‑prima com a qual trabalharemos. Java classifica os dados em duas grandes categorias: tipos primitivos e objetos. Os <strong>tipos primitivos</strong> são os blocos mais simples e leves da linguagem — verdadeiros átomos da computação. Eles armazenam o valor real diretamente na memória, sem intermediários. Imagine uma pequena caixa de fósforos: ao guardar um número ali, ele fica fisicamente depositado dentro dela.</p>
    <p class="lesson-text">A tabela a seguir resume os três tipos primitivos mais utilizados no cotidiano de um programador Java:</p>

    <div class="overflow-x-auto mb-4">
      <table class="table-didatic">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>O que armazena</th>
            <th>Exemplo do mundo real</th>
            <th>Declaração em código</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-bold"><code class="code-inline">int</code></td>
            <td>Números inteiros (sem casas decimais)</td>
            <td>Idade (25), quantidade de itens (3)</td>
            <td><code class="code-inline">int idade = 30;</code></td>
          </tr>
          <tr>
            <td class="font-bold"><code class="code-inline">double</code></td>
            <td>Números decimais (precisão dupla)</td>
            <td>Preço (4.99), altura (1.75)</td>
            <td><code class="code-inline">double preco = 4.99;</code></td>
          </tr>
          <tr>
            <td class="font-bold"><code class="code-inline">boolean</code></td>
            <td>Verdadeiro ou falso</td>
            <td>Usuário logado? Produto em estoque?</td>
            <td><code class="code-inline">boolean ativo = true;</code></td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="lesson-text"><strong>O tipo <code class="code-inline">int</code></strong> (de <em>integer</em>, inteiro) ocupa 32 bits na memória e é usado para contagens absolutas — a idade de uma pessoa, a pontuação de um jogo, o número de parcelas de uma compra. Não comporta frações; se um cálculo resultar em <code class="code-inline">7 / 2</code>, o <code class="code-inline">int</code> descarta a parte decimal e entrega apenas <code class="code-inline">3</code>.</p>
    <p class="lesson-text"><strong>O tipo <code class="code-inline">double</code></strong> (precisão dupla em ponto flutuante) utiliza 64 bits e foi projetado para medições contínuas — valores monetários, pesos, temperaturas, coordenadas geográficas. O nome "dupla" indica que ele oferece o dobro da precisão do antigo tipo <code class="code-inline">float</code>.</p>
    <p class="lesson-text"><strong>O tipo <code class="code-inline">boolean</code></strong> é o mais conceitual de todos: funciona como um interruptor de luz, aceitando apenas dois estados — <code class="code-inline">true</code> (ligado) ou <code class="code-inline">false</code> (desligado). Ele é a base de toda tomada de decisão em Java, aparecendo em estruturas condicionais como <code class="code-inline">if</code> e <code class="code-inline">while</code>.</p>

    <div class="callout-analogy">
      <strong>Analogia:</strong> Enquanto um <code class="code-inline">int</code> é uma caixa de fósforos com um número gravado dentro, um <code class="code-inline">boolean</code> é um interruptor de parede — só existe para cima ou para baixo, sem meio‑termo.
    </div>

    <h3 class="section-title">2. Cópia de Dados e Isolamento entre Métodos</h3>
    <p class="lesson-text">Quando um método principal (o <strong>chamador</strong>) invoca outro método (o <strong>executado</strong>) e lhe passa uma variável primitiva, o Java não envia a variável em si. Ele extrai o valor contido nela, fabrica uma réplica idêntica e entrega apenas essa cópia. O original permanece intocado, guardado em seu escopo local.</p>

    <div class="callout-analogy">
      <strong>Analogia do escritório:</strong> Você tem uma planilha de orçamento impressa — o documento original, fruto de três dias de trabalho. Um colega pede para simular um desconto. Em vez de entregar a folha original para ele rabiscar, você faz uma <strong>fotocópia</strong>. Ele leva essa cópia para a mesa dele, risca, soma e reescreve valores. Quando ele termina, sua planilha original continua limpa na sua gaveta. A mesa do colega é um <strong>contexto isolado</strong>; nenhuma caneta que ele use ali atravessa as paredes do escritório.
    </div>

    <p class="lesson-text">Nos bastidores da memória RAM, o fenômeno é idêntico. O método principal possui suas variáveis locais — gavetas de aço que guardam os dados reais. Quando uma chamada de método acontece, a JVM cria um novo <strong>quadro de pilha</strong> (stack frame) exclusivo para aquele método. Dentro desse quadro, são alocadas novas variáveis — as <strong>cópias</strong>. O método executado opera em total isolamento: ele não sabe o nome da variável original, não conhece seu endereço de memória e não possui nenhum canal de comunicação para alterá‑la.</p>

    <p class="lesson-text">Essa arquitetura é conhecida como <strong>passagem por valor</strong>. O termo "valor" refere‑se ao conteúdo copiado que trafega entre os métodos. É um mecanismo de segurança que blinda os dados estratégicos do fluxo principal contra modificações acidentais realizadas por código externo.</p>

    <h3 class="section-title">3. Demonstração Prática: A Ilusão da Alteração</h3>
    <p class="lesson-text">Para fixar o conceito, vamos executar mentalmente um programa chamado "Simulador de Finanças". Acompanhe cada etapa com atenção — o comportamento pode surpreender à primeira vista, mas ele revela a lógica impecável do Java.</p>

    <p class="lesson-text"><strong>Primeiro ato – a criação do dado original:</strong> no método <code class="code-inline">main</code>, declaramos:</p>
    <pre><code class="language-java">int salario = 2000;</code></pre>
    <p class="lesson-text">Uma gaveta de aço chamada <code class="code-inline">salario</code> é criada na memória, e o valor <code class="code-inline">2000</code> é gravado diretamente dentro dela. Esta é a nossa <strong>verdade absoluta</strong>.</p>

    <p class="lesson-text"><strong>Segundo ato – a chamada do método:</strong> na linha seguinte, invocamos um método especialista:</p>
    <pre><code class="language-java">aplicarBonificacaoFicticia(salario);</code></pre>
    <p class="lesson-text">A JVM pausa o <code class="code-inline">main</code>, lê o conteúdo de <code class="code-inline">salario</code> (2000), tira uma cópia desse número e a entrega ao método <code class="code-inline">aplicarBonificacaoFicticia</code>. Dentro do método, a cópia é recebida pelo parâmetro <code class="code-inline">valorRecebido</code> — uma nova caixinha de plástico, temporária, que existe apenas naquele escopo.</p>

    <p class="lesson-text"><strong>Terceiro ato – a alteração interna:</strong> o método executa suas instruções:</p>
    <pre><code class="language-java">void aplicarBonificacaoFicticia(int valorRecebido) {
    valorRecebido = valorRecebido + 500;
    System.out.println("Valor com bônus: " + valorRecebido);
}</code></pre>
    <p class="lesson-text">A linha <code class="code-inline">valorRecebido = valorRecebido + 500;</code> abre a caixinha plástica, encontra 2000, soma 500 e guarda 2500 de volta na <strong>mesma</strong> caixinha plástica. O método então imprime: <samp class="terminal-output">Valor com bônus: 2500</samp>. Tudo parece indicar que o salário foi alterado.</p>

    <p class="lesson-text"><strong>Quarto ato – o retorno e a revelação:</strong> o método termina, seu quadro de pilha é destruído e o fluxo retorna ao <code class="code-inline">main</code>. A linha seguinte imprime:</p>
    <pre><code class="language-java">System.out.println("Salário original: " + salario);</code></pre>
    <p class="lesson-text">O que será exibido? O Java vai até a gaveta de aço <code class="code-inline">salario</code> — que permaneceu intocada o tempo todo — e lê seu conteúdo. O monitor exibe: <samp class="terminal-output">Salário original: 2000</samp>.</p>

    <p class="lesson-text">A soma de 500 ocorreu exclusivamente no universo paralelo do parâmetro <code class="code-inline">valorRecebido</code>. O dado original jamais foi alcançado. Esse fenômeno é a <strong>ilusão da alteração</strong>: parece que o valor mudou, mas a mudança só existiu dentro das fronteiras do método.</p>

    <h3 class="section-title">4. Por Que o Java Opera Dessa Forma?</h3>
    <p class="lesson-text">A passagem por valor não é um capricho da linguagem — é um <strong>mecanismo de segurança de nível industrial</strong>. Em sistemas reais, um mesmo dado é frequentemente enviado a dezenas de métodos escritos por equipes diferentes. Se o Java permitisse que esses métodos acessassem a variável original diretamente, bastaria um erro de digitação em um único método de simulação para corromper o saldo real de um cliente no banco de dados principal.</p>
    <p class="lesson-text">Ao forçar a cópia, o Java garante que o fluxo principal mantenha a <strong>soberania absoluta</strong> sobre seus dados. Os métodos secundários podem calcular, experimentar e simular à vontade, mas apenas sobre réplicas temporárias. Essa arquitetura transforma cada método em um departamento estanque, eliminando efeitos colaterais indesejados e tornando o software previsível, testável e seguro.</p>

    <h3 class="section-title">5. Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Stack Frame e variáveis locais:</strong> cada método possui seu próprio quadro na Pilha de Execução. As variáveis declaradas ali (incluindo parâmetros) são alocadas nesse quadro e destruídas quando o método termina.</li>
      <li><strong>Cópia bit‑a‑bit:</strong> para tipos primitivos, a cópia é literal: os 32 ou 64 bits que representam o valor são duplicados. Para objetos, a cópia é feita sobre a <strong>referência</strong> (endereço de memória), comportamento que estudaremos na próxima aula.</li>
      <li><strong>Efeito sobre <code class="code-inline">boolean</code> e <code class="code-inline">double</code>:</strong> a regra é universal. Se você passar um <code class="code-inline">boolean ativo = true</code> e o método fizer <code class="code-inline">ativo = false</code>, a variável original continua <code class="code-inline">true</code>.</li>
      <li><strong>Constantes e literais:</strong> mesmo que o argumento seja um literal (<code class="code-inline">calcular(10)</code>), o Java trata o <code class="code-inline">10</code> como um valor a ser copiado para o parâmetro.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">A passagem de argumentos por valor é o alicerce da segurança dos dados em Java. Ao enviar apenas cópias das informações para os métodos, a linguagem blinda as variáveis originais contra alterações acidentais, garante o isolamento de escopo e torna o código muito mais previsível. Embora o conceito possa gerar estranheza inicial — especialmente quando vemos um valor ser modificado dentro de um método e, em seguida, percebemos que a variável de origem permaneceu intacta —, essa é justamente a prova de que o mecanismo funciona como uma fortaleza digital.</p>
    <p class="lesson-text">Na próxima aula, expandiremos esse conhecimento para a passagem de objetos, onde o "Xerox" copia o endereço, e não o conteúdo — um comportamento que, se não for bem compreendido, pode gerar efeitos colaterais surpreendentes.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Demonstração completa da passagem por valor',
      codigo: `public class PassagemPorValor {
    // Método que tenta alterar o valor recebido
    public static void aplicarBonificacao(int valor) {
        valor = valor + 500;
        System.out.println("Dentro do método: " + valor);
    }

    public static void main(String[] args) {
        int salario = 2000;
        System.out.println("Antes do método: " + salario);

        aplicarBonificacao(salario);

        System.out.println("Depois do método: " + salario);
    }
}

// Saída esperada:
// Antes do método: 2000
// Dentro do método: 2500
// Depois do método: 2000`,
      explicacao: 'O método aplicarBonificacao recebe uma cópia do valor 2000. A soma de 500 ocorre apenas na cópia local. A variável salario, no main, permanece inalterada — prova de que Java sempre passa argumentos por valor.'
    },
    {
      titulo: 'Passagem por valor com tipos diferentes',
      codigo: `public class TesteTipos {
    public static void alterarValores(int a, double b, boolean c) {
        a = 999;
        b = 99.99;
        c = false;
        System.out.println("Dentro: " + a + ", " + b + ", " + c);
    }

    public static void main(String[] args) {
        int x = 10;
        double y = 3.14;
        boolean z = true;

        alterarValores(x, y, z);

        System.out.println("Fora: " + x + ", " + y + ", " + z);
    }
}

// Saída:
// Dentro: 999, 99.99, false
// Fora: 10, 3.14, true`,
      explicacao: 'Independentemente do tipo primitivo (int, double, boolean), a regra é a mesma: o método recebe cópias. As alterações internas não afetam as variáveis originais do método chamador.'
    }
  ],

  exercicios: [
    {
      pergunta: 'O que significa "passagem de argumentos por valor" em Java?',
      alternativas: [
        'O método recebe a variável original e pode alterá‑la diretamente.',
        'O método recebe apenas uma cópia do valor contido na variável original.',
        'Apenas números inteiros podem ser passados como argumentos.'
      ],
      respostaCorreta: 1,
      explicacao: 'Java sempre cria uma réplica do valor e a entrega ao método. O original permanece protegido no escopo de quem o declarou.'
    },
    {
      pergunta: 'Qual será a saída do código abaixo?\n\nint n = 5;\nalterar(n);\nSystem.out.println(n);\n\n// Método:\nvoid alterar(int x) { x = 10; }',
      alternativas: [
        '10',
        '5',
        'Erro de compilação'
      ],
      respostaCorreta: 1,
      explicacao: 'O método alterar recebe uma cópia do valor 5. A atribuição x = 10 modifica apenas a cópia local. A variável n, no escopo original, continua valendo 5.'
    },
    {
      pergunta: 'Por que a passagem por valor é considerada um mecanismo de segurança?',
      alternativas: [
        'Porque criptografa os dados antes de enviá‑los ao método.',
        'Porque impede que métodos secundários corrompam acidentalmente os dados originais do fluxo principal.',
        'Porque exige senha para acessar as variáveis.'
      ],
      respostaCorreta: 1,
      explicacao: 'Ao trabalhar com cópias, o método nunca toca a variável original. Isso blinda as informações estratégicas do programa contra alterações indevidas.'
    }
  ]
};