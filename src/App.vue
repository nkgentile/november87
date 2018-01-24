<template>
  <div id="app">
    <router-view/>
    <transition name="fade-in">
      <menu-block v-show="isOpen" class="menu" />
    </transition>
    <section class="menu-bar">
      <menu-icon
        :on-click="toggle"
        :active="isOpen"
        :class=" isOpen ?
          $style.white :
          $style.black
        "
      />
    </section>
  </div>
</template>

<script>
  import MenuBlock from '@/components/MenuBlock';
  import MenuIcon from '@/components/MenuIcon';

  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapActions } = createNamespacedHelpers('menu');
  
  export default {
    name: 'App',
    
    components: {
      MenuBlock,
      MenuIcon
    },

    computed: {
      ...mapState([
        'isOpen'
      ])
    },

    methods: {
      ...mapActions([
        'open',
        'close',
        'toggle'
      ])
    }
  }
</script>

<style module>
  .black {
    color: black;
  }

  .white {
    color: white;
  }
</style>

<style scoped>
  #app {
    font-family: 'brother-1816', Helvetica, Arial, sans-serif;
    font-size: 8pt;
    line-height: 2;
    letter-spacing: 0.15em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    min-width: 100vw;
    min-height: 100vh;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100vh;
  }

  .menu {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
  }

  .menu-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99999;

    width: 100vw;
    height: auto;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    padding: 1em;
  }
</style>
