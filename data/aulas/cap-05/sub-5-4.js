// Arquivo: data/aulas/cap-05/sub-5-4.js
// Aula 5.4 – Métodos static e Escopo de Classe

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-5-4'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Métodos static e Escopo de Classe</h2>
    <p class="lesson-text text-slate-500 italic">A diferença entre o que pertence à fábrica e o que pertence a cada produto</p>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Até agora, trabalhamos com métodos e atributos que pertencem a objetos individuais — cada cliente tem seu próprio nome, cada carro tem sua própria cor. Mas o mundo real também exige <strong>regras gerais, ferramentas universais e informações compartilhadas</strong> que não fazem sentido dentro de um único objeto. Para isso, o Java oferece o modificador <strong><code class="code-inline">static</code></strong>.</p>
    <p class="lesson-text">Nesta aula, vamos explorar o que significa um membro ser estático, por que métodos <code class="code-inline">static</code> não podem acessar diretamente membros de instância, e como o Java gerencia o <strong>escopo</strong> e o <strong>tempo de vida</strong> das variáveis em três categorias distintas. Compreender esses conceitos é essencial para escrever código bem organizado, eficiente e livre de erros de compilação misteriosos.</p>

    <h3 class="section-title">1. O Conceito de static: A Planta da Fábrica versus o Produto Real</h3>
    <p class="lesson-text">Para entender o que é estático, a analogia mais poderosa é a da <strong>planta baixa</strong> (a classe) e das <strong>casas construídas</strong> (os objetos).</p>
    <p class="lesson-text">Um arquiteto desenha a planta de uma casa: três quartos, uma cozinha, dois banheiros. Essa planta é o molde — em Java, a <strong>classe</strong>. A construtora usa esse molde para erguer dez casas reais na rua. Cada casa física é uma <strong>instância</strong> (um objeto). Se o morador da Casa 1 pintar a parede de azul, a Casa 2 continua branca — cada instância tem seus próprios <strong>atributos de instância</strong>, independentes.</p>
    <p class="lesson-text">Agora imagine que a prefeitura crie uma regra: "A taxa de iluminação pública para este modelo de residência é de 50 reais". Onde guardar essa informação? Não faz sentido escrevê‑la na parede de cada casa — seria redundante e difícil de atualizar. O lugar correto é a <strong>planta mãe</strong>, na sede da construtora. Essa informação pertence ao <strong>projeto</strong>, não às casas individuais.</p>

    <div class="callout-analogy">
      <strong>Analogia:</strong> Tudo que é <code class="code-inline">static</code> pertence à <strong>classe</strong> (a planta). Tudo que não é <code class="code-inline">static</code> pertence a cada <strong>objeto</strong> (cada casa construída). A classe é uma só; os objetos podem ser muitos.
    </div>

    <p class="lesson-text"><strong>Métodos estáticos</strong> são funções utilitárias que realizam um trabalho universal, sem depender de nenhum objeto específico. O exemplo mais clássico é a classe <code class="code-inline">java.lang.Math</code>. Quando você precisa da raiz quadrada de 25, não cria um objeto <code class="code-inline">new Math()</code> — simplesmente chama <code class="code-inline">Math.sqrt(25)</code> diretamente na classe. A lógica da raiz quadrada é imutável e independe de qualquer contexto. O método <code class="code-inline">sqrt</code> é <code class="code-inline">static</code>.</p>

    <pre><code class="language-java">// Usando um método estático — sem new
