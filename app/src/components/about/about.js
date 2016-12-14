export default {
  template:
  `
  <h1>About Us/О Нас</h1>
  <a ui-sref="about.english">English</a>
  <a ui-sref="about.russian">На Русском</a>
  <a ui-sref="welcome">Home</a>
  <a ui-sref="images">See Images</a>
  <section>
    <ui-view name="header"><ui-view>
  </section>
  <section>
    <ui-view name="body"><ui-view>
  </section>
  `
};