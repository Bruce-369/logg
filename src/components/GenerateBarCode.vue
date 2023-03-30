<template>
    <div>
        <BarCode
    v-bind:value="MyValue"
    :format="'CODE39'"
    :lineColor="'Black'"
    :width="1"
    :height="10"
    :elementTag="'img'"
  />
    </div>
</template>

<script>
import BarCode from "./BarCode.vue";

    export default {
        name: "GenerateBarCode",
        components:{
            BarCode
        },
        data() {
    return {
      MyValue: "wefwefwefw",
    };
  },
    }
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
