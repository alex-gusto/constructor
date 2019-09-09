<script>
import isObject from 'lodash/isObject'

  export default {
    props:{
      data: {
        type: Object,
        default: () => ({
          title: 'Lorem',
          content: 'Content',
          image: {
            alt: 'Image',
            title: "Photo"
          },
          block: {
            title: "Good",
            list: [
              1,2,3,4
            ]
          }
        })
      }
    },

    data() {
      return {
        dataTree: this.data
      }
    },

    render(h){
      const vm = this 
      return  create(this.dataTree) 
      
      function create(data) {
        const list = Object.entries(data).reduce((acc, [key, value]) => {
          if(isObject(value)){
            acc.push(h(
              'li',
              [
                rowWithKey(key), 
                create(value)
              ]
            ))
          } else{
            acc.push(rowWithKeyAndValue(key, value))
          }

          return acc
        }, [])
        
        return h('ul', {
          staticClass: 'data-tree-list'
        }, list)
      }

      function rowWithKey(key){
        return h('div', [
          h('button', {
            staticClass: 'data-tree-toggler',
            on: {
              click() {

              }
            }
          }, '+' ),
          key,
          h('button', {
            staticClass: 'data-tree-add',
            on: {
              click() {

              }
            }
          }, '+' ),
          h('button', {
            staticClass: 'data-tree-delete',
            on: {
              click() {

              }
            }
          }, 'x' ),
        ])
      }

      function rowWithKeyAndValue(key, value){
        return h(
            'li',
            [
              h('span', key),
              h('span', {
                staticClass: 'data-tree-spacer'
              }, ': '),
              h('input', {
                attrs:{
                  value
                },
                on: {
                  input({target:{value}}){
                    vm.dataTree[key] = value               
                  }
                }
              })
            ]
          )
      }
    }
  }
</script>

<style lang="scss">
   .data-tree {
    &-toggler {
      background: black;
      padding: 3px;
      color: #FFF;
      display: inline-block;
      margin-right: 5px; 
    } 

    &-list{
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      
      & & {
        padding-left: 30px;
      }
    }
   }
</style>