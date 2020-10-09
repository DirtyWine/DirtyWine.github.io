<template>
  <div class = "home">
    <Header v-if="true" />
    <Introduction/>
    <PortfolioNav v-if="true"/>
    <Footer v-if="true"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Introduction from "@/components/Home/Introduction";
import PortfolioNav from "@/components/Home/PortfolioNav";
import Footer from "@/components/Footer";


export default {
  name: 'Home',
  components: {
    Footer,
    PortfolioNav,
    Introduction,
    Header
  }
}

</script>

<style>

.debug-dark{
  background: #2c3e50;
}

</style>