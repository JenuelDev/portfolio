<template>
  <div :vs-theme="$vuetify.theme.dark ? 'dark' :'light'">
    <v-app>
    <ThemeChanger />
    <vue-page-transition name="fade-in-right">
      <router-view/>
    </vue-page-transition>
  </v-app>
  </div>
  
</template>

<script>
import ThemeChanger from './components/themeChanger/ThemeChanger';

export default {
  name: 'App',
  components: {
    ThemeChanger
  },
  beforeCreate(){
    let themeSelected = localStorage.getItem('theme-select');
    if(themeSelected){
      this.$vuetify.theme.dark = themeSelected == 'true' ? true : false;
    }
  },
  data: () => ({

  }),
};
</script>
