import template from './add-new.html';

export default {
    template,
    bindings: {
        _fields: '@fields',
        add: '<'
    },
    controller
};

function controller() {
    this.$onInit = () => {
        this.fields = this._fields.replace(/ /g, '').split(',');
    };

    this.reset = () => {
        this.item = {};
    };

    this.reset();

    this.submit = () => {
        console.log(this.item);
        this.add(this.item);
        this.reset();
    };
}