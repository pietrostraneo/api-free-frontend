<script>
export default {
    name: 'Jumbotron'
}
</script>

<template lang="">
    <div class="row mt-5 justify-content-center">
            
        <div class="col-12 col-md-8 jumbo">
            <img src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="img-fluid">
            <div class="overlay">
                <h1 class="text-white">Welcome to <span class="text-success">Innov8Tech</span></h1>
                <button class="btn btn-success p-1 mt-1">Read more</button>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

.jumbo {
    img {
        border-radius: $border-12;
    }

    position: relative;

    .overlay {
        position: absolute;
        top: 41%;
        left: 5%;
        width: 100%;
    }
}
</style>