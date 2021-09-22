<template>
  <hr />
  <br />
  <div class="container">
    <img class="florent" src="../assets/Florent.jpg" alt="Ma tête" />
    <div class="pres">
      <h1 class="intro">Salut moi c'est Florent Quintin</h1>
      <p>
        Je viens de rejoindre l'IIM et je suis toujours en recherche d'une
        alternance. <br /><br /><br />
        Je suis pas mal rouillé en prog, ça fait plus d'un an que j'ai pas
        touché à du code donc ça revient petit à petit. <br /><br />
        Sinon je me suis souvenu comment fonctionne le responsive donc cette
        page l'est sur certains points.<br /><br />

        Et voici un lien vers mon
        <a
          href="https://www.linkedin.com/in/florent-quintin-aa129b175/"
          target="_blank"
        >
          <img
            class="linkedin"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
            alt="Logo Linkedin"
          />
        </a>
      </p>
    </div>
  </div>

  <p>
    <br />J'aimerai bien présenter des projets que j'ai réalisé mais j'ai rien
    de complet ou dont je puisse être fier donc à la place je met un lien vers
    ma chaine twitch que j'ai lancé l'an dernier :
    <a href="https://www.twitch.tv/boloblux" target="_blank"
      ><img
        class="twitch"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Twitch_Glitch_Logo_Purple.svg/878px-Twitch_Glitch_Logo_Purple.svg.png"
        alt="Logo Twitch"
    /></a>
  </p>
</template>

<script></script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: space-evenly;
  align-content: center;
}

.florent {
  max-width: 50%;
  width: 450px;
}

.linkedin {
  width: 1em;
}

.twitch {
  width: 1em;
}
</style>
