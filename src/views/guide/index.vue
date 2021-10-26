<template>
  <ui-page title="메인화면">
    <div class="btn-wrap">
      <div class="flex">
        <div>
          <button
            class="button line"
            @click="isLoading = true"
          >
            로딩창(마크업) 열기
          </button>
        </div>
        <div>
          <button
            class="button line"
            style="z-index: 501"
            @click="isLoading = false"
          >
            로딩창(마크업) 닫기
          </button>
        </div>
      </div>
    </div>

    <div class="btn-wrap">
      <div class="flex">
        <div>
          <button
            class="button line"
            @click="isLoading2 = true"
          >
            로딩창(컴포넌트) 열기
          </button>
        </div>
        <div>
          <button
            class="button line"
            style="z-index: 501"
            @click="isLoading2 = false"
          >
            로딩창(컴포넌트) 닫기
          </button>
        </div>
      </div>
    </div>

    <div class="btn-wrap">
      <div class="flex">
        <div>
          <button
            class="button line"
            @click="loadingOpen"
          >
            로딩창(app.vue) 열기
          </button>
        </div>
        <div>
          <button
            class="button line"
            style="z-index: 501"
            @click="loadingClose"
          >
            로딩창(app.vue) 닫기
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

    <!-- 마크업 로딩창 -->
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
    <!--// 마크업 로딩창 -->

    <!-- 컴포넌트 로딩창 -->
    <ui-loading :open="isLoading2" />
    <!-- // 컴포넌트 로딩창 -->
  </ui-page>
</template>

<script>
import uiPage from '@/components/global/uiPage.vue'
import UiLoading from '@/components/global/uiLoading.vue'

export default {
  name: 'Index',
  components: {
    uiPage,
    UiLoading,
  },
  data() {
    return {
      isLoading: false,
      isLoading2: false,
    }
  },
  methods: {
    loadingOpen() {
      this.$loading()
    },
    loadingClose() {
      this.$loading(false)
    },
  },
}
</script>
