const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    checkNum() {
      console.log('watcher is watching');
      const that = this;
      setTimeout(() => {
        this.count = 0;
      }, 5000);
    },
  },
  computed: {
    checkNum() {
      if (this.count > 37) {
        return 'Too Much!!';
      } else if (this.count === 37) {
        return this.count;
      } else {
        return 'Not there yet!!';
      }
    },
  },

  methods: {
    add(num) {
      this.count = this.count + num;
    },
  },
});

app.mount('#assignment');
