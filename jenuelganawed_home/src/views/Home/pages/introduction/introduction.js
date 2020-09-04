import { profile_image, links, name, username, intro } from "./../../../../assets/data/profile_box.js";
import { mdiFacebook } from "@mdi/js";

export default {
     name: "Introduction",
     data() {
          return {
               fname: name,
               image: profile_image,
               username: username,
               intro: intro,
               icons: {
                    fb: mdiFacebook
               },
               links: links
          }
     },
     methods: {
          goToLink(link) {
               window.open(link,'_blank');
          }
     },
}