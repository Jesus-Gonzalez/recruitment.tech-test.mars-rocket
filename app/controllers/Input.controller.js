const fs = require('fs');

const returnRegex = /\r/g;

class InputController {
    static read() {
        let data;
        
        try {
            data = fs.readFileSync('input.dat')
            .toString()
            .split('\n')
            .map(line => line.replace(returnRegex, ''));
        } catch (err) {
            console.error('Error: input data file is empty or does not exist');
            throw new Error('InputController.read(file_not_found)');
        }

        const gridCoordinates = data[0];
        const rocketConfiguration = data.slice(1)
            .filter(s => s)
            .reduce((collection, _, index, arr) => {
                if ((index + 1) % 2 !== 0) {
                    return collection;
                }

                const [x, y, orientation] = arr[index - 1].split(' ');

                return collection.concat({
                    orientation,
                    coordinates: { x: +x, y: +y },
                    commandList: arr[index],
                });
            }, []);

        return {
            gridCoordinates,
            rocketConfiguration,
        }
    }
}

module.exports = {
    InputController,
};
