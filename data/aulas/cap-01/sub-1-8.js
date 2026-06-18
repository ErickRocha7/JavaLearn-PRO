// Arquivo: data/aulas/cap-01/sub-1-8.js
// Aula 1.8 – Estudo de Caso: Calculadora Simples

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-8'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Estudo de Caso: Calculadora Simples</h2>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Introdução</h3>
    <p class="mb-4">Chegamos ao momento de integração total. Depois de estudar entrada de dados, operadores aritméticos, operadores lógicos, saída formatada e os segredos do <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Scanner</code>, vamos unir todas essas peças em um único sistema funcional: uma calculadora interativa que recebe dois números, pergunta qual operação o usuário deseja realizar e exibe o resultado com precisão profissional.</p>
    <p class="mb-4">Este estudo de caso é o teste definitivo de consolidação. Vamos construir o programa completo, linha por linha, entendendo como cada conceito estudado até aqui se conecta aos demais.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">1. Visão Geral: O Modelo IPO (Input – Process – Output)</h3>
    <p class="mb-4">Todo sistema de software, do mais simples ao mais complexo, segue um ciclo universal: <strong>Entrada → Processamento → Saída</strong>. A calculadora implementa esse ciclo de forma didática e transparente:</p>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>Entrada (Input):</strong> o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Scanner</code> captura a opção do menu e os dois números fornecidos pelo usuário.</li>
      <li><strong>Processamento (Process):</strong> uma estrutura condicional <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">if/else if/else</code> direciona o fluxo para o operador aritmético correto, realizando o cálculo na CPU.</li>
      <li><strong>Saída (Output):</strong> o método <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">printf</code> formata o resultado com duas casas decimais e o exibe em um relatório limpo.</li>
    </ul>
    <p class="mb-4"><strong>Analogia do fast-food:</strong> o cliente faz o pedido (entrada), a cozinha prepara o lanche (processamento) e a bandeja é entregue organizada no balcão (saída). Se qualquer etapa falhar, a experiência desmorona.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">2. Construindo o Menu Textual</h3>
    <p class="mb-4">Antes de qualquer cálculo, o programa precisa orientar o usuário. Um terminal vazio com um cursor piscando é intimidador e inútil. O menu textual funciona como os botões numerados de uma máquina de refrigerante: ele desenha as opções disponíveis e deixa claro o que se espera do usuário.</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
System.out.println("=== 🧮 CALCULADORA INTEGRADA ===");
System.out.println("Escolha a operação matemática:");
System.out.println("[1] Soma (+)");
System.out.println("[2] Subtração (-)");
System.out.println("[3] Multiplicação (*)");
System.out.println("[4] Divisão (/)");
System.out.print("Digite a sua opção (1 a 4): ");
int opcao = teclado.nextInt();</pre>
    <p class="mb-4">Observe o uso estratégico de <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">print()</code> na última linha. Como aprendemos, ele mantém o cursor colado à pergunta, criando um visual elegante onde o usuário digita o número exatamente ao lado do texto, e não jogado na linha de baixo.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">3. Entrada dos Dados Numéricos</h3>
    <p class="mb-4">Após capturar a opção do menu, o programa solicita os dois operandos. Aqui usamos <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">nextDouble()</code> para aceitar números com casas decimais, permitindo que a calculadora lide com valores financeiros e medidas precisas.</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
System.out.print("Digite o primeiro número: ");
double num1 = teclado.nextDouble();
System.out.print("Digite o segundo número: ");
double num2 = teclado.nextDouble();</pre>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">4. A Estrutura Condicional: Direcionando o Fluxo</h3>
    <p class="mb-4">Sem uma estrutura de decisão, o Java executaria todas as operações em sequência — somaria, subtrairia, multiplicaria e dividiria os mesmos números. Para evitar esse caos, usamos o bloco <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">if / else if / else</code>, que funciona como um entroncamento de trilhos: o trem do código segue por um único caminho, ignorando todos os outros.</p>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">if (opcao == 1)</code>:</strong> testa se o usuário escolheu soma. Se sim, entra no bloco, executa a adição e salta para o final. Se não, passa ao próximo.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">else if (opcao == 2)</code>:</strong> segunda tentativa (subtração). O Java só avalia esta linha se o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">if</code> anterior falhou. Empilhamos <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">else if</code> para as opções 3 e 4.</li>
      <li><strong><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">else</code>:</strong> sem nenhuma condição — é o paraquedas. Se nenhuma das opções anteriores for verdadeira (usuário digitou 9, por exemplo), o fluxo cai aqui, exibe "Opção inválida" e encerra o programa.</li>
    </ul>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">5. Validação de Segurança: Protegendo a Divisão por Zero</h3>
    <p class="mb-4">Dividir por zero não é uma limitação do Java — é uma impossibilidade matemática que levaria o processador a um paradoxo. Se o código tentasse executar <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">num1 / num2</code> com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">num2 = 0</code>, o programa lançaria uma exceção e fecharia abruptamente.</p>
    <p class="mb-4">Dentro do bloco da divisão (opção 4), erguemos uma barreira de proteção:</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
