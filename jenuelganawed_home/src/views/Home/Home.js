// @ is an alias to /src
import { name, username, about, links } from "./../../assets/data/profile_box.js";
import { tabs } from './../../assets/data/tabs.js';
import BottomNav from './../../components/bottomNavigation/bottomNavigation.vue';
import ShowTabsOnScroll from './../../components/showTabsOnScroll/showTabsOnScroll.vue';

export default {
     name: "Home",
     components: {
       BottomNav,
       ShowTabsOnScroll
     },
     data() {
       return {
        name: name,
        username: username,
        about: about,
        links: links,
        tabs: tabs
       };
     },
     methods: {
       changeTheme() {
         console.log("button clickd");
         this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
       },
     },
   };