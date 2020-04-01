<template>
  <div id="app" class="container">    
    <Header />
    <router-view/>
    <Loader :is-visible="toggleLoader"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'App',
  components: {
    Header,
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
