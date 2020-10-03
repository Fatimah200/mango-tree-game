class Tree{

    constructor(x,y,width,height){

        var options={
            isStatic:true
        }

        this.tree=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("sprites/tree.png");
        this.width=width;
        this.height=height;
        World.add(world,this.tree);
    }
    display(){
var pos=this.tree.position;
var angle=this.tree.angle;

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