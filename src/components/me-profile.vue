<template lang="pug">
article.media
  figure.media-left
    p.image.is-128x128
      img(:src="image")
  .media-content
    .content
      h6
        strong
          slot(name="name")
      p
        slot(name="bio")
</template>

<script>
export default {
  name: 'me-profile'
  , props: {
    image: {
      type: String
    }
  }
  , data: () => ({
  })
  , components: {
  }
  , mounted(){
  }
  // , computed: {
  // }
  , methods: {
  }
}
</script>

<style lang="sass">
@import '@/styles/_variables.scss'
</style>
