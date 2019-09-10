<script>
  import isObject from 'lodash/isObject'
  import RowWithKey from './RowWithKey'
  import RowWithKeyAndValue from './RowWithKeyAndValue'
  import set from 'lodash/set'
  import isInteger from 'lodash/isInteger'
  import Vue from 'vue'

  export default {
    components: {
      RowWithKeyAndValue,
      RowWithKey
    },
    props: {
      data: {
        type: Object,
        default: () => ({
          title: 'Lorem',
          content: 'Content',
          image: {
            alt: 'Image',
            title: 'Photo'
          },
          block: {
            title: 'Good',
            list: [
              1, 2, 3, 4
            ],
            col: [
              {
                link: '/test'
              }
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

    render(h) {
      const vm = this
      return create(this.dataTree)

      function create(data, path = '') {
        const list = Object.entries(data)
          .reduce((acc, [key, value]) => {
            if (isObject(value)) {
              acc.push(h(
                'li',
                [
                  h('RowWithKey', { props: { rowName: key } }),

                  // invoke function recursively
                  create(value, createPath(path, key))
                ]
              ))
            } else {
              acc.push(h('RowWithKeyAndValue', {
                props: {
                  rowName: key,
                  rowValue: value
                },
                on: {
                  input(value) {
                    setData.call(vm.dataTree, createPath(path, key), value)
                  }
                }
              }))
            }

            return acc
          }, [])

        return h('ul', {
          staticClass: 'data-tree-list'
        }, list)
      }
    }
  }

  function createPath(path, key) {
    return path ? `${path}.${key}` : key
  }

  function setData(path, value) {
    let link = this
    const keys = path.split('.')
    const keysCount = keys.length
    const lastKey = keys[keysCount - 1]

    for (let i = 0; i < keysCount - 1; i++) {
      link = link[keys[i]]
    }

    Vue.set(link, lastKey, value)
  }
</script>

<style lang="scss">
  .data-tree {
    &-list {
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;

      & & {
        padding-left: 30px;
      }
    }
  }
</style>
