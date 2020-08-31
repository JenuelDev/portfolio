<template>
  <div class="profile-box" >
    <v-card class="mx-auto profile-card" :style="fullHeight ? 'height: 100vh;' : ''">
      <slot name="closeButton"></slot>
      <div>
        <v-card-text style="text-align:center;">
          <div class="profile-image">
            <img src="./../../assets/profile.jpg" />
          </div>
          <h3 class="headline mb-1 profile-name">{{name}}</h3>
          <h2>{{username}}</h2>
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
  props: {
    show: { type: Boolean, default: false },
    fullHeight: { type: Boolean, default: false }
  },
  data() {
    return {
      name: name,
      username: username,
      about: about,
      links: links,
      overlay: false,
      showIcon: mdiAccount,
      closeIcon: mdiClose,
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
.profile-box {
          .profile-card {
               min-width: 290px;
               max-width: 330px;
               padding: 20px 20px 80px 20px;

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

                    a{
                         text-decoration: none;
                         &:hover{
                              text-decoration-line: underline;
                         }
                    }
               }
          }
     }
</style>