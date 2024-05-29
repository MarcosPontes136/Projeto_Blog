<h2>
  Projeto Meu Blog - RELEASE - 1.0
</h2>
<h2>
  Imagem Docker (05/2024) 
</h2>
<p>
  Imagem criada e disponibilizada no docker hub.
  <p> 
    Comando usado para gerar imagem: <span style="color:red; font-weight:bold;">docker build -t projeto_blog:v2 .</span>
  </p>
</p>
<p>
  <u><i>https://hub.docker.com/repository/docker/marcospontes/projeto_blog/general</i></u>
</p>
<br>
<h2>
  Update Backend - Envia curriculo em PDF para o site. (05/2024) 
</h2>
<p>
  Agora existe o envio de arquivo, a onde é passado um base 64 e transforma o mesmo em PDF para envio na requisição.
</p>
<p>
  <u><i>https://github.com/MarcosPontes136/microsservice_MessageFeed</i></u>
</p>
<br>
<h2>
  Update Backend - Envio de Email. (05/2023) 
</h2>
<p>
  O envio de email já é preparado para o DB e usa o cloud AMQP com RabbitMQ para mensageiro.
</p>
<p>
  <u><i>https://github.com/MarcosPontes136/microsservico_e-mail</i></u>
</p>
<br>
<h2>
  Update Backend - Listar mensagens no feed do site. (05/2023) 
</h2>
<p>
  O lista mensagem é focado em mostrar comentários deixados no site (já é preparado para incluir DB).
</p>
<p>
  <u><i>https://github.com/MarcosPontes136/microsservice_MessageFeed</i></u>
</p>
<br>
<div align="center">
    <img src="./src/assets/video/apresentacao_site.gif" width=900" height="350">
</div>
<div align="center">
  <h4 style="font-size: 16px; font-weight:bold;">
    <br>
    Esse projeto foi criado com intuito em aprender sobre Node.js.
    <br>
    Hoje em dia, após algum tempo de experiência, resolvi migrar totalmente o Backend em arquitetura de microsserviço com Java.
    <br>
    O FrontEnd também houve mudanças, foi migrado para o Angular 12+
    <br><br>
    Foi incluido o Docker nessa nossa atualização (05/2024). 
    <br>
    Esta sendo incluido támbem o AWS EC2 para teste, o mesmo tem cobrança por uso e será desabilitado em 06/2024.
    <br><br>
  </h4>
</div>
<div>
  De inicio foi gerado o arquivo json usando:
  <br>
</div>

```shell script
npm init -y
```

```shell script
npm i json-server
```

<h3>SPA(Single-Page Application) Angular</h3>
Seguindo o projeto, foi criado na parte de frontEnd usando angular algumas pastas: contato, feed, footer, home e navbar com o comando:

```shell script
ng g c (nome da pasta para criar)
```

<h2>Outras instalações no frontend:</h2>

```shell script
npm i bootstrap
```

```shell script
npm i jquery@~3.4.1
```

```shell script
npm i popper.js
```

```shell script
ng add @fortawesome/angular-fontawesome
```

<p>Instalar as 3 opções: free Solid icons, Free Regular Icons e Free brands Icons.</p><br>

<h2>Configurar na pasta angular.json</h2>

```shell script
            "styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "./node_modules/jquery/dist/jquery.js",
              "./node_modules/bootstrap/dist/js/bootstrap.js",
              "./node_modules/popper.js/dist/umd/popper.min.js"
            ]
          },
```
