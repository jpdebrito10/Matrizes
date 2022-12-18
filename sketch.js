var menu;
//variaves dos botoes
// botão play
var Bx1=173
var By1=291
var largB1=167
var altB1=49
// botão manual
var Bx2 = 175
var By2 = 363
// botao créditos
var Bx3 = 175
var By3=  435

var telaJogar
var tela = 0
var manual
var creditos
var c




function preload() {
  menu = loadImage('Fase_um_do_jogo.png');
  telaJogar = loadImage('teladejogo.png')
  manual = loadImage ('manual_d.png')
  creditos = loadImage('creditos.png')
  q1n1= loadImage('q1jogo.png')
  q1n2= loadImage('n2.png')
  q1n3= loadImage('q1n3.png') 
  fimdejogo= loadImage ('fimdejogo.png')
  q2n1 = loadImage('q2n1.png')
  gameover1= loadImage('gameover1.png')
  q3n1 = loadImage('q3n1.png')
  gameover2 =loadImage('gameover2.png')
  n1q4 = loadImage('n1q4.png')
  q5n1 = loadImage('q5n1.png')
  victory = loadImage('Victory.png')
  q2n2 = loadImage ('q2n2.png')
  q3n2 = loadImage ('q3n2.png')
  q4n2 = loadImage ('q4n2.png')
  q5n2 = loadImage ('q5n2.png')
  q2n3 = loadImage ('q2n3.jpg')
  q3n3 = loadImage ('q3n3.png')
  q4n3 = loadImage ('q4n3.png')
  q5n3 = loadImage ('q5n3.png')
  gameover3 = loadImage('gameover3.png')
  gameover4 = loadImage('gameover4.png')
}
function setup() {
  createCanvas(500, 500);
}

function draw() {
  if(tela === 0){
  background(menu);
  
  push()
  fill(255)
  circle(mouseX,mouseY,10)
  text(mouseX+":"+mouseY,20,20)
  pop()
  
  if(mouseX>=Bx1 && mouseY>=By1 && mouseX<=340 && mouseY<=338){
    noFill()
    stroke(0)
    rect(Bx1,By1,largB1,altB1)
    if(mouseIsPressed){
      tela=1
    }
  }
    if(mouseX>=Bx2 && mouseY>=By2 && mouseX<=340 && mouseY<=408){
      noFill()
      stroke(0)
      rect(Bx2,By2,largB1,altB1)
      if(mouseIsPressed){
        tela=2
      }
    }
    if(mouseX>=Bx3 && mouseY>=By3 && mouseX<=340 && mouseY<=483){
      noFill()
  stroke(0)
  rect(Bx3,By3,largB1,altB1,5)
      if(mouseIsPressed){
        tela=3
      }
    }
  }
  else if(tela==1){
    telajogar()
  }
  else if(tela==2){
    instru()
  }
  else if(tela==3){
    cred()
}
else if(tela==4){
  n1()
}else if(tela==5){
  n2()
}else if(tela==6){
  n3()
}
  else if(tela==7){
    n4()
  }
  else if(tela==8){
    n5()
  } else if(tela==9){
    n6()
} else if (tela ==10){
  n7()
} else if (tela ==11){
  n8()
}else if (tela ==12){
  n9()
}else if (tela ==13){
  n10()
}else if (tela ==14){
  n11()
}else if (tela ==15){
  n12()
}else if (tela ==16){
  n13()
}else if (tela ==17){
  n14()
}else if (tela ==18){
  n15()
}else if (tela ==19){
  n16()
}else if (tela ==20){
  n17()
}else if (tela ==21){
  n18()
}else if (tela ==22){
  n19()
} else if (tela == 23){
  n20()
}else if (tela == 24){
  n21()
}
}
