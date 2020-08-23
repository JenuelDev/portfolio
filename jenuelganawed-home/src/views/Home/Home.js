// @ is an alias to /src

export default {
     name: "Home",
     components: {
     },
     data() {
       return {
   
       };
     },
     methods: {
       changeTheme() {
         console.log("button clickd");
         this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
       },
     },
   };