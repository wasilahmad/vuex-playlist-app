<template>
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
              <span class="badge badge-light" v-if="totalBadgeCounter">{{totalBadgeCounter}}</span>
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
</template>

<script>
export default {
  name: 'Header',
  computed: {
    totalBadgeCounter() {
        return this.$store.getters.totalFavouriteSongs
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
