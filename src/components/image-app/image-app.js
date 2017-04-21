import template from './image-app.html';
// import styles from  './image-app.css';

export default {
	template,
	controller,
	controllerAs: 'app'
};

function controller() {
	this.images = [{
		url: 'https://www.wildrepublic.com/Content/uploads/mountain-goat-2a-2108-xl.jpg',
		title: 'Mountain Goat',
		description: 'An adult male mountain goat standing on a rock in the mountains.'
	}, {
		url:'http://1h7yv33zt02z321jlb1yt3ce.wpengine.netdna-cdn.com/wp-content/uploads/2015/07/Cute-Goats-Photo-30.jpg',
		title: 'Pygmy Goat',
		description: 'An adorable pygmy goat.'
	}, {	
		url: 'http://www.insideedition.com/images/stories/1602/14594.jpg',
		title: 'A Regular Old Goat',
		description: 'A brown goat looking at the camera.'
	}];
	this.displays = ['thumbnail', 'text', 'full'];
}