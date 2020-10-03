class Boy{

    constructor(x,y,width,height){

        var options={
            isStatic:true
        }

        this.boy=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("sprites/boy.jpg");
        this.width=width;
        this.height=height;
        World.add(world,this.boy);
    }
    display(){
var pos=this.boy.position;
var angle=this.boy.angle;

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