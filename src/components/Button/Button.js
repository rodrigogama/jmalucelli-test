import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/Button/Button.css';

class Button extends React.Component {
  render() {
    const { text, color, showIcon, iconName, type, onClick, style } = this.props;

    return (
      <button className={`btn ${color}`}
        style={style}
        onClick={onClick}
        type={type}
      >
        <span className="btn__text-container">
          {text}
          {showIcon && <i className={`fa fa-${iconName}`} aria-hidden="true"></i>}
        </span>
      </button>
    );
  }
}

Button.defaultProps = {
  showIcon: false,
  iconName: 'arrow-right',
  text: '',
  color: 'default',
  type: 'button',
}

Button.propTypes = {
  showIcon: PropTypes.bool,
  iconName: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

export default Button;