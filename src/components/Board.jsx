import React from 'react';
import Tone from 'Tone';
import Keyboard from './Keyboard';


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
        <Keyboard playSound={this.playSound} state={this.state} keyClassNames={this.props.keyClassNames} imgSrc={this.props.imgSrc} defaultKeys={this.props.defaultKeys} imgClassNames={this.props.imgClassNames}/>
      </div>

    );
  }
}
export default Board;
