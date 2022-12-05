class Skills {
  constructor(titulo, img, descricao) {
    this.titulo = titulo
    this.img = img
    this.descricao = descricao
  }
}

let skill1 = new Skills(
  'Programação',
  'prog.jpg',
  'CSS3, HTML5, JAVASCRIPT, MYSQL'
)
let skill2 = new Skills(
  'Solda Mig e Mag',
  'solda.jpg',
  'Preparar equipamentos, acessórios, consumíveis de soldagem e corte e peças a serem soldadas.'
)
let skill3 = new Skills(
  'Inglês Intermediário',
  'ingles.png',
  'Com formação certificada pela UFAL, através do projeto CCC em 2018.'
)
let skill4 = new Skills(
  'Excel Intermediário',
  'excel.jpg',
  'Certificada pelo SENAI, em 2017'
)

let listaDeSkills = []

listaDeSkills.push(skill1, skill2, skill3, skill4)
console.log(listaDeSkills)
