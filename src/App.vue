<script>
import axios from 'axios';
import Header from './components/header.vue'
export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      posts: []
    }
  }
}
</script>

<template lang="">

  <header>
    <Header />
  </header>

  <main>
    <router-view />
  </main>

  <footer>
    
  </footer>

</template>

<style lang="scss">
@use './styles/general.scss'
</style>