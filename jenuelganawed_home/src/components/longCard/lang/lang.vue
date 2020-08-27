<template>
     <div class="lang-used" style="display: block">
          <span v-for="(lang, index) in usedLang" :key="index" class="lang-shows">
               <v-icon x-small style="margin-top: -3px;" :color="lang.color">{{circle}}</v-icon>
               {{lang.text}}
          </span>
     </div>
</template>
<script>
import { mdiCheckboxBlankCircle } from '@mdi/js';

export default {
     props: {
          usedLang: {type: Array}
     },
     data() {
          return {
               circle: mdiCheckboxBlankCircle
          }
     },
}
</script>
<style lang="scss">
     .lang-used{
          font-size: 12px;
          margin-top: 5px;
     }
</style>