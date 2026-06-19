// Arquivo: data/aulas/cap-01/sub-1-2.js
// Aula 1.2 – Configuração do Ambiente (JDK, IDE, PATH)

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-2'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Configuração do Ambiente de Desenvolvimento Java: Do Download ao Primeiro Programa</h2>
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

    <h4 class="subsection-title">3. Configuração Manual das Variáveis de Ambiente (O Guia Definitivo)</h4>
    <p class="lesson-text">Se o Windows não souber exatamente onde o Java está guardado, você não conseguirá compilar ou rodar seus programas pelo terminal ou pelo VS Code. O instalador tenta fazer isso sozinho, mas frequentemente falha. Vamos conferir e ajustar isso manualmente, passo a passo, usando as imagens acima como nosso mapa.</p>

    <p class="lesson-text"><strong>Passo 1: Abrindo a Janela Oculta do Windows</strong></p>
    <ul class="topic-list space-y-2 mb-4">
      <li>No seu teclado, pressione juntas as teclas <strong>Windows + S</strong> (ou clique na barra de pesquisa ao lado do botão Iniciar).</li>
      <li>Digite exatamente: <strong>variáveis de ambiente</strong>.</li>
      <li>Nos resultados, clique na opção <strong>Editar as variáveis de ambiente do sistema</strong> (aquela com o ícone de um monitor e um escudo).</li>
      <li>Uma pequena janela chamada <strong>Propriedades do Sistema</strong> vai se abrir. Na parte inferior dela, clique no botão <strong>Variáveis de Ambiente...</strong></li>
    </ul>

    <p class="lesson-text"><strong>Passo 2: Configurando a Variável JAVA_HOME</strong></p>
    <p class="lesson-text">Olhe para a metade inferior da tela que se abriu, na seção chamada <strong>Variáveis do sistema</strong>. É aqui que faremos a mágica.</p>
    <ul class="topic-list space-y-2 mb-4">
      <li>Procure na lista se já existe uma variável chamada <code class="code-inline">JAVA_HOME</code>.</li>
      <li>Se <strong>NÃO existir</strong>: Clique no botão <strong>Novo...</strong> logo abaixo da lista.</li>
      <li>Se <strong>JÁ existir</strong>: Clique nela para selecioná-la e depois clique em <strong>Editar...</strong></li>
      <li>Uma caixinha menor vai se abrir. Preencha os dois campos exatamente assim:
        <ul class="list-disc ml-6 mt-1">
          <li><strong>Nome da variável:</strong> <code class="code-inline">JAVA_HOME</code> (obrigatoriamente em letras maiúsculas e com o underline).</li>
          <li><strong>Valor da variável:</strong> O caminho exato de onde o Java foi instalado.</li>
        </ul>
      </li>
    </ul>

    <div class="callout-warning">
      <strong>⚠️ Atenção ao caminho do JDK:</strong> Na instalação padrão, o valor é algo como <code class="code-inline">C:\\Program Files\\Eclipse Adoptium\\jdk-25.0.1.10-hotspot\\</code>. O número da versão varia conforme a versão baixada. Clique no botão <strong>Procurar no Diretório...</strong> para encontrar a pasta correta e não errar nenhuma letra.
    </div>
    <p class="lesson-text">Clique em <strong>OK</strong> para fechar essa caixinha.</p>

    <p class="lesson-text"><strong>Passo 3: O Ajuste Crítico na Variável CLASSPATH (Correção de Erro)</strong></p>
    <div class="callout-warning">
      <strong>🚨 Atenção: Erro comum detectado!</strong> Muitas instalações trazem a variável <code class="code-inline">CLASSPATH</code> configurada incorretamente como <code class="code-inline">;%JAVA_HOME%\\bin;</code>. Isso está errado e vai quebrar o funcionamento do Java. O correto para o CLASSPATH de um iniciante é apenas um ponto <strong>.</strong> (que significa "procure os arquivos na pasta atual") ou ela nem precisa existir. Como ela já está ali, vamos corrigi-la:
    </div>
    <ul class="topic-list space-y-2 mb-4">
      <li>Na lista de <strong>Variáveis do sistema</strong>, localize a variável <code class="code-inline">CLASSPATH</code>.</li>
      <li>Clique em <strong>Editar...</strong>.</li>
      <li>Apague tudo o que está escrito no "Valor da variável" e digite apenas um ponto final: <code class="code-inline">.</code></li>
      <li>Clique em <strong>OK</strong>.</li>
    </ul>

    <p class="lesson-text"><strong>Passo 4: Adicionando o Java ao Path do Sistema</strong></p>
    <p class="lesson-text">O <strong>Path</strong> (caminho, em inglês) é uma lista de endereços que o Windows consulta sempre que você digita um comando no terminal. Vamos colocar o Java nessa lista.</p>
    <ul class="topic-list space-y-2 mb-4">
      <li>Ainda na metade inferior (Variáveis do sistema), role a lista para baixo, encontre a variável chamada <strong>Path</strong> (ou <strong>PATH</strong>) e clique nela para selecioná-la.</li>
      <li>Clique no botão <strong>Editar...</strong>.</li>
      <li>Uma nova janela com uma lista de linhas verticais vai se abrir.</li>
      <li>Clique no botão <strong>Novo</strong> no canto superior direito dessa janelinha.</li>
      <li>Uma nova linha em branco vai aparecer no final da lista. Digite exatamente isso: <code class="code-inline">%JAVA_HOME%\\bin</code></li>
    </ul>

    <div class="callout-warning">
      <strong>Regra de Ouro:</strong> Não altere, não mova e nunca apague nenhuma outra linha que já estava nessa lista! Se apagar, outros programas do seu computador vão parar de funcionar.
    </div>

    <p class="lesson-text"><strong>Passo 5: Salvando e Validando (O erro que todos cometem)</strong></p>
    <p class="lesson-text">Agora que você terminou, clique no botão <strong>OK</strong> da janela do Path. Depois, clique no botão <strong>OK</strong> da janela de Variáveis de Ambiente. Por fim, clique no botão <strong>OK</strong> da janela de Propriedades do Sistema.</p>

    <div class="callout-warning">
      <strong>Atenção:</strong> Se você fechar qualquer uma dessas janelas clicando no "X" vermelho lá em cima, o Windows vai descartar tudo o que você fez e você terá que recomeçar do zero.
    </div>
    <p class="lesson-text">Para garantir que o Windows aprendeu o caminho, feche todos os terminais ou prompts de comando que você tiver aberto, abra um novo terminal e digite <code class="code-inline">javac -version</code>. Se aparecer a versão do Java que você instalou, seu ambiente está configurado perfeitamente!</p>

    <h4 class="subsection-title">4. Teste Manual: O Poder Bruto do JDK</h4>
    <p class="lesson-text">Antes de instalarmos qualquer editor moderno, vamos ver a engrenagem girar direto na força bruta. Faremos tudo usando apenas duas ferramentas que já vêm em qualquer computador com Windows: o <strong>Bloco de Notas</strong> e o <strong>Prompt de Comando</strong> (terminal). Esse teste é fundamental para provar que o motor do Java está instalado e funcionando perfeitamente.</p>

    <p class="lesson-text"><strong>Passo 1: Escrevendo o Código no Bloco de Notas</strong></p>
    <ul class="topic-list space-y-2 mb-4">
      <li>Clique no menu Iniciar do Windows, digite <strong>Bloco de Notas</strong> e abra o aplicativo.</li>
      <li>Copie o texto abaixo e cole exatamente igual dentro dele:</li>
    </ul>

    <pre><code class="language-java">public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Ola Mundo!");
    }
}</code></pre>

    <div class="callout-warning">
      <strong>⚠️ Atenção milimétrica:</strong> O Java é extremamente exigente. Respeite todas as letras maiúsculas e minúsculas (escreva <code class="code-inline">String</code> com "S" maiúsculo e <code class="code-inline">main</code> minúsculo, por exemplo). Não esqueça de fechar as chaves <code class="code-inline">{}</code> e de colocar o ponto e vírgula <code class="code-inline">;</code> no final da linha do meio. Se errar uma única letra, o teste vai falhar.
    </div>

    <p class="lesson-text"><strong>Passo 2: Salvando com o Truque Secreto da Extensão</strong></p>
    <p class="lesson-text">O Windows adora transformar tudo em arquivo de texto comum (<code class="code-inline">.txt</code>). Se salvarmos de qualquer jeito, o arquivo vai se chamar <code class="code-inline">HelloWorld.java.txt</code>. O Java não lê isso. Siga este passo a passo cirúrgico para salvar corretamente:</p>
    <ul class="topic-list space-y-2 mb-4">
      <li>No menu superior do Bloco de Notas, clique em <strong>Arquivo</strong> e depois em <strong>Salvar Como...</strong></li>
      <li>Na barra lateral esquerda da janela que se abriu, clique na pasta <strong>Documentos</strong>. É muito importante salvar exatamente em Documentos para facilitar os próximos passos.</li>
      <li>Olhe para a parte inferior da janela, onde diz <strong>Tipo:</strong> (logo abaixo do nome do arquivo). Clique nessa caixinha e mude de "Documentos de texto (*.txt)" para <strong>Todos os arquivos (*.*)</strong>.</li>
      <li>Agora, na caixinha <strong>Nome:</strong>, apague tudo o que estiver escrito e digite exatamente assim: <strong>HelloWorld.java</strong> (Atenção: A primeira letra do "Hello" e do "World" devem ser maiúsculas, grudadas, terminando com .java).</li>
      <li>Clique no botão <strong>Salvar</strong> e pode fechar o Bloco de Notas.</li>
    </ul>

    <p class="lesson-text"><strong>Passo 3: Abrindo o Prompt de Comando e Memorizando o Caminho</strong></p>
    <p class="lesson-text">Agora precisamos dar ordens para o computador ler esse arquivo. Para isso, usamos a famosa "tela preta" do Windows.</p>
    <ul class="topic-list space-y-2 mb-4">
      <li>Pressione as teclas <strong>Windows + S</strong> no seu teclado para abrir a busca.</li>
      <li>Digite as letras: <strong>cmd</strong></li>
      <li>Nos resultados, vai aparecer o <strong>Prompt de Comando</strong>. Clique nele para abrir.</li>
    </ul>
    <p class="lesson-text">Uma tela preta com letras brancas vai surgir. Repare na linha de texto que já está escrita ali. Ela indica exatamente em qual pasta do seu computador você está navegando agora. Geralmente ela começa assim: <code class="code-inline">C:\\Users\\SeuNome></code> (Onde "SeuNome" será o nome da sua conta de usuário no computador).</p>

    <p class="lesson-text"><strong>Passo 4: Navegando Até o Arquivo (O Comando cd)</strong></p>
    <p class="lesson-text">O Prompt precisa ir até a pasta <strong>Documentos</strong> onde salvamos o arquivo. Como ele está na sua pasta de usuário, vamos usar o comando <code class="code-inline">cd</code> (que significa <em>Change Directory</em>, ou Mudar de Diretório).</p>
    <p class="lesson-text">Digite o comando abaixo exatamente assim e aperte a tecla <strong>Enter</strong>:</p>

    <div class="terminal-output">
