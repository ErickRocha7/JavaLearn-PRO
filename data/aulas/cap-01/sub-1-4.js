// Arquivo: data/aulas/cap-01/sub-1-4.js
// Aula 1.4 – Saída de Dados com System.out e printf

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-4'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Saída de Dados com System.out e printf</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Para quem está começando, um programa que não mostra resultados é como um filme sem tela: todo o trabalho acontece nos bastidores, mas ninguém vê. Em Java, a comunicação com o usuário começa pela saída no console, e a classe <code class="code-inline">System.out</code> é a janela para o mundo exterior. Depois de conhecermos o <code class="code-inline">println</code> na aula do "Hello World", vamos agora abrir a caixa de ferramentas completa da saída de dados para dominar as três principais formas de exibir informações: os métodos <code class="code-inline">print()</code> e <code class="code-inline">println()</code>, o poderoso formatador <code class="code-inline">printf()</code>, e os caracteres de escape que controlam espaçamento e quebras de linha.</p>

    <h3 class="section-title">1. O Ponto de Partida: O Cursor Invisível e os Métodos Básicos <code class="code-inline">print()</code> e <code class="code-inline">println()</code></h3>
    <p class="lesson-text">Para entender a saída de dados, imagine que o computador se comporta como uma máquina de escrever. Existe sempre uma barrinha piscando — o <strong>cursor</strong> — que indica onde a próxima letra será desenhada. A grande diferença entre os dois comandos básicos não está no que eles escrevem, mas em <strong>onde eles deixam o cursor</strong> depois de terminar.</p>

    <h4 class="subsection-title"><code class="code-inline">System.out.print()</code> – A Escrita Contínua</h4>
    <p class="lesson-text">Este comando exibe o texto exatamente onde o cursor está e o mantém colado ao final do texto. É como carimbar uma palavra e deixar a mão parada com o carimbo encostado no papel. Se você usar dois <code class="code-inline">print</code> consecutivos, os textos ficarão grudados:</p>
    <pre><code class="language-java">System.out.print("Olá, ");
System.out.print("Mundo!");</code></pre>
    <div class="terminal-output">Olá, Mundo!</div>
    <p class="lesson-text">Repare no espaço dentro de <code class="code-inline">"Olá, "</code>: ele é essencial para que as palavras não fiquem coladas como <em>Olá,Mundo!</em>. O <code class="code-inline">print</code> é bruto: ele apenas escreve e para.</p>

    <h4 class="subsection-title"><code class="code-inline">System.out.println()</code> – O Carimbo com Enter Automático</h4>
    <p class="lesson-text">O "ln" vem de <strong>line</strong> (linha). Ele faz duas ações consecutivas: primeiro desenha o texto e, assim que termina o último caractere, empurra o cursor para o início da linha de baixo — exatamente como a tecla Enter. É como carimbar a palavra e puxar a folha para cima, deixando o papel pronto para a próxima linha.</p>
    <pre><code class="language-java">System.out.println("Olá,");
System.out.println("Mundo!");</code></pre>
    <div class="terminal-output">Olá,
