import React from 'react';
import Toolbar from '../../components/Toolbar';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import avatarImg from '../../assets/img/img_avatar2.png';

class Cotacao extends React.Component {
  render() {
    return (
      <div className="page-wrapper page-default">
        <Toolbar>
          <div className="flex flex-row" style={{height: '5rem', padding: '0 3rem'}}>
            <i className="fa fa-line-chart icon__line-chart" aria-hidden="true" style={{margin: 'auto 0'}}></i>
            <div className="flex-grow flex flex-column" style={{marginLeft: '3rem'}}>
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

        <div style={{display: 'flex', padding: '0 2.2rem'}}>
          <Button
            style={{flexGrow: '1'}}
            color="primary" 
            text="OK"
            showIcon
            iconName="arrow-right"
            onClick={() => { console.log('chamar service') }}
          />
        </div>
      </div>
    )
  }
}

export default Cotacao;