import { Injectable } from '@angular/core';

import { Game } from 'phaser'
import { CardScene } from './scenes/card.scene';

@Injectable()
export class GameService {
  message = ''
  created = false
  game: Game

  constructor() { }

  createGame(width = 800, height = 600) {
    if (this.created)
      return

    // create the game
    this.game = new Game({
      width, height,
      type: Phaser.AUTO, // type of canvas to use
      parent: 'card', // <div id="card"></div>
      scene: [ CardScene ]
    })  
  }
}
