<template>
  <div class="home">
    {{ name }}
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'pinia'
import userStore from '@/stores/user'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  computed: {
    // 1. Store
    // 2. 要帶入的 State, Getters
    ...mapState(userStore, ['name'])
  }
}
</script>
