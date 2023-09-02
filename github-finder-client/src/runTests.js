const jest = require('jest');
const path = require('path');

const jestConfig = {
    roots: ['github-finder-client/src'],
};

const runTests = async () => {
    try {
        const currentDirectory = process.cwd();
        const parentDirectory = path.join(currentDirectory, '..');


        process.chdir(parentDirectory);

        const { results } = await jest.runCLI({}, [process.cwd()], jestConfig);
        console.log(results);

    } catch (error) {
        console.error('Error running tests:', error);
    }
};

// Define an async function and call it
(async () => {
    await runTests();
})();