C:\\Users\\SeuNome> cd Documents
C:\\Users\\SeuNome\\Documents>
    </div>

    <p class="lesson-text">Repare que a linha do terminal mudou. Agora ela mostra <code class="code-inline">C:\\Users\\SeuNome\\Documents></code>. Pronto! Significa que o terminal entrou com sucesso dentro da sua pasta Documentos.</p>

    <p class="lesson-text"><strong>Passo 5: Compilando o Código (Criando o Bytecode)</strong></p>
    <p class="lesson-text">Agora vamos chamar o compilador do Java (o engenheiro tradutor) para ler o nosso texto humano e transformá-lo na linguagem universal da máquina virtual.</p>
    <p class="lesson-text">Digite o seguinte comando e aperte <strong>Enter</strong>:</p>

    <div class="terminal-output">
C:\\Users\\SeuNome\\Documents> javac HelloWorld.java
    </div>

    <p class="lesson-text"><strong>O que deve acontecer:</strong> O terminal vai pular para a linha de baixo em silêncio absoluto, sem mostrar nenhuma mensagem nova. Isso é ótimo! Significa que o código foi compilado com sucesso. Se você abrir a sua pasta Documentos agora pelo Windows, vai notar que surgiu um arquivo novo lá dentro chamado <code class="code-inline">HelloWorld.class</code>.</p>
    <p class="lesson-text"><strong>E se deu erro?</strong> Se aparecer uma mensagem cheia de textos em inglês apontando uma linha, volte ao Passo 1, abra o seu arquivo e verifique se não esqueceu de nenhuma letra maiúscula, ponto e vírgula ou caractere.</p>

    <p class="lesson-text"><strong>Passo 6: Executando o Programa (Dando o "Play")</strong></p>
    <p class="lesson-text">Com o arquivo <code class="code-inline">.class</code> gerado, vamos mandar a Máquina Virtual do Java (JVM) executar a nossa instrução e exibir a frase na tela.</p>
    <p class="lesson-text">Digite o comando abaixo e aperte <strong>Enter</strong> (<strong>Atenção:</strong> nunca coloque a extensão <code class="code-inline">.class</code> ou <code class="code-inline">.java</code> neste comando final):</p>

    <div class="terminal-output">
