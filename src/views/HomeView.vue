<template>
  <div @click="increment">+</div>
  <div>{{ count }}</div>
  <div @click="dicrement">-</div>
</template>

<script lang="ts">
import { IStore } from '../store/types/StoreType'
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore<IStore>()
    return {
      count: computed(() => store.state.countModuleOperation.countState),
      increment: () => store.commit('countMutationIncrement'),
      dicrement: () => store.commit('countMutationDicrement')
    }
  }
}
</script>
