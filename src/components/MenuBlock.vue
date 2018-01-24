<template>
  <article>
    <figure class="background">
      <img :src="background" />
    </figure>

    <main>
      <section class="clients">
        <h1>Clients</h1>
        <div>
          <template v-for="(c, i) in clients">
            <span>{{ c }}</span><br/>
          </template>
        </div>
      </section>

      <section class="profile">
        <h1>Profile</h1>
        <div v-html="profile"/>
      </section>

      <section class="connect">
        <h1>Connect</h1>
        <div v-html="connect"/>
      </section>
    </main>

  </article>
</template>

<script>
  import background from '@/assets/svg/N87.svg';
  import { clients, profile, connect } from '@/assets/json/about.json';

  export default {
    computed: {
      background(){
        return background;
      },

      clients(){
        return clients;
      },

      profile(){
        return profile;
      },

      connect(){
        return connect;
      }
    }
  };
</script>

<style scoped>
  article {
    background-color: black;
    
    color: white;
    
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  main {
    max-width: 80em;
    display: grid;
    grid-gap: 5vw;
    grid-template-columns: repeat(3, minmax(min-content, 1fr));

    margin: 5em;
  }

  .clients {
    //grid-area: clients;
  }

  .profile {
    //grid-area: profile;
  }

  .connect {
    //grid-area: connect;
  }

  .background {
    position: fixed;
    z-index: -1;

    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: row nowrap;
    align-content: center;
    justify-content: center;
  }

  .background > img {
    object-fit: contain;
    object-position: center;

    min-width: 90%;
    min-height: 90%;
  }

  section {
    display: grid;
    grid-gap: 2em;
    grid-template-rows: min-content;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
  }
</style>
