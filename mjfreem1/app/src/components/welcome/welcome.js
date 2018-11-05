export default {
  template:
  `
  <h1>Bienvenue à l'Gallerie d'Art</h1>
  <span>First-time users click here: </span>
  <a ui-sref="welcome.new">Newbie Welcome</a>
  <span>Returning users click here: </span>
  <a ui-sref="welcome.old">Old Hand Welcome</a>
  <a ui-sref="albums">See Images</a>
  <a ui-sref="about">About</a>
  <section><ui-view></ui-view></section>
  `
};