// "Subjects" page ...

import template from './images.html';
import styles from './images.scss';

export default {
  template,
  controller
};

controller.$inject = ['subjectService'];

function controller(subjects) {

  this.styles = styles;

  this.loading = true;

  // get all images
  subjects.get()
    .then (subjects => {
      this.loading = false;
      this.subjects = subjects;
    });

  this.detail = function() { // detail view
    this.subjectDetail = true;
    this.subjectThumbnail = false;
    this.subjectImage = false;
  };

  this.thumbnail = function() { // thumbnail view
    this.subjectDetail = false;
    this.subjectThumbnail = true;
    this.subjectImage = false;
  };

  this.image = function() { // image view
    this.subjectDetail = false;
    this.subjectThumbnail = false;
    this.subjectImage = true;
  };

  // call the GET to load all subjects
  subjects.get().then(subjects => {
    this.loading = false;
    this.subjects = subjects;
  });

  // remove this subject
  this.remove = subject => {
    this.loading = true;
    subjects.remove(subject._id)
      .then(() => {
        this.loading = false;
        // after server has updated data, modify in-memory array
        const index = this.subjects.indexOf(subject);
        if (index > -1) this.subjects.splice(index, 1);
      });
  };

  // add a subject
  this.add = subject => {
    this.loading = true;
    subjects.add(subject)
      .then(saved => {
        this.loading = false;
        // push to in-memory array
        this.subjects.push(saved);
      });
  };
}
