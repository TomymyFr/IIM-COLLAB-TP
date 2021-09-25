<template>
  <div id="myDesc">
    <img
      src="https://media-exp1.licdn.com/dms/image/C4E03AQF3UpzRwVUGzw/profile-displayphoto-shrink_800_800/0/1584433248100?e=1637798400&v=beta&t=qSyk0qD4U8pMy000D5tSqbhvtfdIPQLu7hlJzrSPLB0"
      alt="profile picture"
    />
    <div class="card">
      <h1>Yann Decelle</h1>
      <p>Étudiant en troisième année à l'IIM en recherche d'une alternance</p>
    </div>
  </div>

  <div class="Compcontainer">
    <h1>Mes compétences</h1>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JS</li>
      <li>PHP</li>
      <li>Jquery</li>
      <li>VueJS</li>
      <li>React</li>
      <li>Laravel</li>
      <li>Suite Adobe</li>
      <li>Suite Office</li>
    </ul>
  </div>
  <div class="Realcontainer">
    <h1>Mes Réalisation</h1>
    <p>Voici un exemple de projet auquel j'ai pu participer:</p>
    <iframe
      width="420"
      height="315"
      src="https://www.youtube.com/embed/bG2HaG5NDD8"
      id="projExemple"
    />
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#myDesc {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

img {
  width: 25%;
  border-radius: 100%;
  margin-bottom: 2%;
  transition: 0.5s;
}

img:hover {
  width: 30%;
  border-radius: 100px;
  transition: 0.5s;
}

.Compcontainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1,
p {
  margin-bottom: 1%;
}

.Realcontainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1,
p {
  margin-bottom: 1%;
}

iframe {
  border: none;
  border-radius: 20px;
}
</style>
