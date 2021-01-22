class gameState{
    constructor()
    {

    }
    getState(){
        var stateGet = database.ref("GameState")
        stateGet.on("value", function(data){
            GameState = data.val();
        });
    }

    updateState(state){
        database.ref("/").update({
            GameState:state
        })
    }

    StartGame(){
        if(GameState ===0){
            player = new PlayerNumber()
            player.PlayerCount();
            form = new Form()
            form.display();
        }
    }
}