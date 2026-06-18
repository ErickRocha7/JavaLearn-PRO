// Arquivo: data/aulas/cap-01/sub-1-8.js
// Aula 1.8 – Estudo de Caso: Calculadora Simples

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-8'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Estudo de Caso: Calculadora Simples</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Chegamos ao momento de integração total. Depois de estudar entrada de dados, operadores aritméticos, operadores lógicos, saída formatada e os segredos do <code class="code-inline">Scanner</code>, vamos unir todas essas peças em um único sistema funcional: uma calculadora interativa que recebe dois números, pergunta qual operação o usuário deseja realizar e exibe o resultado com precisão profissional.</p>
    <p class="lesson-text">Este estudo de caso é o teste definitivo de consolidação. Vamos construir o programa completo, linha por linha, entendendo como cada conceito estudado até aqui se conecta aos demais.</p>

    <h3 class="section-title">1. Visão Geral: O Modelo IPO (Input – Process – Output)</h3>
    <p class="lesson-text">Todo sistema de software, do mais simples ao mais complexo, segue um ciclo universal: <strong>Entrada → Processamento → Saída</strong>. A calculadora implementa esse ciclo de forma didática e transparente:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Entrada (Input):</strong> o <code class="code-inline">Scanner</code> captura a opção do menu e os dois números fornecidos pelo usuário.</li>
      <li><strong>Processamento (Process):</strong> uma estrutura condicional <code class="code-inline">if/else if/else</code> direciona o fluxo para o operador aritmético correto.</li>
      <li><strong>Saída (Output):</strong> o método <code class="code-inline">printf</code> formata o resultado com duas casas decimais.</li>
    </ul>

    <div class="callout-analogy">
      <strong>Analogia do fast-food:</strong> o cliente faz o pedido (entrada), a cozinha prepara o lanche (processamento) e a bandeja é entregue organizada no balcão (saída). Se qualquer etapa falhar, a experiência desmorona.
    </div>

    <h3 class="section-title">2. Construindo o Menu Textual</h3>
    <p class="lesson-text">Antes de qualquer cálculo, o programa precisa orientar o usuário. Um terminal vazio com um cursor piscando é intimidador e inútil. O menu textual funciona como os botões numerados de uma máquina de refrigerante.</p>

    <pre><code class="language-java">System.out.println("=== 🧮 CALCULADORA INTEGRADA ===");
System.out.println("Escolha a operação matemática:");
System.out.println("[1] Soma (+)");
System.out.println("[2] Subtração (-)");
System.out.println("[3] Multiplicação (*)");
System.out.println("[4] Divisão (/)");
System.out.print("Digite a sua opção (1 a 4): ");
int opcao = teclado.nextInt();</code></pre>

    <p class="lesson-text">Observe o uso estratégico de <code class="code-inline">print()</code> na última linha. Como aprendemos, ele mantém o cursor colado à pergunta, criando um visual elegante onde o usuário digita o número exatamente ao lado do texto.</p>

    <h3 class="section-title">3. Entrada dos Dados Numéricos</h3>
    <p class="lesson-text">Após capturar a opção do menu, o programa solicita os dois operandos. Aqui usamos <code class="code-inline">nextDouble()</code> para aceitar números com casas decimais.</p>

    <pre><code class="language-java">System.out.print("Digite o primeiro número: ");
