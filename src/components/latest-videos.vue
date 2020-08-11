<template lang="pug">
.latest-videos
  .card
    .card-image
      b-loading(:is-full-page="false", :active="!isReady")
      responsive-embed(:ratio="16/9", :max-width="720")
        youtube(:video-id="videos[current-1].videoId", :fit-parent="true", :resize="true", @ready="isReady = true")
    .card-content
      .has-text-centered {{ videos[current-1].title }}
    .card-footer
      .card-footer-item
        b-pagination(
          v-if="videos.length"
          , :total="videos.length"
          , :current.sync="current"
          , :per-page="1"
          , :range-before="5"
          , :range-after="5"
          , order="is-centered"
          , size="is-large"
          , aria-next-label="Next video"
          , aria-previous-label="Previous video"
          , aria-page-label="Video"
          , aria-current-label="Current Video"
        )
</template>

<script>
const apiKey = 'AIzaSyDd-UD-gIX2GIOlE6YOQtk0S7KEmps1bTg'
const playlistId = 'UUeiYXex_fwgYDonaTcSIk6w' // latest videos from youtube
const maxVideos = 5
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=${maxVideos}&playlistId=${playlistId}&key=${apiKey}`

export default {
  name: 'latest-videos'
  , props: {
  }
  , data: () => ({
    videos: []
    , current: 1
    , isReady: false
  })
  , components: {
  }
  , mounted(){
    fetch(url).then(res => res.json()).then(data => {
      if ( !data.items || !data.items.length ){
        throw new Error('Could not find videos.')
      }

      this.videos = data.items.map( item => ({
        title: item.snippet.title
        , ...item.contentDetails
      }) )
    }).catch( err => {
      console.error(err)
    })
  }
  // , computed: {
  // }
  , methods: {
  }
}
</script>

<style lang="sass">
@import '@/styles/_variables.scss'
.latest-videos
  max-width: 720px
  margin: auto
  ul.pagination-list
    list-style: none
    margin: 0
    li + li
      margin: 0
</style>
