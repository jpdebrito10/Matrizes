function telajogar(){
  background(telaJogar)
 if(mouseX>=0 && mouseY>=3 && mouseX<=77 && mouseY<=40){
    noFill()
    stroke(0)
    rect(0,3,70,22)
    if(mouseIsPressed){
      tela=0
  }
}   if(mouseX>=120 && mouseY>=200 && mouseX<=368 && mouseY<=277){
    noFill()
    stroke(0)
    rect(120,247,273,42)
  if(mouseIsPressed){
    tela=4
  }
}
  if(mouseX>=126 && mouseY>=330 && mouseX<=375 && mouseY<=346){
    noFill()
    stroke(0)
    rect(126,313,230,42)
    if (mouseIsPressed){
      tela=5
    }
  
} if(mouseX>=126 && mouseY>=381 && mouseX<=372 && mouseY<=415){
    noFill()
    stroke(0)
    rect(126,381,273,42)
  if(mouseIsPressed){
    tela=6
  }
  
}
}