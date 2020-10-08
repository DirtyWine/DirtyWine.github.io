<template>

  <div class="introduction pt-5">
    <div class="container pt-5 section-intro">
        <h1>
          Hello, I'm <span style="color: deeppink">Jiahao Shen</span>.
        </h1>
        <h2>
          I'm a game programmer.
        </h2>
    </div>

  </div>

</template>

<script>

export default {
  name: "Introduction",
  computed: {
    windowHeight: function ()
    {
      return (window.innerHeight)+'px';
    }
  }
}
</script>

<style scoped>

.section-intro {
  height: 200px;
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