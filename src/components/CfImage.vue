<template>
  <img v-if="!isEmpty(asset)" :src="src"/>
</template>

<script>
  import api from '@/utils/contentful';
  import { isEmpty } from 'ramda';

  export default {
    props: {
      id: String
    },

    data(){
      return {
        asset: {},
        buffer: null,
        isLoaded: false
      }
    },

    computed: {
      file(){
        return this.asset.file;
      },

      type(){
        return this.file.contentType;
      },

      src(){
        return `${this.file.url}?fm=jpg&fl=progressive&w=800&h=800`;
      },

      details(){
        return this.file.details;
      },

      width(){
        return this.details.image.width;
      },

      height(){
        return this.details.image.height;
      },
    },

    methods: {
      isEmpty,

      fetch(){
        return api.getAsset(this.id);
      }
    },

    created(){
      this.fetch().then( response => {
        this.asset = {
          id: response.sys.id,
          ...response.fields
        };
      });
    }
  }
</script>

<style scoped>
</style>
