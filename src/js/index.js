import _ from 'lodash';
import '../css/style.css';
import ProfileImage from '../images/profile.jpg'

function component() {
	var element = document.createElement('div');

	var heading = document.createElement('h1');
	heading.innerHTML = _.join(['Hello', 'webpack'], ' ');
	heading.classList.add('heading');
	element.appendChild(heading);

	var profile_image = new Image();
	profile_image.src = ProfileImage;

	element.appendChild(profile_image);

	return element;
}

document.body.appendChild(component());
