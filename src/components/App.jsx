import React from "react";
import Error404 from "./Error404";
import PropTypes from "prop-types";
import { Switch, Route, withRouter } from "react-router-dom";
import Keyboard from "./Keyboard";
import Board from "./Board";
import Knob from "./Knob/Knob";
import "./Knob/styling.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: {
        classNames: [
          "one",
          "rectangleOne",
          "two",
          "rectangleTwo",
          "three",
          "four",
          "rectangleThree",
          "five",
          "rectangleFour",
          "six",
          "rectangleFive",
          "seven",
          "one",
          "rectangleOne",
          "two",
          "rectangleTwo",
          "three",
          "four",
          "rectangleThree",
          "five",
          "rectangleFour",
          "six",
          "rectangleFive",
          "seven"
        ],
        imgSrc: [
          "key1",
          "Rectangle",
          "key2",
          "Rectangle",
          "key3",
          "key4",
          "Rectangle",
          "key5",
          "Rectangle",
          "key6",
          "Rectangle",
          "key7"
        ],
        imgClassNames: [
          ["k1", "k1push"],
          ["r", "rpush"],
          ["k2", "k2push"],
          ["r2", "r2push"],
          ["k3", "k3push"],
          ["k4", "k4push"],
          ["r3", "r3push"],
          ["k5", "k5push"],
          ["r4", "r4push"],
          ["k6", "k6push"],
          ["r5", "r5push"],
          ["k7", "k7push"]
        ]
      },
      defaultKeys: {
        notes1: [
          "B3",
          "C3",
          "C#3",
          "D3",
          "D#3",
          "E3",
          "F3",
          "F#3",
          "G3",
          "G#3",
          "A4",
          "A#4"
        ],
        notes2: [
          "B4",
          "C4",
          "C#4",
          "D4",
          "D#4",
          "E4",
          "F4",
          "F#4",
          "G4",
          "G#4",
          "A5",
          "A#5"
        ],
        notes3: [
          "B5",
          "C5",
          "C#5",
          "D5",
          "D#5",
          "E5",
          "F5",
          "F#5",
          "G5",
          "G#5",
          "A6",
          "A#6"
        ],
        lastNote: ["G9"],
        speed: "8n"
      },
      hotKeys: {
        currentHotKeys: [],
        activeKeys: []
      },
      oscillator: {
        type: "triangle"
      },
      envelope: {
        attack: 0.005,
        decay: 4.0,
        sustain: 0.3,
        release: 1
      },
      frequency: {
        high: 0,
        mid: 0,
        low: 0,
        highFrequency: 4000,
        lowFrequency: 450
      },
      ping: {
        delayTime: 0.01,
        maxDelayTime: 0.01
      },
      volume: {
        currentVolume: 0
      },
      portamento: {
        currentPort: 0
      }
    };
    const exKeys = {
      keyAssignments: [
        "a",
        "`",
        "z",
        "1",
        "s",
        "x",
        "2",
        "d",
        "3",
        "c",
        "4",
        "f",
        "v",
        "5",
        "g",
        "6",
        "b",
        "h",
        "7",
        "n",
        "8",
        "j",
        "9",
        "m",
        "0",
        "k",
        ",",
        "-",
        "l",
        "=",
        ".",
        "backspace",
        ".",
        "\\",
        ";",
        "/",
        "'"
      ]
    };
    this.handleKnobChange = this.handleKnobChange.bind(this);
    this.createNewHotKeys = this.createNewHotKeys.bind(this);
    this.updateKeys = this.updateKeys.bind(this);
    this.createNewHotKeys(exKeys.keyAssignments);
  }

  createNewHotKeys(array) {
    let notesArray = [];
    let newArray = [];
    notesArray.push(this.state.defaultKeys.notes1);
    notesArray.push(this.state.defaultKeys.notes2);
    notesArray.push(this.state.defaultKeys.notes3);
    notesArray.push(this.state.defaultKeys.lastNote);

    let notesArrayLength = notesArray.length;
    let a = 0;
    for (let i = 0; i < notesArrayLength; i++) {
      for (let e = 0; e < notesArray[i].length; e++) {
        const key = array[a];
        const note = notesArray[i][e];
        newArray.push([key, note]);
        a++;
      }
    }
    this.state.hotKeys.currentHotKeys = newArray;
    this.forceUpdate();
  }

  handleKnobChange(name, degree) {
    const newDegree = degree - 50;
    if (name == "attack") {
      let newAttack = (newDegree * newDegree) / 2.704 / 5000 + 0.005;
      newAttack = parseFloat(newAttack.toFixed(3));
      this.state.envelope.attack = newAttack;
    }
    if (name == "decay") {
      let newDecay = (newDegree * newDegree) / 2.704 / 5000 + 0.005;
      newDecay = parseFloat(newDecay.toFixed(3));
      this.state.envelope.decay = newDecay;
    }
    if (name == "sustain") {
      let newSustain = (newDegree * newDegree) / 2.704 / 5000 + 0.005;
      newSustain = parseFloat(newSustain.toFixed(3));
      this.state.envelope.sustain = newSustain;
    }
    if (name == "release") {
      let newRelease = (newDegree * newDegree) / 2.704 / 5000 + 0.005;
      newRelease = parseFloat(newRelease.toFixed(3));
      this.state.envelope.release = newRelease;
    }
    if (name == "oscillator") {
      if (newDegree > 0 && newDegree <= 65) {
        this.state.oscillator.type = "triangle";
      } else if (newDegree > 65 && newDegree <= 130) {
        this.state.oscillator.type = "sine";
      } else if (newDegree > 130 && newDegree <= 195) {
        this.state.oscillator.type = "sawtooth";
      } else if (newDegree > 195 && newDegree <= 260) {
        this.state.oscillator.type = "pulse";
      }
    }
    if (name == "low") {
      let newLow = newDegree / 3.714 - 35;
      newLow = parseFloat(newLow.toFixed(1));
      this.state.frequency.low = newLow;
    }
    if (name == "mid") {
      let newMid = newDegree / 3.714 - 35;
      newMid = parseFloat(newMid.toFixed(1));
      this.state.frequency.mid = newMid;
    }
    if (name == "high") {
      let newHigh = newDegree / 3.714 - 35;
      newHigh = parseFloat(newHigh.toFixed(1));
      this.state.frequency.high = newHigh;
    }
    if (name == "highFrequency") {
      let newHighFrequency = (newDegree * newDegree) / 4.8;
      newHighFrequency = parseFloat(newHighFrequency.toFixed(1));
      this.state.frequency.highFrequency = newHighFrequency;
    }
    if (name == "lowFrequency") {
      let newLowFrequency = (newDegree * newDegree) / 4.8;
      newLowFrequency = parseFloat(newLowFrequency.toFixed(1));
      this.state.frequency.lowFrequency = newLowFrequency;
    }
    if (name == "volume") {
      let newVolume = (newDegree * newDegree) / 920 - 40;
      newVolume = parseFloat(newVolume.toFixed(1));
      console.log(newVolume);
      this.state.volume.currentVolume = newVolume;
    }
    if (name == "portamento") {
      let newPort = (newDegree * newDegree) / 1620;
      newPort = parseFloat(newPort.toFixed(1));
      console.log(newPort);
      this.state.portamento.currentPort = newPort;
    }
    if (name == "echo") {
      let newEcho = newDegree / 40 + 0.01;
      newEcho = parseFloat(newEcho.toFixed(2));
      this.state.ping.delayTime = newEcho;
    }
    if (name == "echo2") {
      let newEcho2 = newDegree / 25 + 0.01;
      newEcho2 = parseFloat(newEcho2.toFixed(2));
      console.log(newEcho2);
      this.state.ping.maxDelayTime = newEcho2;
    }
    this.forceUpdate();
  }

  updateKeys(array) {
    this.state.hotKeys.activeKeys = array;
    this.forceUpdate();
  }

  handleChange(newValue) {
    this.setState({
      value: newValue
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/"
            render={() => (
              <Board
                defaultKeys={this.state.defaultKeys}
                keyClassNames={this.state.board.classNames}
                imgSrc={this.state.board.imgSrc}
                imgClassNames={this.state.board.imgClassNames}
                envelope={this.state.envelope}
                oscillator={this.state.oscillator}
                updateKnob={this.handleKnobChange}
                frequency={this.state.frequency}
                hotKeys={this.state.hotKeys.currentHotKeys}
                activeKeys={this.state.hotKeys.activeKeys}
                updateActive={this.updateKeys}
                portamento={this.state.portamento}
                volume={this.state.volume.currentVolume}
                echo={this.state.ping}
              />
            )}
          />
          <Route path="/Error" component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
