<template>
  <div>
    <button class="data-tree-toggle">+</button>
    <span>{{ rowName }}</span>

    <span>
      <button class="data-tree-add">+</button>
      <button class="data-tree-delete">x</button>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'RowWithKey',

    props: ['rowName']
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

    &-add, &-delete{
      padding: 3px;
    }
  }
</style>
