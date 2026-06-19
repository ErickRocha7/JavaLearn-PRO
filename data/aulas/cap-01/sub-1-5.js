// Arquivo: data/aulas/cap-01/sub-1-5.js
// Aula 1.5 – Entrada de Dados com Scanner

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-5'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Entrada de Dados com Scanner</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Com a classe <code class="code-inline">Scanner</code>, seu programa Java ganha ouvidos e aprende a escutar o que o usuário digita. Até agora, nossas aplicações apenas emitiam informações — eram como um alto‑falante sem microfone. Dominar a entrada de dados é o que transforma um script rígido em uma aplicação interativa de verdade. Nesta aula, vamos percorrer cada engrenagem que torna isso possível: importar a ferramenta, instanciá‑la, escolher o método de leitura adequado para cada tipo de dado, compreender o comportamento de bloqueio do teclado e, por fim, fechar o recurso de forma responsável. Também vamos detonar o bug mais temido por iniciantes — o <em>nextLine fantasma</em> — e entender exatamente por que ele acontece e como solucioná‑lo.</p>

    <h3 class="section-title">O Código Padrão de Entrada de Dados</h3>
    <pre><code class="language-java">import java.util.Scanner;

public class EntradaDados {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);

        System.out.print("Digite seu nome completo: ");
        String nome = leitor.nextLine();

        System.out.print("Digite sua idade: ");
        int idade = leitor.nextInt();

        System.out.printf("Olá, %s! Você tem %d anos.%n", nome, idade);

        leitor.close();
    }
}</code></pre>
    <div class="terminal-output">Digite seu nome completo: João da Silva
