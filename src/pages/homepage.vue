<script>
import jumbotron from '../components/jumbotron.vue';
import feed from '../components/feed.vue';
export default {
    name: 'Homepage',
    components: {
        jumbotron,
        feed
    }
}
</script>

<template lang="">
    <div class="container slide-in-bottom p-3">
        <!-- Jumbotron -->
        <jumbotron/>
    
      <!-- Feed -->
        <feed/>
        
    </div>

</template>

<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>