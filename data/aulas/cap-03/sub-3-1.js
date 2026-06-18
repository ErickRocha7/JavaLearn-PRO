// Arquivo: data/aulas/cap-03/sub-3-1.js
// Aula 3.1 – Estruturas Condicionais: if, else if, else

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-3-1'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Estruturas Condicionais: if, else if, else</h2>
    <p class="lesson-text text-slate-500 italic">Como o computador toma decisões e altera o fluxo do programa</p>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Imagine que você está prestes a sair de casa. Olha pela janela e pensa: <em>"Se estiver chovendo, vou levar um guarda‑chuva. Caso contrário, vou só de óculos escuros."</em> Sem perceber, você acaba de criar uma estrutura condicional na sua mente. No dia a dia, tomamos decisões baseadas em circunstâncias o tempo todo. Na programação, o computador precisa fazer exatamente a mesma coisa.</p>
    <p class="lesson-text">Por padrão, o computador lê o código de cima para baixo, linha por linha, como uma receita de bolo. As <strong>estruturas condicionais</strong> são as ferramentas que nos permitem quebrar essa leitura linear, criando desvios no caminho. Com elas, um programa deixa de ser um roteiro rígido e passa a reagir aos dados, às entradas do usuário e às situações do mundo real.</p>
    <p class="lesson-text">Nesta aula, vamos explorar a estrutura <code class="code-inline">if</code>, seu complemento <code class="code-inline">else</code>, o encadeamento com <code class="code-inline">else if</code> e as regras de escopo que governam o uso das chaves <code class="code-inline">{ }</code>. Tudo isso forma a base para qualquer lógica de decisão dentro de um programa Java.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de abrir o código, precisamos alinhar três conceitos que formam a espinha dorsal das estruturas condicionais.</p>

    <h4 class="subsection-title">1. O tipo boolean: a linguagem das decisões</h4>
    <p class="lesson-text">Diferente dos seres humanos, que lidam bem com dúvidas e termos como "talvez" ou "mais ou menos", o processador de um computador é uma máquina puramente lógica. Ele opera em um sistema binário de certezas absolutas: uma informação ou é <strong>totalmente verdadeira</strong> ou é <strong>totalmente falsa</strong>. Não existe meio‑termo.</p>
    <p class="lesson-text">Na programação, essa certeza absoluta é representada pelo tipo de dado chamado <strong>boolean</strong> (em homenagem ao matemático George Boole). O universo booleano é composto por apenas duas palavras reservadas:</p>
    <ul class="topic-list mb-4">
      <li><strong><code class="code-inline">true</code></strong> — verdadeiro, sim, sinal verde.</li>
      <li><strong><code class="code-inline">false</code></strong> — falso, não, sinal vermelho.</li>
    </ul>
    <p class="lesson-text">Quando escrevemos uma condição dentro do Java, estamos criando uma <strong>expressão booleana</strong>. Podemos colocar uma fórmula complexa ali dentro, mas o resultado final sempre será reduzido a uma única palavra: <code class="code-inline">true</code> ou <code class="code-inline">false</code>.</p>

    <h4 class="subsection-title">2. Operadores de comparação: as perguntas que fazemos ao computador</h4>
    <p class="lesson-text">Para gerar um valor booleano, usamos operadores que comparam dois valores. Veja como traduzimos perguntas humanas para a lógica do Java:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>"A idade é maior ou igual a 18?"</strong> → <code class="code-inline">idade >= 18</code></li>
      <li><strong>"O saldo está zerado?"</strong> → <code class="code-inline">saldo == 0</code> (no Java, usamos dois sinais de igual para comparar)</li>
      <li><strong>"A temperatura é menor que 15 graus?"</strong> → <code class="code-inline">temperatura < 15</code></li>
    </ul>
    <p class="lesson-text">Se a variável <code class="code-inline">idade</code> vale 20, a expressão <code class="code-inline">idade >= 18</code> se transforma em <code class="code-inline">true</code>. Se valesse 16, se transformaria em <code class="code-inline">false</code>.</p>

    <h4 class="subsection-title">3. O conceito de fluxo: a estrada que se bifurca</h4>
    <p class="lesson-text">Imagine o processamento de um programa como uma viagem de carro por uma estrada reta de pista única. O computador é o motorista: começa no topo (primeira linha) e dirige em direção ao final (última linha), passando por cada instrução de forma sequencial.</p>
    <p class="lesson-text">Se o mundo funcionasse apenas de forma linear, os programas seriam extremamente burros — fariam sempre a mesma coisa, sem capacidade de adaptação. O <strong>desvio de fluxo</strong> é o mecanismo que transforma essa estrada reta em um mapa dinâmico, cheio de bifurcações e saídas. Quando o código chega a uma dessas bifurcações, o computador para e precisa decidir: continua reto ou vira em uma rua nova?</p>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. A estrutura <code class="code-inline">if</code>: a porta de entrada condicional</h4>
    <p class="lesson-text">A palavra <code class="code-inline">if</code> vem do inglês e significa literalmente "Se". Ela funciona como um segurança de festa posicionado na entrada de um bloco de código. A estrutura visual do <code class="code-inline">if</code> possui três partes fundamentais:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>A palavra‑chave <code class="code-inline">if</code>:</strong> avisa ao compilador que estamos diante de uma tomada de decisão.</li>
      <li><strong>Os parênteses <code class="code-inline">( )</code>:</strong> contêm a condição booleana que será testada.</li>
      <li><strong>As chaves <code class="code-inline">{ }</code>:</strong> delimitam o bloco de código que será executado apenas se a condição for verdadeira.</li>
    </ul>

    <pre><code class="language-java">int idade = 20;

