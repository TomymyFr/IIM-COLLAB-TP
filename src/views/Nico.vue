<template>
  <div class="container">
    <header>
      <i class="fa fa-bars" aria-hidden="true"></i>
    </header>
    <main>
      <div class="row">
        <div class="col-lg-4">
          <div class="photo-left">
            <img class="photo" src="../assets/hasbullah.jpg" />
            <div class="active"></div>
            <div class="col">
              <a
                href="https://github.com/Nvcq"
                target="_blank"
                style="text-decoration: none"
                id="nameGit"
              >
                <h4 class="name">Nico Mopin</h4></a
              >
              <p class="info">IIM A3 Student</p>
              <p class="info">20 years old</p>
              <p class="info">Web Developer</p>
            </div>
          </div>

          <hr id="transi" />

          <h1>🤝 Serre la main de Juan Bernat 🤝</h1>

          <a target="_blank" :href="project?.url">
            <img
              :src="project?.description"
              id="diapo"
              v-on:mouseenter="getRandomProject"
            />
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
const projects = [
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/200983/31.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/201012/72.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/200990/39.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/201004/61.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/200991/40-js.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/201021/81.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/201026/87-js.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/201035/98.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/201037/101.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/201038/102.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/201042/106.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/201061/bernat-2.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/200964/1-tp.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/200965/2.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/200969/6.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/200971/12.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/200974/18.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/200976/23-tp.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
  {
    url: "https://www.instagram.com/juanbernat/?hl=en",
    description:
      "https://images.psg.media/media/200980/28.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
  },
];

export default {
  name: "Antonio",
  data() {
    return {
      project: {
        url: "https://www.instagram.com/juanbernat/?hl=en",
        description:
          "https://images.psg.media/media/200981/29.jpg?anchor=center&mode=crop&width=1200&height=800&quality=75",
      },
    };
  },
  methods: {
    getRandomProject() {
      window.setInterval(() => {
        this.project = projects.filter(
          (el) => el.description !== this.project.description
        )[Math.floor(Math.random() * (projects.length - 1 ?? 0))];
      }, 250);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1250px;
  margin: 30px auto 30px;
  padding: 0 !important;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}

main {
  cursor: grab;
}

header {
  background: #eee;
  background-image: url("../assets/ney.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 250px;
}

header i {
  position: relative;
  cursor: pointer;
  right: -96%;
  top: 25px;
  font-size: 18px;
  color: #fff;
}

.photo-left {
  display: flex;
}

.col {
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  text-align: left;
}

#transi {
  margin-top: 50px;
}

#diapo {
  width: 75%;
  padding-top: 30px;
  margin-bottom: 75px;
  cursor: grab;
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

.photo {
  width: 200px;
  height: 200px;
  margin-top: -120px;
  border-radius: 100px;
  border: 4px solid #fff;
}

.name {
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 18pt;
  color: #004170;
}

.info {
  margin-top: -5px;
  margin-bottom: 5px;
  font-size: 11pt;
  color: #ceab5d;
}

.stats {
  margin-top: 25px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ededed;
}

.desc {
  text-align: center;
  margin-top: 25px;
  margin: 25px 40px;
  color: #999;
  font-size: 25pt;
  padding-bottom: 25px;
  border-bottom: 1px solid #ededed;
}

.right {
  padding: 0 25px 0 25px !important;
}

.btn {
  cursor: pointer;
  padding: 0.35em 1.2em;
  border: 0.1em solid #000;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  color: #ffffff;
  background-color: #000;
  text-align: center;
  transition: all 0.2s;
  margin-bottom: 20px;
}
.btn:hover {
  color: #000;
  background-color: #eee;
}

a:visited {
  color: #42b983;
}
</style>
