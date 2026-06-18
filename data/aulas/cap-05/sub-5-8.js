// Arquivo: data/aulas/cap-05/sub-5-8.js
// Aula 5.8 – Estudo de Caso: Biblioteca de Funções Matemáticas

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-5-8'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Estudo de Caso: Biblioteca de Funções Matemáticas</h2>
    <p class="lesson-text text-slate-500 italic">Da teoria à prática — construindo sua própria caixa de ferramentas utilitárias em Java</p>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Ao longo deste capítulo, exploramos como métodos nascem, como recebem argumentos, como podem ser sobrecarregados, como se chamam recursivamente e como mantê‑los coesos e limpos. Mas como engenheiros profissionais aplicam esses conceitos no mundo real? A resposta está no coração do próprio Java: a classe <strong><code class="code-inline">java.lang.Math</code></strong> — uma biblioteca utilitária que encapsula décadas de sabedoria em engenharia de software.</p>
    <p class="lesson-text">Nesta aula final do capítulo, faremos dois movimentos: primeiro, dissecaremos a arquitetura da classe <code class="code-inline">Math</code> para entender suas escolhas de design. Em seguida, você mesmo construirá sua própria biblioteca utilitária — a <strong><code class="code-inline">SuperCalculadora</code></strong> — aplicando todos os conceitos aprendidos em um projeto coeso e profissional.</p>

    <h3 class="section-title">1. Análise da Classe java.lang.Math</h3>
    <p class="lesson-text">A classe <code class="code-inline">Math</code> é uma das mais antigas e utilizadas do ecossistema Java. Ela funciona como uma <strong>calculadora científica universal</strong>, oferecendo funções de potenciação, raiz quadrada, trigonometria, arredondamento e muito mais — tudo acessível sem a necessidade de instanciar objetos.</p>

    <h4 class="subsection-title">1.1 A Filosofia de Design: static como Escolha Arquitetural</h4>
    <p class="lesson-text">A primeira grande lição da classe <code class="code-inline">Math</code> é o uso inteligente do modificador <code class="code-inline">static</code>. Os criadores do Java fizeram uma reflexão profunda: <strong>a matemática é imutável</strong>. A raiz quadrada de 16 será sempre 4, independentemente de país, fuso horário ou contexto do sistema. Não existe um "objeto matemático" com estado variável que justifique o comando <code class="code-inline">new</code>.</p>
    <p class="lesson-text">Se o Java obrigasse o programador a escrever <code class="code-inline">Math calc = new Math(); calc.sqrt(25);</code> toda vez que precisasse de uma conta, a memória RAM seria inundada por milhões de objetos idênticos e inúteis, gerando lentidão e desperdício. Ao tornar <strong>todos os métodos estáticos</strong>, a classe <code class="code-inline">Math</code> funciona como uma <strong>fábrica flutuante permanentemente aberta</strong>: você digita <code class="code-inline">Math.sqrt(25)</code> e o cálculo é executado na velocidade do processador, com consumo mínimo de recursos.</p>

    <div class="callout-analogy">
      <strong>Analogia:</strong> A classe <code class="code-inline">Math</code> é como um quadro de fórmulas afixado na parede da oficina. Qualquer mecânico pode consultá‑lo a qualquer momento — não é preciso construir uma nova oficina para cada cálculo.
    </div>

    <h4 class="subsection-title">1.2 Math.abs() — Valor Absoluto e Sobrecarga</h4>
    <p class="lesson-text">O método <code class="code-inline">abs</code> (de <em>absolute</em>) calcula a distância de um número até zero, ignorando seu sinal. Passe <code class="code-inline">-5</code> e ele devolve <code class="code-inline">5</code>; passe <code class="code-inline">5</code> e ele devolve <code class="code-inline">5</code>.</p>
    <p class="lesson-text">A beleza arquitetural está na <strong>sobrecarga</strong>: a classe oferece quatro versões do mesmo método — <code class="code-inline">abs(int)</code>, <code class="code-inline">abs(long)</code>, <code class="code-inline">abs(float)</code> e <code class="code-inline">abs(double)</code>. O programador escreve apenas <code class="code-inline">Math.abs(...)</code>, e o compilador seleciona a versão correta pela assinatura do argumento. Essa padronização de nomes elimina a necessidade de decorar termos como <code class="code-inline">obterValorAbsolutoInteiro()</code>.</p>

    <h4 class="subsection-title">1.3 Math.pow() — Potenciação</h4>
    <p class="lesson-text">O método <code class="code-inline">pow</code> (de <em>power</em>, potência) resolve multiplicações repetidas: <code class="code-inline">Math.pow(2, 3)</code> equivale a <code class="code-inline">2 × 2 × 2</code>, resultando em <code class="code-inline">8.0</code>. Sua assinatura é <code class="code-inline">pow(double base, double expoente)</code>. Internamente, o Java não faz um simples laço de multiplicação — ele aciona algoritmos de séries matemáticas diretamente nos circuitos de ponto flutuante do processador, garantindo precisão e velocidade.</p>

    <h4 class="subsection-title">1.4 Math.sqrt() — Raiz Quadrada e Blindagem de Erros</h4>
    <p class="lesson-text"><code class="code-inline">sqrt</code> (de <em>square root</em>) realiza a operação inversa da potenciação: <code class="code-inline">Math.sqrt(25.0)</code> retorna <code class="code-inline">5.0</code>. O método possui uma <strong>cláusula de segurança</strong> exemplar: se o programador passar um número negativo (como <code class="code-inline">-9</code>), o método não trava o programa. Em vez disso, devolve o valor especial <strong><code class="code-inline">NaN</code></strong> (Not a Number — "Não é um Número Real"), permitindo que o sistema continue funcionando e exiba uma mensagem amigável ao usuário.</p>

    <h4 class="subsection-title">1.5 Math.max() e Math.min() — Comparações Relâmpago</h4>
    <p class="lesson-text">O método <code class="code-inline">max</code> compara dois números e devolve o maior. <code class="code-inline">Math.max(12, 85)</code> retorna <code class="code-inline">85</code>. Seu irmão gêmeo, <code class="code-inline">min</code>, devolve o menor. Ambos são intensamente sobrecarregados para aceitar <code class="code-inline">int</code>, <code class="code-inline">long</code>, <code class="code-inline">float</code> e <code class="code-inline">double</code>.</p>
    <p class="lesson-text">Essas funções brilham na simplificação de código. Sem <code class="code-inline">max</code>, garantir que um preço nunca fique negativo exigiria um bloco <code class="code-inline">if/else</code> manual. Com ele, basta uma linha:</p>
    <pre><code class="language-java">double precoFinal = Math.max(0, precoOriginal - desconto);</code></pre>

    <h3 class="section-title">2. Projeto Prático: A Classe SuperCalculadora</h3>
    <p class="lesson-text">Agora que entendemos como os criadores do Java projetaram sua biblioteca matemática, é hora de construir a sua própria. O objetivo é criar uma classe utilitária chamada <strong><code class="code-inline">SuperCalculadora</code></strong>, aplicando todos os conceitos do capítulo: métodos estáticos, coesão, sobrecarga e recursão.</p>

    <h4 class="subsection-title">Requisito 1: Estrutura Base com Métodos Estáticos</h4>
    <p class="lesson-text">Seguindo o exemplo da classe <code class="code-inline">Math</code>, todos os métodos da <code class="code-inline">SuperCalculadora</code> devem ser <strong><code class="code-inline">static</code></strong>. Você não deve instanciar a classe com <code class="code-inline">new</code>. A biblioteca será uma caixa de ferramentas global, acessível de qualquer parte do sistema por meio do nome da classe seguido de ponto.</p>

    <h4 class="subsection-title">Requisito 2: Funções Coesas de Negócio</h4>
    <p class="lesson-text">Seguindo o Princípio de Responsabilidade Única, cada método deve fazer <strong>apenas uma coisa</strong> e ter entre 5 e 20 linhas. Você implementará duas ferramentas de negócios:</p>
    <ul class="topic-list space-y-3 mb-4">
      <li><strong><code class="code-inline">calcularJurosCompostos(double capital, double taxa, int meses)</code>:</strong> calcula o montante final de um investimento usando a fórmula <code class="code-inline">capital * (1 + taxa)^meses</code>. Utiliza <code class="code-inline">Math.pow</code> internamente. Focado exclusivamente na matemática financeira — não exibe textos nem interage com o usuário.</li>
      <li><strong><code class="code-inline">calcularImpostoRenda(double salarioBruto)</code>:</strong> aplica faixas tributárias progressivas e retorna o valor exato da dedução. As alíquotas ficam encapsuladas nesse único método — se o governo mudar a tabela, a alteração é cirúrgica e não afeta o restante do sistema.</li>
    </ul>

    <h4 class="subsection-title">Requisito 3: Sobrecarga no Método calcularMedia</h4>
    <p class="lesson-text">Para demonstrar flexibilidade de entrada, você criará duas versões do método <code class="code-inline">calcularMedia</code>:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Versão A:</strong> <code class="code-inline">calcularMedia(int a, int b)</code> — recebe dois inteiros e retorna a média simples.</li>
      <li><strong>Versão B:</strong> <code class="code-inline">calcularMedia(double a, double b, double c)</code> — recebe três decimais e retorna a média.</li>
    </ul>
    <p class="lesson-text">O compilador selecionará a versão correta automaticamente com base no número e no tipo dos argumentos fornecidos na chamada.</p>

    <h4 class="subsection-title">Requisito 4: Potenciação Recursiva</h4>
    <p class="lesson-text">O desafio final testa sua capacidade de pensar recursivamente. Você criará o método <strong><code class="code-inline">calcularPotenciaRecursiva(int base, int expoente)</code></strong> sem usar laços de repetição (<code class="code-inline">for</code>, <code class="code-inline">while</code>) nem <code class="code-inline">Math.pow</code>. O método deve chamar a si mesmo, respeitando rigorosamente duas partes:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Caso Base (Freio):</strong> <code class="code-inline">if (expoente == 0) return 1;</code>. Qualquer número elevado a zero é 1. Ao atingir essa condição, a recursão para e inicia o desempilhamento.</li>
      <li><strong>Caso Recursivo (Acelerador):</strong> <code class="code-inline">return base * calcularPotenciaRecursiva(base, expoente - 1);</code>. O expoente é decrementado a cada chamada, garantindo que o caso base seja inevitavelmente alcançado.</li>
    </ul>

    <div class="callout-warning">
      <strong>Atenção:</strong> esquecer o caso base ou não decrementar o expoente causaria um <code class="code-inline">StackOverflowError</code>. O enfraquecimento progressivo do argumento é o que mantém a recursão sob controle.
    </div>

    <h3 class="section-title">3. Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Por que <code class="code-inline">Math</code> não tem construtor?</strong> A classe <code class="code-inline">Math</code> declara seu construtor como <code class="code-inline">private</code>, impedindo explicitamente que alguém escreva <code class="code-inline">new Math()</code>. Essa é uma técnica de design que você pode aplicar na <code class="code-inline">SuperCalculadora</code>.</li>
      <li><strong>NaN e Infinity:</strong> além de <code class="code-inline">NaN</code>, a classe <code class="code-inline">Math</code> trabalha com constantes como <code class="code-inline">Double.POSITIVE_INFINITY</code>. Divisões por zero em ponto flutuante não lançam exceção — retornam <code class="code-inline">Infinity</code> ou <code class="code-inline">-Infinity</code>.</li>
      <li><strong>Precisão e arredondamento:</strong> para cálculos financeiros que exigem precisão absoluta (como dinheiro), a classe <code class="code-inline">BigDecimal</code> é preferível a <code class="code-inline">double</code>, pois evita erros de arredondamento de ponto flutuante.</li>
      <li><strong>Recursão vs. Iteração na potência:</strong> a versão recursiva é didaticamente elegante, mas para expoentes muito altos (ex.: 100.000) causaria <code class="code-inline">StackOverflowError</code>. Nesses casos, a versão iterativa com laço <code class="code-inline">for</code> é a escolha de produção.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">A classe <code class="code-inline">java.lang.Math</code> é a prova viva de que boas práticas de arquitetura — métodos estáticos, sobrecarga inteligente, coesão e tratamento seguro de erros — transformam a matemática pesada em uma experiência de código fluida e profissional.</p>
    <p class="lesson-text">Ao construir a <code class="code-inline">SuperCalculadora</code>, você fecha o ciclo do Capítulo 5 com chave de ouro: deixa de ser um espectador da teoria e assume o papel de <strong>arquiteto de software</strong>, capaz de projetar bibliotecas utilitárias limpas, testáveis e preparadas para evoluir. Esse repertório técnico o acompanhará por toda a jornada de desenvolvimento de sistemas comerciais de grande porte.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Classe SuperCalculadora completa',
      codigo: `public class SuperCalculadora {

    // Construtor privado: impede new SuperCalculadora()
    private SuperCalculadora() {}

    // ===== REQUISITO 2: Funções de negócio =====

    /** Calcula montante final com juros compostos */
    public static double calcularJurosCompostos(double capital, double taxa, int meses) {
        return capital * Math.pow(1 + taxa, meses);
    }

    /** Calcula imposto de renda com faixas progressivas */
    public static double calcularImpostoRenda(double salario) {
        if (salario <= 1903.98) return 0.0;
        if (salario <= 2826.65) return salario * 0.075 - 142.80;
        if (salario <= 3751.05) return salario * 0.15 - 354.80;
        return salario * 0.275 - 869.36;
    }

    // ===== REQUISITO 3: Sobrecarga de calcularMedia =====

    /** Média de dois inteiros */
    public static double calcularMedia(int a, int b) {
        return (a + b) / 2.0;
    }

    /** Média de três decimais */
    public static double calcularMedia(double a, double b, double c) {
        return (a + b + c) / 3.0;
    }

    // ===== REQUISITO 4: Potenciação recursiva =====

    /** Calcula base^expoente usando recursão */
    public static int calcularPotenciaRecursiva(int base, int expoente) {
        if (expoente == 0) {
            return 1;                            // Caso Base
        }
        return base * calcularPotenciaRecursiva(base, expoente - 1); // Caso Recursivo
    }

    // ===== TESTE DA BIBLIOTECA =====
    public static void main(String[] args) {
        // Juros compostos: R$1000 a 1% ao mês por 12 meses
        System.out.println("Montante: R$" + calcularJurosCompostos(1000, 0.01, 12));

        // Imposto de renda sobre salário de R$3000
        System.out.println("IR: R$" + calcularImpostoRenda(3000));

        // Sobrecarga: média de 7 e 9
        System.out.println("Média (int, int): " + calcularMedia(7, 9));

        // Sobrecarga: média de 7.5, 8.0, 9.5
        System.out.println("Média (double, double, double): " + calcularMedia(7.5, 8.0, 9.5));

        // Potência recursiva: 2^5 = 32
        System.out.println("2^5 = " + calcularPotenciaRecursiva(2, 5));
    }
}`,
      explicacao: 'A classe SuperCalculadora reúne todos os conceitos do capítulo: métodos static (requisito 1), funções coesas com responsabilidade única (requisito 2), sobrecarga do calcularMedia (requisito 3) e recursão com caso base e caso recursivo (requisito 4). O construtor privado impede instanciação, seguindo o padrão da classe Math.'
    },
    {
      titulo: 'Rastreamento da recursão: calcularPotenciaRecursiva(2, 3)',
      codigo: `// Chamada inicial: calcularPotenciaRecursiva(2, 3)

// Chamada 1: base=2, expoente=3
//   expoente != 0 → return 2 * calcularPotenciaRecursiva(2, 2)
//     Chamada 2: base=2, expoente=2
//       return 2 * calcularPotenciaRecursiva(2, 1)
//         Chamada 3: base=2, expoente=1
//           return 2 * calcularPotenciaRecursiva(2, 0)
//             Chamada 4: base=2, expoente=0
//               CASO BASE ATINGIDO → return 1

// Desempilhamento:
// Chamada 4 retorna 1
// Chamada 3 retorna 2 * 1 = 2
// Chamada 2 retorna 2 * 2 = 4
// Chamada 1 retorna 2 * 4 = 8

// Resultado final: 8`,
      explicacao: 'O rastreamento mostra cada chamada empilhada na memória Stack. Quando expoente chega a 0, o caso base retorna 1. As chamadas então se desempilham multiplicando a base a cada nível, resultando em 8 (2³).'
    }
  ],

  exercicios: [
    {
      pergunta: 'Por que todos os métodos da classe Math são static?',
      alternativas: [
        'Porque a matemática é mutável e depende do estado de cada objeto.',
        'Porque as operações matemáticas são universais e imutáveis — não dependem de estado individual de objetos.',
        'Porque o Java não permite métodos de instância em classes do pacote java.lang.'
      ],
      respostaCorreta: 1,
      explicacao: 'Fórmulas matemáticas não mudam de comportamento com base em contexto — a raiz quadrada de 25 é sempre 5. Métodos static eliminam a necessidade de criar objetos inúteis, tornando as chamadas mais leves e rápidas.'
    },
    {
      pergunta: 'O que a classe Math retorna ao calcular a raiz quadrada de um número negativo?',
      alternativas: [
        'Lança uma exceção ArithmeticException.',
        'Retorna 0 (zero).',
        'Retorna NaN (Not a Number), permitindo que o programa continue funcionando.'
      ],
      respostaCorreta: 2,
      explicacao: 'Em vez de travar o programa, Math.sqrt() devolve NaN — uma bandeira de aviso que indica operação inválida. O sistema permanece estável e o programador pode tratar esse valor adequadamente.'
    },
    {
      pergunta: 'No método recursivo calcularPotenciaRecursiva, qual é o caso base?',
      alternativas: [
        'return base * calcularPotenciaRecursiva(base, expoente - 1);',
        'if (expoente == 0) return 1;',
        'System.out.println("Resultado: " + resultado);'
      ],
      respostaCorreta: 1,
      explicacao: 'O caso base é a condição que interrompe a recursão: quando o expoente chega a zero, o método retorna 1 diretamente, sem fazer novas chamadas. É essa linha que evita o StackOverflowError.'
    },
    {
      pergunta: 'Qual das opções abaixo é um exemplo válido de sobrecarga do método abs na classe Math?',
      alternativas: [
        'Math.abs(int a) e Math.abs(int b) — mesmo tipo de parâmetro, nome diferente.',
        'Math.abs(int a) e Math.abs(double a) — mesmo nome, tipos de parâmetro diferentes.',
        'int abs(int a) e double abs(int a) — mudando apenas o tipo de retorno.'
      ],
      respostaCorreta: 1,
      explicacao: 'A sobrecarga exige a mesma nomenclatura com parâmetros de tipos diferentes (int vs. double). Mudar apenas o nome do parâmetro ou o tipo de retorno não altera a assinatura e não constitui sobrecarga válida.'
    }
  ]
};