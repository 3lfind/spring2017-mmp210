
function setup() {
    createCanvas(600,600);
    noStroke();
}

function draw() {
    background(120);
    
  
    
    var windowWidth = width/3;
    var windowHeight = height/2;
    var x=10, y=10;
    for(var i=0; i<2; i++){
        for(var h=0; h<2; h++){
            drawWindow(x+100*i,y+300*h,windowWidth,windowHeight);
        

           drawWindow(x+50*i+windowWidth+windowHeight/2,y+300*h+windowHeight/8,windowWidth/2,windowHeight/2);
 
    
        }
    }
        

}

function drawWindow(x,y,windowWidth,windowHeight){
    
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


  