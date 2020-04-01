<template>
  <div class="favourite-songs">
    <Title text="Favourite List" :total-favourite="total" />
    
    <div class="list-container mb-4">
      <ul class="list-group">
        <li class="list-group-item" v-for="song in favouriteSongs" :key="song.id">
          {{ song.title }}
          <span 
              class="icon-favourite ml-auto"
              v-bind:class="{ 'is-favourite' : song.favourite}"               
              title="Add To Favourite">
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
