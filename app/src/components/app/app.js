import template from './app.html';

export default {
    template,
    controller
};

controller.$inject = ['$state'];

function controller($state) {
    this.gotoImages = () => $state.go('images');
}