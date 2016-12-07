import template from './image-app.html';

export default {
    template,
    controller,
    controllerAs: 'app'
};

function controller() {
    this.bunny = {
        title: 'Bunnies!',
        link: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
        description: 'Bunnies to calm you down'
    };
    this.viewOptions = ['detail','thumbnail','gallery'];
    this.view = '';
};