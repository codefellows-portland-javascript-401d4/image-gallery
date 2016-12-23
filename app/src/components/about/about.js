export default {
  template: `
  <h1>About the Spider App!</h1>
  <a ui-sref="about.next">what's coming up next?</a>
  <a ui-sref="about.now">what about spiders?</a>
  <section>
    <ui-view name="header"></ui-view>
  </section>
  <section>
    <ui-view name="main"></ui-view>
  </section>
  `
};