if (idade >= 18) {
    System.out.println("Você é maior de idade. Entrada permitida!");
}</code></pre>

    <p class="lesson-text"><strong>O mecanismo interno passo a passo:</strong></p>
    <ol class="list-decimal ml-6 space-y-2 mb-4">
      <li><strong>A chegada:</strong> O computador executa o código linha por linha e esbarra na palavra <code class="code-inline">if</code>. Ele sabe que chegou a uma bifurcação.</li>
      <li><strong>A avaliação:</strong> O foco se volta para dentro dos parênteses: <code class="code-inline">(idade >= 18)</code>. O bloco de código interno ainda não é lido.</li>
      <li><strong>A consulta à memória:</strong> O computador vai até a RAM, busca o valor de <code class="code-inline">idade</code> (20) e substitui a variável. A pergunta vira <code class="code-inline">(20 >= 18)</code>.</li>
      <li><strong>O veredicto:</strong> A Unidade Lógica e Aritmética avalia: "20 é maior ou igual a 18?" A resposta é <code class="code-inline">true</code>.</li>
      <li><strong>A execução:</strong> Como o resultado foi <code class="code-inline">true</code>, as chaves se abrem. O computador executa o <code class="code-inline">System.out.println(...)</code>.</li>
      <li><strong>A retomada:</strong> Após a chave de fechamento <code class="code-inline">}</code>, o fluxo volta à estrada principal.</li>
    </ol>

    <p class="lesson-text"><strong>O cenário de rejeição:</strong> Se <code class="code-inline">idade</code> fosse 16, o veredicto seria <code class="code-inline">false</code>. O segurança trancaria a porta. O computador <strong>saltaria por cima de todo o bloco</strong>, ignorando completamente as linhas entre as chaves, e seguiria para a primeira instrução após o <code class="code-inline">}</code>.</p>

    <div class="callout-analogy">
      <strong>Analogia:</strong> O <code class="code-inline">if</code> é como um pedágio na estrada. Se você tem o valor da tarifa (<code class="code-inline">true</code>), a cancela abre e você segue por aquele trecho. Se não tem (<code class="code-inline">false</code>), a cancela permanece fechada e você é obrigado a seguir pela pista principal, ignorando o desvio.
    </div>

    <h4 class="subsection-title">2. A estrutura <code class="code-inline">else</code>: o porto seguro</h4>
    <p class="lesson-text">O <code class="code-inline">if</code> sozinho é uma estrutura incompleta para a maioria dos problemas reais, porque ele só sabe o que fazer quando a condição é verdadeira. Se a condição falhar, o programa simplesmente não faz nada — o que pode deixar o usuário sem resposta alguma na tela. Imagine um caixa eletrônico que, ao detectar saldo insuficiente, simplesmente ficasse mudo e estático. O silêncio em um software gera pânico.</p>
    <p class="lesson-text">Para resolver isso, o Java fornece o parceiro inseparável do <code class="code-inline">if</code>: a estrutura <code class="code-inline">else</code>, que significa "Caso contrário" ou "Senão".</p>

    <div class="callout-info">
      <strong>As três leis imutáveis do <code class="code-inline">else</code>:</strong>
      <ol class="list-decimal ml-6 mt-2 space-y-1">
        <li><strong>Ele nunca faz perguntas.</strong> Você jamais verá parênteses <code class="code-inline">( )</code> colados ao <code class="code-inline">else</code>. Ele não avalia condições; é puramente reacionário.</li>
        <li><strong>Ele é totalmente dependente.</strong> Um <code class="code-inline">else</code> não pode existir solto no código. Precisa estar grudado ao fechamento das chaves de um <code class="code-inline">if</code>.</li>
        <li><strong>Eles são mutuamente exclusivos.</strong> Em uma única execução, é impossível rodar o bloco do <code class="code-inline">if</code> e o do <code class="code-inline">else</code> ao mesmo tempo. O fluxo segue por um único caminho.</li>
      </ol>
    </div>

    <pre><code class="language-java">int idade = 16;

