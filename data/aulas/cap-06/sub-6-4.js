// Arquivo: data/aulas/cap-06/sub-6-4.js
// Aula 6.4 – Classe Arrays e Métodos Utilitários

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-6-4'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Classe Arrays: A Caixa de Ferramentas Inteligente do Java</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Até aqui, você construiu arrays manualmente, percorreu cada posição com laços e escreveu a própria lógica para cada operação. Mas imagine ter que programar do zero uma ordenação de 150 mil preços ou uma busca em um armário gigante. Seria exaustivo e perigoso. Para nos poupar desse trabalho, o Java oferece a <strong>classe Arrays</strong> — uma caixa de ferramentas repleta de métodos prontos, testados e de alta performance. Com ela, ordenar, buscar, exibir e comparar arrays se torna questão de uma linha de código.</p>
    <p class="lesson-text">Nesta aula, vamos abrir essa caixa e explorar seus quatro superpoderes: <code class="code-inline">sort()</code> para ordenar, <code class="code-inline">binarySearch()</code> para localizar, <code class="code-inline">toString()</code> para visualizar e <code class="code-inline">equals()</code> para comparar. Antes, porém, aprenderemos a importar o pacote correto — a chave que libera o acesso a essas ferramentas.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Toda a magia da classe Arrays está no pacote <code class="code-inline">java.util</code>. O Java, por eficiência, não carrega todas as suas bibliotecas de uma vez. Ferramentas especializadas ficam organizadas em <strong>pacotes</strong> (como gavetas temáticas de um almoxarifado). Para usar a classe Arrays, você precisa <strong>importá‑la</strong> no topo do arquivo:</p>
    <pre><code class="language-java">import java.util.Arrays;</code></pre>
    <p class="lesson-text">A partir dessa linha, o robô <code class="code-inline">Arrays</code> fica à sua disposição. Para acionar qualquer método, use a notação <code class="code-inline">Arrays.metodo()</code>. O ponto conecta o nome da classe ao comando desejado.</p>

    <div class="callout-analogy">
      <strong>Analogia do almoxarifado:</strong> A classe Arrays é um robô industrial guardado na gaveta <code class="code-inline">java.util</code>. Você não precisa ensiná‑lo a trabalhar — ele já vem programado pelos melhores engenheiros do Java. Basta importá‑lo e dar a ordem.
    </div>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. Ordenação com <code class="code-inline">Arrays.sort()</code> — o fim do caos</h4>
    <p class="lesson-text">Dados desordenados são a regra no mundo real: um array de preços pode vir como <code class="code-inline">{50, 10, 40, 20, 30}</code>. Para colocá‑lo em ordem crescente, basta uma única chamada:</p>
    <pre><code class="language-java">int[] precos = {50, 10, 40, 20, 30};
Arrays.sort(precos); // Agora precos é {10, 20, 30, 40, 50}</code></pre>
    <p class="lesson-text">O método <code class="code-inline">sort()</code> modifica o próprio array original. Ele funciona com qualquer tipo que possa ser comparado: números são ordenados do menor para o maior; <code class="code-inline">String</code>s são ordenadas alfabeticamente (de "A" a "Z").</p>
    <p class="lesson-text">Internamente, o Java emprega algoritmos de altíssimo desempenho, como o Dual‑Pivot Quicksort para tipos primitivos e o Timsort para objetos. Você não precisa se preocupar com a implementação — apenas colher o resultado.</p>

    <h4 class="subsection-title">2. Busca binária com <code class="code-inline">Arrays.binarySearch()</code> — encontrando agulha no palheiro</h4>
    <p class="lesson-text">Procurar um valor percorrendo todas as posições (busca linear) é inviável em arrays enormes. A <strong>busca binária</strong> resolve isso com elegância: em vez de olhar gaveta por gaveta, ela vai direto ao meio do array e pergunta: "o valor aqui é maior ou menor do que o procurado?". Dependendo da resposta, <strong>descarta metade dos elementos de uma só vez</strong> e repete o processo. Em um array de 150 mil itens, a busca binária faz no máximo 18 comparações, contra até 150 mil da busca linear.</p>
    <div class="callout-warning">
      <strong>Pré‑requisito obrigatório:</strong> o array <strong>precisa estar ordenado</strong> antes de usar <code class="code-inline">binarySearch()</code>. Caso contrário, o resultado será imprevisível.
    </div>
    <pre><code class="language-java">int[] precos = {10, 20, 30, 40, 50}; // já ordenado
