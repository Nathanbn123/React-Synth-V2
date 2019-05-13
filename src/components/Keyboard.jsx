import React from 'react';
import PropTypes from 'prop-types';


class Keyboard extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }


  render() {
    return (
      <div></div>
    );
  }

}

Keyboard.propTypes = {
  defaultKeys: PropTypes.object,
};


export default Keyboard;