C:\\Users\\SeuNome\\Documents> java HelloWorld
Ola Mundo!
    </div>

    <p class="lesson-text">O Resultado: Logo abaixo do seu comando, a tela preta exibirá orgulhosamente a mensagem: <strong>Ola Mundo!</strong></p>

    <div class="callout-success">
      <strong>Parabéns!</strong> Você acabou de escrever, compilar e rodar o seu primeiríssimo programa Java puro, conversando diretamente com o sistema operacional e a JVM, sem precisar de nenhum programa intermediário. O seu ambiente está 100% pronto e blindado para os próximos desafios.
    </div>

    <h4 class="subsection-title">5. Instalando o Visual Studio Code (VS Code)</h4>
    <p class="lesson-text">O Visual Studio Code (ou simplesmente VS Code) será a nossa central de comando. Ele é um editor de código moderno que facilita nossa vida, colorindo o texto, apontando erros antes de compilarmos e permitindo rodar o programa com um clique. Siga este passo a passo milimétrico para não errar na instalação:</p>

    <p class="lesson-text"><strong>Passo 1: Download Seguro</strong></p>
    <ul class="topic-list space-y-2 mb-4">
      <li>Acesse o site oficial: <a href="https://code.visualstudio.com" class="text-blue-600 underline" target="_blank">code.visualstudio.com</a>.</li>
      <li>Clique no grande botão azul escrito <strong>Download for Windows</strong> (Baixar para Windows).</li>
      <li>Aguarde o download do arquivo terminar (geralmente ele vai para a sua pasta Downloads).</li>
    </ul>

    <p class="lesson-text"><strong>Passo 2: O Instalador e as Opções Cruciais</strong></p>
    <ol class="list-decimal ml-6 mb-4 space-y-2">
      <li>Dê um duplo clique no arquivo baixado para iniciar a instalação.</li>
      <li><strong>Contrato de Licença:</strong> O instalador exibirá um texto jurídico. Você deve clicar na bolinha <strong>Eu aceito o acordo</strong> para que o botão Avançar fique disponível. Clique em Avançar.</li>
      <li><strong>Pasta de Destino:</strong> Deixe exatamente o caminho que ele sugerir. Clique em Avançar.</li>
      <li><strong>Pasta do Menu Iniciar:</strong> Não altere nada. Clique em Avançar.</li>
      <li><strong>A TELA CRUCIAL (Tarefas Adicionais):</strong> Nesta tela, você verá várias caixinhas de seleção. Marque absolutamente todas elas! Certifique-se de que as seguintes opções estão marcadas com um "V":
        <ul class="list-disc ml-6 mt-1 space-y-1">
          <li>Criar um ícone na área de trabalho</li>
          <li>Adicionar a ação "Abrir com Code" ao menu de contexto do Windows Explorer para arquivos</li>
          <li>Adicionar a ação "Abrir com Code" ao menu de contexto do Windows Explorer para diretórios</li>
          <li><strong>Adicionar a PATH</strong> (disponível após reiniciar) — Esta é a mais obrigatória de todas!</li>
        </ul>
      </li>
      <li>Clique em <strong>Avançar</strong> e, na tela seguinte, clique em <strong>Instalar</strong>.</li>
      <li>Aguarde a barra verde carregar por completo. No final, deixe marcada a opção "Iniciar o Visual Studio Code" e clique em <strong>Concluir</strong>.</li>
    </ol>

    <h4 class="subsection-title">6. Ensinando o VS Code a Falar Português e Java</h4>
    <p class="lesson-text">Quando o VS Code abrir pela primeira vez, você notará que toda a interface dele está em inglês. Vamos resolver isso primeiro para facilitar seus estudos e, logo em seguida, instalar as ferramentas de Java.</p>

    <p class="lesson-text"><strong>Passo 1: Mudando o Idioma para Português</strong></p>
    <ul class="topic-list space-y-2 mb-4">
      <li>Olhe para a barra lateral esquerda do VS Code. Há um menu com alguns ícones. O último deles parece um conjunto de quatro quadradinhos (onde um deles está flutuando). Esse é o menu de <strong>Extensions</strong> (Extensões). Clique nele.</li>
      <li>Na barra de pesquisa que se abriu no topo, digite exatamente: <strong>portuguese</strong>.</li>
      <li>O primeiro resultado será <strong>Portuguese (Brazil) Language Pack for Visual Studio Code</strong>, criado pela própria Microsoft.</li>
      <li>Clique no botão azul escrito <strong>Install</strong> ao lado dele.</li>
    </ul>

    <div class="callout-info">
      <strong>O pulo do gato:</strong> Assim que a instalação terminar, uma janelinha pop-up vai aparecer no canto inferior direito da tela com um botão azul escrito <strong>Change Language and Restart</strong> (Mudar Idioma e Reiniciar). Clique nele. O programa vai fechar e abrir sozinho, agora totalmente em português!
    </div>

    <p class="lesson-text"><strong>Passo 2: Instalando o Motor do Java no Editor</strong></p>
    <ul class="topic-list space-y-2 mb-4">
      <li>Clique novamente no ícone de <strong>Extensões</strong> na barra lateral esquerda (os quatro quadradinhos).</li>
      <li>Na barra de pesquisa, digite apenas: <strong>java</strong>.</li>
      <li>Procure na lista por uma extensão chamada <strong>Extension Pack for Java</strong> (ela tem o desenho de uma xícara de café azul e também é fabricada pela Microsoft).</li>
      <li>Clique no botão azul <strong>Instalar</strong>.</li>
    </ul>

    <div class="callout-info">
      <strong>Tenha paciência:</strong> Este pacote instala 6 ferramentas de uma só vez (suporte a código, testes, gerenciador de projetos, etc.). O botão ficará escrito "Instalando" por alguns instantes. Aguarde até que ele mude para as opções "Desabilitar" e "Desinstalar". Isso significa que terminou.
    </div>

    <p class="lesson-text"><strong>Passo 3: Verificando o Status do Sistema</strong></p>
    <ul class="topic-list space-y-2 mb-4">
      <li>Feche o VS Code no "X" superior e abra-o novamente pelo ícone da Área de Trabalho.</li>
      <li>Olhe atentamente para a barra bem fina na parte inferior da janela (a barra de status). Após alguns segundos, você verá uma mensagem rápida dizendo <strong>"Java tooling is ready"</strong> ou "O ferramental do Java está pronto".</li>
    </ul>

    <div class="callout-success">
      <strong>Pronto!</strong> O seu ambiente de desenvolvimento não está apenas completo, ele está configurado como o de um profissional de mercado. Agora, para criar e rodar qualquer código Java futuro, bastará abrir o arquivo no VS Code e clicar no botão Run (Executar) ou apertar a tecla F5 do seu teclado. Sem telas pretas manuais, sem complicações.
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
      explicacao: 'Este é o teste manual completo. O código é escrito no Bloco de Notas, salvo como HelloWorld.java (cuidado com a extensão .txt oculta), compilado com javac e executado com java. O terminal exibirá "Ola Mundo!" se tudo estiver configurado corretamente.'
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
    },
    {
      pergunta: 'Ao salvar um arquivo de código Java no Bloco de Notas, qual cuidado essencial deve ser tomado para que o compilador consiga lê-lo?',
      alternativas: [
        'Salvar o arquivo com o nome HelloWorld.txt e depois mudar o ícone dele',
        'Mudar o campo "Tipo" para "Todos os arquivos (*.*)" e salvar com a extensão .java no final do nome',
        'Salvar normalmente apenas clicando em "Salvar", pois o Windows detecta códigos automaticamente'
      ],
      respostaCorreta: 1,
      explicacao: 'O Bloco de Notas adiciona a extensão oculta .txt por padrão se o usuário não alterar o "Tipo". Caso o arquivo seja salvo como HelloWorld.java.txt, o comando javac do terminal não conseguirá identificá-lo como um arquivo de código-fonte válido.'
    },
    {
      pergunta: 'Se você abrir o Prompt de Comando (tela preta) e digitar o comando javac HelloWorld.java imediatamente, sem usar o comando cd antes, o que provavelmente acontecerá?',
      alternativas: [
        'O Java compilará o arquivo perfeitamente, não importa em qual pasta ele esteja guardado',
        'O terminal exibirá um erro informando que o arquivo não foi encontrado, pois você não navegou até a pasta onde ele foi salvo',
        'O computador vai reiniciar para aplicar as configurações de ambiente'
      ],
      respostaCorreta: 1,
      explicacao: 'O terminal funciona como um navegador de arquivos por texto. Se você salvou seu programa na pasta Documentos mas o Prompt de Comando ainda estiver aberto na pasta raiz do seu usuário, ele procurará o arquivo ali mesmo e não o encontrará. O comando cd Documents é obrigatório para mover o terminal até a pasta correta antes da compilação.'
    },
    {
      pergunta: 'Durante a instalação do Visual Studio Code (VS Code), qual é o principal benefício de marcar todas as caixas de seleção na tela de "Tarefas Adicionais"?',
      alternativas: [
        'Ativar o corretor ortográfico de português de forma nativa para o código',
        'Adicionar o atalho "Abrir com Code" no menu do botão direito do Windows e garantir a integração automática do editor com o PATH do sistema',
        'Fazer o download automático do JDK do Java diretamente pelo instalador do VS Code'
      ],
      respostaCorreta: 1,
      explicacao: 'Marcar todas as opções adicionais cria facilidades no dia a dia do desenvolvedor, como clicar com o botão direito em cima de qualquer pasta de projeto no Windows Explorer e abri-la instantaneamente dentro do VS Code, além de garantir que o editor consiga acionar as ferramentas do sistema através da variável PATH.'
    }
  ]
};