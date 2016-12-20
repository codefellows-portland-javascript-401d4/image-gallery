export default {
  template:`
    <section>
        <h2>Staff!</h2>
        <p> Staff information, blah, blah, blah </p>
        <button ng-click="$ctrl.gotoAbout()">Hide</button>
    </section>
    `,
  controller
};

controller.$inject = ['$state'];

function controller($state) {
  this.gotoAbout = () => $state.go('about');
}