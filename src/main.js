import Vue from 'vue'
import Filters from './plugins/filters'
import Buefy from 'buefy'
import App from './App.vue'
import ResponsiveEmbed from '@/components/responsive-embed'
import LatestVideos from '@/components/latest-videos'
import MEProfile from '@/components/me-profile'
import VueYoutube from 'vue-youtube'

import './styles/main.scss'

Vue.use(Buefy, {
  // defaultContainerElement: '#app'
  // , defaultIconPack: 'fas'
})

Vue.use(VueYoutube)

Vue.use(Filters)
Vue.component('responsive-embed', ResponsiveEmbed)
Vue.component('latest-videos', LatestVideos)
Vue.component('me-profile', MEProfile)

Vue.config.productionTip = false

new Vue({
  el: '#app'
  , components: {
    App
  }
})