double num1 = teclado.nextDouble();
System.out.print("Digite o segundo número: ");
double num2 = teclado.nextDouble();</code></pre>

    <h3 class="section-title">4. A Estrutura Condicional: Direcionando o Fluxo</h3>
    <p class="lesson-text">Sem uma estrutura de decisão, o Java executaria todas as operações em sequência. Para evitar esse caos, usamos o bloco <code class="code-inline">if / else if / else</code>, que funciona como um entroncamento de trilhos.</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong><code class="code-inline">if (opcao == 1)</code>:</strong> testa se o usuário escolheu soma. Se sim, entra no bloco, executa a adição e salta para o final.</li>
      <li><strong><code class="code-inline">else if (opcao == 2)</code>:</strong> segunda tentativa (subtração).</li>
      <li><strong><code class="code-inline">else</code>:</strong> sem nenhuma condição — é o paraquedas. Se nenhuma das opções anteriores for verdadeira, o fluxo cai aqui.</li>
    </ul>

    <h3 class="section-title">5. Validação de Segurança: Protegendo a Divisão por Zero</h3>
    <p class="lesson-text">Dividir por zero não é uma limitação do Java — é uma impossibilidade matemática. Dentro do bloco da divisão (opção 4), erguemos uma barreira de proteção:</p>

    <pre><code class="language-java">if (num2 == 0) {
    System.out.println("❌ Erro fatal: Não é possível dividir por zero!");
    teclado.close();
    return;  // encerra o programa imediatamente
}</code></pre>

    <p class="lesson-text">O comando <code class="code-inline">return</code> dentro de <code class="code-inline">main</code> é um freio de emergência: ele interrompe a execução do método e devolve o controle ao sistema operacional.</p>

    <h3 class="section-title">6. Saída Formatada com printf</h3>
    <p class="lesson-text">Se tudo correu bem, o programa exibe o relatório final. Em vez de simplesmente jogar o valor bruto na tela, usamos <code class="code-inline">printf</code> para montar uma frase elegante.</p>

    <pre><code class="language-java">System.out.printf("CÁLCULO: %.2f %s %.2f = %.2f%n", num1, simbolo, num2, resultado);</code></pre>

    <p class="lesson-text">Para a multiplicação <em>5 × 2</em>, o resultado exibido será: <strong>CÁLCULO: 5,00 * 2,00 = 10,00</strong>. A formatação elimina o excesso de zeros decimais e apresenta os valores como se espera em um sistema profissional.</p>

    <h3 class="section-title">7. Fechamento dos Recursos</h3>
    <p class="lesson-text">A última instrução do programa é <code class="code-inline">teclado.close();</code>. Como estudamos, o <code class="code-inline">Scanner</code> mantém um canal aberto com o sistema operacional. Fechá-lo é um ato de responsabilidade que libera a memória e os recursos de hardware.</p>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <p class="lesson-text">A lógica de <strong>curto-circuito</strong> também se aplica à estrutura condicional: o Java avalia os <code class="code-inline">if</code> e <code class="code-inline">else if</code> em ordem, parando na primeira condição verdadeira. As demais não são testadas.</p>
    <p class="lesson-text">O uso de <code class="code-inline">return</code> dentro de <code class="code-inline">main</code> é um encerramento limpo. Em aplicações maiores, poderíamos usar <code class="code-inline">System.exit(0)</code>, mas para este escopo didático, o <code class="code-inline">return</code> é suficiente.</p>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Calculadoras financeiras:</strong> adicione mais operações (porcentagem, raiz quadrada) seguindo o mesmo padrão de menu e <code class="code-inline">else if</code>.</li>
      <li><strong>Sistemas de autoatendimento:</strong> a estrutura de menu textual com validação de opções é a base para caixas eletrônicos, totens de check-in e quiosques interativos.</li>
      <li><strong>Formulários com validação:</strong> a técnica de verificar dados inválidos (como divisão por zero) antes de processá-los se aplica a qualquer campo de entrada: idade negativa, e-mail sem "@", etc.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Com esta calculadora, você integrou todos os conceitos fundamentais do Módulo 1: entrada de dados via <code class="code-inline">Scanner</code>, saída formatada com <code class="code-inline">printf</code> e <code class="code-inline">print/println</code>, operadores aritméticos e lógicos, estruturas condicionais e validação de segurança. Mais do que decorar comandos, você entendeu como eles se conectam para formar um sistema real, útil e robusto.</p>
    <p class="lesson-text">O Módulo 1 está concluído. Nos próximos capítulos, expandiremos esses alicerces com laços de repetição, arrays, orientação a objetos e muito mais.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Calculadora Simples completa',
      codigo: `import java.util.Scanner;

public class CalculadoraSimples {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        // Menu textual
        System.out.println("=== 🧮 CALCULADORA INTEGRADA ===");
        System.out.println("Escolha a operação matemática:");
        System.out.println("[1] Soma (+)");
        System.out.println("[2] Subtração (-)");
        System.out.println("[3] Multiplicação (*)");
        System.out.println("[4] Divisão (/)");
        System.out.print("Digite a sua opção (1 a 4): ");
        int opcao = teclado.nextInt();

        // Entrada dos números
        System.out.print("Digite o primeiro número: ");
        double num1 = teclado.nextDouble();
        System.out.print("Digite o segundo número: ");
        double num2 = teclado.nextDouble();

        double resultado = 0.0;
        String simbolo = "";

        // Estrutura condicional
        if (opcao == 1) {
            resultado = num1 + num2;
            simbolo = "+";
        } else if (opcao == 2) {
            resultado = num1 - num2;
            simbolo = "-";
        } else if (opcao == 3) {
            resultado = num1 * num2;
            simbolo = "*";
        } else if (opcao == 4) {
            // Validação contra divisão por zero
            if (num2 == 0) {
                System.out.println("❌ Erro fatal: Não é possível dividir por zero!");
                teclado.close();
                return;
            }
            resultado = num1 / num2;
            simbolo = "/";
        } else {
            System.out.println("❌ Opção de menu inválida!");
            teclado.close();
            return;
        }

        // Saída formatada
        System.out.printf("%nCÁLCULO: %.2f %s %.2f = %.2f%n", num1, simbolo, num2, resultado);

        teclado.close();
    }
}`,
      explicacao: 'Programa completo que integra todos os conceitos do Módulo 1: Scanner para entrada, menu textual com print/println, estrutura if/else if/else para decisão, validação de segurança contra divisão por zero, e printf para saída formatada com duas casas decimais.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual é a função da estrutura if/else if/else na calculadora?',
      alternativas: [
        'Repetir o cálculo várias vezes até o usuário acertar',
        'Direcionar o fluxo do programa para executar apenas a operação escolhida pelo usuário',
        'Validar se os números digitados são positivos'
      ],
      respostaCorreta: 1,
      explicacao: 'A estrutura condicional testa a opção escolhida pelo usuário e executa exclusivamente o bloco de código correspondente (soma, subtração, multiplicação ou divisão), ignorando os demais.'
    },
    {
      pergunta: 'Por que validamos se num2 == 0 antes de realizar a divisão?',
      alternativas: [
        'Porque a divisão por zero causaria um erro fatal (ArithmeticException) e encerraria o programa abruptamente',
        'Porque o resultado seria sempre 0, o que confundiria o usuário',
        'Porque o Java não permite que variáveis tenham o valor 0'
      ],
      respostaCorreta: 0,
      explicacao: 'Dividir por zero é uma impossibilidade matemática. O Java lança uma exceção se tentar executar essa operação. A validação antecipa o problema, exibe uma mensagem amigável e encerra o programa de forma segura.'
    }
  ]
};