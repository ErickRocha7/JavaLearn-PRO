// Arquivo: data/aulas/cap-03/sub-3-7.js
// Aula 3.7 – Estudo de Caso: Validador de Notas

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-3-7'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Estudo de Caso: Validador de Notas</h2>
    <p class="lesson-text text-slate-500 italic">Consolidando while, if e operadores em um sistema real de validação</p>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Chegamos ao momento mais importante de qualquer jornada educacional: o fechamento do capítulo. Até agora, você acumulou uma quantidade fantástica de conhecimento teórico. Aprendeu a criar desvios de caminho com o <code class="code-inline">if</code> e <code class="code-inline">else</code>, conheceu as certezas lógicas dos valores booleanos, descobriu a força dos operadores de incremento e decremento, e desvendou a mecânica circular dos laços <code class="code-inline">while</code> e <code class="code-inline">for</code>.</p>
    <p class="lesson-text">No entanto, no mundo do desenvolvimento de software, a teoria sem a prática é apenas texto estático. Um verdadeiro programador não se forma decorando regras de sintaxe; ele se forma <strong>resolvendo problemas reais</strong> do dia a dia através do código.</p>
    <p class="lesson-text">Nesta aula, vamos atuar como engenheiros de software contratados por uma grande instituição de ensino para resolver um problema real, humano e muito comum: a <strong>Validação e Blindagem de Dados de Entrada</strong>. Vamos construir, linha por linha, um programa completo em Java que use tudo o que aprendemos para impedir que notas escolares erradas quebrem ou poluam o sistema da escola.</p>

    <h3 class="section-title">Fundamentos</h3>
    <p class="lesson-text">Antes de abrir o código, vamos relembrar três conceitos que serão os pilares da nossa solução.</p>

    <h4 class="subsection-title">1. O tipo <code class="code-inline">double</code> e a leitura com <code class="code-inline">Scanner</code></h4>
    <p class="lesson-text">O tipo <code class="code-inline">double</code> armazena números com casas decimais (como 8.5, 7.0, 9.3). A classe <code class="code-inline">Scanner</code>, que aprendemos na Aula 1.5, permite capturar esses valores diretamente do teclado através do método <code class="code-inline">nextDouble()</code>.</p>

    <h4 class="subsection-title">2. Operadores lógicos e o <code class="code-inline">||</code> (OU)</h4>
    <p class="lesson-text">O operador <code class="code-inline">||</code> (OU lógico) retorna <code class="code-inline">true</code> se <strong>pelo menos uma</strong> das condições for verdadeira. Só retorna <code class="code-inline">false</code> se todas forem falsas. Essa característica é perfeita para cenários onde queremos detectar qualquer uma entre várias condições de erro.</p>

    <h4 class="subsection-title">3. O laço <code class="code-inline">while</code> como barreira de validação</h4>
    <p class="lesson-text">Como vimos na Aula 3.4, o <code class="code-inline">while</code> é um laço com pré‑teste: ele só executa o bloco se a condição for <code class="code-inline">true</code>, e continua repetindo enquanto essa condição se mantiver verdadeira. Quando usamos o <code class="code-inline">while</code> para validar dados, a condição verifica se o dado <strong>é inválido</strong>. Enquanto o dado for inválido, o laço mantém o programa preso, exigindo uma nova digitação.</p>

    <h3 class="section-title">Desenvolvimento</h3>

    <h4 class="subsection-title">1. O Problema Prático: O Perigo dos Dados Inválidos</h4>
    <p class="lesson-text">Imagine que uma escola utiliza um sistema digital onde os professores digitam as notas das provas dos alunos para que o boletim seja calculado automaticamente ao fim do bimestre. As notas dessa escola seguem o padrão universal de <strong>0.0</strong> (nota mínima) a <strong>10.0</strong> (nota máxima).</p>
    <p class="lesson-text">Agora, pense no comportamento humano. Professores costumam corrigir centenas de provas em uma única noite. O cansaço é inevitável. Diante do teclado, um professor distraído pode cometer erros graves de digitação:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>O Erro de Escala:</strong> Ao tentar digitar a nota 8.5, ele erra o botão e digita <strong>85.0</strong>.</li>
      <li><strong>O Erro de Inversão:</strong> Ao tentar registrar a nota 7.0, ele se confunde com o sinal e digita <strong>-7.0</strong>.</li>
    </ul>
    <p class="lesson-text">Se o sistema aceitar esses valores de braços abertos, a média do aluno será destruída de forma injusta. Pior: se o sistema for ingênuo, ele calculará que o aluno que tirou 85.0 ficou com uma média bizarra acima do permitido por lei. O aluno que tirou 7.0 terá sua média puxada para baixo pelo número negativo -7.0, gerando estresse desnecessário por um mero deslize de digitação.</p>

    <div class="callout-warning">
      <strong>A Filosofia GIGO (Garbage In, Garbage Out):</strong> "Se entra lixo no sistema, sai lixo no resultado." A qualidade da resposta de qualquer software é diretamente proporcional à qualidade dos dados que foram injetados nele. Se você permitir que o usuário alimente o seu programa com dados corrompidos, o resultado será inevitavelmente um lixo imprevisível e perigoso.
    </div>

    <p class="lesson-text">A nossa missão como desenvolvedores é criar uma <strong>barreira de segurança eletrônica</strong> no teclado. O programa deve ser inteligente o suficiente para analisar a nota digitada e dizer: <em>"Espere um pouco! Esse valor não faz sentido. Eu me recuso a aceitar essa nota. Digite novamente, por favor!"</em>. O sistema só continuará a avançar quando o professor fornecer uma nota legítima e segura.</p>

    <h4 class="subsection-title">2. A Engenharia da Solução: Juntando as Peças do Quebra‑Cabeça</h4>
    <p class="lesson-text">Para construir esse validador, vamos usar a ferramenta de leitura de teclado <code class="code-inline">Scanner</code>, combinada com a inteligência do <code class="code-inline">while</code> e dos operadores lógicos. Aqui está o código‑fonte completo, limpo e profissional da nossa solução:</p>

    <pre><code class="language-java">import java.util.Scanner; // Importamos a ferramenta que lê o teclado

