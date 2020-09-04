<template>
     <div class="backButton">
          <v-btn rounded @click="hasHistory() 
    ? $router.go(-1) 
    : $router.push('/')">
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
     methods: {
          hasHistory () { return window.history.length > 2 }
     }
}
</script>

<style lang="scss">
     .backButton{
          position: fixed;
          margin-top: 20px;
          margin-left: 20px;
     }
</style>