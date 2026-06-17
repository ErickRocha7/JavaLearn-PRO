const Auth = {
  CREDENCIAIS: { email: 'admin@email.com', senha: '123456', nome: 'João Silva' },
  inicializar() {
    document.getElementById('btn-entrar').addEventListener('click', () => this.login());
    ['email', 'senha'].forEach(id => {
      document.getElementById(id).addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.login();
      });
    });
  },
  login() {
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const erroDiv = document.getElementById('erro-login');
    if (!email || !senha) {
      erroDiv.textContent = 'Preencha todos os campos.';
      erroDiv.classList.remove('hidden');
      return;
    }
    if (email === this.CREDENCIAIS.email && senha === this.CREDENCIAIS.senha) {
      erroDiv.classList.add('hidden');
      Store.autenticar(email, this.CREDENCIAIS.nome);
    } else {
      erroDiv.textContent = 'E-mail ou senha incorretos.';
      erroDiv.classList.remove('hidden');
    }
  },
  logout() { Store.logout(); }
};