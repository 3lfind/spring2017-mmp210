
   var a=0; 
   var r = 0, g = 0, b = 0;

function setup (){
    createCanvas(600,480);

  
   } 

function draw(){
      
     
    fill("white");
    ellipse(width/2,height/2,width/2,width/2);
    
    translate(width/2, height/2);


    push();
    fill("white");
    for(var i=0; i<16; i++){
    ellipse(width/4,height/2,width/6,width/6);
    
    rotate(PI/8);
}
    pop();
    
        if (frameCount % 120 == 0) {
        r = random(200, 240);
        g = random(50, 100);
        b = random(50, 150);
    }
    
    fill(r, g, b);
        push();
    
    textFont("cursive");
    textSize(height/8);
    textAlign(RIGHT);
    text("Lulu", height/8,height/16);
    translate(width/2, height/2);

    pop();
    

     
    if (frameCount <120*12) {
 
        
    push();
    rotate(a/2);
   
    
    ellipse(width/8,height/4,width/8,width/8);
    pop();
    
    push();
    rotate(a/4);
  
    ellipse(width/16,height/2,width/16,width/16);
    pop();

    } else{
        var y = frameCount%200;
         var x= frameCount%200;
        push();
         rotate(a/2);
       rect(x/2,height/4,width/16,y/4);
         pop();
        
         push();
        rotate(a/4);
        rect(x/4,height/2,width/20,y/6);
        pop();
    }
             
    push();
    rotate(a); 
    
    arc(width/16,height/4,width/16,width/16, 0,  PI);
    pop();
        
          
    push();
    rotate(-a); 
  
    arc(width/16,height/4,width/16,width/16, 0,  PI);
    pop();
    
      
   
   

    a +=0.02;
}
    
      
  