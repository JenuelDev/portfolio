<template>
     <div style="padding: 20px;">
          <LongCard v-ripple v-for="data in datas" :key="data.key" :title="data.title" :icon="data.icon" :link="data.link" :lang="data.langUsed">
               <template v-slot:image>
                    <img :src="data.image" alt />
                    <img
                         class="blur"
                         :src="data.image"
                         alt
                    />
               </template>
               <template v-slot:content>
                    <div v-html="data.content"></div>
               </template>
          </LongCard>
     </div>
</template>

<script src="./index.js"></script>