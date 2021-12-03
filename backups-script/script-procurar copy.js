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
    // Relatório é um obj com o atributo array dados. Dentro do array temos as info
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
    let relatorioParcial = [];
    //alert(relatorio.dados.length)
    for (let i = 0; i < relatorio.dados.length; i++) {
        if (busca == relatorio.dados[i].numeroNF) {
            // Função correta
             imprimir(relatorio,i)

            // relatorioParcial e relatorioFinal e imprimirRelatorioTeste são testes
            // relatorioParcial.push({
            //     "notaParcial": relatorio.dados[i].numeroNF,
            //     "emissaoParcial": relatorio.dados[i].dataEmissao,
            //     "razaoParcial": relatorio.dados[i].razaoSocial,
            //     "chaveParcial": relatorio.dados[i].chaveAcesso,
            //     "valorParcial": relatorio.dados[i].valorNF
            // })
        }
        // relatorioParcial.forEach(item => {
        //     relatorioFinal = {
        //         notaFinal: item.notaParcial,
        //         emissaoFinal: item.emissaoParcial,
        //         razaoFinal: item.razaoParcial,
        //         chaveFinal: item.chaveParcial,
        //         valorFinal: item.valorParcial
        //     }
        // });
    }
    //imprimirRelatorioFinal(relatorioParcial);
    // let janela = window.open();

    // janela.document.write(relatorioFinal.notaFinal, '<br>');
    // janela.document.write(relatorioFinal.emissaoFinal, '<br>');
    // janela.document.write(relatorioFinal.razaoFinal, '<br>');
    // janela.document.write(relatorioFinal.chaveFinal, '<br>');
    // janela.document.write(relatorioFinal.valorFinal, '<br><br>');
}

// function imprimirRelatorioFinal(relatorioParcial) {
//     relatorioParcial.forEach(item => {
//         relatorioFinal = {
//             notaFinal: item.notaParcial,
//             emissaoFinal: item.emissaoParcial,
//             razaoFinal: item.razaoParcial,
//             chaveFinal: item.chaveParcial,
//             valorFinal: item.valorParcial
//         }
//     });

//     let janela = window.open();
//     janela.document.write(relatorioFinal.notaFinal, '<br>');
//     janela.document.write(relatorioFinal.emissaoFinal, '<br>');
//     janela.document.write(relatorioFinal.razaoFinal, '<br>');
//     janela.document.write(relatorioFinal.chaveFinal, '<br>');
//     janela.document.write(relatorioFinal.valorFinal, '<br><br>');
// }




function imprimir(relatorio, i) {
    // let relatorioParcial = []

    // relatorioParcial.push({
    //     "notaParcial": relatorio.dados[i].numeroNF,
    //     "emissaoParcial": relatorio.dados[i].dataEmissao,
    //     "razaoParcial": relatorio.dados[i].razaoSocial,
    //     "chaveParcial": relatorio.dados[i].chaveAcesso,
    //     "valorParcial": relatorio.dados[i].valorNF
    // })
    // relatorioParcial.forEach(item => {
    //     relatorioFinal = {
    //         notaFinal: item.notaParcial,
    //         emissaoFinal: item.emissaoParcial,
    //         razaoFinal: item.razaoParcial,
    //         chaveFinal: item.chaveParcial,
    //         valorFinal: item.valorParcial
    //     }
    // });

    let janela = window.open();

    janela.document.write(relatorio.dados[i].numeroNF, '<br>');
    janela.document.write(relatorio.dados[i].dataEmissao, '<br>');
    janela.document.write(relatorio.dados[i].razaoSocial, '<br>');
    janela.document.write(relatorio.dados[i].chaveAcesso, '<br>');
    janela.document.write(relatorio.dados[i].valorNF, '<br><br>');

}


// // Inserindo via push
// relatorioParcial.push({
//     "notaParcial": relatorio.dados[i].numeroNF,
//     "emissaoParcial": relatorio.dados[i].dataEmissao,
//     "razaoParcial": relatorio.dados[i].razaoSocial,
//     "chaveParcial": relatorio.dados[i].chaveAcesso,
//     "valorParcial": relatorio.dados[i].valorNF
// })

// // Percorrendo e atribuindo ao novo array
// relatorioParcial.forEach(item => {
//     relatorioFinal = {
//         notaFinal: item.notaParcial,
//         emissaoFinal: item.emissaoParcial,
//         razaoFinal: item.razaoParcial,
//         chaveFinal: item.chaveParcial,
//         valorFinal: item.valorParcial
//     }
// });