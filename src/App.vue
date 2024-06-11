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
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    },
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