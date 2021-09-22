<template>
  <div id="page">
    <a class="link" target="_blank" href="https://github.com/Sacha-lb"
      >Le Bras Sacha</a
    >
    <p class="arrow">&uarr;</p>
    <p class="git">Click on my name to check my GitHub Account</p>
    <img src="../assets/sachaL.jpg" alt="My picture" />
    <p class="bio">Chef de pojet digitale débutant</p>
    <p class="bio2">Actuellement en alternance à Eventeam Innovation</p>
    <p class="bio3">Angular</p>
    <br />
    <p class="project">
      Un de mes projets :
      <a
        class="projectSingle"
        target="_blank"
        href="https://github.com/Sacha-lb/renduPOO"
        >POO Project</a
      >
    </p>
    <div class="buttons">
      <button
        :class="{ hide: leftVisible }"
        class="left"
        @click="change"
        type="button"
      >
        Click Here
      </button>
      <button
        :class="{ hide: rightVisible }"
        class="right"
        @click="change"
        type="button"
      >
        Not Here
      </button>
    </div>
    <div class="me">
      <p>One of my favorite place</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176217.39722891024!2d6.3993880167843376!3d46.36151421524951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c3d06fcbe3e07%3A0x3282c0cb7f4bf243!2sLac%20L%C3%A9man!5e0!3m2!1sfr!2sfr!4v1632317453944!5m2!1sfr!2sfr"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div class="me">
      <img src="../assets/vSachaL.gif" alt="My picture" />
      <p>My cat</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SachaL",
  data() {
    return {
      leftVisible: true,
      rightVisible: false,
    };
  },
  methods: {
    change() {
      this.leftVisible = !this.leftVisible;
      this.rightVisible = !this.rightVisible;
    },
  },
};
</script>

<style scoped>
#page {
  background-color: #f5f5ef;
  width: 80%;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 10%), 0 3px 6px rgb(0 0 0 / 10%);
  margin: 0 auto;
  padding: 10px;
}

#page img {
  width: 200px;
  height: 200px;
  border-radius: 100px;
}

#page a {
  color: black;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

.hide {
  opacity: 0;
}

.me {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.buttons button {
  padding: 7px 5px;
  border-radius: 5px;
  background-color: black;
  color: white;
}

.arrow {
  font-size: 35px;
}

.git {
  font-weight: bold;
}
</style>
