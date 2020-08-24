<template>
     <div class="pages">
          <v-card class="overview-cards">
               <h2><v-icon large color="primary">{{mdiGold}}</v-icon> Objective</h2>
               <div class="overview-cards-sub">
                    <q v-html="overviewdata.onjective"></q>
               </div>
          </v-card>
          <v-card v-for="(overview, index) in overviewdata.overviews" :key="index" class="overview-cards">
               <h2><v-icon large color="primary">{{overview.icon}}</v-icon> {{overview.h2}}</h2>
               <div v-for="sub in overview.sub" :key="sub.h3" class="overview-cards-sub">
                         <h3 class="overview-cards-sub-title">{{ sub.h3 }}<span v-if="sub.current" class="span-current"><v-icon >{{mdiHandPointingRight}}</v-icon> Current Work</span></h3> 
                         <p class="overview-cards-sub-title-def"><v-icon small>{{mdiCalendarMonth}}</v-icon> {{ sub.date }}</p>
                         <div class="overview-cards-sub-content" v-html="sub.content + sub.others"></div>
               </div>
          </v-card>
          
     </div>
</template>
<script src="./index.js"></script>