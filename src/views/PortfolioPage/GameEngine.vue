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
              width="747"
              height="420"
              src="https://www.youtube.com/embed/r6L8fiAbk78"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen = "true">
          </iframe>
        </div>

<!--        OverView-->

        <div class="mt-3 mx-auto">
          <h1 style="text-align: left">Overview</h1>
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
  components: {Footer, Header}
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