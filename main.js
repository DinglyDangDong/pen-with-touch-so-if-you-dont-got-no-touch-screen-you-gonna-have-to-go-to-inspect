var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); 

var width = screen.width; 
var newWidth = width - 70; 
var newHeight = screen.height - 300; 
var beforeX, beforeY;

if(width < 992){ 
    document.getElementById("myCanvas").height = newHeight; 
    document.getElementById("myCanvas").width = newWidth; 
    document.body.style.overflow = "hidden"; 
} 
canvas.addEventListener("touchstart", startDown); 
function startDown(e){ 
    beforeX = e.touches[0].clientX - canvas.offsetLeft; 
    beforeY = e.touches[0].clientY - canvas.offsetTop; 
} 
canvas.addEventListener("touchmove", touchMove); 
function touchMove(e){ 
    var currentX = e.touches[0].clientX - canvas.offsetLeft; 
    var currentY = e.touches[0].clientY - canvas.offsetTop; 

    var lineWidths = document.getElementById("WidthValue").value;
    var lineColors = document.getElementById("ColorValue").value;

    ctx.beginPath(); 
    ctx.strokeStyle = lineColors; 
    ctx.lineWidth = lineWidths; 
    ctx.moveTo(beforeX, beforeY); 
    ctx.lineTo(currentX, currentY); 
    ctx.stroke(); 
    beforeX = currentX; 
    beforeY = currentY; 
} 
function clearTheScreen(){ 
    console.log("i am in your function"); 
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height); 
}