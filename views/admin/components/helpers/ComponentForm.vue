<template>
    <div>
        <h3>{{ componentName }}</h3>
        <v-text-field
                v-for="(value, name, i) in options"
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

      options: {
        type: Object,
        default: () => ({})
      }
    },

    data() {
      const formData = Object.entries(this.options)
        .reduce((formData, [field, value]) => {
          formData[field] = isNill(value.default) ? value : value.default
          return formData
        }, {})

      return {
        formData
      }
    },

    watch: {
      formData: {
        handler(v) {
          this.$emit('input', v)
        },
        deep: true
      }
    },

    methods: {}

    // render(h) {
    //   const title = h('h3', this.componentName)
    //   const fields = convertSchemaDraftToForm.call(this, this.options)
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
