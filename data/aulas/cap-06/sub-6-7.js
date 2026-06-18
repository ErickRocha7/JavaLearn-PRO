// Arquivo: data/aulas/cap-06/sub-6-7.js
// Aula 6.7 – Diferenças entre Array e ArrayList

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-6-7'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Array vs. ArrayList: Os Quatro Pilares da Decisão</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Você já domina os dois mundos: os <strong>arrays tradicionais</strong>, armários de madeira rígidos com tamanho fixo, e os <strong>ArrayLists</strong>, armários elásticos que crescem e encolhem sozinhos. Mas uma dúvida crucial persiste: <em>se o ArrayList é tão moderno e prático, por que o Java ainda mantém os arrays? Quando usar um ou outro em um projeto real?</em></p>
    <p class="lesson-text">A resposta não é questão de gosto — é uma decisão de engenharia baseada em <strong>quatro pilares</strong>: <strong>Tamanho</strong> (estático vs. dinâmico), <strong>Tipos de Dados</strong> (primitivos vs. objetos), <strong>Performance</strong> (velocidade bruta vs. custo da automação) e <strong>Flexibilidade</strong> (trabalho manual vs. painel de controle). Nesta aula, compararemos as duas estruturas em cada um desses pilares, para que você se torne um arquiteto de software consciente e seguro.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de mergulhar na comparação, recapitulamos rapidamente:</p>
    <ul class="topic-list mb-4">
      <li><strong>Array:</strong> estrutura de tamanho fixo, homogênea, que aceita tipos primitivos (<code class="code-inline">int</code>, <code class="code-inline">double</code>) e objetos. Acesso por índice com colchetes. Nenhum método utilitário nativo.</li>
      <li><strong>ArrayList:</strong> lista dinâmica da API Collections, tamanho variável, armazena apenas <strong>objetos</strong> (exige Wrapper Classes para primitivos). Oferece métodos prontos como <code class="code-inline">add()</code>, <code class="code-inline">remove()</code> e <code class="code-inline">contains()</code>.</li>
    </ul>

    <div class="callout-analogy">
      <strong>Analogia do automóvel:</strong> arrays são como um carro de corrida manual — leve, rápido e direto, mas exigem que você troque as marchas manualmente. ArrayList é um automóvel automático — mais confortável e prático, mas consome um pouco mais de combustível para operar as engrenagens internas.
    </div>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. Tamanho: Estático vs. Dinâmico</h4>
    <p class="lesson-text">O pilar mais evidente é a flexibilidade volumétrica da estrutura.</p>

    <p class="lesson-text"><strong>Array Tradicional (estático):</strong> no momento em que você escreve <code class="code-inline">new int[5]</code>, o tamanho está selado. O array nasce com 5 posições e assim permanecerá até o fim. Se tentar inserir um 6º elemento, o programa lança <code class="code-inline">ArrayIndexOutOfBoundsException</code>. A única saída é criar um novo array maior e copiar manualmente todos os dados — um processo arriscado e trabalhoso.</p>

    <p class="lesson-text"><strong>ArrayList (dinâmico):</strong> você não precisa prever o tamanho. A lista começa compacta e, a cada <code class="code-inline">add()</code>, expande‑se automaticamente. Quando a capacidade interna se esgota, o ArrayList cria um novo array maior (≈50% a mais), copia os elementos e descarta o antigo — tudo nos bastidores, de forma transparente. Se você remover itens com <code class="code-inline">remove()</code>, a lista se contrai e libera memória. O risco de estouro de limites é praticamente eliminado.</p>

    <div class="callout-success">
      <strong>Regra prática:</strong> se o número de elementos é desconhecido ou varia durante a execução, ArrayList é a escolha natural.
    </div>

    <h4 class="subsection-title">2. Tipos de Dados: Primitivos vs. Somente Objetos</h4>
    <p class="lesson-text">O segundo pilar diz respeito à natureza dos dados que cada estrutura pode armazenar.</p>

    <p class="lesson-text"><strong>Array (democrático):</strong> aceita <strong>tipos primitivos</strong> (<code class="code-inline">int</code>, <code class="code-inline">double</code>, <code class="code-inline">char</code>, <code class="code-inline">boolean</code>) e <strong>objetos</strong> (<code class="code-inline">String</code>, classes customizadas). Guardar um <code class="code-inline">int</code> em um array é direto: o valor puro fica no chip de silício, ocupando poucos bytes.</p>

    <p class="lesson-text"><strong>ArrayList (exclusivo para objetos):</strong> por pertencer à API Collections e usar Generics (<code class="code-inline">&lt;T&gt;</code>), ele <strong>não aceita primitivos</strong>. <code class="code-inline">ArrayList&lt;int&gt;</code> gera erro de compilação. Para armazenar números, você deve usar as <strong>Wrapper Classes</strong>: <code class="code-inline">Integer</code>, <code class="code-inline">Double</code>, <code class="code-inline">Character</code>, <code class="code-inline">Boolean</code>. Felizmente, o <em>autoboxing</em> cuida da conversão automaticamente, mas cada elemento agora é um objeto, pesando mais na memória.</p>

    <h4 class="subsection-title">3. Performance: Velocidade Bruta vs. Custo da Automação</h4>
    <p class="lesson-text">Em computação, nenhuma facilidade vem de graça. A elasticidade do ArrayList consome ciclos de processamento e mais memória.</p>

    <p class="lesson-text"><strong>Array (alta performance):</strong> os elementos são armazenados de forma <strong>contígua</strong> na memória RAM, permitindo acesso instantâneo a qualquer posição por índice (O(1)). E por aceitar primitivos, o consumo de memória é mínimo. Em sistemas de tempo real, games 3D ou softwares embarcados, essa economia e velocidade fazem toda a diferença.</p>

    <p class="lesson-text"><strong>ArrayList (custo oculto):</strong> além do peso das Wrapper Classes (um <code class="code-inline">Integer</code> ocupa cerca de 4× mais bytes que um <code class="code-inline">int</code>), a expansão dinâmica exige copiar todo o array interno quando a capacidade se esgota — operação O(n) ocasional. Para a maioria das aplicações comerciais (apps bancários, e‑commerce, redes sociais), esse custo é irrelevante diante dos processadores modernos. Mas em cenários de extrema escassez de recursos (dispositivos vestíveis, marcapassos, foguetes), o array ainda é insubstituível.</p>

    <div class="callout-info">
      <strong>Complexidade:</strong> acessar por índice em ambos é O(1). Inserir no final do ArrayList é O(1) amortizado; no meio, O(n). Em arrays, qualquer inserção que exceda o tamanho exige a criação de um novo array (O(n) para cópia).
    </div>

    <h4 class="subsection-title">4. Flexibilidade: Trabalho Artesanal vs. Painel de Controle</h4>
    <p class="lesson-text">A produtividade do desenvolvedor é o fator mais caro em um projeto. Aqui o ArrayList ganha por larga margem.</p>

    <p class="lesson-text"><strong>Array (esforço manual):</strong> não há métodos prontos. Para adicionar um elemento no meio, remover um item sem deixar buraco ou verificar se um valor existe, você precisa escrever loops <code class="code-inline">for</code> complexos, gerenciar índices e variáveis temporárias. Isso gera mais código, mais bugs e mais tempo de desenvolvimento.</p>

    <p class="lesson-text"><strong>ArrayList (painel de controle):</strong> oferece métodos como <code class="code-inline">add()</code>, <code class="code-inline">remove()</code>, <code class="code-inline">contains()</code>, <code class="code-inline">get()</code>, <code class="code-inline">set()</code> e <code class="code-inline">size()</code>. Inserir em qualquer posição, deletar sem deixar vácuos e buscar elementos é feito com uma única linha de código. O resultado é um código mais limpo, legível e até 80% mais enxuto para manipulação de coleções.</p>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Desempenho de acesso:</strong> ambos fornecem acesso aleatório O(1). A diferença aparece nas operações de redimensionamento e inserções/remoções no meio.</li>
      <li><strong>Capacidade inicial do ArrayList:</strong> começa com 10 posições. Se você souber a quantidade aproximada de elementos, use <code class="code-inline">new ArrayList&lt;&gt;(capacidade)</code> para evitar múltiplas expansões.</li>
      <li><strong>Arrays e memória:</strong> arrays de objetos guardam referências (4 ou 8 bytes cada), não os objetos em si. Os objetos residem na Heap e podem estar espalhados.</li>
      <li><strong>ArrayList é não sincronizado:</strong> em ambientes multithread, use <code class="code-inline">Collections.synchronizedList()</code> ou <code class="code-inline">CopyOnWriteArrayList</code> se necessário.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Use Array quando:</strong> o número de elementos é fixo (dias da semana, meses do ano); você precisa da máxima velocidade e menor consumo de memória (jogos, sistemas embarcados); está lidando com muitos primitivos e não quer o overhead de wrappers.</li>
      <li><strong>Use ArrayList quando:</strong> a quantidade de dados varia (carrinho de compras, feed de notícias); você valoriza produtividade e código limpo; precisa de métodos de alto nível para manipular a coleção.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Arrays e ArrayLists não são concorrentes — são ferramentas complementares. O array é o bloco bruto de alta performance; o ArrayList é a camada de conforto e produtividade. A escolha recai sobre as necessidades do seu projeto: se a velocidade e a economia de memória são críticas, vá de array. Se a flexibilidade e o tempo de desenvolvimento pesam mais, ArrayList é o caminho.</p>
    <p class="lesson-text">Com os quatro pilares em mente, você já pode justificar suas decisões técnicas com segurança. Na próxima aula, aplicaremos tudo isso no <strong>Estudo de Caso: Lista de Tarefas Dinâmica</strong>, onde veremos essas diferenças na prática.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Array vs ArrayList: operações equivalentes',
      codigo: `import java.util.ArrayList;
import java.util.Arrays;

public class Comparacao {
    public static void main(String[] args) {
        // --- ARRAY (trabalho manual) ---
        String[] frutasArray = {"Maçã", "Banana", "Laranja"};

        // "Remover" o segundo elemento (índice 1) manualmente:
        String[] novoArray = new String[frutasArray.length - 1];
        for (int i = 0, j = 0; i < frutasArray.length; i++) {
            if (i != 1) novoArray[j++] = frutasArray[i];
        }
        frutasArray = novoArray;
        System.out.println("Array após remoção: " + Arrays.toString(frutasArray));
        // [Maçã, Laranja]

        // --- ARRAYLIST (método pronto) ---
        ArrayList<String> frutasList = new ArrayList<>();
        frutasList.add("Maçã");
        frutasList.add("Banana");
        frutasList.add("Laranja");
        frutasList.remove(1); // Remove "Banana" e contrai a lista
        System.out.println("ArrayList após remoção: " + frutasList);
        // [Maçã, Laranja]
    }
}`,
      explicacao: 'Remover um elemento de um array exige criar um novo array e copiar os elementos desejados. O ArrayList faz isso com um único remove(), inclusive contraindo a lista.'
    },
    {
      titulo: 'Diferença de tipo: primitivos vs objetos',
      codigo: `import java.util.ArrayList;

public class TiposDados {
    public static void main(String[] args) {
        // Array aceita primitivos diretamente
        int[] numerosArray = {10, 20, 30};
        System.out.println("Array int: " + numerosArray[0]);

        // ArrayList exige Wrapper Integer (autoboxing automático)
        ArrayList<Integer> numerosList = new ArrayList<>();
        numerosList.add(10);  // int -> Integer (autoboxing)
        numerosList.add(20);
        System.out.println("ArrayList<Integer>: " + numerosList.get(0));
    }
}`,
      explicacao: 'O array guarda o int diretamente. O ArrayList usa Integer, mas o autoboxing esconde a conversão, dando a impressão de que aceita primitivos.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual é a principal diferença de tamanho entre um array e um ArrayList?',
      alternativas: [
        'Arrays são sempre maiores que ArrayLists.',
        'Arrays têm tamanho fixo após a criação; ArrayLists podem crescer e encolher dinamicamente.',
        'ArrayLists têm tamanho fixo e arrays são dinâmicos.'
      ],
      respostaCorreta: 1,
      explicacao: 'Arrays são estáticos (tamanho definido na criação e imutável). ArrayLists são dinâmicos, gerenciando seu tamanho automaticamente.'
    },
    {
      pergunta: 'Por que não podemos criar um ArrayList<int>?',
      alternativas: [
        'Porque int é muito grande para caber no ArrayList.',
        'Porque ArrayList só pode armazenar objetos, e int é um tipo primitivo.',
        'Porque ArrayList exige o uso de colchetes para tipos primitivos.'
      ],
      respostaCorreta: 1,
      explicacao: 'ArrayList faz parte da API Collections e só armazena objetos. Para inteiros, é necessário usar a Wrapper Integer.'
    },
    {
      pergunta: 'Em qual cenário o array tradicional é a melhor escolha?',
      alternativas: [
        'Quando o número de elementos varia muito durante a execução.',
        'Quando a máxima velocidade e o menor consumo de memória são essenciais, e a quantidade de dados é fixa.',
        'Sempre, pois arrays são mais modernos.'
      ],
      respostaCorreta: 1,
      explicacao: 'Arrays são mais eficientes em cenários de alto desempenho com tamanho conhecido, pois evitam o overhead de expansão dinâmica e Wrapper Classes.'
    },
    {
      pergunta: 'Qual método do ArrayList substitui a lógica manual de procurar um elemento em um array?',
      alternativas: [
        'add()',
        'remove()',
        'contains()'
      ],
      respostaCorreta: 2,
      explicacao: 'contains() verifica a existência de um elemento, eliminando a necessidade de escrever loops manuais de busca.'
    }
  ]
};