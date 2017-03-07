var x = 0;
function setup() {
    createCanvas(600, 400);
}
function draw() {
    background("#FFF7C1");

    strokeWeight(3);
    stroke("#8BD6C1");

    if (mouseX > width/2) {
        fill("#FFA00D");
    } else {
        fill("#FFA08E");
    }

    textSize(50);
    text(floor(mouseX), 120, 240);
    text(floor(mouseY), 200, 100);

    if (frameCount < 200) {
        x = frameCount;
    } else {
        if (x > 0) {
            x--;
        }
    }

    ellipse(mouseX, mouseY, x, x);

    ellipse(pmouseX, pmouseY, frameCount/8,frameCount/8);
}


