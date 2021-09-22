<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/ayoub">Ayoub</router-link> |
    <router-link to="/antonio">Antonio</router-link> |
    <router-link to="/toml">TomL</router-link>
    <router-link to="/warsame">Warsamé</router-link> |
    <router-link to="/nico">Nico</router-link> |
    <router-link to="/tomb">Tom B</router-link>
    <router-link to="/axel">Axel</router-link>
    <router-link to="/margaux">Margaux</router-link> |
    <router-link to="/sachag">SachaG</router-link> |
    <router-link to="/ahmed">Ahmed</router-link> |
    <router-link to="/florent">Florent</router-link> |
    <router-link to="/sachaL">SachaL</router-link> |
    <router-link to="/julien">Julien</router-link>
    <router-link to="/nicolasdegarrigues">NicolasDG</router-link> |
    <router-link to="/lucasC">LucasC</router-link> |
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
