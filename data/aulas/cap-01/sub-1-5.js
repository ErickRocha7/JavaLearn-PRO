// Arquivo: data/aulas/cap-01/sub-1-5.js
// Aula 1.5 – Entrada de Dados com Scanner

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-5'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Entrada de Dados com Scanner</h2>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Introdução</h3>
    <p class="mb-4">Até agora, seus programas apenas emitiam informações — eram como um alto‑falante sem microfone. Com a classe <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Scanner</code>, o Java ganha ouvidos e aprende a escutar o que o usuário digita. Dominar a entrada de dados é o que transforma um script rígido em uma aplicação interativa de verdade.</p>
    <p class="mb-4">Nesta aula, vamos percorrer os quatro pilares que tornam isso possível: importar a ferramenta, instanciá‑la, escolher o método de leitura adequado para cada tipo de dado e, por fim, fechar o recurso de forma responsável. Também vamos detonar o bug mais temido por iniciantes — o <em>nextLine fantasma</em> — e entender exatamente por que ele acontece e como solucioná‑lo.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Desenvolvimento</h3>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">1. Importação: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">import java.util.Scanner;</code></h4>
    <p class="mb-4">O Java não carrega todas as suas bibliotecas de uma só vez — isso consumiria memória desnecessariamente. Em vez disso, ele mantém as ferramentas menos usadas em um grande almoxarifado chamado <strong>Biblioteca Padrão</strong>, organizado em pacotes (pastas). Para usar o Scanner, você precisa pedir ao almoxarifado que traga a ferramenta até sua classe.</p>
    <p class="mb-4">O comando <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">import java.util.Scanner;</code> fornece o endereço exato: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">java</code> (pasta raiz) → <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">util</code> (subpasta de utilitários) → <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Scanner</code> (a ferramenta que lê fluxos de entrada). Se essa linha faltar, o compilador exibirá o erro <em>"cannot find symbol – class Scanner"</em>, pois não reconhecerá a palavra <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Scanner</code> no código.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">2. Instanciação: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Scanner teclado = new Scanner(System.in);</code></h4>
    <p class="mb-4">Importar o <em>manual</em> do Scanner não basta — é preciso fabricar o objeto na memória RAM. Esse processo chama‑se <strong>instanciação</strong> e a peça central é o operador <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">new</code>.</p>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Scanner teclado</code>:</strong> reserva uma vaga na memória chamada <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">teclado</code> que só aceita objetos do tipo Scanner.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">new Scanner(...)</code>:</strong> liga os circuitos, aloca espaço e materializa um objeto Scanner novinho, seguindo a receita da classe.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">(System.in)</code>:</strong> passa ao construtor o fluxo de entrada. <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.in</code> representa o teclado físico — é como conectar o cabo do robô Scanner na tomada do hardware.</li>
    </ul>
    <p class="mb-4">Após essa linha, o objeto <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">teclado</code> está vivo, ouvindo o teclado e aguardando ordens de leitura.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">3. Métodos de Leitura: Os Quatro Botões de Coleta</h4>
    <p class="mb-4">Cada tipo de dado exige um método específico. Escolher o botão errado pode travar o programa com uma exceção ou produzir resultados inesperados.</p>

    <ul class="list-disc ml-6 mb-4 space-y-3">
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">next()</code> – Palavra única:</strong> captura apenas o primeiro token até encontrar um espaço. Se o usuário digitar <em>"João Pedro"</em>, o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">next()</code> retorna só <em>"João"</em>. Ideal para códigos e nomes simples.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">nextLine()</code> – Linha inteira:</strong> engole tudo até o Enter (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">\\n</code>), preservando espaços. Perfeito para nomes completos, endereços e frases.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">nextInt()</code> – Número inteiro:</strong> só aceita dígitos de 0 a 9 e converte para <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">int</code>. Se o usuário digitar <em>"vinte"</em>, estoura <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">InputMismatchException</code>.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">nextDouble()</code> – Número com casas decimais:</strong> captura números como <em>7.5</em> ou <em>19,90</em> (dependendo da configuração regional) e converte para <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">double</code>. Usado para preços, pesos e medidas.</li>
    </ul>

    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
System.out.print("Nome: ");
String nome = teclado.nextLine();

System.out.print("Idade: ");
int idade = teclado.nextInt();

System.out.print("Altura: ");
double altura = teclado.nextDouble();

