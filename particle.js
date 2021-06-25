class particle {
    constructor(x,y,width,height) {
      this.body =Bodies.circle(x,y,this.r,options);
      this.color = color(random(0,255),random(0,255),random(0,255));
      worls.add(world,this.body);