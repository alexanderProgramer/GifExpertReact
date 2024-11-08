module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest',
      
    }, "testEnvironment": "jsdom",
    setupFiles:['./jest.setup.js']
  };