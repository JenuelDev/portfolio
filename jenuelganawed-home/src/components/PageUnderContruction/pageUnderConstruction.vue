<template>
  <div class="under-contruction">
    <v-icon class="icon">mdi-hand-peace</v-icon>
    <h3>Im Sorry {{pageName}} Page is Under Contruction</h3>
  </div>
</template>

<script>
export default {
  props: {
    pageName: {type: String}
  }
}
</script>

<style lang="scss">
.under-contruction {
  width: 200px;
  margin: auto;
  padding-top: 100px;
  padding-bottom: 200px;
  text-align: center;
  .icon {
    font-size: 150px;
  }
}
</style>