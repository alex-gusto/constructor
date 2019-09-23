<template>
  <li class="data-tree-list__row data-tree-with-key">
    <span class="data-tree-key">
      {{ rowName }}
    </span>
    <span class="data-tree-spacer_x">:</span>
    <v-text-field
      :value="rowValue"
      outlined
      hide-details
      class="data-tree-input"
      @input="onInput"
    />

    <span>
     <span class="data-tree-spacer_l">
        <v-btn icon @click="$emit('add', path)">
          <v-icon color="green lighten-1">mdi-plus</v-icon>
        </v-btn>

        <v-btn icon @click="$emit('delete')">
          <v-icon color="red lighten-1">mdi-minus</v-icon>
        </v-btn>
    </span>
    </span>
  </li>
</template>

<script>
  export default {
    name: 'RowWithKeyAndValue',

    props: ['rowName', 'rowValue', 'path'],

    methods: {
      onInput({ target: { value } }) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="scss">
  .data-tree {
    &-with-key {
      padding-left: 23px;
    }
  }
</style>
