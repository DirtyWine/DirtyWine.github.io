<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">CS</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/">About<span class="sr-only">(current)</span></router-link>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Portfolio
          </a>

<!--          Drop Down Menu-->
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/portfolio/engine">Game Engine (C++)</router-link>
            <router-link class="dropdown-item" to="/portfolio/space-invaders">Space Invader (C#)</router-link>
            <router-link class="dropdown-item" to="/portfolio/dx-scene">DX11 Scene (C++)</router-link>
            <router-link class="dropdown-item" to="/portfolio/platformer">Simple Platformer (UE4)</router-link>
            <router-link class="dropdown-item" to="/portfolio/audio-engine">Audio Engine (C++)</router-link>
            <router-link class="dropdown-item" to="/portfolio/multiplayer">Multiplayer (Unity)</router-link>
          </div>
        </li>

<!--        <li class="nav-item">-->
<!--          <router-link class="nav-link" to="/about">Contact</router-link>-->
<!--        </li>-->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>