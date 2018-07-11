import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../components/Button';
import '../../styles/pages/pages.css';

class Home extends React.Component {
  render() {
    return (
      <div className="page-container flex-column">
        <i className="fa fa-line-chart icon__line-chart" aria-hidden="true" style={{marginBottom: '4rem'}}></i>
        <h1 style={{marginBottom: '1.5rem'}}>Cotação de seguros</h1>
        <span style={{marginBottom: '4.5rem'}}>Solução inovadora da líder de mercado</span>

        <Button
          color="default" 
          text="Iniciar"
          showIcon
          iconName="arrow-right"
          onClick={() => { this.props.history.push('/cotacao'); }}
        />
      </div>
    )
  }
}

export default withRouter(Home);