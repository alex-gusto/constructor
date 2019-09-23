<template>
  <div :class="isHidden && 'data-tree-closed'">
    <button class="data-tree-toggle" @click="toggle">
      {{ isHidden ? '+': '-' }}
    </button>

    <span class="data-tree-key">{{ rowName }}</span>

    <span class="data-tree-spacer_l">
      <!-- <el-button
        size="mini"
        icon="el-icon-plus"
        circle
        @click="add"
      />

      <el-button
        size="mini"
        icon="el-icon-delete"
        circle
        @click="$emit('delete')"
      /> -->
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
      position: relative;
      padding: 0 4px;
      color: #fff;
      background: black;
      display: inline-block;
      margin-right: 10px;
      border-radius: 2px;
      font-size: 10px;
      outline: none;
      transition: 0.2s;
      width: 14px;
      text-align: center;

      &:active {
        transform: scale(0.6);
      }
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
