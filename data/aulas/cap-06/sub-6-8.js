// Arquivo: data/aulas/cap-06/sub-6-8.js
// Aula 6.8 – Estudo de Caso: Lista de Tarefas Dinâmica

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-6-8'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Estudo de Caso: Construindo uma Lista de Tarefas Dinâmica</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Ao longo deste capítulo, acumulamos um arsenal de ferramentas: arrays e ArrayLists, laços de repetição, Generics, Wrapper Classes e métodos como <code class="code-inline">add()</code>, <code class="code-inline">remove()</code> e <code class="code-inline">contains()</code>. Chegou a hora de unir todas essas peças e construir um <strong>sistema real e funcional</strong>: uma <strong>Lista de Tarefas Dinâmica</strong> (To-Do List).</p>
    <p class="lesson-text">Neste estudo de caso, vamos passar por todas as etapas da engenharia de software: definição do escopo, modelagem dos dados com uma classe customizada, implementação das quatro operações do <strong>CRUD</strong> (Create, Read, Update, Delete) e criação de uma interface interativa via console com a classe <strong>Scanner</strong>. Ao final, você terá um programa completo que gerencia tarefas dinamicamente, pronto para ser executado e expandido.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de começar a codificar, alinhamos três conceitos que guiarão todo o projeto:</p>

    <ul class="topic-list mb-4">
      <li><strong>CRUD:</strong> acrônimo para Create (Criar), Read (Ler), Update (Atualizar) e Delete (Remover). É a espinha dorsal de 99% dos aplicativos — do Instagram ao sistema do seu banco.</li>
      <li><strong>Modelagem com classes:</strong> em vez de usar Strings soltas para representar tarefas, criaremos uma <strong>classe Tarefa</strong> com atributos como descrição e status de conclusão. Isso torna o código mais robusto e profissional.</li>
      <li><strong>Interface via console:</strong> usaremos a classe <strong>Scanner</strong> para capturar as escolhas do usuário pelo teclado, e um laço <strong>while(true)</strong> para manter o programa rodando até que o usuário decida sair.</li>
    </ul>

    <div class="callout-analogy">
      <strong>Analogia do arquiteto:</strong> até agora você aprendeu a fazer tijolos, vigas e encanamentos (arrays, ArrayLists, métodos). Neste estudo de caso, você pega o terreno vazio e constrói uma casa funcional do zero, unindo todos os materiais em uma estrutura que realmente serve às pessoas.
    </div>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. Definição do Problema e Escopo</h4>
    <p class="lesson-text">Nosso cliente é uma empresa de produtividade que deseja um <strong>gerenciador de tarefas diárias</strong>. O sistema deve rodar via terminal (console), sem interface gráfica ou banco de dados — o foco está na lógica de manipulação da memória RAM. As regras de negócio são:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Dinamismo total:</strong> o usuário pode cadastrar quantas tarefas quiser, sem limite fixo.</li>
      <li><strong>Operações em fila viva:</strong> permitir adicionar, listar, marcar como concluída e remover tarefas.</li>
      <li><strong>Interatividade:</strong> exibir um menu e reagir à escolha do usuário instantaneamente.</li>
    </ul>

    <h4 class="subsection-title">2. Modelagem: a Classe Tarefa</h4>
    <p class="lesson-text">Uma abordagem simplista seria usar <code class="code-inline">ArrayList&lt;String&gt;</code> e armazenar apenas o nome da tarefa. Mas e quando o cliente pedir para marcar uma tarefa como "concluída"? Teríamos que fazer malabarismos com o texto, como renomear para "Estudar Java [CONCLUÍDO]". Isso é frágil e amador.</p>
    <p class="lesson-text">A solução profissional é <strong>modelar uma classe Tarefa</strong> com dois atributos:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong><code class="code-inline">descricao</code> (String):</strong> o nome da tarefa.</li>
      <li><strong><code class="code-inline">concluida</code> (boolean):</strong> <code class="code-inline">false</code> se pendente, <code class="code-inline">true</code> se realizada.</li>
    </ul>

    <pre><code class="language-java">public class Tarefa {
    private String descricao;
    private boolean concluida;

    public Tarefa(String descricao) {
        this.descricao = descricao;
        this.concluida = false; // nasce pendente
    }

    public String getDescricao() { return descricao; }
    public boolean isConcluida() { return concluida; }
    public void setConcluida(boolean concluida) { this.concluida = concluida; }
}</code></pre>

    <p class="lesson-text">Com essa classe, nossa lista será declarada como <code class="code-inline">ArrayList&lt;Tarefa&gt; lista = new ArrayList&lt;&gt;();</code>. Cada gaveta do ArrayList guarda um objeto Tarefa completo, que sabe seu próprio nome e se já foi executado.</p>

    <h4 class="subsection-title">3. Implementação do CRUD</h4>
    <p class="lesson-text">Com a estrutura modelada, implementamos as quatro operações que compõem o motor do sistema.</p>

    <p class="lesson-text"><strong>Create — Adicionar Tarefa:</strong> criamos um novo objeto Tarefa com a descrição fornecida e o adicionamos ao ArrayList com <code class="code-inline">add()</code>. Toda tarefa nasce com <code class="code-inline">concluida = false</code>.</p>
    <pre><code class="language-java">System.out.print("Descrição da tarefa: ");
