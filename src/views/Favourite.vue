<template>
  <div class="favourite-songs">
    <Title text="Favourite List" :total-favourite="total" />
    
    <div class="list-container mb-4">
      <ul class="list-group">
        <li class="list-group-item" v-for="song in favouriteSongs" :key="song.id">
          {{ song.id }} - {{ song.title }}
          <span 
              @click="removeFromFavourite(song)"
              class="icon-favourite ml-auto"
              v-bind:class="{ 'is-favourite' : song.favourite}"               
              title="un-favourite">
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

// use to combine multiple getters
import { mapGetters } from 'vuex';

export default {
  name: 'Favourite',
  components: {
    Title
  },
  methods: {
    removeFromFavourite(payload) {
      console.log(payload);
      // mutations() can be called using commit() method
      // e.g. this.$store.commit('makeUnFavourite', payload); 
      // it takes two arguments
      // 1. mutation name
      // 2. payload object
      // or
      // e.g this.$store.commit({
      //   type: 'makeUnFavourite',
      //   payload : payload.id
      // })

      // show loader before the async action begins
      this.$store.commit('toggleLoader', true);

      // async action to remove from favourite list
      setTimeout(()=> {
        this.$store.dispatch('makeUnFavourite', payload);
        this.$store.commit('toggleLoader', false);
      }, 2000);
    }
  },
  computed: {
    ...mapGetters({
      'favouriteSongs': 'favouriteSongsList',
      'total' : 'totalFavouriteSongs'
    }),
    otherComputedProps() {
      return console.log('other computed props with mapGetters()');
    }
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

  &.is-favourite {
    & > svg {
      color: #e8e823;
    }
  }

  &:hover {
    & > svg {
      color: #ccc;
    }
  }
}
</style>
