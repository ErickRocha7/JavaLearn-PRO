// Arquivo: data/aulas/cap-02/sub-2-6.js
// Aula 2.6 – A Classe String: Principais Métodos

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-2-6'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">A Classe String: Principais Métodos</h2>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">A maioria dos programas que você usará ou construirá gira em torno de texto: nomes de usuários, senhas, e‑mails, documentos, logs. Em Java, o texto não é tratado como um simples amontoado de caracteres – ele é um <strong>objeto sofisticado</strong>, munido de inteligência própria. A classe <code class="code-inline">String</code> encapsula décadas de engenharia para que manipular palavras, frases e documentos seja tão natural quanto escrever uma frase.</p>
    <p class="lesson-text">Nesta aula, vamos desmontar o "canivete suíço" que todo objeto <code class="code-inline">String</code> carrega consigo. Você aprenderá a medir o tamanho de um texto, transformar letras, extrair pedaços, localizar termos e – principalmente – a comparar conteúdos de forma segura, evitando o erro que mais derruba programas Java. Ao final, terá autonomia para lidar com qualquer desafio textual do dia a dia de um desenvolvedor.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de abrir o canivete, precisamos entender por que <code class="code-inline">String</code> é tão especial. O Java divide todos os dados em duas famílias: <strong>tipos primitivos</strong> e <strong>classes (tipos de referência)</strong>.</p>

    <div class="callout-info">
      <strong>Tipos primitivos (int, double, boolean, char):</strong> são como caixas de sapato etiquetadas. Armazenam apenas um valor bruto, sem inteligência. O número <code class="code-inline">25</code> não sabe fazer nada sozinho; você precisa escrever lógica externa para manipulá‑lo.
    </div>

    <p class="lesson-text"><code class="code-inline">String</code>, com a inicial maiúscula, é uma <strong>classe</strong>. Quando você escreve <code class="code-inline">String nome = "Carlos";</code>, não está apenas guardando letras em uma caixa – está <strong>instanciando um objeto completo</strong> na memória. Esse objeto possui dezenas de métodos embutidos que permitem operar sobre o texto de forma direta e elegante. A variável <code class="code-inline">nome</code> não contém o texto em si, mas uma <strong>referência</strong> (endereço) para o objeto que reside na Heap.</p>

    <p class="lesson-text">Assim, cada <code class="code-inline">String</code> nasce com um "canivete suíço" de ferramentas. Você aciona qualquer uma delas com o operador ponto (<code class="code-inline">.</code>), dando ordens diretas ao objeto: <code class="code-inline">texto.length()</code>, <code class="code-inline">texto.toUpperCase()</code> etc.</p>

    <div class="callout-warning">
      <strong>Imutabilidade:</strong> Um detalhe crucial: objetos <code class="code-inline">String</code> são <strong>imutáveis</strong>. Nenhum método modifica o texto original – eles sempre produzem uma <strong>nova String</strong> com o resultado. Se você não capturar essa nova String em uma variável, a transformação se perde.
    </div>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. Transformação Básica: <code class="code-inline">length()</code>, <code class="code-inline">toUpperCase()</code> e <code class="code-inline">toLowerCase()</code></h4>
    <p class="lesson-text">Estes três métodos resolvem 80% das tarefas cotidianas com texto. Eles não exigem argumentos e são extremamente simples de usar.</p>

    <ul class="topic-list space-y-3 mb-4">
      <li>
        <strong><code class="code-inline">length()</code> – A fita métrica:</strong>
        Retorna um <code class="code-inline">int</code> com o número exato de caracteres do texto, <strong>incluindo espaços</strong> e pontuação. Por exemplo, <code class="code-inline">"Café Forte".length()</code> resulta em <code class="code-inline">10</code> (4 letras + 1 espaço + 5 letras). É a ferramenta essencial para validar tamanhos mínimos de senha, CPF ou limitar um campo de texto.
      </li>
      <li>
        <strong><code class="code-inline">toUpperCase()</code> – Caixa alta:</strong>
        Converte todas as letras minúsculas para maiúsculas. Números, símbolos e espaços não são alterados. <code class="code-inline">"java 2026!".toUpperCase()</code> produz <code class="code-inline">"JAVA 2026!"</code>. Amplamente usado em relatórios, sistemas de aviação e padronização de exibição.
      </li>
      <li>
        <strong><code class="code-inline">toLowerCase()</code> – Caixa baixa:</strong>
        Faz o inverso: converte todas as letras maiúsculas para minúsculas. É o segredo por trás de barras de pesquisa e sistemas de login que ignoram acidentalmente o Caps Lock. Por exemplo, padronizar e‑mails antes de comparar.
      </li>
    </ul>

    <pre><code class="language-java">String frase = "  Java é Poderoso!  ";
