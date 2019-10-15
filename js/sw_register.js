console.log("this is running");
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Registration worked YAY!');
	})
	.catch(function() {
		console.log('Registration failed... poop!');
	});
}
