<template>
<div class="md-layout-item md-size-25">
  <md-card>
    <md-card-header>
      <div class="md-subheading">{{name}}</div>
    </md-card-header>
    <md-card-content>
      <img :src="updatedSrc" id="productImage" />
      <div>
        {{price}}
        <img src="../assets/img/36px-Gold.png" id="gold" />
      </div>
      <div>
        <md-field>
          <label>Quantity</label>
          <md-input type="number" v-model="quantity" require="true"></md-input>
        </md-field>
        <md-button class="md-primary" @click.native="addToCart()">Add to cart</md-button>
      </div>
    </md-card-content>
  </md-card>
</div>
</template>
<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
Vue.use(VueMaterial);
export default {
  name: 'ProductCard',
  props: ["price", "name", "description", "src", "item"],
  computed: {
    updatedSrc() {
      return "../assets/img/" + this.src;
    }
  },
  methods: {
    addToCart() {
      var cart = this.cart;
      var quantityObj = {
        'quantity': this.quantity
      };
      var obj = {
        ...this.item,
        ...quantityObj
      }

      // TODO add in  a way to check if cart already has item existing and add quantity too it
      cart = {
        ...obj,
        ...cart
      };

      localStorage.cart = JSON.stringify(cart);
      this.$emit("addedItem", true);

    },
  },
  data() {
    return {
      cart: []
    }
  },
  watch: {
    cart(newCart) {
      localStorage.cart = newCart;
    }
  },
  mounted() {
    if (localStorage.cart) {
      this.cart = localStorage.cart
    }
  }
}
</script>
<style scoped>
.md-layout-item {
  margin-bottom: .5em;
}

.md-card {
  min-height: 130px;
}

#productImage {
  min-height: 60px;
  min-width: 60px;
}

#gold {
  max-height: 25px;
  max-width: 25px;
}
</style>
