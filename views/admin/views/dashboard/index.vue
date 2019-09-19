<template>
  <v-flex>
    <v-row>
      <!-- <v-col sm="3">
        <DynamicComponent
          v-for="(block) in blocks"
          v-bind="block"
          :id="block._id"
          :key="block._id"
          @removed="getBlocks"
        />
      </v-col>-->

      <Dynamic v-for="(block, i) in blocks" v-bind="block" :key="i" />

      <!-- <v-col>
        <v-btn outlined color="primary" dark @click.native="reloadIframe">Reload</v-btn>
        <iframe 
        ref="preview"
         name="preview"
         src="http://localhost:3999" 
         frameborder="0" 
         width="100%" 
         height="100%"
         />
      </v-col>-->
    </v-row>
  </v-flex>
</template>

<script>
import DynamicComponent from "@/components/helpers/DynamicComponent";
import Dynamic from "@/components/helpers/Dynamic";

export default {
  components: { DynamicComponent, Dynamic },
  data() {
    return {
      blocks: [
        { name: "Block", props: { title: "Hello" } },
        { name: "contents/Text1", props: { title: "Hello" } },
        { name: "contents/Text2", props: { title: "Hello from Text2", content: "Contet text2" } }
      ]
    };
  },

  created() {
    // this.getBlocks()
  },

  methods: {
    async getBlocks() {
      try {
        const { data } = await this.$axios.get("/builder/blocks");
        this.blocks = data;
      } catch {}
    },

    reloadIframe() {
      const win = this.$refs.preview.contentWindow;
      win.postMessage("сообщение", "*");
    }
  }
};
</script>
