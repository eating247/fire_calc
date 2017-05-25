var fire = new Vue({
  el: '#fire',
  data: {
    message: 'FIRE',
    expenses: '',
    calc: ''
  },
  methods: {
    calculate: function() {
      this.calc = this.expenses * 25
    }
  }
})