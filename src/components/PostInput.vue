<template>
  <div class="d-flex post-input-wrapper">
    <v-text-field
      placeholder="Type your post..."
      v-model="newPost"
      hide-details="auto"
      outlined
      dense
      @keyup.enter="addPost"
    ></v-text-field>
    <v-btn @click="addPost" class="ml-4">Post</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPost: "",
    };
  },
  methods: {
    addPost() {
      if (this.newPost.trim() !== "") {
        this.$store.dispatch("addPost", {
          id: Date.now(),
          text: this.newPost,
          date: new Date(),
        });
        this.newPost = "";
      }
    },
  },
};
</script>

<style scoped>
.post-input-wrapper {
  width: 500px;
  margin: 20px auto 10px auto;

}
</style>
