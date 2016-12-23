// "Welcome" page

export default {
  template: `
  <h1>Welcome to the Spider Gallery!</h1>
  <h3>Are you?</h3>
  <a ui-sref="welcome.new">new</a>
  <a ui-sref="welcome.returning">returning</a>
  <section>
  <ui-view></ui-view>
  </section>
  `
};
