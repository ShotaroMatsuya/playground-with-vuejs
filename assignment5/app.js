const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskBody: '',
      isVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.isVisible ? 'Hide List' : 'Show List';
    },
  },

  methods: {
    addTask() {
      if (this.taskBody === '') {
        return;
      }
      this.tasks.push(this.taskBody);
      this.taskBody = '';
    },
    deleteTask(idx) {
      this.tasks.splice(idx, 1);
    },
    toggleVisible() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount('#assignment');
