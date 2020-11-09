var bullet ,speed , weight ; 
var thickness, wall ; 
function setup(){
    createCanvas(1600,400);
    thickness = random(22,83);

    wall = createSprite(1200,200,thickness,height/2);
    

    speed =  random(223,321);
    weight = random(30,52);

    bullet = createSprite(50,200,50,10);
    bullet.shapeColor = color(255,215,0);
    bullet.velocityX = speed;


}

function draw(){
    background(220);
    wall.shapeColor = color(80,80,80);
    testing();
    drawSprites();
}
function testing(){
    bullet.depth += wall.depth;
    if(collide(bullet, wall)){
        bullet.velocityX = 0;
        
        damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

        if(damage > 10){
            wall.shapeColor = color(225,0,0);
        }
        if(damage < 10){
            wall.shapeColor  = "lightgreen";
        }
    }
    else{
        wall.shapeColor = "red";
    }
}
