<template>
  <article>
    <figure class="background">
      <cf-image :id="background.id" />
    </figure>

    <main>
      <section class="clients">
        <h1>Clients</h1>
        <div>
          <ul>
            <template v-for="(c, i) in clients">
              <li>{{ c.name }}</li>
            </template>
          </ul>
        </div>
      </section>

      <section class="profile">
        <h1>Profile</h1>
        <div v-html="profile"/>
      </section>

      <section class="contact">
        <h1>Connect</h1>
        <div v-html="contact"/>
      </section>
    </main>
  </article>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const {
    mapState,
    mapGetters,
    mapActions
  } = createNamespacedHelpers('company');

  import CfImage from '@/components/CfImage';

  export default {
    components: {
      CfImage
    },

    computed: {
      ...mapGetters([
        'clients',
        'background',
        'contact',
        'profile'
      ]),

      ...mapState([
        'company'
      ])
    },

    methods: {
      ...mapActions({
        fetchCompany: 'fetch'
      })
    },

    created(){
      this.fetchCompany();
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

    position: relative;
  }

  main {
    display: grid;
    grid-gap: 5em;
    grid-template-areas:
      "profile profile"
      "clients contact"
    ;

    box-sizing: border-box;
    padding: 5em;
  }

  @media (min-width: 925px) {
    main {
      grid-template-areas:
        "clients profile contact"
      ;
      grid-auto-columns: 1fr; 
    }

    .clients, .profile, .contact {
      justify-content: center;
    }
  }

  .clients {
    grid-area: clients;

    display: grid;
    grid-template-columns: 15em;
    justify-content: right;
  }

  .profile {
    grid-area: profile;

    display: grid;
    grid-template-columns: 25em;
    justify-content: center;
  }

  .contact {
    grid-area: contact;

    display: grid;
    grid-template-columns: 25em;
  }

  .background {
    position: fixed;
    z-index: -1;

    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }

  .background > img {
    object-fit: contain;
    object-position: center;

    width: 90%;
    height: 90%;
  }

  section {
    display: grid;
    grid-gap: 2em;
    grid-template-rows: min-content;
  }

  h1 {
    text-align: center;
  }
</style>
