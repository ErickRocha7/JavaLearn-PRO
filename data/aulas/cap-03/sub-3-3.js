// Arquivo: data/aulas/cap-03/sub-3-3.js
// Aula 3.3 – Operadores de Incremento e Decremento

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-3-3'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Operadores de Incremento e Decremento</h2>
    <p class="lesson-text text-slate-500 italic">Como o Java conta passos, itens e segundos com atalhos matemáticos</p>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Imagine que você está jogando um videogame de futebol. Toda vez que um jogador faz um gol, o placar eletrônico muda instantaneamente de 0 para 1. Se ele fizer mais um gol, o placar vai para 2. Na programação, a ação de <strong>adicionar 1</strong> ou <strong>subtrair 1</strong> de uma variável é uma das tarefas mais comuns e repetitivas que existem. Ela acontece quando contamos os segundos de um cronômetro, quando controlamos o estoque de um produto que foi vendido ou quando criamos laços de repetição.</p>
    <p class="lesson-text">Para evitar que os programadores tenham que escrever códigos longos como <code class="code-inline">placar = placar + 1;</code> o tempo todo, os criadores do Java criaram dois atalhos ultra‑rápidos: os <strong>operadores de Incremento (<code class="code-inline">++</code>)</strong> e <strong>Decremento (<code class="code-inline">--</code>)</strong>.</p>
    <p class="lesson-text">À primeira vista, eles parecem mágicos e inofensivos. Porém, o Java esconde uma regra de ouro baseada na <strong>posição</strong> onde você digita esses sinais. Colocá‑los antes ou depois do nome da variável muda completamente o relógio interno do processador, e entender essa sutil diferença matemática é o que separa um programador amador de um profissional.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de explorar as nuances de tempo e posição, vamos relembrar três conceitos que servirão de alicerce para esta aula.</p>

    <h4 class="subsection-title">1. Atribuição e operações de soma</h4>
    <p class="lesson-text">Em Java, o operador <code class="code-inline">=</code> guarda um valor em uma variável. A expressão <code class="code-inline">x = x + 1</code> é lida da direita para a esquerda: "pegue o valor atual de <code class="code-inline">x</code>, some 1 e guarde o resultado de volta em <code class="code-inline">x</code>". Esse padrão é tão frequente que a linguagem oferece formas abreviadas: <code class="code-inline">x += 1</code> e, de forma ainda mais compacta, <code class="code-inline">x++</code> ou <code class="code-inline">++x</code>.</p>

    <h4 class="subsection-title">2. Linhas de código como sequências de micro‑operações</h4>
    <p class="lesson-text">O computador não lê uma linha inteira de uma só vez. Internamente, ele a divide em uma sequência de micro‑operações que são executadas em uma ordem rígida de milissegundos. Entender essa ordem é a chave para compreender por que a posição do <code class="code-inline">++</code> altera o resultado.</p>

    <h4 class="subsection-title">3. O ciclo de vida de uma variável durante uma instrução</h4>
    <p class="lesson-text">Quando uma variável participa de uma expressão, o computador precisa decidir em qual momento lê seu valor da memória e em qual momento grava um novo valor. Os operadores de incremento e decremento manipulam exatamente esse ciclo de leitura e escrita, permitindo controlar se queremos o valor "antes" ou "depois" da atualização.</p>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. Operador Prefixado: O "Ansioso" (<code class="code-inline">++var</code>, <code class="code-inline">--var</code>)</h4>
    <p class="lesson-text">O operador <strong>prefixado</strong> ocorre quando posicionamos os símbolos <code class="code-inline">++</code> ou <code class="code-inline">--</code> <strong>à esquerda</strong> do nome da variável. Chamamos essa abordagem de "ansiosa" ou de "prioridade máxima", porque ela tem o poder de subverter a ordem natural de leitura do computador, exigindo atenção imediata antes que qualquer outra operação da linha seja realizada.</p>

    <h4 class="sub-subsection-title">O comportamento nos bastidores</h4>
    <p class="lesson-text">Imagine que o computador está lendo uma linha de código complexa, cheia de cálculos. No momento em que os circuitos do processador colidem com um operador prefixado (como <code class="code-inline">++idade</code> ou <code class="code-inline">--estoque</code>), o comportamento do sistema muda drasticamente.</p>
    <p class="lesson-text">O sinal posicionado à frente funciona como um <strong>sinalizador de emergência</strong>. O computador ativa um "freio de mão mental" e congela temporariamente todas as outras operações daquela linha. Ele não faz mais nenhuma conta, não repassa valores para nenhuma outra variável e foca 100% da sua capacidade de processamento naquela variável específica. O processador vai até a memória RAM, adiciona (ou subtrai) 1, reescreve o novo valor e, somente após concluir essa atualização, solta o freio de mão para permitir que o restante da linha de código continue sendo processada. O valor antigo é destruído instantaneamente; o computador só trabalhará com o valor novo dali em diante.</p>

    <pre><code class="language-java">int atual = 10;
