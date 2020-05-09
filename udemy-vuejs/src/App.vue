<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
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
</style>