System.out.printf("%s tem %d anos e %.2f m de altura.%n", nome, idade, altura);</pre>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">4. Gerenciamento: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">.close()</code> e o Dever de Fechar a Torneira</h4>
    <p class="mb-4">Quando um Scanner é conectado ao <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.in</code>, o Java abre um canal de comunicação dedicado com o sistema operacional — um <strong>recurso do sistema</strong>. Enquanto esse canal fica aberto, consome memória e mantém o hardware em estado de alerta.</p>
    <p class="mb-4">Se você não invocar <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">teclado.close();</code>, esse canal permanece vivo até o programa terminar. Em aplicações de longa duração, o acúmulo de canais abertos gera o <strong>Resource Leak</strong> (vazamento de recursos), que pode deixar o sistema lento ou até derrubar servidores.</p>
    <p class="mb-4"><strong>Analogia:</strong> É como abrir uma torneira para encher um copo e ir embora sem fechá‑la — a água (memória e CPU) continua sendo desperdiçada.</p>
    <p class="mb-4">Versões modernas do Java oferecem o <strong>try-with-resources</strong>, que fecha o Scanner automaticamente ao final de um bloco, mesmo que ocorra um erro. Por enquanto, a prática manual com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">.close()</code> é essencial para construir responsabilidade profissional.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">5. O Bug Fantasma: Por que o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">nextLine()</code> pula após <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">nextInt()</code>?</h4>
    <p class="mb-4">Este é o erro campeão de dúvidas entre iniciantes. O programa parece pular uma linha de leitura sem dar chance ao usuário. A causa é o comportamento do <strong>buffer de entrada</strong> (a "garganta do teclado").</p>
    <p class="mb-4">Quando você usa <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">nextInt()</code> e digita <em>25</em> seguido de Enter, o buffer recebe dois elementos: o número <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">25</code> e o caractere invisível <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">\\n</code> (a quebra de linha gerada pelo Enter). O <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">nextInt()</code> consome apenas o número, deixando o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">\\n</code> para trás.</p>
    <p class="mb-4">Logo em seguida, o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">nextLine()</code> encontra esse <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">\\n</code> remanescente e o interpreta como "fim da linha", retornando uma string vazia e avançando sem esperar o usuário.</p>
    <p class="mb-4"><strong>A solução:</strong> insira um <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">teclado.nextLine();</code> extra logo após o método numérico — a famosa <strong>"vassoura"</strong> que limpa o Enter perdido.</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
System.out.print("Idade: ");
int idade = teclado.nextInt();
teclado.nextLine();  // 🧹 limpa o \\n residual

System.out.print("Nome: ");
String nome = teclado.nextLine();  // agora funciona perfeitamente</pre>
    <p class="mb-4"><strong>Regra de ouro:</strong> sempre que um método que lê tokens (nextInt, nextDouble, next) for seguido por nextLine, coloque uma vassoura entre eles.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Detalhamento Técnico</h3>
    <p class="mb-4"><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">java.util.Scanner</code> é uma classe introduzida no Java 5 que simplifica a leitura de fluxos de texto. Internamente, ela divide a entrada em tokens usando um delimitador (por padrão, espaços em branco). Os métodos <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">nextInt</code> e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">nextDouble</code> parseiam o token para o tipo numérico correspondente; se o token não puder ser convertido, lançam <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">InputMismatchException</code>.</p>
    <p class="mb-4">O <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.in</code> é um <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">InputStream</code> que, uma vez fechado com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">.close()</code>, não pode ser reaberto. Por isso, em programas que precisam ler do teclado em vários pontos, é comum manter uma única instância de Scanner (atrelada ao System.in) durante toda a execução e fechá‑la apenas no final.</p>
    <p class="mb-4">O bug do <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">nextLine</code> é agravado pelo fato de o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">nextInt</code> (e similares) não consumir o delimitador que encontra após o token. A abordagem com a "vassoura" é a mais didática, mas também é possível redefinir o delimitador do Scanner ou usar <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Integer.parseInt(teclado.nextLine())</code> para ler tudo como string e converter manualmente.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Aplicações Práticas</h3>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>Formulários interativos:</strong> combine prompts com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">print</code> e leituras com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Scanner</code> para coletar nome, idade e e‑mail do usuário.</li>
      <li><strong>Calculadoras:</strong> leia dois números com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">nextDouble()</code> e exiba o resultado da operação escolhida.</li>
      <li><strong>Menus navegáveis:</strong> use <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">nextInt()</code> para capturar a opção do menu e um laço <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">while</code> para manter o programa rodando até o usuário escolher "Sair".</li>
      <li><strong>Validação robusta:</strong> trate possíveis erros de tipo (ex.: letras em campo numérico) com exceções, orientando o usuário a digitar novamente — um padrão que você verá ao estudar tratamento de exceções.</li>
    </ul>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Conclusão</h3>
    <p class="mb-4">Com o Scanner, seus programas saem do monólogo e entram no diálogo. Você aprendeu a importar a classe correta, instanciar o objeto apontando para o teclado, escolher o método de leitura adequado e fechar o recurso com responsabilidade. Mais importante ainda, descobriu a mecânica por trás do bug do <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">nextLine</code> e como neutralizá‑lo.</p>
    <p>Dominar a entrada de dados fecha o ciclo básico de comunicação com o usuário e prepara o terreno para os próximos tópicos: estruturas condicionais e laços de repetição, onde você começará a tomar decisões com base justamente no que o usuário informar.</p>
  `,

  imagens: [
    // Espaço reservado para futuras imagens.
  ],

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
      explicacao: 'O .close() encerra o canal de comunicação com o sistema operacional, liberando memória e recursos que estavam alocados para monitorar o teclado. Isso evita o acúmulo de recursos abertos (resource leak).'
    }
  ]
};