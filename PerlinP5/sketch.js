let inc = 0.1;
let scl = 10;
let cols, rows;

let  zoff = 0;

let fr;
function setup() {
	createCanvas(200,200);

	cols =floor(width/scl);
	rows = floor(height/scl)
	fr = createP('')
}

function draw() {
	background(255);
	let xoff = 0;

	for (var x = 0; x < width; x++) {
		let yoff = 0;
		for (var y = 0; y < height; y++) {
			let index = (x + y * width)*4;
			var angle = noise(xoff, yoff, zoff) * TWO_PI;
			var v = p5.Vector.fromAngle(angle);
			yoff += inc;
			stroke(0);
			push();
			translate(x * scl, y * scl);
			rotate(v.heading())
			line(0,0,scl,0)
			pop()
		}
		xoff+= inc;
		zoff += 0.0001
	}
	fr.html(floor(frameRate()));
}