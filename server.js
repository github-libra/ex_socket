var io = require('socket.io')(9000);
io.on('connection', function(socket) {
	console.log( 'connection', socket.id, 'established.' );
	console.log( Object.keys(socket) );
	socket.on('subscribe', function(data) {
		if(data === 1) {
			socket.join('room1')
			console.log( 'join room1' );
		} else if(data === 2) {
			socket.join('room2')
			console.log( 'join room2' );
		}
		console.log( 'rooms: ', socket.rooms );

	})

	setInterval(function() {
		if(socket.rooms.indexOf('room1') > -1 || socket.rooms.indexOf('room2') > -1) {
			console.log( 'rooms: ', socket.rooms );
			io.to(socket.rooms.shuffle()[0]).emit('update')
		}
	}, 2000)
	
})

Array.prototype.shuffle = function() {
	var j, x, i;
	var a = this;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return this;
}