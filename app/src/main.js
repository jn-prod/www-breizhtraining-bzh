import { createApp } from 'vue'
import Carousel from './components/Carousel.vue'
import Stages from './components/Stages.vue'

createApp(Carousel).mount('#carousel')
createApp(Stages).mount('#stages_list')
