<template>
  <li class="data-tree-list__row">
    <form
      class="data-tree-form"
      @submit.prevent="submit"
      @reset.prevent="reset"
    >
      <div>
        <input
          type="text"
          v-model="formData.rowName"
          class="data-tree-input"
        >
        <span> : </span>
        <input
          type="text"
          v-model="formData.rowValue"
          class="data-tree-input"
        >
      </div>
      <div class="data-tree-form__footer">
        <button type="submit" class="data-tree-save">Save</button>
        <button type="reset" class="data-tree-reset">Cancel</button>
      </div>
    </form>
  </li>
</template>

<script>
  export default {
    name: 'RowAddNew',

    props: ['rowName', 'rowValue'],

    data() {
      return {
        formData: {
          rowName: this.rowName,
          rowValue: this.rowValue
        }
      }
    },

    methods: {
      submit() {
        this.$emit('save', this.formData)
      },

      reset() {
        this.$emit('cancel')
      }
    }
  }
</script>

<style lang="scss">
  .data-tree {
    &-form {
      &__footer {
        padding-top: 5px;
      }
    }
    &-save {
      padding: 2px 4px;
      border-radius: 4px;
      background: lawngreen;
    }

    &-reset {
      padding: 2px 4px;
      border-radius: 4px;
      margin-left: 10px;
      background: tomato;
    }
  }
</style>
