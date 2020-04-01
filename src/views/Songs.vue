<template>
  <div class="songs">
    <Title text="Songs List" />
    
    <div class="list-container mb-4">
      <ul class="list-group">
        <li class="list-group-item" v-for="song in songsList" :key="song.id">
          {{ song.id }} - {{ song.title }}
          <span 
              class="icon-favourite ml-auto"               
              title="favourite" 
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

      // toggleLoader mutation call
      this.$store.commit('toggleLoader', true);

      setTimeout(() => {
        // async actions using dispatch() method
        this.$store.dispatch('makeFevourite', payload);
        
        // to hide loader 
        this.$store.commit('toggleLoader', false);
      }, 2000)

      // actions() are used to make async call
      // e.g. this.$store.dispatch('makeFevourite', payload);
      // action can be called using dispatch() method
      // it takes two orguments
      // 1. action name
      // 2. payload object

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
