<template>
  <div>
    <div
      class="logo_wrap"
      @click="isBg = !isBg"
    >
      <div
        v-if="isBg"
        class="logo"
      />
      <img
        v-else
        alt="Vue logo"
        src="@/assets/images/logo.png"
      >
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '@/components/page/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      isBg: false,
    }
  },
  mounted() {
  },
  methods: {
    boxOutsideClick() {
      this.isBoxOn = false
    },
    boxFocus() {
      this.isBoxFocus = true
    },
  },
}
</script>
