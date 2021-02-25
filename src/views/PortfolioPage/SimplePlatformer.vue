<template>

  <div class="simple-platformer" >

    <Header/>

    <div class="pt-5" >
      <div class="container pt-5">

        <!--        Title-->
        <h2 class="portfolio-title-text"> <b>Simple Platformer</b> </h2>


        <!--        Video-->
<!--        <div class="bg-img mt-3" :style="{backgroundImage: `url(${bgImg})`, filter: 'blur(8px)', height: this.iframeHeight+'px'}"></div>-->

        <el-tabs class="mt-4 mx-auto" v-model="activeVideo" type="card">

          <el-tab-pane label="腾讯视频" name="WeTV">
            <div class="mt-4 mx-auto">
              <iframe
                  :width = "iframeWidth"
                  :height = "iframeHeight"
                  src="https://v.qq.com/txp/iframe/player.html?vid=x3230982opk"
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
                  src="https://www.youtube.com/embed/VyZr2UosK28"
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen = "true">
              </iframe>
            </div>
          </el-tab-pane>
        </el-tabs>


        <!--        OverView-->

        <el-divider></el-divider>

        <el-card shadow="hover" class="my-2">
          <div slot="header">
            <h4 style="text-align: left"> <b>Overview</b> </h4>
          </div>
          <div class="portfolio-content-text">
            This video is not for commercial use, just for demo.
            <br><br>
            Background Music used in demo:
            <br><br>
            > Assassin's Creed IV Black Flag Main Theme - <i>Brian Tyler</i>
            <br>
            > Life at Sea - <i>Assassin's Creed Italia</i>
            <br>
            > Here's a Health to the Company - <i>Sean Dagher / Richard Irwin / Nelson Cater / Nils Brown / Michiel Schrey / Charlotte Cumberbirch / David Gossage</i>
          </div>
        </el-card>
        <!--        Details-->

        <el-card shadow="hover" class="my-2">
          <div slot="header">
            <h4 style="text-align: left"> <b>Details</b> </h4>
          </div>
          <div style="text-align: left">

            <!--            GitHub Link-->
            <p>GitHub: <a href="https://github.com/DirtyWine/SimplePlatformer">https://github.com/DirtyWine/SimplePlatformer</a></p>
          </div>
        </el-card>

      </div>
    </div>

    <Footer/>
  </div>

</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "SimplePlatformer",
  components: {Header, Footer},

  data() {
    return {
      activeVideo: 'WeTV',
      iframeWidth: 0,
      iframeHeight: 0,
      bgImg: require('@/assets/img/simple_platformer.jpg')
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


<style scoped>

.portfolio-content-text{
  text-align: left;
  font-size: 18px;
  word-break: break-word;
  font-family: Arial;
}

.portfolio-title-text{
  font-family: "Comic Sans MS"
}

.debug-dark {
  background: #2c3e50;
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

</style>