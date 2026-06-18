// Arquivo: data/aulas/cap-04/sub-4-2.js
// Aula 4.2 – Laço do...while e Comparação com while

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-4-2'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Laço do...while e Comparação com while</h2>
    <p class="lesson-text text-slate-500 italic">Agir antes de perguntar: o loop que garante a primeira execução</p>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">No universo da programação, fazer o computador repetir tarefas é uma das formas mais poderosas de economizar tempo e esforço humano. Imagine o trabalho que daria se, para exibir uma lista de 10 mil produtos em uma loja virtual, o programador tivesse que escrever 10 mil linhas de código idênticas. Para evitar esse desperdício, existem os <strong>laços de repetição</strong> — estruturas de controle que instruem o computador a executar o mesmo bloco de código repetidas vezes até que uma condição mude.</p>
    <p class="lesson-text">No ecossistema do Java, você já conhece o laço <code class="code-inline">while</code> (que estudamos na Aula 3.4). Agora, vamos explorar uma variação poderosa chamada <strong><code class="code-inline">do...while</code></strong> (que significa "faça... enquanto"). Embora usem praticamente as mesmas palavras, eles possuem uma diferença mecânica crucial na forma como enxergam o fluxo do tempo e a tomada de decisões. Compreender a Aula 4.2 significa entender a sutil, porém revolucionária, diferença entre <strong>testar uma regra antes de agir</strong> ou <strong>agir antes de testar a regra</strong>.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de mergulhar no <code class="code-inline">do...while</code>, vamos recordar dois conceitos essenciais.</p>

    <h4 class="subsection-title">1. Estruturas de repetição e condições booleanas</h4>
    <p class="lesson-text">Todo laço de repetição depende de uma <strong>condição booleana</strong> — uma pergunta cuja resposta só pode ser <code class="code-inline">true</code> ou <code class="code-inline">false</code>. Enquanto a condição for verdadeira, o bloco de código é executado; quando se torna falsa, o laço termina.</p>

    <h4 class="subsection-title">2. O laço <code class="code-inline">while</code> e o pré‑teste</h4>
    <p class="lesson-text">Como vimos, o <code class="code-inline">while</code> é um laço com <strong>pré‑teste</strong>: ele verifica a condição <strong>antes</strong> de executar o bloco. Se a condição for falsa logo de cara, o bloco nunca é executado — o laço pode rodar zero vezes.</p>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. Sintaxe Diferenciada: A Inversão do Fluxo de Tempo</h4>
    <p class="lesson-text">Para compreender a diferença de sintaxe entre o <code class="code-inline">while</code> tradicional e o <code class="code-inline">do...while</code>, imagine a postura de duas pessoas diferentes diante de um desafio.</p>
    <p class="lesson-text">O <strong>laço <code class="code-inline">while</code></strong> é como um <strong>guarda de trânsito extremamente cauteloso</strong>. Ele coloca a condição de teste logo no topo, na primeira linha. O computador lê a frase: <em>"Enquanto a condição for verdadeira, você tem permissão para entrar."</em> Se a condição for falsa logo de início, ele barra a entrada e o bloco de código é completamente ignorado.</p>
    <p class="lesson-text">O <strong>laço <code class="code-inline">do...while</code></strong> adota uma postura <strong>ousada e impulsiva</strong>. Ele funciona sob a filosofia do <em>"atire primeiro e pergunte depois"</em>. Na escrita do código, a palavra‑chave <code class="code-inline">do</code> (Faça) aparece sozinha na primeira linha, abrindo as chaves do bloco <strong>sem impor nenhuma barreira</strong>. O computador entra direto e executa todas as instruções ali dentro. Somente quando chega ao final do bloco, na hora de fechar as chaves, é que ele esbarra na palavra <code class="code-inline">while</code> acompanhada da condição lógica. É nesse momento tardio que o computador pergunta: <em>"O que eu acabei de fazer deve ser repetido ou não?"</em></p>

    <p class="lesson-text"><strong>O esqueleto visual do <code class="code-inline">do...while</code>:</strong></p>
    <pre><code class="language-java">do {
    // Bloco de código executado pelo menos uma vez
    // antes de qualquer verificação!
} while (condicaoBooleana);</code></pre>

    <div class="callout-warning">
      <strong>Atenção ao ponto e vírgula!</strong> Diferente do <code class="code-inline">while</code> tradicional, o <code class="code-inline">do...while</code> exige um <strong>ponto e vírgula</strong> (<code class="code-inline">;</code>) logo após o fechamento dos parênteses da condição. Esquecê‑lo gera um erro de compilação.
    </div>

    <h4 class="subsection-title">2. Garantia de Execução: O Poder do "Pelo Menos Uma Vez"</h4>
    <p class="lesson-text">A consequência direta dessa inversão de sintaxe é uma propriedade fantástica que torna o <code class="code-inline">do...while</code> único: <strong>ele garante, com 100% de certeza, que o bloco de código será executado pelo menos uma única vez</strong>, independentemente de a condição ser verdadeira, falsa, absurda ou impossível.</p>

    <div class="callout-analogy">
      <strong>Analogia do Cinema (while) vs. Restaurante Rodízio (do...while):</strong><br><br>
      <strong>A Abordagem while — O Cinema com Ingresso:</strong> Na porta da sala, um funcionário confere seu ingresso. Se você não tiver o bilhete (condição = falsa), é barrado imediatamente e não assiste a um segundo do filme. O código do cinema rodou <strong>zero vezes</strong> para você.<br><br>
      <strong>A Abordagem do...while — O Restaurante Rodízio:</strong> Você entra, senta e os garçons já começam a servir sem perguntar nada. Você come a primeira fatia de pizza. Só depois de ter comido é que o garçom pergunta: "Deseja continuar?". Mesmo que você responda "Não, estou satisfeito" (condição = falsa), a realidade não pode ser desfeita — você <strong>já consumiu pelo menos uma fatia</strong>.
    </div>

    <p class="lesson-text">Essa característica faz do <code class="code-inline">do...while</code> a ferramenta perfeita para interações onde o sistema precisa <strong>produzir um resultado inicial</strong> antes de saber se continuará trabalhando. O exemplo mais clássico é a construção de <strong>Menus Interativos</strong>.</p>
    <p class="lesson-text">Imagine um programa que exibe um menu: <em>"1. Cadastrar, 2. Excluir, 3. Sair"</em>. Você não pode verificar se o usuário quer sair antes de mostrar o menu! O <code class="code-inline">do...while</code> força o computador a desenhar o menu na tela (primeira execução garantida), capturar o número digitado e só então, lá no final, testar se ele digitou 3. Se digitou 1 ou 2, o loop volta ao topo e desenha o menu novamente. Se digitou 3, o loop se encerra.</p>

    <h4 class="subsection-title">3. Diferenças Cruciais: O Comparativo Visual do Fluxo de Dados</h4>
    <p class="lesson-text">Para consolidar esse entendimento, vamos mapear o caminho que a informação faz dentro dos circuitos do Java ao processar cada um dos comandos. Pense no fluxo do programa como um veículo percorrendo uma estrada.</p>

    <h4 class="sub-subsection-title">🗺️ A Estrada do Laço <code class="code-inline">while</code> (Fluxo com Teste Prévio)</h4>
    <ol class="list-decimal ml-6 space-y-1 mb-4">
      <li>O veículo do programa desce a estrada principal e bate de frente com uma <strong>Barreira de Pedágio</strong> — a linha <code class="code-inline">while(condicao)</code>.</li>
      <li>O Java pergunta: <em>"A condição é Verdadeira?"</em></li>
      <li>Se a resposta for <strong>NÃO (falso)</strong>: a cancela nunca se abre. O veículo faz um desvio brusco, salta por cima de todo o bloco e continua na estrada após o laço. O interior do laço permanece intocado.</li>
      <li>Se a resposta for <strong>SIM (verdadeiro)</strong>: a cancela se abre. O veículo entra, executa todas as linhas do bloco e chega à parede final: a chave de fechamento <code class="code-inline">}</code>.</li>
      <li>Essa chave atua como um <strong>elástico</strong> que arremessa o veículo de volta ao pedágio para um novo teste.</li>
    </ol>

    <h4 class="sub-subsection-title">🗺️ A Estrada do Laço <code class="code-inline">do...while</code> (Fluxo com Teste Posterior)</h4>
    <ol class="list-decimal ml-6 space-y-1 mb-4">
      <li>O veículo chega a uma bifurcação com a placa <strong><code class="code-inline">do</code></strong> (Siga em Frente). Não há cancela, não há guarda.</li>
      <li>O veículo <strong>entra livremente</strong> na zona de operação e executa todas as instruções do bloco, uma após a outra.</li>
      <li>Só quando está prestes a sair, ele dá de frente com a <strong>Guarita de Fiscalização</strong> — a linha <code class="code-inline">while(condicao);</code>.</li>
      <li>O fiscal pergunta: <em>"A condição é Verdadeira?"</em></li>
      <li>Se a resposta for <strong>NÃO (falso)</strong>: a cancela de saída se abre e o veículo segue viagem. O bloco rodou exatamente <strong>uma vez</strong>.</li>
      <li>Se a resposta for <strong>SIM (verdadeiro)</strong>: o fiscal ordena: <em>"Volte e faça tudo de novo!"</em>. O veículo é teletransportado de volta ao passo 1 e refaz toda a jornada.</li>
    </ol>

    <div class="callout-info">
      <strong>Resumo de Ouro:</strong><br>
      • Use o <strong><code class="code-inline">while</code></strong> quando precisar de <strong>prevenção total</strong>: se as condições não forem perfeitas desde o início, o código não deve se mover. (Ex.: verificar saldo antes de liberar um saque.)<br>
      • Use o <strong><code class="code-inline">do...while</code></strong> quando precisar de <strong>ação imediata</strong>: o sistema precisa executar algo primeiro para só depois decidir se continua. (Ex.: exibir um menu, jogar um dado, pedir uma senha.)
    </div>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Sintaxe e ponto e vírgula:</strong> A estrutura do <code class="code-inline">do...while</code> termina obrigatoriamente com <code class="code-inline">while(condicao);</code> — o ponto e vírgula é <strong>obrigatório</strong>. Sua ausência causa erro de compilação.</li>
      <li><strong>Escopo da variável de controle:</strong> Se a variável de controle for declarada <strong>dentro</strong> do bloco <code class="code-inline">do</code>, ela não estará acessível na condição do <code class="code-inline">while</code>, pois a condição está fora do escopo do bloco. Portanto, declare a variável de controle <strong>antes</strong> do <code class="code-inline">do</code>.</li>
      <li><strong>Loop infinito com <code class="code-inline">do...while</code>:</strong> Assim como no <code class="code-inline">while</code>, se a condição nunca se tornar falsa, o laço será infinito. A atualização da variável de controle deve ocorrer dentro do bloco.</li>
      <li><strong>Equivalência com <code class="code-inline">while</code>:</strong> Qualquer laço <code class="code-inline">do...while</code> pode ser reescrito como um <code class="code-inline">while</code>, mas a conversão inversa pode exigir duplicação de código para garantir a primeira execução. A escolha entre eles é semântica.</li>
      <li><strong>Uso com <code class="code-inline">Scanner</code>:</strong> O <code class="code-inline">do...while</code> é frequentemente usado em conjunto com <code class="code-inline">Scanner</code> para ler dados do usuário, garantindo que a leitura ocorra ao menos uma vez antes da validação.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Menus interativos:</strong> Exibir opções e esperar a escolha do usuário, repetindo até que ele selecione "Sair".</li>
      <li><strong>Validação de entrada:</strong> Pedir um dado, validá‑lo e, se inválido, repetir a solicitação. O <code class="code-inline">do...while</code> garante que o dado seja solicitado ao menos uma vez.</li>
      <li><strong>Jogos:</strong> Lançar um dado e, se o resultado for um valor especial, conceder uma jogada extra.</li>
      <li><strong>Instalação de software:</strong> Exibir o assistente de instalação e, ao final, perguntar se deseja reiniciar o sistema — a instalação ocorre ao menos uma vez.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">O laço <code class="code-inline">do...while</code> é a ferramenta da <strong>ação pioneira</strong>. Enquanto o <code class="code-inline">while</code> prioriza a segurança e o pré‑teste, o <code class="code-inline">do...while</code> garante que o bloco de código seja executado pelo menos uma vez antes de qualquer verificação. Essa diferença na ordem cronológica da tomada de decisões — testar antes de agir versus agir antes de testar — é fundamental para construir sistemas interativos, menus dinâmicos e validações de entrada que não deixem o usuário no escuro.</p>
    <p class="lesson-text">Dominar o <code class="code-inline">do...while</code> amplia seu repertório de controle de fluxo, permitindo escolher a postura exata que cada problema de negócios exige.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Demonstração do do...while com contador',
      codigo: `public class ExemploDoWhile {
    public static void main(String[] args) {
        int contador = 1;

        // O bloco será executado pelo menos uma vez
        do {
            System.out.println("Número: " + contador);
            contador++;
        } while (contador <= 5);

        System.out.println("Contagem encerrada. Valor final do contador: " + contador);
    }
}`,
      explicacao: 'O programa imprime os números de 1 a 5. Mesmo que a condição inicial fosse falsa (ex.: contador começando em 10), o bloco seria executado uma vez, exibindo "Número: 10". O do...while garante a primeira execução.'
    },
    {
      titulo: 'Menu interativo com do...while e Scanner',
      codigo: `import java.util.Scanner;

public class MenuInterativo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int opcao;

        // O menu é exibido pelo menos uma vez
        do {
            System.out.println("\\n=== MENU PRINCIPAL ===");
            System.out.println("1. Cadastrar usuário");
            System.out.println("2. Excluir usuário");
            System.out.println("3. Sair do sistema");
            System.out.print("Escolha uma opção: ");
            opcao = teclado.nextInt();

            switch (opcao) {
                case 1:
                    System.out.println("> Cadastrando...");
                    break;
                case 2:
                    System.out.println("> Excluindo...");
                    break;
                case 3:
                    System.out.println("> Encerrando o sistema...");
                    break;
                default:
                    System.out.println("> Opção inválida!");
            }
        } while (opcao != 3);

        teclado.close();
    }
}`,
      explicacao: 'O menu é desenhado na tela antes de qualquer verificação. Se o usuário escolher 1 ou 2, o loop repete e o menu reaparece. Se escolher 3, a condição opcao != 3 torna‑se falsa e o programa termina. O do...while é a escolha natural para esse padrão.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual é a principal diferença entre os laços while e do...while?',
      alternativas: [
        'O while é mais rápido que o do...while.',
        'O while verifica a condição antes de executar o bloco; o do...while executa o bloco primeiro e verifica a condição depois.',
        'O do...while não aceita operadores lógicos na condição.'
      ],
      respostaCorreta: 1,
      explicacao: 'O while faz o pré-teste: se a condição for falsa de início, o bloco nunca é executado. O do...while faz o pós-teste: o bloco é executado pelo menos uma vez, e só depois a condição é verificada.'
    },
    {
      pergunta: 'O que acontece se a condição de um laço do...while for false logo na primeira verificação?',
      alternativas: [
        'O bloco de código não é executado nenhuma vez.',
        'O bloco de código é executado exatamente uma vez e depois o laço termina.',
        'O programa gera um erro de compilação.'
      ],
      respostaCorreta: 1,
      explicacao: 'O do...while garante que o bloco execute ao menos uma vez. A verificação da condição só ocorre após a primeira execução. Se a condição for false nesse momento, o laço termina, mas o bloco já rodou uma vez.'
    },
    {
      pergunta: 'Qual é um cenário típico onde o do...while é mais adequado que o while?',
      alternativas: [
        'Quando o número exato de repetições é conhecido de antemão.',
        'Quando é necessário exibir um menu e esperar a escolha do usuário.',
        'Quando a condição de parada nunca muda.'
      ],
      respostaCorreta: 1,
      explicacao: 'Menus interativos são o exemplo clássico: o menu precisa ser exibido ao menos uma vez antes que o usuário possa escolher sair. O do...while garante essa primeira exibição sem duplicação de código.'
    },
    {
      pergunta: 'Qual elemento sintático é obrigatório no final de um laço do...while?',
      alternativas: [
        'Uma chave de abertura extra.',
        'Um ponto e vírgula (;) após a condição.',
        'A palavra-chave break.'
      ],
      respostaCorreta: 1,
      explicacao: 'A linha while(condicao); que encerra o do...while exige um ponto e vírgula obrigatório. Esquecê-lo causa erro de compilação. É a única estrutura de repetição em Java que requer esse ponto e vírgula.'
    }
  ]
};