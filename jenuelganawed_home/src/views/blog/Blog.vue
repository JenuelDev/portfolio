<template>
     <div>
          <back-button style="z-index: 30;"/>
          <div class="blog-container">
               
               <div class="blog-content">
                    <v-alert
                         :icon="blogIcon"
                         prominent
                         class="alert-blog"
                    >
                         Hi! This Blog posts Bellow Are Only Copied and Pasted for testing purposes, But you can actually read if you want. In the mean time, I will be editing This post. This posts are API generated from Blogger API provided by google Blogspot.com. You can check the original source of the api in my blogspot website. <a href="https://brojenuel.blogspot.com/" target="_blank">https://brojenuel.blogspot.com/</a>
                    </v-alert>
                    <div v-if="blogItems.length == 0">
                         <v-skeleton-loader
                              v-for="count in 4"
                              :key="count"
                              class="mx-auto"
                              type="list-item-avatar-three-line"
                              style="margin-bottom: 10px;"
                         ></v-skeleton-loader>
                    </div>
                    
                    <BlogItems v-else :datas="blogItems" />
               </div>
          </div>
     </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>