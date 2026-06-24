# hitboxes# Hitbox Extension for MakeCode Arcade

Adds custom hitboxes to sprites with visualization and collision.

## Blocks
- Create Hitbox
- Draw All Hitboxes
- Set Hitboxes Visible
- Overlaps Any Hitbox

Example usage:
```typescript
let player = sprites.create(img`...`, SpriteKind.Player)
let playerHitbox = Hitbox.createHitbox(player, 12, 12, 2, 2) // smaller centered hitbox

game.onUpdate(() => {
    Hitbox.drawAll()
})
