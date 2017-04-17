import jsdom from 'jsdom';
import fs from 'fs';

describe('index.html', () => {
  test('says hello', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function (err, window) {
      if (err) {
        console.log(err);
      } else {
        const h1 = window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).toBe('Hello World!');
      }
      window.close();
    });
  });
});
