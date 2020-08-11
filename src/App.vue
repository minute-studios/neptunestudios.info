<template lang="pug">
.app
  .top-nav
    .banner
      Parallax(:speed-factor="0.45", :section-height="20", container-class="banner-container", section-class="banner-section")
        .banner-img
    .nav-section
      .container
        slot(name="header")
  .main-container
    slot
  .footer-container
    .container
      .section
        slot(name="footer")
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  name: 'app'
  // , props: {
  // }
  // , data: () => ({
  // })
  , components: {
    Parallax
  }
  , created(){
  }
  // , computed: {
  // }
  , methods: {
  }
}
</script>

<style lang="sass">
@import '@/styles/_variables.scss'
$navBackground: #333
.app
  display: flex
  min-height: 100vh
  flex-direction: column
  justify-items: baseline
.main-container,
.footer-container
  position: relative
  z-index: 1
  display: flex
.main-container
  flex: 1
.footer-container
  background: $navBackground
  color: $white
  .heading
    color: $white
  a
    color: lighten($primary, 10)
.top-nav
  background: $navBackground
  .banner
    height: 300px
    overflow: hidden
    .banner-section
      position: relative
      min-height: 21.875rem
      scroll-behavior: smooth
      overflow: hidden
      z-index: 1
      @media screen and (min-width: 768px)
        // min-height: 100vh
    .banner-container
      position: relative
      will-change: transform
      left: 0
      right: 0
      top: 0
      width: 100%
      overflow: hidden
      height: 300px
      .banner-img
        background: url(/public/big-banner.jpg) no-repeat center center
        background-size: 220%
        max-width: none
        width: 100%
        height: 100%
        object-position: top
        object-fit: cover
      @media screen and (min-width: 768px)
        position: fixed
        top: -350px
        height: 100%
        .banner-img
          height: 1070px
          background-size: 100%
          object-fit: contain
  .nav-section
    position: relative
    z-index: 1
    background: $navBackground
  .navbar
    background: transparent
    .navbar-menu
      background: $navBackground
    .navbar-start
      margin: 0 auto
    .navbar-end
      display: none
    .navbar-item
      transition: background 0.15s ease
    .navbar-item,
    .navbar-burger
      color: white
    .navbar-item:hover,
    a.navbar-item.is-active:not(:focus):not(:hover),
    .navbar-link.is-active:not(:focus):not(:hover)
      background: $blue
</style>
