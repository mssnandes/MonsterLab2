document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('http://localhost:3000/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(data => {
        console.log('Sucesso:', data);
        // Aqui você pode manipular a resposta do servidor
        alert('Login realizado com sucesso!');
        window.open('../index.html');
    })
    .catch(error => {
        console.error('Erro:', error);
        // Aqui você pode lidar com erros de requisição
        alert('Ocorreu um erro ao logar o usuário.');
    });
});