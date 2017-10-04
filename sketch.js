function setup() {
  createCanvas(1280, 720);
  generate();
}

function generate(){
  for(i = bugs.length-1; i > -1; i--){
    bugs.splice(i,1);
  }
  player = new Bug();
  for(i = 0; i < 30; i++){
    bugs.push(new Bug());
  }
}

var bugs = [];
var keys = [];
var player;

function draw() {
  clear();
  Checkkeys();
  noStroke();
  player.display();
  for(i = bugs.length-1; i > -1; i--){
    a = player.x - bugs[i].x;
    if(a<0) a = a*-1;
    b = player.y - bugs[i].y;
    if(b<0) b = b*-1;
    distance = Math.hypot(a,b);
    if(distance < player.diameter/2 + bugs[i].diameter/2 && player.diameter > bugs[i].diameter){
      player.diameter = player.diameter + bugs[i].diameter/2;
      bugs.splice(i,1);
    }
    else
      bugs[i].display()
  }

  if (bugs.length == 0) generate();

}

function Checkkeys(){
  for(i = 0; i < keys.length; i++){
    keycode = keys[i]
    switch (keycode) {
      case LEFT_ARROW:
        player.x--;
        break;
      case UP_ARROW:
        player.y--;
        break;
      case DOWN_ARROW:
        player.y++;
        break;
      case RIGHT_ARROW:
        player.x++
        break;
      case 32:
        generate();
      default:
    }
  }
}

function keyPressed() {
  keys.push(keyCode);
}

function keyReleased(){
  for(i = keys.length-1; i > -1; i--){
    if(keys[i] == keyCode){
      keys.splice(i,1);
    }
  }
}
