// Arquivo: data/aulas/cap-01/sub-1-2.js
// Aula 1.2 – Configuração do Ambiente (JDK, IDE, PATH)

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-2'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Configurando o Ambiente de Desenvolvimento Java: Do Download ao Primeiro Programa</h2>
    <p class="lesson-text text-slate-500 italic">Guia Completo para Iniciantes no Windows</p>

    <h3 class="section-title">Introdução</h3>
    <p class="lesson-text">Dar os primeiros passos na programação Java pode parecer um labirinto de siglas, instalações e telas pretas. Mas a verdade é que, por trás de cada comando, existe uma lógica muito simples de entender. Este material foi desenhado para conduzir você, do absoluto zero, por todas as etapas necessárias para transformar um computador comum em uma estação de trabalho profissional para desenvolvimento Java.</p>
    <p class="lesson-text">Vamos começar escolhendo a versão correta da linguagem, instalar o kit de desenvolvimento, ensinar o sistema operacional a encontrá-lo, realizar um teste manual para ver o motor funcionar e, por fim, turbinar tudo com o editor de código mais popular do mercado.</p>

    <h3 class="section-title">Fundamentos: As Peças do Quebra-Cabeça</h3>
    <p class="lesson-text">Antes de clicar em qualquer botão, precisamos alinhar três conceitos que sustentam toda a prática.</p>

    <h4 class="subsection-title">1. O JDK (Java Development Kit)</h4>
    <p class="lesson-text">É o pacote completo de ferramentas para criar programas em Java. Dentro dele estão o compilador (<code class="code-inline">javac</code>), que traduz seu código para uma linguagem que o computador entende, e o ambiente de execução (JRE), necessário para testar o que você criou. Em resumo: se você quer programar, instala o JDK; se quer apenas usar um programa pronto, bastaria o JRE — mas como vamos desenvolver, o JDK é obrigatório.</p>

    <h4 class="subsection-title">2. LTS: As versões de longo prazo</h4>
    <p class="lesson-text">O Java está em constante evolução. A cada seis meses surge uma nova versão, mas a maioria recebe atualizações de segurança por pouco tempo. As versões <strong>LTS</strong> (Long Term Support) são os modelos consolidados, com garantia de correções por vários anos. Pense nelas como carros clássicos para os quais a fábrica continua fabricando peças por muito tempo.</p>

    <div class="callout-info">
      <strong>Recomendação (2026):</strong> As LTS mais relevantes são o <strong>Java 21</strong> e o <strong>Java 25</strong>. O Java 25 é a LTS mais recente, recomendada para novos projetos. O Java 21 ainda é amplamente utilizado e totalmente válido.
    </div>

    <h4 class="subsection-title">3. PATH e JAVA_HOME: O mapa do Windows</h4>
    <p class="lesson-text">Quando você digita um comando no terminal, o Windows precisa saber onde está o programa que executa esse comando. As variáveis de ambiente <code class="code-inline">JAVA_HOME</code> e <code class="code-inline">PATH</code> funcionam como um mapa. <code class="code-inline">JAVA_HOME</code> aponta para a pasta raiz do JDK. O <code class="code-inline">PATH</code> lista as pastas onde o sistema deve procurar executáveis. Ao adicionar a subpasta <code class="code-inline">bin</code> do JDK ao PATH, você permite que comandos como <code class="code-inline">javac</code> e <code class="code-inline">java</code> sejam disparados de qualquer lugar do sistema.</p>

    <h3 class="section-title">Desenvolvimento: Montando o Ambiente Passo a Passo</h3>

    <h4 class="subsection-title">1. Download do JDK</h4>
    <p class="lesson-text">Você pode obter o JDK de duas fontes confiáveis: o projeto <strong>Eclipse Adoptium</strong> (distribuição Temurin) e o site da <strong>Oracle</strong>. Ambos são usados no mercado.</p>

    <div class="callout-success">
      <strong>Baixando pelo Adoptium (recomendado):</strong>
      <ul class="list-disc ml-6 mt-1 space-y-1">
        <li>Acesse <a href="https://adoptium.net" class="text-blue-600 underline" target="_blank">adoptium.net</a>.</li>
        <li>Se o botão principal não mostrar a versão desejada, clique em <strong>"Other platforms and versions"</strong>.</li>
        <li>Preencha os filtros: <strong>Windows</strong>, <strong>x64</strong>, <strong>JDK</strong>, <strong>Version: 25 – LTS</strong>.</li>
        <li>Clique no botão de download do arquivo <strong>.msi</strong> (Windows Installer).</li>
      </ul>
    </div>

    <h4 class="subsection-title">2. Instalação do JDK no Windows</h4>
    <ol class="list-decimal ml-6 mb-4 space-y-2">
      <li>Execute o instalador baixado (.msi ou .exe).</li>
      <li>Na tela de boas-vindas, clique em <strong>Next</strong>.</li>
      <li><strong>Pasta de destino:</strong> Não altere o caminho padrão.</li>
      <li>Na tela de configuração personalizada, localize a opção <strong>"Set JAVA_HOME variable"</strong> e a ative.</li>
      <li>Opcionalmente, ative também <strong>"Associate .jar"</strong>.</li>
      <li>Avance e clique em <strong>Install</strong>. Aguarde a conclusão.</li>
    </ol>

    <h4 class="subsection-title">3. Configuração Manual das Variáveis de Ambiente (reforço)</h4>
    <p class="lesson-text">Mesmo que o instalador tenha criado o JAVA_HOME, é prudente verificar e complementar o PATH.</p>
    <ul class="topic-list space-y-2 mb-4">
      <li><strong>Abrindo as configurações:</strong> Pressione <code class="code-inline">Windows + S</code>, digite "variáveis de ambiente" e clique em "Editar as variáveis de ambiente do sistema".</li>
      <li><strong>Criando JAVA_HOME:</strong> Na seção <strong>Variáveis do sistema</strong>, clique em <strong>Novo…</strong>. Nome: <code class="code-inline">JAVA_HOME</code>. Valor: caminho da pasta raiz do JDK.</li>
      <li><strong>Adicionando ao PATH:</strong> Localize a variável <code class="code-inline">Path</code>, clique em <strong>Editar…</strong>, <strong>Novo</strong> e digite: <code class="code-inline">%JAVA_HOME%\\bin</code></li>
    </ul>

    <div class="callout-warning">
      <strong>Atenção:</strong> Não apague nenhuma linha existente na lista do PATH. Feche todas as janelas clicando em <strong>OK</strong> (não feche no "X", ou as alterações serão descartadas).
    </div>

    <h4 class="subsection-title">4. Teste Manual: O Poder Bruto do JDK</h4>
    <p class="lesson-text">Antes de instalarmos o editor de código, vamos sentir o motor funcionando sem nenhum intermediário.</p>

    <p class="lesson-text"><strong>Criando o código-fonte no Bloco de Notas:</strong></p>
    <pre><code class="language-java">public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Ola Mundo!");
    }
}</code></pre>

    <div class="callout-warning">
      <strong>Atenção máxima ao salvar:</strong> No Bloco de Notas, mude o tipo de "Documentos de texto (.txt)" para <strong>"Todos os arquivos (.*)"</strong>. Se não fizer isso, o Windows salvará como <code class="code-inline">HelloWorld.java.txt</code> e o Java não reconhecerá.
    </div>

    <p class="lesson-text"><strong>Compilando e executando no terminal:</strong></p>
    <div class="terminal-output">
