var groundHeight;
var mountain1;
var mountain2;

var tree;

var moon;
var sun;
var darkness;
var c;
function setup()
{
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight + 20,
		trunkWidth: 40,
		trunkHeight: 150,
		canopyWidth: 120,
		canopyHeight: 100
	};

    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80
	};
    
    //TASK: intialise a moon object with an extra property for brightness
    
    moon={
       x:670,
        y:83,
        diameter:90
        //c:color(60,100,b)
        
    }
        
       

	//set the initial darkness
	darkness = 0;
}



function draw()
{
	//TASK: update the values for the moons brightness, the sun's position and the darkness.
	//You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) or you can just change the values gradually over time.


	//draw the sky
	background(150, 200, 255);
	noStroke();

	//draw the sun
	fill(255, 255, 0);

    //sun.y=max(mouseX,70);
   // sun.y=min(mouseX,500);
    sun.y=map(mouseX,70,600,70,540);
   	ellipse(sun.x, sun.y, sun.diameter); 

     

  

	//draw the ground and make it green
	fill(70, 200, 0);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
    
    //TASK: You can draw the tree yourself
    fill(128,0,0);
    rect(tree.x,tree.y-tree.trunkHeight,tree.trunkWidth,tree.trunkHeight);
    fill(0,255,0);
    triangle(tree.x+20-tree.canopyWidth/2,
             tree.y-tree.trunkHeight,
             tree.x+20+tree.canopyWidth/2,
             tree.y-tree.trunkHeight,
             tree.x+20,tree.y-tree.trunkHeight-tree.canopyHeight);

	//TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
	//Use the alpha value of fill to determine how dark to make it
    
    darkness=min(200,mouseX-200);
    fill(179,179,204, darkness)
    rect(0,0,800,600);
  
    //TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour
    fill(255,255,255,min(200,mouseX-200));
   // fill(brightness(min(255,mouseX)));

    
    ellipse(moon.x,moon.y,moon.diameter);
    

//noStroke();
//colorMode(HSB, 0);
//c = color(0, 100, 100);
//
//fill(c);
//rect(15, 20, 35, 60);
//value = brightness(c); // Sets 'value' to 255
//    console.log(value);
//fill(value);
//rect(50, 20, 35, 60);
//
//colorMode(RGB);
}