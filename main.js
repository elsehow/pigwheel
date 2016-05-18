const ipc = require('./lib/spawn-window')(`file://${__dirname}/index.html`)

// set up your state here!
// this will be 'defonced', 
// by virtue of main process not getting reloaded 
// even when renderer process gets reloaded.
let state = [] // initial state
// renderer will emit events on the ipc
ipc.on('add-random-number', (event, ...args) => {
  // use this event to update the state
  state.push(Math.random())
  // and emit a 'state' event with the updated state
  // (see also: redux/etc)
  event.sender.send('state', state)
})

ipc.on('get-state', (event, arg) => {
  event.sender.send('state', state)
})

require('electron-reload')(__dirname); // DEBUG
