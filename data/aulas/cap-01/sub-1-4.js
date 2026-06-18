// Arquivo: data/aulas/cap-01/sub-1-4.js
// Aula 1.4 – Saída de Dados com System.out e printf

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-4'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Saída de Dados com System.out e printf</h2>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Introdução</h3>
    <p class="mb-4">Um programa que não mostra resultados é como um filme sem tela: todo o trabalho acontece nos bastidores, mas ninguém vê. Em Java, a comunicação com o usuário começa pela saída no console, e a classe <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.out</code> é a janela para o mundo exterior. Nesta aula, vamos dominar as três ferramentas fundamentais para exibir informações: os métodos <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">print()</code> e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">println()</code>, o formatador profissional <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">printf()</code> e os caracteres de escape que controlam espaçamento e quebras de linha. Ao final, você será capaz de gerar saídas claras, alinhadas e com aparência profissional.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Fundamentos</h3>
    <p class="mb-4">Toda interação de um programa Java com o terminal acontece através de fluxos de saída. <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.out</code> é um objeto que representa a saída padrão (normalmente a tela) e oferece métodos para escrever texto. O <strong>cursor</strong> – aquela barra vertical que pisca – é o ponto de referência: ele indica onde o próximo caractere será desenhado. Cada método manipula esse cursor de uma forma diferente, e é isso que determina se o texto aparecerá em sequência, em linhas separadas ou formatado em colunas.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Desenvolvimento</h3>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">1. Os Métodos Básicos: print() e println()</h4>
    <p class="mb-4">Imagine o terminal como uma máquina de escrever: a cabeça de impressão avança à medida que as letras são escritas. <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">print()</code> e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">println()</code> controlam o que acontece quando a impressão termina.</p>

    <ul class="list-disc ml-6 mb-4 space-y-3">
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">print()</code> – Texto em Fila Indiana:</strong> Exibe a mensagem e <strong>mantém o cursor na mesma linha</strong>, colado ao último caractere. É como carimbar palavras numa fita contínua: se você executar <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.out.print("Olá ");</code> seguido de <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.out.print("Mundo!");</code>, o resultado será <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Olá Mundo!</code> numa única linha, com o cursor ao lado do "!".</li>

      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">println()</code> – O Carimbo com Enter Automático:</strong> A sigla significa <em>print line</em>. Após escrever o texto, ele <strong>insere uma quebra de linha</strong> e move o cursor para o início da próxima linha. Dois comandos <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">println</code> consecutivos produzem saídas empilhadas verticalmente. A versão sem argumentos, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.out.println();</code>, apenas pula uma linha — é o equivalente a apertar Enter no editor de texto.</li>
    </ul>

    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
// Exemplo combinado
System.out.print("Primeiro ");
System.out.print("grudado. ");
System.out.println("Agora com quebra.");
System.out.println();  // linha em branco
System.out.print("Depois do espaço.");</pre>
    <p class="mb-4">A saída será:</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
Primeiro grudado. Agora com quebra.

Depois do espaço.</pre>
    <p class="mb-4">Repare que a linha em branco e o posicionamento do texto na parte inferior são controlados apenas com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">println()</code>.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">2. Formatação Profissional com printf</h4>
    <p class="mb-4">Enquanto <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">print/println</code> apenas despejam dados, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">printf</code> (de <em>print formatted</em>) funciona como uma <strong>prensa de estampar</strong>: você define um molde com espaços reservados e depois informa os valores que preencherão esses espaços. Isso elimina a complicada concatenação com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">+</code> e produz saídas muito mais legíveis e fáceis de manter.</p>

    <p class="mb-2"><strong>Os especificadores de formato (as "vagas")</strong></p>
    <p class="mb-4">Todo especificador começa com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%</code> e indica o tipo de dado que será inserido naquela posição:</p>

    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%s</code> → String (texto)</li>
      <li><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%d</code> → Decimal (número inteiro)</li>
      <li><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%f</code> → Float (número com ponto flutuante)</li>
      <li><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%n</code> → Nova linha (independente de plataforma)</li>
    </ul>

    <p class="mb-4">O Java lê o molde da esquerda para a direita. Quando encontra um <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%</code>, ele consulta a lista de argumentos (passados após as aspas, separados por vírgulas) e insere o valor correspondente na ordem em que aparecem.</p>

    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
// Exemplo com printf
String nome = "João";
int idade = 25;
double saldo = 1250.75;

