// Arquivo: data/aulas/cap-01/sub-1-1.js
// Aula 1.1 – Visão Geral do Java e Ecossistema

window.conteudoAulas = window.conteudoAulas || {};

window.conteudoAulas['sub-1-1'] = {
  teoria: `
    <h2 class="text-2xl font-bold text-slate-800 mb-4">O que é Java?</h2>
    <p>Java é uma linguagem de programação orientada a objetos, criada pela Sun Microsystems em 1995 e atualmente mantida pela Oracle. É conhecida pelo lema <strong>"Write Once, Run Anywhere"</strong> (escreva uma vez, execute em qualquer lugar), graças à Máquina Virtual Java (JVM).</p>
    <p>Principais características:</p>
    <ul class="list-disc ml-6 mb-4">
      <li><strong>Portabilidade:</strong> código compilado em bytecode (.class) roda em qualquer JVM.</li>
      <li><strong>Orientação a objetos:</strong> organiza o código em classes e objetos.</li>
      <li><strong>Robustez:</strong> tratamento de exceções e coleta de lixo automática.</li>
      <li><strong>Segurança:</strong> execução em sandbox, ideal para aplicações web e empresariais.</li>
    </ul>
    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Ecossistema Java</h3>
    <p>O ecossistema Java inclui:</p>
    <ul class="list-disc ml-6 mb-4">
      <li><strong>JDK (Java Development Kit):</strong> ferramentas para desenvolver (compilador javac, debugger, etc.)</li>
      <li><strong>JRE (Java Runtime Environment):</strong> ambiente mínimo para executar aplicações Java.</li>
      <li><strong>JVM (Java Virtual Machine):</strong> responsável por executar o bytecode.</li>
    </ul>
  `,
  imagens: [
    {
      src: 'assets/images/java-ecosystem.png',
      alt: 'Diagrama do ecossistema Java (JDK, JRE, JVM)',
      legenda: 'Relação entre JDK, JRE e JVM.',
      largura: 600,
      altura: 400
    }
  ],
  exemplos: [
    {
      titulo: 'Exemplo mínimo: Hello World',
      codigo: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Olá, mundo!");
    }
}`,
      explicacao: 'Este é o programa Java mais simples. A classe HelloWorld contém o método main, ponto de entrada da aplicação.'
    }
  ],
  exercicios: [
    {
      pergunta: 'Qual é a função da JVM?',
      alternativas: [
        'Compilar o código fonte para bytecode',
        'Executar o bytecode em qualquer sistema operacional',
        'Fornecer uma interface gráfica para desenvolvimento'
      ],
      respostaCorreta: 1,
      explicacao: 'A JVM interpreta (ou compila JIT) o bytecode e o executa, garantindo a portabilidade.'
    }
  ]
};