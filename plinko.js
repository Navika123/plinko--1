class plinko  {
    construcor(x, y, w, h) {
        var options = {
            isStactic: true 
        }
        this.body =Bodies.rectalgle(x, y, w, h, options);
        this.w=w;
        this.h =h;
        world.add(world,this.body);
}
display(){
    radius = 10;
}
}