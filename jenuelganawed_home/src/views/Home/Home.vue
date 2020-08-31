<template>
  <div class="home">
   
    <div class="profile-container">
      <div class="profile-box-here" style="margin-top: 10px;">
        <ProfileBox class="float-right" />
      </div>
      <div class="info-box">
        <!-- tab for tablet and window -->
        <v-tabs class="tab-wide">
          <v-tab v-for="tab in tabs" :key="tab.text" :to="tab.path">
            <v-icon style="margin-right: 5px;">{{tab.icon}}</v-icon>
            {{tab.text}}
          </v-tab>
        </v-tabs>
        <!-- tabs when scrolling down -->
        <ShowTabsOnScroll />
        <div class="info-box-page-view">
          <v-card class="page" :loading="false" :disabled="false">
            <vue-page-transition name="fade-in-up">
              <router-view></router-view>
            </vue-page-transition>
          </v-card>
        </div>
        
      </div>
    </div>
    <!-- tab for phone / small width screen -->
    <div class="bottom-navigations">
      <BottomNav />
    </div>
  </div>
</template>

<script src="./Home.js"></script>
<style lang="scss" src="./Home.scss"></style>
