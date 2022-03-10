const app = Vue.createApp({
  data() {
    return {
      name: 'Shotaro Matsuya',
      age: 31,
      imageUrl:
        'https://f.image.geki.jp/data/image/member/300/54000/53354/member_53354_1.jpg',
    };
  },
  methods: {
    plusAgeFive: function () {
      return this.age + 5;
    },
    outputNumber: function () {
      return Math.random();
    },
  },
});

app.mount('#assignment');
