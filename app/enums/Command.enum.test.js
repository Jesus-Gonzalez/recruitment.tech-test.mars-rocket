const Command = require('./Command.enum');

describe('enums', () => {
    describe('Command', () => {
        it('should return the Command object', () => {
            expect(Command).toMatchSnapshot();
        });
    });
});
