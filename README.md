# pigwheel

A low-elegance starter pack for unfancy live-coding of front-end apps, heavily inspired by [figwheel]().

## Install

Make sure you have electron prebuilt with `npm install -g electron-prebuilt`, then,

```
git clone [this repo]
cd pigwheel
npm install
```

To run it, just `npm start`. Click around a bit.

Start editing `src/index.js`. Live reloading, just* like figwheel.

## In a word

Pigwheel relies on Electron, using [electron-reload](https://www.npmjs.com/package/electron-reload) for refreshing the renderer process, and Electron's IPC for "defoncing" app state between refreshes.


## Why?
Electron doesn't t need to bundle client-side javascript - just reads it straight from disk. A good bit faster, and no need for browser plugins or browserify/webpack plugins. Electron renderer provides a vanilla chromium environment for you.

Plus, you can communicate with a node backend using Electron's IPC. No need for setting hassling with sockets or HTTP - just pass values!

This example uses [yo-yo](https://github.com/maxogden/yo-yo) for unfancy (React-less) virtual-dom.

Note: Instead of defoncing things, Pighweel relies on Electron IPC to update the state in the Node backend, where it will be safe even when the renderer process is totally refreshed.

## License
BSD

*Figwheel is a beautiful piece of work, nothing at all like this hack. It includes increamental reloading, among other great features like syntax checking and warnings. I do wish it worked better for js in the front end! In the meantime, this will do...
