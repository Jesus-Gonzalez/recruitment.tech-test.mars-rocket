const { InputController } = require('./Input.controller');

const { Grid } = require('../entities/Grid.class');

class AppController {
    static run() {
        const input = InputController.read();
        const grid = new Grid(input.gridCoordinates);

        input.rocketConfiguration.forEach(rocket => grid.addRocket(rocket));

        grid.rockets.forEach(rocket => {
            const { x, y } = rocket.coordinates; 

            console.log(`${x} ${y} ${rocket.orientation}`);
        });
    }
}

module.exports = {
    AppController,
};
