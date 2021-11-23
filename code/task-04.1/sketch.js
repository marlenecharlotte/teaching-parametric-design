function setup() {
  createCanvas(400, 400, SVG);
}

function draw() {
  background(255);

  stroke("red");
  strokeWeight(4);

  noFill();



translate(0,0);

beginShape();
vertex(310, 155); // we need to add a startpoint
quadraticVertex(330, 50, 250, 112);
endShape();

beginShape();
vertex(90, 155); // we need to add a startpoint
quadraticVertex(70, 50, 150, 112);
endShape();

//beginShape();
//vertex(260, 155); // we need to add a startpoint
//quadraticVertex(330, 150, 270, 125);
//endShape();

beginShape();
vertex(270, 155);

curveVertex(270, 155);

curveVertex(290, 175);
curveVertex(310, 125);
curveVertex(280, 130);

endShape(CLOSE);

beginShape();
vertex(244, 140);

curveVertex(245, 150);

curveVertex(215, 150);
curveVertex(230, 100);
curveVertex(250, 122);


endShape(CLOSE);

ellipse(200, 200, 250, 190);
circle(260, 140, 30);

ellipse(200, 250, 20, 10);

line(335, 200, 300, 210);
line(340, 220, 300, 220);
line(335, 240, 300, 230);

line(65, 200, 100, 210);
line(60, 220, 100, 220);
line(65, 240, 100, 230);

strokeWeight(10);
ellipse(140, 220, 10, 25);
ellipse(260, 220, 10, 25);

noLoop();
save();

}
