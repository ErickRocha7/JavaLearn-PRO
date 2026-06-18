// Arquivo: data/aulas/cap-05/sub-5-7.js
// Aula 5.7 – Boas Práticas: Coesão e Tamanho de Métodos

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-5-7'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Boas Práticas: Coesão e Tamanho de Métodos</h2>
    <p class="lesson-text text-slate-500 italic">Como escrever código limpo, legível e sustentável — para humanos, não apenas para máquinas</p>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Até aqui, concentramo‑nos em fazer o computador entender nossos comandos. Mas software de verdade é lido, modificado e mantido por <strong>pessoas</strong> — às vezes por décadas. Um método que funciona perfeitamente hoje pode se tornar um pesadelo amanhã, se estiver mal estruturado. Nesta aula, vamos estudar três pilares da qualidade de código: o <strong>Princípio de Responsabilidade Única</strong> (alta coesão), as <strong>métricas ideais de tamanho</strong> e a arte da <strong>refatoração</strong> — incluindo a identificação de "maus cheiros" (code smells) e a extração de blocos para novos métodos.</p>

    <h3 class="section-title">1. O Princípio de Responsabilidade Única (Alta Coesão)</h3>
    <p class="lesson-text">No jargão da engenharia de software, <strong>coesão</strong> mede o grau de foco de um bloco de código. Um método é <strong>altamente coeso</strong> quando todas as suas linhas trabalham obsessivamente para um único objetivo. A regra que consagra essa ideia é o <strong>Princípio de Responsabilidade Única</strong> (Single Responsibility Principle — SRP): <em>um método deve fazer apenas uma coisa, e fazê‑la muito bem</em>.</p>

    <div class="callout-analogy">
      <strong>Analogia do restaurante:</strong> imagine que você contrata um único funcionário para receber ingredientes, lavar pratos, cortar legumes, grelhar carnes, montar pratos e operar o caixa. Esse "funcionário‑pato" (faz tudo, mas nada com excelência) logo entrará em colapso: queimará a carne enquanto limpa o chão, errará o troco com as mãos engorduradas e os pedidos atrasarão. Na programação, o <strong>método monolítico</strong> (ou "método Deus") age exatamente assim — e o resultado é o caos.
    </div>

    <p class="lesson-text">A solução é contratar <strong>especialistas</strong>: um auxiliar só corta alimentos, um chef só grelha, um garçom só transporta. No código Java, isso significa que um método como <code class="code-inline">finalizarVenda()</code> não deve calcular frete, validar cartão, atualizar estoque e enviar e‑mail no mesmo bloco. Cada uma dessas tarefas merece seu próprio método coeso, e o método principal atua como o <strong>maestro</strong> que rege a ordem das chamadas.</p>

    <p class="lesson-text">Os benefícios dessa arquitetura são imediatos:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Diagnóstico rápido de bugs:</strong> se os e‑mails param de chegar, a equipe vai direto ao método <code class="code-inline">enviarEmail()</code>, sem perder tempo vasculhando lógica de frete.</li>
      <li><strong>Testabilidade isolada:</strong> é possível testar o cálculo do frete sem precisar simular uma compra completa com cartão de crédito.</li>
      <li><strong>Substituição segura:</strong> trocar a operadora de cartão afeta apenas o método <code class="code-inline">processarCartao()</code>; o restante do sistema permanece intacto.</li>
    </ul>

    <h3 class="section-title">2. Métricas Ideais: O Tamanho das Linhas de Código</h3>
    <p class="lesson-text">Não existe uma lei matemática universal que proíba métodos longos — o compilador Java não rejeitará um método de 200 linhas. Mas a <strong>neurociência</strong> explica por que devemos mantê‑los curtos: nossa <strong>memória de trabalho de curto prazo</strong> só consegue reter de 4 a 7 elementos simultaneamente. Quando um método tem 150 linhas, o programador precisa rolar a tela para cima e para baixo, perdendo de vista as variáveis declaradas no topo e quebrando o estado de concentração profunda (o <em>flow</em>).</p>

    <p class="lesson-text">A comunidade internacional de engenharia de software, liderada por autores como Robert C. Martin (Uncle Bob, no clássico <em>Código Limpo</em>), recomenda:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Ideal:</strong> entre <strong>5 e 20 linhas</strong> por método.</li>
      <li><strong>Teto máximo:</strong> o limite vertical da tela do monitor — cerca de <strong>30 a 40 linhas</strong>, sem que o programador precise usar a barra de rolagem.</li>
    </ul>

    <div class="callout-success">
      <strong>Efeito fotografia:</strong> um método que cabe inteiro na tela pode ser escaneado visualmente em segundos, como se o cérebro lesse uma imagem. As variáveis do topo continuam visíveis na última linha, eliminando a necessidade de memorização forçada e reduzindo drasticamente a carga cognitiva.
    </div>

    <p class="lesson-text">Métodos curtos funcionam como parágrafos bem estruturados de um livro: dão ritmo à leitura, oferecem pausas naturais para a mente respirar e transformam a manutenção de sistemas gigantescos em uma atividade leve e produtiva.</p>

    <h3 class="section-title">3. Refatoração e Identificação de Code Smells</h3>
    <p class="lesson-text">No dia a dia, prazos apertados frequentemente nos levam a escrever código "de qualquer jeito" — é o chamado <strong>débito técnico</strong>. A <strong>refatoração</strong> é o processo de limpar e reorganizar esse código <strong>sem alterar seu comportamento externo</strong>. Para o usuário, nada muda; para o desenvolvedor, a estrutura interna se torna muito mais saudável.</p>

    <p class="lesson-text">Para saber <em>o que</em> refatorar, usamos o conceito de <strong>Code Smells</strong> ("cheiros do código") — padrões visuais que indicam problemas de design. O termo, cunhado por Kent Beck e Martin Fowler, parte de uma metáfora simples:</p>

    <div class="callout-analogy">
      <strong>Analogia da geladeira:</strong> ao abrir a porta, você sente um odor azedo. A geladeira continua funcionando, mas aquele cheiro avisa que há comida estragada lá dentro. Ignorar o cheiro contamina os outros alimentos. No código, um <em>code smell</em> não trava o programa, mas avisa que a estrutura apodrecerá com o tempo se não for limpa.
    </div>

    <p class="lesson-text">O code smell mais comum e perigoso é o <strong>Método Longo</strong> (Long Method). Quando um método cresce demais e acumula múltiplas responsabilidades, ele exala esse "mau cheiro". A cirurgia de refatoração para curá‑lo é a <strong>Extração de Método</strong> (Extract Method).</p>

    <h4 class="subsection-title">3.1 Extração de Método na Prática</h4>
    <p class="lesson-text">Imagine um método de 50 linhas chamado <code class="code-inline">imprimirRelatorioDeVendas()</code>. Ao analisá‑lo, você percebe três blocos distintos:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Linhas 1‑15:</strong> cálculos matemáticos de médias e totais.</li>
      <li><strong>Linhas 16‑35:</strong> formatação de uma tabela em HTML.</li>
      <li><strong>Linhas 36‑50:</strong> envio do documento para a impressora física.</li>
    </ul>

    <p class="lesson-text">A extração consiste em isolar cada bloco em seu próprio método:</p>
    <pre><code class="language-java">void imprimirRelatorioDeVendas() {
    calcularMediasFinanceiras();   // antes: 15 linhas de matemática
    gerarTabelaHtml();            // antes: 20 linhas de design
    enviarParaImpressora();       // antes: 15 linhas de hardware
}</code></pre>

    <p class="lesson-text">O método original foi reduzido a três linhas — agora ele é um <strong>maestro</strong>, não um operário. Qualquer pessoa entende o fluxo em segundos. Se amanhã a empresa decidir trocar HTML por PDF, apenas o método <code class="code-inline">gerarTabelaHtml()</code> será alterado, sem risco de danificar a lógica financeira ou de impressão.</p>

    <h3 class="section-title">4. Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>SRP e manutenibilidade:</strong> um método com um único motivo para mudar é mais fácil de versionar, testar e depurar. Em sistemas grandes, a violação do SRP é a principal causa de "código frágil" — onde uma alteração simples quebra funcionalidades não relacionadas.</li>
      <li><strong>Métricas quantitativas:</strong> ferramentas como SonarQube e Checkstyle podem ser configuradas para alertar automaticamente quando métodos ultrapassam um limite de linhas, ajudando a manter a qualidade do código em equipes grandes.</li>
      <li><strong>Outros code smells comuns:</strong> além do Método Longo, existem <em>Long Parameter List</em> (muitos parâmetros), <em>Duplicated Code</em> (código duplicado) e <em>Feature Envy</em> (método que usa mais dados de outra classe do que da sua própria). Todos são resolvidos com técnicas de refatoração específicas.</li>
      <li><strong>Refatoração e testes:</strong> antes de extrair métodos, é recomendável ter testes automatizados que garantam que o comportamento externo permaneceu inalterado após a cirurgia.</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Escrever código que funciona é o primeiro passo; escrever código que <strong>permanece compreensível</strong> ao longo do tempo é o que diferencia profissionais. O Princípio de Responsabilidade Única nos ensina a manter cada método focado em uma única tarefa. As métricas de tamanho protegem nossa capacidade cognitiva, permitindo que blocos sejam lidos como fotografias. E a refatoração — guiada pelos code smells — é a ferramenta que nos permite corrigir débitos técnicos de forma segura, mantendo o sistema saudável e preparado para evoluir.</p>
    <p class="lesson-text">Na próxima aula, aplicaremos todos esses conceitos na construção de uma biblioteca de funções matemáticas, consolidando na prática o que aprendemos sobre coesão, tamanho e organização de métodos.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Método monolítico (baixa coesão) vs. métodos especialistas (alta coesão)',
      codigo: `// ===== VERSÃO MONOLÍTICA (EVITE) =====
public class Venda {
    public void finalizar() {
        // calcula frete (15 linhas)
        double distancia = 120;
        double frete = distancia * 0.5;
        // ... mais linhas de frete ...

        // processa cartão (20 linhas)
        String numeroCartao = "1234";
        boolean aprovado = true;
        // ... mais linhas de cartão ...

        // envia e-mail (10 linhas)
        String email = "cliente@email.com";
        System.out.println("Enviando e-mail para " + email);
        // ... mais linhas de e-mail ...
    }
}

// ===== VERSÃO MODULARIZADA (PREFIRA) =====
public class Venda {
    private double calcularFrete(double distancia) {
        return distancia * 0.5;
    }

    private boolean processarCartao(String numero) {
        return numero.length() == 16;
    }

    private void enviarEmail(String destinatario) {
        System.out.println("E-mail enviado para " + destinatario);
    }

    public void finalizar() {
        double frete = calcularFrete(120);
        boolean aprovado = processarCartao("1234");
        if (aprovado) enviarEmail("cliente@email.com");
    }
}`,
      explicacao: 'A versão monolítica concentra toda a lógica em um único método, difícil de ler e modificar. A versão modularizada extrai cada responsabilidade para métodos especialistas, enquanto o método finalizar() atua como maestro — curto, legível e seguro para manutenção.'
    },
    {
      titulo: 'Extração de método: antes e depois',
      codigo: `public class Relatorio {
    // ===== ANTES: método longo com múltiplas responsabilidades =====
    public void imprimir() {
        // cálculo de médias (15 linhas)
        double total = 0;
        for (double v : new double[]{10, 20, 30}) total += v;
        double media = total / 3;

        // formatação HTML (20 linhas)
        String html = "<table><tr><td>" + media + "</td></tr></table>";

        // impressão (15 linhas)
        System.out.println("Enviando para impressora: " + html);
    }

    // ===== DEPOIS: refatorado com extração de métodos =====
    private double calcularMedia(double[] valores) {
        double total = 0;
        for (double v : valores) total += v;
        return total / valores.length;
    }

    private String formatarTabelaHtml(double media) {
        return "<table><tr><td>" + media + "</td></tr></table>";
    }

    private void enviarParaImpressora(String conteudo) {
        System.out.println("Enviando para impressora: " + conteudo);
    }

    public void imprimir() {
        double media = calcularMedia(new double[]{10, 20, 30});
        String html = formatarTabelaHtml(media);
        enviarParaImpressora(html);
    }
}`,
      explicacao: 'O método imprimir() original (acima) misturava matemática, design e hardware em um bloco longo. A extração isola cada responsabilidade: calcularMedia(), formatarTabelaHtml() e enviarParaImpressora(). O método principal agora é um maestro de 3 linhas, fácil de ler e de modificar cirurgicamente.'
    }
  ],

  exercicios: [
    {
      pergunta: 'O que significa o Princípio de Responsabilidade Única aplicado a métodos?',
      alternativas: [
        'Um método deve ter no máximo uma linha de código.',
        'Um método deve fazer apenas uma coisa, e fazê‑la muito bem.',
        'Um método deve ser chamado apenas uma vez durante o programa.'
      ],
      respostaCorreta: 1,
      explicacao: 'O SRP afirma que cada método deve ter uma única responsabilidade — um único motivo para mudar. Isso aumenta a coesão e facilita a manutenção.'
    },
    {
      pergunta: 'Qual a métrica de tamanho recomendada para um método ideal, segundo a comunidade de Código Limpo?',
      alternativas: [
        'Entre 5 e 20 linhas, cabendo na tela sem rolagem.',
        'Até 500 linhas, desde que bem comentado.',
        'Qualquer tamanho é aceitável, contanto que compile.'
      ],
      respostaCorreta: 0,
      explicacao: 'Métodos entre 5 e 20 linhas permitem que o cérebro humano processe o bloco inteiro de uma só vez (efeito fotografia). O teto máximo é o limite da tela, cerca de 30 a 40 linhas, para evitar o uso da barra de rolagem.'
    },
    {
      pergunta: 'O que são Code Smells?',
      alternativas: [
        'Erros de compilação que impedem o programa de rodar.',
        'Padrões visuais no código que indicam problemas de design e sugerem a necessidade de refatoração.',
        'Comentários mal escritos que dificultam a leitura.'
      ],
      respostaCorreta: 1,
      explicacao: 'Code smells ("cheiros do código") são sintomas de má estruturação — como um odor azedo na geladeira. O programa funciona, mas a estrutura está propensa a problemas futuros. O mais comum é o Método Longo.'
    },
    {
      pergunta: 'Em que consiste a técnica de Extração de Método?',
      alternativas: [
        'Duplicar um método existente com outro nome.',
        'Isolar um trecho de código com uma responsabilidade distinta em um novo método separado.',
        'Apagar todas as linhas de um método e reescrevê‑las do zero.'
      ],
      respostaCorreta: 1,
      explicacao: 'Extrair um método significa recortar um bloco de código que realiza uma tarefa específica e movê‑lo para um novo método com nome significativo. O método original passa a chamar esse novo método, tornando‑se mais curto e coeso.'
    }
  ]
};