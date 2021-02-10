<template>

  <div class="portfolio-nav ">

    <div class="pt-5 ">

<!--      Portfolio-->

      <div class="container">
        <el-divider>
          <h2>
            <b>PORTFOLIO</b>
          </h2>
        </el-divider>
      </div>


      <div class="container">

        <el-row :gutter="20"> <!--Row starts-->

<!--          GAME ENGINE-->
          <PortfolioCard
              imgName = "engine.jpg"
              title= "Game Engine"
              :tags=this.tagEngine
              link= "/portfolio/engine"
          />

<!--          DX11-->
          <PortfolioCard
              imgName = "dx11.jpg"
              title= "Static Scene"
              :tags=this.tagDX
              link= "/portfolio/dx-scene"
          />

<!--          Space Invaders-->
          <PortfolioCard
              imgName = "space_invader.jpg"
              title= "Space Invaders"
              :tags=this.tagSpaceInvader
              link= "/portfolio/space-invaders"
          />

<!--          SIMPLE PLATFORMER-->
          <PortfolioCard
              imgName = "simple_platformer.jpg"
              title= "Simple Platformer"
              :tags=this.tagPlatformer
              link= "/portfolio/platformer"
          />

<!--          Multiplayer-->
          <PortfolioCard
              imgName = "tb_multiplayer.jpg"
              title= "Turn-based Multiplayer"
              :tags=this.tagMulti
              link= "/portfolio/multiplayer"
          />

<!--          AUDIO ENGINE-->
          <PortfolioCard v-if="false"
                         imgName = "audio.jpg"
                         title= "Audio Engine"
                         :tags=this.tagAudio
                         link= "/portfolio/audio-engine"
          />

        </el-row> <!--End of row-->

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
      cardWidth: this.getCardWidth(),

      tagEngine:[
        {key: 0, type: 'primary', text: 'C++'},
        {key: 1, type: 'warning', text: 'OpenGL'}
      ],
      tagSpaceInvader:[
        {key: 0, type: 'primary', text: 'C#'},
        {key: 1, type: 'info', text: 'Design Patterns'}
      ],
      tagDX:[
        {key: 0, type: 'primary', text: 'C++'},
        {key: 1, type: 'warning', text: 'DirectX 11'}
      ],
      tagPlatformer:[
        {key: 0, type: 'danger', text: 'Unreal Engine 4'}
      ],
      tagAudio:[
        {key: 0, type: 'primary', text: 'C++'},
        {key: 1, type: 'info', text: 'Multi Thread'}
      ],
      tagMulti:[
        {key: 0, type: 'danger', text: 'Unity'}
      ]
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

.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

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