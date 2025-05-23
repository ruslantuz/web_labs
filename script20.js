var canvas=document.getElementById("draw");
var x=canvas.getContext("2d");
// Прямокутник
x.fillStyle = "rgb(170,255,180)";
x.fillRect(10,10,480,280);

// Трикутник
x.beginPath();
x.moveTo(100,20);
x.lineTo(210,240);
x.lineTo(30,160);
x.closePath();
x.lineWidth = 3;
x.stroke();

x.moveTo(310,100);
x.quadraticCurveTo(380,50,460,210);
x.strokeStyle="red"; 
x.setLineDash([5,5]);
x.stroke();

x.moveTo(460,210);
x.bezierCurveTo(410,220,340,150, 250,210);
x.stroke();