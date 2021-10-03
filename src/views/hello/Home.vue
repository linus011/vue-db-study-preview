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
    <div
      v-click-outside="boxOutsideClick"
      v-focus="boxOutsideClick"
      class="home_box"
      :class="{on: isBoxOn}"
      tabindex="0"
      @click="isBoxOn = true"
    >
      click-outside
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '@/components/page/HelloWorld.vue'
import addComma from '@/utils'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      isBg: false,
      isBoxOn: false,
    }
  },
  mounted() {
    // console.log(this.$store.getters.menuInfo.menus, this.gnbOpen)
    console.log(addComma(1234))
    console.log(this.$removeComma('3,456'))
  },
  methods: {
    boxOutsideClick() {
      this.isBoxOn = false
    },
  },
}
</script>
