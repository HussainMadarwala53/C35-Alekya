var hypnoticBall, database;
var position;
var player, form, game;
var GameState = 0

function setup(){
  createCanvas(500,500);

  database = firebase.database();
  console.log(database);
  game =  new gameState();
  game.getState();
  game.StartGame();
  }

function draw(){
  background("white");
  
}
