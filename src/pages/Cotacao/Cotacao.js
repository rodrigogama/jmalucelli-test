import React from 'react';
import Toolbar from '../../components/Toolbar';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import avatarImg from '../../assets/img/img_avatar2.png';
import MaskedField from 'react-masked-field';
import { CotacaoService } from '../../services';

class Cotacao extends React.Component {
  state = {
    cnpj: null,
  }

  onCompleteHandler (value) {
    if (value && value.length === 18) {
      const cnpj = value.replace(/[^\d]/g, '');
      this.setState({ cnpj });
    } else {
      this.setState({ cnpj: null });
    }
  }

  async onClickHandler () {
    const { cnpj } = this.state;
    const response = await CotacaoService.getCotacao(cnpj);

    console.log(response);
  }

  render() {
    return (
      <div className="page-wrapper page-default">
        <Toolbar>
          <div className="flex flex-row" style={{height: '5rem', padding: '0 3rem'}}>
            <i className="fa fa-line-chart icon__line-chart" aria-hidden="true" style={{margin: 'auto 0'}}></i>
            <div className="flex flex-column" style={{marginLeft: '3rem', flex: '1'}}>
              <span style={{textAlign: 'left', fontSize: '1.8rem'}}>Nova cotação</span>
              <span style={{textAlign: 'left', fontSize: '1.2rem'}}>#0980</span>
            </div>
            <Avatar src={avatarImg} alt="Avatar" />
          </div>
        </Toolbar>

        <div className="flex flex-row" style={{margin: '3rem'}}>
          <div className="square">
            <span className="square__number">1</span>
          </div>
          <span style={{marginLeft: '3rem', fontWeight: 'bold', fontSize: '1.7rem'}}>Buscar por CNPJ ou empresa</span>
        </div>

        <div className="flex flex-row" style={{backgroundColor: '#fff'}}>          
          <MaskedField className="input__text" mask="99.999.999/9999-99" onComplete={(value) => this.onCompleteHandler(value)} />
        </div>

        <div style={{display: 'flex', padding: '0 2.2rem'}}>
          <Button
            disabled={!this.state.cnpj}
            style={{flexGrow: '1'}}
            color="primary" 
            text="OK"
            showIcon
            iconName="arrow-right"
            onClick={(ev) => { ev.preventDefault(); this.onClickHandler(); }}
          />
        </div>
      </div>
    )
  }
}

export default Cotacao;