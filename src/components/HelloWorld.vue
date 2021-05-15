<template>
<div class="md-layout md-gutter" id="wrapper">
  <div class="md-layout-item md-size-30 md-small-size-100 md-xsmall-size-100">
    <Menu />
  </div>
  <div class="md-layout-item" id="homeRow">
    <Checkout v-if="getBool" @deletedItem="deletedItem" :key="deleted" :deleted="deleted" />
    <StoreCard v-else @addedItem="addedItem" :key="add" :add="add" />
  </div>
</div>
</template>

<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import StoreCard from "./StoreCard.vue";
import Checkout from "./Checkout.vue";
import Menu from "./Menu.vue";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
Vue.use(VueMaterial);
export default {
  name: 'HelloWorld',
  components: {
    StoreCard,
    Menu,
    Checkout
  },
  data() {
    return {
      add: 0,
      deleted: 0
    }
  },
  computed: {
    getBool() {
      return this.$route.name === "checkout"
    },
  },
  methods: {
    addedItem(value) {
      if (value)
        this.add += 1;
    },
    deletedItem(value) {
      if (value)
        this.deleted += 1;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
