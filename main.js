canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

var mouseEvent = "empty";

var last_position_x,last_position_y;

color="blue";
width_of_line = 4;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove",move);

function move(e){
current_position_x = e.clientX - canvas.getBoundingClientRect().left;

current_position_y = e.clientY - canvas.getBoundingClientRect().top;

if (mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.Strokestyle = color;
ctx.lineWidth = width_of_line;
console.log("last position of x and y coordinates are;");
console.log("x= "+last_position_x +",y=" +last_position_y);
ctx.moveTo(last_position_x,last_position_y);
 console.log("current position of x and y coordinates are");
 console.log("x="+ current_position_x + ",y=" +current_position_y);
 ctx.lineTo(current_position_x,current_position_y);
 ctx.stroke();
}
last_position_x=current_position_x;
last_position_y=current_position_y;
}