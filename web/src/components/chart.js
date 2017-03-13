import { Doughnut } from 'vue-chartjs'

const pie = Doughnut.extend({
  props: ['data'],
  data () {
    return {
      options: {
        legend: {
          display: false
        },
        animation: {
          animateRotate: false
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
})

module.exports = {
  pie: pie
}
