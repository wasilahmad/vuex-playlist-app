<template>
  <div class="page-title">
    <h1>
      <strong>{{ text }}</strong>      
      <span class="badge badge-secondary ml-auto" v-if="totalFavourite">{{totalFavourite}}</span>
    </h1>    
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: String,
    totalFavourite: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-title {

    & h1 {
        font-size: 18px;
        font-weight: 400;  
        margin: 20px 0;
        padding-bottom: 10px;
        border-bottom: 1px solid #343a40;
        display: flex;
    }

    & h1 > strong {
      position: relative;

      &::after {
        content: '';
        height: 4px;
        width: 100%;
        background-color: #343a40;
        position: absolute;
        bottom: -11px;
        left: 0;
      }
    }
}
</style>
