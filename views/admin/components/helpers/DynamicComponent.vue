<template>
  <v-flex>
    <v-row>
      <v-col>
        <div>

          {{ componentName }}
          <v-btn text icon color="pink" @click.native="removeBlock">
            <v-icon>mdi-delete</v-icon>
          </v-btn>

          <form @submit.prevent="submit">
            <FormData :options="options"/>  
            <v-text-field
              v-for="(option, key) in options"
              :key="key"
              v-model="formData[key]"
              :label="key"
            />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </v-col>

      <!-- <v-col> -->
        <!-- <component
          :is="component"
          v-bind="formData"
        /> -->
      <!-- </v-col> -->
    </v-row>
  </v-flex>
</template>

<script>
  export default {
    inheritAttrs: false,
    name: 'DynamicComponent',

    components:{
      FormData:{
        props: ['options'],
        render(h){
          const childs = Object.keys(this.options).map(option=>{
              const item = this.options[option]
              return h('div', option)
          })

          return h('div', {}, childs)
        }
      }
    },

    props: {
      id: String,
      componentName: {
        type: String,
        required: true
      },

      options: {
        type: Object,
        default: () => ({})
      }
    },

    data() {
      const formData = Object.keys(this.options)
        .reduce((acc, option) => {
          acc[option] = this.options[option]
          return acc
        }, {})
      console.log(this.options);
      
      return {
        formData
      }
    },

    created() {
      if (!this.blockName) return null
      this.loadComponent()
    },

    methods: {
      loadComponent() {
        // const vm = this
        // const { blockName } = this

        // this.component = () => import(/* webpackChunkName: "[request]" */ `@/../tmp/sections/${blockName}`)
        //   .then((component) => {
        //     return component
        //   })
        //   .catch((err) => {
        //     console.log(err)

        //     // return error component
        //     return {
        //       render(h) {
        //         return h(
        //           'div',
        //           {
        //             style: 'color: red; padding: 20px; text-align: left'
        //           },
        //           `An error occurred when load component. Reason: Component (${blockName}) that you are trying to load does not exist`
        //         )
        //       }
        //     }
        //   })
      },

      async submit() {
        try {
          const { data } = await this.$axios.put('/builder', {
            id: this.id,
            options: this.formData
          })
          console.log(data)
        } catch {

        }
      },

      async removeBlock(){
         try {
          const { data } = await this.$axios.delete('/builder/' + this.id)
          this.$emit('removed')
        } catch {

        }
      }
    }
  }
</script>
