// Arquivo: data/aulas/cap-06/sub-6-2.js
// Aula 6.2 – Percorrendo Arrays com for e for-each

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-6-2'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Percorrendo Arrays: Domine os Laços for e for-each</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Na aula anterior, aprendemos a criar arrays e a manipular suas posições uma a uma, manualmente. Agora imagine gerenciar um array com 5.000 clientes ou 150.000 produtos. Seria impossível escrever uma linha de código para cada elemento. Para vencer essa barreira de escala, a programação utiliza <strong>laços de repetição</strong> — estruturas que percorrem automaticamente todas as posições do array, executando um mesmo bloco de instruções para cada uma delas.</p>
    <p class="lesson-text">Nesta aula, vamos dominar as duas principais ferramentas de varredura do Java: o <strong>for tradicional</strong>, que nos dá controle total sobre o índice, e o <strong>for-each</strong>, que simplifica a leitura dos elementos. Veremos como usar a propriedade <code class="code-inline">length</code> como linha de chegada e, principalmente, quando empregar cada laço para escrever código mais limpo, seguro e eficiente.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Um array é uma estrutura de tamanho fixo e homogênea, onde cada elemento pode ser acessado por um índice que começa em zero. Para automatizar o acesso a todos esses elementos, precisamos de um mecanismo que:</p>
    <ul class="topic-list mb-4">
      <li>Percorra as posições em sequência (ou em uma ordem desejada).</li>
      <li>Saiba exatamente onde o array termina, evitando invadir memória indevida.</li>
      <li>Permita, se necessário, modificar os valores originais de cada posição.</li>
    </ul>
    <p class="lesson-text">Os laços <code class="code-inline">for</code> atendem a esses requisitos. O <strong>for tradicional</strong> gerencia um contador explícito (o índice), enquanto o <strong>for-each</strong> esconde o índice e entrega diretamente cada elemento.</p>

    <div class="callout-analogy">
      <strong>Analogia do assistente de almoxarifado:</strong> Percorrer um array é como enviar um funcionário para abrir todas as gavetas de um armário, uma por uma, realizar uma tarefa (ex.: anotar o conteúdo) e passar para a seguinte. O assistente precisa saber quantas gavetas existem para não tentar abrir uma parede. Essa informação é fornecida pela propriedade <code class="code-inline">length</code>.
    </div>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. A propriedade <code class="code-inline">length</code> — O tamanho exato do armário</h4>
    <p class="lesson-text">Todo array em Java possui uma propriedade interna chamada <code class="code-inline">length</code> (comprimento), que armazena o número total de posições. Ela é acessada escrevendo <code class="code-inline">nomeDoArray.length</code>, sem parênteses, pois não é um método.</p>
    <pre><code class="language-java">int[] precos = {10, 20, 30, 40, 50};
