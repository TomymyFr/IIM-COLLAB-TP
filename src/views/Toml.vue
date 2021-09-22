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
              src="https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/people-a-z/lionel-messi/6071756-4-fre-FR/Lionel-Messi.jpg"
            />
            <div class="active"></div>
          </div>
          <h4 class="name">{{ name }}</h4>
          <p class="info">{{ job }}</p>
          <p class="info">{{ technos }}</p>

          <p class="desc">
            A project :
            <a class="project-link" target="_blank" :href="project?.url">
              {{ project?.description }}
            </a>
          </p>

          <div>
            <button class="btn getProject" v-on:click="getProject">
              Randomize
            </button>
          </div>

          <div class="footer-container">
            <div class="footer">Bio : <br /><br />{{ bio }}</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
const projects = [
  {
    url: "http://detc.g31c.com/",
    description: "D&C Consultants",
  },
  {
    url: "https://github.com/Bakabruh/To-do-list",
    description: "To do list",
  },
  {
    url: "https://github.com/Bakabruh/ftp-rendu.github.io",
    description: "Projet d'architecture front",
  },
];

export default {
  name: "Toml",
  data() {
    return {
      project: {
        url: "",
        description: "",
      },

      name: "Tom Louveau",
      job: "Développeur FullStack",
      technos: "Php/Node.js/Vue.js/Wordpress/Laravel",
      bio: "Etudiant en 3ème année de développement web à l’IIM (Institut de l’Internet et du Multimédia), j’ai toujours été passionné par le multimédia et les nouvelles technologies. Durant cette deuxième année d’études, j’ai pu découvrir énormément de technologies et de langages que je souhaiterais mettre en pratique dès maintenant. Pudding chupa chups oat cake tootsie roll caramels. Chupa chups carrot cake sesame snaps jelly-o jujubes bonbon pie topping. Croissant croissant halvah jelly-o caramels icing. Muffin wafer cake jelly candy canes tootsie roll cupcake chocolate bar. Soufflé cake ice cream muffin lemon drops. Jujubes dessert bonbon halvah cheesecake candy gummies dessert jelly-o. Topping marzipan candy canes halvah icing. Wafer cotton candy pudding caramels soufflé danish.",
    };
  },
  methods: {
    getProject() {
      this.project = projects.filter(
        (el) => el.description !== this.project.description
      )[Math.floor(Math.random() * (projects.length - 1 ?? 0))];
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1400px;
  margin: 30px auto 30px;
  padding: 0 !important;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 20%;
  overflow: scroll;
}

header {
  background: #eee;
  background-image: url("https://images.pexels.com/photos/3038601/pexels-photo-3038601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 350px;
}

header i {
  position: relative;
  cursor: pointer;
  right: -96%;
  top: 25px;
  font-size: 18px;
  color: #fff;
}

main {
  height: 100vh;
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
  width: 400px;
  height: 400px;
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
  text-transform: uppercase;
  color: #7873ff;
  font-weight: bold;
  padding: 5px 10px;
  border: none;
}
.btn:hover {
  color: #fff;
  padding: 5px 15px;
  transition: 0.5s;
  background-color: #7873ff;
}

a:visited {
  color: #7873ff;
}

.footer-container {
  overflow: scroll;
}

.footer {
  text-align: left;
  font-size: 20px;
  padding: 50px 150px;
}
</style>
