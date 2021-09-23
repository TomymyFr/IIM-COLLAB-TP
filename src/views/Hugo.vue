<template>
  <div class="container">
    <header>
      <i class="fa fa-bars" aria-hidden="true"></i>
    </header>
    <main>
      <div class="Messi">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGjsekPPVSACA/profile-displayphoto-shrink_200_200/0/1582626745814?e=1637798400&v=beta&t=h_M6hFCCGRnf-MDVDnFx35LlY1mwLFn6S_EhBAZzIhQ"
          alt=""
        />
        <h1 class="name">Hugo Boudalier</h1>
        <p>Développeur frontend / intégrateur</p>
      </div>

      <div class="cv">
        <div class="cv-1">
          <h2>Bio</h2>
          <p>
            Bonjour, actuellement en troisème année en développement web à
            l'IIM. Je recherche une alternance sur un rythme 3 semaines en
            entreprise / 1 semaine à l'école. J'ai uen préférence pour le
            développement Frontend et aussi le travail avec Wordpress qui est un
            outil que j'aime particulèrement. je maitrise la création de thèmes,
            l'utilisations de nombreux plugins et même la mise en ligne.
          </p>
        </div>
        <div class="cv-1">
          <h2>Mes passions</h2>
          <p>Fantasy médieval</p>
          <p>AS Monaco</p>
          <p>Informatique</p>
          <p>Le Get 27</p>
          <p>Cuisine</p>
        </div>
      </div>

      <div class="portfolio">
        <h2>Mes projets</h2>
        <div class="bloc">
          <a
            id="instagram"
            href="https://www.instagram.com/hugo_kouizine/?hl=fr"
            >Mon compte Insta cuisine</a
          >
        </div>
        <div class="bloc">
          <a id="rockyourpodcast" href="https://rockyourpodcast.fr"
            >Le site que j'ai réalisé lors de mon stage</a
          >
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 1250px;
  margin: 30px auto 30px;
  padding: 0 !important;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}
header {
  background: #eee;
  background-image: url("https://fr.web.img4.acsta.net/r_654_368/newsv7/19/04/17/09/17/2267491.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 250px;
  position: relative;
}
header i {
  position: relative;
  cursor: pointer;
  right: -96%;
  top: 25px;
  font-size: 18px;
  color: #fff;
}
@media (max-width: 800px) {
  header {
    height: 150px;
  }
  header i {
    right: -90%;
  }
}
main {
  padding: 20px 20px 0px 20px;
}
.cv {
  display: flex;
  justify-content: space-around;
}
.cv-1 {
  display: flex;
  flex-wrap: wrap;
  width: 25%;
  background: rgb(228, 128, 91);
  color: white;
  border-radius: 10px;
  margin-top: 50px;
  min-width: 250px;
}
h2 {
  text-align: center;
  width: 100%;
  height: 20px;
}
.cv-1 p {
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
}
.Messi {
  position: absolute;
  top: 260px;
  left: calc(50% - 120px);
}
.portfolio {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.bloc {
  width: 250px;
  height: 100px;
  background: rgb(236, 180, 74);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 50px;
}
.bloc a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: orangered;
  transition-duration: 0.5s;
}
</style>
