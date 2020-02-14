const { InputController } = require('./Input.controller');

describe('controllers', () => {
    describe('Input', () => {
        it('read: should match snapshot', () => {
            expect(InputController.read('input.test.dat')).toMatchSnapshot();
        });
    });
});
