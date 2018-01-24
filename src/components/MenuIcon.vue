<template>
  <fa-icon @click="onClick" class="icon" :icon="icon" />
</template>

<script>
  import FaIcon from '@fortawesome/vue-fontawesome';
  import {
    faBars as fasBars,
    faTimes as fasTimes
  } from '@fortawesome/fontawesome-free-solid';

  export default {
    props: {
      onClick: {
        type: Function,
        default: () => {}
      },

      active: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      fasBars(){
        return fasBars;
      },

      icon(){
        return this.active ? fasTimes : fasBars;
      }
    },

    components: {
      FaIcon
    }
  }
</script>

<style scoped>
  .icon {
    cursor: pointer;
    padding: 1em;
  }
</style>