if (idade >= 18) {
    System.out.println("Entrada liberada!");
} else {
    System.out.println("Entrada proibida para menores.");
}</code></pre>

    <p class="lesson-text"><strong>O mecanismo com plano de contingência:</strong> Quando <code class="code-inline">idade</code> vale 16, a condição do <code class="code-inline">if</code> retorna <code class="code-inline">false</code>. O bloco do <code class="code-inline">if</code> é ignorado. Em vez de seguir em frente de mãos vazias, o computador esbarra na palavra <code class="code-inline">else</code>. O <code class="code-inline">else</code> funciona como uma rede de proteção: "Já que a condição anterior falhou, entre por aqui!". O computador executa o bloco do <code class="code-inline">else</code> e, só então, encerra a estrutura condicional.</p>
    <p class="lesson-text">O <code class="code-inline">else</code> garante que seu software sempre terá uma resposta de contingência, impedindo que o fluxo de dados fique sem rumo ou que o usuário final fique olhando para uma tela vazia sem saber o que aconteceu.</p>

    <h4 class="subsection-title">3. Encadeamento com <code class="code-inline">else if</code>: múltiplas escolhas</h4>
    <p class="lesson-text">A vida real não funciona apenas em "sim" ou "não". Muitas vezes temos três, quatro ou dezenas de alternativas. Um semáforo tem três estados (verde, amarelo, vermelho). Um sistema de notas tem várias faixas (A, B, C, D). Para resolver problemas com três ou mais caminhos, usamos o encadeamento com <code class="code-inline">else if</code> ("Senão, se...").</p>

    <pre><code class="language-java">double nota = 7.5;

if (nota >= 9.0) {
    System.out.println("Excelente! Conceito A.");
} else if (nota >= 7.0) {
    System.out.println("Muito bom! Conceito B.");
} else if (nota >= 5.0) {
    System.out.println("Aprovado no limite. Conceito C.");
} else {
    System.out.println("Reprovado. Conceito D.");
}</code></pre>

    <p class="lesson-text"><strong>O funcionamento interno do encadeamento:</strong> O Java adota um comportamento <strong>sequencial e de exclusividade mútua</strong>. Isso significa duas coisas:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li>As condições são avaliadas <strong>de cima para baixo</strong>, na ordem em que foram escritas.</li>
      <li><strong>Apenas um único bloco será executado.</strong> Assim que o computador encontra uma condição <code class="code-inline">true</code>, ele executa aquele bloco e <strong>sabota todas as outras perguntas abaixo</strong>, saltando direto para o final da estrutura.</li>
    </ul>

    <p class="lesson-text">No exemplo acima, com nota 7.5:</p>
    <ol class="list-decimal ml-6 space-y-1 mb-4">
      <li><strong>Sensor 1 (<code class="code-inline">if nota >= 9.0</code>):</strong> 7.5 >= 9.0? <code class="code-inline">false</code>. Ignora o bloco A e desce.</li>
      <li><strong>Sensor 2 (<code class="code-inline">else if nota >= 7.0</code>):</strong> 7.5 >= 7.0? <code class="code-inline">true</code>. Executa "Conceito B".</li>
      <li><strong>Salto de saída:</strong> O computador <strong>não avalia</strong> o próximo <code class="code-inline">else if</code>, mesmo sabendo que 7.5 também é maior que 5.0. Ele encerra a estrutura imediatamente.</li>
    </ol>

    <h4 class="subsection-title">4. O perigo do "Efeito Dominó" e a ordem das condições</h4>
    <p class="lesson-text">A ordem em que você escreve as condições <strong>altera completamente o resultado do programa</strong>. Como o computador encerra a checagem na primeira resposta <code class="code-inline">true</code>, construir a lógica na sequência errada criará comportamentos bizarros e injustos.</p>

    <pre><code class="language-java">// CÓDIGO COM BUG DE LÓGICA — NÃO FAÇA ISSO!
