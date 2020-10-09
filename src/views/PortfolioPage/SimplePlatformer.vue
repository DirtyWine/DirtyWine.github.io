<template>

  <div class="simple-platformer">
    <Header/>

    <div class="pt-5">
      <div class="container pt-5">

        <!--        Title-->
        <h1>Simple Platformer</h1>

        <!--        Video-->
        <div class="mt-3 mx-auto">
          <iframe
              width="747"
              height="420"
              src="https://www.youtube.com/embed/NWZMIWUQqoY"
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
  components: {Header}
}
</script>

<style scoped>

</style>