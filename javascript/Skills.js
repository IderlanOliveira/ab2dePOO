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
  'Css3, html5, javascript, mysql.'
)
let skill2 = new Skills(
  'Solda Mig e Mag',
  'solda.jpg',
  'Preparar equipamentos e corte de peças para soldagem.'
)
let skill3 = new Skills(
  'Inglês Intermediário',
  'ingles.png',
  'Converso, escuto e escrevo'
)
let skill4 = new Skills(
  'Excel Intermediário',
  'excel.jpg',
  'Certificada pelo SENAI, em 2017.'
)

let listaDeSkills = []

listaDeSkills.push(skill1, skill2, skill3, skill4)
console.log(listaDeSkills)
