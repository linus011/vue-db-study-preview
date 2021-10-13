<template>
  <div
    v-if="open"
    class="loading-wrap"
  >
    <div class="tl">
      <div>
        <div
          class="loading-icon"
          role="img"
          aria-label="화면을 불러오는중입니다."
        >
          <div />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UiLoading',
  props: {
    open: { type: Boolean, default: false },
  },
  data() {
    return {
    }
  },
}
</script>
