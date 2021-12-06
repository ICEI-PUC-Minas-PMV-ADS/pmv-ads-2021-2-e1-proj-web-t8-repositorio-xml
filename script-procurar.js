// Getando relatório via array
function procurar() {

    let relatorio = {
        dados: [
            {
                numeroNF: '12',
                dataEmissao: '01/09/2021',
                razaoSocial: 'Amazing LTDA',
                chaveAcesso: '12345678912345678912345678912345678912345678',
                valorNF: 'R$ 200.00'
            },
            {
                numeroNF: '546',
                dataEmissao: '01/10/2021',
                razaoSocial: 'ByeBye LTDA',
                chaveAcesso: '12345678912345678912345678912345678912345678',
                valorNF: 'R$ 10000.00'
            },
            {
                numeroNF: '546',
                dataEmissao: '01/09/2021',
                razaoSocial: 'Saudades LTDA',
                chaveAcesso: '12345678912345678912345678912345678912345678',
                valorNF: 'R$ 2200.00'
            },
            {
                numeroNF: '546',
                dataEmissao: '01/10/2021',
                razaoSocial: 'Abacate',
                chaveAcesso: '12345678912345678912345678912345678912345678',
                valorNF: 'R$ 100.00'
            }
        ]
    }
    buscar(relatorio);
}

// Fazendo a busca de acordo com os dados informados pelo usuário
function buscar(relatorio) {

    let inputNF = document.querySelector('#nf');
    let inputRazaoSocial = document.querySelector('#razao-social'); // aqui

    // Pegando valores da input do usuário
    let buscaNum = Number(inputNF.value);
    let buscaRazaoSocial = inputRazaoSocial.value;

    // Iterando o array e verificando se a entrada corresponde com algum elemento
    for (let i = 0; i < relatorio.dados.length; i++) {
        if (buscaNum == 0 && buscaRazaoSocial == false) {
            //alert("entrou")
            exibirRelatorio(relatorio, i);
        }
        if (buscaNum) {                 // Por número nota
            if (buscaNum == relatorio.dados[i].numeroNF) {
                exibirRelatorio(relatorio, i)
            }
        }
        else if (buscaRazaoSocial) {        // Por razão social - string
            // toUpperCase() para converter tudo para maiúscula, assim o usuário pode digitar em minúscula que não fará diferença
            let strUpper = relatorio.dados[i].razaoSocial.toUpperCase();
            if (buscaRazaoSocial.toUpperCase() == strUpper) {
                exibirRelatorio(relatorio, i)
            }
        }
    }
}

// Exibindo dados selecionados na tela
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

    // Salvar dados no localStorage
    salvarLocalStorage(relatorio, i);
}

function salvarLocalStorage(relatorio, i) {
    if (window.localStorage) {       // Suporte ao localStorage
        relatorioImpressao = JSON.parse(localStorage.getItem('relatorioImpressao') || '[]');

        // Populando de acordo com o parâmetro passado, ou seja, de acordo com o filtro feito na função buscar(relatorio)
        relatorioImpressao.push({
            'numeroNF': relatorio.dados[i].numeroNF,
            'dataEmissao': relatorio.dados[i].dataEmissao,
            'razaoSocial': relatorio.dados[i].razaoSocial,
            'chaveAcesso': relatorio.dados[i].chaveAcesso,
            'valoNF': relatorio.dados[i].valorNF,
        });

        localStorage.setItem('relatorioImpressao', JSON.stringify(relatorioImpressao));
    }
}

function limpaTela() {
    location.reload();
}

// Imprimindo 
function imprimirRelatorio() {

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);          // Posição da chave no localStorage
        let value = localStorage.getItem(key);  // Passando o a chave para ler o valor

        if (key == "relatorioImpressao") {          // Pegando key somente do relatorioImpressao
            //let str = value;
            let janela = window.open();
            janela.document.write("REPX - Relatórios<hr><br><br>");
            janela.document.write(value);                    // Exibindo localStorage em nova janela
            janela.document.write("<br><br><hr>")
            janela.print();            

            limpaTela();
            localStorage.removeItem('relatorioImpressao');
            // let janela = window.open();
            // janela.document.write(str);
            // formataString(str); // aqui teste
            localStorage.removeItem('relatorioImpressao');
        }
    }    
}


