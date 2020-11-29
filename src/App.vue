<template>
<div class="App">
  <div class="wrapper">
  <Navbar/>
  <Sidebar/>
   <div class="content-wrapper">
    <router-view></router-view>
  </div>
  <Footer/>
</div>
</div>
</template>

<script>
import Sidebar from './components/pages/SideBar.vue'
import Footer from './components/pages/Footer.vue'
import Navbar from './components/pages/NavBar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Footer,
    Navbar,        
  }
}
</script>

<style>

</style>
