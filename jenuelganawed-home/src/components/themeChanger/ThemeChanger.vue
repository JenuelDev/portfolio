<template>
     <div class="setting-changer">
          <v-btn @click="clickButton()" icon x-large class="button" :class="showButton ? 'night' : 'day'">
               <v-icon large v-if="showButton">{{ mdiWeatherSunny }}</v-icon>
               <v-icon large v-else>{{ mdiWeatherNight }}</v-icon>
          </v-btn>
     </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>