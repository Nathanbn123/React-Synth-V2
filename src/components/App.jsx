import React from 'react';
import Error404 from './Error404';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Keyboard from './Keyboard';
import Board from './Board';
import Knob from './Knob/Knob';
import './Knob/styling.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {
        classNames: ['one', 'rectangleOne', 'two', 'rectangleTwo', 'three', 'four', 'rectangleThree', 'five', 'rectangleFour', 'six', 'rectangleFive', 'seven','one', 'rectangleOne', 'two', 'rectangleTwo', 'three', 'four', 'rectangleThree', 'five', 'rectangleFour', 'six', 'rectangleFive', 'seven'],
        imgSrc: ['key1', 'Rectangle', 'key2', 'Rectangle', 'key3', 'key4', 'Rectangle', 'key5', 'Rectangle', 'key6', 'Rectangle', 'key7'],
        imgClassNames: [['k1', 'k1push'], ['r', 'rpush'], ['k2', 'k2push'], ['r2', 'r2push'], ['k3', 'k3push'], ['k4', 'k4push'], ['r3', 'r3push'], ['k5', 'k5push'], ['r4', 'r4push'], ['k6', 'k6push'], ['r5', 'r5push'], ['k7', 'k7push']],
      },
      defaultKeys: {
        notes1: ['B3', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A4', 'A#4'],
        notes2: ['B4', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A5', 'A#5' ],
        notes3: ['B5', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A6', 'A#6'],
        lastNote: 'G9',
        speed: '8n'
      },
      oscillator: {
        type: 'triangle',
      },
      envelope: {
        attack: 0.005,
        decay: 4.0,
        sustain: 0.3,
        release: 1,
        }
    };
    this.handleKnobChange = this.handleKnobChange.bind(this);
  }

  handleKnobChange(name, degree) {
    const newDegree = degree - 50;
    if(name == "attack") {
      let newAttack = (((newDegree * newDegree) / 2.704) / 5000 + 0.005);
      newAttack = parseFloat(newAttack.toFixed(3));
      this.state.envelope.attack = newAttack;
    }
    if(name == "decay") {
      let newDecay = (((newDegree * newDegree) / 2.704) / 5000 + 0.005);
      newDecay = parseFloat(newDecay.toFixed(3));
      this.state.envelope.decay = newDecay;
    }
    if(name == "sustain") {
      let newSustain = (((newDegree * newDegree) / 2.704) / 5000 + 0.005);
      newSustain = parseFloat(newSustain.toFixed(3));
      this.state.envelope.sustain = newSustain;
    }
    if(name == "release") {
      let newRelease = (((newDegree * newDegree) / 2.704) / 5000 + 0.005);
      newRelease = parseFloat(newRelease.toFixed(3));
      this.state.envelope.release = newRelease;
    }
    if(name == "oscillator") {
      if(newDegree > 0 && newDegree <= 65) {
        this.state.oscillator.type = 'triangle';
      } else if(newDegree > 65 && newDegree <= 130) {
        this.state.oscillator.type = 'sine';
      } else if(newDegree > 130 && newDegree <= 195) {
        this.state.oscillator.type = 'sawtooth';
      } else if(newDegree > 195 && newDegree <= 260) {
        this.state.oscillator.type = 'pulse';
      }

    }
    this.forceUpdate()
  }

  handleChange(newValue) {
    console.log(newValue)
    this.setState({
      value: newValue
    });
  };

  //
  //   <Knob
  //     numTicks={125}
  //     degrees={180}
  //     min={1}
  //     max={100}
  //     value={0}
  //     onChange={() =>{this.handleChange}}
  //     />
  // </div>
  render() {
    return (
      <div>
        <div className="App">
          </div>
        <Switch>
          <Route path='/' render={() => <Board defaultKeys={this.state.defaultKeys} keyClassNames={this.state.board.classNames} imgSrc={this.state.board.imgSrc} imgClassNames={this.state.board.imgClassNames} envelope={this.state.envelope} oscillator={this.state.oscillator}/>} />
          <Route path='/Error' component={Error404} />
        </Switch>

      </div>
    );
  }
}


export default App;




// <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}} >
//
//   <Knob
//     size={100}
//     numTicks={25}
//     degrees={260}
//     min={1}
//     max={100}
//     value={30}
//     color={true}
//     onChange={() =>{this.handleChange}}
//     updateKnob={this.handleKnobChange}
//     knobName={"attack"}
//     />
//   <Knob
//     size={100}
//     numTicks={25}
//     degrees={260}
//     min={1}
//     max={100}
//     value={30}
//     color={true}
//     onChange={() =>{this.handleChange}}
//     updateKnob={this.handleKnobChange}
//     knobName={"decay"}
//     />
//   <Knob
//     size={100}
//     numTicks={25}
//     degrees={260}
//     min={1}
//     max={100}
//     value={30}
//     color={true}
//     onChange={() =>{this.handleChange}}
//     updateKnob={this.handleKnobChange}
//     knobName={"sustain"}
//     />
//   <Knob
//     size={100}
//     numTicks={25}
//     degrees={260}
//     min={1}
//     max={100}
//     value={30}
//     color={true}
//     onChange={() =>{this.handleChange}}
//     updateKnob={this.handleKnobChange}
//     knobName={"release"}
//     />
//   <Knob
//     size={100}
//     numTicks={25}
//     degrees={260}
//     min={1}
//     max={100}
//     value={30}
//     color={true}
//     onChange={() =>{this.handleChange}}
//     updateKnob={this.handleKnobChange}
//     knobName={"oscillator"}
//     />
// </div>
