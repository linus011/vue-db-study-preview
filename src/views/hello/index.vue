<template>
  <div class="home">
    <div class="nav">
      <router-link to="/hello/home">
        Home
      </router-link> |
      <router-link to="/hello/about">
        About
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'HomeIndex',
  data() {
    return {
    }
  },
}
</script>
