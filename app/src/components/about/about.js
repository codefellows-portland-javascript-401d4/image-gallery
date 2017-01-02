export default {
  template: `
  <div class="component detail">
    <h2>About the Bunny Gallery!</h2>
    <div class="about">
      <a ui-sref="about.bio">Developer bio</a>
      <a ui-sref="about.lab">App info</a>
      <section>
          <ui-view name="about.bio"></ui-view>
      </section>
      <section>
          <ui-view name="about.lab"></ui-view>
      </section>
    </div>
  </div>
  `
};
