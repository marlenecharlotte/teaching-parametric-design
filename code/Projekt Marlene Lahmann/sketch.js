var points = []
var mult = 0.005



function setup () {
    
    createCanvas(600, 600)

    background(30)
    angleMode(DEGREES)
    noiseDetail(4)

    s1 = createSlider(0.01, 10, 1, 1).position(20, 650)
    p1 = createP('Stroke Weight').position(20, 620)
  
    var density = 15

    
    var space = width / density

    for (var x = 0; x < width; x += space) {
        for ( var y = 0; y < height; y += space ) {
            var p = createVector(x + random(-10, 10), y + random(-10, 10))
            points.push(p)

            }   
    }
}

function draw (){

    strokeWeight(s1.value())
    stroke('white');
    fill(250)
    
    
    for (var i = 0; i < points.length; i ++) {


        var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)

        points[i].add(createVector(cos(angle), sin(angle)))

        ellipse(points[i].x, points[i].y, 1)}
        
}