double nota = 9.5;

if (nota >= 5.0) {            // O erro começa aqui!
    System.out.println("Aprovado no limite. Conceito C.");
} else if (nota >= 7.0) {
    System.out.println("Muito bom! Conceito B.");
} else if (nota >= 9.0) {
    System.out.println("Excelente! Conceito A.");
} else {
    System.out.println("Reprovado. Conceito D.");
}</code></pre>

    <p class="lesson-text">Um aluno com nota 9.5 receberia "Conceito C" injustamente, porque a primeira condição (<code class="code-inline">nota >= 5.0</code>) já é verdadeira e barra a avaliação das demais. A condição <code class="code-inline">>= 5.0</code> é muito ampla — engloba 5, 6, 7, 8, 9 e 10. Colocá‑la no topo cria uma barreira que impede qualquer valor alto de chegar aos filtros mais específicos.</p>

    <div class="callout-warning">
      <strong>Regra de ouro do afunilamento:</strong> Comece sempre pelas condições mais <strong>restritas e específicas</strong> (valores extremos). Deixe que os valores escorram naturalmente para as condições mais amplas e genéricas à medida que forem sendo rejeitados pelos filtros anteriores. No código correto, o computador só testa <code class="code-inline">nota >= 7.0</code> porque o primeiro filtro (<code class="code-inline">>= 9.0</code>) já garantiu que a nota é menor que 9.0.
    </div>

    <h4 class="subsection-title">5. Regras de escopo: a importância das chaves <code class="code-inline">{ }</code></h4>
    <p class="lesson-text">Na linguagem Java, o <strong>escopo</strong> dita os limites de território do seu código. Quem define esses territórios são as chaves <code class="code-inline">{ }</code>. Elas funcionam como muros: tudo o que nasce dentro das chaves de um <code class="code-inline">if</code> pertence exclusivamente a ele.</p>

    <p class="lesson-text"><strong>Comportamento de instruções de linha única:</strong> O Java tem uma regra peculiar: se houver apenas <strong>uma única linha</strong> de código após o <code class="code-inline">if</code>, o uso das chaves se torna opcional.</p>

    <pre><code class="language-java">// Isto funciona perfeitamente em Java:
if (saldo < 0)
    System.out.println("Atenção: Você está no cheque especial!");</code></pre>

    <p class="lesson-text"><strong>A armadilha perigosa:</strong> Embora omitir as chaves seja permitido para uma única linha, isso cria brechas gigantescas para erros graves quando o código cresce.</p>

    <pre><code class="language-java">double saldo = 100.0;

if (saldo < 0)
    System.out.println("Você está negativado!");
    System.out.println("Cobrando taxa de juros..."); // Cuidado!</code></pre>

    <p class="lesson-text">Olhando visualmente pela indentação, parece que a cobrança de taxa só acontecerá se o saldo for negativo, certo? <strong>Errado.</strong> Como não usamos chaves, o Java vincula <strong>apenas a primeira linha</strong> ao <code class="code-inline">if</code>. A segunda linha (<code class="code-inline">Cobrando taxa de juros...</code>) é considerada um código normal e solto. Ela <strong>sempre será executada</strong>, mesmo que o saldo seja milionário!</p>

    <div class="callout-success">
      <strong>Regra de ouro do iniciante:</strong> Para evitar comportamentos imprevisíveis e bugs difíceis de encontrar, <strong>sempre utilize chaves <code class="code-inline">{ }</code></strong>, mesmo que o bloco condicional tenha apenas uma linha de código. Essa prática torna o código mais seguro, legível e profissional.
    </div>

    <pre><code class="language-java">// Forma segura, legível e profissional:
