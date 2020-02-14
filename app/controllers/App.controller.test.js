const { AppController } = require('./App.controller');

describe('controllers', () => {
    describe('App', () => {
        it('run: should call console.log', () => {
            AppController.run('input.test.dat');
            expect(console.log).toHaveBeenCalled();
        });
    });
});
