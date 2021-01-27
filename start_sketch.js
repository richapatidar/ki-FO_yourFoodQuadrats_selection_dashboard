
//let table;
//let food = [];
//let foodSelection;
let foodsquares = [];
var x = 0;
var y = 0;
var x1 = 0;
var y1 = 0;
let results = [];

let imgNames =["beef.png" ,"fish.png",  "milk.png","tomato.png", "groundnuts.png"] ;



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function startSetup() {
  createCanvas(w, h);
  background(230);
  // print(w*0.38,"",h);
img = createImg('logo f.png', 'logo f.png');
  img.position(w * 0.08, 25);
  img.style("width", "80px");
  img.style("background-color", "#E6E6E6");

image(img,0,0);

  siteName = createP("yourFoodQuadrats");
  siteName.position(w * 0.8, 35)
siteName.style("font-family", "Helvetica");
  siteName.style("font-size", "1rem");


  question = createP("What did you eat this week?");
  question.position(w*0.335, h*0.3);
  // print(question.position());
   question.style("text-align", "center");
  question.style("justify-content", "center");
  question.style("width", "500px");
 question.style("font-family", "Helvetica");
  question.style("font-size", "1rem");

caption = createP("(Maximum four items)");
  caption.position(w*0.335, h*0.35);
   caption.style("text-align", "center");
  caption.style("justify-content", "center");
  caption.style("width", "500px");
 caption.style("font-family", "Helvetica");
  caption.style("font-size", "0.6rem");






  food = table.getColumn('Name');

  foodSelection = createSelect();
  foodSelection.id("FOODSELECTION")
  foodSelection.position(w*0.455, h*0.4);
  for (let i = 0; i < food.length; i++) {
    foodSelection.option(food[i])
  }
  foodSelection.changed(mySelectItem);
  foodSelection.style("background-color", "black");
  foodSelection.style("text-align", "center");
  foodSelection.style("color", "white");
  foodSelection.style("width", "130px");
  foodSelection.style("height", "22px");
  foodSelection.style("font-family", "Helvetica");
  foodSelection.style("font-size", "0.8rem");


  for (let i = 0; i < 5; i++) {
    //print(i);
    let tmpImg = loadImage( imgNames[i]);
    foodsquares.push(tmpImg);
   //foodsquares.push(new Shapes());
  }



    button = createButton("Let's ki-FO");
    button.mousePressed(startMain);
  button.position(w*0.435, 650);
    button.style("background-color", "black");
  button.style("text-align", "center");
  button.style("color", "white");
  button.style("width", "200px");
  button.style("height", "22px");
  button.style("font-family", "Helvetica");
  button.style("font-size", "0.8rem");
}

function startMain() {
  mode = 1
  print(results)
  
  //foodSelection = createSelect();
  
  // Remove all items
  for (let i = 0; i < food.length; i++) {
    //foodSelection.disable(food[i])
    document.getElementById(foodSelection.id()).remove(results[i]);
  }
  
  // Add selected ones back in
  for (let i = 0; i < results.length; i++) {
    foodSelection.option(food[results[i]])
  }
  
  
  // Enable
  /*
  for (let i = 0; i < results.length; i++) {
    print(foodSelection.id())
    document.getElementById(foodSelection.id()).children[results[i]].disabled=null;
  }  
  */
  
  foodSelection.position(w * 0.8, 110);
  document.getElementById(foodSelection.id()).style.zIndex = "100";
  
}

function startDraw() {
  background(230);

stroke(0);
  //line(758, 0, 758, 600);


  for (var j = 0; j < results.length; j++) {

    let currentChoice = results[j];
    image(foodsquares[currentChoice], (w*0.185) * (j+1), (h/1.5), 80, 80);
    // foodsquares[ currentChoice ].show(200 * (j+1), 450);

  }
}

function mySelectItem() {
  
  let item = foodSelection.value();

  foodIndex = food.indexOf(item);
  
  if(results.length < 4){
    results.push(foodIndex);
  }
}



function Shapes() {
  
  this.r = 80;
  this.pos = createVector(x+(w/5), y);
  this.total = 4;
  this.red = random(255);
  this.g = random(255);
  this.b = random(255);
;
  
  this.show = function(x_, y_) {
    push();
    fill(this.red,this.g,this.b);
    translate(x_, y_);

    beginShape();
    // stroke(255);
    // strokeWeight(2);
    for (var i = 0; i < this.total; i++) {
      let angle = map(i, 0, this.total, 0, TWO_PI);
      var x = this.r * cos(angle);
      var y = this.r * sin(angle);
      vertex(x, y);

    }
    endShape(CLOSE);
    pop();
  
  }
}


function mainPage() {
  
}


function keyTyped() {
  if (key == 'f') {
    let fs = fullscreen();
    fullscreen(!fs);
  } else {
    !fullscreen(!fs);
  }
}