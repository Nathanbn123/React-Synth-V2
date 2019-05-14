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
import finalKeyPush from '../synth art/finalkeypush.svg';
import boardControl from '../synth art/boardcontrolnew.svg';
import sideKey from '../synth art/sidekeycontrol.svg';


class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }








  render(){

    return (
      <div>
        <style jsx>{`
            .parent {
              display: flex;
              border: 5px solid red;
              justify-content: center;
              margin-top: 250px;
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
              grid-template-rows: ;
              grid-template-areas: ". . . . . . . . . . . .";
              position: relative;
              width: 280px;
            }
            .one {
              margin: none;

            }
            .k1push {
              display: none;
            }
            .one:hover .k1push {
              display: block;
            }
            .one:hover .k1 {
              display: none;
            }
            .rectangleOne {
              position: absolute;
              left: 25px;

            }
            .rpush {
              display: none;
            }
            .rectangleOne:hover .rpush {
              display: block;
            }
            .rectangleOne:hover .r {
              display: none;
            }
            .two {
              margin: none;
            }
            .k2push {
              display: none;
            }
            .two:hover .k2push {
              display: block;
            }
            .two:hover .k2 {
              display: none;
            }
            .rectangleTwo{
              position: absolute;
              left: 72px;

            }
            .r2push {
              display: none;
            }
            .rectangleTwo:hover .r2push {
              display: block;
            }
            .rectangleTwo:hover .r2 {
              display: none;
            }
            .three {
              margin: none;
            }
            .k3push {
              display: none;
            }
            .three:hover .k3push {
              display: block;
            }
            .three:hover .k3 {
              display: none;
            }
            .four {
              margin: none;
            }
            .k4push {
              display: none;
            }
            .four:hover .k4push {
              display: block;
            }
            .four:hover .k4 {
              display: none;
            }
            .rectangleThree{
              position: absolute;
              left: 141px;
            }
            .r3push {
              display: none;
            }
            .rectangleThree:hover .r3push {
              display: block;
            }
            .rectangleThree:hover .r3 {
              display: none;
            }
            .five {
              margin: none;
            }
            .k5push {
              display: none;
            }
            .five:hover .k5push {
              display: block;
            }
            .five:hover .k5 {
              display: none;
            }
            .rectangleFour{
              position: absolute;
              left: 188px;
            }
            .r4push {
              display: none;
            }
            .rectangleFour:hover .r4push {
              display: block;
            }
            .rectangleFour:hover .r4 {
              display: none;
            }
            .six {
              margin: none;
            }
            .k6push {
              display: none;
            }
            .six:hover .k6push {
              display: block;
            }
            .six:hover .k6 {
              display: none;
            }
            .rectangleFive{
              position: absolute;
              left: 233px;
            }
            .r5push {
              display: none;
            }
            .rectangleFive:hover .r5push {
              display: block;
            }
            .rectangleFive:hover .r5 {
              display: none;
            }
            .seven {
              margin: none;
            }
            .k7push {
              display: none;
            }
            .seven:hover .k7push {
              display: block;
            }
            .seven:hover .k7 {
              display: none;
            }





            .oneB {
              margin: none;

            }
            .k1push {
              display: none;
            }
            .oneB:hover .k1push {
              display: block;
            }
            .oneB:hover .k1 {
              display: none;
            }
            .rectangleOneB {
              position: absolute;
              left: 25px;

            }
            .rpush {
              display: none;
            }
            .rectangleOneB:hover .rpush {
              display: block;
            }
            .rectangleOneB:hover .r {
              display: none;
            }
            .twoB {
              margin: none;
            }
            .k2push {
              display: none;
            }
            .twoB:hover .k2push {
              display: block;
            }
            .twoB:hover .k2 {
              display: none;
            }
            .rectangleTwoB{
              position: absolute;
              left: 72px;

            }
            .r2push {
              display: none;
            }
            .rectangleTwoB:hover .r2push {
              display: block;
            }
            .rectangleTwoB:hover .r2 {
              display: none;
            }
            .threeB {
              margin: none;
            }
            .k3push {
              display: none;
            }
            .threeB:hover .k3push {
              display: block;
            }
            .threeB:hover .k3 {
              display: none;
            }
            .fourB {
              margin: none;
            }
            .k4push {
              display: none;
            }
            .fourB:hover .k4push {
              display: block;
            }
            .fourB:hover .k4 {
              display: none;
            }
            .rectangleThreeB{
              position: absolute;
              left: 141px;
            }
            .r3push {
              display: none;
            }
            .rectangleThreeB:hover .r3push {
              display: block;
            }
            .rectangleThreeB:hover .r3 {
              display: none;
            }
            .fiveB {
              margin: none;
            }
            .k5push {
              display: none;
            }
            .fiveB:hover .k5push {
              display: block;
            }
            .fiveB:hover .k5 {
              display: none;
            }
            .rectangleFourB{
              position: absolute;
              left: 188px;
            }
            .r4push {
              display: none;
            }
            .rectangleFourB:hover .r4push {
              display: block;
            }
            .rectangleFourB:hover .r4 {
              display: none;
            }
            .sixB {
              margin: none;
            }
            .k6push {
              display: none;
            }
            .sixB:hover .k6push {
              display: block;
            }
            .sixB:hover .k6 {
              display: none;
            }
            .rectangleFiveB{
              position: absolute;
              left: 233px;
            }
            .r5push {
              display: none;
            }
            .rectangleFiveB:hover .r5push {
              display: block;
            }
            .rectangleFiveB:hover .r5 {
              display: none;
            }
            .sevenB {
              margin: none;
            }
            .k7push {
              display: none;
            }
            .sevenB:hover .k7push {
              display: block;
            }
            .sevenB:hover .k7 {
              display: none;
            }


            .oneC {
              margin: none;

            }
            .k1push {
              display: none;
            }
            .oneC:hover .k1push {
              display: block;
            }
            .oneC:hover .k1 {
              display: none;
            }
            .rectangleOneC {
              position: absolute;
              left: 25px;

            }
            .rpush {
              display: none;
            }
            .rectangleOneC:hover .rpush {
              display: block;
            }
            .rectangleOneC:hover .r {
              display: none;
            }
            .twoC {
              margin: none;
            }
            .k2push {
              display: none;
            }
            .twoC:hover .k2push {
              display: block;
            }
            .twoC:hover .k2 {
              display: none;
            }
            .rectangleTwoC{
              position: absolute;
              left: 72px;

            }
            .r2push {
              display: none;
            }
            .rectangleTwoC:hover .r2push {
              display: block;
            }
            .rectangleTwoC:hover .r2 {
              display: none;
            }
            .threeC {
              margin: none;
            }
            .k3push {
              display: none;
            }
            .threeC:hover .k3push {
              display: block;
            }
            .threeC:hover .k3 {
              display: none;
            }
            .fourC {
              margin: none;
            }
            .k4push {
              display: none;
            }
            .fourC:hover .k4push {
              display: block;
            }
            .fourC:hover .k4 {
              display: none;
            }
            .rectangleThreeC{
              position: absolute;
              left: 141px;
            }
            .r3push {
              display: none;
            }
            .rectangleThreeC:hover .r3push {
              display: block;
            }
            .rectangleThreeC:hover .r3 {
              display: none;
            }
            .fiveC {
              margin: none;
            }
            .k5push {
              display: none;
            }
            .fiveC:hover .k5push {
              display: block;
            }
            .fiveC:hover .k5 {
              display: none;
            }
            .rectangleFourC{
              position: absolute;
              left: 188px;
            }
            .r4push {
              display: none;
            }
            .rectangleFourC:hover .r4push {
              display: block;
            }
            .rectangleFourC:hover .r4 {
              display: none;
            }
            .sixC {
              margin: none;
            }
            .k6push {
              display: none;
            }
            .sixC:hover .k6push {
              display: block;
            }
            .sixC:hover .k6 {
              display: none;
            }
            .rectangleFiveC{
              position: absolute;
              left: 233px;
            }
            .r5push {
              display: none;
            }
            .rectangleFiveC:hover .r5push {
              display: block;
            }
            .rectangleFiveC:hover .r5 {
              display: none;
            }
            .sevenC {
              margin: none;
            }
            .k7push {
              display: none;
            }
            .sevenC:hover .k7push {
              display: block;
            }
            .sevenC:hover .k7 {
              display: none;
            }
            .finalKey {
              margin: none;
            }
            .finalpush {
              display: none;
            }
            .finalKey:hover .finalpush {
              display: block;
            }
            .finalKey:hover .final {
              display: none;
            }
            .sideKey {
              margin-left: 48px;
            }

            `}
          </style>
        <div className="background-board">
          <img src={boardControl}/>
        </div>

        <div className="row">
            <div>
              <img className="sideKey" src={sideKey}/>
            </div>
            <div className="grid-container">

              {this.props.imgSrc.map((instance, i) => (
                <div key={i} className={this.props.keyClassNames[i]}>
                  <img className={this.props.imgClassNames[i][0]} src={require(`../synth art/${instance}.svg`)} alt="" />
                  <img className={this.props.imgClassNames[i][1]} src={require(`../synth art/${instance}push.svg`)} alt="" onClick={() =>{this.props.playSound(this.props.defaultKeys.notes1[i], this.props.defaultKeys.speed)}}/>

                </div>
              ))}

            </div>
            <div className="grid-container">
              {this.props.imgSrc.map((instance, i) => (
                <div key={i} onClick={() => {this.props.playSound(this.props.defaultKeys.notes2[i], this.props.defaultKeys.speed)}} className={this.props.keyClassNames[i]}>
                  <img className={this.props.imgClassNames[i][0]} src={require(`../synth art/${instance}.svg`)} alt="" />
                  <img className={this.props.imgClassNames[i][1]} src={require(`../synth art/${instance}push.svg`)} alt="" onClick={() =>{this.props.playSound(this.props.defaultKeys.notes2[i], this.props.defaultKeys.speed)}}/>
                </div>
              ))}
            </div>
            <div className="grid-container">
              {this.props.imgSrc.map((instance, i) => (
                <div key={i} onClick={() =>{this.props.playSound(this.props.defaultKeys.notes3[i], this.props.defaultKeys.speed)}} className={this.props.keyClassNames[i]}>
                  <img className={this.props.imgClassNames[i][0]} src={require(`../synth art/${instance}.svg`)} alt="" />
                  <img className={this.props.imgClassNames[i][1]} src={require(`../synth art/${instance}push.svg`)} alt="" onClick={() =>{this.props.playSound(this.props.defaultKeys.notes3[i], this.props.defaultKeys.speed)}}/>
                </div>
              ))}
            </div>
            <div  className='finalKey' >
              <img className="final" src={finalKey}/>
              <img className="finalpush" src={finalKeyPush} onClick={() => {this.props.playSound(this.props.defaultKeys.lastNote, this.props.defaultKeys.speed)}}/>
            </div>

          </div>
        </div>


      );

  }

}

export default Keyboard;
