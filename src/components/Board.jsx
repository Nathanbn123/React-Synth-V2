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
    console.log(this.props.hotKeys)
    const length = this.props.hotKeys.length;
    for(let i = 0; i < length; i++) {
      if(this.props.hotKeys[i][0] == key) {
        console.log('is working')
        console.log(this.props.hotKeys[i][1])
        console.log(this.props.defaultKeys.speed)
        this.playSound(this.props.hotKeys[i][1], this.props.defaultKeys.speed)
      }
    }
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
