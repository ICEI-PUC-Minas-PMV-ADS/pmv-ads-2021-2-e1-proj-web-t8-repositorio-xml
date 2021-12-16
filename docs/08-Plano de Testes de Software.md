5. Plano de Testes de Software  

Os requisitos para realização dos testes de software são:  

    Site publicado na Internet;  

    Navegador da Internet - Chrome, Firefox ou Edge;  

    Uso de local storage ou Banco de dados relacionais ou simulação interna;  

 Os testes funcionais a serem realizados no aplicativo são descritos a seguir: 

  

  

Caso de Teste  
	

CT-01 – Ser capaz de procurar uma XML de acordo com os campos de data inicial, data final, razão social e CNPJ inseridos nos campos de entradas de dados  

Requisitos Associados  
	

RF-01 - O site deve apresentar as informações da empresa solicitante de acordo com o que foi inserido nos campos de buscas   

  

Objetivo do Teste  
	

Verificar se a função procurar está buscando corretamente os dados da nota fiscal  

Passos  
	

1) Acessar o Navegador  

2) Informar o endereço do Site  

3) Fazer o login no sistema ou realizar o cadastro no mesmo  

4)Acessar a tela de “relatórios”  

5) Buscar um relatório com as seguintes informações :”Data inicial e data final, Razão social e CNPJ  

Critérios de Êxito  
	

    Deverá mostrar corretamente após selecionar a opção ‘’imprimir’’ um relatório de acordo com as informações escolhidas no próprio navegador  

    Também deve dar opção de “salvar como PDF”, onde será possível escolher o local em que o arquivo de relatório será salvo no computador do usuário  

  

  

 

Caso de Teste  
	

CT-02 – Ser capaz de realizar o download das principais informações da nota fiscal procurada  

Requisitos Associados  
	

RF-03 - O site deve dar opção de permitir o download do arquivo em PDF OU permitir visualizar o arquivo no próprio navegador  

Objetivo do Teste  
	

Verificar se após a inserção de dados o sistema possibilita a visualização e o download do relatório  

Passos  
	

1) Acessar o Navegador  

2) Informar o endereço do Site  

3) Fazer o login no sistema ou realizar o cadastro 

4)Acessar a tela de “relatórios”  

5)Buscar um relatório de com as seguintes informações :”Data inicial e data final, Razão social e CNPJ  

6)Selecionar a opção “Imprimir” após os valores como: Número de NF, data de emissão, razão social, chave de acesso e valor aparecerem  

  

Critérios de Êxito  
	

A página deve ser capaz de buscar corretamente os itens de acordo com o que foi inserido nos campos de busca e ser capaz de realizar o download do PDF gerado com as devidas informações da nota fiscal do solicitante  

  

  

  5.1 Casos de teste  

    CT-02  

    Realizar busca de notas por nome empresa; 

    Acionar botão procurar;  

    Exibir na tela dados relativos à empresa;  

    Opção de imprimir;  

    Gerar relatório para impressão ou salvar em PDF;  

    Relatório fica em aberto em nova janela para consulta.  

 

5.2 Registro de Testes de Software   

  
