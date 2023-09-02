const path = require('path');
const execa = require('execa'); // Require execa to run npm commands programmatically

const runTests = async () => {
    try {
        const { stdout } = await execa('npm', ['run test'], { stdio: 'pipe' });

        console.log(stdout);
        return stdout; // Return the test results

    } catch (error) {
        console.error('Error running tests:', error);
        throw error; // Rethrow the error if the tests fail
    }
};

// Define an async function and call it
(async () => {
    try {
        const testResults = await runTests();
        console.log('Test results:', testResults);
    } catch (error) {
        console.error('Failed to run tests:', error);
    }
})();
