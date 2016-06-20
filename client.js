var btnOne = document.querySelector('#one');
var btnTwo = document.querySelector('#two');
var socket = io.connect('http://localhost:9000');

socket.on('connect', function() {
	console.log( 'connected to http://localhost:9000' );
	btnOne.addEventListener('click', function(e) {
		socket.emit('subscribe', 1);
	});
	btnTwo.addEventListener('click', function(e) {
		socket.emit('subscribe', 2);
	});

	socket.on('update', function() {
		console.debug('update event');
	})
})
