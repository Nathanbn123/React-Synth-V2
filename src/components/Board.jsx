import React from 'react';
import Tone from 'Tone';
import Keyboard from './Keyboard';
import KeyboardEventHandler from 'react-keyboard-event-handler';



class Board extends React.Component {

  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.setEventKey = this.setEventKey.bind(this);
    this.pressed = this.pressed.bind(this);
  }


  playSound(note, speed, keyboard) {
    const verb = new Tone.PingPongDelay({
    delayTime: this.props.echo.delayTime ,
    maxDelayTime: this.props.echo.maxDelayTime
    }).toMaster();



    const eq = new Tone.EQ3({
      low: this.props.frequency.low,
      mid: this.props.frequency.mid,
      high: this.props.frequency.high,
      lowFrequency: this.props.frequency.lowFrequency,
      highFrequency: this.props.frequency.highFrequency,

    }).connect(verb);


    const synth = new Tone.Synth().connect(eq);
    console.log(synth)
    synth.envelope.attack = this.props.envelope.attack;
    synth.envelope.decay = this.props.envelope.decay;
    synth.envelope.sustain = this.props.envelope.sustain;
    synth.envelope.release = this.props.envelope.release;
    synth.oscillator.type = this.props.oscillator.type;
    // synth.portamento = this.props.portamento.currentPort;
    synth.volume.value = this.props.volume;
    // this.state.synth.frequency.high = 0;
    if(keyboard == 'trigger') {
      synth.triggerAttack(note, speed)
    } else if(keyboard == 'release') {
      synth.triggerRelease(note, speed)
    } else {
      synth.triggerAttackRelease(note, speed);

    }

  }

  setEventKey(key) {
    const length = this.props.hotKeys.length;
    for(let i = 0; i < length; i++) {
      if(this.props.hotKeys[i][0] == key) {
        this.playSound(this.props.hotKeys[i][1], this.props.defaultKeys.speed)
      }
    }
  }

  pressed(info) {
    console.log(info.type)

    let newArray = this.props.activeKeys;
    let isActive = false;
    for(let a = 0; a < this.props.activeKeys.length; a++) {
      if(this.props.activeKeys[a] == info.key) {
        isActive = true;
      }
    }
    if(info) {
      if(info.type == 'keydown' && isActive == false) {
        newArray.push(info.key);
      } else if(info.type == 'keyup') {
        let currentArray = [];
        for(let i = 0; i < this.props.activeKeys.length; i++) {
          let char = this.props.activeKeys[i];
          if(char == info.key) {
            newArray = newArray.slice(i);
          } else {
            currentArray.push(char);
          }
        }
        this.props.updateActive(currentArray);
      }
    }
    this.forceUpdate()
  }


  render() {
    console.log(this.props.echo.delayTime, this.props.echo.maxDelayTime)
    console.log(this.props.activeKeys);
    document.addEventListener('keydown', this.pressed);
    document.addEventListener('keyup', this.pressed);
    return (
      <div>
        <KeyboardEventHandler handleKeys={['all']} onKeyEvent={(key) => this.setEventKey(key)} />

        <Keyboard playSound={this.playSound} state={this.state} keyClassNames={this.props.keyClassNames} imgSrc={this.props.imgSrc} defaultKeys={this.props.defaultKeys} imgClassNames={this.props.imgClassNames} updateKnob={this.props.updateKnob}/>
      </div>


    );
  }
}
export default Board;
