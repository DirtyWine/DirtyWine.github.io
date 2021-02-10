<template>

  <el-col :xs="24" :sm="12" :md="8">
    <el-card :body-style="{ padding: '0px' }" class="my-3" shadow="hover">
      <img v-bind:src ="require('@/assets/img/'+imgName)" class="image">
      <div style="padding: 15px;">
        <span>
          <h5 class="card-title"><b>{{ title }}</b></h5>
        </span>
        <el-tag
            v-for="tag in tags"
            :key="tag.key"
            :type="tag.type"
            effect="light"
            class="mx-2">
          {{ tag.text }}
        </el-tag>
        <div class="bottom clearfix">

          <el-button type="text" style="float: right" icon="el-icon-caret-right">
            <router-link :to= "this.link" style="font-size: 17px">See More</router-link>
          </el-button>
        </div>
      </div>
    </el-card>
  </el-col>

<!--  <el-card :body-style="{ padding: '0px' ,width: this.width}">-->
<!--        <div class="el-card  my-2 " :style="{}">-->
<!--          <img v-bind:src ="require('@/assets/img/'+imgName)" class="card-img-top card-shadow mx-auto" :alt="imgName">-->
<!--          <div class="card-body">-->
<!--            <h5 class="card-title"><b>{{ title }}</b></h5>-->
<!--            <p class="card-text" style="font-style: italic">{{ text }}</p>-->
<!--            <div class="dropdown-divider"></div>-->
<!--            <router-link class="btn button" :to= "this.link" >See More</router-link>-->
<!--          </div>-->
<!--        </div>-->
<!--  </el-card>-->



</template>

<script>
export default {
  name: "PortfolioCard",

  props:{
    imgName: String,
    title: String,
    tags: Array,
    link: String
  },

  methods: {
  }
}
</script>

<style scoped>

.image {
  width: 100%;
  display: block;
}

.el-tag{
  font-size: 13px;
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