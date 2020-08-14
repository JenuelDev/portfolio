<template>
  <div id="app">
    <div class="j-calculator-bg">
      <Jcalculator></Jcalculator>
    </div>
    <JFooter></JFooter>
  </div>
</template>

<script>
import Jcalculator from './components/jcalculator/jcalculator.vue';
import JFooter from './components/footer/footer';

export default {
  name: 'App',
  components: {
    Jcalculator,
    JFooter
  }
}
</script>

<style>
  body{
    margin: 0px;
  }
</style>
