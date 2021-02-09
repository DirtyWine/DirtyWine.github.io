<template>
  <div class="multiplayer">
    <Header/>

    <div class="pt-5">
      <div class="container pt-5">

        <!--        Title-->
        <h1>Multiplayer</h1>

        <!--        Video-->
        <div class="mt-3 mx-auto">
          ...
<!--          <iframe-->
<!--              width="747"-->
<!--              height="420"-->
<!--              src="https://www.youtube.com/embed/r6L8fiAbk78" frameborder="0"-->
<!--              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"-->
<!--              allowfullscreen = "true">-->
<!--          </iframe>-->
        </div>

        <!--        OverView-->

        <div class="mt-3 mx-auto">
          <h1 style="text-align: left">Overview</h1>
          <div class="container px-3" style="text-align: left">
            ...
          </div>
        </div>
        <!--        Details-->

        <div class="mt-3 mx-auto">
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
export default {
  name: "Multiplayer",
  components: {Header},

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

</style>