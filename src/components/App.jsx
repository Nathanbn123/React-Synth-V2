import React from 'react';
import Error404 from './Error404';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Keyboard from './Keyboard';
import Board from './Board';


export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      defaultKeys: {
        keys: [''],
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

  render() {
    return (
      <div>
        <Switch>
          <Route path='/Error' component={Error404} />
          <Route path='/' render={() => <Board defaultKeys={this.state.defaultKeys} />} />
        </Switch>
        <Keyboard/>

      </div>

    );
  }



}
App.PropTypes = {

};

export default App;
