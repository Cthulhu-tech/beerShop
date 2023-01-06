<template>
  <div @click="increment">+</div>
  <div>{{ count }}</div>
  <div @click="dicrement">-</div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore()
    return {
      count: computed(() => store.state.countState),
      increment: () => store.commit('countMutationIncrement'),
      dicrement: () => store.commit('countMutationDicrement')
    }
  }
}
</script>
