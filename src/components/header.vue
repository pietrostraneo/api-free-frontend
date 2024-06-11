<script>
export default {
    name: 'Header',
    methods: {
        getImgPath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    },
}
</script>

<template lang="">

  <div class="container">
    <div class="row">
        <div class="col-12 d-flex justify-content-between text-white align-items-center">

            <div class="logo">
                <img :src="getImgPath('../assets/logo.png')" alt="" class="img-fluid">
            </div>

            <div class="nav d-flex gap-4 align-items-center">
                <ul class="list-unstyled d-flex gap-5 justify-content-center align-items-center">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/posts">Latest</router-link></li>
                    <li><router-link to="/contacts">Contacts</router-link></li>
                    <li><router-link to="/about">About us</router-link></li>
                </ul>
                <ul class="list-unstyled d-flex gap-2 justify-content-center align-items-center">
                    <li><i class="fas fa-magnifying-glass"></i></li>
                    <li><i class="fas fa-bookmark"></i></li>
                    <li><i class="fas fa-user"></i></li>
                </ul>
            </div>

        </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

.logo {
    img {
        width: 200px;
        filter: invert(100%);
    }
}

a {
    text-decoration: none;
    font-weight: bold;
    color: white;

    &:hover {
        text-decoration: underline;
    }
}

.fa-magnifying-glass,
.fa-bookmark,
.fa-user {
    background-color: rgba(41, 48, 56, 0.8);
    padding: 0.7rem;
    border-radius: 12px;
    border: 1px solid transparent;
    transition: all 0.2s ease-in;
    cursor: pointer;

    &:hover {
        border: 1px solid white;
    }
}
</style>