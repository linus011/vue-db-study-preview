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
          <li>
            <router-link to="/hello">
              helloWorld
            </router-link>
          </li>
          <li>
            <router-link to="/guide/index">
              index
            </router-link>
          </li>
          <li>
            <router-link to="/guide/form">
              form
            </router-link>
          </li>
          <li>
            <router-link to="/guide/list">
              list
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
  methods: {
    headBack() {
      window.history.back()
    },
  },
}
</script>
