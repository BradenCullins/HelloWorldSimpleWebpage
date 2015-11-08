var canvas = document.getElementById('canvas') ;
var context = canvas.getContext('2d');

context.font = '32pt Arial';
context.fillStyle = 'LightSkyBlue';
context.strokeStyle = 'Black'; 

context.fillText("Check out what I did!", 40, 200);
context.strokeText("Check out what I did!", 40, 200);
console.log('whatever you want to type');
window.onload = draw; 
function draw() {
	var canvas = document.getElementById("canvas1");
	context.fillStyle="rgba(100,1,1,10)";
	context.fillRect(400,25,200,100);
	context.beginPath();
	context.arc(500,75,47,0,2*Math.PI);			
	context.fillStyle="DeepSkyBlue";
	context.fill();
	context.lineWidth="5";
	context.strokeStyle="Black";
	context.stroke();
	context.fillRect(100,25,200,100);
	}


