<template>
  <main>
    <img :src="background" class="background" width="1909" height="1273" />
    <img :src="logo" class="logo" />
  </main>
</template>

<script>
  import background from '@/assets/images/3.jpg';
  import logo from '@/assets/svg/NOVEMBER87.svg';

  export default {
    computed: {
      background(){
        return background;
      },

      logo(){
        return logo;
      }
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

  .background {
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