int indice = Arrays.binarySearch(precos, 40); // retorna 3 (índice do 40)</code></pre>
    <p class="lesson-text">Se o valor existir, o método retorna o índice da sua posição. Se <strong>não existir</strong>, retorna um número negativo — um sinal seguro de que o elemento não está lá, sem lançar exceções.</p>

    <h4 class="subsection-title">3. Visualização com <code class="code-inline">Arrays.toString()</code> — enxergando o conteúdo</h4>
    <p class="lesson-text">Tentar imprimir um array diretamente com <code class="code-inline">System.out.println(array)</code> produz algo como <code class="code-inline">[I@6504e3b2</code> — o endereço de memória, e não os dados. Para ver o conteúdo real, use <code class="code-inline">Arrays.toString()</code>:</p>
    <pre><code class="language-java">int[] notas = {8, 9, 7};
System.out.println(Arrays.toString(notas)); // Exibe [8, 9, 7]</code></pre>
    <p class="lesson-text">Esse método percorre o array automaticamente e monta uma <code class="code-inline">String</code> no formato <code class="code-inline">[elem1, elem2, ...]</code>, pronta para exibição. É uma ferramenta indispensável para depuração e testes.</p>

    <h4 class="subsection-title">4. Comparação com <code class="code-inline">Arrays.equals()</code> — auditando o conteúdo</h4>
    <p class="lesson-text">Dois arrays com os mesmos elementos podem ser considerados diferentes pelo operador <code class="code-inline">==</code>. Isso acontece porque <code class="code-inline">==</code> compara <strong>endereços de memória</strong>, e não o conteúdo das gavetas. Para comparar o que realmente importa — os valores —, usamos <code class="code-inline">Arrays.equals()</code>:</p>
    <pre><code class="language-java">int[] a = {1, 2, 3};
int[] b = {1, 2, 3};
System.out.println(a == b);                // false (endereços diferentes!)
System.out.println(Arrays.equals(a, b));   // true  (conteúdo idêntico)</code></pre>
    <p class="lesson-text">O método percorre os dois arrays em paralelo, posição por posição. Se tiverem o mesmo tamanho e todos os elementos forem iguais, retorna <code class="code-inline">true</code>. Qualquer diferença, por menor que seja, resulta em <code class="code-inline">false</code>. Essa é a forma correta de validar backups, comparar lotes de dados e auditar informações.</p>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong><code class="code-inline">sort()</code>:</strong> para arrays de objetos, o Java usa Timsort (complexidade O(n log n) no pior caso), estável e adaptativo. Para primitivos, usa Dual‑Pivot Quicksort (também O(n log n)).</li>
      <li><strong><code class="code-inline">binarySearch()</code>:</strong> retorna o índice do elemento se encontrado; caso contrário, retorna <code class="code-inline">-(ponto de inserção) - 1</code>. O ponto de inserção é onde o elemento estaria para manter a ordem. Esse valor negativo permite saber onde inserir o elemento ausente.</li>
      <li><strong><code class="code-inline">toString()</code>:</strong> internamente, usa um <code class="code-inline">StringBuilder</code> para concatenar os elementos com vírgulas e colchetes. É muito mais eficiente do que concatenar Strings manualmente em um loop.</li>
      <li><strong><code class="code-inline">equals()</code>:</strong> compara primeiro os comprimentos; se forem diferentes, retorna <code class="code-inline">false</code> imediatamente. Depois, compara elemento por elemento usando <code class="code-inline">==</code> para primitivos e <code class="code-inline">equals()</code> para objetos.</li>
      <li><strong>Outros métodos úteis:</strong> <code class="code-inline">Arrays.fill()</code> preenche o array com um valor; <code class="code-inline">Arrays.copyOf()</code> cria uma cópia com tamanho especificado; <code class="code-inline">Arrays.asList()</code> converte o array em uma lista fixa.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Relatórios ordenados:</strong> use <code class="code-inline">sort()</code> antes de exibir listas de clientes, produtos ou notas fiscais.</li>
      <li><strong>Sistemas de busca:</strong> mantenha catálogos ordenados e localize itens com <code class="code-inline">binarySearch()</code> em frações de segundo.</li>
      <li><strong>Depuração rápida:</strong> inspecione arrays durante o desenvolvimento com <code class="code-inline">toString()</code> em vez de escrever loops.</li>
      <li><strong>Validação de integridade:</strong> compare cópias de segurança com <code class="code-inline">equals()</code> para garantir que os dados estão íntegros.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">A classe <code class="code-inline">java.util.Arrays</code> é uma aliada indispensável no dia a dia do programador Java. Seus métodos encapsulam algoritmos complexos em comandos de uma linha, eliminando código repetitivo e reduzindo drasticamente a chance de erros. <code class="code-inline">sort()</code> põe ordem no caos; <code class="code-inline">binarySearch()</code> localiza dados com precisão cirúrgica; <code class="code-inline">toString()</code> revela o conteúdo com clareza; e <code class="code-inline">equals()</code> audita a igualdade com segurança.</p>
    <p class="lesson-text">Dominar esses quatro métodos é um salto de produtividade. A partir de agora, sempre que precisar manipular arrays, lembre‑se de perguntar: "Será que o robô <code class="code-inline">Arrays</code> já não faz isso para mim?".</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Demonstração dos quatro métodos principais da classe Arrays',
      codigo: `import java.util.Arrays;

public class FerramentasArrays {
    public static void main(String[] args) {
        // 1. Ordenação
        int[] numeros = {42, 7, 15, 99, 3};
        Arrays.sort(numeros);
        System.out.println("Ordenado: " + Arrays.toString(numeros)); // [3, 7, 15, 42, 99]

        // 2. Busca binária (array já ordenado)
        int indice = Arrays.binarySearch(numeros, 42);
        System.out.println("Índice do 42: " + indice); // 3

        int indiceInexistente = Arrays.binarySearch(numeros, 100);
        System.out.println("Busca por 100: " + indiceInexistente); // valor negativo

        // 3. Visualização
        String[] nomes = {"Ana", "Carlos", "Beatriz"};
        System.out.println("Nomes: " + Arrays.toString(nomes)); // [Ana, Carlos, Beatriz]

        // 4. Comparação
        int[] copia = {3, 7, 15, 42, 99};
        System.out.println("São iguais? " + Arrays.equals(numeros, copia)); // true
    }
}`,
      explicacao: 'O programa importa java.util.Arrays e demonstra sort() para ordenar, binarySearch() para localizar (com retorno negativo se não encontrado), toString() para exibir e equals() para comparar arrays.'
    },
    {
      titulo: 'Ordenando Strings em ordem alfabética',
      codigo: `import java.util.Arrays;

public class OrdenaNomes {
    public static void main(String[] args) {
        String[] clientes = {"Eduardo", "Ana", "Carlos", "Beatriz"};
        System.out.println("Antes:  " + Arrays.toString(clientes));

        Arrays.sort(clientes);
        System.out.println("Depois: " + Arrays.toString(clientes));
        // Resultado: [Ana, Beatriz, Carlos, Eduardo]
    }
}`,
      explicacao: 'Arrays.sort() com Strings organiza em ordem alfabética natural (A a Z). O método modifica o array original diretamente.'
    },
    {
      titulo: 'Perigo: binarySearch sem ordenação prévia',
      codigo: `import java.util.Arrays;

public class BuscaSemOrdenar {
    public static void main(String[] args) {
        int[] baguncado = {50, 10, 30, 20, 40};

        // Busca binária em array NÃO ordenado — resultado imprevisível!
        int resultado = Arrays.binarySearch(baguncado, 30);
        System.out.println("Resultado (bagunçado): " + resultado); // Valor incorreto ou negativo

        // Forma correta
        Arrays.sort(baguncado);
        int resultadoCerto = Arrays.binarySearch(baguncado, 30);
        System.out.println("Resultado (ordenado): " + resultadoCerto); // 2
    }
}`,
      explicacao: 'Este exemplo alerta para o erro comum de usar binarySearch em array não ordenado. O resultado pode ser qualquer coisa; a ordenação prévia com sort() é obrigatória.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual é a finalidade da classe java.util.Arrays?',
      alternativas: [
        'Criar arrays de qualquer tipo automaticamente.',
        'Fornecer métodos utilitários prontos para manipular arrays (ordenar, buscar, comparar etc.).',
        'Substituir completamente o uso de arrays tradicionais em Java.'
      ],
      respostaCorreta: 1,
      explicacao: 'java.util.Arrays é uma classe utilitária que oferece métodos estáticos para operações comuns em arrays, como sort, binarySearch, toString e equals.'
    },
    {
      pergunta: 'O que acontece se você usar Arrays.binarySearch() em um array que NÃO foi ordenado previamente?',
      alternativas: [
        'O Java automaticamente ordena o array antes de buscar.',
        'O resultado será imprevisível — pode retornar um índice errado ou um valor negativo incorreto.',
        'O programa lança uma exceção ArrayIndexOutOfBoundsException.'
      ],
      respostaCorreta: 1,
      explicacao: 'A busca binária depende da ordenação do array. Sem ela, o algoritmo toma decisões erradas de descarte e o resultado é imprevisível.'
    },
    {
      pergunta: 'Qual é a diferença entre usar == e Arrays.equals() para comparar dois arrays?',
      alternativas: [
        'Não há diferença; ambos fazem a mesma coisa.',
        '== compara se as variáveis apontam para o mesmo objeto na memória; Arrays.equals() compara o conteúdo dos arrays, elemento por elemento.',
        '== é mais rápido e deve ser sempre preferido.'
      ],
      respostaCorreta: 1,
      explicacao: '== verifica a identidade (mesmo endereço de memória). Arrays.equals() verifica a igualdade de conteúdo (mesmos elementos, na mesma ordem).'
    },
    {
      pergunta: 'Qual é a saída de System.out.println(Arrays.toString(new int[]{1, 2, 3}));?',
      alternativas: [
        '1 2 3',
        '[1, 2, 3]',
        '[I@15db9742'
      ],
      respostaCorreta: 1,
      explicacao: 'Arrays.toString() converte o array em uma String no formato [elem1, elem2, elem3], exibindo os valores de forma legível.'
    }
  ]
};