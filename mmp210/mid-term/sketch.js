function setup() {
	createCanvas(640, 640);
	background("black");
	
	var columns = 15;
	var rows = 15;
	var w = width/columns;
	var h = height/rows;
	


	
	for (var x = 0; x < width; x += w) {
		for (var y = 0; y < height; y += h) {
		
			var r = random(150,300);
			var g = random(0,50);
			var b = random(0,20);
		
			if (x > w*5) {
				stroke(r * 10, g*5, b);
                fill(r, g*10, b*5);
			} else {
				 stroke(r, g*5, b*5);
                fill(r,g,b);
			}
			     strokeWeight(20);
			var size = Math.floor(random(0, 5));
		
			if (size == 0) {
                    
				point(x,y);
			} else if (size == 1) {
				point(x+w,y+h);
			} else if (size == 2) {
         
                    strokeWeight(6);
				point(x-y,y+w);
			} else if (size == 3) {
                noStroke();
				rect(x,y,x/16,y/32);
			}else if(size == 4){
              noFill();
                strokeWeight(6);
            
               curve(x/2,y/12,x/2,y/2,x/6,y/12,x/2,y/12);
         
     
            }
		}
	}
}
