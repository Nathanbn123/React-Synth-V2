import React from 'react';
import PropTypes from 'prop-types';
import keyOne from '../synth art/key1.svg';
import keyOneDown from '../synth art/key1push.svg';
import keyTwo from '../synth art/key2.svg';
import keyTwoDown from '../synth art/key2push.svg';
import keyThree from '../synth art/key3.svg';
import keyThreeDown from '../synth art/key3push.svg';
import keyFour from '../synth art/key4.svg';
import keyFourDown from '../synth art/key4push.svg';
import keyFive from '../synth art/key5.svg';
import keyFiveDown from '../synth art/key5push.svg';
import keySix from '../synth art/key6.svg';
import keySixDown from '../synth art/key6push.svg';
import keySeven from '../synth art/key7.svg';
import keySevenDown from '../synth art/key7push.svg';
import Rectangle from '../synth art/Rectangle.svg';
import RectangleDown from '../synth art/Rectanglepush.svg';
import finalKey from '../synth art/finalkey.svg';
import finalKeyDown from '../synth art/finalkeypush.svg';
import boardControl from '../synth art/boardcontrol.svg';
import sideKey from '../synth art/sidekeycontrol.svg';



class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render(){
    return (
      <div className="parent">
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
              <div className="one">
                <img className="k1" src={keyOne}/>
                <img className="k1push" src={keyOneDown}/>
              </div>
              <div className="rectangleOne">
                <img className="r" src={Rectangle}/>
                <img className="rpush" src={RectangleDown}/>
              </div>
              <div className="two">
                <img className="k2" src={keyTwo}/>
                <img className="k2push" src={keyTwoDown}/>
              </div>
              <div className="rectangleTwo">
                <img className="r2" src={Rectangle}/>
                <img className="r2push" src={RectangleDown}/>
              </div>
              <div className="three">
                <img className="k3" src={keyThree}/>
                <img className="k3push" src={keyThreeDown}/>
              </div>
              <div className="four">
                <img className="k4" src={keyFour}/>
                <img className="k4push" src={keyFourDown}/>
              </div>
              <div className="rectangleThree">
                <img className="r3" src={Rectangle}/>
                <img className="r3push" src={RectangleDown}/>
              </div>
              <div className="five">
                <img className="k5" src={keyFive}/>
                <img className="k5push" src={keyFiveDown}/>
              </div>
              <div className="rectangleFour">
                <img className="r4" src={Rectangle}/>
                <img className="r4push" src={RectangleDown}/>
              </div>
              <div className="six">
                <img className="k6" src={keySix}/>
                <img className="k6push" src={keySixDown}/>
              </div>
              <div className="rectangleFive">
                <img className="r5" src={Rectangle}/>
                <img className="r5push" src={RectangleDown}/>
              </div>
              <div className="seven">
                <img className="k7" src={keySeven}/>
                <img className="k7push" src={keySevenDown}/>
              </div>
            </div>



            <div className="grid-container">
              <div className="one">
                <img src={keyOne}/>
              </div>
              <div className="rectangleOne">
                <img src={Rectangle}/>
              </div>
              <div className="two">
                <img src={keyTwo}/>
              </div>
              <div className="rectangleTwo">
                <img src={Rectangle}/>
              </div>
              <div className="three">
                <img src={keyThree}/>
              </div>
              <div className="four">
                <img src={keyFour}/>
              </div>
              <div className="rectangleThree">
                <img src={Rectangle}/>
              </div>
              <div className="five">
                <img src={keyFive}/>
              </div>
              <div className="rectangleFour">
                <img src={Rectangle}/>
              </div>
              <div className="six">
                <img src={keySix}/>
              </div>
              <div className="rectangleFive">
                <img src={Rectangle}/>
              </div>
              <div className="seven">
                <img src={keySeven}/>
              </div>
            </div>


            <div className="grid-container">
              <div className="one">

                <img src={keyOne}/>
              </div>
              <div className="rectangleOne">
                <img src={Rectangle}/>
              </div>
              <div className="two">
                <img src={keyTwo}/>
              </div>
              <div className="rectangleTwo">
                <img src={Rectangle}/>
              </div>
              <div className="three">
                <img src={keyThree}/>
              </div>
              <div className="four">
                <img src={keyFour}/>
              </div>
              <div className="rectangleThree">
                <img src={Rectangle}/>
              </div>
              <div className="five">
                <img src={keyFive}/>
              </div>
              <div className="rectangleFour">
                <img src={Rectangle}/>
              </div>
              <div className="six">
                <img src={keySix}/>
              </div>
              <div className="rectangleFive">
                <img src={Rectangle}/>
              </div>
              <div className="seven">
                <img src={keySeven}/>
              </div>
              <div>
                <img src={finalKey}/>
              </div>
            </div>

          </div>


      </div>

      );

  }

}

Keyboard.propTypes = {
  defaultKeys: PropTypes.object,
};


export default Keyboard;