String descricao = scanner.nextLine();
lista.add(new Tarefa(descricao));
System.out.println("Tarefa adicionada!");</code></pre>

    <p class="lesson-text"><strong>Read — Listar Tarefas:</strong> percorremos a lista com um <strong>for-each</strong> e exibimos cada tarefa com um número (iniciando em 1 para o usuário) e um indicador visual: <code class="code-inline">[ ]</code> para pendente, <code class="code-inline">[X]</code> para concluída.</p>
    <pre><code class="language-java">if (lista.isEmpty()) {
    System.out.println("Nenhuma tarefa cadastrada.");
} else {
    for (int i = 0; i < lista.size(); i++) {
        Tarefa t = lista.get(i);
        String status = t.isConcluida() ? "[X]" : "[ ]";
        System.out.println((i + 1) + ". " + status + " " + t.getDescricao());
    }
}</code></pre>

    <p class="lesson-text"><strong>Update — Marcar como Concluída:</strong> o usuário informa o número da tarefa na lista (contagem humana, a partir de 1). Subtraímos 1 para obter o índice real e usamos <code class="code-inline">get()</code> para recuperar o objeto. Em seguida, chamamos <code class="code-inline">setConcluida(true)</code>.</p>
    <pre><code class="language-java">System.out.print("Número da tarefa a concluir: ");
int numero = scanner.nextInt();
scanner.nextLine(); // limpa o buffer
int indice = numero - 1;
if (indice >= 0 && indice < lista.size()) {
    lista.get(indice).setConcluida(true);
    System.out.println("Tarefa concluída!");
} else {
    System.out.println("Número inválido.");
}</code></pre>

    <p class="lesson-text"><strong>Delete — Remover Tarefa:</strong> similar ao Update, mas usamos <code class="code-inline">remove(indice)</code>. O ArrayList automaticamente contrai a lista e reajusta os índices, sem deixar buracos.</p>
    <pre><code class="language-java">System.out.print("Número da tarefa a remover: ");
int numero = scanner.nextInt();
scanner.nextLine();
int indice = numero - 1;
if (indice >= 0 && indice < lista.size()) {
    lista.remove(indice);
    System.out.println("Tarefa removida!");
} else {
    System.out.println("Número inválido.");
}</code></pre>

    <h4 class="subsection-title">4. Interface com Scanner e Loop Infinito</h4>
    <p class="lesson-text">Com o CRUD pronto, envolvemos tudo em um laço <strong><code class="code-inline">while(true)</code></strong> para manter o programa vivo. A cada iteração, exibimos um menu com as opções e usamos <strong><code class="code-inline">Scanner.nextInt()</code></strong> para capturar a escolha. Uma estrutura <strong><code class="code-inline">switch-case</code></strong> direciona o fluxo para a operação correspondente.</p>

    <pre><code class="language-java">import java.util.ArrayList;
import java.util.Scanner;

