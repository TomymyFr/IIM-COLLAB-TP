<template>
  <div class="container">
    <h1>Bienvenue !</h1>
    <div class="content">
      <h2>Qui je suis</h2>
      <div class="profile">
        <img src="../assets/avatar.png" alt="Avatar image" srcset="" />
        <div class="profile-text">
          <p class="name"><strong>Warsamé Farah Abdi</strong></p>
          <p class="skill">
            Front end developer <br />
            Vue JS / React
          </p>
          <div class="more" @click="toggleShow()">More</div>
          <div
            v-bind:class="[isActive ? 'hide-more' : 'show-more']"
            @click="toggleShow()"
            class="more-text"
          >
            <article>
              <h3>Créatif</h3>
              <p>
                Je m'efforce de toujours proposer de nouvelles idées que je peux
                concrétiser. Mon objectif principal est de me mettre au défi
                avec toutes les nouvelles technologies que je peux trouver.
              </p>
            </article>
            <article>
              <h3>Focalisé</h3>
              <p>
                Un bon projet est un projet achevé. Il est essentiel pour moi et
                pour mon travail de toujours chercher à obtenir de bons
                résultats.
              </p>
            </article>
            <article>
              <h3>Ingénieux</h3>
              <p>
                S'il y a quelque chose qui dépasse mon entendement, il ne reste
                plus qu'à l'apprendre ! Toujours viser haut et essayer d'aller
                encore plus loin.
              </p>
            </article>
          </div>
        </div>
      </div>
      <h2>Ce que j'ai fait...</h2>
      <div class="work">
        <div class="school">
          <h3>... pour l'école</h3>
          <ul>
            <li>
              <a href="https://github.com/warsamefarah/La-Table-Ronde"
                >Site web interactif sur le Roi Arthur</a
              >
            </li>
            <li>
              <a href="https://github.com/warsamefarah/projet-sass-gulp"
                >Intégration de site complète with SCSS</a
              >
            </li>
          </ul>
          ... and much more !
        </div>
        <div class="personal">
          <h3>... pour moi</h3>
          <a class="github" href="https://github.com/warsamefarah"
            ><img src="../assets/github.png" alt="Github logo"
          /></a>
          <p>Jetez un oeil à tout mes repositories !</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Warsame",
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    toggleShow() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
}

.content {
  box-shadow: 0 0 6px grey;
  border-radius: 20px;
}

.profile {
  width: 100%;
  display: flex;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
}

.profile img {
  width: 20rem;
  margin: 20px;
}

.profile-text {
  width: 80%;
  background-color: rgb(178, 235, 235);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 2px solid grey;
}

.name {
  font-size: 2rem;
}

.skill {
  font-size: 1.5rem;
}

h2 {
  padding: 10px 0;
}

.more {
  color: white;
  background-color: teal;
  width: 10%;
  margin: auto;
  padding: 10px;
  font-size: 1.1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;
}

.more:hover {
  background-color: rgb(60, 148, 148);
  transition: 0.2s;
}

.more-text {
  position: absolute;
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 20px;
  border: 2px solid grey;
}

article {
  width: 80%;
  margin: auto;
}

.work {
  display: flex;
  justify-content: space-around;
  border-top: 2px solid grey;
}

.school {
  width: 50%;
  border-right: 1px solid grey;
  background-color: rgb(255, 204, 204);
  border-radius: 0 0 0 20px;
}

li {
  list-style-type: none;
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
}

a {
  color: black;
}

.personal {
  width: 50%;
  border-left: 1px solid grey;
  background-color: lightyellow;
  border-radius: 0 0 20px 0;
}

.github img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.4);
}

/* CLASSES */
.show-more {
  opacity: 1;
  transform: scale(1);
  transition: 0.2s;
}

.hide-more {
  opacity: 0;
  transform: scale(0);
  transition: 0.2s;
}
</style>
