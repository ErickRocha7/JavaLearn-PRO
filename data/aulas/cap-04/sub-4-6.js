// Arquivo: data/aulas/cap-04/sub-4-6.js
// Aula 4.6 – Estudo de Caso: Menu Interativo com do...while

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-4-6'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Estudo de Caso: Menu Interativo com do...while</h2>
    <p class="lesson-text text-slate-500 italic">A fusão de todas as estruturas de controle em uma aplicação real e interativa</p>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Chegamos ao ápice do aprendizado prático dos capítulos de Instruções de Controle em Java. Até este momento, você explorou cada conceito lógico e matemático de forma isolada: entendeu o peso das decisões com o <code class="code-inline">if</code> e o <code class="code-inline">else</code>, a eficiência do curto‑circuito dos operadores lógicos, o "clique" mecânico dos contadores com o <code class="code-inline">++</code>, a flexibilidade dos laços <code class="code-inline">while</code> e <code class="code-inline">for</code>, e a mecânica ousada do laço <code class="code-inline">do...while</code>. No entanto, na engenharia de software profissional, os conceitos não trabalham sozinhos. Eles se fundem para dar vida a programas reais.</p>
    <p class="lesson-text">O objetivo deste Estudo de Caso é guiar você na construção de um <strong>Menu Interativo via Terminal</strong>. Essa é a estrutura clássica que você encontra nos bastidores de caixas eletrônicos, sistemas de atendimento telefônico automatizados ou painéis administrativos de grandes empresas. Vamos destrinchar detalhadamente como colocar todas essas engrenagens para girar juntas.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de erguer o menu, vamos recordar os três pilares que serão integrados nesta aula.</p>

    <h4 class="subsection-title">1. O laço <code class="code-inline">do...while</code> e sua garantia de execução</h4>
    <p class="lesson-text">Como estudamos na Aula 4.2, o <code class="code-inline">do...while</code> possui a propriedade única de executar o seu bloco de chaves <code class="code-inline">{ }</code> <strong>pelo menos uma vez garantida</strong> antes de fazer qualquer teste lógico. Essa característica o torna a ferramenta perfeita para menus: você precisa forçar o computador a desenhar a interface na tela primeiro, para só depois coletar a resposta do usuário e julgar se o loop deve continuar.</p>

    <h4 class="subsection-title">2. Leitura de dados com <code class="code-inline">Scanner</code></h4>
    <p class="lesson-text">A classe <code class="code-inline">Scanner</code> (que estudamos na Aula 1.5) funciona como um "escutador de teclado". O método <code class="code-inline">nextInt()</code> congela o programa e aguarda o usuário digitar um número inteiro no teclado, armazenando‑o em uma variável para ser usado nas decisões do sistema.</p>

    <h4 class="subsection-title">3. Estruturas condicionais e tomada de decisão</h4>
    <p class="lesson-text">Os comandos <code class="code-inline">if</code>, <code class="code-inline">else if</code> e <code class="code-inline">else</code> formam a árvore de decisões que guiará o fluxo do programa. Cada opção numérica do menu será associada a um bloco condicional específico, e uma rede de segurança (o <code class="code-inline">else</code> final) capturará entradas inválidas.</p>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. Menu Textual: Erguendo a Interface de Terminal com Opções Numéricas</h4>
    <p class="lesson-text">Para quem está iniciando na tecnologia, a palavra "interface" costuma evocar telas coloridas cheias de botões tridimensionais, imagens e animações complexas, como as do Instagram ou de lojas virtuais modernas. No entanto, antes do nascimento desses sistemas visuais, os softwares operavam puramente em <strong>interfaces de texto</strong>, conhecidas como Console, Terminal ou Linha de Comando — aquela famosa tela preta onde digitamos ordens textuais.</p>
    <p class="lesson-text">Construir um <strong>Menu Textual</strong> significa desenhar na tela uma lista organizada de opções numeradas para o usuário interagir. Pense nisso como o <strong>Cardápio Físico de um Restaurante</strong>. O cliente senta‑se à mesa e lê: <em>"Opção 1: Prato do Dia; Opção 2: Bebidas; Opção 3: Sobremesas; Opção 4: Fechar a Conta"</em>. O cliente não clica na folha de papel; ele simplesmente diz o número da sua escolha para o garçom, que anota o pedido.</p>

    <div class="callout-analogy">
      <strong>Analogia do cardápio:</strong> Você não consegue "clicar" no papel e esperar que a comida surja magicamente. Você lê as alternativas, toma uma decisão e usa sua voz para dizer o número ao garçom. O menu textual do computador simula exatamente essa mesma dinâmica: a máquina "fala" com você pelo monitor, e você "fala" com a máquina pelo teclado.
    </div>

    <p class="lesson-text">No código Java, erguemos essa interface de terminal usando sequências do comando de impressão de texto (<code class="code-inline">System.out.println</code>). O programador atua como um artesão de caracteres, utilizando símbolos como sinais de igual (<code class="code-inline">=</code>), traços (<code class="code-inline">-</code>) ou asteriscos (<code class="code-inline">*</code>) para criar molduras estéticas e divisórias horizontais na tela preta. O objetivo é isolar o conteúdo, criar um cabeçalho imponente e expor as opções numéricas com total clareza visual.</p>

    <p class="lesson-text">A grande sacada dessa interface é que ela funciona como uma <strong>Via de Mão Dupla</strong>. Ela estabelece um canal de conversação perfeito entre o homem e a máquina:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>A Primeira Via (A Máquina Fala com o Homem):</strong> O Java processa os comandos de impressão e "fala" com o usuário através do monitor, desenhando as bordas do menu e exibindo as opções textuais.</li>
      <li><strong>A Segunda Via (O Homem Fala com a Máquina):</strong> Para capturar o número digitado, o Java utiliza o <strong>Scanner</strong> — um "escutador de teclado" ultrassensível de plantão. Ao ativar o comando <code class="code-inline">teclado.nextInt();</code>, o programa congela o relógio interno e aguarda pacientemente que o usuário pressione uma tecla numérica e aperte Enter.</li>
    </ul>

    <h4 class="subsection-title">2. A Lógica do Tempo: Mantendo o Sistema Vivo com o <code class="code-inline">do...while</code></h4>
    <p class="lesson-text">A exibição do menu textual levanta um desafio crucial de gerenciamento de tempo. Se você apenas desenhar o menu e ler o número digitado de forma linear, o Java executará a tarefa escolhida e o programa <strong>fechará sozinho</strong> logo em seguida. Imagine a frustração de um cliente em um caixa eletrônico se, após consultar o saldo, o terminal simplesmente desligasse, obrigando‑o a inserir o cartão e digitar a senha tudo de novo para conseguir fazer um saque.</p>
    <p class="lesson-text">É exatamente aqui que entra em cena o superpoder do laço <code class="code-inline">do...while</code> como o <strong>pilar de sustentação do sistema</strong>. Ele quebra a efemeridade do programa linear e introduz o conceito de <strong>Estado Ativo</strong> — um controle artificial do tempo que mantém o software vivo, aberto e receptivo às ordens humanas por tempo indeterminado.</p>

    <p class="lesson-text">A engrenagem lógica funciona sob uma regra simples: o programador estabelece uma opção numérica específica para representar a <strong>Saída Definitiva</strong> do sistema, geralmente o número 3 ou 0 (como <em>"3. Sair do Sistema"</em>). A condição de teste, posicionada na guarita de saída, será:</p>

    <pre><code class="language-java">while (opcaoDigitada != 3);</code></pre>

    <p class="lesson-text">Traduzindo textualmente: <em>"Faça tudo o que está dentro das chaves e, no final, cheque: o número que o usuário acabou de digitar é diferente de 3?"</em></p>

    <p class="lesson-text"><strong>Os dois cenários de fluxo:</strong></p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Cenário do Ricochete Temporal (Opções de Trabalho — 1 ou 2):</strong> O usuário digita 1 para consultar o saldo. O Java processa a consulta e chega à guarita do <code class="code-inline">while</code>. O fiscal pergunta: "1 é diferente de 3?" → <code class="code-inline">true</code>. O efeito elástico do <code class="code-inline">do...while</code> é disparado: o fluxo é teletransportado de volta ao topo, a tela é redesenhada e o menu permanece em Estado Ativo.</li>
      <li><strong>Cenário da Liberação (Opção de Saída — 3):</strong> O usuário digita 3. O Java processa a mensagem de despedida e chega à guarita. O fiscal pergunta: "3 é diferente de 3?" → <code class="code-inline">false</code>. O elástico se rompe, a cancela se abre e o programa se encerra de forma limpa e segura.</li>
    </ul>

    <p class="lesson-text">O <code class="code-inline">do...while</code> garante que o menu tenha <strong>vida longa e autonomia</strong> para rodar continuamente até que o usuário decida ir embora.</p>

    <h4 class="subsection-title">3. Integração Total: A Fusão das Engrenagens Lógicas</h4>
    <p class="lesson-text">O verdadeiro espetáculo desta aula reside na <strong>Integração Total</strong>. O menu interativo deixa de ser um amontoado de linhas isoladas e se transforma em uma <strong>máquina viva e automatizada</strong>, onde cada linha de código desempenha um papel cirúrgico coordenado.</p>

    <p class="lesson-text">Acompanhe a linha do tempo exaustiva desse sistema integrado processando as escolhas do usuário:</p>

    <h4 class="sub-subsection-title">🧱 1. O Cenário de Inicialização (Preparação do Terreno)</h4>
    <ol class="list-decimal ml-6 space-y-1 mb-4">
      <li><strong>A Criação do Receptáculo:</strong> O Java lê <code class="code-inline">int opcao;</code> e reserva um espaço na memória RAM rotulado como <code class="code-inline">opcao</code>, pronto para receber um dado numérico.</li>
      <li><strong>A Ativação dos Ouvidos Virtuais:</strong> O compilador processa a inicialização do <code class="code-inline">Scanner</code>, estabelecendo uma ponte de comunicação com o teclado.</li>
      <li><strong>A Invasão do Bloco Circular:</strong> O fluxo colide com a palavra‑chave <code class="code-inline">do</code>. Como o <code class="code-inline">do</code> não impõe nenhuma barreira, o carro do programa cruza a chave de abertura <code class="code-inline">{</code> sem restrições, invadindo o interior do laço pela primeira vez.</li>
    </ol>

    <h4 class="sub-subsection-title">🖥️ 2. O Desenho e a Leitura de Dados (A Via de Mão Dupla)</h4>
    <ol class="list-decimal ml-6 space-y-1 mb-4">
      <li><strong>A Construção Visual da Interface:</strong> O processador executa cada <code class="code-inline">System.out.println</code>, desenhando as bordas, o título e as opções na tela: <em>"1. Consultar Saldo, 2. Realizar Depósito, 3. Sair"</em>.</li>
      <li><strong>O Congelamento do Tempo:</strong> O fluxo atinge <code class="code-inline">opcao = teclado.nextInt();</code>. O relógio interno do Java é paralisado. O programa hiberna e aguarda o ser humano agir.</li>
      <li><strong>A Injeção do Dado Real:</strong> O usuário digita o número <strong>1</strong> e aperta Enter. O Scanner captura o pulso elétrico e injeta o valor <strong>1</strong> na variável <code class="code-inline">opcao</code>. O canal de recepção se fecha e o Java retoma a marcha.</li>
    </ol>

    <h4 class="sub-subsection-title">🌳 3. A Tomada de Decisão Condicional (A Árvore de Escolhas)</h4>
    <p class="lesson-text">Portando o número 1, o programa colide com a árvore de comandos <code class="code-inline">if</code>, <code class="code-inline">else if</code> e <code class="code-inline">else</code>:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>if (opcao == 1):</strong> "1 é igual a 1?" → <code class="code-inline">true</code>. O Java entra nesse bloco e exibe a mensagem de saldo. Em seguida, <strong>ignora todos os outros blocos</strong> abaixo e salta para o final da árvore.</li>
      <li><strong>Se o usuário tivesse digitado 2:</strong> O primeiro <code class="code-inline">if</code> falharia, mas o <code class="code-inline">else if (opcao == 2)</code> seria verdadeiro, disparando a rotina de depósito.</li>
      <li><strong>Se o usuário digitasse 9:</strong> Todos os <code class="code-inline">if</code>s falhariam e o <code class="code-inline">else</code> final capturaria o erro: <em>"Opção Inválida! Escolha um número entre 1 e 3."</em></li>
    </ul>

    <h4 class="sub-subsection-title">🔄 4. A Checagem de Continuidade (O Ricochete Elástico)</h4>
    <p class="lesson-text">Após executar a tarefa, o fluxo atinge a guarita de saída: <code class="code-inline">while (opcao != 3);</code>. O fiscal verifica: "1 é diferente de 3?" → <code class="code-inline">true</code>. O efeito elástico do <code class="code-inline">do...while</code> é disparado: o fluxo é teletransportado de volta ao topo, a tela redesenha o cardápio e o sistema permanece em Estado Ativo, aguardando uma nova operação.</p>
    <p class="lesson-text">Esse ciclo se repetirá de forma autônoma até que o usuário digite o número 3, quebrando a condição e libertando o programa para o encerramento seguro.</p>

    <h4 class="subsection-title">4. Código‑Fonte Completo e Comentado</h4>
    <p class="lesson-text">Aqui está o código‑fonte que materializa toda a teoria desta aula. Estude‑o linha por linha:</p>

    <pre><code class="language-java">import java.util.Scanner;

public class MenuInterativo {
    public static void main(String[] args) {
        // Inicialização do Scanner para leitura do teclado
        Scanner teclado = new Scanner(System.in);
        
        // Variável de controle que guardará a opção escolhida pelo usuário
        int opcao;

        // O laço do...while garante que o menu apareça pelo menos uma vez
        do {
            // 1. CONSTRUÇÃO DO MENU TEXTUAL
            System.out.println("\\n=================================");
            System.out.println("   SISTEMA BANCÁRIO SIMULADO     ");
            System.out.println("=================================");
            System.out.println("1. Consultar Saldo Atual");
            System.out.println("2. Realizar Depósito Simulado");
            System.out.println("3. Sair do Sistema");
            System.out.print("Digite o número da opção desejada: ");
            
            // 2. LEITURA DE DADOS: Captura o número digitado pelo usuário
            opcao = teclado.nextInt();

            // 3. TOMADA DE DECISÃO COM ESTRUTURAS CONDICIONAIS
            if (opcao == 1) {
                System.out.println("\\n[SALDO] Seu saldo atual disponível é: R$ 1.500,00");
            } 
            else if (opcao == 2) {
                System.out.println("\\n[DEPÓSITO] Funcionalidade de depósito acionada com sucesso!");
            } 
            else if (opcao == 3) {
                System.out.println("\\n[LOGOUT] Obrigado por utilizar nosso sistema. Até logo!");
            } 
            else {
                // Rede de segurança contra números inválidos
                System.out.println("\\n[ERRO] Opção inválida! Escolha um número entre 1 e 3.");
            }

        // 4. LÓGICA DE MANUTENÇÃO: O loop continua ENQUANTO a opção NÃO for 3
        } while (opcao != 3);

        // Fechamento seguro do recurso de leitura do teclado
        teclado.close();
        System.out.println("=== Programa Encerrado com Segurança ===");
    }
}</code></pre>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Escopo da variável <code class="code-inline">opcao</code>:</strong> A variável <code class="code-inline">opcao</code> é declarada <strong>antes</strong> do <code class="code-inline">do</code> para que possa ser usada tanto dentro do bloco do laço quanto na condição de saída <code class="code-inline">while (opcao != 3)</code>. Se fosse declarada dentro do bloco, não estaria acessível na condição.</li>
      <li><strong>Operador <code class="code-inline">!=</code> (diferente de):</strong> A condição <code class="code-inline">opcao != 3</code> mantém o laço ativo enquanto o valor for <strong>diferente</strong> de 3. Quando o usuário digita 3, a expressão torna‑se <code class="code-inline">false</code> e o laço termina.</li>
      <li><strong>O <code class="code-inline">else</code> como rede de segurança:</strong> O bloco <code class="code-inline">else</code> final captura qualquer número que não seja 1, 2 ou 3. Sem ele, o programa ignoraria entradas inválidas silenciosamente, o que seria uma experiência ruim para o usuário.</li>
      <li><strong>Fechamento do <code class="code-inline">Scanner</code>:</strong> O método <code class="code-inline">teclado.close()</code> libera o recurso do sistema associado ao teclado. Em programas maiores, essa prática evita vazamentos de memória.</li>
      <li><strong>Evolução para <code class="code-inline">switch</code>:</strong> Embora este menu use <code class="code-inline">if/else if</code>, o Java oferece a estrutura <code class="code-inline">switch</code>, que é ainda mais adequada para menus com múltiplas opções numéricas — este tópico será abordado em capítulos futuros.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Caixas eletrônicos:</strong> O menu principal de um terminal bancário (Saldo, Saque, Depósito, Sair) é estruturado com a mesma lógica de laço e condicionais.</li>
      <li><strong>Sistemas de atendimento telefônico (URA):</strong> <em>"Para consultar seu saldo, digite 1. Para falar com um atendente, digite 2."</em></li>
      <li><strong>Painéis administrativos:</strong> Sistemas internos de empresas com opções como Cadastrar, Listar, Excluir e Sair.</li>
      <li><strong>Jogos textuais:</strong> Aventuras baseadas em terminal onde o jogador escolhe ações numeradas.</li>
      <li><strong>Configuradores e assistentes:</strong> Programas de instalação que guiam o usuário por etapas numeradas.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Este Estudo de Caso fecha com chave de ouro os capítulos de Instruções de Controle em Java. Você não apenas compreendeu cada ferramenta isoladamente — o <code class="code-inline">if</code> para decidir, o <code class="code-inline">Scanner</code> para capturar dados, o <code class="code-inline">do...while</code> para manter o sistema vivo —, mas também aprendeu a <strong>fundi‑las em uma arquitetura unificada</strong>.</p>
    <p class="lesson-text">A beleza insubstituível dessa Integração Total prova que programar não se resume a decorar palavras‑chave isoladas ou digitar comandos soltos na tela. Programar é a arte de projetar uma <strong>arquitetura viva de tráfego de dados</strong>. Ao fundir a captura de dados, a resiliência elástica do laço e a precisão das árvores condicionais, você se torna um verdadeiro arquiteto de soluções automatizadas — consolidando com maestria absoluta toda a base de controle necessária para construir softwares profissionais prontos para o mercado de tecnologia mundial.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Menu Interativo Bancário com do...while, Scanner e if/else',
      codigo: `import java.util.Scanner;

public class MenuInterativo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int opcao;

        do {
            System.out.println("\\n=================================");
            System.out.println("   SISTEMA BANCÁRIO SIMULADO     ");
            System.out.println("=================================");
            System.out.println("1. Consultar Saldo Atual");
            System.out.println("2. Realizar Depósito Simulado");
            System.out.println("3. Sair do Sistema");
            System.out.print("Digite o número da opção desejada: ");
            
            opcao = teclado.nextInt();

            if (opcao == 1) {
                System.out.println("\\n[SALDO] Seu saldo atual: R$ 1.500,00");
            } else if (opcao == 2) {
                System.out.println("\\n[DEPÓSITO] Depósito realizado com sucesso!");
            } else if (opcao == 3) {
                System.out.println("\\n[LOGOUT] Obrigado por utilizar nosso sistema!");
            } else {
                System.out.println("\\n[ERRO] Opção inválida! Escolha entre 1 e 3.");
            }
        } while (opcao != 3);

        teclado.close();
        System.out.println("=== Programa Encerrado ===");
    }
}`,
      explicacao: 'O programa demonstra a integração de todas as estruturas de controle: Scanner para ler dados do teclado, do...while para manter o menu ativo até o usuário escolher sair (opção 3), e if/else if/else para tomar decisões com base na escolha, incluindo uma rede de segurança para opções inválidas.'
    },
    {
      titulo: 'Menu interativo com contador de operações realizadas',
      codigo: `import java.util.Scanner;

public class MenuComContador {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int opcao;
        int operacoesRealizadas = 0; // Contador de operações

        do {
            System.out.println("\\n===== MENU PRINCIPAL =====");
            System.out.println("1. Cadastrar Produto");
            System.out.println("2. Listar Produtos");
            System.out.println("3. Excluir Produto");
            System.out.println("4. Sair");
            System.out.print("Escolha: ");
            opcao = teclado.nextInt();

            if (opcao >= 1 && opcao <= 3) {
                operacoesRealizadas++; // Incrementa o contador
                System.out.println("Operação " + opcao + " executada.");
            } else if (opcao == 4) {
                System.out.println("Encerrando...");
            } else {
                System.out.println("Opção inválida!");
            }
        } while (opcao != 4);

        System.out.println("Total de operações realizadas: " + operacoesRealizadas);
        teclado.close();
    }
}`,
      explicacao: 'Esta versão estendida adiciona um contador de operações. Sempre que o usuário escolhe uma opção válida (1, 2 ou 3), o contador é incrementado. Ao sair, o programa exibe quantas operações foram realizadas — demonstrando a integração de contadores com o laço do...while.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Por que o laço do...while é a escolha ideal para construir um menu interativo?',
      alternativas: [
        'Porque ele é mais rápido que o while tradicional.',
        'Porque ele garante que o menu seja exibido pelo menos uma vez antes de verificar a condição de saída.',
        'Porque ele não precisa de uma condição de parada.'
      ],
      respostaCorreta: 1,
      explicacao: 'O do...while executa o bloco primeiro e só depois testa a condição. Isso garante que o menu seja desenhado na tela ao menos uma vez antes que o programa pergunte se o usuário quer sair — evitando a necessidade de duplicar código.'
    },
    {
      pergunta: 'Qual é a função da condição while (opcao != 3) no menu interativo?',
      alternativas: [
        'Ela faz o programa executar a opção 3 repetidamente.',
        'Ela mantém o menu ativo enquanto o usuário NÃO digitar a opção de saída (3), e encerra o loop quando ele digita 3.',
        'Ela impede que o usuário digite qualquer número diferente de 3.'
      ],
      respostaCorreta: 1,
      explicacao: 'A condição (opcao != 3) retorna true enquanto o valor for diferente de 3, mantendo o laço vivo. Quando o usuário digita 3, a condição torna‑se false e o laço se encerra.'
    },
    {
      pergunta: 'O que acontece se o usuário digitar um número como 7 em um menu que só tem opções 1, 2 e 3?',
      alternativas: [
        'O programa ignora silenciosamente e volta ao menu.',
        'O bloco else é executado, exibindo uma mensagem de erro como "Opção inválida!".',
        'O programa fecha automaticamente.'
      ],
      respostaCorreta: 1,
      explicacao: 'Como 7 não corresponde a nenhum if ou else if, o fluxo cai no bloco else final — a rede de segurança que captura entradas inválidas e avisa o usuário. Sem esse else, o programa simplesmente ignoraria o número e voltaria ao menu sem feedback.'
    },
    {
      pergunta: 'Por que a variável opcao deve ser declarada ANTES do bloco do...while?',
      alternativas: [
        'É apenas uma convenção estética.',
        'Porque ela precisa estar acessível tanto dentro do bloco do laço quanto na condição de saída while (opcao != 3).',
        'Porque o Java proíbe declarar variáveis dentro do do...while.'
      ],
      respostaCorreta: 1,
      explicacao: 'A variável opcao é usada em dois lugares: dentro do bloco (onde recebe o valor do teclado) e na condição de saída (onde é comparada com 3). Se fosse declarada dentro do bloco, seu escopo seria limitado às chaves e ela não estaria visível na linha do while.'
    }
  ]
};