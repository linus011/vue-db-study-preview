<template>
  <ui-page title="메인화면">
    <div class="btn-wrap">
      <div class="flex">
        <div>
          <button
            class="button line"
            @click="isLoading = true"
          >
            로딩창 열기
          </button>
        </div>
        <div>
          <button
            class="button line"
            style="z-index: 501"
            @click="isLoading = false"
          >
            로딩창 닫기
          </button>
        </div>
      </div>
    </div>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>
    <h1>가나다라마바사</h1>

    <div
      v-if="isLoading"
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
  </ui-page>
</template>

<script>
import uiPage from '@/components/global/uiPage.vue'

export default {
  name: 'Index',
  components: {
    uiPage,
  },
  data() {
    return {
      isLoading: false,
    }
  },
}
</script>
