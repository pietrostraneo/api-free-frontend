import { reactive } from 'vue'

export const store = reactive({
    api: 'http://localhost:3000/',
    posts: [],
    saved: [],
    search: false
})