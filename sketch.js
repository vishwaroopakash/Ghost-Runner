var tower, towerImage, climber, climberImage, door, doorImage, ghost, ghostImage, spookySound, invisibleblock, doorgroup, climbergroup, invisibleblockgroup
var gamestate = "play";
function preload(){
 towerImage = loadImage("tower.png")
  doorImage = loadImage("door.png")
  climberImage = loadImage("climber.png")
  ghostImage = loadImage("ghost-jumping.png")
  spookySound = loadSound("spooky.wav")
}

function setup(){
createCanvas(600, 600)
 spookySound.play() 
  tower = createSprite(300, 300)
  tower.addImage(towerImage)
  tower.velocityY = 2
  
  ghost = createSprite(300, 300)
  ghost.addImage(ghostImage)
  ghost.scale = 0.4
  
  doorgroup = new Group()
  climbergroup = new Group()
  invisibleblockgroup = new Group()
}

function draw(){
background(0)
  if (gamestate=== "play"){
    
  
      if (tower.y>600){
      tower.y = 300
      }
      if (keyDown("left")){
        ghost.x = ghost.x-5
      }
      if (keyDown("right")){
        ghost.x = ghost.x+5
      }
     if (keyDown("space")){
       ghost.velocityY = -10
     }
      ghost.velocityY = ghost.velocityY+0.5
    Spawndoor()  
    drawSprites();

        if (climbergroup.isTouching(ghost)){
          ghost.velocityY = 0; 
        }
        if (ghost.y>600||invisibleblockgroup.isTouchingghost){
          gamestate = "End"
        }
  }
  else if (gamestate==="End"){
    textSize(35)
    textFont("Apple Chancery")
    strokeWeight(5)
    stroke("red")
    fill("Yellow")
    text("G A M E   O V E R", 200, 340)
  }
}

function Spawndoor(){
if (frameCount%200===0){
  door = createSprite(200, 50)
  door.addImage(doorImage)
  climber = createSprite(200, 100)
  climber.addImage(climberImage)
  invisibleblock = createSprite(200, 110, climber.width, 2)
  invisibleblock.debug = true
  
  door.velocityY = 1
  climber.velocityY = 1
  invisibleblock.velocityY = 1
  
  door.x = Math.round(random(100, 500))
  climber.x = door.x
  invisibleblock.x = door.x
   
  door.depth = climber.depth
  ghost.depth = door.depth+1
  
  doorgroup.add(door)
  climbergroup.add(climber)
  invisibleblockgroup.add(invisibleblock)
}
}