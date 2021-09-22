<template>
  <div class="main">
    <h1>Hi, I'm El Guendouz Ayoub - <a href="https://github.com/ayoub9360" target="_blank">Ayoub9360</a> 👋</h1>
    <h3>I am a third year student in web development !</h3>
    <p>🔭 I’m currently working at <a href="https://www.spendesk.com" target="_blank">Spendesk</a></p>
    <p>👨‍💻 All of my projects are available in my <a href="https://www.elguendouz-ayoub.com" target="_blank">website</a></p>
    <p>📫 How to reach me <a href="mailto:ayoub.elguendouz@gmail.com" target="_blank">ayoub.elguendouz@gmail.com</a></p>
    <p>📄 Know about my experiences with my <a href="https://elguendouz-ayoub.com/assets/El_Guendouz_Ayoub_CV.pdf" target="_blank">resume</a></p>
    <hr>
    <h2>What I have been working on recently ?</h2>
    <div class="container">
      <div
        v-for="(project, index) in projects"
        v-bind:key="index"
        class="container-item"
      >
        <img :src="project.img" :alt="project.title" />
        <h3>{{ project.title }}</h3>
        <p>
          {{ project.description }}
        </p>
        <a :href="project.url" target="_blank">Learn more</a>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from "../assets/ayoub-project.js";

export default {
  data() {
    return {
      projects: null,
    };
  },
  mounted() {
    this.projects = projects;
  },
};
</script>

<style scoped>
.main {
  padding-bottom: 50px;
}
hr {
  border: none;
  height: 1px;
  background: #5d21d2;
  opacity: 0.1;
  margin-top: 30px;
}
h2 {
  font-size: 30px;
}
.container {
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 80%;
}
.container-item {
  width: calc((100% / 3) - 30px);
  box-sizing: border-box;
  padding: 32px;
  box-shadow: 0 10px 40px rgb(129 128 144 / 15%);
  border-radius: 8px;
  background: #fff;
  position: relative;
  z-index: 3;
}
.container-item img {
  width: 90%;
  border-radius: 8px;
  object-fit: contain;
  height: 250px;
}
a {
  text-decoration: none;
  color: #5d21d2;
  font-weight: 800;
  margin-top: 16px;
}

@media screen and (max-width: 1000px) {
  .container {
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .container-item {
    width: calc(50% - 30px);
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 650px) {
  .container-item {
    width: calc(80% - 30px);
    margin-bottom: 30px;
  }
}
</style>
