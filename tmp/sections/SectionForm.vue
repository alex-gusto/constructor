<template>
  <div>
    <div class="container">
      <BaseForm
        :type="type"
        :fields="fields"
        :submitUrl="submitUrl"
        :formName="formName"
      >
        <template v-slot="{ formData, hasError }">
          <BaseTextField
            v-model="formData[fields[0].attribute]"
            v-bind="fields[0]"
            :error="hasError(fields[0].attribute, formName)"
          />

          <BaseCheckbox
            v-model="formData[fields[4].attribute]"
            v-bind="fields[4]"
            :error="hasError(fields[4].attribute, formName)"
          />

          <BaseBtn type="submit">
            {{ submitButton }}
          </BaseBtn>
        </template>
      </BaseForm>
    </div>
  </div>
</template>

<script>
  export default {
    props: [ 'title', 'description', 'heading', 'fields', 'submitButton', 'submitUrl', 'type' ],

    data: () => ({
      formName: 'testForm'
    }),

    mounted () {
      console.log(_get(this, [ 'fields', 0 ]))
    },

    methods: {}
  }
</script>

<style lang="scss">
  .test {
    padding: 50px 0;
    font-size: 1em;
  }
</style>
