
import template from './imageChoice.html';


export default {
    template,
    controller
};


function controller() {
    this.choices = [
        {name: 'Gallery', value: 'gallery'},
        {name: 'Thumbnail', value: 'thumbnail'},
        {name: 'Text View', value: 'view'}
    ];

    this.myChoice = this.choices[2];

    this.image = 
    {title: 'Cutest Bunny EVER!',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
        description: 'A very small, cute bunny rabbit.'
    };
};

