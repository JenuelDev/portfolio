export default {
     data() {
          return {
               showButton: this.$vuetify.theme.dark,
          }
     },
     methods:{
          clickButton() {
               this.showButton = !this.showButton;
               this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
               localStorage.setItem('theme-select', this.$vuetify.theme.dark);
          }
     }
}