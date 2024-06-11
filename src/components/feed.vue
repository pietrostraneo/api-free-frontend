<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    name: 'Feed',
    data() {
        return {
            store
        }
    },
    created() {
        this.fetchPosts();
    },
    methods: {
        async fetchPosts() {
            try {
                const response = await axios.get(store.api + 'posts');
                store.posts = response.data.data;
            } catch (error) {
                console.error(error);
            }
        },
    }
}
</script>

<template lang="">
    <div class="row mt-4 justify-content-center text-white">

        <div class="col-12 col-md-8 mb-4">
            <h3>Latest Post</h3>
        </div>

        <div class="col-12 col-md-8 d-flex post-feed mb-5" v-for="post, index in store.posts" :key="index">
            <div class="img me-4">
                <img :src="post.image" alt="" class="img-fluid">
            </div>
            <div class="summary">
                <h4>{{post.title}}</h4>
                <p class="text-secondary-emphasis mt-2">{{post.content.substring(0, 100)}}...</p>
                <div class="buttons d-flex align-items-center mt-3 gap-3">
                    <button class="btn btn-outline-success p-1">Read more</button>
                    <i class="fas fa-bookmark" :class="store.saved.includes(post) ? 'text-danger' : ''" @click="store.saved.includes(post) ?  store.saved.splice(store.saved.indexOf(post), 1) : store.saved.push(post)"></i>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables.scss' as *;

.post-feed {
    img {
        border-radius: $border-12;
        width: 450px;
        height: 225px;
        object-fit: crop;
    }

    .fa-bookmark {
        transition: all 0.2s ease-in;

        &:hover {
            color: red
        }
    }
}
</style>