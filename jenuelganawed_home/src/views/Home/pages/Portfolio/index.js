import PageUnderContruction from "./../../../../components/PageUnderContruction/pageUnderConstruction.vue";
import LongCard from "./../../../../components/longCard/longCard.vue";
import { smallApps } from "./../../../../assets/data/portfolio";

export default {
     components: {
          PageUnderContruction,
          LongCard
     },
     data() {
          return {
               active: false,
               datas: smallApps
          }
     },
     methods: {
          goToSite(){
               console.log('sdf');
          }
     },
}