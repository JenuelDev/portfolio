import PageUnderContruction from "./../../../../components/PageUnderContruction/pageUnderConstruction.vue";
import LongCard from "./../../../../components/longCard/longCard.vue";
import Portfolio from "./../../../../assets/data/portfolio";

export default {
     components: {
          PageUnderContruction,
          LongCard
     },
     data() {
          return {
               active: false,
               datas: Portfolio
          }
     },
     methods: {
          goToSite(){
               console.log('sdf');
          }
     },
}