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
    favouriteSongsList( state ) {
      return state.favouriteSongs
    },
    totalFavouriteSongs( state ) {
      return state.favouriteSongs.length
    }
  },
  mutations: {
    makeFevourite( state, payload ) {
      const song = state.songs.find( song => song.id === payload.id);
      song.favourite = true;
      state.favouriteSongs.push(song);
    },
    makeUnFavourite( state, payload ) {
      // to revert item from the songs[]
      const tempSongs = [...state.songs];
      const index = tempSongs.findIndex( item => item.id == payload.id);
      const song = tempSongs[index];
      song.favourite = false;
      
      // remove item from current favouriteSongs[]
      const favTempSongs = [...state.favouriteSongs];
      const favSongIndex = favTempSongs.findIndex( item => item.id == payload.id);
      state.favouriteSongs.splice(favSongIndex, 1);
      //console.log(index, payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
