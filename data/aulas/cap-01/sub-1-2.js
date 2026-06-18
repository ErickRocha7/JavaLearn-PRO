// Arquivo: data/aulas/cap-01/sub-1-2.js
// Aula 1.2 – Configuração do Ambiente (JDK, IDE, PATH)

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-2'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Configurando o Ambiente de Desenvolvimento Java: Do Download ao Primeiro Programa</h2>
    <p class="text-slate-600 mb-4"><em>Guia Completo para Iniciantes no Windows</em></p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Introdução</h3>
    <p class="mb-4">Dar os primeiros passos na programação Java pode parecer um labirinto de siglas, instalações e telas pretas. Mas a verdade é que, por trás de cada comando, existe uma lógica muito simples de entender. Este material foi desenhado para conduzir você, do absoluto zero, por todas as etapas necessárias para transformar um computador comum em uma estação de trabalho profissional para desenvolvimento Java.</p>
    <p class="mb-4">Vamos começar escolhendo a versão correta da linguagem, instalar o kit de desenvolvimento, ensinar o sistema operacional a encontrá-lo, realizar um teste manual para ver o motor funcionar e, por fim, turbinar tudo com o editor de código mais popular do mercado. Ao final, você não apenas terá o ambiente pronto, mas saberá exatamente o que cada configuração significa.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Fundamentos: As Peças do Quebra-Cabeça</h3>
    <p class="mb-4">Antes de clicar em qualquer botão, precisamos alinhar três conceitos que sustentam toda a prática.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">1. O JDK (Java Development Kit)</h4>
    <p class="mb-4">É o pacote completo de ferramentas para criar programas em Java. Dentro dele estão o compilador (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">javac</code>), que traduz seu código para uma linguagem que o computador entende, e o ambiente de execução (JRE), necessário para testar o que você criou. Em resumo: se você quer programar, instala o JDK; se quer apenas usar um programa pronto, bastaria o JRE — mas como vamos desenvolver, o JDK é obrigatório.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">2. LTS: As versões de longo prazo</h4>
    <p class="mb-4">O Java está em constante evolução. A cada seis meses surge uma nova versão, mas a maioria recebe atualizações de segurança por pouco tempo. As versões <strong>LTS</strong> (Long Term Support) são os modelos consolidados, com garantia de correções por vários anos. Pense nelas como carros clássicos para os quais a fábrica continua fabricando peças por muito tempo. Para estudos e sistemas empresariais, sempre escolhemos uma versão LTS.</p>
    <p class="mb-4">No momento em que este material foi escrito (2026), as LTS mais relevantes são o <strong>Java 21</strong> e o <strong>Java 25</strong>. O Java 25 é a LTS mais recente, recomendada para novos projetos. O Java 21 ainda é amplamente utilizado e totalmente válido. Se o seu curso ou empresa padronizar o 21, não há problema; caso contrário, siga com o 25. Jamais instale uma versão que não exiba "LTS" ao lado, pois ela perderá suporte em meses.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">3. PATH e JAVA_HOME: O mapa do Windows</h4>
    <p class="mb-4">Quando você digita um comando no terminal, o Windows precisa saber onde está o programa que executa esse comando. As variáveis de ambiente <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">JAVA_HOME</code> e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">PATH</code> funcionam como um mapa. <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">JAVA_HOME</code> aponta para a pasta raiz do JDK. O <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">PATH</code> lista as pastas onde o sistema deve procurar executáveis. Ao adicionar a subpasta <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">bin</code> do JDK ao PATH, você permite que comandos como <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">javac</code> e <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">java</code> sejam disparados de qualquer lugar do sistema, sem precisar navegar até a instalação.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Desenvolvimento: Montando o Ambiente Passo a Passo</h3>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">1. Download do JDK</h4>
    <p class="mb-4">Você pode obter o JDK de duas fontes confiáveis: o projeto <strong>Eclipse Adoptium</strong> (distribuição Temurin) e o site da <strong>Oracle</strong>. Ambos são usados no mercado. O Adoptium é totalmente livre de burocracias, open source e mantido por grandes empresas; por isso o adotaremos como padrão.</p>

    <p class="mb-2"><strong>Baixando pelo Adoptium (recomendado)</strong></p>
    <ul class="list-disc ml-6 mb-4 space-y-1">
      <li>Acesse <a href="https://adoptium.net" class="text-blue-600 underline" target="_blank">adoptium.net</a>. O site geralmente detecta seu sistema operacional automaticamente.</li>
      <li>Se o botão principal não mostrar a versão desejada, clique em <strong>"Other platforms and versions"</strong>.</li>
      <li>Preencha os filtros: <strong>Operating System:</strong> Windows, <strong>Architecture:</strong> x64, <strong>Package Type:</strong> JDK, <strong>Version:</strong> 25 – LTS (ou 21, conforme sua necessidade).</li>
      <li>Clique no botão de download do arquivo <strong>.msi</strong> (Windows Installer). Esse é o instalador tradicional, com assistente visual.</li>
    </ul>

    <p class="mb-2"><strong>Baixando pela Oracle (alternativa)</strong></p>
    <ul class="list-disc ml-6 mb-4 space-y-1">
      <li>Acesse <a href="https://www.oracle.com/java/" class="text-blue-600 underline" target="_blank">oracle.com/java</a>. No centro da página, você verá abas com as versões disponíveis (JDK 26, JDK 25, JDK 21).</li>
      <li>Clique na aba correspondente à versão LTS desejada (ex.: <strong>JDK 25</strong>).</li>
      <li>Logo abaixo, selecione a guia <strong>Windows</strong>.</li>
      <li>Na tabela de downloads, procure a linha <strong>"x64 Installer"</strong> (arquivo .exe). Evite o "Compressed Archive", que exige extração manual.</li>
    </ul>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">2. Instalação do JDK no Windows</h4>
    <p class="mb-4">Após o download, siga estes passos com atenção — uma escolha simples aqui adiantará boa parte do trabalho futuro.</p>
    <ol class="list-decimal ml-6 mb-4 space-y-2">
      <li>Execute o instalador baixado (.msi ou .exe). Permita que o aplicativo faça alterações no dispositivo.</li>
      <li>Na tela de boas-vindas, clique em <strong>Next</strong>.</li>
      <li><strong>Pasta de destino:</strong> O instalador sugere algo como <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">C:\\Program Files\\Eclipse Adoptium\\jdk-25...</code>. Não altere esse caminho. Deixá-lo no local padrão garante que outras ferramentas encontrem o Java automaticamente.</li>
      <li>Na tela de configuração personalizada (Custom Setup), localize a opção <strong>"Set JAVA_HOME variable"</strong>. Clique no ícone de "X" vermelho ao lado e altere para <strong>"Will be installed on local hard drive"</strong>. Isso criará automaticamente a variável JAVA_HOME do Windows.</li>
      <li>Opcionalmente, faça o mesmo para a opção <strong>"Associate .jar"</strong>, permitindo que arquivos .jar sejam executados com duplo clique.</li>
      <li>Avance e clique em <strong>Install</strong>. Aguarde a conclusão e finalize.</li>
    </ol>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">3. Configuração Manual das Variáveis de Ambiente (reforço)</h4>
    <p class="mb-4">Mesmo que o instalador tenha criado o JAVA_HOME, é prudente verificar e complementar o PATH. Se você pulou a opção anterior, precisará fazer tudo manualmente.</p>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>Abrindo as configurações:</strong> Pressione <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Windows + S</code>, digite "variáveis de ambiente" e clique em "Editar as variáveis de ambiente do sistema". Na janela "Propriedades do Sistema", clique no botão "Variáveis de Ambiente…".</li>
      <li>
        <strong>Criando JAVA_HOME (se não existir):</strong>
        <ul class="list-disc ml-6 mt-1 space-y-1">
          <li>Na seção <strong>Variáveis do sistema</strong>, clique em <strong>Novo…</strong>.</li>
          <li>Nome da variável: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">JAVA_HOME</code></li>
          <li>Valor da variável: caminho da pasta raiz do JDK (ex.: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">C:\\Program Files\\Java\\jdk-25</code>). Use o botão "Procurar diretório…" para selecionar sem erros de digitação.</li>
        </ul>
      </li>
      <li>
        <strong>Adicionando a pasta bin ao PATH:</strong>
        <ul class="list-disc ml-6 mt-1 space-y-1">
          <li>Ainda em <strong>Variáveis do sistema</strong>, localize a variável <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">Path</code> e clique em <strong>Editar…</strong>.</li>
          <li>Clique em <strong>Novo</strong> e digite exatamente: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%JAVA_HOME%\\bin</code></li>
          <li>Isso diz ao Windows: "vá até a pasta apontada por JAVA_HOME e acesse a subpasta bin".</li>
        </ul>
      </li>
      <li>Importante: não apague nenhuma linha existente nessa lista.</li>
      <li>Feche todas as janelas clicando em <strong>OK</strong> (não feche no "X", ou as alterações serão descartadas).</li>
    </ul>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">4. Teste Manual: O Poder Bruto do JDK</h4>
    <p class="mb-4">Antes de instalarmos o editor de código, vamos sentir o motor funcionando sem nenhum intermediário. Isso desmistifica a programação e prova que tudo está correto.</p>

    <p class="mb-2"><strong>4.1 Criando o código-fonte no Bloco de Notas</strong></p>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li>Abra o Bloco de Notas e digite exatamente:</li>
    </ul>
    <pre class="bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono leading-relaxed mb-4 overflow-x-auto">
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Ola Mundo!");
    }
}</pre>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li>Vá em <strong>Arquivo &gt; Salvar como…</strong>. Navegue até a pasta Documentos.</li>
      <li><strong>Atenção máxima:</strong> no campo Tipo, mude de "Documentos de texto (.txt)" para <strong>"Todos os arquivos (.*)"</strong>. Se não fizer isso, o Windows salvará como <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld.java.txt</code> e o Java não reconhecerá.</li>
      <li>No campo Nome, escreva <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld.java</code> (com H e W maiúsculos, sem espaços). Salve e feche o Bloco de Notas.</li>
    </ul>

    <p class="mb-2"><strong>4.2 Compilando e executando no terminal</strong></p>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li>Abra o Prompt de Comando (Windows, digite <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">cmd</code>, Enter).</li>
      <li>Navegue até a pasta Documentos com: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">cd Documents</code></li>
      <li>Compile o código: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">javac HelloWorld.java</code></li>
    </ul>
    <p class="mb-4">Se tudo der certo, o terminal simplesmente pulará para a próxima linha, em silêncio. No mundo da programação, o silêncio é sucesso. Um arquivo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld.class</code> terá nascido na pasta.</p>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li>Execute o programa: <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">java HelloWorld</code> (sem extensão!)</li>
    </ul>
    <p class="mb-4">A mágica acontece: o terminal exibirá <strong>Ola Mundo!</strong>.</p>
    <p class="mb-4">Por que funcionou? O comando <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">javac</code> (compilador) leu seu texto .java e gerou o bytecode (.class), um formato que a Máquina Virtual Java entende. O comando <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">java</code> disparou essa máquina virtual, que executou o bytecode. O Windows só encontrou esses comandos porque configuramos o PATH — senão, teria respondido "comando não reconhecido".</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">5. Instalando o Visual Studio Code (VS Code)</h4>
    <p class="mb-4">Agora que você viu o núcleo duro, vamos instalar o editor que tornará a escrita de código muito mais produtiva.</p>
    <ol class="list-decimal ml-6 mb-4 space-y-2">
      <li>Acesse <a href="https://code.visualstudio.com" class="text-blue-600 underline" target="_blank">code.visualstudio.com</a>. A página reconhece o Windows e exibe um grande botão "Download for Windows". Clique nele.</li>
      <li>Execute o instalador baixado.</li>
      <li>Aceite o contrato e avance com as pastas sugeridas (não mude nada).</li>
      <li><strong>Tela crucial — Tarefas adicionais:</strong> Marque todas as opções disponíveis, especialmente: Criar um ícone na área de trabalho, Adicionar ação "Abrir com Code" ao menu de contexto, Adicionar ao PATH (já vem marcada; mantenha).</li>
      <li>Finalize a instalação e inicie o VS Code.</li>
    </ol>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">6. Ensinando o VS Code a Falar Java (Extensões)</h4>
    <p class="mb-4">O VS Code é um editor genérico; para compreender Java, precisamos instalar um pacote de extensões.</p>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li>Na barra lateral esquerda, clique no ícone de <strong>Extensões</strong> (quatro quadradinhos).</li>
      <li>Na caixa de pesquisa, digite <strong>java</strong>.</li>
      <li>O primeiro resultado deve ser <strong>"Extension Pack for Java"</strong>, criado pela Microsoft e exibindo o ícone de uma xícara de café. Confira esses três selos (nome, fabricante, ícone) antes de prosseguir.</li>
      <li>Clique em <strong>Install</strong>. Após a instalação, o botão muda para uma engrenagem.</li>
      <li>Reinicie o VS Code (feche e abra novamente).</li>
    </ul>
    <p class="mb-4">Ao reabrir, observe o canto inferior direito da barra de status. Após alguns segundos de carregamento, aparecerá a mensagem <strong>"Java tooling is ready"</strong>. Isso significa que o VS Code encontrou seu JDK automaticamente graças à variável JAVA_HOME e está pronto para o trabalho.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Detalhamento Técnico: Entendendo os Bastidores</h3>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">Como o PATH conecta tudo</h4>
    <p class="mb-4">Quando você digita <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">java</code> no terminal, o Windows percorre a lista de pastas do PATH até encontrar um executável com esse nome. A linha <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%JAVA_HOME%\\bin</code> dentro do PATH é um atalho dinâmico: se você atualizar o JDK e alterar apenas o valor de JAVA_HOME, todos os programas que dependem do PATH passam a usar a nova versão sem ajustes adicionais.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">javac (compilador) vs. java (máquina virtual)</h4>
    <ul class="list-disc ml-6 mb-4 space-y-1">
      <li><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">javac</code> transforma código-fonte (.java) em bytecode (.class). Ele é o tradutor que gera a "partitura universal".</li>
      <li><code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">java</code> carrega essa partitura e a executa sobre a JVM, que interpreta o bytecode e converte as instruções para o código de máquina específico do processador.</li>
    </ul>
    <p class="mb-4">Por isso compilamos com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">javac Nome.java</code> e executamos com <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">java Nome</code> (o comando java já sabe procurar por um .class).</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">O papel do JAVA_HOME</h4>
    <p class="mb-4">Ferramentas como o VS Code, Maven e Gradle procuram pelo JDK através da variável JAVA_HOME. Sem ela, você teria que configurar manualmente o caminho em cada ferramenta. O pacote de extensões do VS Code faz exatamente isso: lê JAVA_HOME, identifica o JDK e ativa recursos como autocompletar e depuração.</p>

    <h4 class="text-lg font-semibold text-slate-700 mt-4 mb-2">Bytecode: a peça chave da portabilidade</h4>
    <p class="mb-4">O arquivo .class não contém código de máquina nativo, mas instruções padronizadas para uma máquina virtual. É por isso que o mesmo <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld.class</code> pode ser executado em Windows, Mac ou Linux, desde que haja uma JVM instalada. O nosso teste manual com o javac gerou exatamente esse bytecode.</p>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Aplicações Práticas: O Dia a Dia do Desenvolvedor</h3>
    <p class="mb-4">Com o ambiente configurado, seu fluxo de trabalho será:</p>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>Criar um projeto:</strong> No VS Code, abra uma pasta vazia (File &gt; Open Folder) e crie um novo arquivo com extensão .java.</li>
      <li><strong>Escrever código:</strong> O editor oferecerá autocompletar inteligente, sugestões de correção e realce de sintaxe.</li>
      <li><strong>Executar:</strong> Pressione F5 ou clique no ícone de "Run" acima do método main. O VS Code dispara a compilação e a execução automaticamente, exibindo a saída no terminal integrado — tudo em um único clique, sem precisar digitar javac e java manualmente. Mas agora você sabe exatamente o que está acontecendo nos bastidores.</li>
    </ul>

    <p class="mb-2"><strong>Solução de problemas comuns:</strong></p>
    <ul class="list-disc ml-6 mb-4 space-y-2">
      <li><strong>"java não é reconhecido como comando interno"</strong> → Revise se a linha <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">%JAVA_HOME%\\bin</code> foi adicionada ao PATH do sistema e se as janelas foram fechadas com OK. Reabra o terminal.</li>
      <li><strong>"Java tooling is not ready"</strong> no VS Code → Verifique se a variável JAVA_HOME aponta para a pasta correta do JDK (não para a bin). Reinicie o VS Code.</li>
      <li><strong>Erros de compilação</strong> → Respeite letras maiúsculas/minúsculas e certifique-se de que o nome do arquivo é exatamente igual ao nome da classe (<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">HelloWorld.java</code> para <code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">public class HelloWorld</code>).</li>
    </ul>

    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Conclusão</h3>
    <p class="mb-4">Você acabou de construir, passo a passo, o alicerce sobre o qual todos os seus futuros programas Java serão erguidos. Escolheu uma versão LTS estável, instalou o JDK com as configurações corretas, ensinou o Windows a localizar os comandos essenciais e validou todo o sistema com um programa real, usando tanto as ferramentas puras do terminal quanto o poderoso VS Code. Mais do que seguir um roteiro, você compreendeu o porquê de cada ação — o que torna a solução de problemas futuros muito mais natural.</p>
    <p>Agora que o motor está afinado e o painel de controle operante, você está pronto para mergulhar na sintaxe e na lógica da linguagem. Mantenha este guia por perto; ele é o mapa que sempre trará você de volta ao caminho certo quando algo precisar ser ajustado.</p>
  `,

  imagens: [
    // Espaço reservado para futuras imagens. Exemplo:
    // {
    //   src: 'assets/images/jdk-installation.png',
    //   alt: 'Tela de instalação do JDK com a opção JAVA_HOME selecionada',
    //   legenda: 'Selecionando a opção "Set JAVA_HOME variable" durante a instalação.',
    //   largura: 600,
    //   altura: 400
    // }
  ],

  exemplos: [
    {
      titulo: 'Hello World no Bloco de Notas + Terminal',
      codigo: `// Arquivo: HelloWorld.java (criado no Bloco de Notas)
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Ola Mundo!");
    }
}

