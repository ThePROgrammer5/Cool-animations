const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;
ctx.biginPath();
ctx.arc(0, 0, 50, 0, Math.PI * 2);
ctx.stroke();