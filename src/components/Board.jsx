import React from 'react';
import Tone from 'Tone';

class Board extends React.Component {

  constructor(props) {
    super(props);

  }

  playSound() {
    var synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease("C4", "8n");

  }
  render() {
    return (
      <div>
        <button onClick={this.playSound} />
      </div>

    )
  }
};
export default Board
