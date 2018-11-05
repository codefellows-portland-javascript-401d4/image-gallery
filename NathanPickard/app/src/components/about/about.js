export default {
  template: `
  <h1>About the Animal image gallery!</h1>
  <a ui-sref="about.wild">Wild</a>
  <a ui-sref="about.domestic">Domestic</a>
  <section>
    <ui-view name="header"></ui-view>
  </section>
  <section>
    <ui-view name="main"></ui-view>
  </section>
  `
};