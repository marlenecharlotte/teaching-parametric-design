 const jscad = require('@jscad/modeling')
 const { cube, cuboid, cylinder, cylinderElliptic, ellipsoid, geodesicSphere, roundedCuboid, roundedCylinder, sphere, torus } = jscad.primitives
 const { translate } = jscad.transforms
 const {union, subtract, intersect, scission} = jscad.booleans;
 
 const main = () => {


  const shapes2 = [
  
    cylinder({
      center: [0, 0, -2],
      height: 1,
      radius: 3,
      segments: 50
    })
    ]

  const shapes = [
  
  cylinder({
    center: [0, 0, 0],
    height: 4,
    radius: 2,
    segments: 50
  }),

  cylinder({
    center: [0, 0, 0],
    height: 4,
    radius: 1,
    segments: 50
  })
  ]
  const subtractShape = subtract(shapes);

  
  return [subtractShape, shapes2];
}
 module.exports = { main }
 