function setup(){
    createCanvas(640,480);
    
    background('lightgreen');
    rect(300,0,480,480);
    
    ellipse(300,300,500);
    
    fill('#222222');
    rect(170, 175, 50,50);
    rect(370, 175, 50,50);
  
    line(300,250, 300, 330);
    

    triangle(250,350,300,400,350,350);
    

    arc(50,250,80,160, HALF_PI, PI);
    arc(550,255,80,160,0, HALF_PI);
}
