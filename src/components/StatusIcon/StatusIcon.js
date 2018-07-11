import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/StatusIcon/StatusIcon.css';

class StatusIcon extends React.Component {
  render() {
    const { isValid } = this.props;

    return isValid ? (
      <i className="fa fa-check-circle status-icon status-icon__valid" aria-hidden="true"></i>
    ) : (
      <i className="fa fa-times-circle status-icon status-icon__invalid" aria-hidden="true"></i>
    );
  }
}

StatusIcon.defaultProps = {
  isValid: false,
}

StatusIcon.propTypes = {
  isValid: PropTypes.bool,
};

export default StatusIcon;