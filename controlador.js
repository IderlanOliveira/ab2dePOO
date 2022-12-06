let divResultadoDoFiltro = document.getElementById('resultadoDoFiltro')

function quandoClicarNoBotaoSkills() {
  divResultadoDoFiltro.innerHTML = ''

  for (let i = 0; i < listaDeSkills.length; i++) {
    divResultadoDoFiltro.innerHTML += ` <div class="card">
    <h1> Título: ${listaDeSkills[i].titulo}</h1>
    <img src='img/${listaDeSkills[i].img}'>
    <h3> Descrição: ${listaDeSkills[i].descricao}</h3>
    </div>        
    `
  }
}
