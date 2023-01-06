<template>
  <NavComponent/>
    <main>
      <router-view/>
    </main>
  <FooterComponent />
</template>

<script lang="ts">
  import FooterComponent from './components/FooterComponent/FooterComponent.vue';
  import NavComponent from './components/NavComponent/NavComponent.vue';
  export default {
    components: {
      NavComponent,
      FooterComponent
    }
  }
</script>

<style lang="scss">

</style>
