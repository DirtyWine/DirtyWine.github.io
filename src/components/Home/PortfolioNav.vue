<template>
  <div class="portfolio-nav ">
    <div class="container pt-5 ">
      <h2>
        PORTFOLIO
      </h2>

      <div class="container mt-3">

        <!--        Row 1-->
        <div class="row mt-5">

          <!--          GAME ENGINE-->


          <div class="col-md my-1">
            <PortfolioCard
                imgName = "engine.jpg"
                title= "Game Engine"
                text= "C++, OpenGL"
                link= "/portfolio/engine"
            />
          </div>

          <!--          Space Invaders-->
          <div class="col-md my-1">
            <PortfolioCard
                imgName = "space_invader.jpg"
                title= "Space Invaders"
                text= "C#, Design Patterns"
                link= "/portfolio/engine"
            />
          </div>

          <!--          DX11-->
          <div class="col-md my-1">
            <PortfolioCard
                imgName = "dx11.jpg"
                title= "Static Scene"
                text= "C++, DirectX 11"
                link= "/portfolio/engine"
            />
          </div>

        </div> <!--end of row 1-->

        <!--        ROW 2-->
        <div class="row mt-3">

          <!--          SIMPLE PLATFORMER-->
          <div class="col-md my-1">
            <PortfolioCard
                imgName = "simple_platformer.jpg"
                title= "Simple Platformer"
                text= "Unreal Engine, Level design"
                link= "/portfolio/engine"
            />
          </div>

          <!--          AUDIO ENGINE-->
          <div class="col-md my-1">
            <PortfolioCard
                imgName = "audio.jpg"
                title= "Audio Engine"
                text= "C++, Multi Thread"
                link= "/portfolio/engine"
            />
          </div>

          <!--           FPS-->
          <div class="col-md my-1">
            <PortfolioCard
                imgName = "default.jpg"
                title= "Multiplayer FPS"
                text= "Unity"
                link= "/portfolio/engine"
            />
          </div>

        </div> <!--end of row 2-->


      </div>


    </div>
  </div>

</template>

<script>

import PortfolioCard from "@/components/Home/PortfolioCard";

export default {
  name: "PortfolioNav",
  components: {PortfolioCard}
}
</script>

<style scoped>


.section-portfolio{
  height: 1200px;
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