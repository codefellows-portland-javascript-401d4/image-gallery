import template from './app.html';

export default {
    template,
    controller,
    controllerAs: 'app'    
};

function controller() {
    this.titleImgDesc = [
        { title: 'Bunny',
          img: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
          desc: 'it\'s a bunny' },
        { title: 'Bunny',
          img: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
          desc: 'it\'s a bunny'  },
        { title: 'Bunny',
        img: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
        desc: 'it\'s a bunny'  }
    ];
}