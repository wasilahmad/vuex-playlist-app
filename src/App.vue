<template>
  <div id="app" class="container">    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">      
      <router-link to="/" class="navbar-brand">Music Streaming</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <font-awesome-icon :icon="['fas', 'list']"/>
              Songs
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/favourite" class="nav-link">
              <font-awesome-icon :icon="['fas', 'star']"/>
              Favourite
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link">
              <font-awesome-icon :icon="['fas', 'plus']"/>
              Add New
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
    <Loader :is-visible="toggleLoader"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Loader from '@/components/Loader.vue';

export default {
  name: 'App',
  components: {
    Loader
  },
  computed : {
    toggleLoader() {
      return this.$store.getters.loaderFlag
    }
  }
}
</script>

<style lang="scss" scoped>

body {
  font-size: 14px;
  font-weight: 400;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar-dark .navbar-nav .nav-link {
  
  &.router-link-exact-active,
  &.router-link-exact-active:focus {
    color: rgba(255,255,255, 1);
  }

}

@media screen and (min-width: 992px) {
  .container {
    max-width: 540px;
    width: 540px;
  }
}

</style>
