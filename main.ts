// spriteutils.draw_transparent_image(blocks[0], screen2, 4, 100)
spriteutils.createRenderable(99, function (screen2) {
    screen2.fillRect(2, 98, 20, 20, 8)
    screen2.drawRect(2, 98, 20, 20, 3)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    blocks = [sprites.create(img`
        . . . f f f f f f . . . . . . . 
        . . . f 7 7 7 7 f . . . . . . . 
        f f f f 7 7 7 7 f f f . . . . . 
        f 7 7 7 7 7 7 7 7 7 f . . . . . 
        f 7 7 7 7 7 7 7 7 7 f f f . . . 
        f 7 7 f 7 7 7 f 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f f f f 
        f 7 7 f 7 7 7 f 7 7 7 7 7 7 7 f 
        f 7 7 f 7 7 7 f 7 7 7 7 f f f f 
        f 7 7 f f f f f 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f f . . 
        f f f f f 7 7 7 7 7 7 7 7 f . . 
        . . . . f f f f f f f f f f . . 
        `, SpriteKind.Player), sprites.create(img`
        . . . . f f f f f f f f f f . . 
        f f f f f 7 7 7 7 7 7 7 7 f . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f f . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 f 7 7 7 f 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 f 7 7 7 f 7 7 7 f f f f 
        f 7 7 7 f 7 7 7 f 7 7 7 7 7 7 f 
        f 7 7 7 f f f f f 7 7 7 f f f f 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 f f f . . . 
        f 7 7 7 7 7 7 7 7 7 f . . . . . 
        f f f f 7 7 7 7 f f f . . . . . 
        . . . f 7 7 7 7 f . . . . . . . 
        . . . f f f f f f . . . . . . . 
        `, SpriteKind.Player), sprites.create(img`
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f f f 
        f f 7 7 7 f 7 7 7 f 7 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 f 7 7 7 f 7 7 7 7 7 f 
        f 7 7 7 7 f 7 7 7 f 7 7 7 7 7 f 
        f 7 7 7 7 f f f f f 7 7 7 f f f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
        f 7 7 7 7 7 7 7 7 7 7 f f f . . 
        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
        f 7 f f f f f f 7 f f f . . . . 
        f f f . . . . f 7 f . . . . . . 
        . . . . . . . f 7 f . . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Player), sprites.create(img`
        . . . . . . f f f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . f f f 
        . . . . f f f 7 f f f f f f 7 f 
        . . . . f 7 7 7 7 7 7 7 7 7 7 f 
        . . f f f 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f f f 7 7 7 f 7 7 7 f 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 7 f 7 7 7 f 7 7 7 7 f 
        f 7 7 7 7 7 f 7 7 7 f 7 7 7 7 f 
        f 7 7 7 7 7 f f f f f 7 7 7 f f 
        f f f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f f f f f f f f f f f f . 
        `, SpriteKind.Player)]
    controller.moveSprite(blocks[0])
    controller.moveSprite(blocks[1])
    controller.moveSprite(blocks[2])
    controller.moveSprite(blocks[3])
})
let blocks: Sprite[] = []
tiles.setTilemap(tilemap`level1`)
