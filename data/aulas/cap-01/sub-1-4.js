// Arquivo: data/aulas/cap-01/sub-1-4.js
// Aula 1.4 – Saída de Dados com System.out e printf

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-4'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Saída de Dados com System.out e printf</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Um programa que não mostra resultados é como um filme sem tela: todo o trabalho acontece nos bastidores, mas ninguém vê. Em Java, a comunicação com o usuário começa pela saída no console, e a classe <code class="code-inline">System.out</code> é a janela para o mundo exterior. Nesta aula, vamos dominar as três ferramentas fundamentais para exibir informações: os métodos <code class="code-inline">print()</code> e <code class="code-inline">println()</code>, o formatador profissional <code class="code-inline">printf()</code> e os caracteres de escape que controlam espaçamento e quebras de linha.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Toda interação de um programa Java com o terminal acontece através de fluxos de saída. <code class="code-inline">System.out</code> é um objeto que representa a saída padrão (normalmente a tela) e oferece métodos para escrever texto. O <strong>cursor</strong> — aquela barra vertical que pisca — é o ponto de referência: ele indica onde o próximo caractere será desenhado.</p>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. Os Métodos Básicos: print() e println()</h4>

    <ul class="topic-list space-y-3 mb-4">
      <li><strong><code class="code-inline">print()</code> – Texto em Fila Indiana:</strong> Exibe a mensagem e <strong>mantém o cursor na mesma linha</strong>. Dois comandos <code class="code-inline">print</code> consecutivos produzem saída colada: <code class="code-inline">Olá Mundo!</code>.</li>
      <li><strong><code class="code-inline">println()</code> – O Carimbo com Enter Automático:</strong> A sigla significa <em>print line</em>. Após escrever o texto, ele <strong>insere uma quebra de linha</strong>. A versão sem argumentos, <code class="code-inline">System.out.println();</code>, apenas pula uma linha.</li>
    </ul>

    <pre><code class="language-java">// Exemplo combinado
System.out.print("Primeiro ");
System.out.print("grudado. ");
System.out.println("Agora com quebra.");
System.out.println();  // linha em branco
System.out.print("Depois do espaço.");</code></pre>

    <div class="terminal-output">
Primeiro grudado. Agora com quebra.

Depois do espaço.
    </div>

    <h4 class="subsection-title">2. Formatação Profissional com printf</h4>
    <p class="lesson-text">Enquanto <code class="code-inline">print/println</code> apenas despejam dados, <code class="code-inline">printf</code> (de <em>print formatted</em>) funciona como uma <strong>prensa de estampar</strong>: você define um molde com espaços reservados e depois informa os valores que preencherão esses espaços.</p>

    <p class="lesson-text"><strong>Os especificadores de formato (as "vagas"):</strong></p>
    <ul class="topic-list space-y-2 mb-4">
      <li><code class="code-inline">%s</code> → String (texto)</li>
      <li><code class="code-inline">%d</code> → Decimal (número inteiro)</li>
      <li><code class="code-inline">%f</code> → Float (número com ponto flutuante)</li>
      <li><code class="code-inline">%n</code> → Nova linha (independente de plataforma)</li>
    </ul>

    <pre><code class="language-java">String nome = "João";
int idade = 25;
double saldo = 1250.75;
System.out.printf("Cliente: %s | Idade: %d | Saldo: R$ %.2f%n", nome, idade, saldo);</code></pre>

    <div class="terminal-output">Cliente: João | Idade: 25 | Saldo: R$ 1250.75</div>

    <div class="callout-warning">
      <strong>Atenção com ordem e quantidade!</strong> Se você declarar três especificadores e fornecer apenas dois argumentos, o programa lançará uma exceção <code class="code-inline">MissingFormatArgumentException</code>. A regra é clara: <strong>mesma quantidade e tipos compatíveis</strong>.
    </div>

    <h4 class="subsection-title">3. Controle de Casas Decimais (%.2f e variantes)</h4>
    <p class="lesson-text">Por padrão, o <code class="code-inline">%f</code> exibe 6 casas decimais. Para sistemas que lidam com dinheiro, pesos ou médias escolares, isso é visualmente inadequado. A solução é adicionar <code class="code-inline">.</code> (ponto) e um número entre o <code class="code-inline">%</code> e o <code class="code-inline">f</code>:</p>

    <ul class="topic-list space-y-2 mb-4">
      <li><code class="code-inline">%.1f</code> – 1 casa decimal (ex.: médias, temperatura)</li>
      <li><code class="code-inline">%.2f</code> – 2 casas decimais (<strong>padrão para valores monetários</strong>)</li>
      <li><code class="code-inline">%.3f</code> – 3 casas decimais (combustível, balanças de precisão)</li>
    </ul>

    <p class="lesson-text">O Java <strong>arredonda</strong> com base no primeiro dígito omitido (se for 5 ou mais, sobe; caso contrário, mantém). O valor original armazenado na variável não é alterado.</p>

    <h4 class="subsection-title">4. Caracteres de Escape: Comandos Invisíveis</h4>
    <ul class="topic-list space-y-3 mb-4">
      <li><strong><code class="code-inline">\\n</code> – Nova linha:</strong> Insere uma quebra de linha exatamente onde aparece. Funciona em qualquer método.</li>
      <li><strong><code class="code-inline">\\t</code> – Tabulação:</strong> Adiciona um espaçamento horizontal grande e fixo, alinhando o conteúdo seguinte à próxima "parada de tabulação" do terminal.</li>
    </ul>

    <div class="callout-info">
      <strong>Diferença entre \\n e %n:</strong> Enquanto <code class="code-inline">\\n</code> é um caractere de escape universal, o <code class="code-inline">%n</code> é <strong>específico do printf</strong> e consulta o sistema operacional para inserir o caractere correto de nova linha (LF no Linux/macOS, CRLF no Windows). Em programas portáteis, <code class="code-inline">%n</code> é a escolha mais segura dentro do <code class="code-inline">printf</code>.
    </div>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Dominar <code class="code-inline">print</code>, <code class="code-inline">println</code> e <code class="code-inline">printf</code> significa controlar a experiência do usuário na linha de comando. Com <code class="code-inline">print</code> você mantém o fluxo contínuo; com <code class="code-inline">println</code> organiza a saída em blocos; com <code class="code-inline">printf</code> e os especificadores você produz textos dinâmicos, alinhados e com aparência profissional.</p>
    <p class="lesson-text">Agora você já pode escrever programas que não apenas calculam, mas também <strong>comunicam resultados com clareza</strong>.</p>
  `,

  imagens: [],

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