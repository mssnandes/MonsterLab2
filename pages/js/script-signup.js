document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('http://localhost:3000/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
    }).then(data => {
        console.log('Sucesso:', data);
        // Aqui você pode manipular a resposta do servidor
        alert('Usuário cadastrado com sucesso!');
        window.open('./login.html');
    })
    .catch(error => {
        console.error('Erro:', error);
        // Aqui você pode lidar com erros de requisição
        alert('Ocorreu um erro ao cadastrar o usuário.');
    });
});