Digite sua idade: 25
Olá, João da Silva! Você tem 25 anos.</div>
    <p class="lesson-text">Vamos desconstruir cada uma dessas engrenagens, usando analogias do dia a dia para tornar tudo claro.</p>

    <h3 class="section-title">1. A Importação: <code class="code-inline">import java.util.Scanner;</code></h3>
    <p class="lesson-text">O Java não carrega todas as suas ferramentas de uma só vez — isso consumiria memória desnecessariamente. Imagine que você é um eletricista e carrega no cinto uma mochila portátil com as ferramentas mais básicas (alicate, fita isolante). Essa mochila é o pacote <code class="code-inline">java.lang</code>, que já vem ativo automaticamente e contém comandos essenciais como <code class="code-inline">System.out.println</code>. Porém, o Scanner é um multímetro digital especializado: não fica na mochila de todo mundo, mas sim guardado no Almoxarifado Central da linguagem, dentro do pacote <code class="code-inline">java.util</code>. A linha <code class="code-inline">import java.util.Scanner;</code> é a ordem de requisição: "Vá até o corredor de utilitários (<code class="code-inline">java.util</code>), pegue a ferramenta Scanner e traga para minha bancada de trabalho". Ela deve ficar obrigatoriamente no topo do arquivo, antes da declaração da classe. Se faltar, o compilador exibe o erro <em>"cannot find symbol – class Scanner"</em>.</p>

    <h3 class="section-title">2. A Instanciação: <code class="code-inline">Scanner leitor = new Scanner(System.in);</code></h3>
    <p class="lesson-text">Importar o manual do Scanner não basta — é preciso fabricar o objeto na memória RAM. Pense na compra de uma máquina de cartão de crédito para sua loja. Primeiro, você reserva um espaço no balcão, declarando o tipo do aparelho: <code class="code-inline">Scanner leitor</code> ("aqui ficará um leitor"). Em seguida, o operador <code class="code-inline">new</code> materializa o objeto físico: <code class="code-inline">= new Scanner(...)</code> é a fábrica entregando um aparelho novo. Por fim, você precisa ligar o cabo de comunicação: <code class="code-inline">(System.in)</code> conecta o leitor diretamente ao teclado físico do computador, pois <code class="code-inline">System.in</code> é a porta de entrada padrão do sistema. Agora seu assistente virtual chamado <code class="code-inline">leitor</code> está energizado e com os sensores apontados para o teclado, esperando ordens.</p>

    <h3 class="section-title">3. Os Métodos de Captura: Escolhendo o Botão Certo</h3>
    <p class="lesson-text">O Scanner funciona como um separador de correspondências: cada tipo de dado exige um método específico. Escolher o botão errado pode travar o programa.</p>

    <ul class="topic-list space-y-3 mb-4">
      <li><strong><code class="code-inline">nextLine()</code> – O Capturador de Frases Completas:</strong> Significa "próxima linha". Ele lê absolutamente tudo o que o usuário digitar até apertar Enter, preservando espaços. Perfeito para nomes completos como "João da Silva". É um aspirador que suga a linha inteira.</li>
      <li><strong><code class="code-inline">nextInt()</code> – O Capturador de Números Inteiros:</strong> "Next Integer". Faz uma triagem rigorosa: só aceita dígitos e os converte para o número matemático correspondente. Se o usuário digitar 25, o computador guarda o valor inteiro 25, pronto para cálculos. Se digitar "vinte" ou 25.5, o Scanner detecta que a peça não encaixa e lança uma exceção, travando o programa.</li>
      <li><strong><code class="code-inline">nextDouble()</code> – O Capturador de Números Decimais:</strong> Lê números com parte quebrada, como 1.75 ou 1500.50. Mas há uma armadilha cultural importantíssima: o Scanner obedece ao idioma do sistema operacional. Se o computador estiver em Português do Brasil, a JVM entende que o separador decimal é a vírgula. Então, ao chamar <code class="code-inline">nextDouble()</code>, você deve digitar <code class="code-inline">7,5</code>. Se digitar <code class="code-inline">7.5</code> (com ponto), o Scanner rejeitará o formato e lançará um <code class="code-inline">InputMismatchException</code> ("Erro de Incompatibilidade de Entrada"). Em sistemas em Inglês, a regra se inverte (usa‑se ponto). Fique atento a essa diferença ao testar seus programas.</li>
    </ul>

    <h3 class="section-title">4. O Fenômeno do "Travamento": O Bloqueio de Entrada</h3>
    <p class="lesson-text">Quando o programa chega a uma linha como <code class="code-inline">String nome = leitor.nextLine();</code>, o processador — que executa bilhões de operações por segundo — simplesmente para. Não é um defeito: é um estado planejado chamado <strong>Bloqueio de Entrada</strong> (<em>blocking I/O</em>). Imagine um guarda de fronteira que exige o passaporte antes de levantar a cancela. O computador fica em espera absoluta até que o usuário humano digite algo e pressione Enter. Enquanto isso, a tela preta parece congelada. Por isso, a regra de ouro é sempre colocar uma mensagem de instrução com <code class="code-inline">System.out.print</code> antes do comando de leitura, para que o usuário saiba o que fazer: <code class="code-inline">System.out.print("Digite seu nome: ");</code>. Assim, a pausa deixa de ser assustadora e passa a ser um diálogo.</p>

    <h3 class="section-title">5. O Bug Fantasma do <code class="code-inline">nextLine</code> Após Números</h3>
    <p class="lesson-text">Este é o erro campeão de dúvidas entre iniciantes. A causa está no comportamento do <strong>buffer de entrada</strong>. Quando você usa <code class="code-inline">nextInt()</code> e digita <code class="code-inline">25</code> seguido de Enter, o buffer recebe dois elementos: o número <code class="code-inline">25</code> e o caractere invisível <code class="code-inline">\\n</code> (a quebra de linha). O <code class="code-inline">nextInt()</code> consome apenas o número, deixando o <code class="code-inline">\\n</code> para trás. Na linha seguinte, se houver um <code class="code-inline">nextLine()</code>, ele encontrará imediatamente esse <code class="code-inline">\\n</code> residual e interpretará como "fim da linha", retornando uma string vazia sem dar chance ao usuário de digitar.</p>

    <p class="lesson-text"><strong>Solução definitiva:</strong> insira um <code class="code-inline">teclado.nextLine();</code> extra logo após qualquer leitura numérica (<code class="code-inline">nextInt()</code>, <code class="code-inline">nextDouble()</code>, <code class="code-inline">next()</code>). Essa linha atua como uma <strong>vassoura</strong> que limpa o Enter perdido.</p>

    <pre><code class="language-java">System.out.print("Idade: ");
int idade = leitor.nextInt();
leitor.nextLine(); // 🧹 limpa o \\n residual

