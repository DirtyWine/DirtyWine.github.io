<template>

  <div class="portfolio-nav ">

    <div class="pt-5 ">

<!--      Portfolio-->
      <h2>
        PORTFOLIO
      </h2>

      <div class="container">

<!--        Row 1-->
        <div class="row mt-5">

<!--          GAME ENGINE-->
          <div class="col-md">
            <PortfolioCard
                imgName = "engine.jpg"
                title= "Game Engine"
                text= "C++, OpenGL"
                :width="cardWidth"
                link= "/portfolio/engine"
            />
          </div>

<!--          Space Invaders-->
          <div class="col-md">
            <PortfolioCard
                imgName = "space_invader.jpg"
                title= "Space Invaders"
                text= "C#, Design Patterns"
                :width="cardWidth"
                link= "/portfolio/space-invaders"
            />
          </div>

<!--          DX11-->
          <div class="col-md">
            <PortfolioCard
                imgName = "dx11.jpg"
                title= "Static Scene"
                text= "C++, DirectX 11"
                :width="cardWidth"
                link= "/portfolio/dx-scene"
            />
          </div>

<!--          SIMPLE PLATFORMER-->
          <div class="col-md">
            <PortfolioCard
                imgName = "simple_platformer.jpg"
                title= "Simple Platformer"
                text= "Unreal Engine, Level design"
                :width="cardWidth"
                link= "/portfolio/platformer"
            />
          </div>

<!--          AUDIO ENGINE-->
          <div class="col-md">
            <PortfolioCard
                imgName = "audio.jpg"
                title= "Audio Engine"
                text= "C++, Multi Thread"
                :width="cardWidth"
                link= "/portfolio/audio-engine"
            />
          </div>

<!--           FPS-->
          <div class="col-md">
            <PortfolioCard
                imgName = "default.jpg"
                title= "Multiplayer FPS"
                text= "Unity"
                :width="cardWidth"
                link= "/portfolio/multiplayer"
            />
          </div>

        </div> <!--end of row 1-->

      </div>


    </div>
  </div>

</template>

<script>

import PortfolioCard from "@/components/Home/PortfolioCard";

export default {
  name: "PortfolioNav",
  components: {PortfolioCard},

  data() {
    return {
      cardWidth: this.getCardWidth()
    }
  },

  methods: {
    getCardWidth: function ()
    {
      //console.log('get Card Width')

      let windowWidth = window.innerWidth;
      let outWidth;
      if ( windowWidth > 1200) {
        outWidth = 21;
      }
      else if (windowWidth > 992) {
        outWidth = 18;
      }
      else if (windowWidth > 768) {
        outWidth = 20;
      }
      else if (windowWidth > 576) {
        outWidth = 31;
      }
      else {
        outWidth = windowWidth *0.1* 0.5;
      }

      return outWidth+'rem';
    }
  },

  mounted() {
    const that = this
    window.onresize = () => {
      that.cardWidth = that.getCardWidth()
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

.debug-ivory{
  background: ivory;
}

</style>