public class ValidadorNotas {
    public static void main(String[] args) {
        
        // Criamos o leitor de teclado
        Scanner teclado = new Scanner(System.in);
        
        System.out.println("=== SISTEMA DE CADASTRO DE NOTAS ===");
        System.out.print("Por favor, digite a nota da prova (entre 0 e 10): ");
        
        // O programa para e aguarda o professor digitar um número decimal (double)
        double nota = teclado.nextDouble();
        
        // 🧩 O Laço de Blindagem (Pré-Teste)
        // Enquanto a nota for inválida, o programa fica preso aqui
        while (nota < 0.0 || nota > 10.0) {
            
            System.out.println("\\n[ERRO FATAL]: A nota " + nota + " é inválida!");
            System.out.println("As notas permitidas devem estar entre 0.0 e 10.0.");
            System.out.print("Por favor, digite uma nota correta: ");
            
            // ATUALIZAÇÃO: Forçamos uma nova leitura para tentar sair do loop
            nota = teclado.nextDouble();
        }
        
        // Se o computador chegou aqui, a nota é 100% segura!
        System.out.println("\\n====================================");
        System.out.println("Sucesso! Nota " + nota + " registrada com segurança no boletim.");
        System.out.println("====================================");
        
        // Fechamos o leitor de teclado para liberar recursos
        teclado.close();
    }
}</code></pre>

    <h4 class="subsection-title">3. O Diário de Bordo do Processador: O Mecanismo nos Bastidores</h4>
    <p class="lesson-text">Para entender o poder dessa arquitetura, vamos simular que um professor cansado abre o nosso programa e tenta digitar uma sequência de valores errados antes de acertar a nota real. Vamos acompanhar como o computador processa essa cena passo a passo.</p>

    <p class="lesson-text"><strong>O Cenário do Teste:</strong></p>
    <ol class="list-decimal ml-6 space-y-1 mb-4">
      <li>O professor digita <strong>-2.5</strong> (Erro: nota menor que zero).</li>
      <li>O professor tenta de novo e digita <strong>14.0</strong> (Erro: nota maior que dez).</li>
      <li>O professor se concentra e digita <strong>8.2</strong> (Sucesso: nota válida).</li>
    </ol>

    <h4 class="sub-subsection-title">🏎️ Rodada 1: O Choque com o Primeiro Erro</h4>
    <ol class="list-decimal ml-6 space-y-1 mb-4">
      <li><strong>A Captura do Dado:</strong> O programa exibe a mensagem inicial e para na linha <code class="code-inline">teclado.nextDouble()</code>. O professor digita <strong>-2.5</strong> e aperta Enter. A variável <code class="code-inline">nota</code> guarda o valor <strong>-2.5</strong> na RAM.</li>
      <li><strong>O Teste do <code class="code-inline">while</code>:</strong> O computador chega no cabeçalho do laço e avalia a condição com o operador <code class="code-inline">||</code> (OU): "A nota é menor que zero <strong>OU</strong> a nota é maior que dez?"</li>
      <li><strong>O Veredicto:</strong> <code class="code-inline">-2.5 < 0.0</code> é <code class="code-inline">true</code>. Como o <code class="code-inline">||</code> só precisa que uma das partes seja verdadeira, o resultado final é <code class="code-inline">true</code>.</li>
      <li><strong>A Invasão do Bloco:</strong> O computador entra nas chaves e cospe o alerta vermelho na tela: <em>"[ERRO FATAL]: A nota -2.5 é inválida!"</em>.</li>
      <li><strong>A Exigência de Mudança:</strong> O computador atinge a linha <code class="code-inline">nota = teclado.nextDouble();</code>. Ele congela o sistema e obriga o professor a digitar um novo valor. O professor, ainda meio zonzo, digita <strong>14.0</strong>. A variável na RAM é atualizada para <strong>14.0</strong>. O fluxo bate na chave <code class="code-inline">}</code> e é estilingado de volta para o topo.</li>
    </ol>

    <h4 class="sub-subsection-title">🏎️ Rodada 2: A Persistência do Erro</h4>
    <ol class="list-decimal ml-6 space-y-1 mb-4">
      <li><strong>O Segundo Teste:</strong> O computador refaz o pré‑teste com o novo valor: "14.0 é menor que zero <strong>OU</strong> é maior que dez?"</li>
      <li><strong>O Novo Veredicto:</strong> <code class="code-inline">14.0 < 0.0</code> dá <code class="code-inline">false</code>. Mas <code class="code-inline">14.0 > 10.0</code> retorna <code class="code-inline">true</code>. O <code class="code-inline">||</code> aceita o resultado: <code class="code-inline">true</code>.</li>
      <li><strong>A Segunda Punição:</strong> O laço continua ativo! O computador entra nas chaves e imprime: <em>"[ERRO FATAL]: A nota 14.0 é inválida!"</em>.</li>
      <li><strong>A Nova Chance:</strong> O processador atinge novamente a linha de leitura. O professor, agora mais atento, digita o valor correto: <strong>8.2</strong>. A variável na RAM é atualizada para <strong>8.2</strong>. O fluxo bate na chave <code class="code-inline">}</code> e voa para o topo.</li>
    </ol>

    <h4 class="sub-subsection-title">🚪 A Saída: A Consolidação do Sistema</h4>
    <ol class="list-decimal ml-6 space-y-1 mb-4">
      <li><strong>O Teste de Saída:</strong> O computador analisa o valor <strong>8.2</strong>: "8.2 é menor que zero? <code class="code-inline">false</code>. 8.2 é maior que dez? <code class="code-inline">false</code>."</li>
      <li><strong>A Quebra do Feitiço:</strong> <code class="code-inline">false || false</code> resulta em <code class="code-inline">false</code>. A condição do <code class="code-inline">while</code> falha. O segurança tranca as portas do laço imediatamente.</li>
      <li><strong>A Vitória Lógica:</strong> O computador escapa do círculo das chaves do <code class="code-inline">while</code>, aterrissa na pista principal e carimba com orgulho a mensagem de sucesso: <em>"Sucesso! Nota 8.2 registrada com segurança no boletim."</em></li>
    </ol>

    <p class="lesson-text">O sistema venceu a batalha contra o cansaço humano. Graças ao motor incansável do <code class="code-inline">while</code>, o processador manteve os dados corrompidos sob quarentena, forçou o usuário a corrigir os próprios equívocos e garantiu que apenas a verdade matemática limpa e legítima fosse carimbada no banco de dados da instituição.</p>

    <h3 class="section-title">Detalhamento Técnico</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Condição de parada invertida:</strong> Em vez de perguntar se a nota <strong>é válida</strong> (<code class="code-inline">nota >= 0.0 && nota <= 10.0</code>), o laço pergunta se a nota <strong>é inválida</strong> (<code class="code-inline">nota < 0.0 || nota > 10.0</code>). Essa inversão é uma técnica comum em validação: o <code class="code-inline">while</code> mantém o programa preso <strong>enquanto houver erro</strong>, e só libera quando o erro deixa de existir.</li>
      <li><strong>Atualização da variável de controle:</strong> Dentro do <code class="code-inline">while</code>, a linha <code class="code-inline">nota = teclado.nextDouble();</code> atua como o pilar da atualização. Sem ela, o valor da variável <code class="code-inline">nota</code> nunca mudaria e o loop seria infinito. Essa é a mesma lógica do <code class="code-inline">contador++</code> que vimos nas aulas anteriores, mas aplicada a um dado externo fornecido pelo usuário.</li>
      <li><strong>Pré‑teste e zero iterações:</strong> Se o usuário digitar uma nota válida logo na primeira tentativa (ex.: 8.2), a condição do <code class="code-inline">while</code> já será <code class="code-inline">false</code> na primeira verificação. O bloco interno nunca será executado — o programa vai direto para a mensagem de sucesso. Esse é o comportamento clássico do pré‑teste.</li>
      <li><strong>Validação com <code class="code-inline">Scanner</code> e tipos:</strong> Se o usuário digitar algo que não seja um número (como "abc"), o <code class="code-inline">nextDouble()</code> lançará uma <code class="code-inline">InputMismatchException</code>. Em sistemas profissionais, esse caso seria tratado com <code class="code-inline">try-catch</code> (que estudaremos em capítulos futuros).</li>
    </ul>

    <h3 class="section-title">Aplicações Práticas</h3>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Validação de CPF em cadastros:</strong> Enquanto o CPF digitado não tiver 11 dígitos válidos, o sistema recusa e pede nova digitação.</li>
      <li><strong>Checagem de saldo em caixas eletrônicos:</strong> Enquanto o valor do saque for maior que o saldo ou menor que o mínimo permitido, o sistema bloqueia a transação.</li>
      <li><strong>Conferência de formulários de cartão de crédito:</strong> Enquanto o número do cartão for inválido ou a data de validade estiver vencida, o sistema não autoriza a compra.</li>
      <li><strong>Controle de estoque:</strong> Enquanto a quantidade solicitada for maior que o estoque disponível ou for um número negativo, o sistema exige correção.</li>
      <li><strong>Qualquer campo numérico com faixa restrita:</strong> Idade (0 a 120), temperatura corporal (30 a 45 graus), nota fiscal (valor positivo).</li>
    </ul>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Ao concluir este estudo de caso, você atingiu o nível mais alto de maturidade do Capítulo 3. Você não criou apenas um algoritmo que cospe números na tela; você arquitetou um <strong>Filtro de Segurança Comercial</strong>. O uso combinado do <code class="code-inline">while</code> com os operadores lógicos cria uma <strong>barreira elástica</strong>: se o usuário digitar dados inválidos dez, cem ou mil vezes seguidas, o programa permanecerá inflexível, protegendo a integridade da memória do sistema. Ele só libera a passagem quando a verdade matemática for estabelecida.</p>
    <p class="lesson-text">Essa técnica de validação é a espinha dorsal de sistemas profissionais do mundo inteiro. A filosofia GIGO — <em>"Se entra lixo, sai lixo"</em> — nos ensina que a responsabilidade de manter os dados limpos é do programador, não do usuário. Com as ferramentas que você domina agora — <code class="code-inline">if</code>, <code class="code-inline">else</code>, operadores lógicos, <code class="code-inline">while</code> e <code class="code-inline">for</code> — você está pronto para construir programas que não apenas funcionam, mas que resistem bravamente aos erros e às distrações do mundo real.</p>
  `,

  imagens: [],

  exemplos: [
    {
      titulo: 'Validador de notas completo com while e operadores lógicos',
      codigo: `import java.util.Scanner;

