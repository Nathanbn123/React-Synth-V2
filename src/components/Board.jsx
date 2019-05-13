import React from 'react';
import Tone from 'Tone';

class Board extends React.Component {

  constructor(props) {
    super(props);
    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease("C4", "8n");

  }
  render() {
    return (
      <div></div>

    )
  }
};
export default Board
