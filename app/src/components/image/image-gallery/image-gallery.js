import template from './image-gallery.html'; 
import styles from './image-gallery.scss';

export default {
  template,
  bindings: {
    images: '='
  },
  controller 
};

function controller () {
  this.styles = styles;

  this.c = 0;
  this.n = 1;
  this.p = -1;

  this.next = () => {
    if(this.c >= this.images.length - 1){
      this.c = 0;
      this.p = this.images.length -1;
      this.n = 1;
    } else if(this.c === this.images.length - 2){
      this.c++;
      this.p++;
      this.n = 0;
    } else {
      this.c++;
      this.p++;
      this.n++;
    }
  };

  this.previous = () => {
    if(this.c === 0){
      this.c = this.images.length - 1;
      this.n = 0;
      this.p = this.images.length - 2;
    } else if (this.c === this.images.length -1) {
      this.n = this.images.length - 1;
      this.c--;
      this.p--;
    } else {
      this.c--;
      this.n--;
      this.p--;
    }
  };


}