class ball1{
    constructor(x,y,radius) {
        var options= {
            isStatic:false,
         
            friction:1
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.color=color(random(0,255),random(0,255),random(0,255));
        this.radius=radius;
        World.add(world,this.body)
        
    }

    display(){
        var b1pos=this.body.position

        ellipseMode(CENTER);
        ellipse(b1pos.x,b1pos.y,50,50);
    }
}
