var amplitude, 
    level,
    song, 
    speed,
    amplitudeLevel;

function preload(){
  song = loadSound('/assets/FortunateSon.mp3');
}

function setup() {
  createCanvas(100, 100);
  song.play();
  amplitude = new p5.Amplitude();

}

function draw() {
  level = amplitude.getLevel();
  var size = map(level, 0, 1, 1, 2);
  amplitudeLevel = createElement('span', size);
  console.log("size:" + size);
}
