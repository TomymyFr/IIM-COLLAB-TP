<template>
  <body>
    <img
      src="../assets/lilpeep_manga.jpg"
      alt="image de lilpeep en manga"
      class="imageBackground"
    />
    <div class="contain">
      <img src="../assets/profil.jpg" alt="image profil" class="imageProfil" />
      <h1>Kevin Ho</h1>
      <h2>i want to be FullStack dev foreal</h2>
      <p>Vidéo game is my passion 🙌</p>
      <p>My name is Kevin i'm 21 yr, studying dev in iim school for 5 yr.</p>

      <p class="desc">Show u some project i built :</p>
      <br />
      <a
        href="https://github.com/shinshan73/portfolio-shinshan-bbt"
        target="_blank"
      >
        My portfolio Bubble Tea</a
      >
      <br />
      <br />
      <a href="https://github.com/shinshan73/Fil-rouge" target="_blank">
        Project Fil rouge
      </a>
      <br />
      <br />
    </div>
  </body>
</template>

<style scoped>
body {
  border: 5px solid lightcoral;
  padding: 15px;
  width: 75%;
  margin-left: 10%;
}
.imageBackground {
  width: 100%;
  height: 200px;
}
.imageProfil {
  width: 200px;
  height: 200px;
  margin-top: -50px;
  border-radius: 100px;
  border: 5px solid lightcoral;
}
.desc {
  font-size: 25px;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
}
.but {
  color: purple;
  width: 10%;
  font-size: 20px;
  border-radius: 80%;
  background-color: lightcoral;
}
.but:hover {
  color: blue;
  background-color: lightcyan;
}
a {
  color: green;
  font-size: 20px;
}
</style>

<script>
export default {
  name: "Kevin",
};
</script>
