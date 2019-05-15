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
import sideKey from '../synth art/sidekeycontrol.svg';
import {HotKeys} from 'react-hotkeys';
import Knob from './Knob/Knob';
import './masterStyling.scss';
import finalKeyPush from '../synth art/finalkeypush.svg';
import boardControl from '../synth art/bestestboardcontrol.svg';
import table from '../synth art/table.svg';




class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }


  render(){

    return (
      <div className="outer">


        <div className="parent">



            <div className="table" style={{zIndex: -100}}>
              <img style={{zIndex: -100}} src={table}/>
            </div>

            <div className="background-board">
              <img className="boardControl" src={boardControl}/>
            </div>
            <div className="row">
              <div className="sideKey1">
                <img  src={sideKey}/>
              </div>

              <div className="grid-container">

                {this.props.imgSrc.map((instance, i) => (
                  <div key={i} style={{zIndex: 100}} className={this.props.keyClassNames[i]}>
                    <img className={this.props.imgClassNames[i][0]} src={require(`../synth art/${instance}.svg`)} alt="" />
                    <img className={this.props.imgClassNames[i][1]} src={require(`../synth art/${instance}push.svg`)} alt="" onClick={() =>{this.props.playSound(this.props.defaultKeys.notes1[i], this.props.defaultKeys.speed)}}/>
                  </div>
                ))}
              </div>
              <div className="grid-container">
                {this.props.imgSrc.map((instance, i) => (
                  <div key={i} className={this.props.keyClassNames[i]}>
                    <img className={this.props.imgClassNames[i][0]} src={require(`../synth art/${instance}.svg`)} alt="" />
                    <img className={this.props.imgClassNames[i][1]} src={require(`../synth art/${instance}push.svg`)} alt="" onClick={() =>{this.props.playSound(this.props.defaultKeys.notes2[i], this.props.defaultKeys.speed)}}/>
                  </div>
                ))}
              </div>
              <div className="grid-container">
                {this.props.imgSrc.map((instance, i) => (
                  <div key={i} className={this.props.keyClassNames[i]}>
                    <img className={this.props.imgClassNames[i][0]} src={require(`../synth art/${instance}.svg`)} alt="" />
                    <img className={this.props.imgClassNames[i][1]} src={require(`../synth art/${instance}push.svg`)} alt="" onClick={() =>{this.props.playSound(this.props.defaultKeys.notes3[i], this.props.defaultKeys.speed)}}/>
                  </div>
                ))}
              </div>

              <div  className='finalKey' >
                <img className="final" src={finalKey}/>
                <img className="finalpush" src={finalKeyPush} onClick={() => {this.props.playSound(this.props.defaultKeys.lastNote, this.props.defaultKeys.speed)}}/>

              </div>

              <div className="knob1small">
                <Knob
                  size={40}
                  numTicks={15}
                  degrees={260}
                  min={1}
                  max={100}
                  value={30}
                  color={true}
                  onChange={() =>{this.handleChange}}
                  updateKnob={this.props.updateKnob}
                  knobName={"oscillator"}
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
                  updateKnob={this.props.updateKnob}
                  knobName={"hold"}
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
                  updateKnob={this.props.updateKnob}
                  knobName={"attack"}
                  />
              </div>
              <div className="knob4small">
                <Knob
                  size={30}
                  numTicks={15}
                  degrees={260}
                  min={1}
                  max={100}
                  value={30}
                  color={true}
                  onChange={() =>{this.handleChange}}
                  updateKnob={this.props.updateKnob}
                  knobName={"decay"}
                  />
              </div>
              <div className="knob5small">
                <Knob
                  size={30}
                  numTicks={15}
                  degrees={260}
                  min={1}
                  max={100}
                  value={30}
                  color={true}
                  onChange={() =>{this.handleChange}}
                  updateKnob={this.props.updateKnob}
                  knobName={"sustain"}
                  />
              </div>
              <div className="knob6small">
                <Knob
                  size={30}
                  numTicks={15}
                  degrees={260}
                  min={1}
                  max={100}
                  value={30}
                  color={true}
                  onChange={() =>{this.handleChange}}
                  updateKnob={this.props.updateKnob}
                  knobName={"release"}
                  />
              </div>
              <div className="knobLow">
                <Knob
                  size={30}
                  numTicks={15}
                  degrees={260}
                  min={1}
                  max={100}
                  value={30}
                  color={true}
                  onChange={() =>{this.handleChange}}
                  updateKnob={this.props.updateKnob}
                  knobName={"low"}
                  />
              </div>
              <div className="knobHigh">
                <Knob
                  size={30}
                  numTicks={15}
                  degrees={260}
                  min={1}
                  max={100}
                  value={30}
                  color={true}
                  onChange={() =>{this.handleChange}}
                  updateKnob={this.props.updateKnob}
                  knobName={"high"}
                  />
              </div>
              <div className="knobhighFrequency">
                <Knob
                  size={40}
                  numTicks={15}
                  degrees={260}
                  min={1}
                  max={100}
                  value={30}
                  color={true}
                  onChange={() =>{this.handleChange}}
                  updateKnob={this.props.updateKnob}
                  knobName={"highFrequency"}
                  />
              </div>
              <div className="knoblowFrequency">
                <Knob
                  size={40}
                  numTicks={15}
                  degrees={260}
                  min={1}
                  max={100}
                  value={30}
                  color={true}
                  onChange={() =>{this.handleChange}}
                  updateKnob={this.props.updateKnob}
                  knobName={"lowFrequency"}
                  />
              </div>



          </div>




        </div>
      </div>


  );

  }

}

export default Keyboard;
