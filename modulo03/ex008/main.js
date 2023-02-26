const botaoSenha = document.querySelector('#botaoSenha')
const body = document.querySelector('body')

botaoSenha.addEventListener('click', function() {
    const senha = document.querySelector('#senha')

    if(senha.getAttribute('type') === 'password') {
        senha.setAttribute('type', 'text')
        botaoSenha.value = "Esconder Senha"
        senha.style.backgroundColor = '#ff6b6b'
    } else {
        senha.setAttribute('type', 'password')
        botaoSenha.value = "Mostrar Senha"
        senha.style.backgroundColor = 'greenyellow'
    }
} )