int resultado = ++atual; // Operador PREFIXADO</code></pre>

    <p class="lesson-text"><strong>O passo a passo da execução:</strong></p>
    <ol class="list-decimal ml-6 space-y-1 mb-4">
      <li>O Java cria a variável <code class="code-inline">atual</code> guardando o número <strong>10</strong>.</li>
      <li>Na linha seguinte, o computador começa a resolver o comando da direita. Ele esbarra em <code class="code-inline">++atual</code>.</li>
      <li>Por estar na frente (prefixado), o comando diz: <strong>"Pare tudo! Atualize a variável agora!"</strong>. O Java altera o valor de <code class="code-inline">atual</code> na memória de 10 para <strong>11</strong>.</li>
      <li>Agora que o valor foi modificado, o Java pega esse novo número (<strong>11</strong>) e o injeta para dentro da variável <code class="code-inline">resultado</code>.</li>
      <li>Ao final, <code class="code-inline">atual</code> vale <strong>11</strong> e <code class="code-inline">resultado</code> também vale <strong>11</strong>. Tudo em perfeita sincronia.</li>
    </ol>

    <h4 class="subsection-title">2. Operador Pós‑fixado: O "Paciente" e a Armadilha do Tempo (<code class="code-inline">var++</code>, <code class="code-inline">var--</code>)</h4>
    <p class="lesson-text">O operador <strong>pós‑fixado</strong> é o oposto: os sinais <code class="code-inline">++</code> ou <code class="code-inline">--</code> são digitados <strong>à direita</strong> do nome da variável. Chamamos esse comportamento de "paciente", "preguiçoso" ou de "efeito colateral atrasado". Para uma pessoa leiga, este é o operador que esconde a maior e mais perigosa armadilha temporal da linguagem Java.</p>

    <h4 class="sub-subsection-title">O comportamento nos bastidores</h4>
    <p class="lesson-text">Quando o sinal está atrás da variável, o computador estabelece uma <strong>regra de adiamento</strong>. Pense no processador como um funcionário de escritório muito focado e burocrático. Ao ver a variável com o sinal no final (como <code class="code-inline">atual++</code>), ele faz uma promessa mental: <em>"Eu vejo que preciso somar 1 a esta variável. Mas, como o sinal está no fim, vou ignorar essa ordem por enquanto. Primeiro, vou usar o valor atual e antigo desta variável para resolver todas as contas, fórmulas e atribuições desta linha. Só depois de bater o martelo no ponto e vírgula (<code class="code-inline">;</code>), cumprirei minha promessa e adicionarei 1 a ela."</em></p>
    <p class="lesson-text">Isso significa que, durante quase toda a execução daquela linha, a variável <strong>finge que nada aconteceu</strong> e continua oferecendo seu valor antigo para o sistema. O incremento vira um "efeito colateral" que só se concretiza na transição para a próxima linha.</p>

    <pre><code class="language-java">int atual = 10;
