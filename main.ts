input.onButtonPressed(Button.A, function () {
    music.playMelody("A F E F D G E F ", 274)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.showString("Hello! I'm Dan")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Careful!")
})