public class ValidadorNotas {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("=== SISTEMA DE CADASTRO DE NOTAS ===");
        System.out.print("Por favor, digite a nota da prova (entre 0 e 10): ");
        double nota = teclado.nextDouble();

        // Laço de blindagem: enquanto a nota for inválida
        while (nota < 0.0 || nota > 10.0) {
            System.out.println("\\n[ERRO FATAL]: A nota " + nota + " é inválida!");
            System.out.println("As notas permitidas devem estar entre 0.0 e 10.0.");
            System.out.print("Por favor, digite uma nota correta: ");
            nota = teclado.nextDouble(); // Atualização obrigatória
        }

        System.out.println("\\n====================================");
        System.out.println("Sucesso! Nota " + nota + " registrada com segurança no boletim.");
        System.out.println("====================================");

        teclado.close();
    }
}`,
      explicacao: 'O programa demonstra a técnica de validação de dados com while. A condição (nota < 0.0 || nota > 10.0) mantém o usuário preso enquanto o valor for inválido. A linha nota = teclado.nextDouble() é a atualização obrigatória — sem ela, o loop seria infinito. Se a primeira nota já for válida, o while roda zero vezes (pré-teste).'
    },
    {
      titulo: 'Validador com limite de tentativas (combinação de while e if)',
      codigo: `import java.util.Scanner;

