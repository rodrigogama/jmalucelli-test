import axios from 'axios';
import { ACCESS_TOKEN } from '../constants';

import CotacaoService from './cotacao.service';

axios.interceptors.request.use(
  config => {
      // probably here we should check whether the user is logged in and get its token.

      if (ACCESS_TOKEN) {
        config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
      } else {
        config.headers.Authorization = null;
      }

      return config;
  },
  error => Promise.reject(error)
);

// export services
export { CotacaoService };