
let mode = 0
var w = window.innerWidth;
var h = window.innerHeight;

function preload() {
  table = loadTable("Food DC.csv", "csv", "header");
  //img = loadImage('4154.png');

}

function setup() {
  createCanvas(w, h);
  startSetup()
  
  //im = loadImage( "beef.png");
}

function draw() {
  
  if (mode==0) {
    print("START")
    startDraw()
    //image(foodsquares[0], 0, 0, 80, 80);
  }
  else if (mode==1) {
    mainSetup()
    mode = 2

    question.hide()
    caption.hide()
    button.hide()
      }
  else {    
    print("MAIN")
    mainDraw()
  }
}