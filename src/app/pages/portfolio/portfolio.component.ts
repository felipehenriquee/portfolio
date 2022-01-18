import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  itens:any = ["red","blue","green","violet", "pink","yellow","limegreen","orange"];
  verde = "#C3F73A";
  laranja = "#FF4A1C";
  preto = "#37393A"
  constructor() { }

  ngOnInit(): void {
    this.itens=[
      {foto: './assets/portfolio/porto.png', titulo: 'Jornal Porto do Pecém', descricao:'É um website jornalístico portuário com objetivo de informar sobre os principais acontecimentos portuários do segundo maior porto do Brasil. Trabalho feito para um cliente, utilizando html, css e php. Fui responsável em preparar toda a identidade visual.', link:'https://jornalportodopecem.com.br/', cor: this.verde},
      {foto: './assets/portfolio/concerto.png', titulo: 'Concerto de Natal da Catedral', descricao:'Site para evento de natal da Catedral Metropolitana de Fortaleza, onde reúne as belas vozes que interpretam músicas natalinas. Site feito utilizando html, css e javascript', cor:this.laranja, link:'http://concertodenataldacatedral.com.br/'},
      {foto: './assets/portfolio/unieventos.jpg', titulo: 'Eventboo', descricao:'É um website para divulgação de eventos, projetado em 3d para imersão do usuário como se estivesse no evento presencialmente. Site feito em html, css e javascript', cor:this.laranja, link: 'https://felipehenriquee.github.io/eventboo/'},
      {foto: './assets/portfolio/ufc.jpg', titulo: 'UFC Sustentável', descricao:'O app mostra informações, através de realidade aumentada, sobre as árvores do campus. Onde o usuário aponta a câmera para o QrCode, e assim as informações aparecem direto na tela do smartphone. O app foi desenvolvido utilizando Unity', cor:this.verde, link: "https://youtu.be/tP5BLE5mMuw"},
      {foto: './assets/portfolio/digimon.png', titulo: 'Digimon Worlds Collide', descricao:'Após um vírus assolar o mundo digital, Patamon acabou preso no mundo dos games do Super Nintendo, e agora ele precisa passar por vários desafios e conseguir voltar para o seu mundo. Jogo feito em Gamemaker', cor:this.verde, link: "https://www.youtube.com/watch?v=nGL9iGExwL0&ab_channel=FelipeHenriqueAra%C3%BAjo"},
      {foto: './assets/portfolio/jeep.jpg', titulo: 'Novo Jeep Commander', descricao:'É um website para divulgar o novo Jeep Commander, utilizando tecnologia de realidade aumentada, assim o cliente poderia ver como o carro ficaria em seu ambiente. Site foi feito utilizando html, css e javascript', cor:this.laranja, link: "https://felipehenriquee.github.io/jeep/home.html"},
      {foto: './assets/portfolio/nacional.jpg', titulo: 'Nacional Gas', descricao:'É um website de catálogo de tanques da Nacional Gás, o usuário tem como opção ver o produto em sua casa utilizando a tecnologia de realidade aumentada. Site desenvolvido em Angular.', cor:this.verde, link: "https://nacionalgastanques.simplexr.com.br/#/"},
      {foto: './assets/portfolio/xepa.jpg', titulo: 'Xepa', descricao:'Afim de diminuir o desperdício de comida, Xepa é um aplicativo para os estabelecimentos venderem as comidas que sobraram com um preço mais barato. Aplicativo feito para um cadeira da faculdade, aplicativo feito em flutter. E eu fiquei responsável de fazer a parte administrativa com angular e o back com Nodejs', cor:this.laranja},
    ]


  }

}