//----------------------------------------------------------------------
// AQUI PARA BAIXO SÃO OS TESTES DE FORMATAÇÃO DE STRING
// PARA TESTAR, COMENTA A FUNÇÃO ACIMA imprimirRelatorio()

// // Imprimindo
// function imprimirRelatorio() {

//     for (let i = 0; i < localStorage.length; i++) {
//         let key = localStorage.key(i);          // Posição da chave no localStorage
//         let value = localStorage.getItem(key);  // Passando o a chave para ler o valor

//         if (key == "relatorioImpressao") {      // Pegando key somente do relatorioImpressao
//             let str = value;
//             // let janela = window.open();
//             // janela.document.write("REPX - Relatórios<hr><br><br>");
//             // janela.document.write(value);                    // Exibindo localStorage em nova janela
//             // janela.document.write("<br><br><hr>")
//             // janela.print();            

//             limpaTela();
//             localStorage.removeItem('relatorioImpressao');
//             // let janela = window.open();
//             // janela.document.write(str);
//             formataString(str);
//             localStorage.removeItem('relatorioImpressao');
//         }
//     }
// }

// function formataString(str) {
//     // array para salvar as posições e salvar as alterações.
//     let newStr = [];            // Esse array será passado para a impressão

//     // Varrendo a string que foi salva em 'str' na função imprimirRelatorio()
//     for (let i = 0; i < str.length; i++) {
//         //  document.write(str[i]);      
//         // Commprando os caracteres para substituir, caso os encontre
//         if (str[i] == '[' || str[i] == '{' || str[i] == '"' || str[i] == ',' || str[i] == ']' || str[i] == '}') {
//             if (str[i] == ',') {             // Se a string original tiver ','    
//                 newStr[i] = str[i];
//                 newStr[i] = '<br>';          // Então dê um salto de linha e atribua a newStr[i]
//                 //   document.write(newStr[i]);   // Exibir
//                 //   imprimir(newStr[i]);
//             } else {                         // Caso não tenha ','
//                 newStr[i] = str[i];          // Atribua o caractere atual para a newStr[i]    
//                 newStr[i] = ' ';             // Substitua o caractere atribuído na newStr[i] para um espaço
//                 //   document.write(newStr[i]);   // Exibir
//                 //  imprimir(newStr[i]);
//             }
//         } else {                             // Caso o IF não entre, ou seja, caso não encontre os caracteres passados, então só imprima a str[i] com o caractere original
//             newStr[i] = str[i]              // Atribua o caractere atual para a newStr
//             //   document.write(newStr[i]);
//             // imprimir(newStr[i]);
//         }
//         if (str[i] == ':') {                  // Após sair do primeiro if/else, vai verificar se tem ':' e adicionar '........'
//             newStr[i] = '.................:';
//             //  document.write(newStr[i]);
//             //imprimir(newStr[i]);
//         }
//         // imprimir(newStr);
//     }
//     //document.write(newStr);

//     // Aqui vai fazer um laço para percorrer toda string, já alterada
//     for (let j = 0; j < str.length; j++) {
//         if (newStr[j] == ',') {
//             newStr[j] == " ";
//         }
//         imprimir(newStr[j]); // Chamando a função, posição a posição. Aqui é o problema
//     }    
// }


// function imprimir(newStr) { //ERRO
//     document.write(newStr);
//     // let janela = window.open();
//     // janela.document.write("<br><br>");
//     // janela.print();
//     // limpaTela();
//     // localStorage.removeItem('relatorioImpressao');
//     // let janela = window.open();
//     // janela.document.write(str);
// }

// TESTES ATÉ AQUI
//------------------------------------------------------------------------------

