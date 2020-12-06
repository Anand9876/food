class paperobject{
    constructor(x,y,radius){
        var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.paperobject=Bodies.circle(this.x, this.y, this.radius/2, options)
        World.add(world,this.paperobject)
    }
    display(){
        var pos=this.paperobject.position;
        var angle=this.paperobject.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(4)
        stroke("green")
        fill("violet")
       ellipse(0,0,this.radius,this.radius);
        pop();

    }
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperobject.body,paperobject.body.pos,{x:85,y:-85})
	}
}
