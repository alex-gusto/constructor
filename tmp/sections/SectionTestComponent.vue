<template>
  <div
    v-show="$resp.mdUp"
    class="test"
    data-observer-repeat="true"
    @inview="inView"
    @outview="outView"
  >
    <div class="container">
      <h3>
        {{ title }}
      </h3>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      options: {
        type: Object,
        default: () => ({})
      },
      title: {
        type: String,
        default: 'Yo'
      }
    },

    data: () => ({
      obj: {
        g: 0,
        h: {
          g: 0
        }
      }
    }),

    created () {
      console.log(_get(this.obj, [ 'h', 'g' ]))
    },

    mounted () {
      this.$observer.observe(this.$el)
    },

    methods: {
      inView (e) {
        console.log(e)
      },
      outView (e) {
        console.log('out: ', e)
      }
    }
  }
</script>

<style lang="scss">
  .test {
    padding: 50px 0;
    font-size: 1em;
  }
</style>
