var five = require('johnny-five');
var board = five.Board();

board.on('ready', function() {
    var leds = five.Led([12]); // match the board number
    var pinButtons = [2];
    var piezo = new five.Piezo(11);
    var buttons = new five.Buttons({
        pins: pinButtons,
        invert: false
    });
    
    buttons.on("press", function(button) {
        console.log('Pressed Pin : ', button.pin);
        leds.on();
        piezo.play({
            song: 'C4'
        });
    });

    buttons.on("release", function(button) {
        console.log('Released Pin: ' , button.pin);
        leds.off();
        piezo.off();
    });
});