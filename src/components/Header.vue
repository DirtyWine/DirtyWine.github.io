<template>

<div class="fixed-top" style="background: #545c64">
  <div class="container ">

    <el-menu
        :default-active = "$route.path"
        :router = true
        class="el-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        menu-trigger="hover">

      <el-menu-item index="/">
        <el-avatar :size="50" :src = "require('@/assets/img/cs-brand.png')" style="background: #ffd04b; margin-right: 10px" />
        <b>Home</b>
      </el-menu-item>

      <el-submenu index="portfolio">
        <template slot="title"> <b>Portfolio</b> </template>
        <el-menu-item index="/portfolio/engine"> Game Engine (C++) </el-menu-item>
        <el-menu-item index="/portfolio/space-invaders"> Space Invader (C#) </el-menu-item>
        <el-menu-item index="/portfolio/dx-scene"> DX11 Scene (C++) </el-menu-item>
        <el-menu-item index="/portfolio/platformer"> Simple Platformer (UE4) </el-menu-item>
        <el-menu-item index="/portfolio/audio-engine"> Audio Engine (C++) </el-menu-item>
        <el-menu-item index="/portfolio/multiplayer"> Multiplayer (Unity) </el-menu-item>
      </el-submenu>

    </el-menu>

  </div>


</div>


<!--  <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-secondary">-->

<!--    <router-link class="navbar-brand my-auto" to="/">-->
<!--      <img src="@/assets/img/cs-brand.png" width="30" height="30" loading="lazy" >-->
<!--    </router-link>-->

<!--    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
<!--      <span class="navbar-toggler-icon"></span>-->
<!--    </button>-->

<!--    <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
<!--      <ul class="navbar-nav mr-auto">-->
<!--        <li class="nav-item active">-->
<!--          <router-link class="nav-link" to="/"> Home <span class="sr-only">(current)</span></router-link>-->
<!--        </li>-->

<!--&lt;!&ndash;        <li class="nav-item">&ndash;&gt;-->
<!--&lt;!&ndash;          <router-link class="nav-link" to="/"> About <span class="sr-only">(current)</span></router-link>&ndash;&gt;-->
<!--&lt;!&ndash;        </li>&ndash;&gt;-->

<!--        <li class="nav-item dropdown">-->
<!--          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
<!--            Portfolio-->
<!--          </a>-->

<!--&lt;!&ndash;          Drop Down Menu&ndash;&gt;-->
<!--          <div class="dropdown-menu" aria-labelledby="navbarDropdown">-->
<!--            <router-link class="dropdown-item" to="/portfolio/engine">Game Engine (C++)</router-link>-->
<!--            <router-link class="dropdown-item" to="/portfolio/space-invaders">Space Invader (C#)</router-link>-->
<!--            <router-link class="dropdown-item" to="/portfolio/dx-scene">DX11 Scene (C++)</router-link>-->
<!--            <router-link class="dropdown-item" to="/portfolio/platformer">Simple Platformer (UE4)</router-link>-->
<!--            <router-link class="dropdown-item" to="/portfolio/audio-engine">Audio Engine (C++)</router-link>-->
<!--            <router-link class="dropdown-item" to="/portfolio/multiplayer">Multiplayer (Unity)</router-link>-->
<!--          </div>-->
<!--        </li>-->

<!--&lt;!&ndash;        <li class="nav-item">&ndash;&gt;-->
<!--&lt;!&ndash;          <router-link class="nav-link" to="/about">Contact</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;        </li>&ndash;&gt;-->
<!--      </ul>-->
<!--    </div>-->
<!--  </nav>-->

</template>

<script>
export default {
  name: "Header",

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>