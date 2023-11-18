<template>
  <div>
    <input v-model="newPost" placeholder="Type your post..." />
    <button @click="addPost">Post</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPost: '',
    };
  },
  methods: {
    addPost() {
      this.$store.dispatch('addPost', { id: Date.now(), text: this.newPost, date: new Date() });
      this.newPost = '';
    },
  },
};
</script>
