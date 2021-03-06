"use strict";
import Game from "./lib/Game";
import PaintingScene from "./scenes/PaintingScene";



/**
 * MyGame class
 */

export default class MyGame extends Game {
  
  constructor(container:string|HTMLElement) {
    super(container, 960);
    this.frameRate = 12;
    this.addScene("space", new PaintingScene(this, "./assets/maps/space.json"));
    /*this.joypad.mode = "gc";
    this.joypad.enable();*/
    this.startScene("space");
  }

}
