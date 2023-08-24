// import React from "react";

// function League() {
//   return (
//     <div>League page where you can be if not logged in to see information</div>
//   )
// }

// export default League;




// import React, { useEffect } from 'react';
// import Matter from 'matter-js';

// const League = () => {
//   useEffect(() => {
//     const Engine = Matter.Engine;
//     const Render = Matter.Render;
//     const World = Matter.World;
//     const Bodies = Matter.Bodies;
//     const Mouse = Matter.Mouse;
//     const MouseConstraint = Matter.MouseConstraint;

//     // Create an engine
//     const engine = Engine.create();

//     // Create a renderer
//     const render = Render.create({
//       element: document.getElementById('matter-container'),
//       engine: engine,
//       options: {
//         width: 800,
//         height: 600,
//         wireframes: false,
//         background: '#f6846a',
//       },
//     });

//     // Preload images
//     const images = {}; 
//     const preloadImages = (imagePaths, callback) => {
//       const images = {};
//       let loadedImages = 0;

//       imagePaths.forEach((path) => {
//         const img = new Image();
//         img.onload = () => {
//           loadedImages++;
//           if (loadedImages === imagePaths.length) {
//             callback();
//           }
//         };
//         img.src = path;
//         images[path] = img;
//       });
//     };

//     preloadImages(['soccerball.jpg', 'waterbottle.jpg'], () => {
//       // Create bodies
//       const ball = Bodies.circle(300, 300, 60, {
//         restitution: 0.6,
//         render: {
//           sprite: {
//             texture: images['soccerball.jpg'],
//             xScale: 0.5,
//             yScale: 0.5,
//           },
//         },
//       });

//       const shelf = Bodies.rectangle(400, 200, 250, 30, { isStatic: true });

//       const bottle = Bodies.rectangle(70, 100, 100, 300, {
//         angularVelocity: 0.8,
//         render: {
//           sprite: {
//             texture: images['waterbottle.jpg'],
//             xScale: 0.4,
//             yScale: 0.4,
//           },
//         },
//       });

//       // Add bodies to the world
//       World.add(engine.world, [ball, shelf, bottle]);

//       // Create mouse constraint
//       const mouse = Mouse.create(render.canvas);
//       const mouseConstraint = MouseConstraint.create(engine, {
//         mouse: mouse,
//         constraint: {
//           stiffness: 0.2,
//           render: {
//             visible: false,
//           },
//         },
//       });

//       World.add(engine.world, mouseConstraint);

//       // Start the engine
//       // Engine.run(engine);
//       Matter.Runner.run(engine)

    

//       // Start the renderer
//       Render.run(render);
//     });
//   }, []);

//   return <div id="matter-container"></div>;
// };

// export default League;














