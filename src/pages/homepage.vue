<script>
export default {
    name: 'Homepage'
}
</script>

<template lang="">

  <div class="container slide-in-bottom">
    <div class="row mt-5 justify-content-center">
        
        <div class="col-7 jumbo">
            <img src="https://c.wallhere.com/photos/02/f9/Microsoft_developer_office_Windows_11-2243510.jpg!d" alt="" class="img-fluid">
        </div>

    </div>
  </div>

</template>

<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

.jumbo {
    img {
        border-radius: $border-12;
    }
}
</style>