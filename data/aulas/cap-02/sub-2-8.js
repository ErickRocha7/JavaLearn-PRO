// Arquivo: data/aulas/cap-02/sub-2-8.js
// Aula 2.8 – Estudo de Caso: Cadastro de Alunos

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-2-8'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Estudo de Caso: Cadastro de Alunos</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Chegamos ao momento de integração total do Capítulo 2. Depois de estudar classes, objetos, atributos, métodos, construtores, sobrecarga, a classe String e os segredos da memória, vamos unir todas essas peças em um sistema funcional: um <strong>Cadastro de Alunos</strong> para uma escola. Este estudo de caso é o teste definitivo de consolidação — você verá como conceitos aparentemente isolados cooperam para resolver um problema real.</p>
    <p class="lesson-text">Acompanhe a construção completa, linha a linha, entendendo por que cada decisão de design foi tomada. Da modelagem inicial até a execução do programa, você vivenciará o ciclo completo de desenvolvimento de software orientado a objetos.</p>

    <h3 class="section-title">1. Modelagem: Desenhando o Molde do Aluno</h3>
    <p class="lesson-text">A modelagem é o processo de traduzir uma entidade do mundo real para dentro do computador. A secretaria de uma escola nos contratou para gerenciar os alunos. A primeira pergunta que devemos fazer é: <strong>"O que define um Aluno para o sistema desta escola?"</strong>.</p>
    <p class="lesson-text">Para a escola, não importa a cor do cabelo do aluno, seu time de futebol ou seu prato favorito. Importam apenas as informações acadêmicas essenciais. Esse filtro é chamado de <strong>abstração</strong>: a arte de ignorar o irrelevante e manter apenas o que é vital para o negócio.</p>
    <p class="lesson-text">Criamos então a classe <code class="code-inline">Aluno</code> com os seguintes <strong>atributos</strong> (variáveis de instância):</p>
    <ul class="topic-list space-y-3 mb-4">
      <li><strong><code class="code-inline">String nome</code>:</strong> O nome do estudante. Usamos <code class="code-inline">String</code> (classe) porque nomes são textos e precisam de ferramentas como <code class="code-inline">toUpperCase()</code> e <code class="code-inline">length()</code> para buscas e formatações.</li>
      <li><strong><code class="code-inline">String matricula</code>:</strong> O código de identificação. Mesmo sendo composto por números, escolhemos <code class="code-inline">String</code> porque não faremos contas matemáticas com a matrícula. Além disso, códigos podem conter zeros à esquerda ou caracteres como traços no futuro.</li>
      <li><strong><code class="code-inline">double nota1</code> e <code class="code-inline">double nota2</code>:</strong> As notas das provas. Usamos o tipo primitivo <code class="code-inline">double</code> porque notas possuem casas decimais e precisam ser somadas e divididas para gerar a média. É o tipo ideal para cálculos matemáticos rápidos e precisos.</li>
    </ul>
    <p class="lesson-text">Neste momento, apenas o molde foi criado. Nenhum aluno existe ainda na memória — apenas a especificação do que um aluno deve conter.</p>

    <h3 class="section-title">2. Aplicação Prática: Construtores Sobrecarregados</h3>
    <p class="lesson-text">Com o molde pronto, precisamos criar as <strong>linhas de montagem</strong> (construtores). Para dar flexibilidade à secretaria, usaremos a <strong>sobrecarga</strong>, oferecendo duas formas diferentes de um aluno nascer no sistema.</p>

    <h4 class="subsection-title">Opção 1: O Aluno Novo (Construtor Básico)</h4>
    <p class="lesson-text">Imagine um aluno que acabou de se matricular e ainda não fez nenhuma prova. Exigir as notas nesse momento seria absurdo. Criamos um construtor que recebe apenas <code class="code-inline">nome</code> e <code class="code-inline">matricula</code>. As notas são automaticamente inicializadas com <code class="code-inline">0.0</code> pelo Java (comportamento padrão para <code class="code-inline">double</code>).</p>

    <pre><code class="language-java">public Aluno(String nome, String matricula) {
    this.nome = nome;
    this.matricula = matricula;
    // nota1 e nota2 nascem como 0.0 automaticamente
}</code></pre>

    <h4 class="subsection-title">Opção 2: O Aluno Completo (Construtor de Resgate)</h4>
    <p class="lesson-text">Agora imagine que o sistema antigo foi perdido e a secretaria está recadastrando um aluno que já fez as provas. Ela tem em mãos o nome, a matrícula e as duas notas. Criamos um segundo construtor com assinatura diferente: quatro parâmetros. O Java saberá qual construtor chamar com base nos argumentos fornecidos.</p>

    <pre><code class="language-java">public Aluno(String nome, String matricula, double nota1, double nota2) {
    this.nome = nome;
    this.matricula = matricula;
    this.nota1 = nota1;
    this.nota2 = nota2;
}</code></pre>

    <p class="lesson-text">Com a sobrecarga, a secretaria pode criar tanto alunos novos "zerados" quanto alunos com histórico antigo sem que o sistema trave ou exija retrabalho.</p>

    <h3 class="section-title">3. Regras de Negócio: Os Métodos Inteligentes</h3>
    <p class="lesson-text">Um objeto não deve apenas guardar dados — ele deve ter <strong>comportamentos</strong>. Nossa classe <code class="code-inline">Aluno</code> terá dois métodos que implementam as regras da escola.</p>

    <h4 class="subsection-title"><code class="code-inline">calcularMedia()</code> — A Autoanálise Matemática</h4>
    <p class="lesson-text">Este método não recebe parâmetros, pois as notas já pertencem ao objeto. Ele simplesmente acessa <code class="code-inline">nota1</code> e <code class="code-inline">nota2</code>, soma e divide por 2, devolvendo o resultado com <code class="code-inline">return</code>.</p>

    <pre><code class="language-java">public double calcularMedia() {
    return (nota1 + nota2) / 2;
}</code></pre>

    <h4 class="subsection-title"><code class="code-inline">obterStatus()</code> — O Juiz Acadêmico</h4>
    <p class="lesson-text">A regra da escola é clara: média maior ou igual a 7.0 está aprovado; abaixo disso, reprovado. Este método chama <code class="code-inline">calcularMedia()</code> internamente (um método chamando outro — cooperação inteligente), aplica a condição com <code class="code-inline">if</code> e devolve uma <code class="code-inline">String</code> com o veredito.</p>

    <pre><code class="language-java">public String obterStatus() {
    double media = calcularMedia();
    if (media >= 7.0) {
        return "APROVADO";
    } else {
        return "REPROVADO";
    }
}</code></pre>

    <div class="callout-success">
      <strong>Vantagem do encapsulamento:</strong> Se a regra mudar (ex.: aprovação com 6.0), alteramos apenas este método. Todas as telas, relatórios e impressões que usam <code class="code-inline">obterStatus()</code> continuarão funcionando perfeitamente.
    </div>

    <h3 class="section-title">4. Validação: A Classe Main Fazendo o Sistema Rodar</h3>
    <p class="lesson-text">Por fim, criamos uma classe executável com o método <code class="code-inline">main</code> para testar toda a engrenagem. É aqui que os objetos ganham vida na memória RAM.</p>

    <p class="lesson-text"><strong>Cenário de teste:</strong></p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Aluno 1 (Carlos):</strong> Criado com o construtor básico (só nome e matrícula). Suas notas são atribuídas depois: <code class="code-inline">aluno1.nota1 = 8.0;</code> e <code class="code-inline">aluno1.nota2 = 9.0;</code>.</li>
      <li><strong>Aluno 2 (Ana):</strong> Criada com o construtor completo, já recebendo as notas no nascimento: <code class="code-inline">new Aluno("Ana", "M002", 5.0, 6.0)</code>.</li>
    </ul>
    <p class="lesson-text">Ao executar, o programa exibirá o relatório final:</p>
    <div class="terminal-output">
