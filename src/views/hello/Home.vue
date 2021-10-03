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
      class="home_box"
      :class="{on: isBoxOn}"
      @click="isBoxOn = true"
    >
      click-outside
    </div>
    <br>
    <div
      v-addclass="'on'"
      class="home_box"
    >
      addclass string
    </div>
    <br>
    <div
      v-addclass="boxFocus"
      class="home_box"
      :class="{on: isBoxFocus}"
      tabindex="0"
      @focus="isBoxFocus= true"
      @blur="isBoxFocus= false"
    >
      addclass function
    </div>
    <br>
    addComma: {{ addCommaTxt(num) }}
    <br>
    removeComma: {{ removeCommaTxt(num2) }}
    <br>
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
      isBoxFocus: false,
      num: 123456,
      num2: '987,654',
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
    addCommaTxt(val) {
      return addComma(val)
    },
    removeCommaTxt(val) {
      return this.$removeComma(val)
    },
  },
}
</script>
