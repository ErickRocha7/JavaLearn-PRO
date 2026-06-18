// Arquivo: data/aulas/cap-03/sub-3-5.js
// Aula 3.5 – Laço for e Escopo de Variáveis

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-3-5'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Laço for e Escopo de Variáveis</h2>
    <p class="lesson-text text-slate-500 italic">O painel de controle centralizado para repetições com limites conhecidos</p>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Imagine que você é um professor e está diante de uma pilha com exatamente 40 provas para corrigir. Você sabe o número exato de documentos desde o início. A sua rotina mental será: <em>"Vou começar na prova número 1, vou avançar de uma em uma e vou parar assim que terminar a prova número 40."</em></p>
    <p class="lesson-text">Na aula anterior, aprendemos a usar o laço <code class="code-inline">while</code> para repetir códigos. O <code class="code-inline">while</code> é fantástico para situações onde não sabemos quando o evento vai acabar — como lavar pratos até a pilha esvaziar. Porém, quando sabemos o número exato de repetições antes mesmo de o loop começar, usar o <code class="code-inline">while</code> exige escrever código em várias linhas separadas, o que abre margem para esquecermos a linha de atualização e travarmos o computador em um loop infinito.</p>
    <p class="lesson-text">Para resolver isso e tornar a vida do desenvolvedor mais simples, o Java oferece o laço <code class="code-inline">for</code> (que significa "Para" em inglês). O <code class="code-inline">for</code> é uma evolução de engenharia: ele pega os três elementos obrigatórios de um laço saudável — <strong>inicialização</strong>, <strong>teste condicional</strong> e <strong>atualização</strong> — e os compacta de forma inteligente em uma única linha de comando.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de explorar a estrutura do <code class="code-inline">for</code>, vamos relembrar dois conceitos que serão essenciais para esta aula.</p>

    <h4 class="subsection-title">1. Os três pilares de um laço saudável</h4>
    <p class="lesson-text">Como vimos no <code class="code-inline">while</code>, todo laço de repetição precisa de três elementos para funcionar corretamente: uma <strong>variável de controle</strong> inicializada antes do laço, um <strong>teste condicional</strong> que decide se o bloco será executado e uma <strong>atualização</strong> que modifica a variável a cada rodada. O <code class="code-inline">for</code> simplesmente reúne esses três elementos no mesmo local.</p>

    <h4 class="subsection-title">2. O conceito de escopo</h4>
    <p class="lesson-text">O <strong>escopo</strong> na programação dita o tempo de vida e o território de visibilidade de uma variável. Quando uma variável é declarada dentro de um bloco delimitado por chaves <code class="code-inline">{ }</code>, ela pertence exclusivamente àquele bloco e deixa de existir quando a execução sai dele. Esse conceito será fundamental para entender o comportamento da variável de controle do <code class="code-inline">for</code>.</p>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. A Sintaxe de Três Partes: O Painel de Controle Centralizado</h4>
    <p class="lesson-text">Se no laço <code class="code-inline">while</code> as instruções de contagem ficavam espalhadas pela tela — a inicialização antes do laço, a pergunta no topo e o incremento escondido na última linha do bloco —, o <code class="code-inline">for</code> decide revolucionar a organização espacial do código. Ele compacta toda essa engrenagem de controle dentro de um único par de parênteses <code class="code-inline">( )</code>.</p>

    <div class="callout-analogy">
      <strong>Analogia do painel de avião:</strong> No modelo antigo (o <code class="code-inline">while</code>), para operar a máquina você precisava acionar um botão em uma parede, conferir um medidor no teto e puxar uma alavanca escondida perto do chão. Se esquecesse qualquer um desses passos, a fábrica inteira parava. O laço <code class="code-inline">for</code> funciona como um painel de controle centralizado de um avião moderno: todos os botões, manômetros e chaves que comandam a repetição estão posicionados exatamente no mesmo lugar, bem na sua frente, no cabeçalho da estrutura.
    </div>

    <p class="lesson-text">Para que essa centralização funcione, os criadores do Java estabeleceram uma regra gramatical rígida: os três elementos do cabeçalho devem ser obrigatoriamente separados por <strong>dois pontos e vírgulas</strong> (<code class="code-inline">;</code>). Veja o esqueleto visual padrão:</p>

    <pre><code class="language-java">for (inicializacao; condicao_parada; incremento_ou_decremento) {
    // Território de repetição: o código que roda em círculos fica aqui
}</code></pre>

    <p class="lesson-text">Vamos ver esse painel em ação reescrevendo o contador da aula passada com a estrutura elegante do <code class="code-inline">for</code>:</p>

    <pre><code class="language-java">for (int contador = 1; contador <= 3; contador++) {
    System.out.println("Contando com o for: " + contador);
}</code></pre>

    <h4 class="subsection-title">2. O Relógio Interno: A Ordem Secreta de Execução nos Bastidores</h4>
    <p class="lesson-text">Aqui reside o maior segredo técnico do laço <code class="code-inline">for</code>. Só porque a inicialização, a condição e o incremento estão digitados colados na mesma linha reta, nossa mente humana tende a achar que o computador lê tudo de uma vez só, da esquerda para a direita. <strong>O computador não faz isso.</strong> O processador executa um intrincado balé cronológico entre o cabeçalho e o bloco de chaves.</p>

    <div class="terminal-output">
    [ INÍCIO ]
         │
         ▼
 1. Inicialização ───> (Acontece apenas UMA vez na largada)
         │
 ┌──────>▼
 │   2. Teste Condicional ──(Se der FALSE)──> [ SAÍDA DO LOOP ]
 │       │
 │   (Se der TRUE)
 │       ▼
 │   3. Execução do Bloco { ... }
 │       │
 │       ▼
 └─ 4. Incremento/Decremento
    </div>

    <p class="lesson-text"><strong>🏎️ Passo 1 — A Largada Absoluta (acontece apenas UMA vez):</strong> Quando o computador colide com a palavra <code class="code-inline">for</code>, ele entra nos parênteses e executa apenas a primeira parte: <code class="code-inline">int contador = 1;</code>. Uma caixinha nasce na memória RAM guardando o número 1. O computador risca essa instrução da sua agenda; ele <strong>nunca mais voltará a ler essa primeira parte</strong> enquanto o loop estiver rodando.</p>
    <p class="lesson-text"><strong>🏎️ Passo 2 — O Teste de Segurança (a catraca):</strong> Sem sair da linha do cabeçalho, o processador salta para a segunda parte: <code class="code-inline">contador <= 3</code>. Ele consulta a memória, descobre que o valor atual é 1 e calcula: "1 é menor ou igual a 3?". A resposta é <code class="code-inline">true</code>. O sinal verde acende.</p>
    <p class="lesson-text"><strong>🏎️ Passo 3 — O Desvio para Baixo (a invasão das chaves):</strong> Ao receber o sinal verde, o computador realiza um movimento curioso: ele <strong>ignora completamente a terceira parte</strong> do cabeçalho (<code class="code-inline">contador++</code>) por enquanto. Ele salta por cima dela, abre a chave <code class="code-inline">{</code>, desce para o bloco interno e executa a linha imprimindo: <em>"Contando com o for: 1"</em>.</p>
    <p class="lesson-text"><strong>🏎️ Passo 4 — O Efeito Estilingue da Chave de Fechamento:</strong> O computador atinge a chave de fechamento <code class="code-inline">}</code>. Essa chave funciona como um estilingue mecânico que arremessa o fluxo de dados de volta para o cabeçalho do <code class="code-inline">for</code>. Mas atenção: o fluxo <strong>aterrissa direto na terceira parte</strong>: <code class="code-inline">contador++</code>. O processador executa o incremento e atualiza o valor na memória RAM de 1 para <strong>2</strong>.</p>
    <p class="lesson-text"><strong>🏎️ Passo 5 — O Reinício do Ciclo Circular:</strong> Agora que a variável foi atualizada, o computador move seu ponteiro para a segunda parte e refaz a pergunta: <code class="code-inline">(2 <= 3)</code>? <code class="code-inline">true</code>. Ele desce novamente, imprime <em>"Contando com o for: 2"</em>, bate na chave <code class="code-inline">}</code> e é arremessado de volta para o <code class="code-inline">contador++</code>, que altera o valor para <strong>3</strong>.</p>
    <p class="lesson-text"><strong>🏎️ Passo 6 — O Limite da Faixa:</strong> O computador testa <code class="code-inline">(3 <= 3)</code> → <code class="code-inline">true</code>. Entra, imprime <em>"Contando com o for: 3"</em>, bate na chave <code class="code-inline">}</code> e volta para o incremento. O <code class="code-inline">contador++</code> eleva o valor para <strong>4</strong>.</p>
    <p class="lesson-text"><strong>🚪 A Saída:</strong> Ao retornar para o teste, o computador avalia <code class="code-inline">(4 <= 3)</code> → <code class="code-inline">false</code>! O segurança da catraca fecha a porta. O feitiço da repetição é quebrado. O computador se recusa a entrar no bloco e salta para continuar lendo as próximas instruções abaixo do loop.</p>

    <div class="callout-success">
      <strong>Blindagem contra falhas por distração:</strong> No laço <code class="code-inline">while</code>, o programador precisa lembrar ativamente de digitar o incremento na última linha do bloco. Se esquecer, o programa compila normalmente e trava a máquina em um loop infinito. No laço <code class="code-inline">for</code>, a própria estrutura da linguagem protege o desenvolvedor: para que o programa compile, o Java exige que você monte o painel de controle completo com suas duas divisões de ponto e vírgula. Ao forçar a declaração do combustível de parada logo no cabeçalho, o risco de criar um travamento por esquecimento despenca drasticamente.
    </div>

    <h4 class="subsection-title">3. Escopo Local: O Ciclo de Vida da Variável no Cabeçalho</h4>
    <p class="lesson-text">Para compreender o conceito de <strong>escopo</strong>, a melhor metáfora é pensar em direitos de cidadania ou vistos territoriais. O escopo dita rigorosamente as fronteiras de visibilidade de uma informação e o seu tempo exato de vida dentro do computador. Ele define em quais linhas do arquivo uma variável é reconhecida e em quais linhas ela é uma completa desconhecida.</p>
    <p class="lesson-text">Quando escrevemos o cabeçalho de um laço <code class="code-inline">for</code> e criamos a variável de controle na primeira parte do painel — por exemplo, <code class="code-inline">int contador = 1</code> —, estamos concedendo a essa variável um <strong>visto de permanência estritamente restrito</strong>. Estamos criando uma variável de <strong>Escopo Local</strong> (também chamado de escopo de bloco).</p>
    <p class="lesson-text">Isso significa que a variável nasce, vive e morre <strong>exclusivamente</strong> dentro do território demarcado por aquele laço <code class="code-inline">for</code>. O "universo" dessa variável se resume ao espaço entre a chave de abertura <code class="code-inline">{</code> e a chave de fechamento <code class="code-inline">}</code>. Enquanto o computador estiver andando em círculos ali dentro, a variável é a dona do pedaço. Mas ela <strong>não tem permissão para cruzar a fronteira final</strong> do laço.</p>

    <h4 class="sub-subsection-title">O Fenômeno do "Desaparecimento" da Variável</h4>
    <p class="lesson-text">Muitos estudantes iniciantes tomam um grande susto quando tentam usar o valor final da variável de contagem após o término do laço. Vamos observar o exemplo clássico que utiliza a letra <code class="code-inline">i</code> (uma convenção mundial na programação para abreviar a palavra <em>índice</em>):</p>

    <pre><code class="language-java">for (int i = 1; i <= 3; i++) {
    System.out.println("O valor de i é: " + i);
}

