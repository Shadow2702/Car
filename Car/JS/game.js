class Game{
    constructor(){}

    getstate(){
    var gamestateref=database.ref('gamestate')
    gamestateref.on('value',function(data){
        gamestate=data.val()
    })    
    }

    setstate(state){
        database.ref('/').update({
            gamestate:state
        })
    }
 async start(){
if (gamestate==0){
    form= new Form()
    form.display()
    player= new Player()
    var Countref=await database.ref('PlayerCount').once('value')
    if (Countref.exists()) {
        PlayerCount=Countref.val()
        player.getCount()
    }

}
car1=createSprite(200,200)
car2=createSprite(400,200)
car3=createSprite(600,200)
car4=createSprite(800,200)
cars=[car1,car2,car3,car4]
    }

    Play(){
        form.hide()
        Player.getPlayersinfo()
        if(allplayers!==undefined){
            var i=0
            var x=175    
            var y
            for(var p in allplayers){
                i++
                x+=200
                y=displayHeight-allplayers[p].distance
                cars[i-1].x=x
                cars[i-1].y=y 
            }
                
            }
            if (keyIsDown(UP_ARROW)){
                player.distance+=10
                player.setName()
            }
            
        }




    }
