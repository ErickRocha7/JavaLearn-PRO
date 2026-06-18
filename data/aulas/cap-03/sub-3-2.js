// Arquivo: data/aulas/cap-03/sub-3-2.js
// Aula 3.2 – Condições Aninhadas e Operador Ternário

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-3-2'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Condições Aninhadas e Operador Ternário</h2>
    <p class="lesson-text text-slate-500 italic">Camadas de decisão e o atalho para escolhas simples</p>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Na aula anterior, aprendemos a criar bifurcações na estrada do código usando <code class="code-inline">if</code>, <code class="code-inline">else if</code> e <code class="code-inline">else</code>. Conseguimos fazer o computador escolher entre dois ou mais caminhos com base em condições booleanas. Mas o mundo real raramente se contenta com uma única camada de decisão. As escolhas que fazemos dependem de múltiplos fatores que se cruzam e se sobrepõem, formando hierarquias de pré‑requisitos.</p>
    <p class="lesson-text">Imagine que você está na porta de uma agência bancária. A primeira decisão é: <em>"Se o banco estiver aberto, eu entro."</em> Uma vez lá dentro, você se depara com uma nova escolha: <em>"Se a fila do caixa estiver muito grande, vou ao caixa eletrônico; senão, espero pelo atendimento humano."</em> Note que a segunda decisão <strong>só existe</strong> porque a primeira foi bem‑sucedida. Na programação, estruturamos esse padrão através do <strong>aninhamento de condições</strong> e, para os casos mais simples e diretos, contamos com um atalho elegante chamado <strong>operador ternário</strong>.</p>
    <p class="lesson-text">Nesta aula, vamos mergulhar no conceito de aninhamento, entender seus mecanismos internos, os riscos que ele traz para a legibilidade do código e como domá‑lo com boas práticas. Depois, conheceremos o operador ternário — uma ferramenta de precisão para transformar blocos inteiros de <code class="code-inline">if/else</code> em uma única linha limpa e expressiva.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de abrir o código, vamos relembrar três conceitos que servirão de alicerce para tudo o que veremos adiante.</p>

    <h4 class="subsection-title">1. O tipo <code class="code-inline">boolean</code> e as expressões condicionais</h4>
    <p class="lesson-text">Toda estrutura condicional em Java se apoia em uma <strong>expressão booleana</strong> — uma pergunta cuja resposta só pode ser <code class="code-inline">true</code> ou <code class="code-inline">false</code>. Expressões como <code class="code-inline">idade >= 18</code>, <code class="code-inline">saldo < 0</code> ou <code class="code-inline">nome.equals("admin")</code> são avaliadas pelo processador e reduzidas a um desses dois valores. Esse resultado é o que determina se um bloco de código será executado ou ignorado.</p>

    <h4 class="subsection-title">2. Blocos de código e escopo</h4>
    <p class="lesson-text">As chaves <code class="code-inline">{ }</code> delimitam <strong>blocos de código</strong>. Tudo o que está dentro delas pertence a um <strong>escopo</strong> — um território com regras próprias de visibilidade e tempo de vida. Variáveis declaradas dentro de um bloco só existem enquanto a execução estiver ali dentro. Quando o bloco termina, elas são destruídas. Essa noção de escopo é essencial para entender o aninhamento.</p>

    <h4 class="subsection-title">3. A diferença entre instrução e valor</h4>
    <p class="lesson-text">Em Java, há uma distinção importante entre <strong>instruções</strong> (comandos que realizam ações, como exibir uma mensagem ou chamar um método) e <strong>expressões</strong> (trechos de código que produzem um valor, como <code class="code-inline">5 + 3</code> ou <code class="code-inline">x > y</code>). O operador ternário que estudaremos lida exclusivamente com expressões e valores, enquanto o <code class="code-inline">if</code> tradicional lida com instruções. Guarde essa diferença — ela será a chave para decidir qual ferramenta usar em cada situação.</p>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. O Conceito de Aninhamento: Portas Dentro de Portas</h4>
    <p class="lesson-text">O termo <strong>aninhamento</strong> (ou <em>nesting</em>, em inglês) vem da analogia com um ninho de pássaros ou com as famosas bonecas russas <em>Matrioscas</em>, onde uma boneca menor fica guardada perfeitamente dentro de uma maior. Em Java, <strong>aninhar</strong> significa colocar uma estrutura condicional inteira (<code class="code-inline">if</code>, <code class="code-inline">else if</code> ou <code class="code-inline">else</code>) dentro do bloco de chaves de outra estrutura condicional.</p>
    <p class="lesson-text">A regra de acesso é física e implacável: você não consegue ver, tocar ou abrir a boneca menor sem antes ter aberto todas as bonecas maiores que a cobrem. O computador lê o aninhamento exatamente dessa forma: como um <strong>sistema de pré‑requisitos</strong>. O <code class="code-inline">if</code> mais profundo é uma área ultrarrestrita que permanece invisível e blindada até que o <code class="code-inline">if</code> externo decida abrir as chaves e permitir a invasão do fluxo.</p>

    <div class="callout-analogy">
      <strong>Analogia do aeroporto internacional:</strong><br>
      <strong>A Primeira Porta (if externo):</strong> É a barreira da alfândega. Você precisa apresentar um passaporte válido. Se estiver vencido (<code class="code-inline">false</code>), você é barrado imediatamente. Ninguém pergunta para onde você vai ou o que tem na mala. Você volta para casa (<code class="code-inline">else</code> externo).<br>
      <strong>A Segunda Porta (if interno / aninhado):</strong> Se o passaporte for válido (<code class="code-inline">true</code>), você passa pela primeira linha de defesa e entra no saguão de embarque. Agora, <strong>e somente agora</strong>, você enfrenta o detector de metais e o raio‑X da bagagem. Essa segunda inspeção só faz sentido para quem já teve o passaporte aprovado.
    </div>

    <h4 class="subsection-title">2. Cenário Prático: Sistema de Concessão de Empréstimo Bancário</h4>
    <p class="lesson-text">Vamos analisar um cenário corporativo real: o algoritmo que um banco utiliza para decidir, em frações de segundo, se um cliente tem direito a um empréstimo. O banco estabelece uma <strong>hierarquia de eliminação rápida</strong>. O primeiro critério, eliminatório e absoluto, é a idoneidade financeira (o "nome limpo"). O segundo critério é a capacidade de pagamento (a faixa salarial).</p>
    <p class="lesson-text">Traduzimos essa lógica para Java com um <code class="code-inline">if</code> externo que verifica o nome e um <code class="code-inline">if</code> aninhado que verifica o salário:</p>

    <pre><code class="language-java">boolean nomeLimpo = true;
