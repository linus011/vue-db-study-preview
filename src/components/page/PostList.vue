<template>
  <div class="post-wrap">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="post"
    >
      <div class="post-header">
        <div
          class="profile"
          :style="`background-image:url(${item.userImage})`"
        />
        <span class="profile-name">{{ item.name }}</span>
      </div>
      <slot />
      <div
        class="post-body"
        :class="[item.filter]"
        :style="`background-image:url(${item.postImage})`"
        @click="$emit('postClick', i)"
      />
      <div class="post-content">
        <p>{{ item.likes }} Likes</p>
        <p><strong>{{ item.name }}</strong> {{ item.caption }}</p>
        <p class="date">
          {{ item.date }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    items: { type: Array, default: null },
  },
}
</script>
