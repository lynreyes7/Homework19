console.log(" Your index.js file is loaded correctly!");
		
window.onload = function() {
			setTimeout(function() {
				document.getElementById('hey-im-lynette-reyes').style.opacity = '1';
			}, 1000); 
		};

		// Get the image that you want to listen for click events on
const myImage = document.getElementById('profile');

console.log('Its working');
const profile = document.getElementById('profile');
profile.addEventListener('click', function(event) {
  // This code will be executed when the image is clicked
  console.log('Profile image clicked!');
});
