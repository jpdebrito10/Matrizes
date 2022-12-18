function n8(){
  background(gameover2)
  if(mouseX>=0 && mouseY>=6 && mouseX<=78 && mouseY<=45){
    noFill()
    stroke(0)
    rect(0,6,70,22)
    if(mouseIsPressed){
      tela=0
    }
}
}
