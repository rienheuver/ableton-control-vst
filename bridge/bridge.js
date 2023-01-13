const OSC = require('osc-js');

const config = { udpServer: {port: 11001}, udpClient: { port: 11000 } }
const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })

osc.open() // start a WebSocket server on port 8080
console.log('Bridge opened');