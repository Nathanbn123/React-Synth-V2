import React from 'react';
import Tone from 'Tone';

class Board extends React.Component {

  constructor(props) {
    super(props);
    let synth = new Tone.Synth().toMaster();
    this.state = {
      synth: synth,
    }
    this.playSound = this.playSound.bind(this);
  }

  playSound(note, speed) {
    console.log(this.state.synth);
    this.state.synth.triggerAttackRelease(note, speed);

  }
  render() {
    return (
      <div>
        <button onClick={() => {this.playSound('C4', '8n')}} />
      </div>

    );
  }
}
export default Board;
