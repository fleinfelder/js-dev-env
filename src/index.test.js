import fs from 'fs';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('index.html', () => {
  test('says hello', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const { document } = (new JSDOM(index)).window;
    const h1 = document.querySelector('h1');
    expect(h1.innerHTML).toBe('Hello World!');
  });
});
