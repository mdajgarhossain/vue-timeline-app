<template>
  <v-container class="timeline-container">
    <div class="text-center my-8">
      <h1>Our Company Milestone</h1>
    </div>
    <v-timeline class="timeline-wrapper">
      <v-timeline-item v-for="post in timeline" :key="post.id">
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            {{ post.text }}
          </v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
            scaevola imperdiet nec ut, sed euismod convenire principes at. Est
            et nobis iisque percipit, an vim zril disputando voluptatibus, vix
            an salutandi sententiae.</v-card-text
          >
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
  background: lightgray;
}

.timeline-wrapper{
  width: 850px;
  margin: 10px auto;
}
</style>
