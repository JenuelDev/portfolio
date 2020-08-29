<template>
  <div>
    <v-btn
      icon
      @click="overlay = !overlay"
      :x-large="windowWidth <= 425 ? false: true"
      class="button-show-overlay"
      :class="$vuetify.theme.dark ? 'night' : 'day'"
    >
      <v-icon :x-large="windowWidth <= 425 ? false: true">{{showIcon}}</v-icon>
    </v-btn>
    <div :class="overlay ? 'show-overlay' : ''" @click="overlay = !overlay"></div>
    <div class="profile-box-show" :style="overlay ? 'margin-left:0px;' : 'margin-left: -500px;'">
      <v-card class="mx-auto profile-card">
          <v-btn style="float:right;" icon>
               <v-icon @click="overlay = !overlay">{{closeIcon}}</v-icon>
          </v-btn>
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
  </div>
</template>
<script>
// @ is an alias to /src
import {
  name,
  username,
  about,
  links,
} from "./../../assets/data/profile_box.js";

import { mdiAccount, mdiClose } from "@mdi/js";

export default {
  name: "Home",
  data() {
    return {
      name: name,
      username: username,
      about: about,
      links: links,
      overlay: false,
      showIcon: mdiAccount,
      closeIcon: mdiClose,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>
<style lang="scss">
.button-show-overlay {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 12;
  margin-right: 80px;
  margin-top: 20px;
  display: none;
}

.day {
    background-color: #202020 !important;
    color: white !important;
  }
  .night {
    background-color: white !important;
    color: #202020 !important;
  }

.show-overlay {
  z-index: 15;
  background-color: rgba(37, 37, 37, 0.431);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.close-overlay {
  position: fixed;
  z-index: 25;
}
.profile-box-show {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  height: 100vh;
  transition: 0.3s;
  height: 100vh;

  .profile-card {
    float: right;
    max-width: 350px;
    padding: 20px;
    height: 101vh;
    overflow: auto;

    .profile-image img {
      width: 90%;
      border-radius: 100%;
      margin-bottom: 10px;
    }

    .profile-links span {
      display: block;
      font-size: 14px;
      margin-bottom: 5px;

      .icons {
        margin-right: 10px;
      }

      a {
        text-decoration: none;
        &:hover {
          text-decoration-line: underline;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
     .button-show-overlay {
          display: block !important;
     }
}

@media only screen and (max-width: 425px) {
     .button-show-overlay {
          margin-top: 10px;
          margin-right: 70px;
     }
}
</style>