C:\\Users\\SeuNome> cd Documents
C:\\Users\\SeuNome\\Documents> javac HelloWorld.java
C:\\Users\\SeuNome\\Documents> java HelloWorld
Ola Mundo!
    </div>

    <p class="lesson-text">Se tudo der certo, o terminal exibirá <strong>Ola Mundo!</strong>. O comando <code class="code-inline">javac</code> (compilador) leu seu texto .java e gerou o bytecode (.class). O comando <code class="code-inline">java</code> disparou a máquina virtual, que executou o bytecode.</p>

    <h4 class="subsection-title">5. Instalando o Visual Studio Code (VS Code)</h4>
    <ol class="list-decimal ml-6 mb-4 space-y-2">
      <li>Acesse <a href="https://code.visualstudio.com" class="text-blue-600 underline" target="_blank">code.visualstudio.com</a> e clique em "Download for Windows".</li>
      <li>Execute o instalador e aceite as opções padrão.</li>
      <li><strong>Tela crucial — Tarefas adicionais:</strong> Marque todas as opções disponíveis.</li>
      <li>Finalize a instalação e inicie o VS Code.</li>
    </ol>

    <h4 class="subsection-title">6. Ensinando o VS Code a Falar Java (Extensões)</h4>
    <ul class="topic-list space-y-2 mb-4">
      <li>Na barra lateral esquerda, clique no ícone de <strong>Extensões</strong> (quatro quadradinhos).</li>
      <li>Pesquise por <strong>java</strong>.</li>
      <li>Instale o <strong>"Extension Pack for Java"</strong> da Microsoft (ícone de xícara de café).</li>
      <li>Reinicie o VS Code. Após alguns segundos, a mensagem <strong>"Java tooling is ready"</strong> aparecerá na barra de status.</li>
    </ul>

    <div class="callout-success">
      <strong>Pronto!</strong> Seu ambiente de desenvolvimento Java está completo. Agora você pode criar, compilar e executar programas Java diretamente no VS Code com um único clique (F5).
    </div>

    <h3 class="section-title">Conclusão</h3>
    <p class="lesson-text">Você acabou de construir, passo a passo, o alicerce sobre o qual todos os seus futuros programas Java serão erguidos. Escolheu uma versão LTS estável, instalou o JDK com as configurações corretas, ensinou o Windows a localizar os comandos essenciais e validou todo o sistema com um programa real, usando tanto as ferramentas puras do terminal quanto o poderoso VS Code.</p>
    <p class="lesson-text">Agora que o motor está afinado e o painel de controle operante, você está pronto para mergulhar na sintaxe e na lógica da linguagem.</p>
  `,

  imagens: [],

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
cd Documents
javac HelloWorld.java   // Compilar (gera HelloWorld.class)
java HelloWorld         // Executar (roda na JVM)

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