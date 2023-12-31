<template>
  <v-container class="timeline-container">
    <div class="text-center mt-5 mb-8">
      <h1>Our Company Milestone</h1>
    </div>
    <v-timeline class="timeline-wrapper">
      <v-timeline-item v-for="post in localTimeline" :key="post.id">
        <v-card class="elevation-2">
          <v-row no-gutters>
            <v-col>
              <div>
                <v-card-title class="text-h5">
                  {{ post.text }}
                </v-card-title>
                <v-card-text
                  >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                  scaevola.</v-card-text
                >
              </div>
            </v-col>
            <v-col cols="3" class="card-date">
              <p class="pa-3">{{ formatDate(post.date) }}</p>
            </v-col>
          </v-row>
        </v-card>
      </v-timeline-item>
      <div ref="lastItem"></div>
    </v-timeline>

    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="localLoading && !loading" class="loading">Loading more...</div>
  </v-container>
</template>

<script>
export default {
  name: "TimelineContainer",
  props: ["timeline", "loading"],
  data() {
    return {
      localTimeline: [], // Local timeline data
      localLoading: false, // Local loading state
      observer: null,
      itemsToLoad: 5, // Number of items to load at a time
    };
  },

  methods: {
    formatDate(dateString) {
      const options = { month: "short", day: "2-digit", year: "numeric" };
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", options);
    },

    loadMoreData() {
      // Loading more data for demonstration
      this.localLoading = true;
      setTimeout(() => {
        const startIndex = this.localTimeline.length;
        const endIndex = startIndex + this.itemsToLoad;
        const newData = this.timeline.slice(startIndex, endIndex);
        this.localTimeline = [...this.localTimeline, ...newData];
        this.localLoading = false;
      }, 1000);
    },
    handleIntersection(entries) {
      const lastEntry = entries[0];
      if (lastEntry.isIntersecting) {
        this.loadMoreData();
      }
    },
  },

  watch: {
    timeline(newTimeline) {
      // Update localTimeline when the prop changes
      this.localTimeline = newTimeline.slice(0, this.itemsToLoad);
    },
    loading(newLoading) {
      // Update localLoading when the prop changes
      if (!newLoading) {
        this.localLoading = false;
      }
    },
  },

  mounted() {
    this.observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.5,
    });
    this.observer.observe(this.$refs.lastItem);
  },

  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
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
  font-size: 25px;
  color: cornflowerblue;
}

.timeline-container {
  background: #e5e5e5;
  margin-top: 20px;
  min-height: 700px;
}

.timeline-wrapper {
  width: 850px;
  margin: 10px auto;
}

.card-date {
  border-left: 2px solid #e5e5e5;
  font-size: 20px;
}
</style>
