<template>

  <div class="simple-platformer" >

    <Header/>

    <div class="pt-5" >
      <div class="container pt-5">

        <!--        Title-->
        <h2> <b>Simple Platformer</b> </h2>


        <!--        Video-->
        <div class="bg-img mt-3" :style="{backgroundImage: `url(${bgImg})`, filter: 'blur(8px)', height: this.iframeHeight+'px'}"></div>
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


        <!--        OverView-->

        <el-divider></el-divider>

        <div class="mt-3 mx-auto">
          <h3 style="text-align: left"> <b>Overview</b> </h3>
          <div class="container px-3" style="text-align: left">
            ...
          </div>
        </div>
        <!--        Details-->

        <div class="mt-3 mx-auto">
          <h1 style="text-align: left">Details</h1>
          <div class="container px-3" style="text-align: left">

<!--            GitHub Link-->
            <p>GitHub: <a href="https://github.com/DirtyWine/SimplePlatformer">https://github.com/DirtyWine/SimplePlatformer</a></p>
          </div>
        </div>

      </div>
    </div>

    <Footer/>
  </div>

</template>

<script>
import Header from "@/components/Header";
export default {
  name: "SimplePlatformer",
  components: {Header},

  data() {
    return {
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