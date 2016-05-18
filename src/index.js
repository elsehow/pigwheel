const yo = require('yo-yo')
const {ipcRenderer} = require('electron');
let el = null

function view (items) {

  // events bubble up
  function onclick () {
    ipcRenderer.send('add-random-number')
  }

  return yo`<div>
    Random Numbers
    <ul>
      ${items.map(function (item) {
        return yo`<li>${item}</li>`
      })}
    </ul>
    <button onclick=${onclick}>Add Random Number</button>
  </div>`
}

function update (_, s) {
  if (el) 
    return yo.update(el, view(s))
  el = view(s)
  return document.body.appendChild(el)
}

ipcRenderer.on('state', update)
ipcRenderer.send('get-state')
