class PlayerNumber{
    
    PlayerCount(){
        var stateGet = database.ref("PlayerCount")
        stateGet.on("value", function(data){
            PlayerCount = data.val();
        });
    }

    PlayerUpdate(count){
        database.ref("/").update({
            PlayerCount:count
        })
    }
    
    update(name){
        var playerIndex = "player" + PlayerCount;
        database.ref(playerIndex).set({
          Name:name
        });
      }
}