var fire = new Vue({
  el: '#fire',
  data: {
    message: 'testing vue'
  },
  methods: {
    changeSomething: function() {
      this.message = 'new message'
    }
  }
})