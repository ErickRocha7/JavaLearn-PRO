// Arquivo: data/aulas/cap-01/sub-1-5.js
// Aula 1.5 – Entrada de Dados com Scanner

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-5'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Entrada de Dados com Scanner</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Até agora, seus programas apenas emitiam informações — eram como um alto‑falante sem microfone. Com a classe <code class="code-inline">Scanner</code>, o Java ganha ouvidos e aprende a escutar o que o usuário digita. Dominar a entrada de dados é o que transforma um script rígido em uma aplicação interativa de verdade.</p>
    <p class="lesson-text">Nesta aula, vamos percorrer os quatro pilares que tornam isso possível: importar a ferramenta, instanciá‑la, escolher o método de leitura adequado para cada tipo de dado e, por fim, fechar o recurso de forma responsável. Também vamos detonar o bug mais temido por iniciantes — o <em>nextLine fantasma</em> — e entender exatamente por que ele acontece e como solucioná‑lo.</p>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. Importação: <code class="code-inline">import java.util.Scanner;</code></h4>
    <p class="lesson-text">O Java não carrega todas as suas bibliotecas de uma só vez — isso consumiria memória desnecessariamente. Em vez disso, ele mantém as ferramentas menos usadas em um grande almoxarifado chamado <strong>Biblioteca Padrão</strong>, organizado em pacotes. Para usar o Scanner, você precisa pedir ao almoxarifado que traga a ferramenta até sua classe.</p>
    <p class="lesson-text">O comando <code class="code-inline">import java.util.Scanner;</code> fornece o endereço exato. Se essa linha faltar, o compilador exibirá o erro <em>"cannot find symbol – class Scanner"</em>.</p>

    <h4 class="subsection-title">2. Instanciação: <code class="code-inline">Scanner teclado = new Scanner(System.in);</code></h4>
    <p class="lesson-text">Importar o <em>manual</em> do Scanner não basta — é preciso fabricar o objeto na memória RAM. Esse processo chama‑se <strong>instanciação</strong> e a peça central é o operador <code class="code-inline">new</code>.</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong><code class="code-inline">Scanner teclado</code>:</strong> reserva uma vaga na memória chamada <code class="code-inline">teclado</code> que só aceita objetos do tipo Scanner.</li>
      <li><strong><code class="code-inline">new Scanner(...)</code>:</strong> materializa um objeto Scanner na memória.</li>
      <li><strong><code class="code-inline">(System.in)</code>:</strong> conecta o Scanner ao teclado físico.</li>
    </ul>

    <h4 class="subsection-title">3. Métodos de Leitura: Os Quatro Botões de Coleta</h4>
    <p class="lesson-text">Cada tipo de dado exige um método específico. Escolher o botão errado pode travar o programa com uma exceção ou produzir resultados inesperados.</p>

    <ul class="topic-list space-y-3 mb-4">
      <li><strong><code class="code-inline">next()</code> – Palavra única:</strong> captura apenas o primeiro token até encontrar um espaço.</li>
      <li><strong><code class="code-inline">nextLine()</code> – Linha inteira:</strong> engole tudo até o Enter, preservando espaços. Perfeito para nomes completos.</li>
      <li><strong><code class="code-inline">nextInt()</code> – Número inteiro:</strong> só aceita dígitos e converte para <code class="code-inline">int</code>.</li>
      <li><strong><code class="code-inline">nextDouble()</code> – Número com casas decimais:</strong> captura números como <em>7.5</em> e converte para <code class="code-inline">double</code>.</li>
    </ul>

    <pre><code class="language-java">System.out.print("Nome: ");
String nome = teclado.nextLine();

System.out.print("Idade: ");
int idade = teclado.nextInt();

System.out.print("Altura: ");
double altura = teclado.nextDouble();

