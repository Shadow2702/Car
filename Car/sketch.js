var database,form,game,player
var gamestate=0
var PlayerCount
var allplayers
var car1,car2,car3,car4,cars 
function setup(){
    database=firebase.database()
    createCanvas(displayWidth-10,displayHeight-20);
    game= new Game()
    game.getstate()
    game.start()                 
    
}

function draw(){
  if(PlayerCount==4){
    game.setstate(1)
  }
if (gamestate==1){
game.Play()
}
}