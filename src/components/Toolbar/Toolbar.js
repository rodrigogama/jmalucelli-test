import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/Toolbar/Toolbar.css';

class Toolbar extends React.Component {
  render() {
    const { color } = this.props;

    return (
      <div className={`toolbar toolbar-${color}`}>
        {this.props.children}
      </div>
    );
  }
}

Toolbar.defaultProps = {
  color: 'primary',
}

Toolbar.propTypes = {
  color: PropTypes.string,
};

export default Toolbar;