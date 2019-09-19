<template>
  <v-flex>
       <v-data-table
            :headers="headers"
            :items="list"
            :loading="isLoading"
            class="elevation-1"
        >
          <template v-slot:item.blocks="{ item }">
            {{ item.blocks.length }}
          </template>
        </v-data-table>
  </v-flex>
</template>

<script>
import isFunction from 'lodash/isFunction'

// TODO: need finish component creation
  const createAbstractComponent = (url) => {
   return {
    data () {
      return {
        list: [],
        headers: [
          {
              text: 'Page ID',
              align: 'left',
              sortable: false,
              value: 'pageId',
          },
          { text: 'Alias', value: 'alias' },
          { text: 'Blocks count', value: 'blocks', align: 'right', }
        ], 
        
        isLoading: false
      }
    }, 
    
    created() {
      this.getList(url)
    }, 

    methods: {
      async getList(url){
         try {
          const { data } = await this.$axios.get(url)
          this.list = data
        } catch (e) {
        }
      }
    }
   }
  }
  
  function createComponent(component){
    const abstractComponent = createAbstractComponent('/builder/pages')
    
    Object.entries(abstractComponent).forEach(([key, value]) => {
      console.log(key);
      if(isFunction(value)){
        const fn = component[key]

        if(isFunction(fn)){
          component[key] = () => {   
  
          }
        }else{
          component[key] = value
        }
      } else {
         component[key] = Object.assign(abstractComponent[key], component[key]) 
      }
    })

    return component
  }

  export default createComponent({})
</script>

<style lang="scss">

</style>