int resultado = atual++; // Operador PÓS-FIXADO</code></pre>

    <p class="lesson-text"><strong>O passo a passo da execução (o descompasso da memória):</strong></p>
    <ol class="list-decimal ml-6 space-y-1 mb-4">
      <li>O Java cria <code class="code-inline">atual</code> com o número <strong>10</strong>.</li>
      <li>Na linha seguinte, ele lê: <code class="code-inline">int resultado = atual++;</code>. Cria a variável <code class="code-inline">resultado</code> e olha para o lado direito.</li>
      <li>O processador bate o olho em <code class="code-inline">atual++</code>. Como o <code class="code-inline">++</code> está no final, ele diz: <em>"Anotado: preciso somar 1 em <code class="code-inline">atual</code> mais tarde. Por enquanto, a ordem é ignorar os sinais de mais. Qual é o valor de <code class="code-inline">atual</code> neste exato milissegundo? É <strong>10</strong>."</em></li>
      <li>O computador ignora o <code class="code-inline">++</code> temporariamente, pega o número <strong>10</strong> puro e o joga para dentro da variável <code class="code-inline">resultado</code>. A atribuição foi concluída!</li>
      <li>A linha chegou ao fim. O ponteiro do processador está prestes a cruzar o <code class="code-inline">;</code> para pular para a próxima linha. <strong>É neste milissegundo de transição</strong> que o computador cumpre sua promessa: ele vai até a memória RAM e atualiza <code class="code-inline">atual</code> de 10 para <strong>11</strong>.</li>
    </ol>

    <p class="lesson-text">Ao final, temos um cenário que parece contraditório: <code class="code-inline">atual</code> vale <strong>11</strong>, mas <code class="code-inline">resultado</code> ficou presa no passado e vale <strong>10</strong>. A variável <code class="code-inline">resultado</code> capturou o último suspiro do valor antigo antes de ele ser modificado.</p>

    <h4 class="subsection-title">3. O Perigo Real em Expressões Matemáticas</h4>
    <p class="lesson-text">Essa diferença de tempo gera bugs invisíveis e devastadores quando misturamos o operador pós‑fixado no meio de fórmulas matemáticas maiores. Veja este exemplo clássico:</p>

    <pre><code class="language-java">int x = 5;
int calculo = (x++) + 5;</code></pre>

    <p class="lesson-text">Se você apresentar esse código em uma entrevista de emprego, a maioria das pessoas responderá rápido: <em>"Se x vale 5 e tem um ++, ele vira 6. Então o cálculo é 6 + 5, que resulta em 11."</em> <strong>O computador pensa completamente diferente:</strong></p>
    <ol class="list-decimal ml-6 space-y-1 mb-4">
      <li>Ele olha para <code class="code-inline">(x++) + 5</code>.</li>
      <li>Como o <code class="code-inline">++</code> está pós‑fixado, o Java decide usar o valor <strong>atual</strong> de <code class="code-inline">x</code> para a matemática da linha: <strong>5</strong>.</li>
      <li>A conta que o processador realiza é: <strong>5 + 5</strong>. O resultado <strong>10</strong> é guardado em <code class="code-inline">calculo</code>.</li>
      <li>A linha chega ao fim. O computador lembra da promessa e atualiza <code class="code-inline">x</code> para <strong>6</strong>.</li>
    </ol>

    <p class="lesson-text">Resultado: <code class="code-inline">calculo</code> vale <strong>10</strong> e <code class="code-inline">x</code> vale <strong>6</strong>. Se a sua intenção original era fazer a conta com o número atualizado (6), o operador pós‑fixado sabotou silenciosamente a matemática do seu programa sem exibir nenhum aviso de erro na tela.</p>

    <div class="callout-warning">
      <strong>Regra de ouro da sobrevivência:</strong> Jamais misture operadores de incremento ou decremento no meio de atribuições ou fórmulas matemáticas complexas. Se você precisa aumentar o valor de uma variável e usar esse valor em outra conta, faça isso em <strong>linhas separadas</strong>, de forma explícita e clara. O bom código não é aquele que tenta ser misterioso ou economizar linhas a todo custo, mas sim aquele que qualquer pessoa consegue ler e prever o resultado sem precisar decifrar enigmas temporais do processador.
    </div>

    <h4 class="subsection-title">4. Aplicações Práticas: O Motor dos Contadores</h4>
    <p class="lesson-text">Embora a diferença entre prefixado e pós‑fixado pareça complexa no início, no cotidiano do desenvolvimento de software a aplicação desses operadores é muito mais pacífica e segura. A diretriz de engenharia de software utilizada por profissionais do mundo inteiro é: <strong>utilize os operadores de incremento e decremento em linhas isoladas</strong>. Quando o operador está sozinho em sua própria linha, a diferença temporal entre o "ansioso" e o "paciente" desaparece — o resultado final na memória é exatamente o mesmo.</p>

    <pre><code class="language-java">int x = 0;
