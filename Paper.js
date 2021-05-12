class Paper{
    constructor(x,y,r)
	{
		var options={
			isStatic:false,	
            restitution:0.3,
            density:1.2,
            friction:0

			}
		this.x=x;
		this.y=y;
		this.r=r;
        this.img=loadImage("paper.png");
		this.body=Bodies.circle(x, y, r, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			
		imageMode(CENTER)
        image(this.img,paperPos.x,paperPos.y,this.r*2,this.r*2);
			pop()
			
	}

}