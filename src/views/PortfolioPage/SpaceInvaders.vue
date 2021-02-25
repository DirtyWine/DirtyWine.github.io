<template>

  <div class="space-invaders">

    <div class="bg-color"></div>

    <Header/>

    <div class="pt-5">
      <div class="container pt-5">

        <!--        Title-->
        <h2 class="font-color portfolio-title-text"> <b>Space Invaders</b> </h2>

        <!--        Video-->
        <div class="bg-img mt-3" :style="{backgroundImage: `url(${bgImg})`, filter: 'blur(5px)', height: this.iframeHeight+'px'}"></div>

        <el-tabs  v-model="activeVideo" type="card">

          <el-tab-pane label="腾讯视频" name="WeTV">
            <div class="mt-4 mx-auto">
              <iframe
                  :width = "iframeWidth"
                  :height = "iframeHeight"
                  src="https://v.qq.com/txp/iframe/player.html?vid=l3230bkolbl"
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen = "true">
              </iframe>
            </div>
          </el-tab-pane>

          <el-tab-pane label="YouTube" name="YouTube">
            <div class="mt-4 mx-auto">
              <iframe
                  :width = "iframeWidth"
                  :height = "iframeHeight"
                  src="https://www.youtube.com/embed/L-CDR3N6e6w"
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen = "true">
              </iframe>
            </div>
          </el-tab-pane>
        </el-tabs>



        <!--        OverView-->

        <el-divider></el-divider>

        <div class="mt-3 mx-auto">
          <h4 style="text-align: left" class="font-color"> <b>Overview</b> </h4>
          <div class="px-3 portfolio-content-text">
            In this project, I reproduced the <i>Space Invaders</i>, a 1978 arcade game created by <i>Tomohiro Nishikado</i>.
            <br><br>
            This project is implemented with C# and Azul Engine, and is designed based on design patterns.
            To reproduce this game, I have developed a series of components to implement various functions, which include
            basic graphic components, collision system, timer, animation events, game objects, scene,
            and etc. One or more design patterns was applied to each of the components, such as
            the collision system has used visitor pattern and observer pattern,
            different types of bombs are implemented with strategy pattern, and state pattern is used for switching game scenes.
            <br><br>
            More details will be updated in this page.
          </div>
        </div>
        <!--        Details-->

<!--        <div class="mt-3 mx-auto">-->
<!--          <h1 style="text-align: left" class="font-title">Details</h1>-->
<!--          <div class="container px-3" style="text-align: left">-->
<!--            <p>GitHub: <a href="">...</a></p>-->
<!--          </div>-->
<!--        </div>-->

      </div>
    </div>

    <Footer/>

  </div>

</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "SpaceInvaders",
  components: {Header, Footer},

  data() {
    return {
      activeVideo: 'WeTV',
      iframeWidth: 0,
      iframeHeight: 0,
      bgImg: require('@/assets/img/space_invader.jpg')
    }
  },

  created() {
    this.iframeWidth = this.getFrameWidth();
    this.iframeHeight = this.getFrameHeight();
  },

  methods: {
    getFrameWidth: function () {
      let windowWidth = window.innerWidth;
      let outWidth;

      if ( windowWidth > 1200) {
        outWidth = 960;
      }
      else if (windowWidth > 992) {
        outWidth = 800;
      }
      else if (windowWidth > 768) {
        outWidth = 640;
      }
      else if (windowWidth > 576) {
        outWidth = 480;
      }
      else {
        outWidth = windowWidth * 0.8;
      }

      return outWidth;
    },

    getFrameHeight: function () {
      // 16:9
      return this.iframeWidth * 9.0 / 16.0;
    }
  },

  mounted() {
    const that = this
    window.onresize = () => {
      that.iframeWidth = that.getFrameWidth();
      that.iframeHeight = that.getFrameHeight();
    }
  }
}
</script>

<style>
.el-tabs__item {
  color: gray;
}

</style>

<style scoped>


.portfolio-content-text{
  text-align: left;
  font-size: 18px;
  word-break: break-word;
  font-family: Arial;
  color: darkgray;
}

.portfolio-title-text{
  font-family: "Comic Sans MS"
}


.bg-img{
  /* Center and scale the image nicely */
  position: absolute;
  left: 0;
  z-index: -1;
  display: block;
  width: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-color{
  /* Center and scale the image nicely */
  position: fixed;
  left: 0;
  top: 0;
  z-index: -2;
  display: block;
  width: 100%;
  height: 100%;

  background-color: #0d0d0d;
}

.font-color{
  color: #55f554;
}
.font-content{

}
</style>