Mundo!</div>
    <p class="lesson-text">Existe ainda a versão sem argumentos, <code class="code-inline">System.out.println();</code>, que simplesmente pula uma linha em branco — útil para dar espaço visual entre blocos de informação.</p>

    <h3 class="section-title">2. O Poder da Formatação Profissional: <code class="code-inline">System.out.printf()</code></h3>
    <p class="lesson-text">Quando precisamos misturar textos fixos com informações dinâmicas (como o nome de um cliente e o valor de uma compra), usar <code class="code-inline">println</code> com concatenação (colando pedaços com <code class="code-inline">+</code>) gera um código confuso e propenso a erros:</p>
    <pre><code class="language-java">System.out.println("Olá, " + nome + "! O total foi R$ " + total + ".");</code></pre>

    <p class="lesson-text">O <code class="code-inline">printf</code> (de <em>print formatted</em>) resolve isso com elegância. Em vez de retalhar a frase, você escreve a frase inteira de uma só vez, dentro de um único par de aspas, e insere <strong>especificadores de formato</strong> — marcas que começam com <code class="code-inline">%</code> — nos lugares onde os dados dinâmicos devem entrar. Pense no <code class="code-inline">printf</code> como um gabarito de papelão: você tem uma frase padrão com buracos recortados, e depois encaixa as variáveis nesses buracos.</p>

    <h4 class="subsection-title">Os principais especificadores de formato (os "buracos")</h4>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong><code class="code-inline">%s</code> – String:</strong> Para textos, nomes, palavras. Vem de <em>String</em>. É o mais flexível: aceita qualquer texto.</li>
      <li><strong><code class="code-inline">%d</code> – Número inteiro (decimal integer):</strong> Exclusivo para números sem casas decimais: idade, quantidade, ano. Se tentar passar um número quebrado, o programa trava.</li>
      <li><strong><code class="code-inline">%f</code> – Número com ponto flutuante (float/double):</strong> Para valores financeiros, medidas, notas escolares. Por padrão, exibe 6 casas decimais — por isso quase sempre o combinamos com controle de precisão (ex: <code class="code-inline">%.2f</code>).</li>
      <li><strong><code class="code-inline">%c</code> – Caractere único:</strong> Uma letra ou símbolo isolado, representado entre aspas simples no código, como <code class="code-inline">'A'</code>.</li>
      <li><strong><code class="code-inline">%n</code> – Nova linha independente de plataforma:</strong> Explicado mais adiante.</li>
    </ul>

    <p class="lesson-text">Exemplo prático:</p>
    <pre><code class="language-java">String nome = "João";
int idade = 25;
double saldo = 1250.75;
System.out.printf("Cliente: %s | Idade: %d | Saldo: R$ %.2f%n", nome, idade, saldo);</code></pre>
    <div class="terminal-output">Cliente: João | Idade: 25 | Saldo: R$ 1250,75</div>

    <div class="callout-warning">
      <strong>A Regra de Ouro da Sincronia:</strong> O <code class="code-inline">printf</code> lê o molde e a lista de variáveis como uma esteira de correspondência cega. A <strong>ordem</strong> e a <strong>quantidade</strong> precisam bater perfeitamente. Se você criar três buracos (<code class="code-inline">%s, %d, %.2f</code>), deve passar exatamente três variáveis após a vírgula, na mesma sequência e com tipos compatíveis. Inverter um texto com um número, por exemplo, causa um erro grave que interrompe o programa.
    </div>

    <h3 class="section-title">3. Controle Cirúrgico das Casas Decimais</h3>
    <p class="lesson-text">Por padrão, <code class="code-inline">%f</code> exibe seis casas decimais (ex: <code class="code-inline">1500.500000</code>), o que é péssimo para os olhos de um usuário. Para ditar exatamente quantas casas aparecerão, inserimos um ponto (<code class="code-inline">.</code>) seguido do número desejado entre o <code class="code-inline">%</code> e o <code class="code-inline">f</code>:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><code class="code-inline">%.1f</code> → 1 casa (médias, temperaturas)</li>
      <li><code class="code-inline">%.2f</code> → 2 casas (padrão para valores monetários)</li>
      <li><code class="code-inline">%.3f</code> → 3 casas (combustível, precisão laboratorial)</li>
    </ul>

    <p class="lesson-text">O Java não simplesmente corta os dígitos: ele aplica <strong>arredondamento matemático</strong>. Se o valor for <code class="code-inline">8.666666</code> e usarmos <code class="code-inline">%.2f</code>, o Java olha o terceiro dígito (6, que é ≥ 5) e arredonda para cima, exibindo <code class="code-inline">8.67</code>. Se fosse <code class="code-inline">8.664321</code>, manteria <code class="code-inline">8.66</code>. Importante: essa formatação altera apenas a aparência na tela; o número original na memória permanece intacto para eventuais cálculos.</p>

    <h3 class="section-title">4. A Localização: Por que às vezes aparece ponto e às vezes vírgula?</h3>
    <p class="lesson-text">Uma dúvida muito comum é: "Por que meu número apareceu com vírgula (1500,50) ou com ponto (1500.50)?". Isso não é um defeito. O <code class="code-inline">printf</code> respeita as configurações regionais (<em>Locale</em>) da Máquina Virtual Java instalada no seu computador. Se o sistema está em Português do Brasil, o Java automaticamente usa a vírgula como separador decimal. Se está em Inglês Americano, usa o ponto. Essa inteligência torna seu software internacionalizável: o mesmo programa se adapta à cultura visual do usuário sem alterar uma linha de código.</p>

    <div class="callout-warning">
      <strong>Atenção:</strong> Na hora de escrever o código-fonte, você sempre usa ponto para números decimais (ex: <code class="code-inline">double total = 1500.50;</code>). A vírgula dentro do editor de texto serve para separar comandos e confundiria o compilador.
    </div>

    <h3 class="section-title">5. Caracteres de Escape: Comandos Invisíveis para o Cursor</h3>
    <p class="lesson-text">O <code class="code-inline">printf</code> não pula linha sozinho — ele deixa o cursor colado no último caractere. Para forçar uma quebra, usamos comandos invisíveis embutidos no molde:</p>

    <ul class="topic-list space-y-2 mb-4">
      <li><strong><code class="code-inline">\\n</code> (newline):</strong> Caractere de escape universal. A barra invertida sinaliza que a letra seguinte não é texto, mas uma ordem. <code class="code-inline">\\n</code> joga o cursor para a linha de baixo. Funciona em qualquer método (<code class="code-inline">print</code>, <code class="code-inline">println</code>, <code class="code-inline">printf</code>).</li>
      <li><strong><code class="code-inline">%n</code> (nativo do printf):</strong> Faz a mesma coisa que <code class="code-inline">\\n</code>, mas é a escolha profissional recomendada. Por trás dos panos, diferentes sistemas operacionais usam códigos diferentes para pular linha (Linux/Mac usam um código, Windows usa dois). O <code class="code-inline">%n</code> age como um camaleão: a JVM detecta o sistema e insere automaticamente o código de quebra correto, garantindo que o programa funcione perfeitamente em qualquer lugar.</li>
    </ul>

    <p class="lesson-text">Exemplo com quebras:</p>
    <pre><code class="language-java">System.out.printf("Olá, %s!%n", nome);
