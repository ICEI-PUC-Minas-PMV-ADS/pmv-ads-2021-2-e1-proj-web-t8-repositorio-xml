// function procurar() {

//     //let razao_social = document.getElementById('razao-social')
//     let display_razao_social = document.getElementById('display-razao-social')
//     let numero_nf = document.getElementById('display-numero-nf')
//     let data_emissao = document.getElementById('display-data-emissao')
//     let chave_acesso = document.getElementById('display-chave-acesso')
//     let valor = document.getElementById('display-valor')


//     display_razao_social.innerHTML = display_razao_social.value
//     numero_nf.innerHTML = '123'
//     data_emissao.innerHTML = '05/11/2021'
//     chave_acesso.innerHTML = '1234567891234567891234567891234567891234567'
//     valor.innerHTML = "R$ 1250,00"
// }

function procurar() {
    let relatorio = {
        dados: [
            {
                numeroNF: '1234',
                dataEmissao: '01/09/2021',
                razaoSocial: 'Amazing LTDA',
                chaveAcesso: '12345678912345678912345678912345678912345678',
                valorNF: 'R$ 200,00'
            },
            {
                numeroNF: '546',
                dataEmissao: '01/10/2021',
                razaoSocial: 'ByeBye LTDA',
                chaveAcesso: '12345678912345678912345678912345678912345678',
                valorNF: 'R$ 10000,00'
            },
            {
                numeroNF: '546',
                dataEmissao: '01/09/2021',
                razaoSocial: 'Saudades LTDA',
                chaveAcesso: '12345678912345678912345678912345678912345678',
                valorNF: 'R$ 2200,00'
            },
            {
                numeroNF: '546',
                dataEmissao: '01/10/2021',
                razaoSocial: 'Abacate LTDA',
                chaveAcesso: '12345678912345678912345678912345678912345678',
                valorNF: 'R$ 100,00'
            }
        ]
    }
    buscar(relatorio);
}

function buscar(relatorio) {

    let inputBuscar = document.querySelector('#nf');
    let busca = Number(inputBuscar.value);

    for (let i = 0; i < relatorio.dados.length; i++) {
        if (busca == relatorio.dados[i].numeroNF) {
            exibirRelatorio(relatorio, i)
            
            // teste
            // let validaImprimir = imprimir(x);
            // if (validaImprimir == 1){
            //     imprimir(relatorio,i);
            // } else {
            //     exibirRelatorio(relatorio, i);
            // }
            // teste
        }
    }
}

function exibirRelatorio(relatorio, i) {

    let display_numero_nf = document.getElementById('display-numero-nf')
    let display_data_emissao = document.getElementById('display-data-emissao')
    let display_razao_social = document.getElementById('display-razao-social')
    let display_chave_acesso = document.getElementById('display-chave-acesso')
    let display_valor = document.getElementById('display-valor')

    display_numero_nf.insertAdjacentHTML("beforeend", `${relatorio.dados[i].numeroNF} <br><br>`);
    display_data_emissao.insertAdjacentHTML("beforeend", `${relatorio.dados[i].dataEmissao} <br><br>`);
    display_razao_social.insertAdjacentHTML("beforeend", `${relatorio.dados[i].razaoSocial} <br><br>`);
    display_chave_acesso.insertAdjacentHTML("beforeend", `${relatorio.dados[i].chaveAcesso} <br><br>`);
    display_valor.insertAdjacentHTML("beforeend", `${relatorio.dados[i].valorNF} <br><br>`);

}


function imprimir(relatorio, i) {
    //teste
    //procurar();

    let janela = window.open();

    janela.document.write(relatorio.dados[i].numeroNF, '<br>');
    janela.document.write(relatorio.dados[i].dataEmissao, '<br>');
    janela.document.write(relatorio.dados[i].razaoSocial, '<br>');
    janela.document.write(relatorio.dados[i].chaveAcesso, '<br>');
    janela.document.write(relatorio.dados[i].valorNF, '<br><br>');

}
