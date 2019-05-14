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
import boardControl from '../synth art/boardcontrol.svg';
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
            .row {
              position: relative;
              display: flex;
              flex-direction: row;
              width: 880px;
              margin-left: 23px;
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

          </div>
        </div>


      );

  }

}




export default Keyboard;