System.out.print("Nome completo: ");
String nome = leitor.nextLine(); // agora funciona perfeitamente</code></pre>

    <div class="callout-warning">
      <strong>Regra prática:</strong> sempre que um método que lê tokens (como <code class="code-inline">nextInt</code>, <code class="code-inline">nextDouble</code>, <code class="code-inline">next</code>) for seguido por <code class="code-inline">nextLine</code>, coloque um <code class="code-inline">nextLine()</code> de limpeza entre eles.
    </div>

    <h3 class="section-title">6. Fechando a Torneira: <code class="code-inline">leitor.close();</code></h3>
    <p class="lesson-text">Quando o Scanner é conectado ao <code class="code-inline">System.in</code>, o sistema operacional abre um canal exclusivo de comunicação — é como instalar um cano da represa do teclado até seu programa. Se você não invocar <code class="code-inline">leitor.close();</code>, esse canal permanece aberto mesmo após o programa encerrar, causando um <strong>vazamento de recurso</strong> (<em>resource leak</em>). É o equivalente a deixar uma torneira pingando. Em programas pequenos o sistema pode limpar sozinho, mas em sistemas que rodam por horas, milhares de canais abertos esgotariam a memória. O <code class="code-inline">close()</code> envia um telegrama ao sistema: "Terminamos, pode desligar o encanamento". A boa prática manda colocá‑lo como uma das últimas linhas do <code class="code-inline">main</code>, quando você tem certeza de que não precisará mais ler dados do teclado.</p>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Com o Scanner, seus programas saem do monólogo e entram no diálogo. Você aprendeu a importar a classe correta, instanciar o objeto conectado ao teclado, escolher o método de leitura adequado para cada tipo de dado (respeitando o formato regional), entender a pausa de bloqueio e neutralizar o bug do <code class="code-inline">nextLine</code>. Mais importante: agora sabe fechar o recurso com responsabilidade. Dominar a entrada de dados fecha o ciclo básico de comunicação com o usuário e prepara o terreno para as próximas aventuras: estruturas condicionais, laços de repetição e aplicações verdadeiramente interativas.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Leitura de diferentes tipos de dados com Scanner',
      codigo: `import java.util.Scanner;

public class LeituraDados {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Digite seu nome completo: ");
        String nome = teclado.nextLine();

        System.out.print("Digite sua idade: ");
        int idade = teclado.nextInt();
        teclado.nextLine();  // 🧹 vassoura para limpar o \\n

        System.out.print("Digite sua altura (ex.: 1,75): ");
        double altura = teclado.nextDouble();

        System.out.printf("%n--- DADOS CADASTRADOS ---%n");
        System.out.printf("Nome: %s%n", nome);
        System.out.printf("Idade: %d anos%n", idade);
        System.out.printf("Altura: %.2f m%n", altura);

        teclado.close();
    }
}`,
      explicacao: `<strong>Saída no console:</strong>
<div class="terminal-output">Digite seu nome completo: Maria Oliveira
Digite sua idade: 28
Digite sua altura (ex.: 1,75): 1,68

--- DADOS CADASTRADOS ---
Nome: Maria Oliveira
Idade: 28 anos
Altura: 1,68 m</div>
O programa lê nome (com espaços) usando <code>nextLine()</code>, idade com <code>nextInt()</code> e altura com <code>nextDouble()</code>. Note a vassoura (<code>nextLine</code> extra) após o <code>nextInt()</code> para evitar o bug do Enter residual.`
    },
    {
      titulo: 'Bug do nextLine fantasma (versão com erro e corrigida)',
      codigo: `// ===== VERSÃO COM BUG =====
Scanner teclado = new Scanner(System.in);

System.out.print("Idade: ");
int idade = teclado.nextInt();   // deixa o \\n no buffer

System.out.print("Nome: ");
String nome = teclado.nextLine(); // engole o \\n e retorna vazio!
System.out.println("Nome: '" + nome + "'");


// ===== VERSÃO CORRIGIDA =====
System.out.print("Idade: ");
idade = teclado.nextInt();
teclado.nextLine();              // 🧹 limpa o \\n

System.out.print("Nome: ");
nome = teclado.nextLine();       // agora espera o usuário
System.out.println("Nome: " + nome);`,
      explicacao: `<strong>Saída da versão com bug:</strong>
<div class="terminal-output">Idade: 25
Nome: Nome: ''</div>
<strong>Saída da versão corrigida:</strong>
<div class="terminal-output">Idade: 25
Nome: João Silva
Nome: João Silva</div>
A primeira versão demonstra o bug: após digitar a idade e Enter, o <code>nextLine()</code> seguinte consome a quebra de linha e não deixa o usuário digitar o nome. A versão corrigida insere um <code>nextLine()</code> extra para limpar o buffer antes da leitura do texto.`
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual comando é necessário para utilizar a classe Scanner em um programa Java?',
      alternativas: [
        'import java.io.Scanner;',
        'import java.util.Scanner;',
        'import java.lang.Scanner;'
      ],
      respostaCorreta: 1,
      explicacao: 'O Scanner está no pacote java.util, portanto a instrução correta é import java.util.Scanner;.'
    },
    {
      pergunta: 'O que acontece se o usuário digitar um texto como "vinte" quando o programa espera um nextInt()?',
      alternativas: [
        'O texto é convertido para o número 20 automaticamente',
        'O programa lança uma exceção InputMismatchException e é interrompido',
        'O nextInt() retorna 0 como valor padrão'
      ],
      respostaCorreta: 1,
      explicacao: 'O nextInt() só aceita dígitos numéricos. Qualquer texto não numérico causa uma InputMismatchException (erro de tipo incompatível).'
    },
    {
      pergunta: 'Por que é recomendado chamar teclado.close() ao final do programa?',
      alternativas: [
        'Para evitar que o teclado físico do computador trave',
        'Para liberar o recurso do sistema associado ao Scanner e evitar vazamento de memória',
        'Para que o usuário precise reiniciar o computador'
      ],
      respostaCorreta: 1,
      explicacao: 'O .close() encerra o canal de comunicação com o sistema operacional, liberando memória e recursos que estavam alocados para monitorar o teclado.'
    }
  ]
};