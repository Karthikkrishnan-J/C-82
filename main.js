var canvas = document.getElementById("myCanvas");
var Width = "";
var Color = "";
var Radius = "";
var mouseEvent = "";
var ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    Color = document.getElementById("Color").value;
    Width = document.getElementById("Width").value;
    Radius = document.getElementById("Radius").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        console.log("Current position of x and y cordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = Color;
        ctx.lineWidth = Width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, Radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

}