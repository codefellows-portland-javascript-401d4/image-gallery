// url page ==> about/main + links to SPA views ...

export default {
  template: `
  <h2>About this Image Gallery App</h2>
  <section>
    <ui-view name="header"></ui-view>
  </section>
  <section>
    <ui-view name="main"></ui-view>
  </section>
  <a ui-sref="next.main">what's coming up next?</a>
  `
};
