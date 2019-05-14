import React from 'react';
import Tone from 'Tone';
import Keyboard from './Keyboard';
import KeyboardEventHandler from 'react-keyboard-event-handler';


class Board extends React.Component {

  constructor(props) {
    super(props);
    let synth = new Tone.Synth().toMaster();
    this.state = {
      synth: synth,
    }
    this.playSound = this.playSound.bind(this);
    this.setEventKey = this.setEventKey.bind(this);

  }


  playSound(note, speed) {
    console.log(this.state.synth);
    this.state.synth.triggerAttackRelease(note, speed);

  }

  setEventKey(key) {
    console.log(key)
  }




  render() {
    return (
      <div>
        <KeyboardEventHandler handleKeys={['all']} onKeyEvent={(key) => this.setEventKey(key)} />
          <Keyboard playSound={this.playSound} state={this.state} keyClassNames={this.props.keyClassNames} imgSrc={this.props.imgSrc} defaultKeys={this.props.defaultKeys}/>
    </div>
    );
  }
}
export default Board;
