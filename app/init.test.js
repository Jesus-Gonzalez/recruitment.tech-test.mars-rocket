jest.mock('./controllers/App.controller');
const { AppController } = require('./controllers/App.controller');

describe('project', () => {
    describe('init', () => {
        it('should have called AppController.run', () => {
            const spy = jest.spyOn(AppController, 'run');

            require('./init');
            
            expect(spy).toHaveBeenCalled();
        });
    });
});
