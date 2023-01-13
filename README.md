# Ableton control plugin

## Installation

### 1. AbletonOSC
This library uses (AbletonOSC)[https://github.com/ideoforms/AbletonOSC] to control Ableton. Install that first according to the installation instructions of the repository. FYI: the control surface does not have to be connected to any MIDI-input or -output.

### 2. This library
1. Clone this repository
2. Install dependencies: `npm install`

### 3. Elementary.audio
This library uses Elementary Audio to build the VST3-plugin. Install the 'plugin renderer' from Elementary Audio by running `npx elem-copy-binaries`.

Note:
1. You need to have the right permissions to run this command.
2. You need to have ran `npm install` before doing this step.

## Usage
1. Start bridge: `npm run start-bridge`
2. Start web-app: `npm run start`
3. In Ableton, put the 'ElementaryDevKit' VST-plugin on a track
4. It should open the web-app. You will need to instruct your browser to trust this page, since it doesn't have a valid certificate.
5. Everything should work :-)