// ===== COMANDOS NO TERMINAL (Prompt de Comando) =====
// Navegar até a pasta onde salvou o arquivo:
cd Documents

// Compilar (gera HelloWorld.class):
javac HelloWorld.java

// Executar (roda na JVM):
java HelloWorld

// Saída esperada:
// Ola Mundo!`,
      explicacao: 'Este é o teste manual completo. O código é escrito no Bloco de Notas, salvo como HelloWorld.java, compilado com javac e executado com java. O terminal exibirá "Ola Mundo!" se tudo estiver configurado corretamente.'
    }
  ],

  exercicios: [
    {
      pergunta: 'Qual é a função da variável de ambiente JAVA_HOME?',
      alternativas: [
        'Listar todas as pastas onde o Windows procura por executáveis',
        'Apontar para a pasta raiz do JDK instalado no sistema',
        'Compilar automaticamente arquivos .java ao ligar o computador'
      ],
      respostaCorreta: 1,
      explicacao: 'JAVA_HOME armazena o caminho da pasta raiz do JDK. Ferramentas como VS Code e Maven usam essa variável para localizar o compilador e as bibliotecas do Java.'
    },
    {
      pergunta: 'Por que devemos preferir uma versão LTS do Java para estudos e projetos empresariais?',
      alternativas: [
        'Porque as versões LTS são as únicas que rodam no Windows',
        'Porque as versões LTS recebem atualizações de segurança por vários anos, garantindo estabilidade',
        'Porque as versões LTS são sempre as mais recentes lançadas'
      ],
      respostaCorreta: 1,
      explicacao: 'LTS (Long Term Support) significa suporte de longo prazo. Essas versões recebem correções de segurança e estabilidade por anos, ao contrário das versões intermediárias que perdem suporte em poucos meses.'
    }
  ]
};