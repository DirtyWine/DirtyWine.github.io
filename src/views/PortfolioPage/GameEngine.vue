<template>
  <div class="game-engine">
    <Header/>

    <div class="pt-5">
      <div class="container pt-5">

<!--        Title-->
        <h1>Game Engine</h1>

<!--        Video-->
        <div class="mt-3 mx-auto">
          <iframe
              :width = "iframeWidth"
              :height = "iframeHeight"
              src="https://www.youtube.com/embed/OyDS9J2xOHY"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen = "true">
          </iframe>
        </div>

<!--        OverView-->

        <div class="mt-3 mx-auto">
          <h3 style="text-align: left"> <b>Overview</b> </h3>
          <div class="container px-3" style="text-align: left">
            ...
          </div>
        </div>
<!--        Details-->

        <div class="mt-3 mx-auto ">
          <h1 style="text-align: left">Details</h1>
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
import Footer from "@/components/Footer";
export default {
  name: "GameEngine",
  components: {Footer, Header},

  data() {
    return {
      iframeWidth: 0,
      iframeHeight: 0
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

.debug-greenyellow{
  background: greenyellow;
}

.debug-red{
  background: palevioletred;
}

</style>