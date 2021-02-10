<template>

  <div class="space-invaders">

    <div class="bg-color"></div>

    <Header/>

    <div class="pt-5">
      <div class="container pt-5">

        <!--        Title-->
        <h2 class="font-title"> <b>Space Invaders</b> </h2>

        <!--        Video-->
        <div class="bg-img mt-3" :style="{backgroundImage: `url(${bgImg})`, filter: 'blur(5px)', height: this.iframeHeight+'px'}"></div>
        <div class="mt-4 mx-auto">
          <iframe
              :width = "iframeWidth"
              :height = "iframeHeight"
              src="https://www.youtube.com/embed/i9j0MZuS9LY"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen = "true">
          </iframe>
        </div>

        <!--        OverView-->
        <el-divider></el-divider>
        <div class="mt-3 mx-auto">
          <h1 style="text-align: left" class="font-title">Overview</h1>
          <div class="container px-3" style="text-align: left">
            ...
          </div>
        </div>
        <!--        Details-->

        <div class="mt-3 mx-auto">
          <h1 style="text-align: left" class="font-title">Details</h1>
          <div class="container px-3" style="text-align: left">
            <p>GitHub: <a href="">...</a></p>
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
  name: "SpaceInvaders",
  components: {Header},

  data() {
    return {
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

<style scoped>

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

  background-color: black;
}

.font-title{
  color: #55f554;
}
.font-content{

}
</style>