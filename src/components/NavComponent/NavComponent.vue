<template>
  <nav>
    <router-link :to="{name: 'home'}">Главная</router-link>
    <router-link :to="{name: 'beer'}">Пиво</router-link>
    <router-link :to="{name: 'cocktail'}">Коктели</router-link>
    <router-link :to="{name: 'cognac'}">Коньяк</router-link>
    <router-link :to="{name: 'whiskey'}">Виски</router-link>
    <router-link :to="{name: 'wine'}">Вино</router-link>
    <router-link :to="{name: 'snack'}">Закуски</router-link>
  </nav>
</template>

<script lang="ts">
  export default {
    setup() {
      
      return {
        
      }
    }
  }
</script>

<style scoped lang="scss">
  @import './NavComponent.scss';
</style>