x++; // x vira 1
++x; // x vira 2</code></pre>

    <p class="lesson-text">Neste cenário de linhas exclusivas, escrever <code class="code-inline">x++</code> ou <code class="code-inline">++x</code> gera exatamente o mesmo efeito final. Sem competidores na mesma instrução, o código se torna previsível, livre de bugs ocultos e muito fácil de ler. Abaixo, exploramos os três pilares do mundo real onde esses operadores deixam de ser apenas teoria e se tornam o verdadeiro motor dos sistemas modernos.</p>

    <h4 class="sub-subsection-title">4.1 Contadores de Eventos: A Catraca Eletrônica do Mundo Digital</h4>
    <p class="lesson-text">Pense em um ônibus intermunicipal equipado com uma catraca eletrônica rodando um software em Java. O sistema precisa contar rigorosamente cada passageiro que gira o metal da catraca para gerar o relatório de faturamento do fim do dia. Como traduzimos o ato físico de uma pessoa passar pela catraca para o mundo digital? Usamos uma variável contadora combinada com o operador de incremento em uma linha isolada:</p>

    <pre><code class="language-java">int totalPassageiros = 0; // O ônibus começa a viagem vazio

// Uma pessoa passou pela catraca:
totalPassageiros++;

// Outra pessoa passou pela catraca:
totalPassageiros++;</code></pre>

    <p class="lesson-text">Cada vez que o sensor físico da catraca detecta o movimento, ele dispara um sinal elétrico que avisa ao software: "Execute a linha <code class="code-inline">totalPassageiros++;</code> agora!". O computador vai até a memória RAM, pega o número atual, adiciona 1 e salva o novo valor no mesmo lugar. É uma operação limpa, atômica e focada. Esse mesmo princípio é usado em redes sociais (curtidas), portais de notícias (visualizações) e sistemas de segurança (tentativas de senha).</p>

    <h4 class="sub-subsection-title">4.2 Controle de Estoque e Carrinhos de Compra em E‑commerce</h4>
    <p class="lesson-text">Imagine que você está navegando em um aplicativo de compras e adiciona uma camiseta ao carrinho. Na tela, aparecem dois botões: um com o símbolo de <strong>mais (+)</strong> e outro com o de <strong>menos (-)</strong>. Esses botões são a representação visual perfeita do incremento e do decremento operando em tempo real na nuvem:</p>

    <pre><code class="language-java">int quantidadeCamisetas = 1; // Você adicionou a primeira peça

// Você clica no botão (+) para comprar mais uma:
quantidadeCamisetas++; // O estoque do seu carrinho na RAM sobe para 2

// Você muda de ideia e remove uma unidade clicando no (-):
quantidadeCamisetas--; // O sistema subtrai 1 e a quantidade volta para 1</code></pre>

    <p class="lesson-text">O operador <code class="code-inline">++</code> e o operador <code class="code-inline">--</code> atuam como gerenciadores de inventário instantâneo. Se o cliente clicar no botão <strong>-</strong> repetidamente até a variável atingir o valor 0, o próprio sistema detecta a mudança e remove o item visual da lista de compras. É uma forma matemática elegante de controlar volumes sem precisar reescrever grandes blocos de código.</p>

    <h4 class="sub-subsection-title">4.3 Combustível para Laços de Repetição: Evitando o Infinito</h4>
    <p class="lesson-text">Esta é, sem dúvida, a aplicação mais vital e estrutural dos operadores de incremento e decremento. Eles funcionam como o <strong>combustível e o critério de progresso</strong> para as estruturas de repetição (os laços <code class="code-inline">while</code> e <code class="code-inline">for</code>, que detalharemos nas próximas aulas).</p>
    <p class="lesson-text">Computadores são excelentes para fazer a mesma tarefa bilhões de vezes seguidas sem reclamar. No entanto, se você disser para ele: "Imprima um boleto enquanto o cliente não mandar parar", e esquecer de dar ao computador uma forma de contar quantos boletos ele já imprimiu, ele entrará em um estado catastrófico chamado <strong>Loop Infinito</strong>. Ele travará o processador em 100% de uso, consumirá toda a memória e derrubará o sistema.</p>
    <p class="lesson-text">Os operadores de incremento são o mecanismo que empurra o computador para a frente a cada rodada de repetição. Eles funcionam como o ato de riscar os dias passados em um calendário na parede:</p>

    <pre><code class="language-java">int voltasNaPista = 0;

