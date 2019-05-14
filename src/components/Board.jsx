import React from 'react';
import Tone from 'Tone';
import Keyboard from './Keyboard';
import { HotKeys } from 'react-hotkeys';


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

  onKeyUp(keyName, e, handle) {
     console.log("test:onKeyUp", e, handle)
     this.setState({
       output: `onKeyUp ${keyName}`,
     });
   }
   onKeyDown(keyName, e, handle) {
     console.log("test:onKeyDown", keyName, e, handle)
     this.setState({
       output: `onKeyDown ${keyName}`,
     });
   }

  render() {
    return (
      <div>
        <HotKeys
          keyName="q, w"
       onKeyDown={this.onKeyDown.bind(this)}
       onKeyUp={this.onKeyUp.bind(this)}
          >
          <Keyboard playSound={this.playSound} state={this.state} keyClassNames={this.props.keyClassNames} imgSrc={this.props.imgSrc} defaultKeys={this.props.defaultKeys}/>
        </HotKeys>
    </div>

    );
  }
}
export default Board;