System.out.println("Tamanho: " + frase.length());           // 21 (espaços contam!)
System.out.println("Maiúsculas: " + frase.toUpperCase());   // "  JAVA É PODEROSO!  "
System.out.println("Minúsculas: " + frase.toLowerCase());   // "  java é poderoso!  "</code></pre>

    <h4 class="subsection-title">2. Busca e Extração: <code class="code-inline">charAt()</code>, <code class="code-inline">substring()</code> e <code class="code-inline">contains()</code></h4>
    <p class="lesson-text">Quando precisamos acessar partes específicas de um texto, entram em cena os métodos cirúrgicos. Eles encaram a String como uma fila de caracteres numerados, onde <strong>a primeira posição é sempre 0</strong> (índice zero).</p>

    <ul class="topic-list space-y-3 mb-4">
      <li>
        <strong><code class="code-inline">charAt(int indice)</code> – O caractere na posição:</strong>
        Devolve o <code class="code-inline">char</code> que ocupa a cadeira informada. Em <code class="code-inline">"Java".charAt(2)</code>, o retorno é <code class="code-inline">'v'</code> (J=0, a=1, v=2). Ideal para verificar se um código começa com determinada letra ou extrair iniciais.
      </li>
      <li>
        <strong><code class="code-inline">substring(int inicio, int fim)</code> – A tesoura virtual:</strong>
        Recorta um pedaço da String. O corte começa no índice <strong>inclusivo</strong> <code class="code-inline">inicio</code> e vai até o índice <strong>exclusivo</strong> <code class="code-inline">fim</code> (o caractere no índice <code class="code-inline">fim</code> não entra). Exemplo: <code class="code-inline">"2026-06-18".substring(0, 4)</code> extrai <code class="code-inline">"2026"</code>. Usado para separar DDD de telefone, extensões de arquivo ou trechos de datas.
      </li>
      <li>
        <strong><code class="code-inline">contains(CharSequence sequencia)</code> – O detetive:</strong>
        Verifica se a String contém exatamente a sequência de caracteres informada. Retorna <code class="code-inline">true</code> ou <code class="code-inline">false</code>. É <strong>case‑sensitive</strong>: <code class="code-inline">"banana".contains("Ana")</code> retorna <code class="code-inline">false</code>. Essencial para filtros de conteúdo, busca em e‑mails e validação de formatos.
      </li>
    </ul>

    <pre><code class="language-java">String email = "aluno@escola.edu.br";
System.out.println("Posição 0: " + email.charAt(0));        // 'a'
System.out.println("Domínio: " + email.substring(6, 12));   // "escola"
System.out.println("Tem @? " + email.contains("@"));        // true</code></pre>

    <h4 class="subsection-title">3. Comparação Segura: O Perigo do <code class="code-inline">==</code> e os Métodos <code class="code-inline">equals()</code></h4>
    <p class="lesson-text">Este é, sem exagero, o tópico mais crítico para iniciantes. A confusão entre <code class="code-inline">==</code> e <code class="code-inline">.equals()</code> é a causa número um de bugs lógicos em Java.</p>

    <div class="callout-warning">
      <strong>O problema com <code class="code-inline">==</code>:</strong><br>
      Para tipos primitivos, <code class="code-inline">==</code> compara <strong>conteúdos</strong>. Para objetos, ele compara <strong>endereços de memória</strong>. Duas Strings com o mesmo texto podem estar em locais diferentes na memória (uma veio do teclado, outra do banco de dados). Usar <code class="code-inline">==</code> dirá que são diferentes, mesmo que as letras sejam idênticas.
    </div>

    <ul class="topic-list space-y-3 mb-4">
      <li>
        <strong><code class="code-inline">.equals(Object outro)</code> – Comparação de conteúdo:</strong>
        Este método <strong>compara os caracteres</strong> dentro dos objetos, ignorando seus endereços. É <strong>case‑sensitive</strong>: <code class="code-inline">"Java".equals("java")</code> resulta <code class="code-inline">false</code>. Deve ser usado obrigatoriamente para senhas e dados exatos.
      </li>
      <li>
        <strong><code class="code-inline">.equalsIgnoreCase(String outra)</code> – Comparação flexível:</strong>
        Idêntico ao anterior, mas <strong>ignora diferenças entre maiúsculas e minúsculas</strong>. <code class="code-inline">"Java".equalsIgnoreCase("java")</code> retorna <code class="code-inline">true</code>. Ideal para nomes de usuários, e‑mails e cupons promocionais.
      </li>
    </ul>

    <pre><code class="language-java">String s1 = new String("Olá");
