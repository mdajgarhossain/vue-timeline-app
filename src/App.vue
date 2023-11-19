<template>
  <v-app>
    <v-container>
      <PostInput />
      <TimelineContainer :timeline="timeline" :loading="loading" />
    </v-container>
  </v-app>
</template>

<script>
import PostInput from "@/components/PostInput.vue";
import TimelineContainer from "@/components/TimelineContainer.vue";
import { mapState } from "vuex";

export default {
  components: {
    PostInput,
    TimelineContainer,
  },

  computed: {
    ...mapState(["timeline"]),
  },

  data() {
    return {
      loading: false,
    };
  },

  async created() {
    this.loading = true;

    // Fetch current posts from the service
    const currentPosts = await this.$services.timeline.fetchTimeline();
    this.$store.dispatch("addPosts", currentPosts);

    this.loading = false;
  },
};
</script>
