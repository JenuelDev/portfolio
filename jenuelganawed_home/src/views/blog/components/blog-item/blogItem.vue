<template>
     <div class="blog-list-card">
          <BlogList 
               v-for="data in datas" 
               :key="data.id" 
               :image="data.images[0].url" 
               :title="data.title" 
               :labels="data.labels"
               :strimedContent="StrimText(RemoveHTMLTags(data.content), 200)"
               :date="convertDate(data.updated)"
               :content="data.content"
               style="display: inline-block"
          />
     </div>
</template>
<script>
// import LongCard from './../../../../components/longCard/longCard.vue';
import BlogList from './../../../../components/blogList/bloglist.vue';
export default {
     components: {
          // LongCard
          BlogList
     },
     props: {
          datas: {type: Array, default: null}
     },
     methods: {
          RemoveHTMLTags(html){
               var regX = /(<([^>]+)>)/ig;
               return html.replace(regX, "");
          },
          StrimText(text, max){
               return text && text.length > max ? text.slice(0,max).split(' ').slice(0, -1).join(' ') : text;
          },
          convertDate(date){
               const dt = date.split("T")[0];
               const months = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
               ];
               const dateConvert = new Date(dt)
               const tr = months[dateConvert.getMonth()] + ' '+ dateConvert.getDay().toString() + ', '+ dateConvert.getFullYear().toString() + '';
               return tr;
          }
     }
}
</script>
<style lang="scss">
     .images-blog-item{
          width: 100px;
          height: 130px !important;
     }
</style>