<template>
<div id="app">
  <router-view />
</div>
</template>

<script>
import VueRouter from "vue-router";
import Vue from "vue";
import VueMeta from "vue-meta";

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
});
Vue.use(VueRouter);
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

body {
  background-image: url(./assets/img/Wiki-background.png);
}

.box {
  margin: 5%;
  margin-left: 9%;
  margin-right: 9%;
}

.card {
  margin-bottom: 3%;
}

.desc {
  font-size: 10pt;
  text-align: left !important;
  height: 98px;
}

.cartBtn {
  vertical-align: bottom;
  text-align: center;
  background-color: #31A4FA;
  color: #fff;
}

.cartBtn a {
  color: #fff;
}

h5 {
  font-size: 13pt;
}

a {
  color: #000;
}

.sort {
  margin-left: 5px;
  margin-right: 5px;
  background-color: #035CB1;
}

.sort a {
  color: #fff;
  text-decoration: none;
}
</style>
