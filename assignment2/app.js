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
    showAlert: function () {
      alert('アラート');
    },
    enterValue: function (e) {
      this.name = e.target.value;
    },
    hitEnter: function (e) {
      this.age = e.target.value;
    },
  },
});

app.mount('#assignment');
