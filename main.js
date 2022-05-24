const canvas1 = document.getElementById("canvas1");
const ctx = canvas1.getContext("2d");
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

Window.addEventListener('resize', function() {
    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
});

ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.stroke();