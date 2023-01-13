import { default as core } from "@elemaudio/plugin-renderer";
const OSC = require('osc-js');

const osc = new OSC();
osc.open();

// core.on("load", function () {
//   core.render();
// });

osc.on('/live/song/beat', m => {
  if ( m.args[0] == 5) {
    send("/live/track/set/arm", [0, true]);
  }
});

// core.initialize();

/*
 * Useful functions
 */

const send = (msg, args) => {
  const oscMessage = new OSC.Message(msg, ...args);
  osc.send(oscMessage);
}