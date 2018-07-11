import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/Avatar/Avatar.css';

class Avatar extends React.Component {
  render() {
    const { src, alt } = this.props;

    return (
      <div className="avatar-container">
        <img className="avatar-img" src={src} alt={alt}/>
      </div>
    );
  }
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Avatar;