const { InputController } = require('./Input.controller');

const { Grid } = require('../entities/Grid.class');

class AppController {
    static process(filename) {
        const input = InputController.read(filename);
        const grid = new Grid(input.gridCoordinates);

        input.rocketConfiguration.forEach(rocket => {
            const rocketIndex = grid.addRocket(rocket);
            grid.commandRocket(rocketIndex, rocket.commandList)
        });

        return grid.rockets.map(rocket => {
            const { x, y } = rocket.coordinates; 

            return `${x} ${y} ${rocket.orientation}`;
        });
    }

    static run(filename) {
        AppController.process(filename)
            .map(rocket => {
                console.log(rocket);
            });
    }
}

module.exports = {
    AppController,
};
