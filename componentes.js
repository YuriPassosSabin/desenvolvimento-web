



//index.
function descricao() {
       var conteiner = document.getElementById("opcoes");
       var newPagina = conteiner.querySelector("div");



       var content = `<p id="paginas">
        <button onclick="saudeMental()">saude mental</button>
        <img src="img/consultaPisicoligo.jpeg" alt="consulta com psicologo" title="saudemental" height="200px" width="350px">
        <button onclick="servico()">serviços</button>
        <img src="img/consulta-saudemental.jpg" alt="opições de serviço" title="servicos" width="350px" height="200px">
        </p>`;

       newPagina.innerHTML = content;
}
function saudeMental() {
       var conteiner = document.getElementById("opcoes");
       var newPagina = conteiner.querySelector("div");



       var content =
              `<div class = "blocoSaude">
       <img src="img/consulta-saudemental.jpg" alt="opições de serviço" title="servicos" width="300px">
       
       <div class = "textoSaude">
         <p id ="paginas">
       
        Nesta página você pode encontrar dicas e soluções para lidar
        com diversos tipos de problemas que você possa estar envolvendo
        seu psicológico.<br>
        </p>
        <a href="saude.html">Clique aqui para se direcionar a página!</a>
        <button onclick="descricao()">apagar</button>
        <button onclick="servico()">serviços</button>
       </div>
</div>`
       newPagina.innerHTML = content;
}
function servico() {
       var conteiner = document.getElementById("opcoes");
       var newPagina = conteiner.querySelector("div");



       var content =
              `
<div class = "blocoSaude">
       <img src="img/consultaPisicoligo.jpeg" alt="consulta com pisicologo"
        title="saudeMental" width="350px>

  <div class ="textoSaude">

       <p id ="paginas">
        Aqui você pode entrar em contato com o suporte do site
        para trazer seus feedback ou para contratar um profissional
        especializado para acompanhamento.<br>
       </p>

        <a href="saude.html">Clique aqui para se direcionar a página!</a>
        <button onclick="descricao()">apagar</button>
        <button onclick="saudeMental()">saude mental</button>
  </div>
</div>`

       newPagina.innerHTML = content;
}

//saude mental.
function ansiedade() {
       var conteiner = document.getElementById("bloco-informativo");
       var newPagina = conteiner.querySelector("div");

       var content = `<p id ="paginas">
         <h2>Problemas com Ansiedade?</h2>
         <img src="img/ansiedade.png" alt="Ansiedade" class="ilustração-de-disturbios">

         <p class="dicas">Segue 4 dicas práticas que podem melhorar seu bem estar em momentos de ansiedade!</p>

       <!--Dicas com emojis ilustrativos-->
       <p class="dicas">🧘‍♀️Respire! Respire fundo e solte devagar.</p>

       <p class="dicas">📝Anote! Escrever o que está sentindo ajuda a organizar os pensamentos.</p>

       <p class="dicas">🚶Movimente-se! Uma caminhada leve pode ajudar a liberar a tensão.</p>

       <p class="dicas">📵Evite excesso de tela! Especialmente antes de dormir.</p>
         <strong>Você não precisa enfrentar isso sozinho!</strong><br>
         <button onclick="apagar()">apagar</button>
         </p>`;

       newPagina.innerHTML = content;
}
function apagar() {
       var conteiner = document.getElementById("bloco-informativo");
       var newPagina = conteiner.querySelector("div");

       var content = `<p id = "paginas">
         <button onclick="estresse()">estresse</button>
         <button onclick="ansiedade()">ansiedade</button>
         <button onclick="depressao()">depressão</button>
        </p>`;

       newPagina.innerHTML = content;
}
function depressao() {
       var conteiner = document.getElementById("bloco-informativo");
       var newPagina = conteiner.querySelector("div");

       var content = `<p id="paginas">
              <h2>Prevenção a depressão</h2>
              <img src="img/depressao.jpeg" alt="depressão" class="ilustração-de-disturbios">

              <p class="dicas">Segue 4 dicas práticas que podem previnir a depressão!</p>

              <!--Dicas com imagens ilustrativas-->
       
              <p class="dicas"> 🏃‍♂️Exercícios físicos! Quando você pratica atividade física, seu corpo libera substâncias chamadas endorfinas e serotonina, que são neurotransmissores relacionados à sensação de bem-estar e prazer. </p>

              <p class="dicas">🍽️Alimentação! Uma dieta rica em frutas, legumes, verduras e proteínas magras pode contribuir para o bem-estar emocional. </p>

              <p class="dicas">🙏Ser grato! A gratidão pode ajudar a mudar a perspectiva e a focar em coisas positivas. </p>

              <p class="dicas">🧑‍🤝‍🧑Atividades sociais! Estar perto de amigos, familiares. Dedicar o seu tempo para atividades que lhe fazem bem, como hobbies, leitura, música, para manter a mente saudável.</p>

              <strong></strong><br>
              <button onclick="apagar()">apagar</button>
              </p>`;

       newPagina.innerHTML = content;
}
function estresse() {
       var conteiner = document.getElementById("bloco-informativo");
       var newPagina = conteiner.querySelector("div");

       var content = `<p id="paginas">
              <h2></h2>
              <img src="img/estresse.jpeg" alt="estresse" class="ilustração-de-disturbios">

              <p class="dicas">Segue 4 dicas práticas que ajudam a lidar melhor com o estresse!</p>
               
              <!--Dicas com imagens ilustrativas-->
              <p class="dicas">🧘‍♂️Respiração e meditação! Técnicas de respiração e meditar ajudam a acalmar a mente, reduzir a ansiedade e controlar o estresse.</p>

              <p class="dicas">🏞️Contato com a natureza! Caminhar em parques, praças ou ter momentos ao ar livre ajuda a diminuir a tensão e traz bem-estar.</p>

              <p class="dicas">🎨Momentos de lazer! Fazer atividades que você gosta, como ouvir música, desenhar, ler ou praticar um hobby, ajuda a relaxar e aliviar o estresse.</p>

              <p class="dicas">🤝Conexões sociais! Conversar, estar com amigos e familiares, trocar ideias e se sentir apoiado faz muita diferença no controle do estresse.</p>
              <button onclick="apagar()">apagar</button>
              </p>`;

       newPagina.innerHTML = content;
}
//serviço.
var comentario = [];
function comentar() {
       var coment = document.getElementById("bot-comentario");
       var campo = document.getElementById("texto-comentario");
       comentario.push(coment.value);
       if (campo.innerHTML == "") {
              campo.innerHTML = coment.value + "<br>";
       } else {
              campo.innerHTML = campo.textContent + "<br>" + coment.value + "<br>";
       }
       coment.value = "";
}
var profissional = [
       { nome: "joão", numero: "909875555" },
       { nome: "rodrigo", numero: "" },
       { nome: "amanda", numero: "" },
];
let contatos = document.getElementById("contatos");
let listaContatos = document.createElement("ul");
for (var i = 0; i < profissional.length; i++) {
       var item = document.createElement("li");
       item.textContent = profissional[i].nome + " - " + profissional[i].numero;
       listaContatos.appendChild(item);
}
contatos.appendChild(listaContatos);
