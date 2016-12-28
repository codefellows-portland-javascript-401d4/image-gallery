export default {
  template: `
  <h1>Welcome to the animal image gallery app!!</h1>
  <h3>Are you?</h3>
  <a ui-sref="welcome.new">New</a>
  <a ui-sref="welcome.returning">Returning</a>
  <section><ui-view>This is the defaul text</ui-view></section>
  `
};