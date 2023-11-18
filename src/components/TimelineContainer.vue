<template>
  <div>
    <div v-for="post in timeline" :key="post.id" class="post">
      {{ post.text }}
    </div>
    <div v-if="loading" class="loading">Loading...</div>
  </div>
</template>

<script>
export default {
  name: 'TimelineContainer',
  props: ['timeline', 'loading'],
  
};
</script>

<style scoped>
.post {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}

.loading {
  text-align: center;
  margin: 10px;
}
</style>
