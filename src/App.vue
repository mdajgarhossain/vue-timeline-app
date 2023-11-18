<template>
  <div>
    <PostInput />
    <TimelineContainer :timeline="timeline" :loading="loading" />
  </div>
</template>

<script>
import PostInput from '@/components/PostInput.vue';
import TimelineContainer from '@/components/TimelineContainer.vue';

export default {
  components: {
    PostInput,
    TimelineContainer,
  },

  data() {
    return {
      loading: false,
    };
  },

  async created() {
    this.loading = true;
    this.$store.commit('addPost', await this.$services.timeline.fetchTimeline());
    this.loading = false;
  },
};
</script>
