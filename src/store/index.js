import Vue from 'vue'
import Vuex from 'vuex'

// static json data
import Songs from '@/api/songs.json';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: Songs,
    favouriteSongs:[],
    loader: false
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
    },
    loaderFlag( state ) {
      return state.loader;
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
    },
    toggleLoader( state, isVisible) {
      return state.loader = isVisible;
    }   
  },
  actions: {
    // make mutations and actions name same for better understanding the flow
    // use to run async mutations() 
    makeFevourite(context, payload) {
      // context is similar to store obj but used for async operatios
      context.commit('makeFevourite', payload);
      // commit takes two orguments 
      // 1. mutation name
      // 2. payload obj    
    },
    makeUnFavourite( context, payload ) {
      context.commit('makeUnFavourite', payload);
    }
  },
  modules: {
  }
})
