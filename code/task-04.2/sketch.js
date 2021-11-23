function setup() {
  createCanvas(400, 400);

}

function draw() {



  background(255);

  noStroke();


translate(0, 30);

  fill(100);
  rect(180, 250, 40, 60);

  fill(150);
  triangle (200, 150, 50, 250, 350, 250);

  fill(200);
  triangle (200, 100, 70, 200, 330, 200);


  fill(150);
  triangle (200, 50, 90, 150, 310, 150);

  fill(200);
  triangle (200, 10, 100, 100, 300, 100);

  fill(50);
  circle(200, 10, 30);

  circle(140, 200, 25);
  circle(170, 200, 15);
  circle(200, 200, 25);
  circle(230, 200, 15);
  circle(260, 200, 25);

  circle(140, 100, 15);
  circle(170, 100, 25);
  circle(200, 100, 15);
  circle(230, 100, 25);
  circle(260, 100, 15);

  noLoop();
  save();
}
