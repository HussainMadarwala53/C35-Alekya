class Form{
    constructor(){

    }

    display(){
        var title = createElement("h1");
        title.html("Multi Car Game");
        title.position(250, 100);

        var Button = createButton("play");
        Button.position(250, 300);
        var userInput = createInput("User Input Here");
        userInput.position(250, 250);
        var welcome = createElement("h2");

        Button.mousePressed(function(){
            userInput.hide();
            Button.hide();
            title.hide();
            var name = userInput.value();
            PlayerCount = PlayerCount+1;

            player.update(name);
            player.PlayerUpdate(PlayerCount)
            welcome.html("Welcome " +name);
            welcome.position(250,400)

        });
    }

}