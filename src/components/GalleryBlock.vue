<template>
  <figure>
    <template v-for="(a, i) in assets">
      <cf-image v-show="i === index"
        :id="a.id"
        :key="i"
      />
    </template>
  </figure>
</template>

<script>
  import CfImage from '@/components/CfImage';

  export default {
    components: {
      CfImage
    },

    props: {
      assets: {
        type: Array,
        default: () => []
      }
    },
    
    data(){
      return {
        index: 0,
        metronome: 0
      }
    },

    methods: {
      increment(){
        this.index = (this.index === this.assets.length - 1) ?
          0 : this.index + 1;
      },

      createMetronome(){
        this.metronome = window.setInterval(this.increment, 1000);
      },

      destroyMetronome(){
        this.metronome = window.clearInterval(this.metronome);
      }
    },

    created(){
      this.createMetronome();
    },

    destroyed(){
      this.destroyMetronome();
    }
  }
</script>

<style scoped>
  img {
    display: block;
    width: 100%;
    height: 100%;

    object-fit: contain;
    object-position: center;
  }
</style>
