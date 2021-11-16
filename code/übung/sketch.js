const arr = []
  for (let a = 0; a <10; a += 1) {
    arr.push(Math.random() * 200);
    console.log(arr);
  }

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill("white")
  for (let a = 0; a < arr.length; a +=
  rect(0, a * 20, arr[a], 10);
  
  if (Math.random() >0.5){
    arr[a] += Math.random();
  }
  else {
    arr[a] -= Math.random();
  }
}
