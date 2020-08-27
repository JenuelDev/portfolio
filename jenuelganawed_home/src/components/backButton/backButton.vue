<template>
     <div class="backButton">
          <v-btn rounded to="/">
               <v-icon>{{mdiBackBurger}}</v-icon>
               Home
          </v-btn>
     </div>
</template>
<script>
import { mdiBackburger } from "@mdi/js";
export default {
     data() {
          return {
               mdiBackBurger: mdiBackburger
          }
     },
}
</script>

<style lang="scss">
     .backButton{
          position: fixed;
          margin-top: 20px;
          margin-left: 20px;
     }
</style>