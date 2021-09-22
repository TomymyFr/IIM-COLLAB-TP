<template>
  <div class="container">
    <main>

      <!-- title -->
      <div class="title">
        <img
          src="https://avatars.githubusercontent.com/u/70761355"
        />
        <h2>
            Claire Brisbart - 
            <span class="title_highlight">A3 DW Alt2</span>
        </h2>
        <p>💼 Assistante chef de projet digital chez TotalEnergies</p>
        <p>🦖 Co-présidente de la 404 Devinci</p>
      </div>

       <!-- projets -->
      <div class="project">
        <a target="_blank" :href="project?.url">
          {{ project?.description }}
        </a>
      </div>

      <!-- button -->
      <div class="button">
        <button class="btn shuffle" v-on:click="getRandomProject">
          shuffle
        </button>
        <a href="https://www.clr-brisbart.fr">My Website</a>
        <a href="https://github.com/Pouniflu">Github</a>
      </div>
            
    </main>
  </div>
</template>

<script>
const projects = [
  {
    url: "https://recap.antogin.dev/",
    description: "A Monthly spotify recap",
  },
  {
    url: "https://player.antogin.dev/",
    description: "Music Player",
  },
  {
    url: "https://qr.antogin.dev",
    description: "QR code reader",
  },
  {
    url: "https://pwd.antogin.dev",
    description: "Password generator",
  },
  {
    url: "https://sugar.antogin.dev/",
    description: "Diabetes / Glucodes calculator",
  },
];

export default {
  name: "Antonio",
  data() {
    return {
      project: {
        url: "https://recap.antogin.dev/",
        description: "A Monthly spotify recap",
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
    width: 30%;
    border-radius: 26px;
    box-shadow: 6px 3px 10px rgba(143, 143, 143, 0.226);
    padding: 40px;
    margin: 0 auto;
}

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
    color: #2C3E50;
}

.title p {
    margin: 5px 0;
    color: rgb(152, 155, 158)
}

.title_highlight {
    color: #42B983;
}

</style>