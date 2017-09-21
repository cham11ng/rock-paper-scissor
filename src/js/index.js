import _ from 'lodash';
import '../css/style.css';
import ProfileImage from '../images/profile.jpg'
import print_me from './print.js';

function component() {
	var element = document.createElement('div');
	var heading = document.createElement('h1');
	var button = document.createElement('button');
	var profile_image = new Image();

	heading.innerHTML = _.join(['Hello', 'webpack'], ' ');
	heading.classList.add('heading');
	element.appendChild(heading);

	profile_image.src = ProfileImage;
	element.appendChild(profile_image);

	button.innerHTML = 'Click Here';
	button.onclick = print_me;
	element.appendChild(button);

	return element;
}

let element = component(); // store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting tohe updated print_me module!');
		document.body.removeChild(element);
		element = component(); // re-render the "component" to update the click handler
		document.body.appendChild(element);
	})
}
