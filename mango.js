class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            density:1.2
        }
        this.x=x;
		this.y=y;
		this.r=r;
		this.mango=Bodies.circle(this.x, this.y, this.r/3, options);
		this.image=loadImage("sprites/mango.jpg");
        World.add(world, this.mango);
    }
    display(){
        var mangopos=this.mango.position;
			push()
			translate(mangopos.x, mangopos.y);
			rectMode(CENTER)
			strokeWeight(3);
            fill(255,0,255)
            imageMode(CENTER)
			image(this.image,0,0,this.r, this.r);
			pop()
			
    }
}