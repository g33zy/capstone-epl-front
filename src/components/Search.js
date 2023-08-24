{/* <script type="module"></script> */}
// import zim from "https://zimjs.org/cdn/015/zim";
// import zim from "https://zimjs.com/cdn/014/zim";

// // This is the game where you can move the soccer ball 




// const frame = new Frame("fit", 800, 600);
// frame.on("ready", ()=>{ // ES6 Arrow Function - similar to function(){}
//     zog("ready from ZIM Frame"); // logs in console (F12 - choose console)

//     // often need below - so consider it part of the template
//     let stage = frame.stage;
//     let stageW = frame.width;
//     let stageH = frame.height;
//     frame.outerColor = "#555";
//     frame.color = "#EEE";

//     // REFERENCES for ZIM at http://zimjs.com
//     // see http://zimjs.com/learn.html for video and code tutorials
//     // see http://zimjs.com/docs.html for documentation		
//     // see https://www.youtube.com/watch?v=pUjHFptXspM for INTRO to ZIM
//     // see https://www.youtube.com/watch?v=v7OT0YrDWiY for INTRO to CODE

//     // CODE HERE
// 		var load = frame.loadAssets(["ball.png", "bottle.png"], "https://d309knd7es5f10.cloudfront.net/codepen/");
// 		load.on("complete", ()=>{
			
// 			// call the ZIM physics helper class for the Box2D physics engine
// 			// can also set bounds (default the stage) and gravity (default 10)
// 			// see https://d309knd7es5f10.cloudfront.net/physics_1.0.js for Physics Details
// 			// and physics examples in ZIM BITS http://zimjs.com/bits.html
// 			const physics = new Physics(frame);
			
// 			// Make physics shapes (invisible) and map canvas shapes (visible) to their positions
		
// 			// physics ball (we add the Body suffix by convention)
// 			const ballBody = physics.makeCircle({radius:60, restitution:.6}); // restitution is how bouncy
// 			ballBody.x = ballBody.y = 300;
// 			// canvas ball
// 			const ball = frame.asset("ball.png").siz(120).centerReg().cur(); // Box2D objects are all center registration			
// 			physics.addMap(ballBody, ball);
			
// 			// physics.debug(); // makes it so you can see physics bodies
						
// 			const shelfBody = physics.makeRectangle(250,30,false); // a static body
// 			shelfBody.y = 200;
// 			const shelf = new Rectangle(250,30,frame.dark).centerReg(); 
// 			physics.addMap(shelfBody, shelf);
				
// 			const bottle = frame.asset("bottle.png").sca(.4).centerReg().cur(); 
// 			const bottleBody = physics.makeRectangle({width:bottle.width, height:bottle.height, angular:.8}); // just slow down the spin of the block
// 			bottleBody.x = 70;
// 			bottleBody.y = 100;					
// 			physics.addMap(bottleBody, bottle);
			
// 			physics.drag(); // drags all dynamic bodies or pass in an array of bodies to drag
			
// 		});	// end asset load
	
// 		new Label("Physics - drag objects").alp(.5).pos(150, 50, stage).animate({obj:{alpha:0}, wait:2000});
  
//     // DOCS FOR ITEMS USED
//     // http://zimjs.com/docs.html?item=frame
//     // http://zimjs.com/docs.html?item=circle
//     // http://zimjs.com/docs.html?item=rectangle
// 		// http://zimjs.com/docs.html?item=cur
//     // http://zimjs.com/docs.html?item=centerReg
//     // https://d309knd7es5f10.cloudfront.net/physics_1.0.js
//     // http://zimjs.com/docs.html?item=frame
  
//     // FOOTER
//     // call remote script to make ZIM Foundation for Creative Coding icon
//     createIcon(frame); 

// }); // end of ready