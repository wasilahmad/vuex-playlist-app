import Vue from 'vue'
import Vuex from 'vuex'

// static json data
import Songs from '@/api/songs.json';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: Songs,
    favouriteSongs:[]
  },
  getters: {
    unfavouriteSongsList( state ) {
      return state.songs.filter( song => !song.favourite);
    },
    favouriteSongsList( state ){
      return state.favouriteSongs
    },
    totalFavouriteSongs( state ) {
      return state.favouriteSongs.length
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
