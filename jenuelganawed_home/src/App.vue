<template>
  <div :vs-theme="$vuetify.theme.dark ? 'dark' :'light'">
    <v-app>
      <div class="show-myprofile">
      <ProfileBox />
    </div>
    <ThemeChanger />
    
    <vue-page-transition name="fade-in-left">
      <router-view/>
    </vue-page-transition>
  </v-app>
  </div>
  
</template>

<script>
import ThemeChanger from './components/themeChanger/ThemeChanger';
import ProfileBox from './components/profileBox/profileInbox.vue';

export default {
  name: 'App',
  components: {
    ThemeChanger,
    ProfileBox
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
