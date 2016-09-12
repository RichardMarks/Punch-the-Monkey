// a really quick ES6 html5 game template no-libs

// dimensions of your game screen
const SCREEN_W = 640;
const SCREEN_H = 320;

// frames per second for your game
const DESIRED_FPS = 30;

// this assets object will be populated by the preload function
// and you can use the loaded assets in the create function
const assets = {};

// use this object as a catch-all place for your game data variables
// gameData.player = new Player(); etc...
const gameData = {};

function preload() {
  return new Promise((resolve, reject) => {
    // load your assets into the assets object
    // like assets.assetname = loadedasset;
 	  // call resolve when your assets are loaded
    // call reject(errMessage) if there is an error loading
    
    window.console.warn('preloaded');
    resolve();
  });
}

function create() {
  // setup your scene
  // assets should be available through assets.assetname
  
  // this is needed to allow the promise chain to continue
  window.console.warn('created');
  return Promise.resolve();
}

function update(deltaTime) {
  // update your scene using deltaTime position changes
  // x += speed * deltaTime
  // y += speed * deltaTime
}

function render(screen) {
  // render your scene to the screen (CanvasRenderingContext2D)
}

// main function is called when the page loads
const main = function () {
  const canvas = document.createElement('canvas');
  document.body.insertBefore(canvas, document.body.firstChild);
  canvas.width = SCREEN_W;
  canvas.height = SCREEN_H;
  const ctx = canvas.getContext('2d');
  Object.assign(document.body.style, {
    backgroundColor: '#303030',
    color: 'white',
    fontFamily: 'monospace',
    margin: '0px',
    padding: '0px',
  });
  Object.assign(canvas.style, {
    backgroundColor: 'cornflowerblue',
  });
  const start = () => {
    const rate = 1000 / DESIRED_FPS;
    const dt = rate * 0.001;
  	setInterval(() => { update(dt); render(ctx); }, rate);
    return Promise.resolve();
  };
  preload().then(create).then(start).catch(err => window.console.error(err));
};
main();