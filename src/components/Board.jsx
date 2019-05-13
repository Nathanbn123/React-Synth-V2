import React from 'react';
import Tone from 'Tone';

function Board() {
  var synth = new Tone.Synth().toMaster();

  synth.triggerAttackRelease("C4", "8n");

  return (
    <div></div>

)};
export default Board
