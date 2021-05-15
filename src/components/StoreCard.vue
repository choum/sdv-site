<template>
<md-card>
  <md-card-header>
    <div class="md-title">Pierre's Store</div>
  </md-card-header>

  <md-card-content>
    <h2>{{ getTitle }}</h2>
    <span class="alert" v-if="showAlert">Your item has been added to your cart</span>
    <div class="md-layout md-gutter">
      <ProductCard v-for="item in filterObj" :key="item.name" :item="item" :name="item.name" :description="item.description" :price="item.cost" :src="item.src" @addedItem="addedItem" />
    </div>
  </md-card-content>
</md-card>
</template>

<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import items from "../json/items.json";
import ProductCard from "./ProductCard.vue";
Vue.use(VueMaterial);
export default {
  name: 'StoreCard',
  props: ['add'],
  watch: {
    showAlert() {}
  },
  computed: {
    showAlert() {
      if (this.add > 0) {
        return true;
      } else {
        return false;
      }
    },
    getTitle() {
      if (this.$route.path === "/category/other") {
        return "Other"
      } else if (this.$route.path === "/category/seeds") {
        return "Seeds"
      } else if (this.$route.path === "/category/home") {
        return "Home Goods"
      } else {
        return "In Season"
      }

    },
    currentSeason() {
      // get current season
      const today = new Date();
      let month = today.getMonth();
      var season = "winter"
      if (month >= 3 && month <= 5) {
        season = "spring"
      } else if (month >= 6 && month <= 8) {
        season = "summer"
      } else if (month >= 9 && month <= 11) {
        season = "fall"
      }
      return season;
    },
    filterObj() {
      var seasonProducts = [];
      if (this.$route.params.category === "home") {
        items.home.forEach(val => seasonProducts.push(val))
      } else if (this.$route.params.category === "seeds") {
        items.seeds.forEach(val => seasonProducts.push(val))
      } else if (this.$route.params.category === "other") {
        items.other.forEach(val => seasonProducts.push(val))
      } else {
        var currentSeason = this.currentSeason;
        if (currentSeason === "winter") {
          currentSeason = null;
        }
        items.other.forEach(function(val) {
          if (val.season === currentSeason) {
            seasonProducts.push(val);
          }
        })

        items.seeds.forEach(function(val) {
          if (val.season === currentSeason) {
            seasonProducts.push(val);
          }
        })
      }
      return seasonProducts;
    }
  },
  methods: {
    addedItem(value) {
      this.$emit("addedItem", value);
    },
  },
  components: {
    ProductCard
  },
}
</script>

<style scoped>
.md-card {
  margin: 7em;
}

h2 {
  text-align: left;
}

.alert {
  opacity: 1;
  -moz-animation: cssAnimation 3s;
  /* Firefox */
  -webkit-animation: cssAnimation 3s;
  /* Safari and Chrome */
  -o-animation: cssAnimation 3s;
  /* Opera */
  animation: cssAnimation 3s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

@keyframes cssAnimation {
  to {
    visibility: hidden;
  }
}
</style>
