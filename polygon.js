class Polygon{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            friction : 0.0,
            density : 2
        }
        this.body = Bodies.circle(x,y,r/2,options);
        this.Image = loadImage("polygon.png")
        this.r = r;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.Image,0,0,30,30)
        pop();
    }
}