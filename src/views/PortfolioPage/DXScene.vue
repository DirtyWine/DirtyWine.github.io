<template>

  <div class="dx-scene">
    <Header/>

    <div class="pt-5">
      <div class="container pt-5">

        <!--        Title-->
        <h1 class="portfolio-title-text">DirectX11 Graphics System</h1>

        <!--        Video-->
<!--        <div class="bg-img mt-3" :style="{backgroundImage: `url(${bgImg})`, filter: 'blur(5px)', height: this.iframeHeight+'px'}"></div>-->

        <el-tabs class="mt-4 mx-auto" v-model="activeVideo" type="card">

          <el-tab-pane label="腾讯视频" name="WeTV">
            <div class="mt-4 mx-auto">
              <iframe
                  :width = "iframeWidth"
                  :height = "iframeHeight"
                  src="https://v.qq.com/txp/iframe/player.html?vid=k3230vt553o"
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
                  src="https://www.youtube.com/embed/hBwFjNDDvOU"
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen = "true">
              </iframe>
            </div>
          </el-tab-pane>
        </el-tabs>

        <!--        OverView-->

        <el-divider></el-divider>


        <el-card shadow="hover">
          <div slot="header">
            <h4 style="text-align: left"> <b>Overview</b> </h4>
          </div>
          <div class="portfolio-content-text">
            The scene is built by the graphics system I programmed based on DirectX 11.
            <br><br>
            As demoed in the video, the system includes sky box, terrain generated from height map, lighting effect, fog effect and transparent effect.
            <br><br>
            Models are converted from FBX to custom file format for the system to import.
          </div>
        </el-card>

<!--        &lt;!&ndash;        Details&ndash;&gt;-->

<!--        <div class="mt-3 mx-auto">-->
<!--          <h1 style="text-align: left">Details</h1>-->
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
  name: "DXScene",
  components: {Header, Footer},

  data() {
    return {
      activeVideo: 'WeTV',
      iframeWidth: 0,
      iframeHeight: 0,
      bgImg: require('@/assets/img/dx11.jpg')
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