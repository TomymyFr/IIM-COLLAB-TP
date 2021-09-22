<template>
  <header>
    <div class="texte">
      <h1 class="titreprenom">LOUIS MONY</h1>
      <p>Elève en troisième année du bachelor développement web à l'IIM .</p>
      <p>Un lien vers un de mes projets ainsi que vers mon profil github .</p>
      <p>
        <a
          id="spotify"
          target="_blank"
          href="https://open.spotify.com/album/3HaEZ2xc3dWnWYby3jQ0mm?si=qQOcBhf8Tb2_3qNfETy3SQ&dl_branch=1"
        >
          > Un projet</a
        >
      </p>
      <p>
        <a class="github" target="_blank" href="https://github.com/LouisMony">
          > Github</a
        >
      </p>
    </div>
    <img
      src="https://i.scdn.co/image/ab67616d0000b27391b7b69e5598a44f9c2b9da4"
    />
  </header>
</template>

<script></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
  width: 100%;
  height: 100vh;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(34, 34, 34, 1) 100%
  );
}

h1 {
  font-size: 112px;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 10px;
  margin: 0;
}

.texte {
  position: absolute;
  top: 24.5%;
  left: 50%;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  text-align: left;
  background: linear-gradient(
    320deg,
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.05) 80%
  );
  padding-right: 16px;
  padding-left: 16px;
  border: solid 1px;
  border-color: rgba(255, 255, 255, 0.23);
  box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.55);
  -webkit-box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.55);
}

img {
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 28%;
  width: 30%;
  height: auto;
  box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.75);
}

.texte a {
  text-decoration: none;
  font-size: 20;
  color: white;
}

.texte a:hover {
  background-color: white;
  color: black;
}
</style>
