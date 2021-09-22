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
};
</script>

<style scoped>
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
</style>
