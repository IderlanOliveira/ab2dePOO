let divResultadoDoFiltro = document.getElementById('resultadoDoFiltro')

function quandoClicarNoBotaoSkills() {
  divResultadoDoFiltro.innerHTML = ''

  // for (let i = 0; i < listaDeSkills.length; i++) {
  divResultadoDoFiltro.innerHTML += ` 
    
    <div class="card">
    <h1 class='cardh1'>${listaDeSkills[0].titulo}</h1>
    <img src='img/${listaDeSkills[0].img}' class="cardimg">
    <p class='cardp'>${listaDeSkills[0].descricao}</p>
    </div>

    <div class="card1">
    <h1 class='cardh1'>${listaDeSkills[1].titulo}</h1>
    <img src='img/${listaDeSkills[1].img}' class="cardimg">
    <p class='cardp'>${listaDeSkills[1].descricao}</p>
    </div>

    <div class="card2">
    <h1 class='cardh1'>${listaDeSkills[2].titulo}</h1>
    <img src='img/${listaDeSkills[2].img}' class="cardimg">
    <p class='cardp'>${listaDeSkills[2].descricao}</p>
    </div>

    <div class="card3">
    <h1 class='cardh1'>${listaDeSkills[3].titulo}</h1>
    <img src='img/${listaDeSkills[3].img}' class="cardimg">
    <p class='cardp'>${listaDeSkills[3].descricao}</p>
    </div>
         
        `
}
// }
