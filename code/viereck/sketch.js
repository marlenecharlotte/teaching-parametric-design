function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);



beginShape();
vertex(180, 40);
vertex(360, 220);
vertex(220, 360);
vertex(40, 180);
endShape(CLOSE);

beginShape();
vertex(190, 390);
vertex(10, 210);
vertex(35, 185);
vertex(215, 365);
endShape(CLOSE);

beginShape();
vertex(210, 10);
vertex(390, 190);
vertex(365, 215)
vertex(185, 35);



endShape(CLOSE);

triangle (10, 10, 10, 200, 200, 10);
triangle (200, 390, 390, 390, 390, 200);
triangle (390, 180, 390, 10, 220, 10);
triangle (10, 390, 10, 220, 180, 390);

save();  
noLoop();
}
