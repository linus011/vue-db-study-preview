!<template>
  <section class="page">
    <header class="header">
      <div>
        <button
          v-if="!gnbOpen"
          type="button"
          class="btn_back"
          aria-label="뒤로가기"
          @click="headBack"
        />
        <h1>{{ title }}</h1>
        <button
          :class="{on:gnbOpen}"
          type="button"
          class="btn_gnb"
          aria-label="메뉴열기"
          @click="gnbOpen = !gnbOpen"
        >
          <i />
        </button>
      </div>
    </header>
    <aside
      :class="{active: gnbOpen}"
      class="gnb_wrap"
    >
      <nav>
        <ul>
          <li
            v-for="(item,i) in $store.getters.menuInfo.menus"
            :key="i"
          >
            <router-link :to="item.link">
              {{ item.text }}
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
    <main class="container">
      <slot />
    </main>
    <footer class="footer">
      &copy; db-study
    </footer>
  </section>
</template>

<script>
export default {
  name: 'UiPage',
  props: {
    title: { type: String, default: '페이지 타이틀' },
  },
  data() {
    return {
      gnbOpen: false,
    }
  },
  mounted() {
    // console.log(this.$store.getters.menuInfo.menus)
  },
  methods: {
    headBack() {
      window.history.back()
    },
  },
}
</script>
