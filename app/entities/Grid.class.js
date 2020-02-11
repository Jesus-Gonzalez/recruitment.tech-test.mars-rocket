const { Rocket } = require('./Rocket.class');

class Grid {
    constructor(x, y) {
        this.dimensions = Object.freeze({ x, y });
        this.rockets = [];
        this.currentRocket = null;
    }

    addRocket(configuration) {
        const { coordinates, orientation, commandList } = configuration;

        const rocket = new Rocket(coordinates, orientation);

        this.rockets.push(rocket);

        this.currentRocket = rocket;

        this.processCommands(commandList);
    }

    processCommands(commandString) {
        commandString.split('')
            .forEach(code => this.currentRocket.command(code));
    }
}

module.exports = {
    Grid,
};