double salario = 4500.0;

// CAMADA 1: O Filtro Externo (A Boneca Maior)
if (nomeLimpo == true) {
    System.out.println("Fase 1 aprovada: Nome limpo no sistema.");

    // CAMADA 2: O Filtro Interno (A Boneca Menor / Aninhada)
    if (salario >= 3000.0) {
        System.out.println("Empréstimo CONCEDIDO! Renda compatível.");
    } else {
        System.out.println("Empréstimo NEGADO: Renda abaixo do mínimo.");
    }

} else {
    System.out.println("Empréstimo NEGADO de imediato: Nome com restrição.");
}</code></pre>

    <p class="lesson-text"><strong>O mecanismo de execução nos bastidores:</strong> Vamos acompanhar o ponteiro de leitura do processador em dois cenários opostos.</p>

    <h4 class="sub-subsection-title">Cenário A: O Cliente Perfeito (Fluxo de Entrada Total)</h4>
    <p class="lesson-text">Com <code class="code-inline">nomeLimpo = true</code> e <code class="code-inline">salario = 4500.0</code>:</p>
    <ol class="list-decimal ml-6 space-y-1 mb-4">
      <li><strong>A Barreira Inicial:</strong> O computador avalia <code class="code-inline">if (nomeLimpo == true)</code>. Lê o valor <code class="code-inline">true</code> e obtém <code class="code-inline">true == true</code> → veredicto <code class="code-inline">true</code>. As chaves se abrem.</li>
      <li><strong>A Invasão da Camada 1:</strong> O computador entra no bloco externo e imprime <em>"Fase 1 aprovada..."</em>.</li>
      <li><strong>O Choque com a Segunda Barreira:</strong> Na linha seguinte, encontra um novo <code class="code-inline">if (salario >= 3000.0)</code>. Ele está dentro de um território aninhado.</li>
      <li><strong>A Nova Consulta:</strong> O computador busca o valor de <code class="code-inline">salario</code> (4500.0) e avalia: "4500.0 >= 3000.0?" → <code class="code-inline">true</code>.</li>
      <li><strong>A Vitória Lógica:</strong> Entra no bloco interno e imprime <em>"Empréstimo CONCEDIDO!"</em>.</li>
      <li><strong>A Desmontagem:</strong> Passa pelas chaves de fechamento (interna e externa) e encerra a estrutura.</li>
    </ol>

    <h4 class="sub-subsection-title">Cenário B: O Cliente com Restrição (O Salto Gigantesco)</h4>
    <p class="lesson-text">Agora, imagine um cliente com renda de R$ 50.000,00, mas com o nome sujo. As variáveis são <code class="code-inline">nomeLimpo = false</code> e <code class="code-inline">salario = 50000.0</code>:</p>
    <ol class="list-decimal ml-6 space-y-1 mb-4">
      <li><strong>O Bloqueio Precoce:</strong> O computador avalia <code class="code-inline">if (nomeLimpo == true)</code>. Encontra <code class="code-inline">false == true</code> → veredicto <code class="code-inline">false</code>.</li>
      <li><strong>O Descarte em Massa:</strong> As chaves do bloco externo são trancadas. O computador <strong>se recusa a ler qualquer caractere</strong> ali dentro.</li>
      <li><strong>A Invisibilidade do Código:</strong> O computador <strong>nunca chega a ler a linha do salário</strong>. Ele não sabe e não se importa se o cliente ganha 50 mil reais. O <code class="code-inline">if</code> aninhado e o <code class="code-inline">else</code> interno foram completamente varridos da execução.</li>
      <li><strong>O Destino de Contingência:</strong> O computador salta por cima de todo o bloco externo e aterrissa no <code class="code-inline">else</code> externo, imprimindo <em>"Empréstimo NEGADO de imediato: Nome com restrição."</em>.</li>
    </ol>

    <p class="lesson-text">Essa arquitetura é o que garante a <strong>eficiência e a velocidade</strong> dos grandes sistemas. O aninhamento permite criar funis inteligentes que barram dados inválidos logo na primeira linha, evitando que o computador gaste ciclos de processamento avaliando regras secundárias para um cadastro que já é inválido por natureza.</p>

    <h4 class="subsection-title">3. Legibilidade: O Perigo da "Pirâmide do Destino"</h4>
    <p class="lesson-text">Quando aprendemos a aninhar estruturas condicionais, é comum sentirmos que ganhamos um superpoder. Afinal, agora conseguimos criar regras complexas e detalhadas. No entanto, existe um ditado famoso na programação: <strong>"O código é lido muito mais vezes do que é escrito."</strong> Escrever um código que o computador entenda é fácil; o verdadeiro desafio é escrever um código que outro ser humano consiga ler e entender sem sofrimento.</p>
    <p class="lesson-text">À medida que colocamos um <code class="code-inline">if</code> dentro de outro <code class="code-inline">if</code>, que por sua vez está dentro de outro <code class="code-inline">if</code>, caímos em uma armadilha visual e estrutural que a comunidade global de desenvolvedores apelidou de <strong>"Pirâmide do Destino"</strong> (<em>Pyramid of Doom</em>), também conhecida como <strong>Efeito Seta</strong>.</p>
    <p class="lesson-text">Esse fenômeno acontece por causa da <strong>indentação</strong> — o ato de empurrar o texto do código para a direita (usando a tecla <code class="code-inline">Tab</code> ou espaços) toda vez que abrimos uma chave <code class="code-inline">{</code>. Com muitos <code class="code-inline">if</code>s aninhados, o código é empurrado tanto para a direita que esbarra na borda da tela. Visualmente, as chaves de fechamento formam o desenho de uma pirâmide deitada.</p>

    <p class="lesson-text"><strong>O Código "Monstruoso" — O que evitar:</strong></p>
    <pre><code class="language-java">// CÓDIGO CONFUSO E DIFÍCIL DE MANTER:
if (temIngresso) {
    if (estaNoHorario) {
        if (idadeMinimaAtingida) {
            if (temAssentoDisponivel) {
                System.out.println("Aproveite o filme!");
            } else {
                System.out.println("Sala cheia.");
            }
        } else {
            System.out.println("Classificação indicativa inadequada.");
        }
    } else {
        System.out.println("Sessão já encerrou ou não começou.");
    }
} else {
    System.out.println("Sem ingresso.");
}</code></pre>

    <p class="lesson-text"><strong>Por que isso é ruim para um programador?</strong></p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>A Ginástica Mental do Casamento de Chaves:</strong> Para descobrir a qual <code class="code-inline">if</code> um <code class="code-inline">else</code> pertence, seus olhos precisam subir no texto e tentar alinhar verticalmente as chaves. Se o código tivesse 200 linhas, você se perderia completamente.</li>
      <li><strong>A Propensão a Bugs Ocultos:</strong> Se você esquecer de fechar uma única chave ou colocar um <code class="code-inline">else</code> alinhado no local errado, o sistema dará uma mensagem errada para o usuário, e o bug será difícil de rastrear.</li>
      <li><strong>Custo de Manutenção Altíssimo:</strong> Para adicionar uma nova regra (ex.: "Verificar se o cliente está de máscara"), você teria que enfiar mais um <code class="code-inline">if</code> no meio da pirâmide, empurrando todo o resto ainda mais para a direita.</li>
    </ul>

    <h4 class="subsection-title">4. A Solução Profissional: Cláusulas de Guarda e a Filosofia "Falhe Rápido"</h4>
    <p class="lesson-text">Programadores experientes odeiam códigos em formato de pirâmide. Eles preferem <strong>códigos planos, retos e limpos</strong>, que possam ser lidos como uma lista de tópicos de cima para baixo. Para destruir a Pirâmide do Destino, utilizamos uma filosofia de desenvolvimento chamada <strong>Fail Fast</strong> (Falhe Rápido), implementada através de <strong>Cláusulas de Guarda</strong> (<em>Guard Clauses</em>).</p>
    <p class="lesson-text">Em vez de perguntar se as coisas estão certas para avançar, nós <strong>invertemos o pensamento</strong>: perguntamos se algo está <strong>errado</strong> e, se estiver, barramos o fluxo imediatamente com a palavra‑chave <code class="code-inline">return</code>. O <code class="code-inline">return</code> funciona como um freio de mão de emergência: quando o computador o encontra, ele interrompe a execução do método na hora e vai embora.</p>
    <p class="lesson-text">Para fazer isso, usamos o <strong>operador de negação</strong> <code class="code-inline">!</code> (que significa "Não").</p>

    <pre><code class="language-java">// CÓDIGO LIMPO, RETO E ELEGANTE (Filosofia Cláusula de Guarda):

if (!temIngresso) {
    System.out.println("Sem ingresso.");
    return; // Para o programa aqui! Nada abaixo será lido.
}

if (!estaNoHorario) {
    System.out.println("Sessão já encerrou ou não começou.");
    return; // Para o programa aqui!
}

if (!idadeMinimaAtingida) {
    System.out.println("Classificação indicativa inadequada.");
    return; // Para o programa aqui!
}

if (!temAssentoDisponivel) {
    System.out.println("Sala cheia.");
    return; // Para o programa aqui!
}

// O CAMINHO ESTÁ LIVRE!
// Se o computador chegou vivo até esta linha, todos os testes passaram.
System.out.println("Aproveite o filme!");</code></pre>

    <p class="lesson-text"><strong>O impacto dessa mudança:</strong></p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Acabou o aninhamento:</strong> Não há nenhum <code class="code-inline">if</code> dentro de outro. Todos estão no mesmo nível.</li>
      <li><strong>Adeus emaranhado de chaves:</strong> Cada bloco resolve seu problema em duas linhas e fecha. Você nunca mais precisará adivinhar a quem um <code class="code-inline">else</code> pertence.</li>
      <li><strong>Fácil de expandir:</strong> Se o cinema quiser adicionar a regra da máscara, basta criar um novo bloco independente no topo: <code class="code-inline">if (!temMascara) { ... return; }</code>. O restante do código permanece intacto.</li>
    </ul>

    <div class="callout-success">
      <strong>Regra de ouro:</strong> Sempre que possível, substitua aninhamentos profundos por cláusulas de guarda. Valide as condições de erro primeiro e deixe o "caminho feliz" do código livre e desimpedido no final.
    </div>

    <h4 class="subsection-title">5. O Operador Ternário: O Atalho Veloz para Decisões Simples</h4>
    <p class="lesson-text">No dia a dia da programação, muitas decisões são extremamente simples e repetitivas. Muitas vezes, não queremos criar um grande desvio de fluxo com várias linhas — queremos apenas fazer uma escolha rápida para definir o valor de uma variável.</p>
    <p class="lesson-text">Imagine que você está desenvolvendo uma loja virtual e precisa calcular o frete: <em>"Se o cliente for assinante Premium, o frete é R$ 0,00; caso contrário, custa R$ 15,00."</em> Resolver isso com <code class="code-inline">if/else</code> tradicional consome cerca de seis a oito linhas. O código funciona, mas o visual fica poluído com chaves para uma decisão tão pequena.</p>
    <p class="lesson-text">É para esses cenários que o Java oferece o <strong>Operador Ternário</strong> — o único operador da linguagem que exige <strong>três elementos</strong> na mesma linha para funcionar. Ele é capaz de compactar um bloco inteiro de <code class="code-inline">if/else</code> em uma única linha limpa e veloz.</p>

    <p class="lesson-text"><strong>A estrutura sintática — a fórmula mágica:</strong></p>
    <div class="terminal-output">
variável = (expressão booleana) ? valorSeVerdadeiro : valorSeFalso;
    </div>

    <p class="lesson-text">Para ler esse código sem travar, imagine os símbolos como uma conversa direta com o computador:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Os parênteses <code class="code-inline">( )</code>:</strong> Contêm a pergunta booleana que será testada.</li>
      <li><strong>O ponto de interrogação <code class="code-inline">?</code>:</strong> Significa: "O teste que acabei de fazer deu <code class="code-inline">true</code>?"</li>
      <li><strong>O valor antes dos dois pontos <code class="code-inline">:</code>:</strong> É a recompensa — o valor escolhido se a resposta for <code class="code-inline">true</code>.</li>
      <li><strong>Os dois pontos <code class="code-inline">:</code>:</strong> Funcionam como a palavra "Senão". Separam o plano principal do plano de contingência.</li>
      <li><strong>O valor depois dos dois pontos:</strong> É o plano B — o valor escolhido se a resposta for <code class="code-inline">false</code>.</li>
    </ul>

    <p class="lesson-text"><strong>Comparativo prático: descobrir se um número é Par ou Ímpar.</strong></p>
    <p class="lesson-text">Abordagem tradicional com <code class="code-inline">if/else</code> (8 linhas):</p>
    <pre><code class="language-java">int numero = 7;
String resultado;

if (numero % 2 == 0) {
    resultado = "Par";
} else {
    resultado = "Ímpar";
}</code></pre>

    <p class="lesson-text">Abordagem com operador ternário (1 linha):</p>
    <pre><code class="language-java">int numero = 7;

String resultado = (numero % 2 == 0) ? "Par" : "Ímpar";

System.out.println(resultado); // Imprime: Ímpar</code></pre>

    <p class="lesson-text"><strong>O que aconteceu nos bastidores da memória?</strong></p>
    <ol class="list-decimal ml-6 space-y-1 mb-4">
      <li>O Java avalia a expressão booleana: <code class="code-inline">(7 % 2 == 0)</code>. O resto da divisão de 7 por 2 é 1. Como 1 não é igual a 0, o veredicto é <code class="code-inline">false</code>.</li>
      <li>Ao encontrar o <code class="code-inline">?</code>, o computador lembra da regra: "Deu <code class="code-inline">false</code>, então ignoro o primeiro valor disponível".</li>
      <li>O processador salta por cima da palavra <code class="code-inline">"Par"</code>, cruza a barreira dos dois pontos <code class="code-inline">:</code> e agarra a palavra <code class="code-inline">"Ímpar"</code>.</li>
      <li>Esse valor é injetado diretamente na variável <code class="code-inline">resultado</code>. Tudo resolvido em um único golpe de processamento.</li>
    </ol>

    <h4 class="subsection-title">6. Quando Usar e Quando Evitar o Operador Ternário</h4>
    <p class="lesson-text">O operador ternário é fascinante, mas como toda ferramenta de alta velocidade, exige responsabilidade. Muitos iniciantes se empolgam com a economia de linhas e passam a usar o ternário para resolver qualquer problema — o que é um erro grave.</p>

    <p class="lesson-text"><strong>✅ Use com orgulho quando:</strong></p>
    <ul class="topic-list space-y-2 mb-4">
      <li>For uma atribuição direta de valor a uma variável.</li>
      <li>O teste e as respostas couberem confortavelmente em uma única linha, sem rolar a tela.</li>
      <li>For para customizar mensagens simples: <code class="code-inline">System.out.println(logado ? "Bem‑vindo!" : "Faça login");</code>.</li>
    </ul>

    <p class="lesson-text"><strong>❌ Evite terminantemente quando:</strong></p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Aninhamento de ternários:</strong> Jamais coloque um ternário dentro de outro. <code class="code-inline">String nota = (media > 9) ? "A" : (media > 7) ? "B" : "C";</code> — isso é uma mensagem criptografada ilegível.</li>
      <li><strong>Há múltiplos comandos:</strong> Se o bloco precisa executar várias instruções (salvar no banco, enviar e‑mail, abrir uma tela), o ternário é inútil. Use <code class="code-inline">if/else</code>.</li>
      <li><strong>A lógica exige múltiplos testes:</strong> Para cadeias de decisões com várias condições, o <code class="code-inline">if/else if/else</code> é a escolha certa. Clareza sempre vence economia de linhas.</li>
    </ul>

    <div class="callout-warning">
      <strong>Regra de ouro do ternário:</strong> O operador ternário serve para <strong>retornar valores</strong>, não para executar grandes blocos de procedimentos. Se a sua decisão envolve ações complexas, orgulhe‑se de usar o bom e velho <code class="code-inline">if/else</code>.
    </div>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Aninhamento e a pilha de chamadas:</strong> Cada bloco aninhado adiciona um novo nível de escopo. A JVM gerencia isso através da pilha de execução (<em>call stack</em>), mas um número excessivo de níveis pode tornar o <em>debugging</em> mais complexo. As cláusulas de guarda achatam a pilha e simplificam o rastreamento.</li>
      <li><strong>O <code class="code-inline">return</code> dentro de <code class="code-inline">void</code>:</strong> Em métodos <code class="code-inline">void</code> (que não retornam valor), o <code class="code-inline">return;</code> pode ser usado sozinho apenas para interromper a execução. É uma ferramenta poderosa para implementar Fail Fast.</li>
      <li><strong>Operador ternário e tipagem:</strong> O Java exige que os dois valores do ternário (<code class="code-inline">valorSeVerdadeiro</code> e <code class="code-inline">valorSeFalso</code>) sejam de tipos compatíveis. Se um for <code class="code-inline">int</code> e o outro <code class="code-inline">String</code>, o compilador gerará erro.</li>
      <li><strong>Ternário como expressão:</strong> Diferente do <code class="code-inline">if</code>, o operador ternário é uma <strong>expressão</strong> — ele produz um valor que pode ser usado diretamente em atribuições, concatenações ou até mesmo como argumento de métodos. Isso o torna extremamente flexível em expressões inline.</li>
      <li><strong>Performance:</strong> Não há diferença significativa de performance entre <code class="code-inline">if/else</code> e o operador ternário. A escolha deve ser guiada exclusivamente por legibilidade e clareza de intenção.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Validação de formulários com pré‑requisitos:</strong> Primeiro verifique se o campo foi preenchido; só depois valide o formato do dado. Use aninhamento ou cláusulas de guarda para evitar validações desnecessárias.</li>
      <li><strong>Sistemas de desconto progressivo:</strong> Se o cliente é VIP, aplique 20%. Senão, se a compra é acima de R$ 500, aplique 10%. Senão, sem desconto. O encadeamento resolve; o ternário pode ser útil para atribuir o valor final do desconto.</li>
      <li><strong>Controle de acesso em sistemas corporativos:</strong> Verifique se o usuário está logado, depois se tem a permissão correta, depois se o recurso está disponível. As cláusulas de guarda são a abordagem padrão em APIs REST e sistemas web.</li>
      <li><strong>Mensagens dinâmicas em interfaces:</strong> Use o ternário para alternar entre textos como <em>"Ativo"</em> / <em>"Inativo"</em>, <em>"Online"</em> / <em>"Offline"</em> ou <em>"Pago"</em> / <em>"Pendente"</em> sem poluir o código com blocos condicionais.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Nesta aula, você aprendeu a criar hierarquias de decisão com o <strong>aninhamento de condições</strong>, compreendendo como o computador processa camadas sucessivas de pré‑requisitos e como isso pode ser usado para otimizar a lógica de um programa. Também conheceu os perigos da <strong>Pirâmide do Destino</strong> e a solução profissional com <strong>cláusulas de guarda</strong>, que mantêm o código limpo, plano e fácil de manter.</p>
    <p class="lesson-text">Além disso, você dominou o <strong>operador ternário</strong> — uma ferramenta de precisão para transformar decisões simples e diretas em uma única linha de código expressiva. Sabe agora quando usá‑lo e, mais importante ainda, quando <strong>não</strong> usá‑lo.</p>
    <p class="lesson-text">Com esses dois recursos, seu repertório de controle de fluxo está mais poderoso e flexível. Nas próximas aulas, aplicaremos tudo isso em laços de repetição e estudos de caso práticos.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Aninhamento correto com cláusula de guarda (Fail Fast)',
      codigo: `public class ControleAcesso {
    public static void main(String[] args) {
        boolean logado = true;
        boolean temPermissao = true;
        boolean recursoDisponivel = false;

        // Cláusulas de guarda: barrando erros primeiro
        if (!logado) {
            System.out.println("Erro: Faça login primeiro.");
            return;
        }

        if (!temPermissao) {
            System.out.println("Erro: Você não tem permissão.");
            return;
        }

        if (!recursoDisponivel) {
            System.out.println("Erro: Recurso indisponível no momento.");
            return;
        }

        // Caminho feliz
        System.out.println("Acesso concedido. Carregando painel...");
    }
}`,
      explicacao: 'O exemplo mostra a aplicação da filosofia Fail Fast com cláusulas de guarda. Cada condição de erro é verificada primeiro e interrompe o fluxo com return. Se todas passarem, o código segue limpo até o final. Essa abordagem é muito usada em sistemas profissionais.'
    },
    {
      titulo: 'Operador ternário em diferentes cenários',
      codigo: `public class OperadorTernario {
    public static void main(String[] args) {
        // Cenário 1: Atribuição simples de status
        int idade = 17;
        String status = (idade >= 18) ? "Maior de idade" : "Menor de idade";
        System.out.println("Status: " + status);

        // Cenário 2: Cálculo de frete
        boolean premium = true;
        double frete = premium ? 0.0 : 15.0;
        System.out.println("Frete: R$ " + frete);

        // Cenário 3: Mensagem inline no println
        int pontos = 120;
        System.out.println("Nível: " + (pontos > 100 ? "VIP" : "Regular"));

        // Cenário 4: Ternário como argumento de método
        String nome = null;
        String exibicao = (nome != null) ? nome : "Visitante";
        System.out.println("Olá, " + exibicao + "!");

        // ⚠️ EVITE: ternário aninhado (ilegível)
        // double media = 9.3;
        // String nota = (media > 9) ? "A" : (media > 7) ? "B" : "C"; // NÃO FAÇA ISSO!
    }
}`,
      explicacao: 'O programa demonstra quatro cenários práticos e seguros para o operador ternário: atribuição simples, cálculo condicional, mensagem inline e valor padrão para null. O último cenário, comentado, mostra o que NÃO fazer — ternário aninhado, que sacrifica a legibilidade.'
    }
  ],

  exercicios: [
    {
      pergunta: 'O que acontece no código abaixo? if (a > 0) { if (b > 0) { System.out.println("A"); } } else { System.out.println("B"); }',
      alternativas: [
        'Se a for negativo, imprime "B" e ignora completamente o if interno.',
        'Se b for positivo, imprime "A" independentemente do valor de a.',
        'O código gera erro de compilação por aninhamento incorreto.'
      ],
      respostaCorreta: 0,
      explicacao: 'O else está associado ao if externo. Se a > 0 for false, o bloco externo é ignorado e o computador vai direto para o else, imprimindo "B". O if interno (b > 0) nunca chega a ser avaliado.'
    },
    {
      pergunta: 'Qual é a principal desvantagem do aninhamento excessivo (Pirâmide do Destino)?',
      alternativas: [
        'O programa fica mais lento.',
        'O código fica difícil de ler, manter e propenso a erros de lógica.',
        'O Java não permite mais de três níveis de aninhamento.'
      ],
      respostaCorreta: 1,
      explicacao: 'O aninhamento excessivo empurra o código para a direita, dificultando a leitura, a identificação de qual else pertence a qual if e a manutenção futura. A solução profissional é usar cláusulas de guarda para achatar o código.'
    },
    {
      pergunta: 'O que o operador ternário (condição) ? valor1 : valor2 faz?',
      alternativas: [
        'Executa um loop com valor1 e valor2.',
        'Avalia a condição: se for true, retorna valor1; se for false, retorna valor2.',
        'Compara valor1 e valor2 e retorna o maior.'
      ],
      respostaCorreta: 1,
      explicacao: 'O operador ternário é uma forma compacta de if/else para expressões. Se a condição entre parênteses for true, ele retorna o primeiro valor; se for false, retorna o segundo. Tudo em uma única linha.'
    },
    {
      pergunta: 'Qual das situações abaixo NÃO é adequada para o uso do operador ternário?',
      alternativas: [
        'Atribuir o valor de uma variável com base em uma condição simples.',
        'Exibir uma mensagem inline dependendo de uma condição.',
        'Executar várias instruções (salvar no banco, enviar e-mail) dependendo de uma condição.'
      ],
      respostaCorreta: 2,
      explicacao: 'O operador ternário serve para retornar valores, não para executar blocos de procedimentos. Se a decisão envolve múltiplas ações, o if/else tradicional é a ferramenta correta.'
    }
  ]
};