import _ from 'lodash';
import '../css/style.css';
import Background from '../image/background.jpg'

function component() {
	var element = document.createElement('h1');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('heading');

	var background = new Image();
	background.src = `/dist/js/${Background}`;

	element.appendChild(background);

	return element;
}

document.body.appendChild(component());