double raiz = Math.sqrt(25);   // 5.0
double potencia = Math.pow(2, 10); // 1024.0</code></pre>

    <p class="lesson-text">Se <code class="code-inline">sqrt</code> não fosse estático, seríamos obrigados a instanciar um objeto matemático antes de cada cálculo — um desperdício de memória e processamento. O <code class="code-inline">static</code> torna a ferramenta permanentemente disponível, leve e rápida.</p>

    <h3 class="section-title">2. Regras de Acesso: O Olhar de Cima para Baixo</h3>
    <p class="lesson-text">A separação entre o mundo estático (classe) e o mundo dinâmico (objetos) impõe uma regra de convivência rígida, que está entre as maiores causas de erro de compilação para iniciantes:</p>

    <div class="callout-warning">
      <strong>Regra universal:</strong> Um método <code class="code-inline">static</code> <strong>jamais</strong> pode acessar diretamente um membro (atributo ou método) que não seja <code class="code-inline">static</code>.
    </div>

    <p class="lesson-text">Para entender o porquê, voltemos à construtora. O engenheiro‑chefe está na sede, olhando para a <strong>planta baixa geral</strong> — ele está no <strong>contexto estático</strong>. De repente, ele grita: "Abra a porta da geladeira!". Os funcionários ficam confusos: <strong>"A geladeira de qual casa, chefe? Da Casa 1? Da Casa 2? Da Casa 450?"</strong>. O comando falha porque não especifica um alvo. Geladeiras só existem em casas reais construídas — objetos. O engenheiro, no mundo abstrato da planta, não enxerga geladeiras individuais.</p>

    <p class="lesson-text">No código, o mesmo paradoxo ocorre:</p>
    <pre><code class="language-java">class Casa {
    String corDaParede; // atributo de instância (NÃO static)

    static void exibirAvisoGeral() {
        // ERRO DE COMPILAÇÃO!
        System.out.println("A cor é: " + corDaParede);
    }
}</code></pre>

    <p class="lesson-text">O método <code class="code-inline">exibirAvisoGeral()</code> é estático. Ele existe desde que o programa iniciou, <strong>antes mesmo de qualquer casa ser construída</strong>. Quando o compilador encontra <code class="code-inline">corDaParede</code> ali dentro, ele pergunta: "Cor de qual casa? Nenhum objeto foi passado como alvo. Não há como decidir." O programa é rejeitado.</p>

    <h4 class="subsection-title">Como resolver o paradoxo</h4>
    <p class="lesson-text">Um método estático <strong>pode</strong> manipular dados de instância, desde que receba a <strong>referência do objeto</strong> como parâmetro. É como o engenheiro dizer: "João, vá até a Casa Número 5 e abra a geladeira <strong>de lá</strong>". O alvo foi especificado.</p>

    <pre><code class="language-java">class Casa {
    String corDaParede;

    static void exibirCorDeUmaCasa(Casa casaAlvo) {
        // Agora o método sabe exatamente qual casa manipular
        System.out.println("Cor: " + casaAlvo.corDaParede);
    }
}</code></pre>

    <h4 class="subsection-title">O fluxo inverso: total liberdade</h4>
    <p class="lesson-text">Se o mundo estático tem restrições para acessar o mundo dinâmico, o inverso é completamente livre. Um método comum (não estático) de um objeto pode acessar variáveis e métodos estáticos da sua classe a qualquer momento, sem erro. Uma casa real pode consultar a taxa de iluminação pública que está registrada na planta mãe quando quiser. O dinâmico conhece o estático; o estático desconhece as individualidades do dinâmico.</p>

    <h3 class="section-title">3. Escopo e Tempo de Vida: O Relógio da Memória RAM</h3>
    <p class="lesson-text">Cada variável em Java tem um <strong>escopo</strong> (território onde é visível) e um <strong>tempo de vida</strong> (quando nasce e quando é destruída). O Java gerencia três categorias, com ritmos biológicos completamente diferentes.</p>

    <div class="overflow-x-auto mb-4">
      <table class="table-didatic">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Nasce quando</th>
            <th>Morre quando</th>
            <th>Visibilidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-bold">Variável Local</td>
            <td>Ao entrar no método</td>
            <td>Ao sair do método (<code class="code-inline">}</code> ou <code class="code-inline">return</code>)</td>
            <td>Apenas dentro do método</td>
          </tr>
          <tr>
            <td class="font-bold">Variável de Instância</td>
            <td>Na criação do objeto (<code class="code-inline">new</code>)</td>
            <td>Quando o objeto é coletado pelo Garbage Collector</td>
            <td>Dentro da classe, associada ao objeto</td>
          </tr>
          <tr>
            <td class="font-bold">Variável de Classe (<code class="code-inline">static</code>)</td>
            <td>No carregamento da classe</td>
            <td>Quando o programa é encerrado</td>
            <td>Global, em todo o programa</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4 class="subsection-title">3.1 Variáveis Locais — As Operárias de Curto Prazo</h4>
    <p class="lesson-text">São declaradas dentro de um método. Imagine um marceneiro que cola um Post‑it na bancada para anotar uma medida rápida: assim que o corte termina, o papel vai para o lixo. A variável local nasce na abertura da chave <code class="code-inline">{</code>, cumpre sua função e morre na chave de fechamento <code class="code-inline">}</code>. Se o método for chamado dez vezes, a variável nascerá e morrerá dez vezes, sem guardar nenhuma memória das execuções anteriores.</p>

    <h4 class="subsection-title">3.2 Variáveis de Instância — As Moradoras dos Objetos</h4>
    <p class="lesson-text">São os atributos que definem cada objeto: <code class="code-inline">saldo</code> em <code class="code-inline">ContaBancaria</code>, <code class="code-inline">placa</code> em <code class="code-inline">Carro</code>. Elas nascem junto com o objeto no Heap (quando <code class="code-inline">new</code> é executado) e vivem enquanto o objeto existir — minutos, horas ou dias. Quando o objeto se torna inalcançável, o Garbage Collector o remove e, com ele, todas as suas variáveis de instância.</p>

    <h4 class="subsection-title">3.3 Variáveis de Classe (static) — As Recordistas de Longevidade</h4>
    <p class="lesson-text">São as variáveis que pertencem à classe, não a instâncias. Nascem no exato instante em que a classe é carregada na memória (antes de qualquer <code class="code-inline">new</code>) e só morrem quando o programa é completamente encerrado. São como o letreiro luminoso no topo do prédio da empresa: instalado na estrutura central, visível para todos, aceso do início ao fim do expediente.</p>

    <p class="lesson-text">Essa longevidade as torna ideais para:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Configurações globais:</strong> nome da aplicação, versão do sistema.</li>
      <li><strong>Contadores universais:</strong> número total de usuários logados, sequência de IDs.</li>
      <li><strong>Constantes:</strong> valores que nunca mudam, como <code class="code-inline">static final double PI = 3.14159;</code>.</li>
    </ul>

    <div class="callout-success">
      <strong>Dica de arquitetura:</strong> Use variáveis locais para cálculos rápidos, variáveis de instância para modelar o estado dos objetos e variáveis estáticas apenas para informações verdadeiramente globais. Esse equilíbrio mantém o programa leve e organizado.
    </div>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">O modificador <code class="code-inline">static</code> desenha uma linha clara entre o que é da <strong>classe</strong> (coletivo, universal) e o que é de cada <strong>instância</strong> (individual, particular). Métodos estáticos são ferramentas sempre disponíveis, mas não enxergam atributos de objetos a menos que recebam uma referência explícita. Já as variáveis têm ciclos de vida radicalmente distintos: as locais duram frações de segundo, as de instância acompanham seus objetos, e as estáticas persistem do início ao fim do programa. Compreender esses mecanismos é fundamental para projetar sistemas bem estruturados, evitar erros de compilação e usar a memória com inteligência.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Método estático utilitário vs. método de instância',
      codigo: `public class Conversor {
    // Método estático: não depende de nenhum objeto
    public static double celsiusParaFahrenheit(double celsius) {
        return celsius * 9.0 / 5.0 + 32;
    }

    // Método de instância: depende do atributo 'fator'
    private double fator;

    public Conversor(double fator) {
        this.fator = fator;
    }

    public double aplicarFator(double valor) {
        return valor * this.fator;
    }

    public static void main(String[] args) {
        // Chamando método static diretamente pela classe
        double f = Conversor.celsiusParaFahrenheit(25);
        System.out.println("25°C = " + f + "°F");

        // Para usar o método de instância, preciso de um objeto
        Conversor conv = new Conversor(1.5);
        System.out.println("Aplicar fator: " + conv.aplicarFator(10));
    }
}`,
      explicacao: 'O método celsiusParaFahrenheit é static — não precisa de um objeto para ser chamado. Já aplicarFator é de instância e depende do atributo fator, específico de cada objeto Conversor criado com new.'
    },
    {
      titulo: 'Variável estática como contador global',
      codigo: `public class Usuario {
    private String nome;
    // Variável static: compartilhada por TODOS os objetos
    private static int totalUsuarios = 0;

    public Usuario(String nome) {
        this.nome = nome;
        totalUsuarios++;  // incrementa o contador da classe
    }

    public static int getTotalUsuarios() {
        return totalUsuarios;
    }

    public static void main(String[] args) {
        System.out.println("Total: " + Usuario.getTotalUsuarios()); // 0

        Usuario u1 = new Usuario("Ana");
        Usuario u2 = new Usuario("Carlos");
        Usuario u3 = new Usuario("Bia");

        // O contador é único — reflete todos os objetos criados
        System.out.println("Total: " + Usuario.getTotalUsuarios()); // 3
    }
}`,
      explicacao: 'A variável totalUsuarios é static — pertence à classe, não a cada objeto. Cada new Usuario() incrementa o mesmo contador, visível globalmente pelo método estático getTotalUsuarios().'
    },
    {
      titulo: 'Escopo e tempo de vida das variáveis',
      codigo: `public class DemonstracaoEscopo {
    // Variável de instância — vive enquanto o objeto existir
    private String nome;

    // Variável de classe (static) — vive o programa inteiro
    private static int contador = 0;

    public void executar() {
        // Variável local — vive apenas durante este método
        int temporaria = 42;
        System.out.println("Local: " + temporaria);

        nome = "Teste";
        contador++;
    }

    public static void main(String[] args) {
        DemonstracaoEscopo d = new DemonstracaoEscopo();
        d.executar(); // 'temporaria' nasce e morre aqui

        // System.out.println(temporaria); // ERRO! Fora de escopo
        System.out.println("Contador: " + contador); // 1
    }
}`,
      explicacao: 'A variável local temporaria só existe dentro do método executar(). A variável de instância nome pertence ao objeto d. A variável estática contador sobrevive a qualquer método e a qualquer objeto, acumulando seu valor até o fim do programa.'
    }
  ],

  exercicios: [
    {
      pergunta: 'O que significa o modificador static em um método Java?',
      alternativas: [
        'Que o método só pode ser chamado uma única vez durante o programa.',
        'Que o método pertence à classe e pode ser chamado sem a necessidade de criar um objeto.',
        'Que o método retorna sempre o mesmo valor, imutável.'
      ],
      respostaCorreta: 1,
      explicacao: 'Um método static pertence à classe, não a instâncias. Ele pode ser invocado diretamente pelo nome da classe (ex.: Math.sqrt()), sem precisar de um new.'
    },
    {
      pergunta: 'Por que um método static não pode acessar diretamente um atributo de instância (não static)?',
      alternativas: [
        'Porque atributos de instância são automaticamente privados.',
        'Porque o método static existe antes de qualquer objeto ser criado — não há como saber de qual objeto o atributo seria lido.',
        'Porque o compilador converte atributos de instância em constantes.'
      ],
      respostaCorreta: 1,
      explicacao: 'Métodos static são carregados no início do programa, antes de qualquer new. Sem uma referência explícita a um objeto, o compilador não consegue determinar de qual instância o atributo deve ser obtido.'
    },
    {
      pergunta: 'Qual o tempo de vida de uma variável local declarada dentro de um método?',
      alternativas: [
        'Ela vive enquanto o objeto dono do método existir.',
        'Ela nasce na entrada do método e morre na saída (fim do bloco).',
        'Ela vive durante toda a execução do programa.'
      ],
      respostaCorreta: 1,
      explicacao: 'Variáveis locais têm escopo restrito ao bloco onde foram declaradas. Sua memória é liberada assim que a execução sai daquele bloco.'
    }
  ]
};