System.out.printf("%s tem %d anos e %.2f m de altura.%n", nome, idade, altura);</code></pre>

    <h4 class="subsection-title">4. Gerenciamento: <code class="code-inline">.close()</code> e o Dever de Fechar a Torneira</h4>
    <p class="lesson-text">Quando um Scanner é conectado ao <code class="code-inline">System.in</code>, o Java abre um canal de comunicação dedicado com o sistema operacional — um <strong>recurso do sistema</strong>. Se você não invocar <code class="code-inline">teclado.close();</code>, esse canal permanece vivo até o programa terminar.</p>

    <div class="callout-analogy">
      <strong>Analogia:</strong> É como abrir uma torneira para encher um copo e ir embora sem fechá‑la — a água (memória e CPU) continua sendo desperdiçada.
    </div>

    <h4 class="subsection-title">5. O Bug Fantasma: Por que o <code class="code-inline">nextLine()</code> pula após <code class="code-inline">nextInt()</code>?</h4>
    <p class="lesson-text">Este é o erro campeão de dúvidas entre iniciantes. A causa é o comportamento do <strong>buffer de entrada</strong>.</p>
    <p class="lesson-text">Quando você usa <code class="code-inline">nextInt()</code> e digita <em>25</em> seguido de Enter, o buffer recebe dois elementos: o número <code class="code-inline">25</code> e o caractere invisível <code class="code-inline">\\n</code>. O <code class="code-inline">nextInt()</code> consome apenas o número, deixando o <code class="code-inline">\\n</code> para trás. Logo em seguida, o <code class="code-inline">nextLine()</code> encontra esse <code class="code-inline">\\n</code> remanescente e o interpreta como "fim da linha", retornando uma string vazia.</p>

    <p class="lesson-text"><strong>A solução:</strong> insira um <code class="code-inline">teclado.nextLine();</code> extra logo após o método numérico — a famosa <strong>"vassoura"</strong> que limpa o Enter perdido.</p>

    <pre><code class="language-java">System.out.print("Idade: ");
int idade = teclado.nextInt();
teclado.nextLine();  // 🧹 limpa o \\n residual

System.out.print("Nome: ");
String nome = teclado.nextLine();  // agora funciona perfeitamente</code></pre>

    <div class="callout-warning">
      <strong>Regra de ouro:</strong> sempre que um método que lê tokens (nextInt, nextDouble, next) for seguido por nextLine, coloque uma "vassoura" entre eles.
    </div>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Com o Scanner, seus programas saem do monólogo e entram no diálogo. Você aprendeu a importar a classe correta, instanciar o objeto apontando para o teclado, escolher o método de leitura adequado e fechar o recurso com responsabilidade. Mais importante ainda, descobriu a mecânica por trás do bug do <code class="code-inline">nextLine</code> e como neutralizá‑lo.</p>
    <p class="lesson-text">Dominar a entrada de dados fecha o ciclo básico de comunicação com o usuário e prepara o terreno para os próximos tópicos: estruturas condicionais e laços de repetição.</p>
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

        System.out.print("Digite sua altura (ex.: 1.75): ");
        double altura = teclado.nextDouble();

        System.out.printf("%n--- DADOS CADASTRADOS ---%n");
        System.out.printf("Nome: %s%n", nome);
        System.out.printf("Idade: %d anos%n", idade);
        System.out.printf("Altura: %.2f m%n", altura);

        teclado.close();
    }
}`,
      explicacao: 'O programa lê nome (com espaços) usando nextLine(), idade com nextInt() e altura com nextDouble(). Note a vassoura (nextLine extra) após o nextInt() para evitar o bug do Enter residual.'
    },
    {
      titulo: 'Bug do nextLine fantasma (versão com erro e corrigida)',
      codigo: `// ===== VERSÃO COM BUG =====
Scanner teclado = new Scanner(System.in);

System.out.print("Idade: ");
int idade = teclado.nextInt();   // deixa o \\n no buffer

System.out.print("Nome: ");
String nome = teclado.nextLine(); // engole o \\n e retorna vazio!
System.out.println("Nome: '" + nome + "'"); // Saída: Nome: ''


// ===== VERSÃO CORRIGIDA =====
System.out.print("Idade: ");
idade = teclado.nextInt();
teclado.nextLine();              // 🧹 limpa o \\n

System.out.print("Nome: ");
nome = teclado.nextLine();       // agora espera o usuário
System.out.println("Nome: " + nome); // Saída: Nome: João Silva`,
      explicacao: 'A primeira versão demonstra o bug: após digitar a idade e Enter, o nextLine() seguinte consome a quebra de linha e não deixa o usuário digitar o nome. A versão corrigida insere um nextLine() extra para limpar o buffer antes da leitura do texto.'
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