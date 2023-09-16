//variaveis da bolinha 
let xbolinha = 300;
let ybolinha = 200;
let diametro = 13;
let raio = diametro / 2;


// velocidade da bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;


// variaveis da raquete 
let xraquete = 5;
let yraquete = 150;
let raquetecomprimento = 10;
let raquetealtura = 90;

let colidiu = false;

//placar do jogo
let pontos = 0;

let pontos_oponente = 0;

//variaveis oponente

let xraqueteOponente = 585;
let yraqueteOponente = 150;
let comprimento_oponente = 10;
let altura_oponente =90;

//sons
let raquetada;
let trilha;
let ponto;

function sons(){

  raquetada = loadSound("raquetada.mp3");
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");

}

function setup() {

  createCanvas(600, 400);
  
}

function draw() {

  background(0)
  
  mosbolinha();
  
  xbolinha += velocidadeXbolinha;
  
  ybolinha += velocidadeYbolinha;
  
  verificacoli();
  
  movieraquete ();
  
  //colisãoraquete();
  
  bibliotecacolisão(xraquete,yraquete);
  
  bibliotecacolisão(xraqueteOponente,yraqueteOponente);
  
  raquete (xraquete,yraquete);
  
  raquete (xraqueteOponente,yraqueteOponente);
  
  movimento_oponente();
  
  Placar();
  
  marcador_de_pontos();

  bolinhaNaoFicaPresa();
}

function mosbolinha(){
  
  circle(xbolinha,ybolinha,diametro);
  
}

function verificacoli (){
  
  if (xbolinha + raio > width || xbolinha - raio < 0){
  
    velocidadeXbolinha *= -1;
    
}
  if (ybolinha + raio > height || ybolinha - raio < 0){

    velocidadeYbolinha *= -1;
    
  }
}

function raquete (x,y){
  
  rect(x, y, raquetecomprimento,raquetealtura);
  
}

function movieraquete () {
  
  if (keyIsDown(UP_ARROW)){
    
    yraquete -= 10;
    
  } 
  
  if (keyIsDown(DOWN_ARROW)){
    
    yraquete += 10;
    
    
    yraquete = constrain(yraquete,0,315);
  } 
  
}

//function colisãoraquete() {
//  if (xbolinha - raio < xraquete + //raqueteconprimento && 
//      ybolinha - raio < yraquete + //raquetealtura &&
//      ybolinha + raio > yraquete )
//      {
//    velocidadeXbolinha *= -1;
//
//    }
//
//}

function bibliotecacolisão(x,y){
  
  colidiu = 
    
    collideRectCircle(x, y,raquetecomprimento,   raquetealtura, xbolinha, ybolinha, raio);
  
  if (colidiu){
    velocidadeXbolinha *= -1;      

      }
}

function bolinhaNaoFicaPresa(){
  if (xbolinha + raio < 0){

    console.log('bolinha ficou presa');

  xbolinha = 300;
  }
}
//function movimento_oponente (){
//  velocidade_opo = ybolinha - yraqueteOponente-raquetecomprimento /2 - 30;
//  
//  yraqueteOponente +=velocidade_opo;
//  
//  yraqueteOponente = constrain(yraqueteOponente,0, 315);
//  
//}

function movimento_oponente (){
 
  if (keyIsDown(87)){
    
    yraqueteOponente -= 10;
    
  } 
  
  if (keyIsDown(83)){
    
    yraqueteOponente += 10;
    
    
    yraqueteOponente = constrain(yraqueteOponente,0,315);
  } 
}

//function bibliotecacolisão_Oponente(){
  
//  colidiu = 
    
//    collideRectCircle(xraqueteOponente, yraqueteOponente,raquetecomprimento, raquetealtura  , xbolinha, ybolinha, raio);
  
//  if (colidiu){
//    velocidadeXbolinha *= -1;      
//      }
  
    
 // }

function Placar (){
 
  stroke(255)

  textAlign(CENTER)

  textSize(25);

  fill(color(255,140,0))
    rect(130,5,40,30);
  
  fill(255)
    text(pontos,150, 26); 

  fill(color(255,140,0))
    rect(430 ,5 ,40,30)

  fill(255)
    text(pontos_oponente,450, 26)
  
}

function  marcador_de_pontos(){
  if (xbolinha > 590 ){
   
      pontos += 1;

      }

  if (xbolinha < 10){

    pontos_oponente += 1;  }
}


