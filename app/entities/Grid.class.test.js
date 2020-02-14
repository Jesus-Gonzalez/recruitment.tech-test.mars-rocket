const { Grid } = require('./Grid.class');

describe('entities', () => {
    let grid;
    const testRocket = {
        coordinates: { x: 1, y: 2 },
        orientation: 'N',
        commandList: 'RMMLMLLLM',
    }

    describe('Grid', () => {
        beforeEach(() => {
            grid = new Grid(2, 2);
        });

        it('addRocket: should push a new rocket object to Grid.rockets', () => {
            expect(grid.rockets.length).toBe(0);
            grid.addRocket(testRocket);
            expect(grid.rockets.length).toBe(1);
        });

        it('commandRocket: should have command the rocket', () => {
            const rocketIndex = grid.addRocket(testRocket);
            const [rocket] = grid.rockets;
            const commandSpy = jest.spyOn(rocket, 'command');
            expect(commandSpy).not.toHaveBeenCalled();
            grid.commandRocket(rocketIndex, testRocket.commandList);
            expect(commandSpy).toHaveBeenCalled();
        });
    });
});