// 🚨 ERRO CRÍTICO! A linha abaixo NÃO compila!
System.out.println("Qual o valor final de i? " + i);</code></pre>

    <p class="lesson-text">Se você digitar esse código e tentar rodar, o Java exibirá uma mensagem de erro: <em>"cannot find symbol: variable i"</em> (Não consigo encontrar o símbolo: variável i). Para a nossa mente humana, isso parece absurdo — a variável acabou de ser usada na linha de cima! Mas o computador funciona sob regras de descarte milimétricas.</p>
    <p class="lesson-text">No momento em que o teste do <code class="code-inline">for</code> resulta em <code class="code-inline">false</code> (quando <code class="code-inline">i</code> vira 4 e o laço decide parar), o computador é ejetado para fora do bloco. Ao cruzar a chave de fechamento <code class="code-inline">}</code>, essa chave atua como um <strong>triturador automático de arquivos</strong>. O compilador entende que a missão do laço foi cumprida e que aquela variável local não tem mais utilidade. O processador envia um comando para a memória RAM limpando o endereço físico onde a caixinha <code class="code-inline">i</code> estava guardada. O registro é apagado, a etiqueta com o nome é destruída e aquele espaço é liberado para outros aplicativos usarem.</p>
    <p class="lesson-text">Por isso, quando o computador desce para a linha seguinte e tenta ler <code class="code-inline">System.out.println(i);</code>, ele olha para a memória RAM e aquela caixinha simplesmente <strong>não existe mais</strong>. Para o Java, tentar ler o <code class="code-inline">i</code> ali é como tentar ler uma palavra em um idioma que não existe: o sistema entra em pane e interrompe a execução.</p>

    <h4 class="sub-subsection-title">As Duas Grandes Vantagens Técnicas do Escopo Local</h4>
    <p class="lesson-text">Embora o desaparecimento da variável pareça uma limitação severa, na verdade esse mecanismo é uma das maiores conquistas da engenharia de software. Ele protege o computador e ajuda o programador em dois pilares fundamentais:</p>

    <ul class="topic-list space-y-3 mb-4">
      <li><strong>1. Faxina Automática e Eficiência de Memória:</strong> Imagine se cada pequena variável criada para fazer uma contagem boba ficasse salva para sempre na memória RAM enquanto o programa estivesse aberto. Se você navegasse por um aplicativo de rede social por duas horas, o sistema acumularia bilhões de variáveis inúteis. A memória do celular ficaria lotada, o aparelho travaria e o aplicativo fecharia sozinho. O escopo local garante que o Java faça uma faxina em tempo real: o espaço de memória é usado apenas pelo tempo estrito necessário e é devolvido imediatamente ao sistema assim que a chave <code class="code-inline">}</code> é atingida.</li>
      <li><strong>2. Reciclagem Total de Nomes (Isolamento de Código):</strong> Se todas as variáveis fossem globais — ou seja, se ficassem vivas o tempo todo e fossem vistas por todo o programa —, você nunca poderia repetir o nome de uma variável. Se usasse a letra <code class="code-inline">i</code> no primeiro laço, estaria proibido de usar <code class="code-inline">i</code> em qualquer outro lugar. Graças ao escopo local, você pode criar vinte laços <code class="code-inline">for</code> em sequência, todos usando <code class="code-inline">for (int i = 0; ...)</code>. Como cada <code class="code-inline">i</code> morre ao final de seu respectivo laço, o próximo <code class="code-inline">for</code> pode criar um novo <code class="code-inline">i</code> do zero com total segurança. Eles funcionam em compartimentos estanques, como vizinhos em prédios diferentes.</li>
    </ul>

    <h4 class="subsection-title">4. Casos de Uso: Quando Escolher o <code class="code-inline">for</code> com Confiança</h4>
    <p class="lesson-text">Uma das maiores dúvidas de quem está começando é: <em>"Se tanto o <code class="code-inline">while</code> quanto o <code class="code-inline">for</code> servem para repetir código, qual deles eu devo usar?"</em> A resposta não está em uma regra técnica complexa, mas sim na <strong>previsibilidade do seu problema</strong>.</p>
    <p class="lesson-text">A regra de ouro é simples: <strong>o laço <code class="code-inline">for</code> é o candidato ideal sempre que o seu algoritmo se deparar com iterações que possuam limites conhecidos, exatos ou previamente determinados.</strong> Se você consegue preencher mentalmente a frase <em>"Eu preciso que o computador repita essa ação exatamente X vezes"</em>, você tem em mãos um cenário perfeito para usar o <code class="code-inline">for</code>.</p>

    <div class="callout-analogy">
      <strong>O contraste prático — while vs for:</strong><br>
      <strong>Cenário do <code class="code-inline">while</code> (O Jogo de Dados):</strong> Você está jogando dados e a regra é: "Vou continuar jogando enquanto não tirar o número 6". Quantas vezes você vai jogar? Você não sabe. Pode tirar 6 na primeira tentativa (1 rodada), pode demorar dez jogadas (10 rodadas) ou passar a noite inteira tentando. Como o final é um mistério imprevisível, esse problema exige o <code class="code-inline">while</code>.<br><br>
      <strong>Cenário do <code class="code-inline">for</code> (A Corrida de Fórmula 1):</strong> O diretor de prova avisa: "Você precisa dar exatamente 50 voltas nesta pista para vencer". O número de repetições é conhecido? Sim, com certeza absoluta. Você sabe onde começa (volta 1), como progride (uma volta por vez) e onde termina (volta 50). Esse problema é o território nativo do <code class="code-inline">for</code>.
    </div>

    <p class="lesson-text"><strong>Os três grandes cenários do mundo real para o <code class="code-inline">for</code>:</strong></p>

    <ul class="topic-list space-y-3 mb-4">
      <li><strong>1. Contagens Matemáticas Fixas e Cronômetros:</strong> Gerar a tabuada do 7 (multiplicar de 1 a 10), criar um cronômetro regressivo de 60 segundos, exibir todos os anos bissextos entre 1900 e 2000. O intervalo é fechado e conhecido de antemão.</li>
      <li><strong>2. Varredura de Listas e Estruturas de Dados Coletivas:</strong> Percorrer os itens de um carrinho de compras (5 produtos), listar os nomes dos 15 funcionários de uma filial, processar os preços de uma nota fiscal. O tamanho da coleção é conhecido e o <code class="code-inline">for</code> lê cada elemento do início ao fim com precisão milimétrica.</li>
      <li><strong>3. Geração de Relatórios Periódicos e Ciclos Naturais:</strong> Processar os dados dos 12 meses do ano para um balanço contábil, rodar uma rotina de segurança nos 7 dias da semana, gerar faturas para os 30 dias de um mês. Como o nosso calendário é dividido em regras fixas, o <code class="code-inline">for</code> é o motor perfeito para esses períodos.</li>
    </ul>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>As três partes do cabeçalho são opcionais:</strong> Tecnicamente, você pode escrever <code class="code-inline">for (;;)</code> — um laço infinito com as três partes vazias. Isso é equivalente a <code class="code-inline">while (true)</code>. No entanto, essa prática deve ser evitada a menos que haja uma razão muito específica.</li>
      <li><strong>Múltiplas variáveis no cabeçalho:</strong> O <code class="code-inline">for</code> permite declarar e atualizar mais de uma variável na inicialização e no incremento, separando‑as por vírgula: <code class="code-inline">for (int i = 0, j = 10; i < j; i++, j--)</code>. Embora poderoso, esse recurso deve ser usado com moderação para não comprometer a legibilidade.</li>
      <li><strong>Variável declarada fora do <code class="code-inline">for</code>:</strong> Se a variável de controle for declarada <strong>antes</strong> do laço (<code class="code-inline">int i; for (i = 0; i < 10; i++)</code>), ela permanece viva após o término do loop. Isso é útil quando você precisa do valor final da contagem após a repetição.</li>
      <li><strong>Performance:</strong> Não há diferença significativa de performance entre <code class="code-inline">for</code> e <code class="code-inline">while</code>. A escolha deve ser guiada exclusivamente pela clareza e pela adequação ao problema. O <code class="code-inline">for</code> é preferido quando o número de iterações é conhecido; o <code class="code-inline">while</code>, quando a condição de parada depende de fatores imprevisíveis.</li>
      <li><strong>Convenção de nomenclatura:</strong> É tradição na programação usar as letras <code class="code-inline">i</code>, <code class="code-inline">j</code> e <code class="code-inline">k</code> como variáveis de controle em laços <code class="code-inline">for</code>. Essa convenção vem de linguagens mais antigas como FORTRAN e é amplamente reconhecida por desenvolvedores no mundo todo.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Tabuada eletrônica:</strong> Um aplicativo educacional que gera a tabuada de um número, multiplicando‑o por valores de 1 a 10.</li>
      <li><strong>Carrinho de compras:</strong> Percorrer os 5 produtos do carrinho, somar os preços e calcular o total da compra.</li>
      <li><strong>Relatórios financeiros:</strong> Processar os dados dos 12 meses do ano para gerar um balanço contábil.</li>
      <li><strong>Jogos:</strong> Inicializar um tabuleiro de xadrez (8x8), gerar uma fase com 10 inimigos ou atualizar a posição de 60 objetos na tela.</li>
      <li><strong>Cronômetros e temporizadores:</strong> Contar de 60 a 0 para um timer de exercícios físicos ou de cozinha.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">O laço <code class="code-inline">for</code> é a evolução natural do <code class="code-inline">while</code>: ele centraliza os três pilares de um laço saudável — inicialização, teste condicional e atualização — em um único cabeçalho limpo e organizado. Sua ordem de execução secreta segue um ritmo preciso: inicializa uma vez, testa, executa o bloco, incrementa e repete o ciclo até que a condição se torne falsa.</p>
    <p class="lesson-text">A variável declarada no cabeçalho do <code class="code-inline">for</code> possui <strong>escopo local</strong>: ela nasce, vive e morre dentro do território do laço. Ao final da repetição, ela é automaticamente destruída, liberando memória e permitindo que o mesmo nome seja reutilizado em outros laços sem risco de interferência.</p>
    <p class="lesson-text">Saber quando usar o <code class="code-inline">for</code> é uma questão de previsibilidade: sempre que o número de repetições for conhecido de antemão, o <code class="code-inline">for</code> é a ferramenta mais limpa, segura e profissional. Dominar essa distinção entre <code class="code-inline">while</code> e <code class="code-inline">for</code> é um marco na jornada de qualquer programador — e é exatamente o que exploraremos com mais profundidade na próxima aula.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Contador com for e demonstração do escopo local',
      codigo: `public class LacoFor {
    public static void main(String[] args) {
        // Contador de 1 a 5 com for
        System.out.println("=== Contagem progressiva ===");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Número: " + i);
        }

        // Demonstração do escopo local:
        // A variável i NÃO existe aqui fora!
        // System.out.println(i); // Isso causaria ERRO de compilação

        // Reciclagem de nomes: novo for com nova variável i
        System.out.println("\\n=== Contagem regressiva ===");
        for (int i = 5; i >= 1; i--) {
            System.out.println("Número: " + i);
        }

        // Cada i morreu ao final do seu respectivo for.
        // Eles nunca interferem um com o outro.
    }
}`,
      explicacao: 'O programa demonstra o uso do for com contagem progressiva e regressiva. A variável i declarada dentro do cabeçalho do for só existe dentro daquele laço. Tentar usá-la fora gera erro de compilação. No segundo for, um novo i é criado do zero, sem conflito com o anterior.'
    },
    {
      titulo: 'Variável declarada fora do for (escopo ampliado)',
      codigo: `public class EscopoFor {
    public static void main(String[] args) {
        // Variável declarada FORA do for: sobrevive após o laço
        int soma = 0;

        for (int i = 1; i <= 10; i++) {
            soma = soma + i; // Acumula os valores de 1 a 10
        }

        // Aqui, soma está viva e acessível
        System.out.println("Soma de 1 a 10: " + soma);

        // Mas i ainda NÃO existe aqui fora!
        // System.out.println(i); // ERRO!

        // Se precisar do valor final de i, declare-a fora:
        int j;
        for (j = 1; j <= 5; j++) {
            System.out.println("j = " + j);
        }
        // Agora j sobreviveu e guarda o valor final
        System.out.println("Valor final de j: " + j); // 6
    }
}`,
      explicacao: 'O exemplo mostra a diferença entre declarar a variável de controle dentro do for (escopo local — morre ao final) e declará-la fora (escopo ampliado — sobrevive). A variável soma, declarada fora, acumula os valores e permanece acessível. Já a variável j, declarada fora e apenas inicializada no for, guarda seu valor final (6) após o laço.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Quais são as três partes do cabeçalho de um laço for, na ordem correta?',
      alternativas: [
        'Condição de parada, inicialização, incremento.',
        'Inicialização, condição de parada, incremento.',
        'Incremento, inicialização, condição de parada.'
      ],
      respostaCorreta: 1,
      explicacao: 'O cabeçalho do for segue a ordem: inicialização (executada uma vez), condição de parada (testada antes de cada iteração) e incremento (executado após cada bloco). As três partes são separadas por ponto e vírgula.'
    },
    {
      pergunta: 'O que acontece com a variável declarada no cabeçalho do for (ex.: int i = 0) após o término do laço?',
      alternativas: [
        'Ela continua existindo e pode ser usada normalmente.',
        'Ela é destruída da memória e não pode mais ser acessada.',
        'Ela é automaticamente convertida para o valor 0.'
      ],
      respostaCorreta: 1,
      explicacao: 'A variável declarada no cabeçalho do for tem escopo local: ela pertence exclusivamente àquele laço e é destruída assim que a chave de fechamento é atingida. Tentar acessá-la fora do for gera erro de compilação.'
    },
    {
      pergunta: 'Qual é a principal vantagem do for sobre o while quando o número de repetições é conhecido?',
      alternativas: [
        'O for é muito mais rápido que o while.',
        'O for organiza inicialização, teste e incremento em uma única linha, reduzindo o risco de esquecer a atualização e criando um código mais limpo.',
        'O for não precisa de chaves { } para funcionar.'
      ],
      respostaCorreta: 1,
      explicacao: 'O for centraliza os três pilares do laço em um único cabeçalho, tornando o código mais compacto e legível. Além disso, como o incremento é obrigatório na estrutura, o risco de loop infinito por esquecimento é drasticamente reduzido.'
    },
    {
      pergunta: 'O que acontece se escrevermos for (;;) { ... } em Java?',
      alternativas: [
        'O código gera um erro de compilação.',
        'É criado um loop infinito, equivalente a while (true).',
        'O laço é executado exatamente uma vez e depois para.'
      ],
      respostaCorreta: 1,
      explicacao: 'As três partes do cabeçalho do for são tecnicamente opcionais. Um for (;;) sem condição de parada cria um loop infinito. Embora válido, esse padrão deve ser evitado — prefira while (true) para loops infinitos intencionais, pois é mais legível.'
    }
  ]
};