class Iron {
    constructor(x, y) {
      var options = {
        'density':0.8,
        'friction':3,
        'restitution':30
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 150;
      this.height = 150;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      fill('black')
      rect(0, 0, this.width, this.height);
    };
  };