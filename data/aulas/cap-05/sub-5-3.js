// Arquivo: data/aulas/cap-05/sub-5-3.js
// Aula 5.3 – Passagem de Argumentos por Referência (Objetos)

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-5-3'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Passagem de Argumentos por Referência (Objetos)</h2>
    <p class="lesson-text text-slate-500 italic">Como o Java manipula objetos copiando endereços — e por que isso muda tudo</p>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Na aula anterior, vimos que tipos primitivos viajam para dentro de métodos como fotocópias fiéis: o original fica blindado. Com <strong>objetos</strong>, a história é outra — e entendê‑la é decisivo para escrever código que funcione como esperado, sem surpresas desagradáveis. A regra fundamental permanece: Java sempre passa uma <strong>cópia</strong>. Mas quando o dado é um objeto, o que se copia não é o objeto inteiro, e sim o <strong>endereço de memória</strong> onde ele reside. É essa sutil diferença que permite que um método altere permanentemente os atributos do objeto original, ao mesmo tempo que jamais consegue trocar a referência da variável do chamador.</p>
    <p class="lesson-text">Vamos desmontar esse mecanismo nos mínimos detalhes, usando analogias visuais e exemplos práticos, para que você nunca mais confunda <strong>modificar o objeto</strong> com <strong>reatribuir a referência</strong>.</p>

    <h3 class="section-title">1. Manipulação de Referências: O Mapa do Tesouro</h3>
    <p class="lesson-text">Diferentemente de um <code class="code-inline">int</code> ou um <code class="code-inline">double</code>, um objeto é uma estrutura complexa — pode conter dezenas de atributos, textos longos, até imagens. Tudo isso não cabe em uma única célula da memória. Para gerenciar essa complexidade, o Java divide a RAM em duas grandes áreas:</p>

    <ul class="topic-list space-y-3 mb-4">
      <li><strong>Stack (Pilha):</strong> área de acesso rápido onde residem as variáveis locais e os <strong>endereços</strong> (referências). É como um quadro de avisos com lembretes curtos.</li>
      <li><strong>Heap (Monte):</strong> imenso depósito onde os objetos propriamente ditos são construídos e armazenados.</li>
    </ul>

    <p class="lesson-text">Quando escrevemos <code class="code-inline">Cliente conta = new Cliente();</code>, o operador <code class="code-inline">new</code> constrói o objeto <code class="code-inline">Cliente</code> no Heap, digamos no "Galpão 742". Na Stack, a variável <code class="code-inline">conta</code> armazena apenas o endereço desse galpão — um número, uma rota de acesso. Ela <strong>não</strong> contém o cliente; contém o mapa para encontrá‑lo.</p>

    <div class="callout-analogy">
      <strong>Analogia do GPS:</strong> O objeto é uma casa de alvenaria construída em um terreno. A variável é um papel com as coordenadas do GPS da casa. Você não carrega a casa no bolso — carrega o endereço escrito.
    </div>

    <p class="lesson-text">Quando passamos <code class="code-inline">conta</code> como argumento a um método, a "máquina de Xerox" do Java entra em ação: ela lê o conteúdo da variável — o endereço "Galpão 742" —, tira uma cópia desse endereço e a entrega ao método. O método recebe, portanto, uma nova variável local contendo o <strong>mesmo endereço</strong>. O objeto no Heap continuou imóvel; agora há dois mapas apontando para ele.</p>

    <h3 class="section-title">2. Efeitos Colaterais: Duas Pessoas na Mesma Casa</h3>
    <p class="lesson-text">Essa é a grande virada de chave em relação aos tipos primitivos. Como a variável do método e a do chamador apontam para o mesmo local físico do Heap, qualquer alteração nos atributos do objeto <strong>dentro do método</strong> será visível do lado de fora.</p>

    <div class="callout-analogy">
      <strong>Cenário:</strong> Você (fluxo principal) possui o endereço da casa do cliente. Chama o método <code class="code-inline">realizarAniversario()</code>, entregando uma cópia do endereço. O funcionário do método vai até a casa, entra e altera a idade de 29 para 30 anos. Quando o método termina e você retorna à sua mesa, seu mapa continua apontando para a mesma casa — que agora tem 30 anos. A casa é uma só; a alteração foi física.
    </div>

    <p class="lesson-text">Em código, isso se traduz assim:</p>
    <pre><code class="language-java">public static void realizarAniversario(Cliente c) {
    c.setIdade(30);               // altera o objeto original!
}

