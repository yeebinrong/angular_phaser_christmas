import { Injectable } from '@angular/core';

import { Game } from 'phaser'

@Injectable()
export class GameService {

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
      parent: 'card',
      scene: [ ]
    })  
  }
}