public class ValidadorComTentativas {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        final int MAX_TENTATIVAS = 3;
        int tentativas = 0;

        System.out.println("=== SISTEMA DE CADASTRO DE NOTAS ===");
        System.out.print("Digite a nota (entre 0 e 10): ");
        double nota = teclado.nextDouble();
        tentativas++;

        // Combinação de while e if: validar E limitar tentativas
        while ((nota < 0.0 || nota > 10.0) && tentativas < MAX_TENTATIVAS) {
            System.out.println("\\n[ERRO] Nota " + nota + " inválida.");
            System.out.println("Tentativas restantes: " + (MAX_TENTATIVAS - tentativas));
            System.out.print("Digite novamente: ");
            nota = teclado.nextDouble();
            tentativas++;
        }

        // Verifica se saiu do laço por sucesso ou por estouro de tentativas
        if (nota >= 0.0 && nota <= 10.0) {
            System.out.println("\\n✅ Nota " + nota + " registrada com sucesso!");
        } else {
            System.out.println("\\n❌ Número máximo de tentativas atingido. Operação cancelada.");
        }

        teclado.close();
    }
}`,
      explicacao: 'Esta versão avançada combina while, operadores lógicos e if para criar um validador com limite de 3 tentativas. O while usa && (E lógico) para exigir duas condições simultâneas: nota inválida E tentativas abaixo do máximo. Após o laço, um if verifica se a saída foi por sucesso ou por estouro do limite.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual é a condição correta para um laço while que valida se uma nota está entre 0 e 10?',
      alternativas: [
        'while (nota >= 0.0 && nota <= 10.0)',
        'while (nota < 0.0 || nota > 10.0)',
        'while (nota > 0.0 && nota < 10.0)'
      ],
      respostaCorreta: 1,
      explicacao: 'O laço de validação deve manter o programa preso enquanto a nota for INVÁLIDA. Portanto, a condição correta é (nota < 0.0 || nota > 10.0) — "enquanto a nota for menor que zero OU maior que dez". Se a nota for válida, a condição retorna false e o laço é encerrado.'
    },
    {
      pergunta: 'O que acontece se o usuário digitar uma nota válida (ex.: 8.2) logo na primeira tentativa?',
      alternativas: [
        'O programa exibe a mensagem de erro e depois a de sucesso.',
        'O while roda zero vezes — a condição já é false, e o programa vai direto para a mensagem de sucesso.',
        'O programa entra em loop infinito.'
      ],
      respostaCorreta: 1,
      explicacao: 'Como o while é um laço com pré-teste, a condição é verificada antes da primeira execução. Com nota = 8.2, (8.2 < 0.0 || 8.2 > 10.0) resulta em false. O bloco interno nunca é executado, e o programa segue para a mensagem de sucesso.'
    },
    {
      pergunta: 'Por que a linha "nota = teclado.nextDouble();" dentro do while é essencial?',
      alternativas: [
        'Ela serve apenas para exibir uma mensagem na tela.',
        'Ela é a atualização da variável de controle — sem ela, o valor de "nota" nunca mudaria e o loop seria infinito.',
        'Ela fecha o programa automaticamente.'
      ],
      respostaCorreta: 1,
      explicacao: 'Dentro do while, essa linha atua como o pilar da atualização. Ela obriga o usuário a digitar um novo valor, alterando a variável "nota" na memória RAM. Sem essa atualização, a condição do laço permaneceria true para sempre, causando um loop infinito.'
    },
    {
      pergunta: 'O que significa a filosofia GIGO (Garbage In, Garbage Out)?',
      alternativas: [
        'Que o computador é capaz de corrigir automaticamente dados errados.',
        'Que se dados inválidos entrarem no sistema, os resultados gerados também serão inválidos.',
        'Que devemos sempre usar o Scanner com nextLine().'
      ],
      respostaCorreta: 1,
      explicacao: 'GIGO é um princípio fundamental da computação: a qualidade da saída depende da qualidade da entrada. Se o programa aceitar dados corrompidos (lixo), os cálculos e resultados serão igualmente corrompidos. Por isso, a validação de dados é uma responsabilidade crucial do programador.'
    }
  ]
};