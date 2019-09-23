<template>
  <li class="data-tree-list__row data-tree-with-key">
    <form
      class="data-tree-form"
      @submit.prevent="submit"
      @reset.prevent="reset"
      >
      <div class="data-tree-form__inputs">
        <v-text-field
          outlined
          class="data-tree-input"
          hide-details
          v-model="formData.rowName"
        />
        <span class="data-tree-spacer_x">:</span>
        <v-text-field
          outlined
          class="data-tree-input"
          hide-details
          v-model="formData.rowValue"
        />
      </div>
      <div class="data-tree-form__footer">
        <v-btn small type="submit" color="primary"  class="mr-5">
          Save
        </v-btn>

         <v-btn small color="error" type="reset">
          Cancel
        </v-btn>
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
      &__inputs {
        display: flex;
      }

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
