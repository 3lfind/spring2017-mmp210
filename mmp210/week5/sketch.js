
function setup() {
    createCanvas(600,600);
    noStroke();
}

function draw() {
    background(120);
    
  
    
    var windowWidth = width/3;
    var windowHeight = height/2;
    
    for(var x =windowWidth/4; x<width; x+=windowWidth){
        for(var y =windowHeight/4; y<height; y+=windowHeight){
        
         fill("#DEDECA");
         rect(x,y,windowWidth/2,windowHeight/2);
            
        fill("#5F2847");
        stroke("#F2F1D2");  
        
        strokeWeight(6);
    
            
        rect(x, y + windowWidth/2,windowWidth/2, windowHeight/4 );
        rect(x, y + windowWidth/2,windowWidth/2, windowHeight/8 );

        rect(x + windowWidth/6, y + windowWidth/2,windowWidth/6, windowHeight/4 );
        
        //up
        fill("#823864");
        
            
        rect(x, y, windowWidth/2, windowHeight/4);
        rect(x, y,  windowWidth/2, windowHeight/8);
        rect(x, y+windowWidth/3,  windowWidth/2, windowHeight/8);
         
      
            
    }
        
    }
      fill("#5F2847")
        
      
        triangle(windowHeight+windowWidth/4,windowHeight/4, windowWidth+windowWidth/4,windowHeight/4,windowHeight,windowHeight/12);
       
      
       
}


  