var cat, c1img, c2img, c3img, c4img
var mouse, m1img, m2img, m3img, m4img
var garden

function preload() {
    c1img = loadAnimation("images/cat1.png")
    c2img = loadAnimation("images/cat2.png","images/cat3.png")
    c3img = loadAnimation("images/cat4.png")
    
    m1img = loadAnimation("images/mouse1.png")
    m2img = loadAnimation("images/mouse2.png", "images/mouse3.png")
    m3img = loadAnimation("images/mouse4.png")

    garden = loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(800, 600)
    cat.scale = 0.2
    cat.addAnimation("cat", c1img)
    mouse = createSprite(200, 600)
    mouse.scale = 0.2
    mouse.addAnimation("mouse", m1img)

}

function draw() {

    background(garden);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("cat1", c3img)
        cat.x = 300
        cat.changeAnimation("cat1")
        mouse.addAnimation("mouse1", m3img)
        mouse.changeAnimation("mouse1")
    }
keyPressed();
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    cat.velocityX = -3
      cat.addAnimation("catrun", c2img)
      cat.changeAnimation("catrun")
      mouse.addAnimation("mouserun", m2img)
      mouse.changeAnimation("mouserun")
      
  }


}
