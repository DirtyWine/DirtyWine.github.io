<template>

    <div class="card mx-auto my-2 card-style" :style="{width: this.width}">
      <img v-bind:src ="require('@/assets/img/'+imgName)" class="card-img-top card-shadow mx-auto" :alt="imgName">
      <div class="card-body">
        <h5 class="card-title"><b>{{ title }}</b></h5>
        <p class="card-text" style="font-style: italic">{{ text }}</p>
        <div class="dropdown-divider"></div>
        <router-link class="btn button" :to= "this.link" >See More</router-link>
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
    width: String,
    link: String
  },

  methods: {
  }
}
</script>

<style scoped>


.card-shadow:hover{
  box-shadow: 0 -1px 4px 1px #909090;
}

.text-left{
  text-align: left;
}

.text-right{
  text-align: right;
}

.fix-left{
  float: left;
}

.fix-right{
  float: right;
}

.card-style{
  border: none;
  box-shadow: 0 1px 3px 2px darkgray;
}

.button{
  width: 100%;
  color: #007bff;
}
.button:hover{
  background: #7abaff;
  color: white;
}
.button:active{
  background: #00ffff;
}

/* Background debugging color*/

.debug-aqua {
  background: aqua;
}

.debug-dark {
  background: #2c3e50;
}

.debug-antiquewhite{
  background: antiquewhite;
}

.debug-ivory{
  background: ivory;
}

</style>