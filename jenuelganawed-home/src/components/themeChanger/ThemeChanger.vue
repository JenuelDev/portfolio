<template>
     <div class="setting-changer">
          <v-btn @click="clickButton()" icon x-large class="button" :class="showButton ? 'night' : 'day'">
               <v-icon v-if="showButton">mdi-weather-sunny</v-icon>
               <v-icon v-else>mdi-weather-night</v-icon>
          </v-btn>
     </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>