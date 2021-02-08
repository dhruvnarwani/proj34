class Hero{
    constructor(x, y, radius, angle){
        var options = {
            'density' : 1,
            'frictionAir' : 1
        }
        this.body = Bodies.circle(x, y, this.radius, options);
        this.radius = radius;
        this.image = loadImage("images/Superhero-01.png")
        
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0, radius, radius);
        pop();
    
    
    }
}