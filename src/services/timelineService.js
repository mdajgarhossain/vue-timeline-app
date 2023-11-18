export default {
  async fetchTimeline() {
    // Fetch timeline data
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
      // Mock data
      { id: 1, text: 'First post', date: new Date() },
      { id: 2, text: 'Second post', date: new Date() },
    ];
  },
};
