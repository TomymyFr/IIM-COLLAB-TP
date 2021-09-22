<template>
  <div class="Mathilde">
    <div class="left">
      <h1>Mathilde Asselin -</h1>

      <ul class="hobbies">
        <li>Développeuse web à l'IIM 💻</li>
        <li>Passionnée de Design 👩🏻‍🎨</li>
        <li>Photographe le week-end 📷</li>
      </ul>

      <p>N'hésitez pas à aller voir mon compte photo ci-dessous !</p>
      <button class="button" style="vertical-align: middle">
        <span
          ><a href="https://www.instagram.com/math_jpg/">Compte Photo</a></span
        >
      </button>
    </div>

    <div class="right">
      <img alt="Photo Profil" src="../assets/profil.png" />
    </div>
  </div>
</template>

<script></script>

<style scoped>
.Mathilde {
  height: 700px;
  margin: 10px 120px;
}

img {
  height: 600px;
}

.left {
  float: left;
  text-align: left;
  list-style: url("../assets/arrow.svg");
  list-style-position: outside;
}

.left h1 {
  font-size: 70px;
}

.left li {
  font-size: 24px;
  padding-left: 20px;
  padding-bottom: 10px;
}

.left a {
  text-decoration: none;
  color: white;
}

.left button {
  display: inline-block;
  border-radius: 8px;
  background-color: #319696;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 22px;
  padding: 15px;
  width: 250px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.left .button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.left .button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.left .button:hover span {
  padding-right: 25px;
}

.left .button:hover span:after {
  opacity: 1;
  right: 0;
}

.left #Capa_1 {
  padding-bottom: 20px;
}

.right {
  float: right;
}
</style>
