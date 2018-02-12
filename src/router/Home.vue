<template>
  <main>
    <gallery-block class="slideshow" :assets="slideshow"/>
    <img :src="logo" class="logo" />
  </main>
</template>

<script>
  import { isEmpty, pluck } from 'ramda';
  import logo from '@/assets/svg/NOVEMBER87.svg';

  import GalleryBlock from '@/components/GalleryBlock';

  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapGetters, mapActions } = createNamespacedHelpers('company');

  export default {
    components: {
      GalleryBlock
    },

    computed: {
      ...mapState([
        'company'
      ]),

      ...mapGetters([
        'slideshow'
      ]),

      logo(){
        return logo;
      }
    },

    methods: {
      ...mapActions({
        fetchSlides: 'fetch'
      })
    },

    created(){
      this.fetchSlides();
    }
  }
</script>

<style scoped>
  main {
    display: flex;

    flex-flow: column nowrap;

    align-items: center;
    justify-content: center;

    position: relative;
  }

  .logo{
    max-width: 60vw;
  }

  .slideshow {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;

    transform: translate(-50%, -50%);
    width: 50%;
    height: 60%;

    object-fit: cover;
    object-position: center;
  }
</style>
