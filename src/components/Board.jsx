import React from 'react';
import Tone from 'Tone';
import Keyboard from './Keyboard';
import KeyboardEventHandler from 'react-keyboard-event-handler';



class Board extends React.Component {

  constructor(props) {
    super(props);

    this.playSound = this.playSound.bind(this);
    this.setEventKey = this.setEventKey.bind(this);

  }


  playSound(note, speed) {
    const eq = new Tone.EQ3({
      low: this.props.frequency.low,
      mid: this.props.frequency.mid,
      high: this.props.frequency.high,
      lowFrequency: this.props.frequency.lowFrequency,
      highFrequency: this.props.frequency.highFrequency,

    }).toMaster();
    const synth = new Tone.Synth().connect(eq);
    synth.envelope.attack = this.props.envelope.attack;
    synth.envelope.decay = this.props.envelope.decay;
    synth.envelope.sustain = this.props.envelope.sustain;
    synth.envelope.release = this.props.envelope.release;
    synth.oscillator.type = this.props.oscillator.type;
    // this.state.synth.frequency.high = 0;
    console.log(synth);
    synth.triggerAttackRelease(note, speed);


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
