var ball, spider1, spider2, goldenRing 
var ballImage, spider1Image, spider2Image, goldenRingImage 

function preload(){
    var ballImage = loadImage("basketball.jpeg")
    var spider1Image = loadImage("spider.png")
    var spider2Image = loadImage("spider.png")
    var goldenRingImage = loadImage("ring_old.png")
}
  
function setup(){
    ball=createSprite(31,45,43,56)
    ball.addImage(ballImage)
    spider1=createSprite(61,85,45,53)
    spider1.addImage(spider1Image)
    spider2=createSprite(31,45,43,56)
    spider2.addImage(spider2Image)
    goldenRing=createSprite(31,45,43,56)
    goldenRing.addImage(goldenRingImage)
} 

function draw(){
    backround(180)
    drawSprites()
}
    


