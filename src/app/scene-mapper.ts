import { Scene } from 'phaser'

export interface SceneMapperConfig {
    scene: Scene,
    columns : number,
    rows: number
}

export class ScreenMapper {

    private gridWidth = 0
    private gridHeight = 0
    private halfGridWidth = 0
    private halfGridHeight = 0
    private scrWidth = 0
    private scrHeight = 0

    constructor(private config: SceneMapperConfig) {
        this.scrWidth = config.scene.game.config.width as number
        this.scrHeight = config.scene.game.config.height as number
        this.gridWidth = Math.floor(this.scrWidth / this.config.columns)
        this.gridHeight = Math.floor(this.scrHeight / this.config.rows)
        this.halfGridWidth = Math.floor(this.gridWidth / 2)
        this.halfGridHeight = Math.floor(this.gridHeight / 2)
    }

    placeObjectAt(x , y, obj: any) {
        obj.x = (x * this.gridWidth) + this.halfGridWidth
        obj.y = (y * this.gridHeight) + this.halfGridHeight
    }

    placeImageAt(x, y, key:string, opts:any) {
        let img = this.config.scene.add.image(0, 0, key)

        img = this.scaleObject(img, opts)

        this.placeObjectAt(x, y, img)

        return img
    }

    placeSpriteAt(x, y, key:string, opts:any) {
        let sprite = this.config.scene.add.sprite(0, 0, key)
        sprite = this.scaleObject(sprite, opts)
        this.placeObjectAt(x, y, sprite)

        return sprite
    }

    placeTextAt(x, y, msg: string, opts: any = {}) {
        const text = this.config.scene.add.text(0, 0, msg, {
            fontFamily: 'Nerko One',
            fontSize: '6em'
        })
        this.placeObjectAt(x, y, text)
    }

    scaleObject(img, opts) {
        if ('scaleX' in opts) {
            img.scaleX = opts['scaleX']
        }
        if ('scaleY' in opts) {
            img.scaleY = opts['scaleY']
        }
        if ('scaleToWidth' in opts) {
            img.displayWidth = Math.floor(this.scrWidth * opts['scaleToWidth'])
            img.scaleY = img.scaleX
        }
        if ('scaleToHeight' in opts) {
            img.displayHeight = Math.floor(this.scrHeight * opts['scaleToHeight'])
            img.scaleX = img.scaleY
        }
        return img
    }

    // helping with object placement
    drawGrids() {
        // get a copy of the graphics object
        const gc = this.config.scene.add.graphics()

        // set the pen characteristics
        gc.lineStyle(2, 0xff0000, 0.5)

        // draw columns
        for (let i = 0; i < this.config.columns; i++) {
            // move pen to first position
            gc.moveTo(i * this.gridWidth, 0)
            gc.lineTo(i * this.gridWidth, this.scrHeight)
        }

        // draw row
        for (let i = 0; i < this.config.rows; i++) {
            // move pen to first position
            gc.moveTo(0, i * this.gridHeight)
            gc.lineTo(this.scrWidth, i * this.gridHeight)
        }

        gc.strokePath()
    }
}