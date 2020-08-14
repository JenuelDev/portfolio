<template>
  <div id="app">
    <div class="j-calculator-bg">
      <Jcalculator></Jcalculator>
    </div>
  </div>
</template>

<script>
import Jcalculator from './components/jcalculator/jcalculator.vue';
export default {
  name: 'App',
  components: {
    Jcalculator
  }
}
</script>

<style>
  body{
    margin: 0px;
  }
</style>