System.out.printf("Seu saldo é R$ %.2f.%n", total);</code></pre>
    <div class="terminal-output">Olá, Maria!
Seu saldo é R$ 1500,50.</div>
    <p class="lesson-text">Se o <code class="code-inline">%n</code> for omitido, as frases sairiam grudadas.</p>

    <h3 class="section-title">6. Tabulação com <code class="code-inline">\\t</code></h3>
    <p class="lesson-text">Outro caractere de escape útil é o <code class="code-inline">\\t</code> (tabulação). Ele insere um espaçamento horizontal grande e fixo, alinhando o conteúdo à próxima "parada de tabulação" do terminal. É ótimo para criar pequenas tabelas improvisadas:</p>
    <pre><code class="language-java">System.out.println("PRODUTO:\\tPREÇO");
System.out.println("Arroz:\\tR$ 5.50");
System.out.println("Feijão:\\tR$ 8.90");</code></pre>
    <div class="terminal-output">PRODUTO:    PREÇO
Arroz:      R$ 5.50
Feijão:     R$ 8.90</div>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Dominar <code class="code-inline">print</code>, <code class="code-inline">println</code> e <code class="code-inline">printf</code> significa controlar a experiência do usuário na linha de comando. Com <code class="code-inline">print</code> você mantém o fluxo contínuo; com <code class="code-inline">println</code> organiza a saída em blocos; com <code class="code-inline">printf</code> e seus especificadores você produz textos dinâmicos, alinhados e com aparência profissional, controlando casas decimais e adaptando-se ao idioma do usuário. Agora você já pode escrever programas que não apenas calculam, mas também comunicam resultados com clareza e elegância.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Demonstração de print, println e formatação com printf',
      codigo: `public class SaidaFormatada {
    public static void main(String[] args) {
        String nome = "Maria";
        int idade = 30;
        double altura = 1.68;

        // print: tudo na mesma linha, sem quebra
        System.out.print("Nome: " + nome);
        System.out.print(" | Idade: " + idade);
        System.out.println(); // pula uma linha

        // println: quebra automática
        System.out.println("--- Dados completos ---");

        // printf com especificadores
        System.out.printf("Nome: %s | Idade: %d anos | Altura: %.2f m%n", nome, idade, altura);

        // Tabela com tabulação
        System.out.println("\\nPRODUTO\\t\\tPREÇO");
        System.out.println("Notebook\\tR$ 3500.00");
        System.out.println("Mouse\\t\\tR$ 89.90");
    }
}`,
      explicacao: `<strong>Saída no console:</strong>
<div class="terminal-output">Nome: Maria | Idade: 30
--- Dados completos ---
Nome: Maria | Idade: 30 anos | Altura: 1,68 m

PRODUTO    PREÇO
Notebook   R$ 3500.00
Mouse      R$ 89.90</div>
O programa exibe dados usando <code>print</code> (sem quebra), <code>println</code> (com quebra) e <code>printf</code> com <code>%s</code>, <code>%d</code>, <code>%.2f</code> e <code>%n</code>. O uso de <code>\\t</code> alinha as colunas da tabela.`
    },
    {
      titulo: 'Arredondamento e controle de casas decimais',
      codigo: `public class Arredondamento {
    public static void main(String[] args) {
        double valor = 8.666666;
        double preco = 49.999;

        // %.2f arredonda com base no terceiro dígito
        System.out.printf("Valor com 2 casas: %.2f%n", valor);   // 8.67
        System.out.printf("Valor com 3 casas: %.3f%n", valor);   // 8.667

        // %.2f arredonda 49.999 para 50.00
        System.out.printf("Preço formatado: R$ %.2f%n", preco);  // R$ 50,00 (ou 50.00)

        // Número original não é alterado
        System.out.println("Preço original: " + preco);          // 49.999
    }
}`,
      explicacao: `<strong>Saída no console:</strong>
<div class="terminal-output">Valor com 2 casas: 8,67
Valor com 3 casas: 8,667
Preço formatado: R$ 50,00
Preço original: 49.999</div>
Mostra que <code>%.2f</code> arredonda para cima se o dígito seguinte for >= 5. O valor original da variável permanece o mesmo; a formatação afeta apenas a exibição.`
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual a principal diferença entre System.out.print() e System.out.println()?',
      alternativas: [
        'print exibe números e println exibe textos',
        'print mantém o cursor na mesma linha após exibir; println move o cursor para a próxima linha',
        'print é mais rápido que println'
      ],
      respostaCorreta: 1,
      explicacao: 'O print() exibe o conteúdo e deixa o cursor logo após o texto. Já o println() faz o mesmo, mas depois insere uma quebra de linha, movendo o cursor para o início da linha seguinte.'
    },
    {
      pergunta: 'No comando System.out.printf("Nome: %s, Idade: %d", nome, idade);, o que %s e %d significam respectivamente?',
      alternativas: [
        'String e double',
        'String e inteiro (decimal)',
        'Símbolo e dígito'
      ],
      respostaCorreta: 1,
      explicacao: '%s é o especificador para String (texto) e %d é para números inteiros (decimal integer). Eles devem corresponder aos tipos das variáveis passadas.'
    },
    {
      pergunta: 'Por que é recomendado usar %n em vez de \\n no printf?',
      alternativas: [
        'Porque %n é mais rápido',
        'Porque %n se adapta automaticamente ao código de nova linha do sistema operacional, garantindo portabilidade',
        'Porque \\n foi descontinuado nas versões recentes do Java'
      ],
      respostaCorreta: 1,
      explicacao: '\\n é o caractere de escape genérico, mas diferentes SOs usam sequências diferentes. O %n é inteligente: a JVM insere a quebra de linha correta para a plataforma em execução, tornando o código mais portável.'
    }
  ]
};