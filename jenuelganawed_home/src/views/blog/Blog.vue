<template>
     <div>
          <back-button />
          <UnderContruction pageName="Blog"/>
     </div>
</template>
<script>
import UnderContruction from "./../../components/PageUnderContruction/pageUnderConstruction.vue";
import BackButton from "./../../components/backButton/backButton.vue";

export default {
     components:{
          UnderContruction,
          BackButton
     }
}
</script>