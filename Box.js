class Box {
    constructor(x,y,width,height) {
        var options = {
            restitution:0.3,
            friction:0.5,
            density:0.5,
            
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity=225;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      if(this.body.speed < 3){
        //options.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
     

      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
     
    }
  };



