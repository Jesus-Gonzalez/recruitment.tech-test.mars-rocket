const Command = require('../enums/Command.enum');

const { Rocket } = require('./Rocket.class');

describe('entities', () => {
    let rocket;
    const configuration = {
        coordinates: { x: 1, y: 2 },
        orientation: 'N',
        commandList: 'RMMLMLLLM',
    }

    describe('Rocket', () => {
        beforeEach(() => {
            const {
                coordinates,
                orientation,
            } = configuration;

            rocket = new Rocket(Object.assign({}, coordinates), orientation);
        });

        it('constructor: should have configuration set on instance attributes', () => {
            expect(rocket.coordinates).toEqual(configuration.coordinates);
            expect(rocket.orientation).toBe(configuration.orientation);
        });

        it('command: should call setOrientation on [L,R] command', () => {
            const spy = jest.spyOn(rocket, 'setOrientation');
            expect(spy).not.toHaveBeenCalled();
            rocket.command(Command.Left);
            expect(spy).toHaveBeenCalled();

            spy.mockClear();
            expect(spy).not.toHaveBeenCalled();
            rocket.command(Command.Right);
            expect(spy).toHaveBeenCalled();
        });

        it('command: should call move on M command', () => {
            const spy = jest.spyOn(rocket, 'move');
            expect(spy).not.toHaveBeenCalled();
            rocket.command(Command.Move);
            expect(spy).toHaveBeenCalled();
        });

        it('setOrientation: should setOrientation on L code', () => {
            expect(rocket.orientation).toBe('N');
            rocket.setOrientation(Command.Left);
            expect(rocket.orientation).toBe('W');
            rocket.setOrientation(Command.Left);
            expect(rocket.orientation).toBe('S');
            rocket.setOrientation(Command.Left);
            expect(rocket.orientation).toBe('E');
            rocket.setOrientation(Command.Left);
            expect(rocket.orientation).toBe('N');
        });

        it('setOrientation: should setOrientation on R code', () => {
            expect(rocket.orientation).toBe('N');
            rocket.setOrientation(Command.Right);
            expect(rocket.orientation).toBe('E');
            rocket.setOrientation(Command.Right);
            expect(rocket.orientation).toBe('S');
            rocket.setOrientation(Command.Right);
            expect(rocket.orientation).toBe('W');
            rocket.setOrientation(Command.Right);
            expect(rocket.orientation).toBe('N');
        });

        it('move: should change coordinates y+1 on orientation N', () => {
            rocket.orientation = 'N';
            expect(rocket.coordinates).toEqual(configuration.coordinates);
            rocket.move();
            
            const expectedCoordinates = Object.assign({}, configuration.coordinates, {
                y: configuration.coordinates.y + 1,
            });
            
            expect(rocket.coordinates).toEqual(expectedCoordinates);
        });

        it('move: should change coordinates y-1 on orientation S', () => {
            rocket.orientation = 'S';
            expect(rocket.coordinates).toEqual(configuration.coordinates);
            rocket.move();
            
            const expectedCoordinates = Object.assign({}, configuration.coordinates, {
                y: configuration.coordinates.y - 1,
            });
            
            expect(rocket.coordinates).toEqual(expectedCoordinates);
        });

        it('move: should change coordinates x+1 on orientation E', () => {
            rocket.orientation = 'E';
            expect(rocket.coordinates).toEqual(configuration.coordinates);
            rocket.move();
            
            const expectedCoordinates = Object.assign({}, configuration.coordinates, {
                x: configuration.coordinates.x + 1,
            });
            
            expect(rocket.coordinates).toEqual(expectedCoordinates);
        });

        it('move: should change coordinates x-1 on orientation W', () => {
            rocket.orientation = 'W';
            expect(rocket.coordinates).toEqual(configuration.coordinates);
            rocket.move();
            
            const expectedCoordinates = Object.assign({}, configuration.coordinates, {
                x: configuration.coordinates.x - 1,
            });
            
            expect(rocket.coordinates).toEqual(expectedCoordinates);
        });
    });
});