System.out.println(precos.length); // Exibe 5</code></pre>
    <p class="lesson-text">A grande vantagem do <code class="code-inline">length</code> é que ele <strong>elimina números fixos (hardcoded)</strong> no código. Se o tamanho do array mudar, o laço se adapta automaticamente, prevenindo o erro <em>ArrayIndexOutOfBoundsException</em>.</p>

    <h4 class="subsection-title">2. Laço <code class="code-inline">for</code> tradicional — Controle total pelo índice</h4>
    <p class="lesson-text">O <code class="code-inline">for</code> clássico é formado por três partes dentro dos parênteses: <strong>inicialização</strong>, <strong>condição de parada</strong> e <strong>incremento</strong>. Ele gerencia um contador — normalmente chamado de <code class="code-inline">i</code> — que representa o índice da posição atual.</p>

    <pre><code class="language-java">for (int i = 0; i < precos.length; i++) {
    System.out.println("Posição " + i + " = " + precos[i]);
}</code></pre>

    <p class="lesson-text"><strong>Simulação passo a passo:</strong></p>
    <ol class="list-decimal ml-6 mt-2 space-y-1 mb-4">
      <li><strong>Inicialização:</strong> <code class="code-inline">int i = 0</code> → o contador nasce em zero (primeira gaveta).</li>
      <li><strong>Condição:</strong> <code class="code-inline">i < precos.length</code> → "i é menor que 5?". Se verdadeiro, executa o bloco; se falso, encerra.</li>
      <li><strong>Incremento:</strong> <code class="code-inline">i++</code> → após o bloco, i passa a valer 1, depois 2, até tornar-se 5, quando a condição falha.</li>
    </ol>

    <p class="lesson-text">O <code class="code-inline">for</code> tradicional é indispensável quando você precisa:</p>
    <ul class="topic-list mb-4">
      <li><strong>Modificar os elementos do array:</strong> gravar um novo valor na posição <code class="code-inline">i</code> (ex.: <code class="code-inline">precos[i] = precos[i] * 1.10;</code>).</li>
      <li><strong>Percorrer o array fora da ordem padrão:</strong> de trás para frente (<code class="code-inline">i--</code>), saltar de duas em duas posições (<code class="code-inline">i += 2</code>) ou começar do meio.</li>
      <li><strong>Comparar elementos vizinhos:</strong> acessar <code class="code-inline">array[i]</code> e <code class="code-inline">array[i+1]</code> simultaneamente, comum em algoritmos de ordenação.</li>
    </ul>

    <h4 class="subsection-title">3. Laço <code class="code-inline">for-each</code> — Leitura simplificada e segura</h4>
    <p class="lesson-text">Introduzido no Java 5, o <code class="code-inline">for-each</code> (ou "para cada") foi projetado para os casos em que você deseja apenas <strong>ler</strong> cada elemento do array, sem se preocupar com o índice. Sua sintaxe elimina contadores e limites.</p>

    <pre><code class="language-java">for (int preco : precos) {
    System.out.println("Preço: " + preco);
}</code></pre>

    <p class="lesson-text">A leitura é quase natural: "para cada <code class="code-inline">int preco</code> dentro do array <code class="code-inline">precos</code>, execute o bloco". O Java, internamente, extrai cada elemento e o deposita na variável temporária <code class="code-inline">preco</code>, avançando automaticamente até o final.</p>

    <div class="callout-success">
      <strong>Vantagens do for-each:</strong> código extremamente limpo, impossível estourar os limites do array (sem risco de <em>ArrayIndexOutOfBoundsException</em>) e ideal para leitura e operações de acumulação.
    </div>

    <p class="lesson-text">Contudo, o <code class="code-inline">for-each</code> <strong>não permite modificar os elementos originais</strong>. Se você alterar a variável temporária (<code class="code-inline">preco = preco * 2</code>), estará modificando apenas uma cópia; o array permanece intacto. Ele também não fornece o número da posição atual, o que impede operações que dependam do índice.</p>

    <h4 class="subsection-title">4. Comparação: quando usar cada laço?</h4>
    <p class="lesson-text">A escolha entre <code class="code-inline">for</code> tradicional e <code class="code-inline">for-each</code> depende do que você precisa fazer com os dados.</p>

    <div class="overflow-x-auto mb-4">
      <table class="table-didatic">
        <thead>
          <tr>
            <th>Situação</th>
            <th>Laço recomendado</th>
            <th>Motivo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apenas exibir ou ler os valores</td>
            <td><code class="code-inline">for-each</code></td>
            <td>Mais simples, seguro e expressivo</td>
          </tr>
          <tr>
            <td>Calcular soma, média, máximo ou mínimo</td>
            <td><code class="code-inline">for-each</code></td>
            <td>Só é necessário o valor, não o índice</td>
          </tr>
          <tr>
            <td>Alterar o conteúdo do array (ex.: dar aumento)</td>
            <td><code class="code-inline">for</code> tradicional</td>
            <td>Precisa do índice para gravar de volta</td>
          </tr>
          <tr>
            <td>Percorrer de trás para frente</td>
            <td><code class="code-inline">for</code> tradicional</td>
            <td>Controle manual do índice</td>
          </tr>
          <tr>
            <td>Acessar posições alternadas (pares, ímpares)</td>
            <td><code class="code-inline">for</code> tradicional</td>
            <td>Incremento customizado (i+=2)</td>
          </tr>
          <tr>
            <td>Comparar elementos adjacentes</td>
            <td><code class="code-inline">for</code> tradicional</td>
            <td>Requer índice i e i+1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="lesson-text"><strong>Regra de ouro:</strong> se você só precisa do valor e não do índice, opte pelo <code class="code-inline">for-each</code>. Caso contrário, o <code class="code-inline">for</code> tradicional lhe dará o controle necessário.</p>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Propriedade <code class="code-inline">length</code>:</strong> é um atributo público final do objeto array. Não confunda com o método <code class="code-inline">size()</code> de coleções.</li>
      <li><strong>For-each e tipos primitivos:</strong> a variável temporária recebe uma <strong>cópia do valor</strong>. Modificá‑la não afeta o array. Para arrays de objetos, a variável recebe a referência; você pode alterar o estado interno do objeto, mas não substituir a referência no array.</li>
      <li><strong>For-each e Iterable:</strong> o <code class="code-inline">for-each</code> funciona com qualquer classe que implemente <code class="code-inline">Iterable</code>, como <code class="code-inline">ArrayList</code>.</li>
      <li><strong>Desempenho:</strong> ambos têm performance semelhante; a diferença é apenas de legibilidade e propósito.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Relatórios:</strong> percorrer um array de vendas e exibir os totais na tela.</li>
      <li><strong>Reajuste de preços:</strong> usar <code class="code-inline">for</code> tradicional para aplicar um percentual a todos os itens.</li>
      <li><strong>Validação de dados:</strong> verificar se algum campo obrigatório está nulo ou vazio com <code class="code-inline">for-each</code>.</li>
      <li><strong>Algoritmos de busca:</strong> encontrar o maior elemento ou a média aritmética.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Os laços <code class="code-inline">for</code> e <code class="code-inline">for-each</code> são as ferramentas fundamentais para automatizar a manipulação de arrays. A propriedade <code class="code-inline">length</code> fornece o limite seguro; o <code class="code-inline">for</code> tradicional oferece controle total sobre o índice, enquanto o <code class="code-inline">for-each</code> proporciona uma sintaxe limpa e à prova de erros para leitura.</p>
    <p class="lesson-text">Saber escolher entre um e outro é um sinal de maturidade como programador. Lembre-se: quando precisar modificar os dados ou de um comportamento não linear, vá de <code class="code-inline">for</code> tradicional; caso contrário, abrace a simplicidade do <code class="code-inline">for-each</code>.</p>
    <p class="lesson-text">Na próxima aula, expandiremos esse conhecimento para arrays com mais de uma dimensão, abrindo caminho para matrizes e tabelas.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Percorrendo array com for tradicional e for-each',
      codigo: `public class PercorreArray {
    public static void main(String[] args) {
        int[] numeros = {2, 4, 6, 8, 10};

        // Usando for tradicional (com índice)
        System.out.println("Com for tradicional:");
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("numeros[" + i + "] = " + numeros[i]);
        }

        // Usando for-each (apenas leitura)
        System.out.println("\\nCom for-each:");
        for (int num : numeros) {
            System.out.println("Valor: " + num);
        }
    }
}`,
      explicacao: 'O for tradicional acessa cada elemento pelo índice, permitindo exibir a posição. O for-each extrai cada valor diretamente, simplificando a leitura.'
    },
    {
      titulo: 'Modificando o array com for tradicional (aumento de 20%)',
      codigo: `public class AumentoPrecos {
    public static void main(String[] args) {
        double[] precos = {100.0, 200.0, 300.0};

        System.out.println("Antes do aumento:");
        for (double p : precos) {
            System.out.print(p + " ");
        }

        // Aplica aumento de 20% usando for tradicional
        for (int i = 0; i < precos.length; i++) {
            precos[i] = precos[i] * 1.20;
        }

        System.out.println("\\nDepois do aumento:");
        for (double p : precos) {
            System.out.print(p + " ");
        }
    }
}`,
      explicacao: 'O for-each não consegue alterar os elementos originais; por isso, usamos o for tradicional com índice para sobrescrever cada posição com o novo valor.'
    },
    {
      titulo: 'Cálculo de média com for-each',
      codigo: `public class MediaNotas {
    public static void main(String[] args) {
        double[] notas = {7.5, 8.0, 6.5, 9.0, 7.0};
        double soma = 0;

        for (double nota : notas) {
            soma += nota;
        }

        double media = soma / notas.length;
        System.out.printf("Média: %.2f%n", media);
    }
}`,
      explicacao: 'Para acumular valores, o for-each é perfeito: lemos cada nota e adicionamos à variável soma, sem precisar dos índices.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual é a função da propriedade length em um array Java?',
      alternativas: [
        'Retornar o último elemento do array.',
        'Indicar a capacidade máxima de memória do computador.',
        'Retornar o número total de elementos do array.'
      ],
      respostaCorreta: 2,
      explicacao: 'length é um atributo que informa quantas posições o array possui. É essencial para controlar o fim dos laços de repetição.'
    },
    {
      pergunta: 'Em qual situação o for-each NÃO é a melhor escolha?',
      alternativas: [
        'Quando queremos apenas exibir os elementos na tela.',
        'Quando precisamos modificar os valores originais do array.',
        'Quando precisamos calcular a soma de todos os elementos.'
      ],
      respostaCorreta: 1,
      explicacao: 'O for-each fornece uma cópia do valor e não dá acesso ao índice. Para alterar o array, é necessário o for tradicional com índice.'
    },
    {
      pergunta: 'O que acontece se tentarmos acessar o índice 5 em um array de 5 posições (índices 0 a 4) dentro de um for tradicional que vai até i < array.length?',
      alternativas: [
        'O programa exibe o valor 0.',
        'O laço simplesmente não executa essa iteração, pois a condição i < 5 falha quando i=5.',
        'Ocorre uma exceção ArrayIndexOutOfBoundsException.'
      ],
      respostaCorreta: 1,
      explicacao: 'A condição i < array.length impede que o índice atinja o valor 5, pois 5 não é menor que 5. Isso evita o acesso a uma posição inexistente.'
    }
  ]
};