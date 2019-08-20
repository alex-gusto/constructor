<template>
  <v-flex>
    <v-row>
      <v-col sm="3">
        <DynamicComponent
          v-for="(block) in blocks"
          v-bind="block"
          :id="block._id"
          :key="block._id"
          @removed="getBlocks"
        />
      </v-col>
      
      <v-col>
        <v-btn outlined color="primary" dark @click.native="reloadIframe">Reload</v-btn>
        <iframe 
        ref="preview"
         name="preview"
         src="http://localhost:3999" 
         frameborder="0" 
         width="100%" 
         height="100%"
         />
      </v-col> 
    </v-row>
  </v-flex>
</template>

<script>
  import DynamicComponent from '@/components/helpers/DynamicComponent'

  export default {
    components: { DynamicComponent },
    data() {
      return {
        blocks: []
      }
    },

    created() {
      this.getBlocks()
    },

    methods: {
      async getBlocks() {
        try {
          const { data } = await this.$axios.get('/builder/blocks')
          this.blocks = data
        } catch {

        }
      },

      reloadIframe(){
         const win = this.$refs.preview.contentWindow;
         win.postMessage("сообщение", "*");
      }
    }
  }
</script>
