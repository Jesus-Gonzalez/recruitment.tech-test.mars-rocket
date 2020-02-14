
const Orientation = require('./Orientation.enum');

describe('enums', () => {
    describe('Orientation', () => {
        it('should return the Orientation object', () => {
            expect(Orientation).toMatchSnapshot();
        });
    });
});
