const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const angle = (degrees = 360) => (Math.PI / 180) * degrees;
// const gradient = ctx.createLinearGradient(20, 20, 120, 120);

// gradient.addColorStop(0, 'hsl(250, 70%, 70%');
// gradient.addColorStop(1, 'hsl(0, 70%, 70%');

// ctx.fillStyle = gradient;

// ctx.fillRect(20, 20, 100, 100);

// ctx.strokeStyle = 'rgb(50,155,50)';
// ctx.strokeRect(10, 10, 120, 120);

// ctx.clearRect(45, 45, 50, 50);
console.dir(ctx);

// ctx.beginPath();

// ctx.moveTo(100, 100);
// ctx.bezierCurveTo(100, 200, 200, 200, 200, 100);

// ctx.shadowOffsetX = 5;
// ctx.shadowOffsetY = 5;
// ctx.shadowBlur = 3;
// ctx.shadowColor = 'green';
// ctx.font = '30px Sans-serif';
// ctx.fillStyle = 'red';
// ctx.fillText('JavaScript', 50, 50, 200);


// ctx.moveTo(175, 125);
// ctx.lineTo(175, 125);
// ctx.lineTo(150, 125);
// ctx.lineTo(105, 50);

// ctx.moveTo(175, 150);

// ctx.arc(150, 150, 25, 0, angle(), false);

// ctx.moveTo(125, 125);
// ctx.arcTo(150, 100, 175, 125, 30);
// ctx.lineTo(175, 125);



// ctx.lineWidth = '2';
// ctx.strokeStyle = 'green';
// ctx.stroke();
// let tick = 0;


// const animation = () => {
// 	ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
// 	ctx.fillStyle = 'green';
// 	ctx.fillRect(tick, tick, 50, 50);
// 	tick++;
// 	if (tick < 350) {
// 		requestAnimationFrame(animation);
// 	} else {
// 		reverse();
// 	}

// };

// const reverse = () => {
// 	ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
// 	ctx.fillStyle = 'green';
// 	ctx.fillRect(tick, tick, 50, 50);
// 	tick--;
// 	if (tick > 0) {
// 		requestAnimationFrame(reverse);
// 	} else {
// 		animation();
// 	}

// };

// animation();
const color = document.getElementById('color');
const range = document.getElementById('range');
range.addEventListener('input', () => ctx.lineWidth = range.value);
color.addEventListener('input', () => ctx.strokeStyle = color.value);
canvas.addEventListener('mousemove', (event) => {
	const x = event.offsetX,
		y = event.offsetY,
		mx = event.movementX,
		my = event.movementY;
	if (event.buttons > 0) {
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x - mx, y - my);
		ctx.stroke();
		ctx.closePath();


	}

});


const radius = 50;
const degrees = deg => Math.PI / 180 * deg;

const circles = [
	{
		color: 'blue',
		x: 2 * radius - radius / 2,
		y: 2 * radius
	},
	{
		color: 'black',
		x: 4 * radius,
		y: 2 * radius
	},
	{
		color: 'red',
		x: 6 * radius + radius / 2,
		y: 2 * radius
	},
	{
		color: 'yellow',
		x: 3 * radius - radius / 4,
		y: 3 * radius
	},
	{
		color: 'green',
		x: 5 * radius + radius / 4,
		y: 3 * radius
	}
];

const drawArc = (canvas, color, x, y, start, end) => {
	if (color !== 'white') drawArc(canvas, 'white', x, y, start + degrees(1), end - degrees(1));

	canvas.lineWidth = color === 'white' ? 10 : 10;
	canvas.strokeStyle = color;

	canvas.beginPath();
	canvas.arc(x, y, radius, start, end, false);
	canvas.stroke();
};

circles.forEach(circle => {
	drawArc(ctx, circle.color, circle.x, circle.y, 0, degrees(360));
});

circles.forEach(circle => {
	if (circle.color === 'blue') {
		drawArc(ctx, circle.color, circle.x, circle.y, 0, degrees(60));
		drawArc(ctx, circle.color, circle.x, circle.y, degrees(120), degrees(60));
	}
	if (circle.color === 'red') {
		drawArc(ctx, circle.color, circle.x, circle.y, degrees(60), degrees(120));
	}
	if (circle.color === 'black') {
		drawArc(ctx, circle.color, circle.x, circle.y, degrees(90), degrees(120));
		drawArc(ctx, circle.color, circle.x, circle.y, degrees(340), degrees(30));
	}
});