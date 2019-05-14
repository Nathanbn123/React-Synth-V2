import React from 'react';
import Tone from 'Tone';
import Keyboard from './Keyboard';
import KeyboardEventHandler from 'react-keyboard-event-handler';



class Board extends React.Component {

  constructor(props) {
    super(props);
    const synth = new Tone.Synth().toMaster();
    this.state = {
      synth: synth,
    }
    this.playSound = this.playSound.bind(this);
    this.setEventKey = this.setEventKey.bind(this);

  }


  playSound(note, speed) {
    this.state.synth.envelope.attack = this.props.envelope.attack;
    this.state.synth.envelope.decay = this.props.envelope.decay;
    this.state.synth.envelope.sustain = this.props.envelope.sustain;
    this.state.synth.envelope.release = this.props.envelope.release;
    this.state.synth.oscillator.type = this.props.oscillator.type;
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

        <Keyboard playSound={this.playSound} state={this.state} keyClassNames={this.props.keyClassNames} imgSrc={this.props.imgSrc} defaultKeys={this.props.defaultKeys} imgClassNames={this.props.imgClassNames} updateKnob={this.props.updateKnob}/>
      </div>


    );
  }
}
export default Board;
