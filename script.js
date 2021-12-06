function cadastroCliente() {
    let email = document.querySelector('#cademail');
    let nome = document.querySelector('#cadnome');
    let cnpj = document.querySelector('#cadcnpj');
    let senha = document.querySelector('#cadsenha');
    let confsenha = document.querySelector('#cadconfsenha');
    let codPessoa = geraCodigoPessoa(); // Função para gerar código de usuários

    // Verificando se campo está preenchido com os dados
    if (email.value && nome.value && cnpj.value && senha.value && confsenha.value) {
        if (senha.value == confsenha.value) { // Senha confere ou não
            let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]') // Criando lista no localStorage
            listaUsuario.push( // Adicionando dados na lista
                {
                    "emailCad": email.value,
                    "nomeCad": nome.value,
                    "cnpjCad": cnpj.value,
                    "senhaCad": senha.value,
                    "cadconfsenhaCad": confsenha.value,
                    "codCad": codPessoa
                }
            );
            // Convertendo pra string e acrescentando no localStorage os dados da lista
            localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));
            alert('Cadastro efetuado com sucesso')
            window.location.href = 'index.html'
        }
        else {
            alert('Confirmação de senha incorreta,verifique se a senha inserida esta igual')
        }
    }
    else {
        window.alert('Dados incompletos,verifique')
    }
}

// Função para gerar código de usuários - Chamada em
// cadastroCliente()
function geraCodigoPessoa() {
    let i = 1;
    let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');
    listaUsuario.forEach(element => {
        i++;
        //console.log(element);
    });
     return i;
}

// function salvaCodPessoa(i) {
//     // let salvaCod = JSON.parse(localStorage.getItem('salvaCod') || '[]');

//     // salvaCod = [
//     //     codigoSalvo = i
//     // ]

//     // localStorage.setItem('salvaCod', JSON.stringify(salvaCod));
    
//     let salvaCod = JSON.parse(localStorage.getItem('salvaCod') || '[]');
//     salvaCod.push({
//         "codigoSalvo": i
//     });  
//     localStorage.setItem('salvaCod', JSON.stringify(salvaCod));
// }