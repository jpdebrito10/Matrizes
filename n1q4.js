function n9(){
  background(n1q4)
   if(mouseX>=50 && mouseY>=333 && mouseX<=73 && mouseY<=356){
    noFill()
    stroke(0)
    rect(50,333,70,22)
    if(mouseIsPressed){
      tela=13
    }
   }
  if(mouseX>=0 && mouseY>=3 && mouseX<=220 && mouseY<=23){
    noFill()
    stroke(0)
    rect(0,3,70,22)
    if(mouseIsPressed){
      tela=0
} //a 
  }  if(mouseX>=60 && mouseY>=261 && mouseX<=71 && mouseY<=270){
    noFill()
    stroke(0)
    rect(60,261,70,22)
    if(mouseIsPressed){
      tela=23
} //b
  } else if(mouseX>=70 && mouseY>=302 && mouseX<=80 && mouseY<=310){
    noFill()
    stroke(0)
    rect(70,302,70,22)
    if(mouseIsPressed){
      tela=23
} //d
  }else if(mouseX>=70 && mouseY>=373 && mouseX<=80 && mouseY<=380){
    noFill()
    stroke(0)
    rect(71,373,70,22)
    if(mouseIsPressed){
      tela=23
}
  }
}