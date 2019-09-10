<template>
  <component :is="component" v-bind="props" />
</template>

<script>
export default {
  props: ["name", "props"],
  data() {
    return {
      component: null
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      const name = this.name.split("/");

      this.component = () =>
        import(`../sections/${name[0]}`)
          .then(component => {
            // console.log(component[name[1]]);

            return component.default || component[name[1]];
          })
          .catch(err => {
            console.log(err);

            // return error component
            return {
              render(h) {
                return h(
                  "div",
                  {
                    style: "color: red; padding: 20px; text-align: left"
                  },
                  `An error occurred when load component. Reason: that you are trying to load does not exist`
                );
              }
            };
          });
    }
  }
};
</script>