System.out.printf("Cliente: %s | Idade: %d | Saldo: R$ %.2f%n", nome, idade, saldo);</pre>
    <p class="mb-4">A saída será:</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">Cliente: João | Idade: 25 | Saldo: R$ 1250.75</pre>

    <p class="mb-4"><strong>Atenção com ordem e quantidade!</strong> Se você declarar três especificadores e fornecer apenas dois argumentos, o programa lançará uma exceção <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">MissingFormatArgumentException</code>. Se colocar um número onde o molde espera <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%s</code> (ou vice‑versa), ocorrerá um erro de tipo (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">IllegalFormatConversionException</code>). A regra é clara: <strong>mesma quantidade e tipos compatíveis</strong>.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">3. Controle de Casas Decimais (%.2f e variantes)</h4>
    <p class="mb-4">Por padrão, o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%f</code> exibe 6 casas decimais – mesmo que o número seja <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">10.0</code>, veríamos <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">10.000000</code>. Para sistemas que lidam com dinheiro, pesos ou médias escolares, isso é visualmente inadequado. A solução é adicionar <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">.</code> (ponto) e um número entre o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%</code> e o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">f</code>.</p>

    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%.1f</code> – 1 casa decimal (ex.: médias, temperatura)</li>
      <li><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%.2f</code> – 2 casas decimais (<strong>padrão para valores monetários</strong>)</li>
      <li><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%.3f</code> – 3 casas decimais (combustível, balanças de precisão)</li>
    </ul>

    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
double preco = 19.9;
System.out.printf("Preço: R$ %.2f%n", preco);   // Saída: Preço: R$ 19.90

double media = 8.756;
System.out.printf("Média: %.1f%n", media);      // Saída: Média: 8.8  (arredondado!)
System.out.printf("Média: %.2f%n", media);      // Saída: Média: 8.76</pre>

    <p class="mb-4">O Java não simplesmente trunca os dígitos: ele <strong>arredonda</strong> com base no primeiro dígito omitido (se for 5 ou mais, sobe; caso contrário, mantém). Isso garante que a exibição seja a mais fiel possível ao valor real, que continua armazenado com precisão total na memória.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">4. Caracteres de Escape: Comandos Invisíveis</h4>
    <p class="mb-4">Dentro de strings, a barra invertida <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">\\</code> é um aviso: o próximo caractere não é literal, mas sim um <strong>comando de formatação</strong>. Os dois escapes mais importantes são:</p>

    <ul class="list-disc ml-6 mb-4 space-y-3">
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">\\n</code> – Nova linha:</strong> Insere uma quebra de linha exatamente onde aparece. Funciona em qualquer método (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">print</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">println</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">printf</code>) e até dentro de variáveis do tipo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">String</code>.<br>
      <em>Exemplo:</em> <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.out.print("Linha1\\nLinha2\\nLinha3");</code> produz três linhas empilhadas, como se tivesse usado <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">println</code> repetidamente.</li>

      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">\\t</code> – Tabulação:</strong> Adiciona um espaçamento horizontal grande e fixo, alinhando o conteúdo seguinte à próxima "parada de tabulação" do terminal. Ideal para montar tabelas com colunas regulares, independentemente do tamanho do texto anterior.<br>
      <em>Exemplo de tabela:</em></li>
    </ul>

    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
System.out.println("PRODUTO:\\tPREÇO");
System.out.println("Maçã:\\tR$ 5.00");
System.out.println("Abacaxi:\\tR$ 8.50");
System.out.println("Melancia\\tR$ 15.00");</pre>

    <p class="mb-4">Saída:</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
