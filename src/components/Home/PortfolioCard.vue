<template>
  <div class="card mx-auto" style="width: 20rem">
    <img v-bind:src ="require('@/assets/img/'+imgName)" class="card-img-top" :alt="imgName">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <div class="dropdown-divider"></div>
      <p class="card-text">{{ text }}</p>
      <router-link class="btn btn-primary" :to= "this.link" >See More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioCard",
  props:{
    imgName: String,
    title: String,
    text: String,
    link: String
  }
}
</script>

<style scoped>

</style>