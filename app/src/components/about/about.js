export default {
  template: `
    <h2>About the Image Gallery</h2>
    <a ui-sref="about.short">Short Version</a>
    <a ui-sref="about.long">Long Version</a>
    <section>
        <ui-view name="header"></ui-view>
    </section>
    <section>
        <ui-view name="main"></ui-view>
    </section>
    
`
};