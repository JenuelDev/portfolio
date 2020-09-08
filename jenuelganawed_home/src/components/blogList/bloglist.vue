<template>
     <div class="blog-list-show">
          <!-- Post-->
          <v-card class="post-module">
               <!-- Thumbnail-->
               <div class="thumbnail">
                    <!-- <div class="date">
                         <div class="date-day">27</div>
                         <div class="date-month">Mar</div>
                    </div> -->
                    <img :src="image"/>
               </div>
               <!-- Post Content-->
               <v-card class="post-content">
                    <!-- <div class="category">Photos</div> -->
                    <h1 class="title">{{title}}</h1>
                    <v-chip x-small v-for="label in labels" :key="label" style="margin: 3px;">
                         <v-icon small>{{sharpIcon}}</v-icon>
                         {{label}}
                    </v-chip>
                    <p class="description">{{ strimedContent }}...</p>
                    <div class="post-meta">
                         <v-dialog
                              v-model="dialog"
                              width="800px"
                         >
                              <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                   color="indigo"
                                   dark
                                   small
                                   v-bind="attrs"
                                   v-on="on"
                                   rounded
                              >
                                   Read More
                              </v-btn>
                              </template>
                              <v-card>
                              <v-card-title>
                                   <span class="headline">{{ title }}</span>
                              </v-card-title>
                              <v-card-text  class="modal-contents">
                                   <div >
                                         <v-chip x-small v-for="label in labels" :key="label" style="margin: 3px;">
                                             <v-icon small>{{sharpIcon}}</v-icon>
                                             {{label}}
                                        </v-chip>
                                        <span class="comments" style="float:right;">
                                             <v-icon small>{{commentIcon}}</v-icon>
                                             <!-- <a href="#"> 39 comments</a> -->
                                             {{ date }}
                                        </span>
                                   </div>
                                   <div v-html="content" class="this-is-content-modal" style="margin-top: 20px;"></div>
                              </v-card-text>
                              <v-card-actions>
                                   <v-spacer></v-spacer>
                                   <v-btn
                                   color="primary"
                                   text
                                   @click="dialog = false"
                                   >
                                   Close
                                   </v-btn>
                              </v-card-actions>
                              </v-card>
                         </v-dialog>
                         <!-- <span class="timestamp">
                              <i class="fa fa-clock-">o</i> 6 mins ago
                         </span> -->
                         <span class="comments" style="float:right;">
                              <v-icon small>{{commentIcon}}</v-icon>
                              <!-- <a href="#"> 39 comments</a> -->
                              {{ date }}
                         </span>
                    </div>
               </v-card>
          </v-card>
     </div>
</template>
<script>
import { mdiCalendarOutline, mdiComment, mdiCommentOutline, mdiMusicAccidentalSharp } from '@mdi/js'
export default {
     props: {
          title: { type: String, default: 'No Title' },
          image: { type: String, default: null },
          labels: { type: Array, default: null },
          strimedContent: { type: String, default: 'Thiers no strimedContent' },
          date: { type: String, default: 'No Date' },
          content: { type: String, default: 'no content'}
     },
     data() {
          return {
               sharpIcon: mdiMusicAccidentalSharp,
               commentIcon: mdiCalendarOutline,
               dialog: false,
          }
     },
}
</script>
<style lang="scss" src="./bloglist.scss"></style>