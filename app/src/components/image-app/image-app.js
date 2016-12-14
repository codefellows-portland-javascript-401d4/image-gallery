import template from './image-app.html';
import styles from './image-app.scss';
export default {
    template,
    controller,
    controllerAs: 'app'
};

controller.$inject = ['imageService'];

function controller(images) {
    this.loading = true;
    this.styles = styles;
    this.view;
    this.selectedView = 'description';

    // $scope.$watch('app.view', () => {
    //     this.selectedView = 'description';
    // });

    images.get().then(images => {
        this.loading = false;
        this.images = images;
    });
    
}