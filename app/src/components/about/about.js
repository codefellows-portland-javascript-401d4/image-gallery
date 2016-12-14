export default {
  template: `
  <div class="component">
    <h2>About the Bunny Gallery!</h2>
    <div class="about">
      <a ui-sref="about.bio">Developer bio</a>
      <a ui-sref="about.lab">About the app</a>
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
