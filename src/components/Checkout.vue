<template>
<md-card>
  <md-card-header>
    <div class="md-title">Pierre's Store</div>
  </md-card-header>

  <md-card-content>
    <h2>Checkout</h2>
    <div class="md-layout md-gutter">
      <md-table>
        <md-table-row>
          <md-table-head></md-table-head>
          <md-table-head>Product Name</md-table-head>
          <md-table-head md-numeric>Quantity</md-table-head>
          <md-table-head md-numeric>Cost</md-table-head>
          <md-table-head md-numeric>Total Cost Per Item</md-table-head>
        </md-table-row>
        <Row v-for="(item) in cart" :product="item.name" v-bind:key="item.name" :quantity="item.quantity" :cost="item.cost" :src="item.src" @deletedItem="deletedItem" @changedObj="updateCart" />
        <md-table-row>
          <md-table-cell>
          </md-table-cell>
          <md-table-cell>
          </md-table-cell>
          <md-table-cell>
          </md-table-cell>
          <md-table-cell md-numeric>
            <strong>Total Cost</strong>
          </md-table-cell>
          <md-table-cell md-numeric>
            {{total}}
            <img src="../assets/img/36px-Gold.png" id="gold" />
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </md-card-content>
</md-card>
</template>
<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import Row from "./Row.vue";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
Vue.use(VueMaterial);
export default {
  name: 'Checkout',
  components: {
    Row
  },
  data() {
    return {
      cart: [],
      deleted: 0
    }
  },
  computed: {
    total() {
      let cart = this.cart;
      let total = 0;
      cart.forEach(function(val) {
        total += val.quantity * val.cost
      })
      total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return total;
    },
  },
  methods: {
    deletedItem(value) {
      this.$emit("deletedItem", value);
    },
    updateCart(obj) {
      let cart = this.cart;
      cart.forEach(function(val) {
        if (val.name === obj.name) {
          val.quantity = obj.quantity;
        }
      })
      localStorage.cart = cart;
    }
  },
  mounted() {
    if (localStorage.cart) {
      let cart = JSON.parse(localStorage.cart);
      let itemizedCart = [];
      cart.forEach(function(val) {
        if (val !== "") {
          itemizedCart.push(val);
        }
      })
      this.cart = itemizedCart;
    }
  }
}
</script>

<style scoped>
.md-card {
  margin: 7em;
}

h2 {
  text-align: left;
}

.md-table {
  margin-left: 2em;
}

.md-table-head {
  font-size: 15px !important;
}

strong {
  font-size: 15px;
}
</style>