if (saldo < 0) {
    System.out.println("Você está negativado!");
    System.out.println("Cobrando taxa de juros...");
}</code></pre>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Avaliação de curto‑circuito em condições compostas:</strong> Quando combinamos múltiplas condições com <code class="code-inline">&&</code> e <code class="code-inline">||</code> dentro de um <code class="code-inline">if</code>, o Java aplica o curto‑circuito: avalia da esquerda para a direita e interrompe assim que o resultado final se torna certo. Isso pode ser usado para proteger operações perigosas — por exemplo, verificar se um objeto é diferente de <code class="code-inline">null</code> antes de chamar métodos sobre ele.</li>
      <li><strong>O <code class="code-inline">if</code> sem chaves e o <em>dangling else</em>:</strong> Quando há <code class="code-inline">if</code>s aninhados sem chaves, o <code class="code-inline">else</code> sempre se associa ao <code class="code-inline">if</code> mais próximo. Essa regra de associação pode gerar confusão em código mal indentado. O uso de chaves elimina qualquer ambiguidade.</li>
      <li><strong>Blocos de código e variáveis locais:</strong> Variáveis declaradas dentro de um bloco <code class="code-inline">{ }</code> pertencem exclusivamente àquele escopo. Elas nascem quando a execução entra no bloco e morrem quando o bloco termina. Tentar acessá‑las fora do bloco gera erro de compilação.</li>
      <li><strong>Performance:</strong> Estruturas condicionais têm custo quase nulo de processamento. A JVM é extremamente eficiente em prever desvios e otimizar a execução. A clareza do código deve sempre prevalecer sobre micro‑otimizações prematuras.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Validação de login:</strong> <code class="code-inline">if (senhaCorreta) { ... } else { ... }</code> — decide se o usuário entra ou recebe mensagem de erro.</li>
      <li><strong>Classificação de dados:</strong> categorizar produtos por faixa de preço, alunos por nota, clientes por score de crédito.</li>
      <li><strong>Controle de acesso:</strong> verificar permissões de usuário antes de liberar funcionalidades do sistema.</li>
      <li><strong>Regras de negócio:</strong> cálculo de frete (gratuito acima de certo valor), aplicação de descontos progressivos, validação de formulários.</li>
      <li><strong>Jogos:</strong> decidir se o jogador passou de fase, se o inimigo foi derrotado ou se o personagem sofreu dano.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">As estruturas condicionais são o coração da tomada de decisão em programação. Com <code class="code-inline">if</code>, você cria desvios baseados em condições booleanas. Com <code class="code-inline">else</code>, garante uma resposta de contingência para quando a condição falha. Com <code class="code-inline">else if</code>, constrói cadeias de múltiplas alternativas, avaliadas em sequência e com exclusividade mútua. E com o uso correto das chaves <code class="code-inline">{ }</code>, mantém o escopo sob controle e evita armadilhas de sintaxe que podem comprometer a lógica do programa.</p>
    <p class="lesson-text">Dominar esses conceitos é o primeiro passo para escrever programas verdadeiramente interativos, capazes de reagir a diferentes situações e tomar decisões inteligentes com base nos dados que recebem.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Estrutura completa com if, else if e else',
      codigo: `public class EstruturasCondicionais {
    public static void main(String[] args) {
        double nota = 7.5;

        // Encadeamento correto: do mais restrito para o mais amplo
        if (nota >= 9.0) {
            System.out.println("Excelente! Conceito A.");
        } else if (nota >= 7.0) {
            System.out.println("Muito bom! Conceito B.");
        } else if (nota >= 5.0) {
            System.out.println("Aprovado no limite. Conceito C.");
        } else {
            System.out.println("Reprovado. Conceito D.");
        }

        // Exemplo com else simples (duas possibilidades)
        int idade = 20;
        if (idade >= 18) {
            System.out.println("Maior de idade. Acesso liberado.");
        } else {
            System.out.println("Menor de idade. Acesso negado.");
        }
    }
}`,
      explicacao: 'O programa demonstra o encadeamento correto com else if (da condição mais restrita para a mais ampla) e o uso do else simples para duas possibilidades. A ordem das condições é fundamental para o resultado correto.'
    },
    {
      titulo: 'Armadilha do if sem chaves e a forma correta',
      codigo: `public class ArmadilhaChaves {
    public static void main(String[] args) {
        double saldo = 500.0;

        // VERSÃO PERIGOSA — a segunda linha SEMPRE executa
        System.out.println("=== Versão sem chaves ===");
        if (saldo < 0)
            System.out.println("Você está negativado!");
            System.out.println("Cobrando taxa de juros..."); // Executa sempre!

        // VERSÃO CORRETA — ambas as linhas pertencem ao if
        System.out.println("\\n=== Versão com chaves ===");
        if (saldo < 0) {
            System.out.println("Você está negativado!");
            System.out.println("Cobrando taxa de juros...");
        } else {
            System.out.println("Saldo positivo. Nenhuma taxa cobrada.");
        }
    }
}`,
      explicacao: 'A primeira versão demonstra a armadilha: sem chaves, apenas a primeira linha após o if é condicional. A segunda linha é executada sempre, independentemente do saldo. A versão corrigida usa chaves e else, garantindo o comportamento esperado.'
    }
  ],

  exercicios: [
    {
      pergunta: 'O que acontece se a condição dentro de um if for avaliada como false?',
      alternativas: [
        'O programa é encerrado com um erro.',
        'O bloco de código dentro das chaves do if é ignorado, e o programa continua na linha seguinte ao fechamento das chaves.',
        'O bloco de código dentro do if é executado mesmo assim.'
      ],
      respostaCorreta: 1,
      explicacao: 'Quando a condição do if é false, o computador salta por cima de todo o bloco entre chaves e segue para a primeira instrução após o }. O programa não é interrompido — aquele trecho simplesmente não é executado.'
    },
    {
      pergunta: 'Qual é a principal diferença entre else e else if?',
      alternativas: [
        'Não há diferença; ambos testam condições.',
        'O else if testa uma nova condição (tem parênteses com expressão booleana), enquanto o else não testa nada — apenas executa se todas as condições anteriores falharam.',
        'O else é usado para números e o else if para textos.'
      ],
      respostaCorreta: 1,
      explicacao: 'O else if (senão, se) recebe uma nova condição entre parênteses e só executa se ela for true. O else (senão) não recebe condição nenhuma; ele é o bloco de contingência que executa quando todas as condições anteriores falharam.'
    },
    {
      pergunta: 'Por que a ordem das condições em um encadeamento if / else if é tão importante?',
      alternativas: [
        'A ordem não importa; o Java sempre testa todas as condições antes de decidir.',
        'Porque o Java avalia as condições de cima para baixo e executa apenas o primeiro bloco cuja condição for true, ignorando todo o restante.',
        'Porque o Java executa os blocos na ordem inversa em que foram escritos.'
      ],
      respostaCorreta: 1,
      explicacao: 'O Java processa o encadeamento sequencialmente, de cima para baixo. Na primeira condição true, executa o bloco correspondente e encerra a estrutura. Se uma condição ampla for colocada antes de uma restrita, ela capturará valores que deveriam ir para os filtros mais específicos.'
    },
    {
      pergunta: 'O que acontece no código abaixo? if (x > 0) System.out.println("Positivo"); System.out.println("Fim");',
      alternativas: [
        'Ambas as mensagens aparecem apenas se x for maior que zero.',
        'A mensagem "Positivo" aparece apenas se x > 0, mas "Fim" aparece sempre, independentemente do valor de x.',
        'O código gera erro de compilação por falta de chaves.'
      ],
      respostaCorreta: 1,
      explicacao: 'Sem chaves, apenas a primeira linha após o if fica condicionada a ele. A segunda linha (System.out.println("Fim")) é um comando independente e será executada sempre, pois está fora do escopo do if. Essa é a razão pela qual se recomenda usar chaves mesmo para blocos de uma linha.'
    }
  ]
};