import React from 'react';
import Error404 from './Error404';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Keyboard from './Keyboard';


export class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route path='/Error' component={Error404} />
        <Route path='/' component={Keyboard} />
      </Switch>
    )
  }



}
App.PropTypes = {

}

export default App;
