import React, { PropTypes } from 'react';

class Flag extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.countryCode !== nextProps.countryCode;
  }

  render() {
    const { countryCode, color } = this.props;

    return (
      <div>
        "Flagg"
      </div>
    );
  }
}

Flag.propTypes = {
  countryCode: PropTypes.object.isRequired
};

export default Flag;
