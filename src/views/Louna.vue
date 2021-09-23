<template>
  <header>
    <div class="fond">
      <img
        src="https://static.vecteezy.com/ti/vecteur-libre/p1/2099710-montagne-beau-paysage-fond-vecteur-design-illustration-gratuit-vectoriel.jpg"
      />
    </div>
  </header>

  <main>
    <div class="contain_main">
      <div class="flex-container">
        <div class="pp">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEmteGnADulHw/profile-displayphoto-shrink_400_400/0/1586205365979?e=1637798400&v=beta&t=9c5oTReoGegcEtPA1D1J5ql7ovArOsb2k5GOXvMKncs"
          />
        </div>
        <div class="nom">
          <h1>
            Louna<br />
            Bordet
          </h1>
        </div>
      </div>
      <p class="bio">
        Bonjour, je m'appelle Louna Bordet et je viens t'intégrer l'IIM en
        DevWeb Alternance.<br />
        J'espère sortir de cette formation avec une expérience du monde
        professionel et un bagage technique complet.
      </p>
      <div class="projet">
        <h2>Mes réseaux :</h2>
        <p>
          <a id="test1" target="_blank" href="https://github.com/lounab">
            - GitHub</a
          >
        </p>
        <button
          id="test2"
          onclick="window.location.href = 'https://www.linkedin.com/in/louna-bordet-1806a01a6/';"
        >
          - Linkedin
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caramel&display=swap");
h1 {
  font-family: "Caramel", cursive;
  font-size: 50px;
  position: fixed;
  left: 52%;
  top: 12%;
  line-height: 40px;
}
.fond img {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -2;
  filter: grayscale(50%);
}
main {
  background-color: white;
  width: 30vw;
  height: 80vh;
  margin: auto;
  margin-top: -70px;
  padding: 3%;
}
.flex-container {
  display: flex;
  justify-content: left;
  margin-left: -20%;
}
.nom {
  margin-left: -10%;
}
.contain_main {
  margin-top: 8%;
}
.pp img {
  clip-path: ellipse(50% 50%);
  width: 40%;
}
.bio {
  margin-top: 40px;
  text-align: left;
}
.projet {
  text-align: left;
  margin-top: 50px;
}
.projet a {
  text-decoration: none;
  color: black;
}
.projet a:hover {
  text-decoration: underline;
  color: #42b983;
}
button {
  border: none;
  background: none;
  font-size: 16px;
  padding: 0;
  cursor: pointer;
}
button:hover {
  text-decoration: underline;
  color: #42b983;
}
h2 {
  font-family: "Caramel", cursive;
  font-size: 35px;
  line-height: 5px;
}
</style>