String s2 = new String("Olá");
System.out.println(s1 == s2);                // false (endereços diferentes)
System.out.println(s1.equals(s2));           // true  (conteúdo igual)
System.out.println("java".equals("JAVA"));   // false
System.out.println("java".equalsIgnoreCase("JAVA")); // true</code></pre>

    <div class="callout-analogy">
      <strong>Analogia:</strong> Imagine duas casas idênticas construídas em terrenos diferentes. O <code class="code-inline">==</code> compara os endereços (Rua A, 10 vs Rua B, 50); o <code class="code-inline">.equals()</code> entra em cada cômodo e verifica se os móveis, cores e metragem são os mesmos.
    </div>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Pool de Strings:</strong> quando você cria uma String usando literais (<code class="code-inline">String s = "abc";</code>), o Java a armazena em uma área especial chamada <strong>String Pool</strong>. Se outra variável receber o mesmo literal, ambas apontarão para o mesmo objeto no Pool. Nesse caso específico, <code class="code-inline">==</code> pode retornar <code class="code-inline">true</code>, mas <strong>não se deve confiar nisso</strong>. Use sempre <code class="code-inline">.equals()</code>.</li>
      <li><strong>Imutabilidade e desempenho:</strong> cada "alteração" em uma String gera um novo objeto. Para muitas concatenações, o ideal é usar <code class="code-inline">StringBuilder</code> (aula 2.7).</li>
      <li><strong>Índices fora dos limites:</strong> métodos como <code class="code-inline">charAt()</code> e <code class="code-inline">substring()</code> lançam <code class="code-inline">StringIndexOutOfBoundsException</code> se os índices forem inválidos. Sempre valide o tamanho da String antes.</li>
      <li><strong>O parâmetro de <code class="code-inline">contains()</code>:</strong> aceita <code class="code-inline">CharSequence</code>, o que permite passar tanto <code class="code-inline">String</code> quanto <code class="code-inline">StringBuilder</code>.</li>
      <li><strong>Internacionalização:</strong> métodos como <code class="code-inline">toUpperCase()</code> consideram a localidade padrão. Para regras específicas (ex.: turco), use <code class="code-inline">toUpperCase(Locale)</code>.</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Validação de campos:</strong> use <code class="code-inline">length()</code> para garantir que o CPF tenha 11 dígitos, que a senha tenha no mínimo 8 caracteres, ou que o nome não esteja vazio.</li>
      <li><strong>Login case‑insensitive:</strong> converta o e‑mail digitado para minúsculas com <code class="code-inline">toLowerCase()</code> e compare com o banco de dados, evitando que "Joao@email.com" e "joao@email.com" sejam tratados como diferentes.</li>
      <li><strong>Filtros de conteúdo:</strong> implemente um moderador de comentários que bloqueia postagens que <code class="code-inline">contains()</code> certas palavras proibidas.</li>
      <li><strong>Extração de dados:</strong> use <code class="code-inline">substring()</code> para isolar o DDD de um número de telefone, o ano de uma data, ou a extensão de um arquivo.</li>
      <li><strong>Máscaras de formatação:</strong> combine <code class="code-inline">charAt()</code> e <code class="code-inline">substring()</code> para exibir um CPF como "123.456.789-00" a partir dos dígitos brutos.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">A classe <code class="code-inline">String</code> transforma o texto em um objeto poderoso e autossuficiente. Com os métodos de transformação (<code class="code-inline">length()</code>, <code class="code-inline">toUpperCase()</code>, <code class="code-inline">toLowerCase()</code>), de extração (<code class="code-inline">charAt()</code>, <code class="code-inline">substring()</code>, <code class="code-inline">contains()</code>) e de comparação segura (<code class="code-inline">equals()</code>, <code class="code-inline">equalsIgnoreCase()</code>), você está apto a resolver a maioria das situações que envolvem manipulação de texto.</p>
    <p class="lesson-text">Lembre‑se da regra de ouro: <strong>para comparar o conteúdo de duas Strings, sempre utilize <code class="code-inline">.equals()</code> ou <code class="code-inline">.equalsIgnoreCase()</code>, jamais <code class="code-inline">==</code></strong>. Com essa prática, você evitará os bugs mais traiçoeiros da linguagem e escreverá programas confiáveis e profissionais.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Demonstração completa dos métodos principais',
      codigo: `public class ManipulacaoString {
    public static void main(String[] args) {
        String original = "  Java para Iniciantes  ";

        // Transformações
        System.out.println("Tamanho: " + original.length());                // 25
        System.out.println("Maiúsculas: " + original.toUpperCase());       // "  JAVA PARA INICIANTES  "
        System.out.println("Minúsculas: " + original.toLowerCase());       // "  java para iniciantes  "
        System.out.println("Sem espaços: " + original.trim());             // "Java para Iniciantes"

        // Busca e extração
        System.out.println("Caractere na posição 5: " + original.charAt(5));  // 'v'? (índices!)
        System.out.println("Substring (7, 11): " + original.substring(7, 11)); // "para"
        System.out.println("Contém 'java': " + original.toLowerCase().contains("java")); // true

        // Comparação
        String a = new String("Java");
        String b = new String("Java");
        System.out.println("== : " + (a == b));                    // false
        System.out.println(".equals() : " + a.equals(b));           // true
        System.out.println("Ignore case: " + a.equalsIgnoreCase("JAVA")); // true
    }
}`,
      explicacao: 'O programa cria uma String e aplica os principais métodos. Note o uso de trim() (que remove espaços no início e fim), a combinação de toLowerCase() com contains() para busca flexível, e a demonstração da diferença entre == e .equals().'
    },
    {
      titulo: 'Validação de campos com métodos de String',
      codigo: `import java.util.Scanner;

public class ValidadorCampos {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Digite seu e-mail: ");
        String email = teclado.nextLine().trim();

        // Verificações
        if (email.length() < 5) {
            System.out.println("E-mail muito curto!");
        } else if (!email.contains("@")) {
            System.out.println("E-mail inválido: falta o símbolo @");
        } else if (!email.contains(".")) {
            System.out.println("E-mail inválido: falta o ponto");
        } else {
            // Padroniza para minúsculas
            String emailPadronizado = email.toLowerCase();
            System.out.println("E-mail aceito: " + emailPadronizado);
        }

        teclado.close();
    }
}`,
      explicacao: 'Exemplo prático de validação de e‑mail usando length(), contains() e toLowerCase(). O programa verifica tamanho mínimo, presença do @ e do ponto, e exibe o e‑mail padronizado. A lógica pode ser expandida para validar CPF, telefone ou qualquer campo textual.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual método retorna o número de caracteres de uma String, incluindo espaços?',
      alternativas: [
        'size()',
        'length()',
        'count()'
      ],
      respostaCorreta: 1,
      explicacao: 'length() é o método que retorna o total de caracteres da String. Espaços, números e pontuação entram na contagem.'
    },
    {
      pergunta: 'Por que não devemos usar o operador == para comparar o conteúdo de duas Strings?',
      alternativas: [
        'Porque == compara os endereços de memória dos objetos, não os caracteres armazenados.',
        'Porque == só funciona com números inteiros.',
        'Porque o Java proíbe o uso de == dentro de if.'
      ],
      respostaCorreta: 0,
      explicacao: '== compara referências (endereços). Duas Strings com o mesmo texto podem estar em locais diferentes da memória, fazendo == retornar false. O correto é usar .equals() ou .equalsIgnoreCase().'
    },
    {
      pergunta: 'O que o método contains() verifica em uma String?',
      alternativas: [
        'Se a String está em maiúsculas.',
        'Se a String contém uma determinada sequência de caracteres.',
        'O número de ocorrências de uma letra.'
      ],
      respostaCorreta: 1,
      explicacao: 'contains() retorna true ou false indicando se a sequência especificada aparece em qualquer posição dentro da String. A busca é case‑sensitive.'
    },
    {
      pergunta: 'Qual método ignora a diferença entre maiúsculas e minúsculas ao comparar Strings?',
      alternativas: [
        'equals()',
        'equalsIgnoreCase()',
        'compareToIgnoreCase()'
      ],
      respostaCorreta: 1,
      explicacao: 'equalsIgnoreCase() compara o conteúdo das Strings ignorando diferenças de capitalização. "Java" e "JAVA" são considerados iguais por esse método.'
    }
  ]
};