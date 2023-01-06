<template>
  <NavComponent/>
  <router-view/>
</template>

<style lang="scss">

</style>

<script lang="ts">
import NavComponent from './components/NavComponent/NavComponent.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    NavComponent,
  },
})
export default class HomeView extends Vue {}
</script>

