
function setup (){
    createCanvas(600,480);
    background("#87A895");

    var a = width/2;
    var b = height/2;
    var c = width/2;
   


    noStroke();
    fill("white");
    ellipse(a, b, c,c);

    fill("black");
    ellipse(a+c/4,b,c/2,c/2);

    arc(a, b,c, c, 0,  PI);

    fill("white");
    ellipse(a-c/4,b,c/2,c/2);
    ellipse(a+c/4,b,c/8,c/8);

    fill("black");
    ellipse(a-c/4,b,c/8,c/8);
    
    fill(" darkgoldenrod")
    quad(138, 131, 186, 20, 169, 163, 130, 76);
  
    quad(458, 131, 456, 10, 409, 133, 410, 76);
}
    

