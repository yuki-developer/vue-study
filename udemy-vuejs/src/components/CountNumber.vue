<template>
  <div>
   <h2>{{ title | lowerCase}}</h2>
   <h2>{{ subTitle | lowerCase }}</h2>
   <p>{{number}}</p>
   <button @click="number++">+1</button>
  </div>
</template>


<script>
import { tokyoNumber } from "@/tokyoNumber.js"

export default {
  mixins: [tokyoNumber],
  created(){
      console.log("created in CounterNumber.");
  }
}
</script>