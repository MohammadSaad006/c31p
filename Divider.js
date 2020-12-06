class Divider1 {
    constructor(x,y,width,height){
        var options= {
            isStatic:false
        }

        this.body=Bodies.rectangle(x,y,width,options)
        this.width=width
        this.height=height
        World.add(wrold,this.body)
    }
display(){
    var pos=this.body.position;
    rectMode(CENTER);
    fill(255,255,255)
    rect(pos.x,pos.y,this.width,this.height)
}
};