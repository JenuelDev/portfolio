import axios from 'axios';
import { apiV2, apikey  } from './../../constant';

export default {
     BLOG_GET: ({ dispatch }, { path, param }) => {
          return new Promise((resolve, reject) => {
              let apiGet = () => axios.get(apiV2+path+'?key='+apikey, { params: param });
  
              apiGet()
                  .then(response => {
                      let payload = { response, resolve, reject }
                      dispatch('VALIDATE_API', payload)
                  })
                  .catch(error => {
                      dispatch('CHECK_ERROR', { error, reject })
                  })
          })
      }
};