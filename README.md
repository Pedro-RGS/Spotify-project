
# Projeto réplica do Spotify

Esse projeto foi criado durante uma imersão de quatro dias realizada pela __Hashtag Programação__ com o intuito de aprender mais sobre as tecnologias usadas e aplicá-las em um projeto.

Basicamente, esse projeto funciona como um Spotify. É possível selecionar artistas para entrar em seus perfis, selecionar suas músicas e dar _play_ ou _pause_ nelas, também é possível ir para próximas músicas aleatoriamente com os botões de _backward step_ e _forward step_.

## Tecnologias

Para o projeto foram usadas as seguintes tecnologias:

### Front-end
* React
* JavaScript
* Vite

### Back-end
* JavaScript
* NodeJS
* MongoDB

## Instalação

Lembretes

-> Para executar um arquivo .js com NodeJS é preciso usar o seguinte comando no terminal:
`node <path arquivo>`
Ex. `node ./api/server.js`

-> Para parar processos basta usar o comando `Ctrl + c`

O projeto é composto de duas pastas: Front-end e Back-end. Quando baixado, é necessário instalar os módulos do NodeJS nessas duas pastas, para isso digite no terminal:

```
cd back-end
npm install
cd ..
cd front-end
npm install
```

Nesse ponto da execução você vai precisar de uma conta, cluster e banco de dados no MongoDB, esses passos não serão abordados aqui.

* Instale o módulo dotenv para usar variáveis de ambiente usando o comando:
```
npm install dotenv --save
```
* Após isso, crie uma pasta chamada **.env** na raiz da pasta back-end e crie duas variáveis, uma chamada **DB_URI** para que você coloque a string de conexão com o MongoDB e outra chamada **DB_NAME** para que você coloque uma string que representa o nome do seu banco.

* No seu banco de dados crie duas Collections: **songs** e **artists**

* Execute os arquivos `connect.js` e `populate.js` que estão na pasta back-end para conectar e povoar o banco de dados, respectivamente. Quando o banco estiver devidamente populado, pare o processo.

* Agora só é preciso executar o arquivo `server.js` da pasta back-end e usar o comando `npm run dev` da pasta front-end. Com o servidor e a interface sendo executados localmente, basta entrar na URL dada pelo Vite e testar o projeto.
