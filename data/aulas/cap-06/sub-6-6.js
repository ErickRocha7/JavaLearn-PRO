// Arquivo: data/aulas/cap-06/sub-6-6.js
// Aula 6.6 – Métodos de ArrayList: add, remove, contains

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-6-6'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Métodos do ArrayList: add, remove, contains e o Painel de Controle</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Na aula anterior, conhecemos o <strong>ArrayList</strong>, a lista elástica que gerencia seu próprio tamanho. Mas uma estrutura de dados só é útil quando sabemos operá‑la. Nos arrays tradicionais, manipular elementos exigia laços manuais, colchetes e muita atenção para não deixar "buracos" na memória. Com o ArrayList, o trabalho braçal desaparece: a API Collections nos entrega um verdadeiro <strong>painel de controle</strong> com métodos prontos.</p>
    <p class="lesson-text">Nesta aula, vamos dominar os seis botões principais desse painel: <code class="code-inline">add()</code> para inserir (no final ou em posição específica), <code class="code-inline">remove()</code> para excluir (por índice ou por valor), <code class="code-inline">contains()</code> para verificar existência, <code class="code-inline">size()</code> para obter o tamanho dinâmico, <code class="code-inline">get()</code> para acessar um elemento e <code class="code-inline">set()</code> para substituí‑lo. Ao final, você terá o controle total sobre suas coleções dinâmicas.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de explorar cada método, lembre‑se de três pontos:</p>
    <ul class="topic-list mb-4">
      <li>O ArrayList <strong>não</strong> usa colchetes <code class="code-inline">[]</code> para manipular dados. Tudo é feito com <strong>métodos</strong> chamados com o ponto <code class="code-inline">.</code>.</li>
      <li>A indexação continua começando em <strong>0</strong>. O primeiro elemento está no índice 0; o último, em <code class="code-inline">size() - 1</code>.</li>
      <li>O tamanho da lista <strong>não</strong> é fixo — ele cresce e encolhe automaticamente a cada inserção e remoção.</li>
    </ul>

    <div class="callout-analogy">
      <strong>Analogia do controle remoto:</strong> operar um ArrayList é como usar uma TV inteligente. Você não precisa entender os circuitos internos; basta apertar o botão certo: <code class="code-inline">add()</code> para "gravar", <code class="code-inline">remove()</code> para "apagar", <code class="code-inline">contains()</code> para "buscar". O ponto <code class="code-inline">.</code> conecta sua lista ao comando desejado.
    </div>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. Inserção com <code class="code-inline">add()</code> — Alimentando a lista</h4>
    <p class="lesson-text">O método <code class="code-inline">add()</code> é o principal responsável por incluir elementos no ArrayList. Ele funciona de duas formas, dependendo do que você passa nos parênteses:</p>

    <p class="lesson-text"><strong>Adição padrão (ao final):</strong> quando você fornece apenas o elemento, ele é colocado após o último item atual. É o caso mais comum — como adicionar produtos ao carrinho de compras.</p>
    <pre><code class="language-java">ArrayList<String> tarefas = new ArrayList<>();
tarefas.add("Estudar Java");   // índice 0
tarefas.add("Fazer compras");  // índice 1
tarefas.add("Lavar o carro");  // índice 2</code></pre>
    <p class="lesson-text">A cada chamada, o ArrayList cria uma nova gaveta no final e armazena o dado. O tamanho cresce dinamicamente, sem nenhum risco de <em>ArrayIndexOutOfBoundsException</em>.</p>

    <p class="lesson-text"><strong>Adição cirúrgica (em índice específico):</strong> se a regra de negócio exigir prioridade, você pode inserir um elemento no meio da lista, informando o índice desejado e o valor. Os elementos existentes são automaticamente deslocados para a direita.</p>
    <pre><code class="language-java">tarefas.add(0, "Pagar conta de luz"); // Índice 0, urgência máxima
