function imprimirRelatorio() {

    //let razao_social = document.getElementById('razao-social')
    let display_razao_social = document.getElementById('display-razao-social')
    let numero_nf = document.getElementById('display-numero-nf')
    let data_emissao = document.getElementById('display-data-emissao')
    let chave_acesso = document.getElementById('display-chave-acesso')
    let valor = document.getElementById('display-valor')

    let janela = window.open();
    janela.document.write(`Razão Social: ${display_razao_social.value} <br> <br>`)
    janela.document.write(`Numero NF: ${numero_nf.value} <br> <br> `);
    janela.document.write(`Emissao NF: ${data_emissao.value}<br> <br>`)
    janela.document.write(`Chave Acesso: ${chave_acesso.value} <br> <br>`)
    janela.document.write(`Valor NF: ${valor.value} <br> <br>`)
    //janela.document.write('Status: Autorizada')                 

    //janela.document.close();
    janela.print();



    // display_razao_social.innerHTML = razao_social.value
    // numero_nf.innerHTML = '123'
    // data_emissao.innerHTML = '05/11/2021'
    // chave_acesso.innerHTML = '1234567891234567891234567891234567891234567'
    // valor.innerHTML = "R$ 1250,00"
}




//    function imprimirRelatorio(){

//     //let dados = document.querySelector('#dados').innerHTML;
//     //Esta declarações são os valores dos campos na tela de relatório
//     let janela = window.open(',','','width: 100,', 'height: 100');
//     let cnpj = document.getElementById('cnpj')
//     let razao_social = document.getElementById('razao-social')
//     //let data_final = document.getElementById('data-final')
//     let data_inicial = document.getElementById('data-inicial')
//     //let displ_num_nf = document.getElementById('display-numero-nf')
//    // let displ_data_emissao = document.getElementById('display-data-emissao')
//     //let displ_chave_acesso = document.getElementById('display-chave-acesso')
//     //let displ_valor = document.getElementById.ById('display-valor')

//         window.open();
//         janela.document.write('<html><head>');
//         janela.document.write('<title></title></head>');
//         janela.document.write('<body>');
//         janela.document.write(`${razao_social.value} <br> <br>` )
//         janela.document.write(`Numero NF ${555959999} <br> <br> `);
//         janela.document.write(`Emissao NF ${'05/12/1950'}<br> <br>`)
//         janela.document.write(`Chave Acesso ${'262262114fgd4wsd44g88sd16g9dg49fdg8k49fh849d'} <br> <br>`)
//         janela.document.write('Status: Autorizada')


//         janela.document.write('</body></html>');

//         //janela.document.close();
//         janela.print();  

// }


/*
<h2><strong>--- REPX - XML e NFe ---</strong></h2>
<h3><strong>Relatórios<br></strong></h3>
<p>- Número NF-e: </p>
<p>- Data Emissão: </p>
<p>- Razão Social: </p>
<p>- Chave de Acesso: </p>
<p>- Valor: </p>


janela.document.write('<html><head>');
janela.document.write('<title> Gerando PDF</title></head>');
janela.document.write('<body>');
janela.document.write(dados);
janela.document.write('</body></html>');
*/