// O computador recebe a ordem de correr até completar 3 voltas:
voltasNaPista++; // Completei a volta 1. Avançar!
voltasNaPista++; // Completei a volta 2. Avançar!
voltasNaPista++; // Completei a volta 3. Alvo atingido, pare a execução!</code></pre>

    <div class="callout-analogy">
      <strong>Metáfora do operário de fábrica:</strong> Um operário precisa carimbar 100 caixas. Ele pega a primeira caixa, coloca o carimbo e, imediatamente, aperta um contador mecânico no seu pulso: <code class="code-inline">caixasCarimbadas++;</code>. Ele olha para o contador: está em 1. Ele repete o processo até o contador marcar 100. Quando chega em 100, ele sabe que pode parar o trabalho e ir embora. No Java, o <code class="code-inline">++</code> é esse contador mecânico: a cada ciclo, o incremento altera o estado do sistema, avisando ao processador: "Eu já fiz essa tarefa uma vez. Mude o número da variável para que a condição de parada chegue mais perto e o programa possa avançar para a próxima fase com segurança". Sem o incremento, o software ficaria cego, incapaz de medir o próprio progresso no tempo.
    </div>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Precedência dos operadores:</strong> Os operadores de incremento e decremento têm uma das precedências mais altas em Java, sendo avaliados antes da maioria dos outros operadores. No entanto, a posição (prefixado ou pós‑fixado) afeta o <strong>momento</strong> em que a leitura do valor ocorre, e não a ordem de precedência em si.</li>
      <li><strong>Uso com tipos numéricos:</strong> <code class="code-inline">++</code> e <code class="code-inline">--</code> podem ser aplicados a variáveis de tipos inteiros (<code class="code-inline">int</code>, <code class="code-inline">long</code>, <code class="code-inline">short</code>, <code class="code-inline">byte</code>) e de ponto flutuante (<code class="code-inline">float</code>, <code class="code-inline">double</code>). Eles também funcionam com variáveis do tipo <code class="code-inline">char</code>, pois caracteres são representados internamente como números.</li>
      <li><strong>Não use em expressões complexas:</strong> Embora o Java permita escrever <code class="code-inline">int y = ++x * 2 + x--;</code>, esse tipo de código é considerado péssima prática. Ele é ilegível, propenso a erros e depende de regras obscuras de ordem de avaliação. Profissionais escrevem cada incremento em sua própria linha.</li>
      <li><strong>Efeito em variáveis <code class="code-inline">final</code>:</strong> Variáveis declaradas como <code class="code-inline">final</code> (constantes) não podem ser alteradas depois de inicializadas. Portanto, não podem ser usadas com operadores de incremento ou decremento — o compilador emitirá um erro.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Contadores de eventos:</strong> sistemas de catraca, contagem de curtidas, visualizações de páginas, tentativas de login.</li>
      <li><strong>Controle de inventário:</strong> carrinhos de compra em e‑commerce, controle de estoque em tempo real, ajuste de quantidade de itens.</li>
      <li><strong>Motores de laços de repetição:</strong> a cada iteração de um <code class="code-inline">while</code> ou <code class="code-inline">for</code>, o incremento move o programa em direção à condição de parada.</li>
      <li><strong>Animações e temporizadores:</strong> atualização de coordenadas em jogos (<code class="code-inline">x++;</code> para mover um personagem) e cronômetros.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Os operadores de incremento e decremento são atalhos poderosos que economizam digitação e deixam o código mais expressivo — desde que usados com sabedoria. A posição do sinal (<strong>prefixado</strong> ou <strong>pós‑fixado</strong>) determina se o valor da variável é atualizado antes ou depois de ser usado na linha atual, e ignorar essa diferença pode gerar bugs silenciosos e difíceis de rastrear.</p>
    <p class="lesson-text">A regra de ouro profissional é clara: <strong>use o incremento e o decremento em linhas isoladas</strong>, onde não haja outras variáveis disputando o valor na mesma instrução. Quando você faz isso, a diferença entre <code class="code-inline">++var</code> e <code class="code-inline">var++</code> desaparece, e o código se torna seguro, previsível e pronto para enfrentar os laços de repetição que estudaremos nas próximas aulas.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Diferença entre operador prefixado e pós-fixado',
      codigo: `public class TesteIncremento {
    public static void main(String[] args) {
        // Demonstrando a diferença de tempo entre prefixado e pós-fixado
        int a = 10;
        int b = ++a;  // prefixado: a vira 11, depois b recebe 11
        System.out.println("Prefixado: a = " + a + ", b = " + b);

        int c = 10;
        int d = c++;  // pós-fixado: d recebe 10, depois c vira 11
        System.out.println("Pós-fixado: c = " + c + ", d = " + d);

        // Operador de decremento segue a mesma lógica
        int e = 10;
        int f = --e;  // prefixado: e vira 9, depois f recebe 9
        System.out.println("Decremento prefixado: e = " + e + ", f = " + f);

        int g = 10;
        int h = g--;  // pós-fixado: h recebe 10, depois g vira 9
        System.out.println("Decremento pós-fixado: g = " + g + ", h = " + h);
    }
}`,
      explicacao: 'O programa demonstra que o prefixado altera a variável antes de usá-la, enquanto o pós-fixado usa o valor antigo primeiro e só atualiza depois. O decremento (--) segue exatamente a mesma regra.'
    },
    {
      titulo: 'Uso seguro: incremento e decremento em linhas isoladas',
      codigo: `public class ContadorSeguro {
    public static void main(String[] args) {
        // Forma segura e profissional: operador em linha isolada
        int contador = 0;

        contador++;  // 1
        contador++;  // 2
        contador++;  // 3
        System.out.println("Contador após 3 incrementos: " + contador);

        contador--;  // 2
        contador--;  // 1
        System.out.println("Contador após 2 decrementos: " + contador);

        // Em linha isolada, prefixado e pós-fixado produzem o MESMO resultado
        int x = 10;
        x++;   // x = 11
        ++x;   // x = 12
        System.out.println("x após x++ e ++x em linhas separadas: " + x);
    }
}`,
      explicacao: 'Quando o operador está sozinho em uma linha, sem outras variáveis ou expressões, a diferença entre prefixado e pós-fixado desaparece. O código fica limpo, previsível e livre de bugs — a abordagem recomendada por profissionais.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual o valor final de "a" e "b" após a execução do código? int a = 5; int b = ++a;',
      alternativas: [
        'a = 5, b = 5',
        'a = 6, b = 6',
        'a = 6, b = 5'
      ],
      respostaCorreta: 1,
      explicacao: 'O operador prefixado (++a) incrementa a variável a para 6 e, em seguida, usa esse valor atualizado para atribuir a b. Portanto, ambos terminam valendo 6.'
    },
    {
      pergunta: 'Qual o valor final de "x" e "y" após a execução do código? int x = 5; int y = x++;',
      alternativas: [
        'x = 5, y = 5',
        'x = 6, y = 5',
        'x = 6, y = 6'
      ],
      respostaCorreta: 1,
      explicacao: 'O operador pós-fixado (x++) faz com que y receba o valor atual de x (5). Somente depois da atribuição, x é incrementado para 6.'
    },
    {
      pergunta: 'Qual é a maneira mais segura e profissional de usar operadores de incremento e decremento?',
      alternativas: [
        'Sempre usá-los dentro de expressões matemáticas complexas.',
        'Sempre usar o pós-fixado, pois ele é mais rápido.',
        'Usá-los em linhas isoladas, onde a diferença entre prefixado e pós-fixado não causa bugs.'
      ],
      respostaCorreta: 2,
      explicacao: 'Quando o operador está em sua própria linha, sem outras variáveis ou expressões competindo pelo valor, a diferença entre prefixado e pós-fixado desaparece. Essa prática torna o código seguro, previsível e fácil de manter.'
    },
    {
      pergunta: 'Qual é o resultado da expressão "int resultado = (10++) + 2;"?',
      alternativas: [
        'O código gera um erro de compilação.',
        'O resultado é 13.',
        'O resultado é 12.'
      ],
      respostaCorreta: 0,
      explicacao: 'Os operadores ++ e -- só podem ser aplicados a variáveis, e não a valores literais como o número 10. O compilador Java emitirá um erro informando que o operando é inválido.'
    }
  ]
};