if (num2 == 0) {
    System.out.println("❌ Erro fatal: Não é possível dividir por zero!");
    teclado.close();
    return;  // encerra o programa imediatamente
}</pre>
    <p class="mb-4">O comando <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">return</code> dentro de <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code> é um freio de emergência: ele interrompe a execução do método e devolve o controle ao sistema operacional. A linha perigosa <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">resultado = num1 / num2;</code> nunca chega a ser lida pelo processador.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">6. Saída Formatada com printf</h3>
    <p class="mb-4">Se tudo correu bem, o programa exibe o relatório final. Em vez de simplesmente jogar o valor bruto na tela, usamos <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">printf</code> para montar uma frase elegante, limitando os números a duas casas decimais com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%.2f</code> e exibindo o símbolo da operação com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%s</code>.</p>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
System.out.printf("CÁLCULO: %.2f %s %.2f = %.2f%n", num1, simbolo, num2, resultado);</pre>
    <p class="mb-4">Para a multiplicação <em>5 × 2</em>, o resultado exibido será: <strong>CÁLCULO: 5,00 * 2,00 = 10,00</strong>. A formatação elimina o excesso de zeros decimais e apresenta os valores como se espera em um sistema profissional.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">7. Fechamento dos Recursos</h3>
    <p class="mb-4">A última instrução do programa é <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">teclado.close();</code>. Como estudamos, o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Scanner</code> mantém um canal aberto com o sistema operacional. Fechá-lo é um ato de responsabilidade que libera a memória e os recursos de hardware, permitindo que outros aplicativos os utilizem.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Detalhamento Técnico</h3>
    <p class="mb-4">A lógica de <strong>curto-circuito</strong> (aula anterior) também se aplica à estrutura condicional: o Java avalia os <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">if</code> e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">else if</code> em ordem, parando na primeira condição verdadeira. As demais não são testadas. Isso torna o código eficiente: se o usuário escolheu a opção 1, o Java não perde tempo conferindo as opções 2, 3 e 4.</p>
    <p class="mb-4">O uso de <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">return</code> dentro de <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">main</code> é um encerramento limpo. Em aplicações maiores, poderíamos usar <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">System.exit(0)</code>, que permite informar um código de saída ao sistema operacional — mas para este escopo didático, o <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">return</code> é suficiente.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Aplicações Práticas</h3>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>Calculadoras financeiras:</strong> adicione mais operações (porcentagem, raiz quadrada) seguindo o mesmo padrão de menu e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">else if</code>.</li>
      <li><strong>Sistemas de autoatendimento:</strong> a estrutura de menu textual com validação de opções é a base para caixas eletrônicos, totens de check-in e quiosques interativos.</li>
      <li><strong>Formulários com validação:</strong> a técnica de verificar dados inválidos (como divisão por zero) antes de processá-los se aplica a qualquer campo de entrada: idade negativa, e-mail sem "@", etc.</li>
    </ul>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Conclusão</h3>
    <p class="mb-4">Com esta calculadora, você integrou todos os conceitos fundamentais do Módulo 1: entrada de dados via <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Scanner</code>, saída formatada com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">printf</code> e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">print/println</code>, operadores aritméticos e lógicos, estruturas condicionais e validação de segurança. Mais do que decorar comandos, você entendeu como eles se conectam para formar um sistema real, útil e robusto.</p>
    <p>O Módulo 1 está concluído. Nos próximos capítulos, expandiremos esses alicerces com laços de repetição, arrays, orientação a objetos e muito mais. Mas a base que você construiu aqui — o ciclo IPO, a sintaxe fundamental e a mentalidade de validação — acompanhará você em cada linha de código que escrever daqui para frente.</p>
  `,

  imagens: [
    // Espaço reservado para futuras imagens.
  ],

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