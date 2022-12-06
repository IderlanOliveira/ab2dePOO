let divResultadoDoFiltro = document.getElementById('resultadoDoFiltro')

function quandoClicarNoBotaoSkills() {
  divResultadoDoFiltro.innerHTML = ''

  for (let i = 0; i < listaDeSkills.length; i++) {
    divResultadoDoFiltro.innerHTML += ` 
    
    <div class="card">
    <h1 class='cardh1'>${listaDeSkills[i].titulo}</h1>
    <img src='img/${listaDeSkills[i].img}' class="cardimg">
    <p class='cardp'>${listaDeSkills[i].descricao}</p>
    </div>
         
    `
  }
}
