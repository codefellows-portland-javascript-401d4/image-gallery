import template from './spider-app.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

function controller() {

  this.spiders = [
    {
      title: 'Igor the Dapper Spider',
      url: 'http://1.bp.blogspot.com/_LbccUVbSRd8/SWZpdbbXG2I/AAAAAAAAD7Y/X1-TwL_E8f0/s400/jumping+spider+eyes+10.jpg',
      description: 'Jumping Spider',
      thumbnail: 'src/images/spiderthumbnail.png',
      image: 'src/images/jumping spider eyes 10.jpg'
    }
  ];

  this.remove = spider => {
    const index = this.spiders.indexOf(spider);
    if (index > -1) this.spiders.splice(index, 1);
  };

  this.add = spider => this.spiders.push(spider);
}
