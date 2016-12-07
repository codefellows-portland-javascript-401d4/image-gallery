import template from './image-app.html';
import styles from './image-app.css';

export default {
    template,
    controller,
    controllerAs: 'app'    
};

function controller() {
    this.styles = styles;
    this.image = [{
        title: 'Cute Mango Calico Bunny',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
        description: 'Here is a picure of a really cute bunny.',
        value: 0
    }, {
        title: 'Albino Bunnies',
        url: 'http://hdfreewallpaper.net/wp-content/uploads/2016/02/two-beautiful-rabbits-hd-free-wallappers-for-desktop.jpg',
        description: 'Bunnies with white fur and red eyes.',
        value: 1
    }, {
        title: 'Floppy Ears Bunny',
        url: 'http://hdfreewallpaper.net/wp-content/uploads/2016/02/so-sweet-rabbit-wallpapers-images-free-hd.jpg',
        description: 'This is a bunny with very floppy ears.',
        value: 2
    }];
    
}

