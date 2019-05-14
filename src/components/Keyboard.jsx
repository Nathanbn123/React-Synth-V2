import React from 'react';
import PropTypes from 'prop-types';
import keyOne from '../synth art/key1.svg';
import keyTwo from '../synth art/key2.svg';
import keyThree from '../synth art/key3.svg';
import keyFour from '../synth art/key4.svg';
import keyFive from '../synth art/key5.svg';
import keySix from '../synth art/key6.svg';
import keySeven from '../synth art/key7.svg';
import Rectangle from '../synth art/Rectangle.svg';
import finalKey from '../synth art/finalkey.svg';
import boardControl from '../synth art/boardcontrolnew.svg';
import sideKey from '../synth art/sidekeycontrol.svg';
import {HotKeys} from 'react-hotkeys';
import Knob from './Knob/Knob';


class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }








  render(){

    return (
      <div>
        <div className="parent">
          <style jsx>{`
              .parent {
                display: flex;
                justify-content: center;
                margin-top: 250px;
              }
              .knob1small {
                position: relative;
                bottom: 265px;
                right: 915px;
              }
              .knob2small {
                position: relative;
                bottom: 263px;
                right: 880px;
                margin: none;
              }
              .row {
                position: relative;
                display: flex;
                flex-direction: row;
                width: 880px;
                right: 25px;
                padding-top: 420px;
              }
              .background-board {
                position: absolute;
              }
              .grid-container {
                display: grid;
                position: relative;
                grid-template-columns: 1fr 0fr 1fr 0fr 1fr 1fr 0fr 1fr 0fr 1fr 0fr 1fr;
                grid-template-areas: ". . . . . . . . . . . .";
                position: relative;
                width: 280px;
              }
              .one {
                margin: none;
              }
              .rectangleOne {
                position: absolute;
                left: 25px;
                width: inherit;
              }
              .two {
                margin: none;
              }
              .rectangleTwo{
                position: absolute;
                left: 72px;
              }
              .three {
                margin: none;
              }
              .four {
                margin: none;
              }
              .rectangleThree{
                position: absolute;
                left: 141px;
              }
              .five {
                margin: none;
              }
              .rectangleFour{
                position: absolute;
                left: 188px;
              }
              .six {
                margin: none;
              }
              .rectangleFive{
                position: absolute;
                left: 233px;
              }
              .seven {
                margin: none;
              }
              .finalKey {
                margin: none;
              }

              `}
            </style>
          <div className="background-board">
            <img src={boardControl}/>
          </div>


          <div className="row">
              <div>
                <img src={sideKey}/>
              </div>
              <div className="grid-container">

                {this.props.imgSrc.map((instance, i) => (
                  <div key={i} onClick={() =>{this.props.playSound(this.props.defaultKeys.notes1[i], this.props.defaultKeys.speed)}} className={this.props.keyClassNames[i]}>
                    <img src={require(`../synth art/${instance}.svg`)} alt="" key={i} />
                  </div>
                ))}

              </div>
              <div className="grid-container">
                {this.props.imgSrc.map((instance, i) => (
                  <div key={i} onClick={() => {this.props.playSound(this.props.defaultKeys.notes2[i], this.props.defaultKeys.speed)}} className={this.props.keyClassNames[i]}>
                    <img src={require(`../synth art/${instance}.svg`)} alt="" key={i} />
                  </div>
                ))}
              </div>
              <div className="grid-container">
                {this.props.imgSrc.map((instance, i) => (
                  <div key={i} onClick={() =>{this.props.playSound(this.props.defaultKeys.notes3[i], this.props.defaultKeys.speed)}} className={this.props.keyClassNames[i]}>
                    <img src={require(`../synth art/${instance}.svg`)} alt="" key={i} />
                  </div>
                ))}
              </div>
              <div onClick={() => {this.props.playSound(this.props.defaultKeys.lastNote, this.props.defaultKeys.speed)}} className='finalKey' >
                <img src={finalKey}/>
              </div>

              <div className="knob1small">
                <Knob
                  size={30}
                  numTicks={15}
                  degrees={260}
                  min={1}
                  max={100}
                  value={30}
                  color={true}
                  onChange={() =>{this.handleChange}}
                  />
              </div>
              <div className="knob2small">
                <Knob
                  size={30}
                  numTicks={15}
                  degrees={260}
                  min={1}
                  max={100}
                  value={30}
                  color={true}
                  onChange={() =>{this.handleChange}}
                  />
              </div>
              <div className="knob3small">
                <Knob
                  size={30}
                  numTicks={15}
                  degrees={260}
                  min={1}
                  max={100}
                  value={30}
                  color={true}
                  onChange={() =>{this.handleChange}}
                  />
              </div>



              <div>
                <Knob
                  numTicks={125}
                  degrees={180}
                  min={1}
                  max={100}
                  value={0}
                  onChange={() =>{this.handleChange}}
                  />
              </div>
            </div>

          </div>


      </div>

      );

  }

}




export default Keyboard;
