// Adds the rocky js library
var rocky = require('rocky');

// Callback method to the draw event, used to determine the disply characteristics
rocky.on('draw', function(event){ 
  // Get the CanvasRenderingContext2D object
  var ctx = event.context;
  
  // Clear the screen
  ctx.clearRect(0,0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
  
  // Determine the width and height of the display
  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;
  // Current date/time
  var d = new Date(); 
  
  // set text color
  ctx.fillStyle = 'white';
  
  // Cetner align the text
  ctx.textAlign = 'center';
  
  // Display the time, in the middle of the screen
  ctx.fillText(d.toLocaleTimeString(), w/2, h/2, w); 
});


// Redraws screen every minute, can be changed to 'secondchange', 'hourchange', or 'daychange'
rocky.on('minutechange', function(event){ 
  // Display in system logs
  console.log("Another minute with your pebble!");
  // Request the screen to be redrawn on next pass
  rocky.requestDraw(); 
});