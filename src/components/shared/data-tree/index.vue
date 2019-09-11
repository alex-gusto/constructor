<script>
  import isObject from 'lodash/isObject'
  import RowAddNew from './RowAddNew'
  import RowWithKey from './RowWithKey'
  import RowWithKeyAndValue from './RowWithKeyAndValue'
  import isEmpty from 'lodash/isEmpty'
  import Vue from 'vue'

  export default {
    components: {
      RowWithKeyAndValue,
      RowWithKey,
      RowAddNew
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
            list: [1, 2, 3, 4],
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
            if (isObject(value) && !isEmpty(value)) {
              const childs = [
                h('RowWithKey', {
                  props: {
                    rowName: key,
                    path: createPath(path, key)
                  },

                  on: {
                    delete() {
                      deleteData.call(vm.dataTree, createPath(path, key))
                    },
                    add(path) {
                      addData.call(vm.dataTree, path)
                    },
                    toggle() {
                    }
                  }
                }),

                // invoke function recursively
                create(value, createPath(path, key))
              ]

              acc.push(
                h('li', {
                  staticClass: 'data-tree-list__row'
                }, childs)
              )
            } else if (!key.length) {
              acc.unshift(
                h('RowAddNew', {
                  props: {
                    rowName: key,
                    rowValue: value
                  },
                  on: {
                    save(value) {
                      saveData.call(vm.dataTree, createPath(path, key), value)
                    },

                    cancel() {
                      cancelEditData.call(vm.dataTree, createPath(path, key))
                    }
                  }
                })
              )
            } else {
              if (isObject(value)) {
                value = ''
              }

              acc.push(
                h('RowWithKeyAndValue', {
                  props: {
                    rowName: key,
                    rowValue: value,
                    path: createPath(path, key)
                  },
                  on: {
                    input(value) {
                      setData.call(vm.dataTree, createPath(path, key), value)
                    },
                    delete() {
                      deleteData.call(vm.dataTree, createPath(path, key))
                    },
                    add(path) {
                      addData.call(vm.dataTree, path)
                    }
                  }
                })
              )
            }

            return acc
          }, [])

        return h(
          'ul',
          {
            staticClass: 'data-tree-list'
          },
          list
        )
      }
    }
  }

  function createPath(path, key) {
    return path ? `${path}.${key}` : key
  }

  function setData(path, value) {
    const { link, lastKey } = getLink.call(this, path)
    Vue.set(link, lastKey, value)
  }

  function deleteData(path) {
    const { link, lastKey } = getLink.call(this, path)
    Vue.delete(link, lastKey)
  }

  function addData(path) {
    const { link, lastKey } = getLink.call(this, path)

    if (isPrimitive(link[lastKey])) {
      link[lastKey] = {}
    }

    Vue.set(link[lastKey], '', '')
  }

  function saveData(path, { rowName, rowValue }) {
    const { link, lastKey } = getLink.call(this, path)

    Vue.delete(link, lastKey)
    Vue.set(link, rowName, rowValue)
  }

  function cancelEditData(path) {
    const { link, lastKey } = getLink.call(this, path)

    Vue.delete(link, lastKey)
  }

  function getLink(path) {
    let link = this
    const keys = path.split('.')
    const keysCount = keys.length
    const lastKey = keys[keysCount - 1]

    for (let i = 0; i < keysCount - 1; i++) {
      link = link[keys[i]]
    }

    return {
      link,
      lastKey
    }
  }

  function isPrimitive(a) {
    return (a !== Object(a))
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

      &__row + .data-tree-list__row {
        margin-top: 5px;
      }
    }

    &-input {
      padding: 2px;
      border-radius: 3px;
      border: 1px dashed grey;
    }
  }
</style>
