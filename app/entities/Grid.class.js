const { Rocket } = require('./Rocket.class');

class Grid {
    constructor(x, y) {
        this.dimensions = Object.freeze({ x, y });
        this.rockets = [];
    }

    addRocket(configuration) {
        const { coordinates, orientation } = configuration;

        const rocket = new Rocket(coordinates, orientation);

        this.rockets.push(rocket);

        return this.rockets.length - 1;
    }

    commandRocket(index, commandList) {
        commandList.split('')
            .forEach(code => this.rockets[index].command(code));
    }
}

module.exports = {
    Grid,
};
