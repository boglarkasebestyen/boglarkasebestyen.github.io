for (i = 0; i < data.length; i++) {
	var ball = data[i]
	create(ball.x, ball.y, ball.color)
}

/* or:

var i = 0;
while (i < data.length) {
	let ball = data[i]
	create(ball.x, ball.y, ball.color)
	i++;
}

*/
