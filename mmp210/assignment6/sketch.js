
   var r=0;

function setup (){
    createCanvas(600,480);
    
  
   } 
function draw(){
    
    
    fill("pink");
    ellipse(width/2,height/2,width/2,width/2);
    
    translate(width/2, height/2);

    push();
    fill("white");
    textFont("cursive");
    textSize(height/8);
    textAlign(RIGHT);
    text("Lulu", height/8,height/16);
    translate(width/2, height/2);

    pop();
    
    push();
    fill("pink");
    for(var i=0; i<16; i++){
    ellipse(width/4,height/2,width/6,width/6);
    
    rotate(PI/8);
}
    pop();
    
    
    push();
    rotate(r/2);
    fill("white");
    
    ellipse(width/8,height/4,width/8,width/8);
    pop();

      
    push();
    rotate(r); 
    fill("white");
    arc(width/16,height/4,width/16,width/16, 0,  PI);
    pop();
    
          
    push();
    rotate(-r); 
    fill("white");
    arc(width/16,height/4,width/16,width/16, 0,  PI);
    pop();
    
    
    push();
    rotate(r/4);
    fill("white");
    
    ellipse(width/16,height/2,width/16,width/16);
    pop();

    r +=0.02;
}