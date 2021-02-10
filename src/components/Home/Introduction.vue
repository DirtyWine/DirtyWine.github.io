<template>

  <div class="introduction">

<!--    Introduction-->
    <div class="container py-5" >
      <div class="pt-5">
        <h1 class="mt-5">
          Hello, I'm <span style="color: hotpink">Jiahao Shen</span>.
        </h1>
        <h2>
          I'm a <b>game programmer</b>.
        </h2>
      </div>

    </div> <!--end of intro-->

<!--    About-->
    <div class="container mt-3">

      <div class="row">

        <div class="col-lg">
          <div class="mx-5">
            <h3>About <span style="color: hotpink">me</span></h3>
<!--            Avatar-->
            <el-avatar :size="80" :src = "require('@/assets/img/avatar.jpg')" />
          </div>
        </div>

<!--        Content-->
        <div class="col-lg text-about-content">
          <p>
            I'm a graduate student at DePaul University, major in game programming. I will graduate in November 2021.
          </p>
          <p>
            My skill set includes C++, C#, UE4 and Unity.
            I have experience of graphic and shader programming from course project,
            and I have built graphic systems with both DX11 and OpenGL.
          </p>
          <p>
            I have programmed a game engine with various subsystems, including skinning and skeleton animation.
            I also have developed a 2D game, Space Invaders, which have used more than 10 design patterns.
          </p>
        </div>

      </div>
    </div> <!--end of about-->



  </div>

</template>

<script>

export default {
  name: "Introduction",

  data() {
    return {
      sectionHeight: 0
    }
  },

  created() {
    this.sectionHeight = this.getSectionHeight();
  },
  methods: {
    getSectionHeight: function ()
    {
      //console.log('get section height')
      let windowHeight = window.innerHeight;
      let outHeight;
      outHeight = windowHeight * 0.85;
      return outHeight + 'px';
    }
  },

  mounted() {
    const that = this;
    window.onresize = () => {
      that.sectionHeight = that.getSectionHeight()
    }

  }
}
</script>

<style scoped>

.text-about-content{
  padding: 10px 16px;
  word-break: normal;
  text-align: left;
}

.text-about-content p{
  font-family: "Helvetica Neue";
  font-size: 24px;
  color: #1d2124;
  font-style: normal;
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