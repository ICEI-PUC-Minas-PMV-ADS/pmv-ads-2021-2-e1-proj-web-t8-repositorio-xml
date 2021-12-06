// Getando relatório via array
function procurar() {
    let relatorio = {
        dados: [
            {
                numeroNF: '12',
                dataEmissao: '27/09/2021',
                razaoSocial: 'Amazing LTDA',
                chaveAcesso: '95687412365478954123698748752134564587963201',
                valorNF: 'R$ 2050.00'
            },
            {
                numeroNF: '234',
                dataEmissao: '17/11/2021',
                razaoSocial: 'Bia Bye LTDA',
                chaveAcesso: '98700002223335698012475802369582014578902555',
                valorNF: 'R$ 10000.00'
            },
            {
                numeroNF: '2369',
                dataEmissao: '28/10/2021',
                razaoSocial: 'Laticínios Big Leite LTDA',
                chaveAcesso: '14523698745690012000002236669877775012405555',
                valorNF: 'R$ 2200.00'
            },
            {
                numeroNF: '546',
                dataEmissao: '01/10/2021',
                razaoSocial: 'Abacate e Frutas SA',
                chaveAcesso: '12345678912345678912345678912345678912345678',
                valorNF: 'R$ 100.00'
            },
            {
                numeroNF: '2536',
                dataEmissao: '25/08/2021',
                razaoSocial: 'Ana Presentes Eireli',
                chaveAcesso: '12587996548963201254698756250000124445569852',
                valorNF: 'R$ 550.00'
            },
            {
                numeroNF: '546',
                dataEmissao: '15/10/2021',
                razaoSocial: 'Biotech Medicina SA',
                chaveAcesso: '966521000001255556666987532012548963250125482',
                valorNF: 'R$ 250.00'
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
        if (buscaNum == 0 && buscaRazaoSocial == false) {       // Se o user não digitou nada, então busca todo array
            //alert("entrou")
            exibirRelatorio(relatorio, i);
        }
        if (buscaNum) {                 // Se digitou numero NF, então compara
            if (buscaNum == relatorio.dados[i].numeroNF) {
                exibirRelatorio(relatorio, i)
            }
        }
        else if (buscaRazaoSocial) {        // Se digitou razão social, então compara
            // toUpperCase() para converter tudo para maiúscula, assim o usuário pode digitar em minúscula que não fará diferença
            let buscaRazaoUpper = buscaRazaoSocial.toUpperCase();
            let razaoSocialUpper = relatorio.dados[i].razaoSocial.toUpperCase()
            
            if (buscaRazaoUpper ==  razaoSocialUpper) {     // Segunda verificação devido a uppercase
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

// Imprimindo relatório
function imprimirRelatorio() {

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);          // Posição da chave no localStorage
        let value = localStorage.getItem(key);  // Passando o a chave para ler o valor

        if (key == "relatorioImpressao") {      // Pegando key somente do relatorioImpressao
            let str = value;
            formataString(str);
            limpaTela();
            localStorage.removeItem('relatorioImpressao');
        }
    }
}

function formataString(str) {
    // Array para salvar as posições e fazer as alterações.
    let newStr = [];            // Esse array será para salvar as alterações
    let endStr = [];            // Esse array será para concatenar a string  e passado para impressão

    // Varrendo a string que foi salva em 'str' na função imprimirRelatorio()
    for (let i = 0; i < str.length; i++) {
        // Comparando os caracteres para substituir, caso os encontre entra nas prox if else
        if (str[i] == '[' || str[i] == '{' || str[i] == '"' || str[i] == ',' || str[i] == ']' || str[i] == '}') {
            if (str[i] == ',') {              // Se a string original tiver ','    
                newStr[i] = str[i];           // Atribua o caractere de str[i] para newStr[i]
                newStr[i] = '<br>';           // Depois abribua o caractere <br> para saltar uma linha
            } else {                          // Caso não tenha ',', entra nesse else
                newStr[i] = str[i];           // Atribua o caractere de str[i] para newStr[i]   
                newStr[i] = ' ';              // Substitua o caractere atribuído na newStr[i] por um espaço
            }
        } else {                               // Caso o IF não entre, ou seja, caso não encontre os caracteres passados no primeiro if
            newStr[i] = str[i]                 // Atribua o caractere de str[i] para newStr[i]
        }
        if (str[i] == ':') {                     // Após sair do primeiro if/else, vai verificar se tem ':' e adicionar '........'
            newStr[i] = '.................:';    // Se tiver ':' na str[i], então atribua os caracteres '....' para a newStr[i]
        }
    }
    // Aqui vai fazer um laço para percorrer toda string, já alterada
    for (let j = 0; j < str.length; j++) {
        if (newStr[j] == ',') {
            newStr[j] == " ";
        }
        endStr += newStr[j];       // Concatenando a string alterada para passar em imprimir();            
    }
    janelaImprimir(endStr);     // Chamando impressão
}

// Abrindo janela de impressão
function janelaImprimir(endStr) {                      // Passando a string para impressão
    window.document.write("REPX - Relatórios<hr><br><br>");
    window.document.write(endStr, "<br>");                   // Exibindo dados do localStorage formatados em nova janela
    window.document.write("<br><br><hr>")
    window.print();
}


