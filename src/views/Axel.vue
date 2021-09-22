<template>
  <section>
    <div class="block1">
      <div class="presentaiton_texte">
        <h1>Axel Zidane</h1>
        <br />
        <h2>Développeur Front / UX-UI Designer</h2>
        <br />
        <h2>Etudiant A3 Alternance IIM , Chez ASSERCAR</h2>

        <div class="skills">
          <img class="stack" src="../assets/logo.png" alt="Vue.Js" />
          <img class="stack" src="../assets/sass.png" alt="SASS" />
          <img class="stack" src="../assets/next.png" alt="next.Js" />
          <img class="stack" src="../assets/react.png" alt="react.Js" />
          <img class="stack" src="../assets/node.png" alt="node.Js" />
        </div>
        <br />
        <br />

        <h2>Membre du BDE Nova et de Slide Session</h2>

        <div class="skills">
          <img class="stack" src="../assets/logo_nova.png" alt="Vue.Js" />
          <img class="stack" src="../assets/slideSession.jpg" alt="SASS" />
        </div>
        <br />
        <br />
      </div>

      <div class="photo">
        <img src="../assets/Axel.png" alt="Moi" />
      </div>

    </div>

    <article>
        <div class="button">
      <a id="Button" href="https://sass-maquette.vercel.app/">Projet Dev</a> 
    </div>
    </article>
    

  </section>
</template>

<style scoped>* {
    padding: 0;
    margin: 0;
}

section {
    background-image: url("../assets/nova.png");
    width: 100%;
    height: 55vw;
}

h1 {
    font-size: 5rem;
}

.block1 {
    color: white;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 6vw;
    padding-top: 20vw;
}

.skills {
    width: 30vw;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
}

.stack {
    margin-top: 20px;
    width: 5vw;
    height: 5vw;
}

.photo img {
    width: 25vw;
    height: 25vw;
    border: none;
    -moz-border-radius: 85px;
    -webkit-border-radius: 85px;
    border-radius: 85px;
}


article {
    width: 100%;
    display: flex;
    justify-content: center;
}

.button {
    width: 15vw;
    height: 4vw;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button:hover {
    background-color: rgb(113, 211, 113);
}

.button a{
    font-family: 'Roboto Mono', monospace;
    font-size: 2rem;
    text-decoration: none;
    color: black;
    font-weight: 500;
    
}

</style>