Carlos - Média: 8.5 - Status: APROVADO
Ana - Média: 5.5 - Status: REPROVADO
    </div>
    <p class="lesson-text">O ciclo completo se fecha: da modelagem abstrata ao código funcional, resolvendo um problema real do cotidiano escolar.</p>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Este estudo de caso integrou todos os pilares do Capítulo 2. Você modelou uma entidade real usando <strong>abstração</strong>, criou <strong>atributos</strong> com tipos adequados, ofereceu <strong>construtores sobrecarregados</strong> para diferentes cenários de uso, implementou <strong>métodos</strong> que encapsulam as regras de negócio e validou tudo com uma <strong>classe executável</strong>. Mais do que decorar sintaxe, você compreendeu como esses conceitos se conectam para construir software orientado a objetos de verdade.</p>
    <p class="lesson-text">Com este estudo de caso, o Capítulo 2 está concluído. Nos próximos capítulos, expandiremos esses alicerces com estruturas de controle, arrays, herança e polimorfismo.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Classe Aluno com construtores sobrecarregados e métodos',
      codigo: `public class Aluno {
    // Atributos
    private String nome;
    private String matricula;
    private double nota1;
    private double nota2;

    // Construtor básico (aluno novo, sem notas)
    public Aluno(String nome, String matricula) {
        this.nome = nome;
        this.matricula = matricula;
        // nota1 e nota2 já valem 0.0 por padrão
    }

    // Construtor completo (aluno com notas)
    public Aluno(String nome, String matricula, double nota1, double nota2) {
        this.nome = nome;
        this.matricula = matricula;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    // Método que calcula a média
    public double calcularMedia() {
        return (nota1 + nota2) / 2;
    }

    // Método que retorna o status de aprovação
    public String obterStatus() {
        double media = calcularMedia();
        if (media >= 7.0) {
            return "APROVADO";
        } else {
            return "REPROVADO";
        }
    }

    // Getters (opcional, para consulta)
    public String getNome() { return nome; }
    public String getMatricula() { return matricula; }
}`,
      explicacao: 'A classe Aluno modela um estudante com nome, matrícula e duas notas. Dois construtores sobrecarregados oferecem flexibilidade: o básico para alunos recém-matriculados e o completo para recadastramento. Os métodos calcularMedia() e obterStatus() implementam as regras de negócio da escola.'
    },
    {
      titulo: 'Classe Main para testar o cadastro de alunos',
      codigo: `public class Main {
    public static void main(String[] args) {

        // Aluno 1: criado com construtor básico (sem notas)
        Aluno carlos = new Aluno("Carlos", "M001");
        carlos.nota1 = 8.0;  // notas atribuídas depois
        carlos.nota2 = 9.0;

        // Aluno 2: criado com construtor completo (já com notas)
        Aluno ana = new Aluno("Ana", "M002", 5.0, 6.0);

        // Exibindo o relatório
        System.out.println("=== BOLETIM ESCOLAR ===");
        System.out.printf("%s (%s) - Média: %.1f - Status: %s%n",
                          carlos.getNome(), carlos.getMatricula(),
                          carlos.calcularMedia(), carlos.obterStatus());
        System.out.printf("%s (%s) - Média: %.1f - Status: %s%n",
                          ana.getNome(), ana.getMatricula(),
                          ana.calcularMedia(), ana.obterStatus());
    }
}`,
      explicacao: 'A classe Main instancia dois alunos usando construtores diferentes. Carlos é criado sem notas e as recebe depois; Ana já nasce com notas. O programa exibe um boletim formatado, demonstrando a integração de todos os conceitos do Capítulo 2.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Por que o atributo matricula foi declarado como String e não como int?',
      alternativas: [
        'Porque String ocupa menos espaço na memória.',
        'Porque a matrícula pode conter zeros à esquerda, letras ou caracteres especiais, e não faremos cálculos matemáticos com ela.',
        'Porque int não aceita números maiores que 999.'
      ],
      respostaCorreta: 1,
      explicacao: 'Códigos de identificação como matrícula podem começar com zero (ex.: 004321), conter letras (ex.: 2026-A01) ou traços. Usar int eliminaria os zeros à esquerda e impediria caracteres não numéricos. Além disso, não realizamos operações matemáticas com a matrícula, então String é a escolha correta.'
    },
    {
      pergunta: 'Qual a vantagem de usar construtores sobrecarregados na classe Aluno?',
      alternativas: [
        'Permite criar objetos de outras classes além de Aluno.',
        'Oferece diferentes formas de criar um aluno, adaptando-se a cenários distintos (aluno novo ou recadastramento).',
        'Faz o programa rodar mais rápido.'
      ],
      respostaCorreta: 1,
      explicacao: 'A sobrecarga oferece flexibilidade: um construtor básico para alunos recém-matriculados (sem notas) e um completo para alunos com histórico. O Java escolhe automaticamente o construtor correto com base nos argumentos fornecidos.'
    },
    {
      pergunta: 'Por que o método calcularMedia() não recebe parâmetros?',
      alternativas: [
        'Porque parâmetros são proibidos em métodos que retornam double.',
        'Porque as notas já são atributos do próprio objeto, portanto estão acessíveis internamente.',
        'Porque a média é sempre calculada com o valor 7.0.'
      ],
      respostaCorreta: 1,
      explicacao: 'Como calcularMedia() está dentro da classe Aluno, ele pode acessar diretamente os atributos nota1 e nota2 do objeto. Não é necessário recebê-los como parâmetros — o objeto já os possui.'
    },
    {
      pergunta: 'O que acontece se a regra de aprovação mudar de média 7.0 para média 6.0?',
      alternativas: [
        'É necessário alterar todas as classes que usam o sistema.',
        'Basta alterar a condição dentro do método obterStatus() da classe Aluno.',
        'O programa para de funcionar e precisa ser reescrito.'
      ],
      respostaCorreta: 1,
      explicacao: 'Como a lógica de aprovação está encapsulada no método obterStatus(), alterar a regra requer modificar apenas essa única linha. O restante do sistema (telas, relatórios, etc.) permanece inalterado.'
    }
  ]
};