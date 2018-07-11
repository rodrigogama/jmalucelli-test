import axios from 'axios';

class CotacaoService {
  static getCotacao(cnpj) {
    return axios.get(`/quote/${cnpj}`)
      .then(response => response.data)
      .catch(error => {
        if (error.response.status === 404) {
          /* eslint-disable no-throw-literal */
          throw 'Empresa não encontrada.';
        }
      });
  }
}

export default CotacaoService;