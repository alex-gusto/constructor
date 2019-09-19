<template>
  <div>
    <h3>{{ componentName }}</h3>
    <v-text-field
      v-for="(value, name, i) in schemaDraft"
      v-model="formData[name]"
      :key="i"
      :label="name"
    />
  </div>
</template>

<script>
  import isNill from 'lodash/isNil'

  export default {
    name: 'ComponentForm',

    props: {
      _id: String,

      componentName: String,

      schemaDraft: {
        type: Object,
        default: () => ({})
      }
    },

    data() {
      const formData = Object.entries(this.schemaDraft)
        .reduce((formData, [field, value]) => {
          formData[field] = isNill(value.default) ? '' : value.default
          return formData
        }, {})

      return {
        formData
      }
    },

    watch: {
      formData: {
        handler(v) {
          this.$emit('change', this._id, v)
        },
        immediate: true,
        deep: true
      }
    },

    methods: {}

    // render(h) {
    //   const title = h('h3', this.componentName)
    //   const fields = convertSchemaDraftToForm.call(this, this.schemaDraft)
    //
    //   return h('div', [title, ...fields])
    //
    //   function convertSchemaDraftToForm(schema) {
    //     const vm = this
    //     return Object.entries(schema)
    //       .reduce((fields, [name, value]) => {
    //         if (value.type === 'String') {
    //           fields.push(h('div', [h('input', {
    //             attrs: {
    //               value: vm.formData[name],
    //               name: name
    //             },
    //
    //             on: {
    //               input({ target: { value } }) {
    //                 vm.formData[name] = value
    //               }
    //             }
    //           })]))
    //         }
    //
    //         return fields
    //       }, [])
    //   }
    // }
  }

</script>

<style lang="scss">

</style>
