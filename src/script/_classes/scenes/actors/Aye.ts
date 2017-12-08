import Actor from "../../lib/scenes/actors/Actor";
import Scene from "../../lib/scenes/Scene";
import Vector2 from "../../lib/utils/Vector2";
import PaintingScene from "../PaintingScene";

let topFrontier: number = 0;

/**
 * Aye class
 */

export default class Aye extends Actor {
  public scene: PaintingScene;
  public target: Vector2 | null;
  public inkColor: string = "blue";
  public inkLeft: number = .25;
  public dna: any;

  constructor(scene: PaintingScene, obj: any) {
    super(scene, obj);
    this.dna = obj;
    this.addAnimation("idle", [0, 1, 2, 3, 4, 5, 6, 7]);
    this.addAnimation("walk", [8, 9, 10, 11, 12, 13, 14, 15]);
    this.position.set(0);
  }

  update() {
    if (this.target) {
      if (this.velocity.magnitude < 1) {
        this.velocity.copyFrom(this.target).subtract(this.position);
        this._lastDist = this.velocity.magnitude * 2;
        this.velocity.magnitude = 8;
        this.playAnimation("walk");
        if (this.velocity.x < 0) {
          this.scale.x = -Math.abs(this.scale.x);
        }
        if (this.velocity.x > 0) {
          this.scale.x = Math.abs(this.scale.x);
        }
      }
      let dist = Vector2.dispense();
      dist.copyFrom(this.target).subtract(this.position);
      if (dist.magnitude >= this._lastDist) {
        this.stop();
      } else {
        this._lastDist = dist.magnitude;
      }
      dist.recycle();
    }
    super.update();
    if (this.name === "Aye") {
      this.scene.camera.add(this.velocity).add(this.velocity);
      this.scene.camera.x = Math.min(this.scene.camera.x, this.position.x - 256);
      this.scene.camera.y = Math.min(this.scene.camera.y, this.position.y - 192);
      this.scene.camera.x = Math.max(this.scene.camera.x, this.position.x - this.scene.size.x + 256);
      this.scene.camera.y = Math.max(this.scene.camera.y, this.position.y - this.scene.size.y + 192);
    }
    if (this.animation !== this.animations["idle"]) {
      if (this.inkLeft < 1) this.inkLeft += .01;
    }
    this.order = 1024 + (this.position.y - topFrontier);
  }

  render() {
    if (this.sprite) {
      if (this.sprite.img.complete && !this._origSprite) this._prepSprite();
      (<any>this.sprite.img) = this._inkedSprite;
      this._updateSprite();
      this.sprite.draw(this.frame + 16, 0, this.offset);
      this.sprite.img = this._origSprite;
    }
    return super.render();
  }

  goTo(pos: Vector2) {
    if (!this.target) this.target = Vector2.dispense();
    this.target.copyFrom(pos);
    topFrontier = Math.min(topFrontier, pos.y);
  }

  stop() {
    if (this.target) {
      this.target.recycle();
      this.target = null;
      this.velocity.set(0);
      this.playAnimation("idle");
    }
  }

  sendPatch() {
    let obj: any = {
      ayes: {
        [this.scene.collab.peer.id]: {
          id: this.scene.collab.peer.id,
          target: this.target ? {
            x: this.target ? this.target.x : this.position.x,
            y: this.target ? this.target.y : this.position.y
          } : null,
          inkColor: this.inkColor,
          inkLeft: this.inkLeft
        }
      }
    };
    this.scene.sendPatch(obj);
  }


  /*
    _privates
  */
  private _lastDist: number;
  private _origSprite: HTMLImageElement;
  private _inkedSprite: HTMLCanvasElement;
  private _spriteCtx: CanvasRenderingContext2D;

  private _prepSprite() {
    this._origSprite = this.sprite.img;
    this._inkedSprite = document.createElement("canvas");
    this._inkedSprite.width = this._origSprite.width;
    this._inkedSprite.height = this._origSprite.height;
    let g = this._spriteCtx = <CanvasRenderingContext2D>this._inkedSprite.getContext("2d");
    g.drawImage(this._origSprite, 0, 0);
  }

  private _updateSprite() {
    if (!this._spriteCtx) return;
    let g = this._spriteCtx;
    g.globalCompositeOperation = "source-over";
    this.sprite.img.width += 0;
    g.drawImage(this._origSprite, 0, 0);
    g.globalCompositeOperation = "source-atop";
    g.fillStyle = this.inkColor;
    g.fillRect(this.sprite.img.width / 2, 0, this.sprite.img.width, this.sprite.img.height);
    g.globalCompositeOperation = "source-over";
    g.clearRect(this.sprite.img.width / 2, Math.random(), this.sprite.img.width, this.sprite.img.height * (1 - this.inkLeft));
    for (let x = this.sprite.img.width / 2; x < this.sprite.img.width; x++) {
      g.globalAlpha = Math.random();
      g.clearRect(x + Math.random(), 2 * Math.random() + this.sprite.img.height * (1 - this.inkLeft), 2, 1);
    }
  }

}
