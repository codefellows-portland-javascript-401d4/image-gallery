import template from './image-app.html';

// TODO: inject service into this controller

export default {
    template,
    controller
};

function controller() {
    this.image = {
        title: 'Elephant',
        description: 'An adorable baby elephant.',
        url: 'http://images.nationalgeographic.com/wpf/media-live/photos/000/002/cache/baby-asian-elephant_227_600x450.jpg'
    };
    this.selected = 'detail';
}