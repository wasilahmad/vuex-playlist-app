<template>
  <div class="songs">
    <Title text="Songs List" />
    
    <div class="list-container mb-4">
      <ul class="list-group">
        <li class="list-group-item" v-for="song in songsList" :key="song.id">
          {{ song.title }}
          <span 
              class="icon-favourite ml-auto"
              v-bind:class="{ 'is-favourite' : song.favourite}"               
              title="Add To Favourite" 
              @click="addToFavourite(song)">
            <font-awesome-icon :icon="['fas', 'star']"/>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue';

export default {
  name: 'Songs',
  components: {
    Title
  },
  data(){
    return {
    }
  },
  methods:{
    addToFavourite(payload){
      const song = this.$store.state.songs.find( item => item.id === payload.id);
      song.favourite = true;
      this.$store.state.favouriteSongs.push(song);
    }
  },
  computed: {
    songsList() {
      // filtered list coming from $store.getters
      return this.$store.getters.unfavouriteSongsList 
    }
  },
  created() {
    console.log('created:', this.songs);
  }
}
</script>

<style lang="scss" scoped>

.list-group {

  & .list-group-item {
    display: flex;
    align-items: center;
  }
}

.icon-favourite {
  cursor: pointer;

  & > svg {
    color: #ccc;
  }
  
  &:hover,
  &.is-favourite {
    & > svg {
      color: #e8e823;
    }
  }
}

</style>
