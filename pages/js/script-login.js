async function checkInput(event) {

    event.preventDefault();

    const email = document.querySelector('.auth-email').value;
    const senha = document.querySelector('.auth-password').value;
    const data = {
      email: email,
      password: senha
    };

    try {
      const response = await fetch('http://localhost:3000/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        alert(`Erro: E-mail ou senha incorretos`);
        return false;
      }
      alert("Login realizado com sucesso")
      window.open('../index.html');

    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao realizar o login');
    }
}