//index.

function descricao(){
 var conteiner = document.getElementById("opcoes");
 var newPagina = conteiner.querySelector("div");



 var content = `<p id="paginas">
        <button onclick="saudeMental()">saude mental</button>
        <img src="img/consultaPisicoligo.jpeg" alt="consulta com psicologo" title="saudemental">
        <button onclick="servico()">serviços</button>
        <img src="img/servicos.jpeg" alt="opições de serviço" title="servicos">
        </p>`;

 newPagina.innerHTML = content;
}
function saudeMental(){
 var conteiner = document.getElementById("opcoes");
 var newPagina = conteiner.querySelector("div");



 var content = `<p id ="paginas">
        nesta pagina você pode encontrar dicas e soluções para lidar<br>
        com diversos tipos de problemas que você possa ter envolvendo<br>
        seu psicologico.<br><br>
        <a href="saude.html">clique aqui para se direcionar a pagina</a>
        <button onclick="descricao()">apagar</button>
        <img src="" alt="" title="">
        <button onclick="servico()">serviços</button>
        <img src="img/servicos.jpeg" alt="opições de serviço" title="servicos">
        </p>`;

 newPagina.innerHTML = content;
}
function servico(){
 var conteiner = document.getElementById("opcoes");
 var newPagina = conteiner.querySelector("div");



 var content = `<p id ="paginas">
        aqui você pode entrar em contato com o suporte do site<br>
        para trazer seus feedback ou para contratar um proficional<br>
        especializado para acompanhamento.<br><br> 
        <a href="saude.html">clique aqui para se direcionar a pagina</a>
        <button onclick="descricao()">apagar</button>
        <img src="img/" alt="" title="">
        <button onclick="saudeMental()">saude mental</button>
        <img src="img/consultaPisicoligo.jpeg" alt="consulta com pisicologo" title="saudeMental">
        </p>`;

 newPagina.innerHTML = content;
}

//saude mental.
function ansiedade(){
 var conteiner = document.getElementById("bloco-informativo");
 var newPagina = conteiner.querySelector("div");

 var content=`<p id ="paginas">
         <h2>Problemas com Ansiedade?</h2>
         <img src="img/ansiedade.png" alt="Ansiedade" class="ilustração-de-disturbios">

         <p class="dicas">Segue 4 dicas práticas que podem melhorar seu bem estar em momentos de ansiedade!</p>

         <!--Dicas com imagens ilustrativas-->
         <p class="dicas"> <img src="img/pulmao_1.png">Respire! Respire fundo e solte devagar.</p>

         <p class="dicas"><img src="img/anota.png">Anote! Escrever o que está sentindo ajuda a organizar os pensamentos.</p>

         <p class="dicas"><img src="img/caminhada.png" alt="">Movimente-se! Uma caminhada leve pode ajudar a liberar a
            tensão.</p>

         <p class="dicas"> <img src="img/tela.png">Evite excesso de tela! Especialmente antes de dormir.</p>

         <strong>Você não precisa enfrentar isso sozinho!</strong><br>
         <button onclick="apagar()">apagar</button>
         </p>`;

 newPagina.innerHTML = content;
}
function apagar(){
 var conteiner = document.getElementById("bloco-informativo");
 var newPagina = conteiner.querySelector("div");

 var content=`<p id = "paginas">
         <button onclick="estresse()">estresse</button>
         <button onclick="ansiedade()">ansiedade</button>
         <button onclick="depressao()">depressão</button>
        </p>`;

 newPagina.innerHTML = content;
}
function depressao(){
 var conteiner = document.getElementById("bloco-informativo");
 var newPagina = conteiner.querySelector("div");

 var content=`<p id="paginas">
              <h2>Prevenção a depressão</h2>
              <img src="img/depressao.jpeg" alt="depressão" class="ilustração-de-disturbios">

              <p class="dicas">Segue 4 dicas práticas que podem previnir a depressão!</p>

              <!--Dicas com imagens ilustrativas-->
              <p class="dicas"> <img src="img/atividadesFisicas.png" class="icons">Exercícios físicos! Quando você pratica atividade física, seu corpo libera substâncias chamadas endorfinas e serotonina, que são neurotransmissores relacionados à sensação de bem-estar e prazer. </p>

              <p class="dicas"><img src="img/" class="icons">Alimentação! Uma dieta rica em frutas, legumes, verduras e proteínas magras pode contribuir para o bem-estar emocional. </p>

              <p class="dicas"><img src="img/" class="icons">Ser grato! A gratidão pode ajudar a mudar a perspectiva e a focar em coisas positivas. </p>

              <p class="dicas"> <img src="img/" class="icons">Atividades sociais! Estar perto de amigos, familiares. Dedicar o seu tempo para atividades que lhe fazem bem, como hobbies, leitura, música, para manter a mente saudável.</p>

              <strong></strong><br>
              <button onclick="apagar()">apagar</button>
              </p>`;

 newPagina.innerHTML = content;
}
function estresse(){
 var conteiner = document.getElementById("bloco-informativo");
 var newPagina = conteiner.querySelector("div");

 var content=`<p id="paginas">
              <h2></h2>
              <img src="img/estresse.jpeg" alt="estresse" class="ilustração-de-disturbios">

              <p class="dicas">Segue 4 dicas práticas que ajudam a lidar melhor com o estresse!</p>
               
              <!--Dicas com imagens ilustrativas-->
              <p class="dicas"> <img src="img/" class="icons">Exercícios físicos! Quando você pratica atividade física, seu corpo libera substâncias chamadas endorfinas e serotonina, que são neurotransmissores relacionados à sensação de bem-estar e prazer. </p>

              <p class="dicas"><img src="img/" class="icons">Alimentação! Uma dieta rica em frutas, legumes, verduras e proteínas magras pode contribuir para o bem-estar emocional. </p>

              <p class="dicas"><img src="img/" class="icons">Ser grato! A gratidão pode ajudar a mudar a perspectiva e a focar em coisas positivas. </p>

              <p class="dicas"> <img src="img/" class="icons">Atividades sociais! Estar perto de amigos, familiares. Dedicar o seu tempo para atividades que lhe fazem bem, como hobbies, leitura, música, para manter a mente saudável.</p>

              <button onclick="apagar()">apagar</button>
              </p>`;

 newPagina.innerHTML = content;
}
//serviço.