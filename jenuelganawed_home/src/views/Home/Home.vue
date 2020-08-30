<template>
  <div class="home">
   
    <div class="profile-container">
      <div class="profile-box">
        <v-card class="mx-auto profile-card">
          <div>
            <v-card-text style="text-align:center;">
              <div class="profile-image">
                <img src="./../../assets/profile.jpg" />
              </div>
              <v-list-item-title class="headline mb-1 profile-name">{{name}}</v-list-item-title>
              <v-list-item-title class="headline mb-1 profile-username">{{username}}</v-list-item-title>
              <p class="profile-details">{{about}}</p>
            </v-card-text>
            <div class="profile-links">
              <span v-for="(link, index) in links" :key="index">
                <v-icon
                  class="icons"
                  small
                  :color="link.icon_color"
                  style="display: inline;"
                >{{ link.icon }}</v-icon>
                <a
                  :href="link.link"
                  target="_blank"
                  :style="$vuetify.theme.dark ? 'color: white' : 'color: #2b2b2b'"
                >{{link.text}}</a>
              </span>
            </div>
          </div>
        </v-card>
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
