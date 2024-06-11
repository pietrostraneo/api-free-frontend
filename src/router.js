import { createMemoryHistory, createRouter } from 'vue-router'

import Homepage from './pages/homepage.vue'

const routes = [
    { path: '/', component: Homepage },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router