PRODUTO:        PREÇO
Maçã:           R$ 5.00
Abacaxi:        R$ 8.50
Melancia        R$ 15.00</pre>

    <p class="mb-4">Observe que os preços ficam perfeitamente alinhados mesmo que o nome do produto tenha comprimentos diferentes. O <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">\\t</code> ajusta o espaçamento automaticamente.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">Diferença entre \\n e %n</h4>
    <p class="mb-4">Enquanto <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">\\n</code> é um caractere de escape universal (pode ser usado em qualquer lugar), o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%n</code> é <strong>específico do printf</strong> e tem uma vantagem: ele consulta o sistema operacional e insere automaticamente o caractere correto de nova linha (LF no Linux/macOS, CRLF no Windows). Em programas portáteis, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%n</code> é a escolha mais segura dentro do <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">printf</code>.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Detalhamento Técnico</h3>
    <p class="mb-4"><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.out</code> é uma instância de <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">java.io.PrintStream</code>. Essa classe oferece tanto os métodos <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">print/println</code> (que usam a conversão padrão para string via <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">String.valueOf()</code>) quanto o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">printf</code>, que internamente invoca o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">java.util.Formatter</code>. É por isso que o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">printf</code> aceita a mesma sintaxe de especificadores que o método <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">String.format()</code>.</p>

    <p class="mb-4">O arredondamento em <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%.2f</code> utiliza o modo <em>half‑up</em> (se o dígito seguinte for >= 5, arredonda para cima). Por exemplo, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">4.555</code> com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%.2f</code> resulta em <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">4.56</code>. O valor original armazenado na variável não é alterado; a formatação afeta apenas a saída.</p>

    <p class="mb-4">Quanto às tabulações (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">\\t</code>), elas avançam até a próxima coluna cujo índice é múltiplo do tamanho da tabulação (normalmente 8). Se o texto anterior ocupar 7 caracteres, um <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">\\t</code> acrescentará 1 espaço; se ocupar 9, acrescentará 7 espaços até o próximo múltiplo de 8. Esse comportamento garante o alinhamento em colunas mesmo com palavras de diferentes tamanhos.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Aplicações Práticas</h3>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>Relatórios e tabelas:</strong> Use <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">\\t</code> para colunas e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">\\n</code> para quebras de linha, criando extratos bancários, listas de produtos ou boletins escolares diretamente no console.</li>
      <li><strong>Formatação monetária:</strong> Combine <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%.2f</code> com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">printf</code> para exibir preços, salários e totais com duas casas decimais, garantindo legibilidade profissional.</li>
      <li><strong>Depuração (debug):</strong> Durante o desenvolvimento, use <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.out.println</code> para imprimir o valor de variáveis e acompanhar o fluxo do programa. O <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">printf</code> é útil para exibir várias variáveis em uma única linha formatada.</li>
      <li><strong>Menus e interfaces de texto:</strong> Construa menus interativos no terminal usando <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">println</code> para as opções e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">print</code> para prompts (ex.: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.out.print("Digite sua opção: ");</code>).</li>
    </ul>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Conclusão</h3>
    <p class="mb-4">Dominar <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">print</code>, <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">println</code> e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">printf</code> significa controlar a experiência do usuário na linha de comando. Com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">print</code> você mantém o fluxo contínuo; com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">println</code> organiza a saída em blocos; com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">printf</code> e os especificadores você produz textos dinâmicos, alinhados e com aparência profissional. Os escapes <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">\\n</code> e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">\\t</code> são o toque final para estruturar tabelas e parágrafos.</p>
    <p>Agora você já pode escrever programas que não apenas calculam, mas também <strong>comunicam resultados com clareza</strong>. Nas próximas aulas, aprenderemos a receber dados do usuário, fechando o ciclo fundamental de entrada e saída.</p>
  `,

  imagens: [
    // Espaço reservado para futuras imagens. Exemplo:
    // {
    //   src: 'assets/images/printf-formatacao.png',
    //   alt: 'Demonstração do uso de printf com especificadores %s, %d e %.2f',
    //   legenda: 'Uso de printf com molde e argumentos.',
    //   largura: 600,
    //   altura: 400
    // }
  ],

  exemplos: [
    {
      titulo: 'Demonstração completa de print, println, printf e escapes',
      codigo: `public class SaidaDados {
    public static void main(String[] args) {
        // print vs println
        System.out.print("Primeiro ");
        System.out.print("grudado. ");
        System.out.println("Agora com quebra.");
        System.out.println();  // linha em branco

        // printf com especificadores
        String nome = "Maria";
        int idade = 30;
        double altura = 1.68;
        System.out.printf("Nome: %s | Idade: %d | Altura: %.2f metros%n", nome, idade, altura);

        // Controle de decimais
        double preco = 19.9;
        System.out.printf("Preço: R$ %.2f%n", preco);   // 19.90

        // Tabela com \\t
        System.out.println("PRODUTO:\\tPREÇO");
        System.out.println("Arroz:\\tR$ 5.50");
        System.out.println("Feijão:\\tR$ 8.90");
        System.out.println("Óleo:\\tR$ 12.75");
    }
}`,
      explicacao: 'O exemplo mostra a diferença entre print e println, o uso de printf com %s, %d e %.2f, e a construção de uma pequena tabela com \\t. As quebras de linha são controladas por println e pelo %n dentro do printf.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual método deve ser utilizado para exibir um texto e, em seguida, posicionar o cursor na linha seguinte?',
      alternativas: [
        'System.out.print()',
        'System.out.printf()',
        'System.out.println()'
      ],
      respostaCorreta: 2,
      explicacao: 'O println() imprime o texto e insere automaticamente uma quebra de linha ao final, movendo o cursor para o início da próxima linha.'
    },
    {
      pergunta: 'O que o especificador %.2f faz quando usado dentro de um printf?',
      alternativas: [
        'Exibe um número inteiro com dois dígitos',
        'Exibe um número com ponto flutuante limitado a duas casas decimais e arredondado',
        'Reserva duas vagas para números decimais na ordem dos argumentos'
      ],
      respostaCorreta: 1,
      explicacao: 'O %.2f formata um número de ponto flutuante (float/double) com exatamente duas casas decimais, aplicando arredondamento se necessário.'
    }
  ]
};