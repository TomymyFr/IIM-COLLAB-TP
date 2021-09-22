<template>
  <div class="main-banner">
    <div class="main-header">
      <img
        src="https://avatars.githubusercontent.com/u/37938250?v=4&s=150"
        class="avatar"
      />
      <h1>Julien Cousin-Alliot</h1>
      <a href="https://github.com/nispeon" target="_blank">@Nispeon</a>
      <p>Paris, France 🇫🇷</p>
      <div class="main-titles">
        <h2>{{ title }}</h2>
        <button class="main-switch" v-on:click="getRandomTitle">🔄</button>
      </div>
      <h3>
        Créateur de
        <a href="https://git-stars.com/" target="_blank">Git Stars</a>
      </h3>
    </div>
  </div>
  <section>
    <div id="disco">
      <button id="lesgo">Let's go</button>
    </div>
  </section>
</template>

<script>
const titles = [
  "Développeur Back-End",
  "Étudiant à l'IIM",
  "Alternant chez JoliCode",
  "Fan d'OSS",
];

export default {
  name: "Julien.vue",
  data() {
    return {
      title: "Développeur Back-End",
    };
  },
  methods: {
    getRandomTitle() {
      this.title = titles.filter((el) => el !== this.title)[
        Math.floor(Math.random() * (titles.length - 1 ?? 0))
      ];
    },
  },
  mounted() {
    let but = document.getElementById("lesgo");
    let discofloor = document.getElementById("disco");

    but.addEventListener("click", function () {
      but.style.display = "none";

      window.setInterval(disco, 500);

      function disco() {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);

        let colors = [
          "red",
          "orange",
          "yellow",
          "blue",
          "indigo",
          "purple",
          "pink",
          "cyan",
          "lime",
        ];

        discofloor.style.backgroundColor = colors[x];
        discofloor.style.borderColor = colors[y];
      }

      window.setInterval(dancers, 500);

      function dancers() {
        let dancer = document.createElement("p");

        let species = Math.random();

        if (species <= 0.5) {
          dancer.innerHTML = "😺";
        } else {
          dancer.innerHTML = "🐶";
        }

        dancer.style.position = "absolute";
        dancer.style.left = Math.random() * 92 + "%";
        dancer.style.top = Math.random() * 89 + "%";
        dancer.style.transform = "scale(" + Math.random() * 4 + ")";

        let flip = Math.random();

        if (flip <= 0.5) {
          dancer.style.transform = "scaleX(-1)";
        }

        discofloor.appendChild(dancer);
      }
    });
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

section {
  width: 100%;
}

.main-banner {
  background-image: url("https://images.unsplash.com/photo-1631116612648-81db5027112a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80");
  background-size: contain;
  padding: 3vh;
}

.main-header {
  border: 1px solid black;
  border-radius: 5px;
  padding: 3vh;
  margin: 3vh 10% 10%;
  background-color: rgba(255, 255, 255, 0.78);
}

.main-titles {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-titles button {
  border: none;
  background: none;
  cursor: pointer;
}

.avatar {
  border-radius: 50%;
}

a {
  text-decoration: none;
}

h3 a {
  color: #c2a929;
}

#disco {
  background-color: black;
  position: absolute;
  min-height: 50vh;
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  border: 25px solid white;
}

#disco button {
  border: none;
  padding: 2vh 10%;
  background-color: #dbb2e3;
  color: #294974;
  font-family: sans-serif;
  font-size: larger;
  font-weight: 800;
  border-radius: 20px;
  cursor: pointer;
}

#disco button:focus {
  outline: none;
}
</style>
