<template>
  <div class="lucas-container">
    <div
      class="header"
      @click="changeRandomColorHeader()"
      :style="{ backgroundColor: colorHeader }"
    >
      <h1>Salut moi c Lucas lol</h1>
      <button class="button-counter" @click="count++">cliquez moi</button>
      <p class="counter">{{ count }}</p>
    </div>
    <div
      class="info"
      @click="changeRandomColorContent()"
      :style="{ backgroundColor: colorContent }"
    >
      <p class="pres">Moi c'est Lucas futur devops eheh</p>
      <p>
        j'ai 20 ans et je vous conseille de passer sur linux parce que windows
        c'est nul
      </p>
      <a href="https://lucaspistron.fr/" target="_blank">Mon portfolio</a>
    </div>
    <div class="rabbit">
      <p>
        J'ai pas de photos de moi alors voici mon lapin, son nom c'est Papouf,
        il est mignon non ?
      </p>
      <div class="pictures">
        <img src="../assets/lucasC/papouf1.jpg" />
        <img src="../assets/lucasC/papouf2.jpg" />
        <img src="../assets/lucasC/papouf3.jpg" />
        <img src="../assets/lucasC/papouf4.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
const colors = [
  "red",
  "blue",
  "green",
  "orange",
  "yellow",
  "black",
  "purple",
  "grey",
  "brown",
];

export default {
  name: "Lucas",
  data() {
    return {
      colorHeader: "red",
      colorContent: "green",
      count: 0,
    };
  },
  methods: {
    changeRandomColorHeader() {
      const newColor = colors[Math.floor(Math.random() * colors.length)];
      this.colorHeader = newColor;
    },
    changeRandomColorContent() {
      const newColor = colors[Math.floor(Math.random() * colors.length)];
      this.colorContent = newColor;
    },
  },
};
</script>

<style scoped>
.header,
.info {
  width: 60%;
  margin: 0 auto;
  padding: 20px 0;
  border-radius: 40px;
  color: white;
  cursor: pointer;
}

.info {
  margin-top: 50px;
}

.info a {
  background-color: white;
  padding: 5px 10px;
  text-decoration: none;
  color: black;
  border-radius: 10px;
  border: 1px solid black;
}

.rabbit {
  width: 80%;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid orange;
  border-radius: 40px;
}
.rabbit .pictures {
  display: flex;
  justify-content: space-between;
}

.rabbit img {
  width: 200px;
}
</style>
