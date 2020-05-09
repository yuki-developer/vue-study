<template>
  <div>
    <LikeHeader v-slot:default="slotProps">
      <p>{{ slotProps }}</p>
      <h2>みなさん</h2>
      <h3>はじめまして</h3>
      <p>よろしくお願いします</p>
    </LikeHeader>
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"
export default {
  data() {
    return {
      number :14
    }
  },
  methods: {
    incrementNumber(value){
      this.number = value;
    }
  },
  components: {
    LikeHeader
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
  /* h1 {
    color: red;
  } */
</style>
