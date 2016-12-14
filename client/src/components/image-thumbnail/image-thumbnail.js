import template from './image-thumbnail.html';
import styles from './image-thumbnail.scss';

export default {
    bindings: {
        image: '<'
    },
    template,
    controller,    
};

function controller() {
    //if you needed to work on binding on top level,
    //i.e. when it is loading, you need to use this.$onInit
    //if updated to latest version of angular 1
    //this.$onInit = () => {
    //    this.image.title.toUpperCase();
    //}   
    this.styles = styles;
}
