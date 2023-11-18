<template>
  <div>
    <pre>{{timeline}}</pre>
    <PostInput />
    <TimelineContainer :timeline="timeline" :loading="loading" />
  </div>
</template>

<script>
import PostInput from '@/components/PostInput.vue';
import TimelineContainer from '@/components/TimelineContainer.vue';
import { mapState } from 'vuex';

export default {
  components: {
    PostInput,
    TimelineContainer,
  },

  computed: {
    ...mapState(['timeline']),
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
