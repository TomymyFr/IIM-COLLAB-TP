<template>
  <div class="container">
    <header>
      <i class="fa fa-bars" aria-hidden="true"></i>
    </header>
    <main>
      <div class="container">
        <div>
          <div>
            <img
              class="profile"
              src="https://avatars.githubusercontent.com/u/70767445?v=4"
            />
          </div>
          <h1>Nicolas de Garrigues</h1>
          <p class="description">FullStack dev</p>
          <p class="description">VueJS/Laravel</p>

          <p class="projects">
            Viens faire un tour sur mes projets :3 <br />

            <a target="_blank" :href="project?.url">
              {{ project?.description }}
            </a>
          </p>

          <div>
            <button class="btn shuffle" @click="getRandomProject">
              shuffle
            </button>
          </div>
          <div>
            <p id="gg"></p>
            <div style="padding: 10px" v-if="counter > 0">
              {{ counter }}/10 <br />
            </div>
            <button class="btn counter" @click="easterEgg">
              Clique-moi 10 fois !
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
const projects = [
  {
    url: "https://github.com/Lainocs/competences_alternance",
    description: "Test de compétences",
  },
  {
    url: "https://github.com/Lainocs/symfony_portfolio",
    description: "Portfolio en Symfony",
  },
  {
    url: "https://github.com/Lainocs/api_rest_asso",
    description: "API REST Associations du pôle",
  },
  {
    url: "https://github.com/Lainocs/harmonication-code",
    description: "Projet de groupe",
  },
];

export default {
  name: "NicolasDG",
  data() {
    return {
      counter: 0,
      project: {
        url: "https://github.com/Lainocs/harmonication-code",
        description: "Projet de groupe",
      },
    };
  },
  methods: {
    getRandomProject() {
      this.project = projects.filter(
        (el) => el.description !== this.project.description
      )[Math.floor(Math.random() * (projects.length - 1 ?? 0))];
    },

    easterEgg() {
      this.counter += 1;
      if (this.counter >= 10) {
        document.getElementById("gg").innerHTML =
          "Bravo ! Merci à toi pour ces deux jours de cours ;) Btw si tu hésites pour ma notation tu peux te baser sur ce qu'il y a écrit juste en dessous héhé :)";
      }
    },
  },
};
</script>

<style scoped>
main {
  padding: 50px;
  border-radius: 20px;
  width: 90%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
  background: url("https://global-img.gamergen.com/attack-on-titan-18-09-2015-screenshot-20_0000817703.jpg");
}
.container {
  padding: 20px;
  border-radius: 20px;
  color: #ffffff;
  width: 90%;
  min-height: 50vw;
  margin: 0 auto;
  background: rgba(182, 105, 42, 0.8);
}

.description {
  font-size: 20px;
}

.profile {
  margin: 10px;
  border-radius: 20px;
  width: 15vw;
}

.projects {
  font-size: 30px;
}

.projects a {
  font-size: 40px;
  color: rgb(255, 244, 213);
  text-decoration: none;
}

.projects a:hover {
  color: rgb(255, 222, 131);
  text-decoration: underline;
}

.btn {
  margin: 50px;
  background-color: rgb(245, 180, 0);
  border-radius: 3px;
  color: #fff;
  font-size: 20px;
}
</style>
