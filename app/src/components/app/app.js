import template from './app.html';
import styles from './app.scss';

export default {
    template,
    controller
};

controller.$inject = ['$state'];

function controller($state) {
    this.goToImageApp = () => $state.go('image-app');

    this.styles = styles;
}

