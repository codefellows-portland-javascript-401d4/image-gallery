import template from './image-app.html';
import styles from './image-app.css';

export default {
    template,
    controller,
    controllerAs: 'app'    
};

function controller() {
    this.styles = styles;
    this.image = {
        title: 'Cute Mango Calico Bunny',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
        description: 'Here is a picure of a really cute bunny.'
    };
}

