<template>
<md-table-row>
  <md-table-cell><span @click="remove(product)">Delete</span></md-table-cell>
  <md-table-cell><img :src="updatedSrc" />{{product}}</md-table-cell>
  <md-table-cell md-numeric>
    <input type="number" v-model="newQuantity" required="true" v-on:keyup="returnQuantity(product, quantity, newQuantity)" />
  </md-table-cell>
  <md-table-cell md-numeric>{{formatCost}} <img src="../assets/img/36px-Gold.png" id="gold" :key="quantity" /></md-table-cell>
  <md-table-cell md-numeric>{{totalQuantity}} <img src="../assets/img/36px-Gold.png" id="gold" :key="quantity" /></md-table-cell>
</md-table-row>
</template>
<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
Vue.use(VueMaterial);
export default {
  name: 'Row',
  props: ["product", "quantity", "cost", "src", "itemIndex"],
  data() {
    return {
      newQuantity: this.quantity
    }
  },
  computed: {
    checkIfPositive() {
      if (this.quantity > 0) {
        return true;
      } else {
        return false;
      }
    },
    totalQuantity() {
      if (this.checkIfPositive) {
        return (this.newQuantity * this.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else {
        return null;
      }
    },
    formatCost() {
      return this.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    updatedSrc() {
      return "../assets/img/" + this.src;
    }
  },
  methods: {
    remove(name) {
      var cart = JSON.parse(localStorage.cart);
      var cartString = "";
      cart.forEach(function(val) {
        if (val !== "") {
          let fixedItem = val + "}";
          let obj = JSON.parse(fixedItem);
          if (obj.name !== name)
            cartString += fixedItem;
        }
      })
      localStorage.cart = cartString
      this.$emit("deletedItem", true);
    },
    returnQuantity(product, quantity, newQuantity) {
      // recreate obj, return obj and add it into cart
      var cart = JSON.parse(localStorage.cart);
      var finalObj;
      cart.forEach(function(val) {
        if (val !== "") {
          if (val.name === product) {
            if (parseInt(newQuantity) > 0) {
              val.quantity = newQuantity
            } else {
              val.quantity = quantity
            }
            finalObj = val;
          }
        }
      })
      this.$emit("changedObj", finalObj);
    }
  }
}
</script>
