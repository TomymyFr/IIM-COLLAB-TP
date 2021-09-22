@@ -0,0 +1,203 @@
<template>
  <div class="container">
    <header>
      <i class="fa fa-bars" aria-hidden="true"></i>
    </header>
    <main>
      <div class="row">
        <div class="content">
          <div class="photo-content">
            <img
              class="photo"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6a%2Fc6%2F97%2F6ac697ba85bfe5074c202fc02fba6281.jpg&f=1&nofb=1"
            />
          </div>
          <h4 class="name">Malo Daniel Braunschweig</h4>
          <p class="stacks">Front/End/Test Dev</p>
          <p class="stacks">Javascript | Selenium(JAVA) | C#</p>

          <p class="gold">My projects (hover it):</p>
          <br />
          <div v-on:click="getRandomProject" class="projects">
            <img class="imgproject" :src="project?.url" />
            <p>
              {{ project?.description }} <br />
              Click to Shuffle
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
const projects = [
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fajkueterman.com%2Fimages%2Fswift-button.png&f=1&nofb=1",
    description: "Healthcare Application ",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0326/4089/2987/files/Headline_simplifiez_vous_le_zero_dechet_Mezure_540x.jpg?v=1616168685",
    description: "Mezure Web Site",
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.apres-vente-auto.com%2Fwp-content%2Fuploads%2F2010%2F05%2FAutodistribution_logo_620.jpg&f=1&nofb=1",
    description: "Autodistribution Web APP",
  },
];
export default {
  name: "Antonio",
  data() {
    return {
      project: {
        url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.apres-vente-auto.com%2Fwp-content%2Fuploads%2F2010%2F05%2FAutodistribution_logo_620.jpg&f=1&nofb=1",
        description: "Autodistribution Web APP",
      },
    };
  },
  methods: {
    getRandomProject() {
      this.project = projects.filter(
        (el) => el.description !== this.project.description
      )[Math.floor(Math.random() * (projects.length - 1 ?? 0))];
    },
  },
};
</script>
<style scoped>
main {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.container {
  border-radius: 50px;
  max-width: 1250px;
  margin: 30px auto 30px;
  padding: 0 !important;
  width: 90%;
  background-color: black;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}
header {
  background: #eee;
  background-image: url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clg-apollinaire-plaisir.ac-versailles.fr%2FIMG%2Fjpg%2Fguernicab.jpg&f=1&nofb=1");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 250px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
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
.content {
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
  border: 4px solid rgb(238, 183, 66);
}
.name {
  margin-top: 20px;
  font-weight: 600;
  font-size: 18pt;
  color: rgb(238, 183, 66);
}
.stacks {
  margin-top: -5px;
  margin-bottom: 5px;
  font-size: 11pt;
  color: #aaa;
}
.gold {
  color: rgb(238, 183, 66);
  font-size: 20px;
}
.projects {
  height: 220px;
  width: 300px;
  display: flex;
}
.projects img {
  position: relative;
  align-self: center;
  justify-self: center;
  border-radius: 10px;
}
.projects p {
  position: absolute;
  align-self: center;
  width: 300px;
  color: #ffffff00;
}
.projects:hover img {
  opacity: 20%;
}
.projects:hover p {
  color: white;
}
.imgproject {
  height: 200px;
  width: 300px;
}
.stats {
  margin-top: 25px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ededed;
}
</style>
