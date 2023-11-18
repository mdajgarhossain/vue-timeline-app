<template>
  <v-container class="timeline-container">
    <div class="text-center my-8">
      <h1>Our Company Milestone</h1>
    </div>
    <v-timeline class="timeline-wrapper">
      <v-timeline-item v-for="post in timeline" :key="post.id">
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
    </v-timeline>
    <div v-if="loading" class="loading">Loading...</div>
  </v-container>
</template>

<script>
export default {
  name: "TimelineContainer",
  props: ["timeline", "loading"],

  methods: {
    formatDate(dateString) {
      const options = { month: "short", day: "2-digit", year: "numeric" };
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", options);
    },
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
