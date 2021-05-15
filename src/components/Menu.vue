<template>
<md-card>
  <md-list-item to="/">
    <span class="md-headline">Home</span>
  </md-list-item>
  <md-card-header>
    <div class="md-subheading">Shop By Categories</div>
  </md-card-header>

  <md-card-content>
    <md-list>
      <router-link :to="{ name: 'category', params: { category: 'home'} }">
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Home Goods</span>
        </md-list-item>
      </router-link>
      <router-link :to="{ name: 'category', params: { category: 'seeds'} }">
        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Seeds</span>
        </md-list-item>
      </router-link>
      <router-link :to="{ name: 'category', params: { category: 'other'} }">
        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Other</span>
        </md-list-item>
      </router-link>
    </md-list>
  </md-card-content>

  <md-card-actions>
    <router-link :to="{ name: 'checkout' }">
      <md-button>Checkout</md-button>
    </router-link>
  </md-card-actions>
</md-card>
</template>

<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueMaterial);
export default {
  name: 'Menu',
}
</script>

<style scoped>
.md-card-content {
  padding-left: 0px;
  padding-right: 0px;
}

.md-list-item {
  border: 1px solid #adadad;
}

.md-list-item:nth-child(2) {
  border-top: none;
  border-bottom: none;
}

.md-list-item-text {
  font-size: 13px;
}

.md-list-item:hover {
  background-color: #d8e2dc;
}

.md-card {
  margin: 7em;
  margin-right: 0;
}
</style>