// Resultado: ["Pagar conta de luz", "Estudar Java", "Fazer compras", "Lavar o carro"]</code></pre>
    <p class="lesson-text">Nos bastidores, o ArrayList rearranja todos os índices — o que estava no 0 vai para 1, o 1 vai para 2, e assim sucessivamente. Esse deslocamento é automático e invisível para você.</p>

    <h4 class="subsection-title">2. Remoção com <code class="code-inline">remove()</code> — Apagando sem deixar vácuo</h4>
    <p class="lesson-text">Nos arrays comuns, "remover" um elemento apenas o substituía por <code class="code-inline">null</code>, deixando um buraco perigoso. O método <code class="code-inline">remove()</code> do ArrayList destrói a gaveta fisicamente e <strong>contrai a lista</strong>, puxando os elementos seguintes uma posição para trás.</p>

    <p class="lesson-text"><strong>Remoção por índice:</strong> passe o número da posição a ser eliminada. Os índices posteriores são automaticamente reajustados.</p>
    <pre><code class="language-java">tarefas.remove(1); // Remove a segunda gaveta e fecha a fila</code></pre>

    <p class="lesson-text"><strong>Remoção por valor:</strong> passe o próprio objeto que deseja excluir. O ArrayList faz uma varredura interna e remove a <strong>primeira</strong> ocorrência encontrada. Retorna <code class="code-inline">true</code> se encontrou e removeu, <code class="code-inline">false</code> se não existia.</p>
    <pre><code class="language-java">boolean foiRemovido = tarefas.remove("Lavar o carro"); // true se existir</code></pre>

    <div class="callout-warning">
      <strong>Atenção com números!</strong> <code class="code-inline">remove(5)</code> remove o <strong>índice 5</strong>, não o elemento 5. Para remover um objeto Integer, use <code class="code-inline">remove(Integer.valueOf(5))</code>.
    </div>

    <h4 class="subsection-title">3. Verificação com <code class="code-inline">contains()</code> — O detetive da lista</h4>
    <p class="lesson-text">Saber se um elemento já existe na lista é uma necessidade constante: evitar duplicatas, validar cadastros, checar se um item já está no carrinho. Nos arrays tradicionais, isso exigia um laço <code class="code-inline">for</code> inteiro. Com o ArrayList, você usa <code class="code-inline">contains()</code>:</p>
    <pre><code class="language-java">boolean existe = tarefas.contains("Estudar Java");
if (existe) {
    System.out.println("Tarefa já cadastrada!");
}</code></pre>
    <p class="lesson-text">O método percorre a lista internamente e retorna <code class="code-inline">true</code> se o elemento for encontrado, <code class="code-inline">false</code> caso contrário. A comparação usa o método <code class="code-inline">equals()</code> do objeto, portanto funciona corretamente com Strings e outros tipos.</p>

    <h4 class="subsection-title">4. Outros métodos essenciais: <code class="code-inline">size()</code>, <code class="code-inline">get()</code> e <code class="code-inline">set()</code></h4>
    <p class="lesson-text">Além dos três anteriores, o painel de controle do ArrayList oferece:</p>

    <ul class="topic-list space-y-3 mb-4">
      <li><strong><code class="code-inline">size()</code> — O tamanho vivo:</strong> retorna quantos elementos a lista possui <strong>naquele instante</strong>. Diferente do <code class="code-inline">length</code> dos arrays, o <code class="code-inline">size()</code> flutua a cada inserção ou remoção. É o limitador ideal para laços <code class="code-inline">for</code>.</li>
      <li><strong><code class="code-inline">get(indice)</code> — Acesso seguro:</strong> substitui os colchetes. <code class="code-inline">tarefas.get(0)</code> retorna o primeiro elemento sem removê‑lo. Se o índice for inválido, lança <code class="code-inline">IndexOutOfBoundsException</code>.</li>
      <li><strong><code class="code-inline">set(indice, novoValor)</code> — Substituição:</strong> troca o elemento da posição indicada pelo novo valor, sem alterar o tamanho da lista. Ideal para atualizações e edições.</li>
    </ul>

    <pre><code class="language-java">ArrayList<Integer> numeros = new ArrayList<>();
numeros.add(10);
numeros.add(20);
numeros.add(30);

System.out.println(numeros.size());    // 3
System.out.println(numeros.get(1));    // 20

