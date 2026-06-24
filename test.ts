//% color=#00BFFF weight=100 icon="\uf192"
namespace SpriteKind {
    export const Enemy = SpriteKind.create()
}

// Test sprites
let player: Sprite = null
let enemy: Sprite = null
let playerHitbox: Hitbox.HitBox = null

// Create player
player = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 5 5 5 5 . . . . . .
    . . . . . 5 5 5 5 5 5 . . . . .
    . . . . 5 5 5 5 5 5 5 5 . . . .
    . . . . 5 5 5 5 5 5 5 5 . . . .
    . . . . 5 5 5 5 5 5 5 5 . . . .
    . . . . 5 5 5 5 5 5 5 5 . . . .
    . . . . . 5 5 5 5 5 5 . . . . .
    . . . . . . 5 5 5 5 . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)

player.setPosition(80, 60)
controller.moveSprite(player, 120, 120)

// Create enemy
enemy = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 2 2 2 2 . . . . . .
    . . . . . 2 2 2 2 2 2 . . . . .
    . . . . 2 2 2 2 2 2 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 2 . . . .
    . . . . . 2 2 2 2 2 2 . . . . .
    . . . . . . 2 2 2 2 . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Enemy)

enemy.setPosition(30, 30)
enemy.setVelocity(40, 30)

// Create custom hitbox for player (smaller than sprite)
playerHitbox = Hitbox.createHitbox(player, 12, 14, 2, 1)

// Enable debug mode
Hitbox.setVisible(true)

game.onUpdate(function () {
    // Always draw hitboxes for debugging
    Hitbox.drawAll()

    // Collision using custom hitbox
    if (playerHitbox.overlaps(enemy)) {
        info.changeScoreBy(10)
        enemy.setPosition(randint(10, 150), randint(10, 110))
        enemy.setVelocity(randint(-60, 60), randint(-60, 60))
    }
})

// Enemy movement
game.onUpdateInterval(800, function () {
    if (Math.percentChance(70)) {
        enemy.vx = randint(-50, 50)
        enemy.vy = randint(-50, 50)
    }
})

info.setScore(0)
scene.setBackgroundColor(9)

game.splash("Hitbox Extension Test", "Use arrow keys to move\nHit the red enemy!")
