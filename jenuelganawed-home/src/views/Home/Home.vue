<template>
  <div class="home">
    <div class="profile-container">
      <div class="profile-box">
        <v-card class="mx-auto profile-card">
          <div>
            <v-card-text style="text-align:center;">
              <div class="profile-image">
                <img src="./../../assets/31676163.png" />
              </div>
              <v-list-item-title class="headline mb-1 profile-name">Jenuel Oras Gnawed</v-list-item-title>
              <v-list-item-title class="headline mb-1 profile-username">MisterJ</v-list-item-title>
              <p
                class="profile-details"
              >Hi! I live in Baguio Luzon, Philippines. I am a programmer and a gamer. I eat rice and pay BILLS HiHi 👌😁👍😎</p>
            </v-card-text>
            <div class="profile-links">
              <span>
                <v-icon small>mdi-google-maps</v-icon>La Trinidad, Benguet, Luzon, Philippines
              </span>
              <span>
                <v-icon small>mdi-google-maps</v-icon>La Trinidad, Benguet, Luzon, Philippines
              </span>
            </div>
          </div>

          <!-- <v-card-actions>
            <v-btn text>Button</v-btn>
            <v-btn text>Button</v-btn>
          </v-card-actions>-->
        </v-card>
      </div>
      <div class="info-box">
        <v-tabs>
          <v-tab>
            <v-icon style="margin-right: 5px;">mdi-notebook-check-outline</v-icon>Overview
          </v-tab>
          <v-tab>
            <v-icon style="margin-right: 5px;">mdi-monitor-dashboard</v-icon>Portfolio
          </v-tab>
          <v-tab>
            <v-icon style="margin-right: 5px;">mdi-notebook-check-outline</v-icon>Overview
          </v-tab>
        </v-tabs>
        <div class="info-box-page-view">
          <v-card class="page">
            <router-view></router-view>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Home.js"></script>
<style lang="scss" src="./Home.scss"></style>
