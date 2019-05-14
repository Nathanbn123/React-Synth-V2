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
      },
      defaultKeys: {
        notes1: ['B3', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A4', 'A#4'],
        notes2: ['B4', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A5', 'A#5' ],
        notes3: ['B5', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A6', 'A#6'],
        lastNote: 'G9',
        speed: '8n'
      },
      options: {
        oscillator: {
          type: 'triangle',
        },
        envelope: {
          attack: 0.005 ,
          decay: 0.1 ,
          sustain: 0.3 ,
          release: 1
          }
      }
    };
  }

  handleChange(newValue) {
    console.log(newValue)
    this.setState({
      value: newValue
    });
  };

  render() {
    return (
      <div>

        <Switch>
          <Route path='/' render={() => <Board defaultKeys={this.state.defaultKeys} keyClassNames={this.state.board.classNames} imgSrc={this.state.board.imgSrc}/>} />
          <Route path='/Error' component={Error404} />
        </Switch>

      
      </div>
    );
  }



}
App.PropTypes = {

};

export default App;
