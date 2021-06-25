class Divisions {
    construcor(x, y, w, h) {
        var options = {
            isStactic: true 
        }
        this.body =Bodies.rectangle(x, y, w, h, options);
        this.w=w;
        this.h =h;
        world.add(world,this.body);
}
display(){
    var pos = ths.body.position;
    rectMode(CENTER);
    fill ("white");
    rect(pos.x,pos.y,this.w,this.h);
}
}