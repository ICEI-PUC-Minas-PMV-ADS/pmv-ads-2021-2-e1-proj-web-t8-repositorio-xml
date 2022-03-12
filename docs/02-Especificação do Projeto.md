# 2 - Especificações do Projeto

A definição do problema apresentado nesse projeto e suas respectivas características, foram levantadas a partir de entrevistas com os usuários que lidam direta ou indiretamente com o tema em questão. Todos os pontos relatados foram ao encontro dessas opiniões e experiências dos envolvidos.   

As informações relativas ao processo de pesquisa e entrevista com as partes estão na forma de persona e histórias de usuários.

## 2.1 - Personas

Os profissionais que colaboraram no processo de entendimento do problema estão apresentados abaixo:  
________________________________________________________________________________________
Nome | Idade | Ocupação
---|---|---
![Contadora](https://user-images.githubusercontent.com/91077484/136856943-c6c93faa-0d13-412d-91e5-8a7c2f432d67.png)**Ana Alice Soares** | 27 anos | Estudante de Enfermagem. Mãe solteira, também trabalha meio período em uma livraria local pertencente ao avô de uma de suas amigas, com o intuito de conseguir manter seus estudos e ainda colaborar em casa e na criação de seu filho..  

Aplicativos | Motivações | Frustrações | Hobbies/História
---|---|---|---
Instagram;<br> TikTok;<br> |  Encontrar o equilíbrio entre investir em si mesma para alcançar seu sonho de ser enfermeira, agora que está de volta ao ensino superior, e prover as melhores condições e oportunidades para o crescimento de seu filho, agora com 5 anos, colaborando em suas despesas que são arcadas majoritariamente pelos avós do menino (seus pais). | Não sobra dinheiro algum para extras (roupas, cursos, cinema, entre outros);<br>Pouco ou nenhum tempo livre | Gosta de gravar conteúdo para a rede social Instagram sobre ser mãe de primeira viagem e solteira, tendo uma base modesta, mas sólida de seguidores. Ultimamente tem se interessado por ambientalismo e sustentabilidade.<br>Tornou-se mãe solteira aos 22 anos, quando ainda estava no 3º período de enfermagem; decidiu dar uma pausa nos estudos por uns anos até que seu filho fosse maior.   

 ________________________________________________________________________________________
 Nome | Idade | Ocupação
---|---|---
![Empresário](https://user-images.githubusercontent.com/91077484/136857072-9d8dabcd-d3a7-43fa-95b3-6c69cb6e0ba3.png)<br>**João Guilherme Pereira** | 66 anos | Empresário e proprietário de um supermercado de pequeno porte. 

Aplicativos | Motivações | Frustrações | Hobbies/História
---|---|---|---
Facebook. | Ensinar o filho sobre a empresa para que ele possa dar continuidade e até mesmo expandir. | Alto custo na compra de produtos para revenda;<br> Inflação diminuindo o poder de compra dos clientes;<br> Despreparo do filho para assumir o negócio da família. | Assistir futebol com o filho Mateus;<br> Adora o silêncio da pescaria no fim de semana.
________________________________________________________________________________________
 Nome | Idade | Ocupação
---|---|---
![Marketing](https://user-images.githubusercontent.com/91077484/136857076-523e11fb-09a5-4bb5-ac53-c30230ae78f8.png)**Cristina Vieira Netto** | 39 anos | Tecnóloga em marketing, cursando bacharelado em administração, empreendedora e proprietária de microempresa no ramo de publicidade. 

Aplicativos | Motivações | Frustrações | Hobbies/História
---|---|---|---
 Instagram;<br> Facebook;<br> Tik Tok. | Expandir a empresa e abrir filiais. | Dificuldade no início do negócio;<br> Dificuldade de implementação de tecnologia para expandir a empresa. | Ama música, tendo preferência para rock e pop;<br> Gosta de uma boa leitura, especialmente de romances.    
________________________________________________________________________________________


 ## 2.2 - Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|  EU COMO... `PERSONA`  |      QUERO/PRECISO ... `FUNCIONALIDADE`      |                  PARA ... `MOTIVO/VALOR`                    |
|------------------------|----------------------------------------------|-------------------------------------------------------------|
| Ana Alice Soares       | manter registro de XML em repositório        | evitar perdas de arquivos e multas                          |
| Ana Alice Soares       | emitir relatórios mensais                    | analisar fluxo de notas de entrada/saída                    |
| João Guilherme Pereira | baixar XML e PDF de NF-e                     | impressão de notas e envio para cliente                     | 
| João Guilherme Pereira | verificar NF-e emitidas para meu CNPJ        | conter prejuízo financeiro por emissão indevida             |
| João Guilherme Pereira | emitir relatórios diários de NF-e de entrada | verificar possíveis notas canceladas                        |
| Cristina Vieira Neto   | armazenar XML em plataforma online           | evitar perdas causadas por possíveis danos nos computadores |


## 2.3 - Lista de Requisitos

O escopo do projeto é apresentado em requisitos funcionais, descrevendo a interação do usuário com o sistema, e o em requisitos não funcionais, que define os quesitos de funcionamento do sistema. Os requisitos estão demonstrados nos quadros abaixo:  
<br></br>
## 2.3.1 - Requisitos Funcionais

|  ID |                                                 Descrição do Requisito                                                              | Prioridade |
|------|-------------------------------------------------------------------------------------------------------------------------------------|------------|
|RF-001| O sistema deverá permitir ao usuário buscar por notas fiscais filtrando por datas (mês e ano) e pela razão social da empresa        |    MÉDIA   | 
|RF-002| O sistema deverá permitir ao usuário cadastrar-se e receber um login e senha (que poderá ser alterada por ele)                      |    ALTA    |
|RF-003| O sistema deverá receber o arquivo de Nota Fiscal emitida pela SEFAZ a partir do seu computador e armazenar em sua conta de usuário |    ALTA    |  
|RF-004| O sistema deverá permitir o download dos arquivos em formato PDF e XML, individualmente ou em lote                                  |    MÉDIA   |  
|RF-005| O sistema deverá mostrar o status de NF-e                                                                                           |    MÉDIA   |
|RF-006|                                      REQUISITO REMOVIDO PELO PRODUCT OWNER                                                          |    null    | 
|RF-007| O sistema deverá permitir a emissão de relatórios de notas de entradas e saídas, conforme data estipulada pelo usuário              |    MÉDIA   |
|RF-008| O sistema deverá permitir o bloqueio de segurança para impedir edição dos arquivos                                                  |    ALTA    |

<br></br>
## 2.3.2 - Requisitos não Funcionais

|  ID   |                                                        Descrição do Requisito                                                              | Prioridade |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------------|
|RNF-001| O sistema deverá permitir que a plataforma possa ser migrada para outro servidor de hospedagem a cada 6 meses                              |    MÉDIA   | 
|RNF-002| O sistema não deverá utilizar mais que 1gb de memória RAM em relação ao navegador                                                          |    ALTA    | 
|RNF-003| O sistema não pode usar mais que 20% do uso da CPU                                                                                         |    ALTA    | 
|RNF-004| O sistema não deverá gerar arquivos maiores que 5mb, sendo de alguma forma comprimidos caso excedam esse valor                             |    ALTA    | 
|RNF-005| O sistema deverá ser capaz de processar os dados requiridos pelo usuário e gerar o formato do arquivo de sua escolha em até 5s             |    MÉDIA   | 
|RNF-006| O sistema deverá ser adaptável a várias formas de acesso, sendo por meio web, se ajustando de acordo com o tamanho de tela do mesmo        |    BAIXA   | 
|RNF-007| Implementação de uma API com o sistema do SEFAZ para a obtenção das NF-e, para que o usuário do sistema possa gerar suas notas             |    MÉDIA   | 

<br></br>
## 2.4 - Restrições

O projeto apresenta algumas limitações de ordem prática e de tecnologia em sua execução. As questões que limitam estão descritas na tabela abaixo:  

|  ID |                            Restrição                                  |
|-----|-----------------------------------------------------------------------|
|RE-01| A data final para a entrega do projeto será até 06/12/2021            |
|RE-02| O sistema deve ser restrito a tecnologia de Web no Front End          |
|RE-03| O sistema deve ser desenvolvido exclusivamente pelos membros do grupo | 
