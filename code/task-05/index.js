
const jscad = require('@jscad/modeling');

const {cube, cuboid, cylinder, cylinderElliptic, ellipsoid, geodesicSphere, roundedCuboid, roundedCylinder, sphere, torus } = jscad.primitives;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;



const main = () => {

  const shapes = [

    sphere({radius: 6}),

    sphere({radius: 3, center: [4.5, 1, 3]}),
    sphere({radius: 3, center: [-4.5, 1, 3]}),

    ellipsoid({radius: [0.5, 0.5, 1], center: [-2, 6, 0]}),
    ellipsoid({radius: [0.5, 0.5, 1], center: [2, 6, 0]}),
    ellipsoid({radius: [1, 0.2, 0.2], center: [0, 5.6, -2]})
  
  ]

  const unionShape2 = union(shapes);

  const colorShape = colorize(
  
      colorNameToRgb('red'),

      unionShape2
      
  );

  const cubeShape = cube({
    size: 10,

    segments:30

  });

const cubes = [];

for (let c = 0; c < 10; c += 1) {
  cubes.push(rotate(
    [0, Math.PI / 180 * c * 10, 0],
    translate(
      [0, c * 5, -10],
    cubeShape

  )
  ));

}

for (let c = 0; c < 10; c += 1) {
  cubes.push(rotate(
    [0, Math.PI / 180 * c * 10, 0],
    translate(
      [5, c * 5, -15],
    cubeShape

  )
  ));

}

for (let c = 0; c < 10; c += 1) {
  cubes.push(rotate(
    [0, Math.PI / 180 * c * 10, 0],
    translate(
      [10, c * 5, -20],
    cubeShape

  )
  ));

}
const unionShape = union(cubes);

const colorShape2 = colorize(
  
  colorNameToRgb('black'),

  unionShape
  
);
return [colorShape2, colorShape];


 

};


module.exports = { main }

