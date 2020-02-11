const Orientation = require('../enums/Orientation.enum');
const Command = require('../enums/Command.enum');

const OrientationValues = Object.values(Orientation);

class Rocket {
    constructor(coordinates, orientation) {
        this.id = parseInt(Math.floor(Math.random() * 100));
        this.coordinates = coordinates;
        this.orientation = orientation;
    }

    command(code) {
        switch(code) {
            case Command.Left:
            case Command.Right: {
                this.setOrientation(code);
            }

            case Command.Move: {
                this.move();
            }
        }
    }

    setOrientation(orientation) {
        const rotation = orientation === Command.Left ? -1 : 1;

        const currentIndex = OrientationValues.indexOf(this.orientation);
        const nextIndex = currentIndex + rotation;

        let nextOrientationIndex = nextIndex;

        if (nextIndex < 0) {
            nextOrientationIndex = OrientationValues.length - 1;
        } else if (nextIndex > (OrientationValues.length - 1)) {
            nextOrientationIndex = 0;
        }

        this.orientation = OrientationValues[nextOrientationIndex];
    }

    move() {
        const nextCoordinates = {};
        
        switch (this.orientation) {
            case Orientation.North:
            case Orientation.South: {
                const factor = this.orientation === Orientation.South ? -1 : 1;
                Object.assign(nextCoordinates, { y: this.coordinates.y + factor })
                break;
            }

            case Orientation.East:
            case Orientation.West: {
                const factor = this.orientation === Orientation.West ? -1 : 1;
                Object.assign(nextCoordinates, { x: this.coordinates.x + factor })
                break;
            }
        }

        Object.assign(this.coordinates, nextCoordinates);
    }
}

module.exports = {
    Rocket,
};
