class Stone{
constructor(x,y,width,height){

    var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    }
    this.stone=Bodies.rectangle(x,y,width,height,options);
    this.image=loadImage("sprites/stone.png");
    this.width=width;
    this.height=height;
    World.add(world,this.stone);

}
display(){
    var pos=this.stone.position;
    var angle=this.stone.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER)
    fill(255);
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height);
    pop();

}
}