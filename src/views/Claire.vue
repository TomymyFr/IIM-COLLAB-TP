<template>
  <div class="container">
    <div class="color"></div>
    <main>
      <!-- title -->
      <div class="title">
        <img
          src="https://avatars.githubusercontent.com/u/70761355"
          alt="photo de Claire"
        />
        <h2>
          Claire Brisbart -
          <span class="title_highlight">A3 DW Alt2</span>
        </h2>
        <hr />
        <p>💼 Assistante chef de projet digital chez TotalEnergies</p>
        <p>🦖 Co-présidente de la 404 Devinci</p>
      </div>

      <!-- projets -->
      <div class="project">
        <a
          class="project_link external_link"
          href="https://forum-associatif-numerique.fr"
          target="_blank"
          >Forum associatif numérique</a
        >
        <a
          class="project_link external_link"
          href="https://github.com/Pouniflu/fil_rouge"
          target="_blank"
          >Projet Fil Rouge</a
        >
        <a
          class="project_link external_link"
          href="https://github.com/Pouniflu/TD-VueJS"
          target="_blank"
          >To do list Vue.js</a
        >
        <a
          class="project_link external_link"
          href="http://www.baijy.com"
          target="_blank"
          >Baijy.com</a
        >
      </div>

      <!-- button -->
      <div class="button">
        <a
          class="external_link"
          href="https://www.clr-brisbart.fr"
          target="_blank"
          >Visit my 💻</a
        >
        <a
          @mouseover="changeEmoji"
          @mouseleave="returnEmoji"
          class="external_link"
          href="https://github.com/Pouniflu"
          target="_blank"
          >{{ message }}</a
        >
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Claire",
  data() {
    return {
      message: "Github 😺",
    };
  },
  methods: {
    changeEmoji() {
      this.message = "Github 😻";
    },
    returnEmoji() {
      this.message = "Github 😺";
    },
  },
};
</script>

<style scoped>
.color {
  position: absolute;
  width: calc(100% - 8px);
  height: 60vh;
  background-color: #42b983;
  z-index: -1;
  bottom: 0;
}

main {
  width: 30%;
  border-radius: 26px;
  box-shadow: 6px 3px 10px rgba(143, 143, 143, 0.377);
  background-color: white;
  padding: 40px;
  margin: 0 auto;
}

/* Title */

.title {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.title img {
  width: 30%;
  border-radius: 30px;
}

.title h2 {
  margin: 26px 0 12px;
  color: #2c3e50;
}

.title p {
  margin: 5px 0;
  color: rgb(152, 155, 158);
}

.title hr {
  margin: 5px 0 16px;
}

.title_highlight {
  color: #42b983;
}

/* Projects */
.project {
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
}

.project_link {
  background-color: #89bef3;
  padding: 6px 14px;
  margin: 6px 6px;
  border-radius: 6px;
  text-decoration: none;
  font-style: italic;
  color: #2c3e50;
  font-size: 14px;
}

.project_link:hover {
  background-color: #42b983;
  color: #0a1b13;
}

/* Buttons */
.button {
  margin: 40px 0 20px;
}

.button a {
  border: solid #42b983 3px;
  padding: 10px 18px;
  border-radius: 18px;
  margin: 10px 20px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: #42b983;
  font-size: 18px;
}

.button a:hover {
  box-shadow: 6px 3px 10px #42b98375;
}

.button a:first-of-type {
  border: solid #42b983 3px;
  color: white;
  background-color: #42b983;
}
</style>
