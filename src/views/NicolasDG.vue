<template>
  <div class="container">
    <header>
      <i class="fa fa-bars" aria-hidden="true"></i>
    </header>
    <main>
      <div class="row">
        <div class="left col-lg-4">
          <div class="photo-left">
            <img
              class="photo"
              src="https://avatars.githubusercontent.com/u/70767445?v=4"
            />
            <div class="active"></div>
          </div>
          <h4 class="name">Nicolas de Garrigues</h4>
          <p class="info">FullStack dev</p>
          <p class="info">VueJS/Laravel</p>

          <p class="desc">
            J'avoue j'ai pas fait d'effort pour le style. Mais viens voir mes
            projets :3 <br />

            <a target="_blank" :href="project?.url">
              {{ project?.description }}
            </a>
          </p>

          <div>
            <button class="btn shuffle" @click="getRandomProject">
              shuffle
            </button>
          </div>
          <div style="padding: 20px">
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
    description: "Projet de groupe Harmonisation du code",
  },
];

export default {
  name: "NicolasDG",
  data() {
    return {
      counter: 0,
      project: {
        url: "https://github.com/Lainocs/harmonication-code",
        description: "Projet de groupe Harmonisation du code",
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
.container {
  max-width: 1250px;
  margin: 30px auto 30px;
  padding: 0 !important;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}

header {
  background: #eee;
  background-image: url("https://global-img.gamergen.com/attack-on-titan-18-09-2015-screenshot-20_0000817703.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 250px;
}

header i {
  position: relative;
  cursor: pointer;
  right: -96%;
  top: 25px;
  font-size: 18px;
  color: #fff;
}

@media (max-width: 800px) {
  header {
    height: 150px;
  }

  header i {
    right: -90%;
  }
}

main {
  padding: 20px 20px 0px 20px;
}

.left {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.photo {
  width: 200px;
  height: 200px;
  margin-top: -120px;
  border-radius: 100px;
  border: 4px solid #fff;
}

.name {
  margin-top: 20px;
  font-weight: 600;
  font-size: 18pt;
  color: #777;
}

.info {
  margin-top: -5px;
  margin-bottom: 5px;
  font-size: 11pt;
  color: #aaa;
}

.stats {
  margin-top: 25px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ededed;
}

.desc {
  text-align: center;
  margin-top: 25px;
  margin: 25px 40px;
  color: #999;
  font-size: 25pt;
  padding-bottom: 25px;
  border-bottom: 1px solid #ededed;
}

.right {
  padding: 0 25px 0 25px !important;
}

.btn {
  cursor: pointer;
  padding: 0.35em 1.2em;
  border: 0.1em solid #000;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  color: #ffffff;
  background-color: #000;
  text-align: center;
  transition: all 0.2s;
  margin-bottom: 20px;
}
.btn:hover {
  color: #000;
  background-color: #eee;
}

a:visited {
  color: #42b983;
}
</style>