public class GerenciadorTarefas {
    public static void main(String[] args) {
        ArrayList&lt;Tarefa&gt; lista = new ArrayList&lt;&gt;();
        Scanner scanner = new Scanner(System.in);
        int opcao;

        do {
            System.out.println("\\n=== GERENCIADOR DE TAREFAS ===");
            System.out.println("1. Adicionar Tarefa");
            System.out.println("2. Listar Tarefas");
            System.out.println("3. Concluir Tarefa");
            System.out.println("4. Remover Tarefa");
            System.out.println("5. Sair");
            System.out.print("Opção: ");
            opcao = scanner.nextInt();
            scanner.nextLine(); // limpa o buffer

            switch (opcao) {
                case 1: // Create
                    System.out.print("Descrição: ");
                    lista.add(new Tarefa(scanner.nextLine()));
                    break;
                case 2: // Read
                    for (int i = 0; i < lista.size(); i++) {
                        Tarefa t = lista.get(i);
                        String s = t.isConcluida() ? "[X]" : "[ ]";
                        System.out.println((i+1) + ". " + s + " " + t.getDescricao());
                    }
                    break;
                case 3: // Update
                    System.out.print("Nº da tarefa: ");
                    int i = scanner.nextInt() - 1;
                    if (i >= 0 && i < lista.size()) lista.get(i).setConcluida(true);
                    break;
                case 4: // Delete
                    System.out.print("Nº da tarefa: ");
                    int j = scanner.nextInt() - 1;
                    if (j >= 0 && j < lista.size()) lista.remove(j);
                    break;
                case 5:
                    System.out.println("Encerrando...");
                    break;
                default:
                    System.out.println("Opção inválida.");
            }
        } while (opcao != 5);

        scanner.close();
    }
}</code></pre>

    <p class="lesson-text">Esse esqueleto reúne <strong>todos os conceitos do capítulo</strong>: ArrayList dinâmico, métodos utilitários, laços, condicionais, modelagem de classes e interação com o usuário via Scanner.</p>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Validação de índices:</strong> sempre verifique se o índice está entre <code class="code-inline">0</code> e <code class="code-inline">size()-1</code> antes de chamar <code class="code-inline">get()</code> ou <code class="code-inline">remove()</code> para evitar <code class="code-inline">IndexOutOfBoundsException</code>.</li>
      <li><strong>Limpeza do buffer:</strong> após <code class="code-inline">nextInt()</code>, chame <code class="code-inline">nextLine()</code> para consumir a quebra de linha residual e não atrapalhar a próxima leitura de texto.</li>
      <li><strong>ArrayList vazio:</strong> usar <code class="code-inline">isEmpty()</code> ou verificar <code class="code-inline">size() == 0</code> antes de listar evita exibir cabeçalhos sem conteúdo.</li>
      <li><strong>Encapsulamento:</strong> a classe Tarefa usa <code class="code-inline">private</code> para os atributos e fornece getters/setters, seguindo boas práticas de orientação a objetos.</li>
      <li><strong>Expansão do projeto:</strong> este sistema pode ser facilmente estendido para salvar tarefas em arquivo, adicionar prazos, prioridades ou interface gráfica.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Protótipo de aplicativo:</strong> a lógica deste console pode ser migrada para um app Android ou sistema web com Spring Boot.</li>
      <li><strong>Base para outros CRUDs:</strong> a mesma estrutura serve para gerenciar contatos, produtos em estoque, alunos em uma turma ou qualquer coleção de dados.</li>
      <li><strong>Entrevistas técnicas:</strong> implementar um CRUD simples com ArrayList é uma tarefa clássica em processos seletivos para vagas de desenvolvedor júnior.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Este estudo de caso encerra o Capítulo 6 com chave de ouro. Partimos da definição de um problema real, modelamos uma classe sob medida, implementamos um CRUD completo usando os métodos da API Collections e demos vida ao sistema com uma interface interativa via console. Cada conceito estudado — arrays, ArrayLists, laços, Generics, Wrapper Classes e métodos utilitários — foi aplicado em conjunto para construir um software funcional.</p>
    <p class="lesson-text">Agora você não apenas entende as peças isoladas: você sabe como <strong>uni-las</strong> para resolver problemas do mundo real. Parabéns por concluir este capítulo — você está pronto para voos mais altos na programação Java.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Sistema completo: Gerenciador de Tarefas com CRUD',
      codigo: `import java.util.ArrayList;
import java.util.Scanner;

class Tarefa {
    private String descricao;
    private boolean concluida;

    public Tarefa(String descricao) {
        this.descricao = descricao;
        this.concluida = false;
    }

    public String getDescricao() { return descricao; }
    public boolean isConcluida() { return concluida; }
    public void setConcluida(boolean concluida) { this.concluida = concluida; }
}

public class GerenciadorTarefas {
    public static void main(String[] args) {
        ArrayList<Tarefa> lista = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        int opcao;

        do {
            System.out.println("\\n=== GERENCIADOR DE TAREFAS ===");
            System.out.println("1. Adicionar Tarefa");
            System.out.println("2. Listar Tarefas");
            System.out.println("3. Concluir Tarefa");
            System.out.println("4. Remover Tarefa");
            System.out.println("5. Sair");
            System.out.print("Opção: ");
            opcao = scanner.nextInt();
            scanner.nextLine();

            switch (opcao) {
                case 1:
                    System.out.print("Descrição: ");
                    lista.add(new Tarefa(scanner.nextLine()));
                    System.out.println("Adicionada!");
                    break;
                case 2:
                    if (lista.isEmpty()) {
                        System.out.println("Nenhuma tarefa.");
                    } else {
                        for (int i = 0; i < lista.size(); i++) {
                            Tarefa t = lista.get(i);
                            String s = t.isConcluida() ? "[X]" : "[ ]";
                            System.out.println((i+1) + ". " + s + " " + t.getDescricao());
                        }
                    }
                    break;
                case 3:
                    System.out.print("Nº da tarefa a concluir: ");
                    int idxConcluir = scanner.nextInt() - 1;
                    scanner.nextLine();
                    if (idxConcluir >= 0 && idxConcluir < lista.size()) {
                        lista.get(idxConcluir).setConcluida(true);
                        System.out.println("Concluída!");
                    } else {
                        System.out.println("Número inválido.");
                    }
                    break;
                case 4:
                    System.out.print("Nº da tarefa a remover: ");
                    int idxRemover = scanner.nextInt() - 1;
                    scanner.nextLine();
                    if (idxRemover >= 0 && idxRemover < lista.size()) {
                        lista.remove(idxRemover);
                        System.out.println("Removida!");
                    } else {
                        System.out.println("Número inválido.");
                    }
                    break;
                case 5:
                    System.out.println("Encerrando o sistema...");
                    break;
                default:
                    System.out.println("Opção inválida.");
            }
        } while (opcao != 5);

        scanner.close();
    }
}`,
      explicacao: 'Sistema completo de gerenciamento de tarefas usando ArrayList<Tarefa>, Scanner para entrada do usuário e switch-case para o menu. Demonstra CRUD completo com validação de índices.'
    },
    {
      titulo: 'Demonstração da elasticidade do ArrayList no CRUD',
      codigo: `import java.util.ArrayList;

public class TesteElasticidade {
    public static void main(String[] args) {
        ArrayList<String> itens = new ArrayList<>();

        // Adiciona 3 itens
        itens.add("Item A");
        itens.add("Item B");
        itens.add("Item C");
        System.out.println("Tamanho: " + itens.size() + " -> " + itens);

        // Remove o item do meio (índice 1)
        itens.remove(1);
        System.out.println("Após remover índice 1: " + itens);
        // A lista se contrai: [Item A, Item C]

        // Adiciona no início (índice 0)
        itens.add(0, "Item Urgente");
        System.out.println("Após add(0): " + itens);
        // A lista se expande e empurra os demais
    }
}`,
      explicacao: 'Exemplo rápido que demonstra a elasticidade do ArrayList: remove() contrai a lista e reajusta índices; add(pos) expande e desloca elementos. Essas operações são a base do CRUD do gerenciador.'
    }
  ],

  exercicios: [
    {
      pergunta: 'O que significa a sigla CRUD no contexto de desenvolvimento de software?',
      alternativas: [
        'Create, Read, Update, Delete — as quatro operações fundamentais de gerenciamento de dados.',
        'Compile, Run, Upload, Debug — as fases de execução de um programa.',
        'Class, Reference, Utility, Data — os tipos de estruturas do Java.'
      ],
      respostaCorreta: 0,
      explicacao: 'CRUD é o acrônimo para Create (Criar), Read (Ler), Update (Atualizar) e Delete (Remover), operações essenciais em qualquer sistema de informação.'
    },
    {
      pergunta: 'Por que modelamos uma classe Tarefa em vez de usar ArrayList<String> diretamente?',
      alternativas: [
        'Porque ArrayList<String> não permite adicionar elementos.',
        'Porque a classe Tarefa permite armazenar múltiplas informações associadas (descrição e status), tornando o código mais organizado e profissional.',
        'Porque String não pode ser usada em ArrayLists.'
      ],
      respostaCorreta: 1,
      explicacao: 'Uma classe customizada agrupa atributos relacionados. Com Tarefa, cada elemento carrega sua descrição e seu status de conclusão, evitando gambiarras com manipulação de texto.'
    },
    {
      pergunta: 'Qual é a função do comando scanner.nextLine() logo após um nextInt()?',
      alternativas: [
        'Ler o próximo número inteiro da sequência.',
        'Limpar o buffer do teclado, consumindo a quebra de linha residual que o nextInt() deixa para trás.',
        'Fechar o Scanner e liberar a memória.'
      ],
      respostaCorreta: 1,
      explicacao: 'O nextInt() não consome o caractere de Enter (\\n). O nextLine() extra age como uma "vassoura" que limpa esse resíduo, evitando que a próxima leitura de texto seja pulada.'
    },
    {
      pergunta: 'O que acontece se o usuário digitar um número de tarefa inválido (ex.: 10 em uma lista com 3 itens) em uma operação de remoção?',
      alternativas: [
        'O programa sempre lança uma exceção e trava.',
        'Se houver validação (if com limites), o programa exibe uma mensagem de erro e continua rodando normalmente.',
        'O ArrayList automaticamente ignora o comando sem nenhuma consequência.'
      ],
      respostaCorreta: 1,
      explicacao: 'É essencial validar se o índice está entre 0 e size()-1 antes de chamar remove() ou get(). Caso contrário, uma IndexOutOfBoundsException será lançada. O código do estudo de caso inclui essa validação.'
    }
  ]
};