public static void main(String[] args) {
    Cliente cliente = new Cliente();
    cliente.setIdade(29);
    realizarAniversario(cliente);
    System.out.println(cliente.getIdade()); // 30
}</code></pre>

    <p class="lesson-text">Esse fenômeno é chamado de <strong>efeito colateral</strong> (side effect). Ele não é um defeito — é uma característica poderosa que nos permite delegar a atualização de objetos a métodos especializados, sem precisar recriar estruturas pesadas. Contudo, exige atenção: se vários métodos modificam o mesmo objeto, é preciso garantir que as alterações sejam coordenadas.</p>

    <h3 class="section-title">3. A Diferença Crucial: Modificar o Objeto vs. Reatribuir a Referência</h3>
    <p class="lesson-text">Existe uma armadilha clássica que confunde até programadores experientes: dentro do método, podemos <strong>reatribuir</strong> o parâmetro a um novo objeto. Essa ação tem efeito radicalmente diferente da simples modificação de atributos.</p>

    <p class="lesson-text">Imagine que o funcionário do RH, após alterar a idade para 30, decida criar uma casa totalmente nova e apontar seu mapa para lá:</p>

    <pre><code class="language-java">public static void realizarAniversario(Cliente c) {
    c.setIdade(30);                // (1) modifica a casa original
    c = new Cliente();             // (2) cria nova casa (Galpão 999)
    c.setIdade(50);                // (3) modifica a NOVA casa
}</code></pre>

    <p class="lesson-text">Vamos destrinchar o que ocorre na memória:</p>
    <ul class="topic-list space-y-3 mb-4">
      <li><strong>Passo (1):</strong> usando o mapa copiado, o método viaja até o Galpão 742 e grava 30 na idade. <strong>Objeto original alterado.</strong></li>
      <li><strong>Passo (2):</strong> <code class="code-inline">new Cliente()</code> constrói uma segunda casa no Galpão 999. Em seguida, a atribuição <code class="code-inline">c = ...</code> troca o conteúdo da variável local <code class="code-inline">c</code>: ela deixa de apontar para 742 e passa a apontar para 999. A variável local agora só enxerga a casa nova; perdeu completamente o contato com a original.</li>
      <li><strong>Passo (3):</strong> a idade 50 é aplicada à casa do Galpão 999, que só existe dentro do escopo do método.</li>
    </ul>

    <p class="lesson-text">Quando o método termina, sua variável local <code class="code-inline">c</code> é destruída. O mapa para o Galpão 999 desaparece junto com ela. A casa original (Galpão 742) continua com 30 anos, e a variável do <code class="code-inline">main</code> continua apontando para 742, inabalada. A casa 999, sem referências, será coletada pelo Garbage Collector.</p>

    <div class="callout-warning">
      <strong>Regra de ouro:</strong> Um método pode modificar livremente o <strong>conteúdo</strong> do objeto recebido. Mas <strong>jamais</strong> conseguirá fazer a variável do chamador apontar para um objeto diferente. A reatribuição afeta apenas a cópia local da referência.
    </div>

    <h3 class="section-title">4. Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Stack vs. Heap revisitado:</strong> A Stack armazena as referências (4 ou 8 bytes, dependendo da arquitetura). O Heap armazena os objetos, que podem ocupar kilobytes ou megabytes. Passar um objeto significa copiar apenas a referência — uma operação barata.</li>
      <li><strong>Garbage Collector:</strong> O objeto criado no Passo (2) torna‑se inalcançável assim que o método termina, pois nenhuma referência externa o aponta. O GC o remove automaticamente, liberando memória.</li>
      <li><strong>Igualdade de referências (<code class="code-inline">==</code>):</strong> Para objetos, o operador <code class="code-inline">==</code> compara endereços de memória. Após a reatribuição, <code class="code-inline">c == objetoOriginal</code> seria <code class="code-inline">false</code>, pois as referências são diferentes.</li>
      <li><strong>Imutabilidade como proteção:</strong> Classes imutáveis (como <code class="code-inline">String</code>) não possuem métodos que alterem seu estado. Assim, mesmo recebendo uma referência, um método não pode modificar o conteúdo — a única opção é retornar um novo objeto.</li>
    </ul>

    <h3 class="section-title">5. Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Atualização de registros:</strong> Um método <code class="code-inline">aplicarDesconto(Pedido p)</code> modifica o total do pedido original, sem precisar devolvê‑lo.</li>
      <li><strong>Ordenação de listas:</strong> O método <code class="code-inline">Collections.sort(lista)</code> altera a ordem dos elementos diretamente na lista original — efeito colateral desejado.</li>
      <li><strong>Design seguro:</strong> Se você não quer que um método modifique o objeto, crie uma cópia defensiva antes de passá‑lo, ou use objetos imutáveis.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">A passagem de objetos em Java segue uma lógica precisa: copia‑se o endereço, não a estrutura. Por isso, alterações nos atributos do objeto são refletidas no chamador (efeito colateral), enquanto a reatribuição do parâmetro é inofensiva para a referência original. Dominar essa distinção é essencial para escrever código confiável, evitar bugs misteriosos e tirar máximo proveito do modelo de memória da plataforma Java.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Efeito colateral: método altera o objeto original',
      codigo: `class Pessoa {
    String nome;
    int idade;

    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

public class TesteEfeitoColateral {
    static void fazerAniversario(Pessoa p) {
        p.idade = p.idade + 1;          // modifica o objeto original
    }

    public static void main(String[] args) {
        Pessoa joao = new Pessoa("João", 29);
        System.out.println("Antes: " + joao.idade); // 29
        fazerAniversario(joao);
        System.out.println("Depois: " + joao.idade); // 30
    }
}`,
      explicacao: 'O método fazerAniversario recebe uma cópia do endereço de joao. Ao alterar p.idade, ele modifica diretamente o objeto no Heap. A variável joao, no main, enxerga a alteração.'
    },
    {
      titulo: 'Reatribuir a referência não afeta o chamador',
      codigo: `public class TesteReatribuicao {
    static void trocar(Pessoa p) {
        p.idade = 30;                   // (1) modifica original
        p = new Pessoa("Maria", 25);    // (2) novo objeto, só local
        p.idade = 50;                   // (3) modifica o novo objeto
    }

    public static void main(String[] args) {
        Pessoa alguem = new Pessoa("Carlos", 20);
        trocar(alguem);
        System.out.println("Nome: " + alguem.nome);   // Carlos
        System.out.println("Idade: " + alguem.idade); // 30 (afetado por (1))
        // A referência alguem NÃO mudou para "Maria"
    }
}`,
      explicacao: 'O passo (1) altera a idade do objeto original para 30. No passo (2), o método cria um novo objeto e aponta sua variável local para ele — isso não afeta a variável alguem do main, que continua referenciando o objeto original. O passo (3) modifica o novo objeto, que é descartado ao final do método.'
    }
  ],

  exercicios: [
    {
      pergunta: 'O que exatamente o Java copia quando um objeto é passado como argumento?',
      alternativas: [
        'O objeto inteiro, duplicando seu tamanho em memória.',
        'Apenas o endereço de memória (referência) onde o objeto reside.',
        'Os valores de todos os atributos primitivos do objeto.'
      ],
      respostaCorreta: 1,
      explicacao: 'Java sempre passa uma cópia do conteúdo da variável. Como a variável de objeto guarda um endereço, é esse endereço que é copiado e entregue ao método. O objeto em si permanece único no Heap.'
    },
    {
      pergunta: 'Por que uma modificação em um atributo do objeto dentro do método afeta o objeto original fora dele?',
      alternativas: [
        'Porque o método tem acesso direto à variável do chamador.',
        'Porque ambos (chamador e método) possuem referências que apontam para o mesmo objeto na memória.',
        'Porque Java automaticamente sincroniza as variáveis após a execução do método.'
      ],
      respostaCorreta: 1,
      explicacao: 'Tanto a variável do método principal quanto o parâmetro do método armazenam o mesmo endereço do Heap. Qualquer alteração realizada através desse endereço modifica o único objeto existente, visível por ambos.'
    },
    {
      pergunta: 'O que acontece se, dentro de um método, atribuímos um novo objeto ao parâmetro recebido?',
      alternativas: [
        'A variável original do chamador passa a apontar para o novo objeto.',
        'Apenas a cópia local da referência é alterada; a variável do chamador permanece inalterada.',
        'O objeto original é automaticamente deletado e substituído pelo novo.'
      ],
      respostaCorreta: 1,
      explicacao: 'Reatribuir o parâmetro (ex.: p = new Objeto()) modifica exclusivamente a cópia da referência que pertence ao método. A referência do chamador continua apontando para o objeto original, e o novo objeto será descartado se não for retornado ou armazenado em outro lugar.'
    }
  ]
};