<template>
  <div :class="isHidden && 'data-tree-closed'">
    <button class="data-tree-toggle" @click="toggle">+</button>
    <span>{{ rowName }}</span>

    <span>
      <button class="data-tree-add" @click="add">+</button>
      <button class="data-tree-delete" @click="$emit('delete')">x</button>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'RowWithKey',

    props: ['rowName', 'path'],
    data() {
      return {
        isHidden: true
      }
    },

    methods: {
      add() {
        this.show()
        this.$emit('add', this.path)
      },

      show() {
        this.isHidden = false
      },

      toggle() {
        this.isHidden = !this.isHidden
      }
    }
  }
</script>

<style lang="scss">
  .data-tree {
    &-toggle {
      background: black;
      padding: 3px;
      color: #fff;
      display: inline-block;
      margin-right: 5px;
      border-radius: 2px;
    }

    &-add,
    &-delete {
      padding: 3px;
    }

    &-closed + &-list {
      display: none;
    }
  }
</style>
