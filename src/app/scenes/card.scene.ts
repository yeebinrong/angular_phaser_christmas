import { Scene } from 'phaser'
import { ANIMS_BONFIRE, AUDIO_AWAY_IN_A_MANGER, Globals, IMG_ANGEL_GABRIEL, IMG_ANGEL_GABRIEL_BW, IMG_BABY_JESUS, IMG_BACKGROUND, IMG_BONFIRE, IMG_CHRISTMAS_LOGO, IMG_DONKEY, IMG_JOSEPH, IMG_MARY, IMG_SHEPARDS, IMG_THREE_WISE_MEN, SCENE_CARD } from '../constants'
import { GameService } from '../game.service'
import { ScreenMapper } from '../scene-mapper'

export class CardScene extends Scene {

    private gameSvc: GameService

    constructor() {
        super(SCENE_CARD)
        // lookup game service
        this.gameSvc = Globals.injector.get(GameService)
        console.info("HELLO TEST ", this.gameSvc.message)
    }

    // load resources
    preload() {
        // load background
        this.load.image(IMG_BACKGROUND, 'assets/nativity/background.png')
        this.load.image(IMG_CHRISTMAS_LOGO, 'assets/merry_christmas.png')
        this.load.image(IMG_BABY_JESUS, 'assets/nativity/baby_jesus.png')
        this.load.image(IMG_ANGEL_GABRIEL, 'assets/angel_gabriel.png')
        this.load.image(IMG_ANGEL_GABRIEL_BW, 'assets/angel_gabriel_bw.png')
        this.load.image(IMG_DONKEY, 'assets/donkey.png')
        this.load.image(IMG_JOSEPH, 'assets/joseph.png')
        this.load.image(IMG_MARY, 'assets/mary.png')
        this.load.image(IMG_SHEPARDS, 'assets/shepherds.png')
        this.load.image(IMG_THREE_WISE_MEN, 'assets/three_wise_men.png')
        this.load.spritesheet(IMG_BONFIRE, 'assets/bonfire.png', {
            frameWidth: 230, frameHeight: 312
        })
        this.load.audio(AUDIO_AWAY_IN_A_MANGER, [
            'assets/audio/away_in_a_manger.mp3',
            'assets/audio/away_in_a_manger.ogg',
        ])
    }

    // create game objects
    create() {
        const mapper = new ScreenMapper({
            scene: this,
            columns: 11,
            rows: 11
        })

        this.anims.create({
            key: ANIMS_BONFIRE,
            frames: this.anims.generateFrameNumbers(IMG_BONFIRE, { start: 0 }),
            frameRate: 8,
            repeat: -1
        })

        let bg = mapper.placeImageAt(5, 5, IMG_BACKGROUND, { scaleX: 1.2, scaleY: 1.2 })
        let angel_gabriel = mapper.placeImageAt(4.5, 4.5, IMG_ANGEL_GABRIEL, { scaleX: 0.65, scaleY: 0.65 })
        let angel_gabriel_bw = mapper.placeImageAt(4.5, 4.5, IMG_ANGEL_GABRIEL_BW, { scaleX: 0.65, scaleY: 0.65 })
        let joseph = mapper.placeImageAt(5.3, 5.8, IMG_JOSEPH, { scaleX: 0.6, scaleY: 0.6})
        let mary = mapper.placeImageAt(3.8, 6.3, IMG_MARY, { scaleX: 0.43, scaleY: 0.43})
        let shepards = mapper.placeImageAt(2.4, 5.8, IMG_SHEPARDS, { scaleX: 0.7, scaleY: 0.7})
        let three_wise_men = mapper.placeImageAt(6.9, 5.8, IMG_THREE_WISE_MEN, { scaleX: 0.7, scaleY: 0.7})
        let donkey = mapper.placeImageAt(3, 7.2, IMG_DONKEY, { scaleX: 0.3, scaleY: 0.3 })
        let bby = mapper.placeImageAt(4.7, 7.2, IMG_BABY_JESUS, { scaleX: 0.2, scaleY: 0.2})
        let merry_christmas = mapper.placeImageAt(5, 1, IMG_CHRISTMAS_LOGO, { scaleX: 0.5, scaleY: 0.5})
        let bonfire = mapper.placeSpriteAt(8, 7, IMG_BONFIRE, {scaleToWidth: .15})
        bonfire.play(ANIMS_BONFIRE)

        // mapper.drawGrids()

        angel_gabriel_bw.setInteractive()
        angel_gabriel_bw.on('pointerover', () => {
            this.add.tween({
                targets: angel_gabriel_bw,
                duration: 500,
                alpha: 0
            })
        })
        angel_gabriel_bw.on('pointerout', () => {
            this.add.tween({
                targets: angel_gabriel_bw,
                duration: 500,
                alpha: 1
            })
        })

        let music = this.sound.add(AUDIO_AWAY_IN_A_MANGER, {
            volume: .6,
            loop: true
        })
        music.play(AUDIO_AWAY_IN_A_MANGER)

        let message = mapper.placeTextAt(0, 8, this.gameSvc.message)
    }

    // game loop
    update() {
        
    }
}