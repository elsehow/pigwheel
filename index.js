const yo = require('yo-yo')

function app (emitF) {

  function view (state) {

    // events bubble up
    function onclick () {
      emitF('add-random-number')
    }

    return yo`<div>
      Random Numbers
      <ul>
      ${state.map(function (item) {
        return yo`<li>${item}</li>`
      })}
    </ul>
    <button onclick=${onclick}>Add Random Number</button>
    </div>`
  }

  return view
}

module.exports = app
