// "Mantids" page ...

import template from './mantids.html';
import styles from './mantids.scss';

export default {
  template,
  controller
};

controller.$inject = ['mantisService'];

function controller(mantids) {

  this.styles = styles;

  this.loading = true;

  // get all images
  mantids.get()
    .then (mantids => {
      this.loading = false;
      this.mantids = mantids;
    });

  this.detail = function() { // detail view
    this.mantisDetail = true;
    this.mantisThumbnail = false;
    this.mantisImage = false;
  };

  this.thumbnail = function() { // thumbnail view
    this.mantisDetail = false;
    this.mantisThumbnail = true;
    this.mantisImage = false;
  };

  this.image = function() { // image view
    this.mantisDetail = false;
    this.mantisThumbnail = false;
    this.mantisImage = true;
  };

  // call the GET to load all mantids
  mantids.get().then(mantids => {
    this.loading = false;
    this.mantids = mantids;
  });

  // remove this mantis
  this.remove = mantis => {
    this.loading = true;
    mantids.remove(mantis._id)
      .then(() => {
        this.loading = false;
        // after server has updated data, modify in-memory array
        const index = this.mantids.indexOf(mantis);
        if (index > -1) this.mantids.splice(index, 1);
      });
  };

  // add a mantis
  this.add = mantis => {
    this.loading = true;
    mantids.add(mantis)
      .then(saved => {
        this.loading = false;
        // push to in-memory array
        this.mantids.push(saved);
      });
  };
}