numeros.set(1, 99);                   // Substitui 20 por 99 no índice 1
System.out.println(numeros.get(1));    // 99</code></pre>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Complexidade dos métodos:</strong> <code class="code-inline">add()</code> no final é O(1) amortizado; no meio é O(n) devido ao deslocamento. <code class="code-inline">remove()</code> por índice é O(n). <code class="code-inline">contains()</code> é O(n), pois faz busca linear.</li>
      <li><strong><code class="code-inline">add()</code> e capacidade:</strong> quando a capacidade interna se esgota, o array oculto é redimensionado (cerca de 50% maior), operação que custa O(n). Por isso, se você souber a quantidade aproximada, use <code class="code-inline">new ArrayList<>(capacidadeInicial)</code> para reduzir redimensionamentos.</li>
      <li><strong><code class="code-inline">remove()</code> com objetos:</strong> a remoção por valor usa <code class="code-inline">equals()</code>. Certifique‑se de que a classe do objeto tenha esse método sobrescrito adequadamente.</li>
      <li><strong><code class="code-inline">contains()</code> e desempenho:</strong> para listas muito grandes onde a busca é frequente, considere usar um <code class="code-inline">HashSet</code> (que veremos em capítulos futuros), cujo <code class="code-inline">contains()</code> é O(1).</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Gerenciador de tarefas:</strong> adicionar afazeres com <code class="code-inline">add()</code>, concluir com <code class="code-inline">remove()</code> e verificar duplicatas com <code class="code-inline">contains()</code>.</li>
      <li><strong>Carrinho de compras:</strong> adicionar produtos, remover itens indesejados e checar se um produto já está no carrinho.</li>
      <li><strong>Cadastro de usuários:</strong> usar <code class="code-inline">contains()</code> para evitar CPFs duplicados; <code class="code-inline">set()</code> para atualizar dados cadastrais.</li>
      <li><strong>Log de eventos:</strong> registrar eventos com <code class="code-inline">add()</code> e consultar o total com <code class="code-inline">size()</code> para relatórios.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Com os métodos <code class="code-inline">add()</code>, <code class="code-inline">remove()</code> e <code class="code-inline">contains()</code>, você realiza as três operações mais fundamentais sobre uma coleção de dados com uma única linha de comando. <code class="code-inline">size()</code>, <code class="code-inline">get()</code> e <code class="code-inline">set()</code> completam o painel de controle, substituindo os colchetes e o <code class="code-inline">length</code> dos arrays tradicionais.</p>
    <p class="lesson-text">O ArrayList transforma o trabalho artesanal de manipular arrays em um processo fluido e seguro. Na próxima aula, vamos comparar diretamente arrays e ArrayLists, analisando as vantagens e desvantagens de cada estrutura e decidindo quando usar uma ou outra no mundo real.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Demonstração completa dos métodos add, remove, contains, size, get e set',
      codigo: `import java.util.ArrayList;

public class MetodosArrayList {
    public static void main(String[] args) {
        ArrayList<String> frutas = new ArrayList<>();

        // Adição padrão (ao final)
        frutas.add("Maçã");
        frutas.add("Banana");
        frutas.add("Laranja");
        System.out.println("Após add: " + frutas);       // [Maçã, Banana, Laranja]

        // Adição cirúrgica (índice 1)
        frutas.add(1, "Uva");
        System.out.println("Após add(1, Uva): " + frutas); // [Maçã, Uva, Banana, Laranja]

        // Remoção por índice
        frutas.remove(2); // Remove "Banana"
        System.out.println("Após remove(2): " + frutas);   // [Maçã, Uva, Laranja]

        // Remoção por valor
        boolean removido = frutas.remove("Laranja");
        System.out.println("remove('Laranja'): " + removido); // true
        System.out.println("Após: " + frutas);                  // [Maçã, Uva]

        // Verificação com contains
        System.out.println("Contém 'Uva'? " + frutas.contains("Uva")); // true
        System.out.println("Contém 'Banana'? " + frutas.contains("Banana")); // false

        // size, get e set
        System.out.println("Tamanho: " + frutas.size());  // 2
        System.out.println("Índice 0: " + frutas.get(0)); // Maçã

        frutas.set(0, "Melancia");                         // Substitui Maçã
        System.out.println("Após set: " + frutas);         // [Melancia, Uva]
    }
}`,
      explicacao: 'O exemplo percorre todos os métodos principais: add (padrão e cirúrgico), remove (por índice e por valor), contains, size, get e set, mostrando a evolução da lista a cada operação.'
    },
    {
      titulo: 'ArrayList de inteiros com autoboxing e todos os métodos',
      codigo: `import java.util.ArrayList;

public class ListaNumeros {
    public static void main(String[] args) {
        ArrayList<Integer> numeros = new ArrayList<>();

        numeros.add(10);
        numeros.add(20);
        numeros.add(30);
        numeros.add(1, 15); // Insere 15 no índice 1
        System.out.println("Lista: " + numeros); // [10, 15, 20, 30]

        numeros.remove(Integer.valueOf(15)); // Remove o elemento 15 (não o índice)
        System.out.println("Após remover 15: " + numeros); // [10, 20, 30]

        System.out.println("Contém 20? " + numeros.contains(20)); // true
        System.out.println("Tamanho: " + numeros.size());          // 3

        int antigo = numeros.set(2, 99); // Substitui 30 por 99, retorna o antigo
        System.out.println("Valor antigo: " + antigo);  // 30
        System.out.println("Lista final: " + numeros);  // [10, 20, 99]
    }
}`,
      explicacao: 'Demonstra o ArrayList de Integer (Wrapper). A remoção de um valor numérico exige Integer.valueOf() para não confundir com remoção por índice. O método set() retorna o valor antigo.'
    },
    {
      titulo: 'Exemplo de verificação antes de inserir (evitando duplicatas)',
      codigo: `import java.util.ArrayList;

public class CadastroUnico {
    public static void main(String[] args) {
        ArrayList<String> emails = new ArrayList<>();
        String novoEmail = "joao@email.com";

        if (!emails.contains(novoEmail)) {
            emails.add(novoEmail);
            System.out.println("E-mail cadastrado com sucesso!");
        } else {
            System.out.println("E-mail já existe na lista.");
        }
    }
}`,
      explicacao: 'O método contains() é usado como guarda antes de adicionar. Se o e-mail já existir, a inserção é bloqueada, evitando duplicatas na lista.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual a diferença entre add("X") e add(0, "X") em um ArrayList?',
      alternativas: [
        'Não há diferença; ambos adicionam no final.',
        'add("X") adiciona ao final da lista; add(0, "X") insere na posição 0, deslocando os demais.',
        'add(0, "X") substitui o elemento atual do índice 0.'
      ],
      respostaCorreta: 1,
      explicacao: 'add(elemento) coloca ao final. add(índice, elemento) insere na posição indicada e desloca os elementos seguintes.'
    },
    {
      pergunta: 'O que acontece se você fizer remove(10) em um ArrayList que contém o Integer 10?',
      alternativas: [
        'Remove o elemento 10 da lista.',
        'Tenta remover o elemento no índice 10 e pode lançar IndexOutOfBoundsException.',
        'Remove o elemento 10 e depois o 0.'
      ],
      respostaCorreta: 1,
      explicacao: 'Quando o parâmetro é um número inteiro, remove() interpreta como índice. Para remover o objeto Integer 10, use remove(Integer.valueOf(10)).'
    },
    {
      pergunta: 'Qual método substitui o conteúdo de uma posição sem alterar o tamanho da lista?',
      alternativas: [
        'add()',
        'replace()',
        'set()'
      ],
      respostaCorreta: 2,
      explicacao: 'set(indice, novoValor) troca o elemento da posição indicada, mantendo o tamanho da lista. add() adiciona e remove() exclui.'
    },
    {
      pergunta: 'O que o método contains() retorna se o elemento não existir na lista?',
      alternativas: [
        'null',
        'false',
        'Uma exceção IndexOutOfBoundsException'
      ],
      respostaCorreta: 1,
      explicacao: 'contains() retorna um boolean: true se encontrou o elemento, false se não encontrou. Ele não lança exceção.'
    }
  ]
};