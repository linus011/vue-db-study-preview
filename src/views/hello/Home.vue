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
    }
  },
  mounted() {
    // console.log(this.$store.getters.menuInfo.menus, this.gnbOpen)
    console.log(addComma(1234))
    console.log(this.$removeComma('3,456'))
  },
  methods: {
    boxOutsideClick() {
      console.log('boxOutsideClick')
      this.isBoxOn = false
    },
    boxFocus() {
      console.log('boxFocus')
      this.isBoxFocus = true
    },
  },
}
</script>
