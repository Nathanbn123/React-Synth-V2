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


class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render(){
    return (
      <div className="row">
        <style jsx>{`
            .row {
              display: flex;
              flex-direction: row;
              border: 5px solid pink;
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

            `}
          </style>
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

      );

  }

}

Keyboard.propTypes = {
  defaultKeys: PropTypes.object,
};


export default Keyboard;
