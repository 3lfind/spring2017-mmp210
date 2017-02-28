
function setup() { 
    createCanvas(640, 480);
    background("#99B58E");
    
    // ts means text size
    var ts = 75;
   
    textSize(ts);
    textFont("Helvetica");
    textAlign(RIGHT);
    
    var a = width/2;
    var b = height/2;
    var c = width/2;

    noFill();
    colorMode(RGB, c+40, a+10,b+10, 1);
    background(215);

    strokeWeight(60);
    stroke(255, 0 , 10, 0.3);
    ellipse(a+50, b, b+20,b);
    ellipse(b+30, b, c+20, a);

    
    
    fill("#9FBA95");
    strokeWeight(10);
    stroke("#44421E");
    
    textStyle(ITALIC);
    text("Lulu Lin", a+80, b+ ts/2);
    
    
   
   
}